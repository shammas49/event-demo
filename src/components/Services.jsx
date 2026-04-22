import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Images } from 'lucide-react'
import EventGalleryModal from './EventGalleryModal'

// ─── Event data with Kerala-style photos ──────────────────────────────────────
const events = [
  {
    name: 'Weddings & Engagements',
    icon: '💍',
    keyword: 'Wedding',
    img: 'https://source.unsplash.com/800x600/?kerala,wedding,reception',
    desc: 'Grand Kerala weddings with traditional rituals, lavish décor, and a feast that wows every guest.',
    photos: [
      { src: 'https://source.unsplash.com/800x600/?kerala,wedding,reception', caption: 'Grand Wedding Setup' },
      { src: 'https://source.unsplash.com/800x600/?kerala,bride,traditional', caption: 'Traditional Kerala Bride' },
      { src: 'https://source.unsplash.com/800x600/?kerala,wedding,decoration', caption: 'Beautiful Wedding Decor' },
      { src: 'https://source.unsplash.com/800x600/?indian,wedding,floral,mandap', caption: 'Floral Mandap' },
      { src: 'https://source.unsplash.com/800x600/?kerala,wedding,reception', caption: 'Reception Night' },
      { src: 'https://source.unsplash.com/800x600/?kerala,bride,traditional', caption: 'Bridal Ceremony' },
    ],
  },
  {
    name: 'Nikah & Muslim Weddings',
    icon: '🕌',
    keyword: 'Nikah',
    img: 'https://source.unsplash.com/800x600/?muslim,wedding,kerala',
    desc: 'Elegantly curated Nikah ceremonies respecting traditions while delivering modern hospitality.',
    photos: [
      { src: 'https://source.unsplash.com/800x600/?muslim,wedding,kerala', caption: 'Nikah Ceremony' },
      { src: 'https://source.unsplash.com/800x600/?nikah,ceremony,decoration', caption: 'Nikah Decoration' },
      { src: 'https://source.unsplash.com/800x600/?indian,muslim,bride', caption: 'Muslim Bride' },
      { src: 'https://source.unsplash.com/800x600/?muslim,wedding,kerala', caption: 'Valima Reception' },
      { src: 'https://source.unsplash.com/800x600/?nikah,ceremony,decoration', caption: 'Ceremony Setup' },
      { src: 'https://source.unsplash.com/800x600/?indian,muslim,bride', caption: 'Bridal Portrait' },
    ],
  },
  {
    name: 'Birthday Celebrations',
    icon: '🎂',
    keyword: 'Birthday',
    img: 'https://source.unsplash.com/800x600/?birthday,party,decoration,kerala',
    desc: 'Vibrant birthday setups from intimate family gatherings to grand milestone parties.',
    photos: [
      { src: 'https://source.unsplash.com/800x600/?birthday,party,decoration,kerala', caption: 'Birthday Party Setup' },
      { src: 'https://source.unsplash.com/800x600/?birthday,cake,celebration,india', caption: 'Celebration Cake' },
      { src: 'https://source.unsplash.com/800x600/?kids,birthday,party,colorful', caption: 'Kids Birthday Party' },
      { src: 'https://source.unsplash.com/800x600/?birthday,party,decoration,kerala', caption: 'Festive Decorations' },
      { src: 'https://source.unsplash.com/800x600/?birthday,cake,celebration,india', caption: 'Birthday Sweets' },
      { src: 'https://source.unsplash.com/800x600/?kids,birthday,party,colorful', caption: 'Party Moments' },
    ],
  },
  {
    name: 'Graduation & Achievements',
    icon: '🎓',
    keyword: 'Graduation',
    img: 'https://source.unsplash.com/800x600/?graduation,party,india',
    desc: 'Celebrate your milestones in style — dinners, parties, and recognition events done right.',
    photos: [
      { src: 'https://source.unsplash.com/800x600/?graduation,party,india', caption: 'Graduation Day' },
      { src: 'https://source.unsplash.com/800x600/?celebration,achievement,flowers', caption: 'Achievement Flowers' },
      { src: 'https://source.unsplash.com/800x600/?graduation,party,india', caption: 'Graduation Party' },
      { src: 'https://source.unsplash.com/800x600/?celebration,achievement,flowers', caption: 'Celebration Decor' },
      { src: 'https://source.unsplash.com/800x600/?graduation,party,india', caption: 'Milestone Dinner' },
      { src: 'https://source.unsplash.com/800x600/?celebration,achievement,flowers', caption: 'Award Ceremony' },
    ],
  },
  {
    name: 'Housewarming Functions',
    icon: '🏠',
    keyword: 'Housewarming',
    img: 'https://source.unsplash.com/800x600/?housewarming,kerala,traditional',
    desc: 'Bless your new home with traditional warmth, floral décor, and authentic Kerala cuisine.',
    photos: [
      { src: 'https://source.unsplash.com/800x600/?housewarming,kerala,traditional', caption: 'Traditional Housewarming' },
      { src: 'https://source.unsplash.com/800x600/?griha,pravesh,decoration,india', caption: 'Griha Pravesh Decor' },
      { src: 'https://source.unsplash.com/800x600/?housewarming,kerala,traditional', caption: 'Kerala Traditions' },
      { src: 'https://source.unsplash.com/800x600/?griha,pravesh,decoration,india', caption: 'Floral Entrance' },
      { src: 'https://source.unsplash.com/800x600/?housewarming,kerala,traditional', caption: 'Blessing Ceremony' },
      { src: 'https://source.unsplash.com/800x600/?griha,pravesh,decoration,india', caption: 'Catering Setup' },
    ],
  },
  {
    name: 'Corporate & Other Events',
    icon: '🎊',
    keyword: 'Corporate Event',
    img: 'https://source.unsplash.com/800x600/?corporate,event,kerala,hall',
    desc: 'Professional conferences, product launches, and team events executed with precision.',
    photos: [
      { src: 'https://source.unsplash.com/800x600/?corporate,event,kerala,hall', caption: 'Corporate Event Hall' },
      { src: 'https://source.unsplash.com/800x600/?event,stage,decoration,india', caption: 'Stage Decoration' },
      { src: 'https://source.unsplash.com/800x600/?corporate,event,kerala,hall', caption: 'Conference Setup' },
      { src: 'https://source.unsplash.com/800x600/?event,stage,decoration,india', caption: 'Event Stage' },
      { src: 'https://source.unsplash.com/800x600/?corporate,event,kerala,hall', caption: 'Corporate Dinner' },
      { src: 'https://source.unsplash.com/800x600/?event,stage,decoration,india', caption: 'Award Night' },
    ],
  },
]

