import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react'

function buildWALink(eventName) {
  const encoded = encodeURIComponent(eventName)
  return `https://wa.me/919876543210?text=Assalamu+Alaikum+MK+Caters+and+Events!%0A%0AI+would+like+to+enquire+about+your+services.%0A%0A%F0%9F%8E%89+Event+Type%3A+${encoded}%0A%F0%9F%93%85+Event+Date%3A+%5BTo+be+confirmed%5D%0A%F0%9F%93%8D+Event+Location%3A+%5BTo+be+confirmed%5D%0A%F0%9F%91%A5+Expected+Guests%3A+%5BTo+be+confirmed%5D%0A%0AKindly+contact+me+with+pricing+and+availability.+Thank+you!`
}

/* ─── Internal lightbox inside the modal ─── */
function Lightbox({ photos, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') setCurrent(i => (i + 1) % photos.length)
      if (e.key === 'ArrowLeft')  setCurrent(i => (i - 1 + photos.length) % photos.length)
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [photos.length, onClose])

  const prev = () => setCurrent(i => (i - 1 + photos.length) % photos.length)
  const next = () => setCurrent(i => (i + 1) % photos.length)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 10000,
        background: 'rgba(0,0,0,0.96)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
      }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close photo"
        style={{
          position: 'absolute', top: 20, right: 24,
          background: 'none', border: 'none',
          color: '#C8960C', cursor: 'pointer',
        }}
      >
        <X size={34} />
      </button>

      {/* Prev */}
      <button
        onClick={e => { e.stopPropagation(); prev() }}
        aria-label="Previous photo"
        style={{
          position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(200,150,12,0.18)', border: '1px solid rgba(200,150,12,0.4)',
          borderRadius: '50%', width: 48, height: 48,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#C8960C', cursor: 'pointer', transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(200,150,12,0.45)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(200,150,12,0.18)'}
      >
        <ChevronLeft size={26} />
      </button>

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={photos[current].src.replace('w=600', 'w=1200')}
          alt={photos[current].caption}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.28 }}
          onClick={e => e.stopPropagation()}
          style={{
            maxWidth: '88vw', maxHeight: '78vh',
            borderRadius: 12,
            boxShadow: '0 0 80px rgba(200,150,12,0.25)',
            border: '2px solid rgba(200,150,12,0.35)',
            objectFit: 'cover',
          }}
        />
      </AnimatePresence>

      {/* Next */}
      <button
        onClick={e => { e.stopPropagation(); next() }}
        aria-label="Next photo"
        style={{
          position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(200,150,12,0.18)', border: '1px solid rgba(200,150,12,0.4)',
          borderRadius: '50%', width: 48, height: 48,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#C8960C', cursor: 'pointer', transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(200,150,12,0.45)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(200,150,12,0.18)'}
      >
        <ChevronRight size={26} />
      </button>

      {/* Caption + counter */}
      <div style={{ marginTop: 18, textAlign: 'center' }}>
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 15, color: '#C8960C', fontStyle: 'italic',
        }}>
          {photos[current].caption}
        </p>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 4,
        }}>
          {current + 1} / {photos.length}
        </p>
      </div>

      {/* Thumbnail strip */}
      <div style={{
        display: 'flex', gap: 8, marginTop: 16,
        padding: '0 16px', flexWrap: 'wrap', justifyContent: 'center',
      }}
        onClick={e => e.stopPropagation()}
      >
        {photos.map((p, i) => (
          <button
            key={i}
            onClick={e => { e.stopPropagation(); setCurrent(i) }}
            style={{
              padding: 0, border: 'none', cursor: 'pointer',
              borderRadius: 6, overflow: 'hidden',
              outline: i === current ? '2px solid #C8960C' : '2px solid transparent',
              transition: 'outline 0.2s',
              opacity: i === current ? 1 : 0.55,
            }}
          >
            <img
              src={p.src}
              alt={p.caption}
              style={{ width: 56, height: 40, objectFit: 'cover', display: 'block' }}
            />
          </button>
        ))}
      </div>
    </motion.div>
  )
}

