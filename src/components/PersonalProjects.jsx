import { ArrowRight, FlaskConical } from 'lucide-react'
import { Link } from 'react-router-dom'
import Section from './Section'
import Reveal from './Reveal'
import FeatureList from './FeatureList'
import TechStack from './TechStack'
import { StatusBadge, ProjectLinks } from './LabProjectMeta'
import { personalProjects } from '../content/personalProjects'

const PersonalProjects = () => {
  return (
    <Section
      id="personal-projects"
      index="04"
      title="The lab"
      description="Side projects I'm building with passion and creativity."
    >
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {personalProjects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 2) * 100}>
            <article className="glass-card glass-card-hover card-shine group flex h-full flex-col p-7">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="min-w-0">
                  <h3 className="flex items-center gap-2.5 font-display text-xl font-bold">
                    <FlaskConical size={18} className="text-primary" />
                    <Link
                      to={`/the-labs/${project.id}`}
                      className="transition-colors group-hover:text-primary"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <div className="mt-2 flex items-center gap-2">
                    <StatusBadge status={project.status} />
                    <span className="font-mono text-xs text-muted-foreground/60">
                      {project.year}
                    </span>
                  </div>
                </div>

                <ProjectLinks liveUrl={project.liveUrl} githubUrl={project.githubUrl} />
              </div>

              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="flex-1">
                <FeatureList features={project.keyFeatures} />
              </div>

              <TechStack technologies={project.technologies} />

              <Link
                to={`/the-labs/${project.id}`}
                className="mt-6 inline-flex items-center gap-2 self-start font-mono text-sm text-primary transition-colors hover:text-primary/80"
              >
                read the case study
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export default PersonalProjects
