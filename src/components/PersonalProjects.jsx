import { ExternalLink, Github, FlaskConical } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import FeatureList from './FeatureList'
import TechStack from './TechStack'
import { personalProjects } from '../content/personalProjects'

const statusStyles = {
  'In Development': 'border-amber-400/25 bg-amber-400/10 text-amber-300',
  Live: 'border-emerald-400/25 bg-emerald-400/10 text-emerald-300'
}

const PersonalProjects = () => {
  return (
    <Section
      id="personal-projects"
      index="05"
      title="The lab"
      description="Side projects I'm building with passion and creativity."
    >
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {personalProjects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 2) * 100}>
            <article className="glass-card glass-card-hover card-shine group flex h-full flex-col p-7">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="min-w-0">
                  <h3 className="flex items-center gap-2.5 font-display text-xl font-bold">
                    <FlaskConical size={18} className="text-primary" />
                    <span className="transition-colors group-hover:text-primary">
                      {project.title}
                    </span>
                  </h3>
                  <div className="mt-2 flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-xs ${statusStyles[project.status] || 'border-white/10 bg-white/5 text-muted-foreground'}`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      {project.status}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground/60">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex shrink-0 gap-2">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-glow-sm cursor-pointer"
                    >
                      <ExternalLink size={13} />
                      live
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-muted-foreground/50">
                      <ExternalLink size={13} />
                      not-ready
                    </span>
                  )}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-white/25 hover:text-foreground cursor-pointer"
                    >
                      <Github size={13} />
                      code
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-muted-foreground/50">
                      <Github size={13} />
                      private
                    </span>
                  )}
                </div>
              </div>

              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="flex-1">
                <FeatureList features={project.keyFeatures} />
              </div>

              <TechStack technologies={project.technologies} />
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export default PersonalProjects
