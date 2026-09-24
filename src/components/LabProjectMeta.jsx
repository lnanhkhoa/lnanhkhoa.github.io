import { ExternalLink, Github } from 'lucide-react'

// Shared by the lab cards on the home page and the /the-labs/:id detail page.
const statusStyles = {
  'In Development': 'border-amber-400/25 bg-amber-400/10 text-amber-300',
  Live: 'border-emerald-400/25 bg-emerald-400/10 text-emerald-300'
}

export const StatusBadge = ({ status }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-xs ${statusStyles[status] || 'border-white/10 bg-white/5 text-muted-foreground'}`}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-current" />
    {status}
  </span>
)

const disabledLinkClass =
  'inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-muted-foreground/50'

// "live" and "code" pills; falls back to muted placeholders when a URL is missing.
export const ProjectLinks = ({ liveUrl, githubUrl }) => (
  <div className="flex shrink-0 flex-wrap gap-2">
    {liveUrl ? (
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-glow-sm cursor-pointer"
      >
        <ExternalLink size={13} />
        live
      </a>
    ) : (
      <span className={disabledLinkClass}>
        <ExternalLink size={13} />
        not-ready
      </span>
    )}
    {githubUrl ? (
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-white/25 hover:text-foreground cursor-pointer"
      >
        <Github size={13} />
        code
      </a>
    ) : (
      <span className={disabledLinkClass}>
        <Github size={13} />
        private
      </span>
    )}
  </div>
)
