import { ExternalLink, ArrowUpRight } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import FeatureList from './FeatureList'
import TechStack from './TechStack'
import { projects } from '../content/projects'

const Projects = () => {
  return (
    <Section
      id="projects"
      index="04"
      title="Featured work"
      description="Production systems I've designed and shipped with teams."
    >
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 2) * 100}>
            <article className="glass-card glass-card-hover card-shine group h-full p-7">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 font-mono text-xs text-muted-foreground">
                    {project.company} <span className="text-primary/60">·</span> {project.role}
                  </p>
                </div>
                <div className="shrink-0 text-right font-mono text-xs leading-relaxed text-muted-foreground">
                  <div>{project.period}</div>
                  <div className="text-muted-foreground/60">{project.teamSize}</div>
                </div>
              </div>

              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <FeatureList features={project.keyFeatures} />

              <TechStack
                technologies={project.technologies}
                highlightPrefix="AWS "
                highlightClassName="border border-amber-400/25 bg-amber-400/10 text-amber-300"
              />

              {project.liveUrl && (
                <div className="mt-5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:shadow-glow-sm cursor-pointer"
                  >
                    <ExternalLink size={15} />
                    View live project
                    <ArrowUpRight size={14} className="opacity-60" />
                  </a>
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export default Projects
