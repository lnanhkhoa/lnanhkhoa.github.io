import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`glass-card glass-card-hover fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center !rounded-full text-muted-foreground hover:text-primary cursor-pointer transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp size={20} />
    </button>
  )
}

export default ScrollToTop
