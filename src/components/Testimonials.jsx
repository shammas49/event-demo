import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Fathima Riyaz',
    location: 'Kottakkal',
    text: 'MK Caters made our daughter\'s Nikah ceremony absolutely magical. The food was outstanding — guests are still talking about the biriyani! Their team handled everything without a single hitch. Truly a 5-star experience.',
    stars: 5,
  },
  {
    name: 'Suresh Menon',
    location: 'Malappuram',
    text: 'We hired MK Caters for our son\'s wedding reception. The decoration was breathtaking and the catering quality was top-notch. Professional, polite and extremely organized. Highly recommend to everyone!',
    stars: 5,
  },
  {
    name: 'Amina Beevi',
    location: 'Tirur',
    text: 'Our housewarming function was a grand success thanks to MK Caters. They set up everything beautifully — from the floral arrangements to the traditional sadya. Very affordable and trustworthy service.',
    stars: 5,
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="testimonials"
      style={{
        background: 'linear-gradient(135deg, #8B1A1A 0%, #6B1414 100%)',
        padding: '100px 20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Kerala background pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `repeating-linear-gradient(45deg, rgba(200,150,12,0.04) 0px, rgba(200,150,12,0.04) 2px, transparent 2px, transparent 24px)`,
        pointerEvents: 'none',
      }} />

      {/* Kerala invite card top decoration */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
        background: 'repeating-linear-gradient(90deg, #C8960C 0px, #C8960C 8px, transparent 8px, transparent 16px)',
      }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', textAlign: 'center' }}>

        {/* Heading */}
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ color: '#C8960C' }}
        >
          Testimonials
        </motion.p>
        <motion.h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(26px, 4.5vw, 44px)',
            fontWeight: 700,
            color: '#FFFFFF',
            marginTop: '8px',
            marginBottom: '16px',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="kerala-divider" style={{ marginBottom: '48px' }}>
          <span style={{ color: '#C8960C', fontSize: '18px' }}>✦</span>
        </div>

        {/* Testimonial card — Kerala invitation card style */}
        <div style={{ position: 'relative', minHeight: '260px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{
                background: 'linear-gradient(145deg, #fffdf7, #faf6ef)',
                borderRadius: '20px',
                padding: '48px 40px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                border: '1px solid rgba(200,150,12,0.3)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Paper texture lines */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(200,150,12,0.06) 24px, rgba(200,150,12,0.06) 25px)',
                pointerEvents: 'none',
              }} />

              {/* Gold top border */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: 'linear-gradient(90deg, transparent, #C8960C, transparent)',
              }} />

              {/* Stars */}
              <div style={{ marginBottom: '20px' }}>
                {Array.from({ length: testimonials[active].stars }).map((_, i) => (
                  <span key={i} style={{ fontSize: '20px' }}>⭐</span>
                ))}
              </div>

              {/* Quote mark */}
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '80px',
                color: 'rgba(200,150,12,0.15)',
                lineHeight: 0.5,
                marginBottom: '20px',
                position: 'relative',
                zIndex: 1,
              }}>
                "
              </div>

              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(15px, 2.5vw, 19px)',
                lineHeight: 1.75,
                color: '#3B2314',
                fontStyle: 'italic',
                marginBottom: '28px',
                position: 'relative',
                zIndex: 1,
              }}>
                {testimonials[active].text}
              </p>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#8B1A1A',
                }}>
                  {testimonials[active].name}
                </div>
                <div style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '13px',
                  color: '#C8960C',
                  letterSpacing: '0.1em',
                  marginTop: '4px',
                }}>
                  {testimonials[active].location}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot navigation */}
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '32px' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              id={`testimonial-dot-${i}`}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? '32px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: i === active ? '#C8960C' : 'rgba(200,150,12,0.35)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
