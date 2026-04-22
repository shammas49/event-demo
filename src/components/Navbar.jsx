import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={scrolled ? {} : { background: 'transparent' }}
        animate={scrolled ? { backgroundColor: 'rgba(139,26,26,0.95)' } : { backgroundColor: 'transparent' }}
        transition={{ duration: 0.3 }}
      >
        {scrolled && (
          <div style={{ position: 'absolute', inset: 0, backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', zIndex: -1, borderBottom: '1px solid rgba(200,150,12,0.4)' }} />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-baseline gap-1 no-underline">
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '28px',
                fontWeight: 900,
                color: '#C8960C',
                lineHeight: 1,
              }}>MK</span>
              <span style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '13px',
                fontWeight: 500,
                color: '#FFFFFF',
                letterSpacing: '0.08em',
                marginLeft: '6px',
              }}>Caters &amp; Events</span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    letterSpacing: '0.05em',
                    transition: 'color 0.2s',
                    position: 'relative',
                  }}
                  onMouseEnter={e => e.target.style.color = '#C8960C'}
                  onMouseLeave={e => e.target.style.color = '#FFFFFF'}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+919876543210"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 18px',
                  background: '#C8960C',
                  color: '#3B2314',
                  borderRadius: '6px',
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  transition: 'background 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#F0B429'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#C8960C'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <Phone size={14} />
                Call Now
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              id="navbar-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg"
              style={{ color: '#C8960C', background: 'transparent', border: 'none', cursor: 'pointer' }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden flex flex-col"
            style={{
              background: 'linear-gradient(135deg, #8B1A1A 0%, #6B1414 100%)',
            }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
          >
            {/* Kerala pattern overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.08,
              backgroundImage: `repeating-linear-gradient(45deg, #C8960C 0px, #C8960C 2px, transparent 2px, transparent 20px),
                repeating-linear-gradient(-45deg, #C8960C 0px, #C8960C 2px, transparent 2px, transparent 20px)`,
              pointerEvents: 'none',
            }} />

            <div className="flex flex-col items-center justify-center h-full gap-8 relative z-10">
              <div className="text-center mb-4">
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '48px', fontWeight: 900, color: '#C8960C' }}>MK</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '14px', color: '#FFFFFF', letterSpacing: '0.1em' }}>CATERS &amp; EVENTS</div>
              </div>

              <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, #C8960C, transparent)', margin: '0 40px' }} />

              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '28px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    letterSpacing: '0.05em',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onMouseEnter={e => e.target.style.color = '#C8960C'}
                  onMouseLeave={e => e.target.style.color = '#FFFFFF'}
                >
                  {link.label}
                </motion.a>
              ))}

              <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, #C8960C, transparent)', margin: '0 40px' }} />

              <a
                href="tel:+919876543210"
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '12px 32px', background: '#C8960C', color: '#3B2314',
                  borderRadius: '8px', fontFamily: "'Outfit', sans-serif",
                  fontSize: '16px', fontWeight: 700, textDecoration: 'none',
                }}
              >
                <Phone size={18} />
                +91 98765 43210
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
