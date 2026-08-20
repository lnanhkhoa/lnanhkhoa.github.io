import { useEffect, useRef, useState } from 'react'
import { profile, workPreferences } from '../content/profile'

// The terminal speaks in lowercase shell style; derive its lines from the
// shared availability copy instead of hardcoding a second version.
const STATUS_LINES = [
  workPreferences.status.toLowerCase().replace(/\s+/g, '-'),
  workPreferences.statusNote.toLowerCase()
]

const SECTION_DIRS = {
  about: 'about',
  skills: 'skills',
  experience: 'experience',
  work: 'projects',
  projects: 'projects',
  contact: 'contact'
}

const HELP_LINES = [
  { cmd: 'help', desc: 'show this list' },
  { cmd: 'whoami', desc: 'who I am' },
  { cmd: 'stack', desc: 'my tech stack' },
  { cmd: 'status', desc: 'current availability' },
  { cmd: 'ls', desc: 'list all sections' },
  { cmd: 'go <section>', desc: 'scroll to a section — e.g. go contact' },
  { cmd: 'resume', desc: 'open my resume (pdf)' },
  { cmd: 'email', desc: 'open mail client' },
  { cmd: 'clear', desc: 'clear this terminal' }
]

const runCommand = (raw) => {
  const input = raw.trim().toLowerCase()
  const out = (lines, highlight = false) => lines.map((text) => ({ type: 'out', text, highlight }))

  if (!input) return []

  if (input === 'help')
    return [
      { type: 'out', text: 'commands:' },
      ...HELP_LINES.map(({ cmd, desc }) => ({ type: 'help', cmd, desc }))
    ]

  if (input === 'whoami')
    return out([
      `${profile.name} — ${profile.title}`,
      `location: ${profile.location.toLowerCase()}`
    ])

  if (input === 'stack' || input === 'cat stack.txt')
    return out(workPreferences.stackLines)

  if (input === 'status') return out(STATUS_LINES, true)

  if (input === 'ls')
    return out(['about/  skills/  experience/  projects/  contact/'])

  if (input === 'clear') return 'CLEAR'

  if (input === 'resume' || input === 'cv') {
    window.open(profile.resumeUrl, '_blank', 'noopener,noreferrer')
    return out(['opening resume.pdf …'])
  }

  if (input === 'email' || input === 'mail') {
    window.location.href = `mailto:${profile.email}`
    return out([`opening ${profile.email} …`])
  }

  if (input.startsWith('sudo')) return out(['khoa is not in the sudoers file. this incident will be reported.'])

  const goMatch = input.match(/^go\s+(\S+)$/)
  const target = goMatch ? goMatch[1] : null

  if (target && SECTION_DIRS[target]) {
    const el = document.getElementById(SECTION_DIRS[target])
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      return out([`→ navigating to ~/${SECTION_DIRS[target]}`], true)
    }
  }

  if (SECTION_DIRS[input]) {
    document.getElementById(SECTION_DIRS[input])?.scrollIntoView({ behavior: 'smooth' })
    return out([`→ navigating to ~/${SECTION_DIRS[input]}`], true)
  }

  return out([`command not found: ${input} — try 'help'`])
}

const BOOT = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'senior full-stack developer · back-end focused' },
  { type: 'cmd', text: 'cat stack.txt' },
  ...workPreferences.stackLines.map((text) => ({ type: 'out', text })),
  { type: 'cmd', text: 'status --now' },
  ...STATUS_LINES.map((text) => ({ type: 'out', text, highlight: true }))
]

const Terminal = () => {
  const [lines, setLines] = useState(BOOT)
  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef(null)
  const scrollRef = useRef(null)

  // Keep the newest line in view
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [lines])

  const submit = (e) => {
    e.preventDefault()
    const result = runCommand(input)
    setCmdHistory((h) => [input, ...h])
    setHistoryIndex(-1)
    setInput('')
    if (result === 'CLEAR') {
      setLines([])
      return
    }
    setLines((prev) => [...prev, { type: 'cmd', text: input }, ...result])
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex < cmdHistory.length - 1) {
        const next = historyIndex + 1
        setHistoryIndex(next)
        setInput(cmdHistory[next])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const next = historyIndex - 1
        setHistoryIndex(next)
        setInput(cmdHistory[next])
      } else {
        setHistoryIndex(-1)
        setInput('')
      }
    }
  }

  return (
    <div
      className="glass-card card-shine relative overflow-hidden rounded-3xl"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-3.5">
        <span className="h-3 w-3 rounded-full bg-red-400/70" />
        <span className="h-3 w-3 rounded-full bg-amber-400/70" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">~/khoa-le — zsh</span>
        <span className="ml-auto font-mono text-[10px] text-muted-foreground/50">
          type ‘help’
        </span>
      </div>

      {/* Scrollable output + input */}
      <div ref={scrollRef} className="h-[22rem] space-y-2.5 overflow-y-auto px-5 py-6 font-mono text-sm leading-relaxed">
        {lines.map((line, i) =>
          line.type === 'cmd' ? (
            <p key={i} className="whitespace-pre text-foreground/90">
              <span className="text-primary">➜</span> <span className="text-teal-300">~</span>{' '}
              {line.text}
            </p>
          ) : line.type === 'help' ? (
            <p key={i} className="whitespace-pre">
              <span className="text-primary">{line.cmd.padEnd(14)}</span>
              <span className="text-muted-foreground">{line.desc}</span>
            </p>
          ) : (
            <p key={i} className={line.highlight ? 'text-primary' : 'text-muted-foreground'}>
              {line.highlight && <span className="mr-2">●</span>}
              {line.text}
            </p>
          )
        )}

        <form onSubmit={submit} className="flex items-center gap-2">
          <span className="shrink-0 whitespace-nowrap text-foreground/90">
            <span className="text-primary">➜</span> <span className="text-teal-300">~</span>
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Terminal command input"
            autoComplete="off"
            spellCheck="false"
            className="w-full bg-transparent font-mono text-sm text-foreground caret-primary focus:outline-none"
          />
        </form>
      </div>
    </div>
  )
}

export default Terminal
