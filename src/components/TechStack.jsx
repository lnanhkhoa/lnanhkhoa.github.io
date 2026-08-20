import { useState } from 'react'

const COLLAPSED_COUNT = 6

const TechStack = ({ technologies, highlightPrefix, highlightClassName }) => {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? technologies : technologies.slice(0, COLLAPSED_COUNT)

  return (
    <div>
      <h4 className="mb-2.5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        tech stack
      </h4>
      <div className="flex flex-wrap gap-1.5">
        {visible.map((tech, idx) => {
          const isHighlighted = highlightPrefix && tech.startsWith(highlightPrefix)
          return (
            <span
              key={idx}
              className={`rounded-full px-2.5 py-1 font-mono text-xs ${
                isHighlighted
                  ? highlightClassName
                  : 'border border-white/10 bg-white/[0.04] text-muted-foreground'
              }`}
            >
              {tech}
            </span>
          )
        })}
        {!expanded && technologies.length > COLLAPSED_COUNT && (
          <button
            onClick={() => setExpanded(true)}
            className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary hover:bg-primary/20 transition-colors cursor-pointer"
          >
            +{technologies.length - COLLAPSED_COUNT} more
          </button>
        )}
        {expanded && technologies.length > COLLAPSED_COUNT && (
          <button
            onClick={() => setExpanded(false)}
            className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            show less
          </button>
        )}
      </div>
    </div>
  )
}

export default TechStack
