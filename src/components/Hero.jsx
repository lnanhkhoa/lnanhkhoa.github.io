import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react'
import { profile } from '../content/profile'
import Reveal from './Reveal'
import Terminal from './Terminal'

const socials = [
  { href: profile.github, icon: Github, label: 'GitHub' },
  { href: profile.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' }
]

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-32 pb-16">
      <div className="container mx-auto">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
          {/* Left — identity */}
          <div>
            <Reveal>
              <div className="glass-card mb-8 inline-flex items-center gap-2.5 rounded-full px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse-dot" />
                <span className="font-mono text-xs text-muted-foreground">
                  open to work
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <p className="mb-4 font-mono text-sm text-primary/90">
                {'//'} {profile.title} — {profile.location}
              </p>
              <h1 className="font-display text-6xl font-bold tracking-tight md:text-8xl">
                Khoa Le<span className="text-primary text-glow">.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 font-medium text-primary-foreground transition-all duration-200 hover:shadow-glow hover:brightness-110 cursor-pointer"
                >
                  Get in touch
                  <ArrowDown size={18} className="-rotate-90" />
                </a>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card glass-card-hover inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-medium text-foreground cursor-pointer"
                >
                  <Download size={18} className="text-primary" />
                  Resume
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex gap-3">
                {socials.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="glass-card glass-card-hover flex h-11 w-11 items-center justify-center rounded-2xl text-muted-foreground hover:text-primary cursor-pointer"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — interactive terminal */}
          <Reveal delay={400} className="hidden lg:block">
            <Terminal />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Hero
