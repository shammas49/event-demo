import { motion } from 'framer-motion'

const features = [
  {
    icon: '🍛',
    title: 'Authentic Kerala Cuisine',
    desc: 'From traditional sadya on banana leaves to modern fusion menus — our chefs craft every dish with love, using the finest local ingredients and age-old recipes.',
  },
  {
    icon: '🎪',
    title: 'End-to-End Event Setup',
    desc: 'We handle everything: décor, floral arrangements, lighting, sound systems, and logistics. You celebrate — we orchestrate every detail to perfection.',
  },
  {
    icon: '⏱️',
    title: 'Reliable & Timely',
    desc: 'With over a decade of trusted service across Malappuram and Kerala, we pride ourselves on punctuality, professionalism, and seamless execution every single time.',
  },
]

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      style={{
        background: '#FAF6EF',
        padding: '100px 20px',
        position: 'relative',
      }}
    >
      {/* Subtle background texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(200,150,12,0.06) 0%, transparent 60%),
          radial-gradient(circle at 80% 50%, rgba(139,26,26,0.06) 0%, transparent 60%)`,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <motion.p
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Us
          </motion.p>
          <motion.h2
            className="section-heading"
            style={{ fontSize: 'clamp(26px, 4.5vw, 44px)', marginTop: '8px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            The MK Difference
          </motion.h2>
          <div className="kerala-divider" style={{ marginTop: '20px' }}>
            <span className="kerala-divider-icon">✦</span>
          </div>
        </div>

        {/* Feature columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '36px',
        }}>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '40px 32px',
                textAlign: 'center',
                boxShadow: '0 4px 32px rgba(59,35,20,0.08)',
                border: '1px solid rgba(200,150,12,0.15)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Gold top accent */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: 'linear-gradient(90deg, transparent, #C8960C, transparent)',
              }} />

              <div style={{ fontSize: '48px', marginBottom: '20px' }}>{f.icon}</div>

              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '22px',
                fontWeight: 700,
                color: '#8B1A1A',
                marginBottom: '16px',
              }}>
                {f.title}
              </h3>

              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '15px',
                lineHeight: 1.7,
                color: '#3B2314',
                opacity: 0.85,
              }}>
                {f.desc}
              </p>

              {/* Decorative corner dot */}
              <div style={{
                position: 'absolute', bottom: '16px', right: '20px',
                width: '6px', height: '6px',
                borderRadius: '50%', background: '#C8960C', opacity: 0.5,
              }} />
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '20px',
            marginTop: '60px',
            background: 'linear-gradient(135deg, #8B1A1A, #6B1414)',
            borderRadius: '20px',
            padding: '40px 32px',
          }}
        >
          {[
            { num: '10+', label: 'Years of Service' },
            { num: '500+', label: 'Events Completed' },
            { num: '5000+', label: 'Happy Families' },
            { num: '100%', label: 'Satisfaction Rate' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(28px, 5vw, 42px)',
                fontWeight: 900,
                color: '#C8960C',
              }}>{stat.num}</div>
              <div style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '13px',
                color: 'rgba(255,255,255,0.75)',
                letterSpacing: '0.08em',
                marginTop: '4px',
              }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
