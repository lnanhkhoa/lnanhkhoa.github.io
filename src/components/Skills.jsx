import { Server, Code, Database, Cloud } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { skillCategories } from '../content/skills'

const categoryIcons = {
  'Back-end': Server,
  'Front-end': Code,
  Database: Database,
  'Infra & Tooling': Cloud
}

// Skills at or above this proficiency are the ones I work in daily; they get
// the accent treatment so the core stack is readable at a glance.
const CORE_LEVEL = 85

const Skills = () => {
  return (
    <Section
      id="skills"
      index="02"
      title="Skills & technologies"
      description="The stack I reach for when building production systems."
    >
      <Reveal>
        <div className="glass-card card-shine overflow-hidden">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[category.title]
            return (
              <div
                key={category.title}
                className={`grid gap-4 p-6 md:grid-cols-[220px_1fr] md:items-center md:gap-8 md:p-8 ${
                  index > 0 ? 'border-t border-white/[0.07]' : ''
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <Icon size={16} />
                  </span>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`rounded-full border px-3.5 py-2 font-mono text-xs transition-colors ${
                        skill.level >= CORE_LEVEL
                          ? 'border-primary/30 bg-primary/10 text-primary'
                          : 'border-white/10 bg-white/[0.04] text-foreground/70 hover:border-white/20'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </Reveal>

      <Reveal delay={100}>
        <p className="mt-5 flex items-center gap-2.5 font-mono text-xs text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary/70" />
          core stack — used daily in production
        </p>
      </Reveal>
    </Section>
  )
}

export default Skills
