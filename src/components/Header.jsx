import { useEffect, useState } from 'react'
import { Menu, X, FileDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile } from '../content/profile'

// { href: '/blog', label: 'blog' } — re-add once blog pages are enabled
const navItems = [
  { href: '/#about', label: 'about' },
  { href: '/#skills', label: 'skills' },
  { href: '/#experience', label: 'experience' },
  { href: '/#projects', label: 'work' },
  // { href: '/#personal-projects', label: 'lab' },
  { href: '/#contact', label: 'contact' }
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Scroll spy — highlight the section currently in view
  useEffect(() => {
    const ids = navItems.map((item) => item.href.replace('/#', ''))
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35
      let current = ''
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) current = id
      })
      setActiveSection(current)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('/#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="glass-card mx-auto flex max-w-4xl items-center justify-between rounded-full py-2.5 pl-6 pr-2.5">
        <Link
          to="/"
          className="font-mono text-lg font-semibold text-foreground transition-colors hover:text-primary"
        >
          khoa<span className="text-primary">.le</span>
          <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-[3px] bg-primary animate-caret-blink" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const sectionId = item.href.replace('/#', '')
            const isActive = activeSection === sectionId
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`rounded-full px-3.5 py-1.5 font-mono text-sm transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {isActive && <span className="mr-1.5 text-primary/70">/</span>}
                {item.label}
              </a>
            )
          })}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:shadow-glow-sm hover:brightness-110 cursor-pointer"
          >
            <FileDown size={16} />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-full p-2 text-foreground hover:bg-white/5 md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="glass-card mx-auto mt-2 max-w-4xl rounded-3xl p-3 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-2xl px-4 py-3 font-mono text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-primary cursor-pointer"
              onClick={(e) => handleSmoothScroll(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
          >
            <FileDown size={16} />
            Download Resume
          </a>
        </div>
      )}
    </header>
  )
}

export default Header