/* ─── Photo grid item inside gallery modal ─── */
function PhotoGridItem({ photo, index, onClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      style={{
        position: 'relative', borderRadius: 10, overflow: 'hidden',
        cursor: 'pointer', aspectRatio: index % 3 === 0 ? '4/3' : '1/1',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(index)}
    >
      <img
        src={photo.src}
        alt={photo.caption}
        style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.4s ease',
        }}
      />
      {/* Hover overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(200,150,12,0.72)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 6,
      }}>
        <ZoomIn size={28} color="#3B2314" />
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 12, fontWeight: 600,
          color: '#3B2314', textAlign: 'center', padding: '0 8px',
        }}>
          {photo.caption}
        </p>
      </div>
    </motion.div>
  )
}

/* ─── Main modal ─── */
export default function EventGalleryModal({ event, onClose }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape' && lightboxIndex === null) onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, lightboxIndex])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed', inset: 0, zIndex: 9000,
          background: 'rgba(30,10,5,0.7)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
        }}
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ type: 'spring', damping: 26, stiffness: 320 }}
        style={{
          position: 'fixed',
          inset: '0', margin: 'auto',
          zIndex: 9500,
          width: 'min(960px, 96vw)',
          height: 'min(720px, 92vh)',
          background: '#FAF6EF',
          borderRadius: 20,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 32px 100px rgba(0,0,0,0.5)',
          border: '1px solid rgba(200,150,12,0.3)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div style={{
          background: 'linear-gradient(135deg, #8B1A1A 0%, #6B1414 100%)',
          padding: '24px 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexShrink: 0,
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Kerala pattern background overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `repeating-linear-gradient(45deg, rgba(200,150,12,0.06) 0px, rgba(200,150,12,0.06) 2px, transparent 2px, transparent 20px)`,
            pointerEvents: 'none',
          }} />

          {/* Gold bottom border */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, transparent, #C8960C, transparent)',
          }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, position: 'relative' }}>
            <span style={{ fontSize: 40 }}>{event.icon}</span>
            <div>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 11, fontWeight: 600, letterSpacing: '0.22em',
                color: '#C8960C', textTransform: 'uppercase', marginBottom: 4,
              }}>
                ✦ MK Caters &amp; Events ✦
              </p>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(20px, 4vw, 28px)',
                fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2,
              }}>
                {event.name}
              </h2>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 13, color: 'rgba(255,255,255,0.65)', marginTop: 4,
              }}>
                {event.desc}
              </p>
            </div>
          </div>

          {/* Close btn */}
          <button
            onClick={onClose}
            aria-label="Close gallery"
            style={{
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 8, padding: '8px', color: '#FFFFFF',
              cursor: 'pointer', transition: 'all 0.2s', flexShrink: 0,
              display: 'flex', alignItems: 'center',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200,150,12,0.3)'; e.currentTarget.style.color = '#C8960C' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#FFFFFF' }}
          >
            <X size={22} />
          </button>
        </div>

        {/* ── Photo grid (scrollable) ── */}
        <div style={{
          flex: 1, overflowY: 'auto', padding: '24px 24px 0',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 12,
          }}>
            {event.photos.map((photo, i) => (
              <PhotoGridItem
                key={i}
                photo={photo}
                index={i}
                onClick={(idx) => setLightboxIndex(idx)}
              />
            ))}
          </div>
        </div>

        {/* ── Footer CTA ── */}
        <div style={{
          padding: '20px 32px',
          background: '#FFFFFF',
          borderTop: '1px solid rgba(200,150,12,0.2)',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 16,
          flexWrap: 'wrap', flexShrink: 0,
        }}>
          <div>
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 16, fontWeight: 700, color: '#8B1A1A',
            }}>
              Interested in {event.name}?
            </p>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 13, color: '#3B2314', opacity: 0.7, marginTop: 2,
            }}>
              Get in touch for pricing &amp; availability
            </p>
          </div>
          <a
            href={buildWALink(event.keyword)}
            target="_blank"
            rel="noopener noreferrer"
            id={`modal-wa-${event.keyword.toLowerCase().replace(/\s+/g, '-')}`}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '13px 28px',
              background: '#C8960C',
              borderRadius: 10,
              color: '#3B2314',
              fontFamily: "'Outfit', sans-serif",
              fontSize: 15, fontWeight: 700,
              textDecoration: 'none', letterSpacing: '0.04em',
              boxShadow: '0 4px 20px rgba(200,150,12,0.35)',
              transition: 'all 0.25s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F0B429'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#C8960C'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <MessageCircle size={18} />
            Book via WhatsApp
          </a>
        </div>
      </motion.div>

      {/* Internal lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={event.photos}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
