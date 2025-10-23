import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('/#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { href: '/#about', label: 'About', isHash: true },
    { href: '/#skills', label: 'Skills', isHash: true },
    { href: '/#experience', label: 'Experience', isHash: true },
    { href: '/#projects', label: 'Projects', isHash: true },
    { href: '/#personal-projects', label: 'Personal Projects', isHash: true },
    // { href: '/blog', label: 'Blog', isHash: false },
    { href: '/#contact', label: 'Contact', isHash: true }
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            Khoa Le
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              if (item.isHash) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="text-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </a>
                )
              } else {
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`text-foreground hover:text-primary transition-colors duration-200 ${
                      location.pathname === item.href ? 'text-primary' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              }
            })}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            {navItems.map((item) => {
              if (item.isHash) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                  >
                    {item.label}
                  </a>
                )
              } else {
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`block py-2 text-foreground hover:text-primary transition-colors duration-200 ${
                      location.pathname === item.href ? 'text-primary' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              }
            })}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
