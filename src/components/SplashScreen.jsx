import { motion } from 'framer-motion'

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ backgroundColor: '#8B1A1A' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
    >
      {/* Decorative top pattern */}
      <div className="absolute top-0 left-0 right-0 h-2"
        style={{ background: 'repeating-linear-gradient(90deg, #C8960C 0px, #C8960C 8px, transparent 8px, transparent 16px)' }}
      />

      {/* MK Letters */}
      <motion.h1
        className="shimmer-text"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(80px, 20vw, 180px)',
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        MK
      </motion.h1>

      {/* Company name */}
      <motion.p
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(18px, 4vw, 32px)',
          color: '#FFFFFF',
          letterSpacing: '0.12em',
          fontWeight: 400,
          marginTop: '8px',
        }}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
      >
        CATERS &amp; EVENTS
      </motion.p>

      {/* Location */}
      <motion.p
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(12px, 2.5vw, 16px)',
          color: '#C8960C',
          letterSpacing: '0.2em',
          fontStyle: 'italic',
          marginTop: '10px',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        Kottakkal, Malappuram
      </motion.p>

      {/* Decorative gold line drawing */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '28px' }}>
        <motion.div
          style={{ height: '1px', backgroundColor: '#C8960C', transformOrigin: 'right center' }}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 120, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6, ease: 'easeOut' }}
        />
        <motion.div
          style={{ width: 8, height: 8, backgroundColor: '#C8960C', borderRadius: '50%' }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.3 }}
        />
        {/* Lotus SVG */}
        <motion.svg
          width="28" height="28" viewBox="0 0 32 32" fill="none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.4 }}
        >
          <path d="M16 28 C16 22, 8 18, 6 12 C10 14, 14 18, 16 22 C18 18, 22 14, 26 12 C24 18, 16 22, 16 28Z" fill="#C8960C" opacity="0.9"/>
          <path d="M16 28 C12 22, 4 20, 4 14 C8 16, 12 20, 16 26 Z" fill="#C8960C" opacity="0.6"/>
          <path d="M16 28 C20 22, 28 20, 28 14 C24 16, 20 20, 16 26 Z" fill="#C8960C" opacity="0.6"/>
          <path d="M16 22 C16 16, 13 10, 10 6 C14 10, 16 16, 16 20 C16 16, 18 10, 22 6 C19 10, 16 16, 16 22Z" fill="#F0B429" opacity="0.8"/>
          <circle cx="16" cy="22" r="2" fill="#C8960C"/>
        </motion.svg>
        <motion.div
          style={{ width: 8, height: 8, backgroundColor: '#C8960C', borderRadius: '50%' }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.3 }}
        />
        <motion.div
          style={{ height: '1px', backgroundColor: '#C8960C', transformOrigin: 'left center' }}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 120, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6, ease: 'easeOut' }}
        />
      </div>

      {/* Bottom pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-2"
        style={{ background: 'repeating-linear-gradient(90deg, #C8960C 0px, #C8960C 8px, transparent 8px, transparent 16px)' }}
      />
    </motion.div>
  )
}
