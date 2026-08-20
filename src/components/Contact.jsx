import { Mail, Phone, MapPin, Github, Linkedin, Briefcase, Clock, Languages, Layers, FileText } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { profile, workPreferences } from '../content/profile'

const contactChannels = [
  { icon: Mail, label: 'email', value: profile.email, href: `mailto:${profile.email}` },
  {
    icon: Phone,
    label: 'phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`
  },
  { icon: MapPin, label: 'location', value: profile.location }
]

const socials = [
  { icon: Github, label: 'GitHub', href: profile.github },
  { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin }
]

const ChannelIcon = ({ icon: Icon }) => (
  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
    <Icon size={18} />
  </span>
)

// One labelled row inside the working-preferences card.
const PreferenceRow = ({ icon: Icon, label, children }) => (
  <div className="flex gap-4">
    <Icon size={16} className="mt-0.5 shrink-0 text-primary/70" />
    <div>
      <span className="block font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <div className="mt-1.5 text-foreground/90">{children}</div>
    </div>
  </div>
)

const Chips = ({ items }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item) => (
      <span
        key={item}
        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-foreground/80"
      >
        {item}
      </span>
    ))}
  </div>
)

const Contact = () => {
  return (
    <Section
      id="contact"
      index="05"
      title="Get in touch"
      className="pb-28 md:pb-36"
      description="Open to discussing roles and interesting problems — or just talking shop."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        {/* Contact information */}
        <Reveal>
          <div className="flex h-full flex-col justify-between gap-10">
            <div className="space-y-4">
              {contactChannels.map(({ icon, label, value, href }) => {
                const content = (
                  <>
                    <ChannelIcon icon={icon} />
                    <span>
                      <span className="block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        {label}
                      </span>
                      <span className="text-foreground/90">{value}</span>
                    </span>
                  </>
                )

                return href ? (
                  <a
                    key={label}
                    href={href}
                    className="glass-card glass-card-hover flex items-center gap-4 p-5 cursor-pointer"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label} className="glass-card flex items-center gap-4 p-5">
                    {content}
                  </div>
                )
              })}
            </div>

            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card glass-card-hover inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm text-foreground cursor-pointer"
                >
                  <Icon size={18} className="text-primary" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Working preferences — the details a recruiter screens for */}
        <Reveal delay={120}>
          <div className="glass-card card-shine flex h-full flex-col gap-8 p-8">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse-dot" />
                <span className="font-display text-xl font-semibold">
                  {workPreferences.status}
                </span>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {workPreferences.statusNote}
              </p>
            </div>

            <div className="space-y-6">
              <PreferenceRow icon={Briefcase} label="open to">
                <Chips items={workPreferences.setup} />
              </PreferenceRow>
              <PreferenceRow icon={Clock} label="timezone">
                {workPreferences.timezone}
              </PreferenceRow>
              <PreferenceRow icon={Languages} label="languages">
                {workPreferences.languages.join(' · ')}
              </PreferenceRow>
              <PreferenceRow icon={Layers} label="core stack">
                <Chips items={workPreferences.stack} />
              </PreferenceRow>
            </div>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-medium text-primary-foreground transition-all duration-200 hover:shadow-glow hover:brightness-110 cursor-pointer"
            >
              <FileText size={18} />
              Download resume
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

export default Contact
