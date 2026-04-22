import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, ChevronDown, CalendarCheck } from 'lucide-react'

const words = ["Creating", "Moments,", "Crafting", "Memories"]

export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false)

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* ── Looping Video Background ── */}
      {!videoFailed && (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://source.unsplash.com/1600x900/?kerala,wedding,reception"
          onError={() => setVideoFailed(true)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            willChange: 'transform',
            transform: 'translateZ(0)',
          }}
        >
          <source
            src="https://videos.pexels.com/video-files/3843442/3843442-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
      )}

      {/* ── Ken Burns Fallback (only when video fails) ── */}
      {videoFailed && (
        <div
          className="hero-fallback"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(https://source.unsplash.com/1600x900/?kerala,wedding,reception)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
          }}
        />
      )}

      {/* ── Cinematic Dark Gradient Overlay ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(59,35,20,0.97) 0%, rgba(139,26,26,0.55) 40%, rgba(0,0,0,0.35) 100%)',
        zIndex: 1,
      }} />

      {/* ── Kerala Pattern Top Strip ── */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '3px',
        background: 'repeating-linear-gradient(90deg, #C8960C 0px, #C8960C 10px, transparent 10px, transparent 20px)',
        zIndex: 2,
      }} />

      {/* ── Hero Content ── */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        padding: '0 20px',
        maxWidth: '900px',
        width: '100%',
      }}>

        {/* Gold label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.3em',
            color: '#C8960C',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          <span>✦</span>
          <span>KOTTAKKAL, MALAPPURAM</span>
          <span>✦</span>
        </motion.div>

        {/* Main heading — staggered word reveal */}
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(36px, 7vw, 80px)',
          fontWeight: 700,
          color: '#FFFFFF',
          lineHeight: 1.15,
          marginBottom: '24px',
        }}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              style={{ display: 'inline-block', marginRight: '0.25em' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.6, ease: 'easeOut' }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(15px, 2.5vw, 20px)',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.82)',
            marginBottom: '40px',
            letterSpacing: '0.02em',
          }}
        >
          Premium Catering &amp; Full Event Management across Kerala
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          {/* Call Now */}
          <a
            href="tel:+919876543210"
            id="hero-call-btn"
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px',
              border: '2px solid #FFFFFF',
              borderRadius: '8px',
              color: '#FFFFFF',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: '0.05em',
              transition: 'all 0.3s',
              background: 'transparent',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#FFFFFF'
              e.currentTarget.style.color = '#8B1A1A'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#FFFFFF'
            }}
          >
            <Phone size={18} />
            Call Now
          </a>

          {/* Book Now → Scrolls to Services */}
          <button
            id="hero-book-btn"
            onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            className="pulse-wa"
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px',
              background: '#C8960C',
              borderRadius: '8px',
              color: '#3B2314',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '15px',
              fontWeight: 700,
              letterSpacing: '0.05em',
              border: '2px solid #C8960C',
              transition: 'all 0.3s',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#F0B429'
              e.currentTarget.style.borderColor = '#F0B429'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#C8960C'
              e.currentTarget.style.borderColor = '#C8960C'
            }}
          >
            <CalendarCheck size={18} />
            Book Now
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="bounce-chevron"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#C8960C',
          cursor: 'pointer',
          zIndex: 10,
        }}
        onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={36} strokeWidth={1.5} />
      </motion.div>
    </section>
  )
}
