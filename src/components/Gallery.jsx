import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Eye } from 'lucide-react'

const galleryImages = [
  { src: 'https://source.unsplash.com/600x800/?kerala,wedding', alt: 'Kerala Wedding Ceremony', caption: 'Grand Kerala Wedding', category: 'Wedding' },
  { src: 'https://source.unsplash.com/800x600/?kerala,catering,sadya', alt: 'Kerala Sadya Catering', caption: 'Lavish Kerala Sadya', category: 'Catering' },
  { src: 'https://source.unsplash.com/600x600/?wedding,decoration', alt: 'Wedding Decoration', caption: 'Elegant Decor', category: 'Decor' },
  { src: 'https://source.unsplash.com/600x800/?birthday,party,india', alt: 'Birthday Party India', caption: 'Birthday Extravaganza', category: 'Birthday' },
  { src: 'https://source.unsplash.com/800x600/?nikah,ceremony', alt: 'Nikah Ceremony', caption: 'Sacred Nikah Ceremony', category: 'Nikah' },
  { src: 'https://source.unsplash.com/600x600/?housewarming,kerala', alt: 'Housewarming Kerala', caption: 'Griha Pravesh Blessings', category: 'Housewarming' },
  { src: 'https://source.unsplash.com/800x600/?event,stage,lights', alt: 'Event Stage Lights', caption: 'Stage Lighting Setup', category: 'Events' },
  { src: 'https://source.unsplash.com/600x800/?kerala,bride,flowers', alt: 'Kerala Bride Flowers', caption: 'Bridal Flowers', category: 'Wedding' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section
      id="gallery"
      style={{
        background: '#3B2314',
        padding: '100px 20px',
        position: 'relative',
      }}
    >
      {/* Kerala pattern top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
        background: 'repeating-linear-gradient(90deg, #C8960C 0px, #C8960C 8px, transparent 8px, transparent 16px)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.p
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ color: '#C8960C' }}
          >
            Portfolio
          </motion.p>
          <motion.h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: 700,
              color: '#FFFFFF',
              marginTop: '8px',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our Work Speaks
          </motion.h2>
          <div className="kerala-divider" style={{ marginTop: '20px' }}>
            <span style={{ color: '#C8960C', fontSize: '18px' }}>✦</span>
          </div>
        </div>

        {/* Masonry grid */}
        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <GalleryItem key={i} img={img} index={i} onClick={() => setLightbox(img)} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              background: 'rgba(0,0,0,0.92)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              padding: '20px',
            }}
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: 'absolute', top: '20px', right: '20px',
                background: 'transparent', border: 'none',
                color: '#C8960C', cursor: 'pointer',
              }}
              aria-label="Close lightbox"
            >
              <X size={36} />
            </button>
            <motion.img
              src={lightbox.src}
              alt={lightbox.alt}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              style={{
                maxWidth: '90vw', maxHeight: '80vh',
                borderRadius: '12px',
                boxShadow: '0 0 60px rgba(200,150,12,0.3)',
                border: '2px solid rgba(200,150,12,0.4)',
                objectFit: 'cover',
              }}
              onClick={e => e.stopPropagation()}
            />
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '16px',
              color: '#C8960C',
              marginTop: '16px',
              fontStyle: 'italic',
            }}>
              {lightbox.caption}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function GalleryItem({ img, index, onClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="gallery-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      style={{
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        cursor: 'pointer',
        border: hovered ? '2px solid #C8960C' : '2px solid transparent',
        transition: 'border 0.3s ease',
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onClick}
    >
      <img
        src={img.src}
        alt={img.alt}
        style={{
          width: '100%',
          display: 'block',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.4s ease',
        }}
      />

      {/* Gold gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(200,150,12,0.5) 0%, rgba(139,26,26,0.5) 100%)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: '10px',
      }}>
        {/* Eye icon scales in */}
        <motion.div
          animate={hovered ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Eye size={40} color="#FFFFFF" />
        </motion.div>

        {/* Category label slides up */}
        <motion.p
          animate={hovered ? { y: 0, opacity: 1 } : { y: 12, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '14px',
            color: '#FFFFFF',
            fontWeight: 600,
            fontStyle: 'italic',
            textAlign: 'center',
            padding: '0 12px',
          }}
        >
          {img.caption}
        </motion.p>

        {/* Category badge */}
        <motion.span
          animate={hovered ? { y: 0, opacity: 1 } : { y: 8, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.15em',
            color: '#C8960C',
            background: 'rgba(0,0,0,0.4)',
            padding: '3px 10px',
            borderRadius: '20px',
            textTransform: 'uppercase',
          }}
        >
          {img.category}
        </motion.span>
      </div>
    </motion.div>
  )
}