// ─── Service Card ─────────────────────────────────────────────────────────────
function ServiceCard({ event, index, onOpen, onBook }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => onOpen(event)}
      whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(200,150,12,0.5)" }}
      style={{
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s',
        boxShadow: hovered
          ? '0 20px 60px rgba(200,150,12,0.3), 0 0 0 2px #C8960C'
          : '0 4px 24px rgba(0,0,0,0.25)',
        height: '360px',
      }}
    >
      {/* Background image with overflow:hidden zoom */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${event.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
            transition: 'transform 0.5s ease',
          }}
        />
        {/* Gold hover overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(200,150,12,0.35)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }} />
      </div>

      {/* Overlay gradient */}
      <div className="card-overlay" style={{ position: 'absolute', inset: 0 }} />

      {/* Photo count badge */}
      <div style={{
        position: 'absolute', top: 14, right: 14,
        display: 'flex', alignItems: 'center', gap: 5,
        background: 'rgba(0,0,0,0.55)',
        backdropFilter: 'blur(6px)',
        border: '1px solid rgba(200,150,12,0.4)',
        borderRadius: 20,
        padding: '4px 10px',
        color: '#C8960C',
        fontFamily: "'Outfit', sans-serif",
        fontSize: 11, fontWeight: 600,
        letterSpacing: '0.06em',
        zIndex: 2,
      }}>
        <Images size={12} />
        {event.photos.length} Photos
      </div>

      {/* Content */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'flex-end',
        padding: '24px',
        textAlign: 'center',
        zIndex: 2,
      }}>
        <div style={{ fontSize: '40px', marginBottom: '10px' }}>{event.icon}</div>
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '20px', fontWeight: 700,
          color: '#FFFFFF', marginBottom: '8px',
        }}>
          {event.name}
        </h3>

        {/* Description — fades in on hover */}
        <div style={{
          opacity: hovered ? 1 : 0,
          maxHeight: hovered ? '80px' : '0px',
          overflow: 'hidden',
          transition: 'opacity 0.3s ease, max-height 0.35s ease',
        }}>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '13px',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.6, marginBottom: '14px',
          }}>
            {event.desc}
          </p>
        </div>

        {/* Two-button row */}
        <div style={{ display: 'flex', gap: 8, width: '100%', justifyContent: 'center' }}>
          {/* View Gallery */}
          <button
            id={`service-gallery-${index}`}
            onClick={(e) => { e.stopPropagation(); onOpen(event) }}
            style={{
              display: 'flex', alignItems: 'center', gap: 5,
              padding: '9px 16px',
              background: hovered ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.55)',
              borderRadius: '6px',
              color: '#FFFFFF',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '12px', fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s',
              letterSpacing: '0.05em',
            }}
          >
            <Images size={13} />
            View Gallery
          </button>

          {/* Book Now → Opens booking modal */}
          <motion.button
            id={`service-book-${index}`}
            onClick={(e) => { e.stopPropagation(); onBook(event) }}
            initial={{ y: 20, opacity: 0 }}
            animate={hovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'flex', alignItems: 'center', gap: 5,
              padding: '9px 16px',
              background: hovered ? '#C8960C' : 'rgba(200,150,12,0.25)',
              border: '1px solid #C8960C',
              borderRadius: '6px',
              color: '#FFFFFF',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '12px', fontWeight: 600,
              cursor: 'pointer',
              transition: 'background 0.3s',
              letterSpacing: '0.05em',
            }}
          >
            📲 Book Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Services Section ─────────────────────────────────────────────────────────
