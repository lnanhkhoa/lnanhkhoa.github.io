import {
  Server,
  Layers,
  Database,
  Monitor,
  Users,
  Cpu,
  GitBranch,
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { profile, workPreferences } from '../content/profile'

const whatIDo = [
  { icon: Server, label: 'Back-end API Development' },
  { icon: Layers, label: 'Microservices Architecture' },
  { icon: Monitor, label: 'Front-end Development' },
  { icon: Users, label: 'Code Review & Mentoring' }
]

const interests = [
  { icon: Cpu, label: 'System Architecture' },
  { icon: GitBranch, label: 'Open Source' },
  { icon: Sparkles, label: 'Building systems with AI' }
]

const About = () => {
  return (
    <Section id="about" index="01" title="About me" className="py-20 md:py-28">
      <div className="grid gap-6 md:grid-cols-3">
        {/* Intro — wide card */}
        <Reveal className="md:col-span-2">
          <div className="glass-card card-shine h-full p-8">
            <p className="text-lg leading-relaxed text-foreground/90">
              I&apos;m a senior full-stack developer with a strong focus on the
              back-end. Over the past 7 years I&apos;ve built production systems
              for HR, B2B SaaS, and insurtech — the kind where reliability and
              performance matter.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              My core stack is Node.js and TypeScript, mostly in microservice
              architectures — designing APIs, data models, and background jobs.
              On the front-end, I use React to build intuitive interfaces on top
              of those systems.
            </p>
          </div>
        </Reveal>

        {/* Now card */}
        <Reveal delay={100}>
          <div className="glass-card card-shine flex h-full flex-col justify-between gap-6 p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              currently
            </span>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse-dot" />
                <span className="font-medium">{workPreferences.status}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={16} className="shrink-0 text-primary/70" />
                {profile.location}
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock size={16} className="shrink-0 text-primary/70" />
                7+ years of experience
              </div>
            </div>
          </div>
        </Reveal>

        {/* What I do — wide card */}
        <Reveal delay={150} className="md:col-span-2">
          <div className="glass-card card-shine h-full p-8">
            <h3 className="mb-6 font-display text-xl font-semibold">What I do</h3>
            <ul className="grid gap-4 sm:grid-cols-2">
              {whatIDo.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <Icon size={18} />
                  </span>
                  <span className="text-sm text-foreground/90">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Interests */}
        <Reveal delay={250}>
          <div className="glass-card card-shine h-full p-8">
            <h3 className="mb-6 font-display text-xl font-semibold">Interests</h3>
            <div className="flex flex-wrap gap-2.5">
              {interests.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                >
                  <Icon size={14} className="text-primary" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

export default About
