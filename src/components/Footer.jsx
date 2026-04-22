import { Phone, MessageCircle, MapPin, Instagram, Facebook, Heart } from 'lucide-react'

const WA_URL = `https://wa.me/919876543210?text=Assalamu+Alaikum+MK+Caters+and+Events!%0A%0AI+would+like+to+enquire+about+your+services.%0A%0A%F0%9F%8E%89+Event+Type%3A+General+Enquiry%0A%F0%9F%93%85+Event+Date%3A+%5BTo+be+confirmed%5D%0A%F0%9F%93%8D+Event+Location%3A+%5BTo+be+confirmed%5D%0A%F0%9F%91%A5+Expected+Guests%3A+%5BTo+be+confirmed%5D%0A%0AKindly+contact+me+with+pricing+and+availability.+Thank+you!`

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function handleNavClick(e, href) {
  e.preventDefault()
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(135deg, #3B2314 0%, #2A1A0E 100%)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Thin gold top border */}
      <div style={{
        height: '3px',
        background: 'linear-gradient(90deg, transparent, #C8960C, #F0B429, #C8960C, transparent)',
      }} />

      {/* Kerala pattern strip */}
      <div style={{
        height: '4px',
        background: 'repeating-linear-gradient(90deg, #8B1A1A 0px, #8B1A1A 8px, transparent 8px, transparent 16px)',
      }} />

      {/* Background decoration */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `repeating-linear-gradient(45deg, rgba(200,150,12,0.03) 0px, rgba(200,150,12,0.03) 2px, transparent 2px, transparent 20px)`,
        pointerEvents: 'none',
      }} />

      {/* Main footer content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 24px 40px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '48px',
        position: 'relative',
      }}>

        {/* Brand column */}
        <div>
          {/* Logo */}
          <div style={{ marginBottom: '16px' }}>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '40px',
              fontWeight: 900,
              color: '#C8960C',
            }}>MK</span>
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '15px',
              color: '#FFFFFF',
              letterSpacing: '0.08em',
              marginLeft: '8px',
            }}>Caters &amp; Events</span>
          </div>

          {/* Tagline */}
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '15px',
            color: 'rgba(255,255,255,0.7)',
            fontStyle: 'italic',
            lineHeight: 1.6,
            marginBottom: '24px',
          }}>
            "Every celebration deserves perfection."
          </p>

          {/* Lotus motif */}
          <svg width="48" height="40" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 38 C24 28, 10 22, 8 12 C14 16, 20 24, 24 32 C28 24, 34 16, 40 12 C38 22, 24 28, 24 38Z" fill="#C8960C" opacity="0.8"/>
            <path d="M24 38 C18 28, 4 26, 4 16 C10 20, 16 28, 24 36Z" fill="#C8960C" opacity="0.5"/>
            <path d="M24 38 C30 28, 44 26, 44 16 C38 20, 32 28, 24 36Z" fill="#C8960C" opacity="0.5"/>
            <path d="M24 30 C24 20, 20 12, 14 6 C20 12, 24 22, 24 28 C24 22, 28 12, 34 6 C28 12, 24 20, 24 30Z" fill="#F0B429" opacity="0.7"/>
            <circle cx="24" cy="30" r="3" fill="#C8960C"/>
          </svg>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
            <a
              href="https://instagram.com"
              target="_blank" rel="noopener noreferrer"
              aria-label="Instagram"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '38px', height: '38px', borderRadius: '10px',
                background: 'linear-gradient(135deg, #C13584, #E1306C)',
                color: '#FFF', transition: 'transform 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank" rel="noopener noreferrer"
              aria-label="Facebook"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '38px', height: '38px', borderRadius: '10px',
                background: '#1877F2',
                color: '#FFF', transition: 'transform 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '18px', fontWeight: 700,
            color: '#C8960C', marginBottom: '20px',
          }}>
            Quick Links
          </h3>
          <div style={{ width: '40px', height: '2px', background: '#C8960C', marginBottom: '20px', opacity: 0.6 }} />
          <nav>
            {quickLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  display: 'block',
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  marginBottom: '12px',
                  letterSpacing: '0.04em',
                  transition: 'color 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.target.style.color = '#C8960C'; e.target.style.transform = 'translateX(4px)' }}
                onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.7)'; e.target.style.transform = 'translateX(0)' }}
              >
                ✦ {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact column */}
        <div>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '18px', fontWeight: 700,
            color: '#C8960C', marginBottom: '20px',
          }}>
            Contact Us
          </h3>
          <div style={{ width: '40px', height: '2px', background: '#C8960C', marginBottom: '20px', opacity: 0.6 }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <MapPin size={16} color="#C8960C" style={{ marginTop: '2px', flexShrink: 0 }} />
              <span style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6,
              }}>
                Kottakkal, Malappuram<br />Kerala, India
              </span>
            </div>
            <a
              href="tel:+919876543210"
              style={{
                display: 'flex', gap: '10px', alignItems: 'center',
                fontFamily: "'Outfit', sans-serif",
                fontSize: '14px', color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#C8960C'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
            >
              <Phone size={16} color="#C8960C" />
              +91 98765 43210
            </a>
            <a
              href={WA_URL}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', gap: '10px', alignItems: 'center',
                fontFamily: "'Outfit', sans-serif",
                fontSize: '14px', color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#C8960C'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
            >
              <MessageCircle size={16} color="#C8960C" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(200,150,12,0.2)',
        padding: '20px 24px',
        textAlign: 'center',
        position: 'relative',
      }}>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '13px',
          color: 'rgba(255,255,255,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          flexWrap: 'wrap',
        }}>
          © 2025 MK Caters and Events. All rights reserved.
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          Made with <Heart size={12} color="#C8960C" fill="#C8960C" /> in Kottakkal, Kerala
        </p>
      </div>
    </footer>
  )
}