export default function Services({ onBook }) {
  const [activeEvent, setActiveEvent] = useState(null)

  return (
    <section
      id="services"
      style={{
        background: '#FAF6EF',
        padding: '100px 20px',
        position: 'relative',
      }}
    >
      {/* Kerala top border pattern */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
        background: 'repeating-linear-gradient(90deg, #C8960C 0px, #C8960C 8px, #8B1A1A 8px, #8B1A1A 16px, transparent 16px, transparent 24px)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.p
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What We Do
          </motion.p>
          <motion.h2
            className="section-heading"
            style={{ fontSize: 'clamp(28px, 5vw, 48px)', marginTop: '8px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Events We Make Unforgettable
          </motion.h2>
          <div className="kerala-divider" style={{ marginTop: '20px' }}>
            <span className="kerala-divider-icon">✦</span>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 14, color: '#3B2314', opacity: 0.6,
              marginTop: 12,
            }}
          >
            Click any event to view our photo gallery
          </motion.p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {events.map((event, i) => (
            <ServiceCard
              key={event.name}
              event={event}
              index={i}
              onOpen={setActiveEvent}
              onBook={onBook}
            />
          ))}
        </div>
      </div>

      {/* Event gallery modal */}
      <AnimatePresence>
        {activeEvent && (
          <EventGalleryModal
            key={activeEvent.name}
            event={activeEvent}
            onClose={() => setActiveEvent(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
