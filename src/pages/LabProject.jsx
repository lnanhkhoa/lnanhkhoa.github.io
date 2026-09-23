import { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, FlaskConical, X } from 'lucide-react'
import Reveal from '../components/Reveal'
import { StatusBadge, ProjectLinks } from '../components/LabProjectMeta'
import { personalProjects, findPersonalProject } from '../content/personalProjects'

const DEFAULT_TITLE = document.title

const SectionLabel = ({ children }) => (
  <h2 className="mb-5 flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-primary">
    <span>{children}</span>
    <span className="h-px w-10 bg-primary/40" aria-hidden="true" />
  </h2>
)

// Full-screen image viewer with keyboard navigation (Esc / ← / →).
const Lightbox = ({ screenshots, index, onClose, onChange }) => {
  const shot = screenshots[index]
  const step = useCallback(
    (delta) => onChange((index + delta + screenshots.length) % screenshots.length),
    [index, onChange, screenshots.length]
  )

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose, step])

  const navButton =
    'absolute top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/80 transition-colors hover:text-primary cursor-pointer'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={shot.caption}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm md:p-12"
    >
      <figure className="flex max-h-full max-w-6xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <img
          src={shot.src}
          alt={shot.caption}
          className="max-h-[80vh] w-auto rounded-xl border border-white/10 object-contain"
        />
        <figcaption className="mt-4 text-center font-mono text-xs text-muted-foreground">
          {shot.caption} <span className="text-primary/70">· {index + 1}/{screenshots.length}</span>
        </figcaption>
      </figure>
      <button type="button" aria-label="Close" onClick={onClose} className={`${navButton} right-4 top-8 translate-y-0`}>
        <X size={20} />
      </button>
      {screenshots.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous screenshot"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
            className={`${navButton} left-4`}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            aria-label="Next screenshot"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
            className={`${navButton} right-4`}
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}
    </div>
  )
}

const Screenshot = ({ shot, onOpen, className = '' }) => (
  <figure className={className}>
    <button
      type="button"
      onClick={onOpen}
      className="glass-card glass-card-hover block w-full overflow-hidden p-1.5 cursor-zoom-in"
    >
      <img src={shot.src} alt={shot.caption} loading="lazy" className="w-full rounded-xl" />
    </button>
    <figcaption className="mt-2.5 font-mono text-xs text-muted-foreground">{shot.caption}</figcaption>
  </figure>
)

const NotFound = () => (
  <section className="flex min-h-[70vh] items-center pt-32 pb-20">
    <div className="container mx-auto px-6 text-center">
      <p className="font-mono text-sm text-primary">404</p>
      <h1 className="mt-3 font-display text-4xl font-bold">Project not found</h1>
      <p className="mt-4 text-muted-foreground">This experiment isn&apos;t in the lab.</p>
      <Link
        to="/#personal-projects"
        className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-primary/80"
      >
        <ArrowLeft size={15} />
        back to the lab
      </Link>
    </div>
  </section>
)

function LabProject() {
  const { projectId } = useParams()
  const project = findPersonalProject(projectId)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  useEffect(() => {
    window.scrollTo(0, 0)
    setLightboxIndex(null)
    document.title = project ? `${project.title} — The lab · Khoa Le` : DEFAULT_TITLE
    return () => {
      document.title = DEFAULT_TITLE
    }
  }, [project])

  if (!project) return <NotFound />

  const screenshots = project.screenshots || []
  const [cover, ...rest] = screenshots
  const desktopShots = rest.filter((shot) => !shot.mobile)
  const mobileShots = rest.filter((shot) => shot.mobile)
  const indexOf = (shot) => screenshots.indexOf(shot)

  const position = personalProjects.indexOf(project)
  const next = personalProjects[(position + 1) % personalProjects.length]

  return (
    <main className="pt-32 pb-20 md:pt-40">
      <div className="container mx-auto px-6">
        {/* Header */}
        <Reveal>
          <Link
            to="/#personal-projects"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={15} />
            the lab
          </Link>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <StatusBadge status={project.status} />
                <span className="font-mono text-xs text-muted-foreground/60">{project.year}</span>
              </div>
              <h1 className="flex items-center gap-3 font-display text-4xl font-bold tracking-tight md:text-6xl">
                <FlaskConical className="h-8 w-8 shrink-0 text-primary md:h-11 md:w-11" />
                {project.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>
            <ProjectLinks liveUrl={project.liveUrl} githubUrl={project.githubUrl} />
          </div>
        </Reveal>

        {/* Cover */}
        {cover && (
          <Reveal className="mt-12">
            <Screenshot shot={cover} onOpen={() => setLightboxIndex(0)} />
          </Reveal>
        )}

        {/* Overview + stack */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <Reveal>
              <SectionLabel>overview</SectionLabel>
              <div className="space-y-4 leading-relaxed text-foreground/80">
                {(project.overview || [project.description]).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            {project.highlights?.length > 0 && (
              <Reveal className="mt-14">
                <SectionLabel>highlights</SectionLabel>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.highlights.map((item) => (
                    <div key={item.title} className="glass-card card-shine p-5">
                      <h3 className="font-display text-base font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {project.sections?.map((section) => (
              <Reveal key={section.title} className="mt-14">
                <SectionLabel>{section.title}</SectionLabel>
                <p className="leading-relaxed text-foreground/80">{section.body}</p>
              </Reveal>
            ))}
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="glass-card card-shine p-6">
                <h2 className="mb-5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  tech stack
                </h2>
                <dl className="space-y-4">
                  {(project.stack || [{ layer: 'Built with', items: project.technologies }]).map(
                    (group) => (
                      <div key={group.layer}>
                        <dt className="mb-2 font-mono text-xs text-primary/80">{group.layer}</dt>
                        <dd className="flex flex-wrap gap-1.5">
                          {group.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-muted-foreground"
                            >
                              {item}
                            </span>
                          ))}
                        </dd>
                      </div>
                    )
                  )}
                </dl>
              </div>
            </Reveal>
          </aside>
        </div>

        {/* Gallery */}
        {rest.length > 0 && (
          <section className="mt-20">
            <Reveal>
              <SectionLabel>screenshots</SectionLabel>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {desktopShots.map((shot, i) => (
                <Reveal key={shot.src} delay={(i % 2) * 100}>
                  <Screenshot shot={shot} onOpen={() => setLightboxIndex(indexOf(shot))} />
                </Reveal>
              ))}
            </div>
            {mobileShots.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-6">
                {mobileShots.map((shot) => (
                  <Reveal key={shot.src}>
                    <Screenshot
                      shot={shot}
                      onOpen={() => setLightboxIndex(indexOf(shot))}
                      className="w-60"
                    />
                  </Reveal>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Next project */}
        {next !== project && (
          <Reveal className="mt-24">
            <Link
              to={`/the-labs/${next.id}`}
              className="glass-card glass-card-hover card-shine group flex items-center justify-between gap-6 p-7"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  next experiment
                </p>
                <p className="mt-2 font-display text-2xl font-bold transition-colors group-hover:text-primary">
                  {next.title}
                </p>
              </div>
              <ArrowRight
                size={22}
                className="shrink-0 text-primary transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          screenshots={screenshots}
          index={lightboxIndex}
          onClose={closeLightbox}
          onChange={setLightboxIndex}
        />
      )}
    </main>
  )
}

export default LabProject
