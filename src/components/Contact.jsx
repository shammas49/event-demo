import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, Instagram, Facebook } from 'lucide-react'

const WA_URL = `https://wa.me/919876543210?text=Assalamu+Alaikum+MK+Caters+and+Events!%0A%0AI+would+like+to+enquire+about+your+services.%0A%0A%F0%9F%8E%89+Event+Type%3A+General+Enquiry%0A%F0%9F%93%85+Event+Date%3A+%5BTo+be+confirmed%5D%0A%F0%9F%93%8D+Event+Location%3A+%5BTo+be+confirmed%5D%0A%F0%9F%91%A5+Expected+Guests%3A+%5BTo+be+confirmed%5D%0A%0AKindly+contact+me+with+pricing+and+availability.+Thank+you!`

export default function Contact() {
  return (
    <section
      id="contact"
      className="kerala-border-top"
      style={{
        background: 'linear-gradient(135deg, #FAF6EF 0%, #FFF8EE 100%)',
        padding: '100px 20px',
        position: 'relative',
      }}
    >
      {/* Decorative pattern at top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '6px',
        background: 'repeating-linear-gradient(90deg, #C8960C 0px, #C8960C 8px, #8B1A1A 8px, #8B1A1A 14px, transparent 14px, transparent 22px, #C8960C 22px, #C8960C 30px)',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.p
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.p>
          <motion.h2
            className="section-heading"
            style={{ fontSize: 'clamp(26px, 4.5vw, 44px)', marginTop: '8px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Book Your Event Today
          </motion.h2>
          <div className="kerala-divider" style={{ marginTop: '20px' }}>
            <span className="kerala-divider-icon">✦</span>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '48px',
          alignItems: 'start',
        }}>

          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: '14px',
              marginBottom: '28px',
            }}>
              <MapPin size={22} color="#C8960C" style={{ marginTop: '3px', flexShrink: 0 }} />
              <div>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '18px', fontWeight: 700, color: '#8B1A1A', marginBottom: '4px',
                }}>Our Location</div>
                <div style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '15px', color: '#3B2314', lineHeight: 1.6,
                }}>
                  MK Caters and Events<br />
                  Kottakkal, Malappuram<br />
                  Kerala, India
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
              <a
                href="tel:+919876543210"
                id="contact-call-btn"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  padding: '16px 24px',
                  background: '#8B1A1A',
                  borderRadius: '10px',
                  color: '#FFFFFF',
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '16px', fontWeight: 700,
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 20px rgba(139,26,26,0.3)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#6B1414'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#8B1A1A'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <Phone size={20} />
                📞 Call Now — +91 98765 43210
              </a>

              <a
                href={WA_URL}
                id="contact-wa-btn"
                target="_blank"
                rel="noopener noreferrer"
                className="pulse-wa"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  padding: '16px 24px',
                  background: '#C8960C',
                  borderRadius: '10px',
                  color: '#3B2314',
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '16px', fontWeight: 700,
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#F0B429'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#C8960C'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <MessageCircle size={20} />
                💬 WhatsApp Us
              </a>
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '16px' }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '48px', height: '48px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #C13584, #E1306C, #F77737)',
                  color: '#FFFFFF',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '48px', height: '48px',
                  borderRadius: '12px',
                  background: '#1877F2',
                  color: '#FFFFFF',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <Facebook size={22} />
              </a>
            </div>
          </motion.div>

          {/* Right: Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(59,35,20,0.15)',
              border: '2px solid rgba(200,150,12,0.25)',
            }}
          >
            <iframe
              title="MK Caters and Events Location - Kottakkal, Malappuram"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.694788174026!2d76.00238527502505!3d11.00419898910059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba63ce5d5c1de71%3A0x87a49c8d1b4f3350!2sKottakkal%2C%20Kerala!5e0!3m2!1sen!2sin!4v1704000000000!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
