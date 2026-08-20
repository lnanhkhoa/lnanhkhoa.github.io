import { Calendar, MapPin, Users, Trophy, Code, Briefcase, TrendingUp, Star } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { experiences, experienceStats } from '../content/experience'

const impactStyles = {
  High: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/25',
  'Medium-High': 'text-sky-400 bg-sky-400/10 border-sky-400/25',
  Medium: 'text-amber-400 bg-amber-400/10 border-amber-400/25'
}

const roleIcons = {
  'Senior Leadership': Star,
  'Senior Individual Contributor': TrendingUp,
  'Individual Contributor': Code,
  'Solo Contributor': Briefcase
}

const getImpactStyle = (impact) =>
  impactStyles[impact] || 'text-muted-foreground bg-white/5 border-white/10'

const getRoleIcon = (level) => roleIcons[level] || Code

const summaryStats = [
  { value: `${experienceStats.years}+`, color: 'text-primary', label: 'Years experience' },
  { value: experienceStats.companies, color: 'text-emerald-400', label: 'Companies' },
  { value: `${experienceStats.projects}+`, color: 'text-violet-400', label: 'Projects' },
  { value: experienceStats.teamLeadYears, color: 'text-amber-400', label: 'Years as team lead' }
]

const Experience = () => {
  return (
    <Section
      id="experience"
      index="03"
      title="Professional experience"
      description="7+ years of full-stack development with a focus on back-end architecture and team leadership."
    >
      {/* Summary Stats */}
      <Reveal>
        <div className="mb-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {summaryStats.map((stat) => (
            <div key={stat.label} className="glass-card card-shine p-6 text-center">
              <div className={`font-display text-3xl font-bold tabular-nums ${stat.color}`}>
                {stat.value}
              </div>
              <div className="mt-1 font-mono text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Company cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((company, companyIndex) => (
          <Reveal key={company.company} delay={(companyIndex % 2) * 100}>
            <article className="glass-card glass-card-hover card-shine group h-full overflow-hidden">
              {/* Company header */}
              <header className="relative border-b border-white/[0.06] p-6">
                <div className="absolute inset-y-0 left-0 w-[3px] rounded-r bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-bold">{company.company}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {company.companyDescription}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                    {company.totalDuration}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={13} className="text-primary/70" />
                    {company.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={13} className="text-primary/70" />
                    {company.location}
                  </span>
                </div>
              </header>

              {/* Roles */}
              <div className="p-6">
                {company.roles.map((role, roleIndex) => {
                  const RoleIcon = getRoleIcon(role.level)
                  return (
                    <div
                      key={roleIndex}
                      className={roleIndex > 0 ? 'mt-7 border-t border-white/[0.06] pt-7' : ''}
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                          <RoleIcon size={16} />
                        </span>
                        <div>
                          <h4 className="font-semibold leading-tight">{role.title}</h4>
                          <p className="font-mono text-xs text-muted-foreground">{role.level}</p>
                        </div>
                      </div>

                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs text-muted-foreground">
                          {role.period}
                        </span>
                        {/* <span
                          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${getImpactStyle(role.impact)}`}
                        >
                          <Trophy size={11} />
                          {role.impact}
                        </span> */}
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Users size={12} />
                          {role.teamSize}
                        </span>
                      </div>

                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                        {role.description}
                      </p>

                      <ul className="mb-4 space-y-2">
                        {role.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm">
                            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-primary" />
                            <span className="leading-relaxed text-foreground/80">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {role.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export default Experience
