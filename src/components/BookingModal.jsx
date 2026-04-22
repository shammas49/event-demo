import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, User, Phone, Calendar, MapPin, Check } from 'lucide-react'

const KERALA_DISTRICTS = [
  'Malappuram','Kozhikode','Thrissur','Palakkad','Kannur','Kasaragod',
  'Wayanad','Ernakulam','Idukki','Kottayam','Alappuzha','Pathanamthitta',
  'Kollam','Thiruvananthapuram'
]

const RECEPTION_OPTIONS = [
  { id:'islamic', icon:'🌙', name:'Islamic Buffet', desc:'Halal-certified spread with Malabar biriyani, pathiri, Arabian-style rice, grilled items, and traditional sweets. Perfect for Nikah, Valima & Muslim celebrations.', badge:'Halal Certified ✓' },
  { id:'normal-buffet', icon:'🍽️', name:'Normal Buffet', desc:'Rich buffet with Kerala sadya items, North & South Indian dishes, live counters, and dessert stations. Ideal for all occasions.', badge:'Most Popular ⭐' },
  { id:'sitting', icon:'🪑', name:'Normal Sitting', desc:'Traditional plated service where guests are seated and served by staff. Includes banana leaf sadya option. Best for intimate family gatherings.', badge:'Traditional Style 🌿' },
]

const MENU_BY_RECEPTION = {
  'islamic': ['🍚 Malabar Biriyani','🫓 Pathiri & Curry','🥩 Arabian Grills','🍮 Halwa & Sweets','🥤 Fresh Juice Counter','🍜 Soup Station'],
  'normal-buffet': ['🍛 Kerala Sadya Items','🍲 North Indian Curries','🍝 Pasta & Continental','🔥 Live Dosa/Appam Counter','🍰 Dessert Station','🥗 Salad Bar'],
  'sitting': ['🍌 Banana Leaf Sadya','🍛 Full Meals (Served)','🍮 Payasam & Sweets','☕ Tea & Snacks','🥘 Special Chef\'s Curry'],
}

const GUEST_OPTIONS = ['Below 100','100 – 300','300 – 500','500+']

const STEP_LABELS = ['Reception','Menu','Guests','Your Details']

export default function BookingModal({ event, onClose }) {
  const [step, setStep] = useState(1)
  const [selectedReception, setSelectedReception] = useState(null)
  const [selectedMenus, setSelectedMenus] = useState([])
  const [selectedGuests, setSelectedGuests] = useState(null)
  const [form, setForm] = useState({ name:'', phone:'', date:'', location:'', district:'', notes:'' })
  const [errors, setErrors] = useState({})
  const [shake, setShake] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  const toggleMenu = (item) => {
    setSelectedMenus(prev => prev.includes(item) ? prev.filter(m => m !== item) : [...prev, item])
  }

  const validateForm = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim() || form.phone.replace(/\D/g,'').length < 10) e.phone = 'Enter a valid 10-digit number'
    if (!form.date) e.date = 'Event date is required'
    else if (new Date(form.date) <= new Date()) e.date = 'Please choose a future date'
    if (!form.location.trim()) e.location = 'Location is required'
    if (!form.district) e.district = 'Please select a district'
    return e
  }

  const handleSubmit = () => {
    const e = validateForm()
    if (Object.keys(e).length) {
      setErrors(e)
      setShake(true)
      setTimeout(() => setShake(false), 600)
      return
    }
    const message = `Assalamu Alaikum MK Caters and Events! 🌙\n\nI would like to book your services. Here are my details:\n\n👤 Name: ${form.name}\n📞 Phone: ${form.phone}\n📍 Location: ${form.location}, ${form.district}\n📅 Event Date: ${form.date}\n\n🎉 Event Type: ${event?.name || 'General'}\n🍽️ Reception Style: ${RECEPTION_OPTIONS.find(r=>r.id===selectedReception)?.name || selectedReception}\n🍱 Menu Preferences: ${selectedMenus.join(', ')}\n👥 Expected Guests: ${selectedGuests}\n\n📝 Special Requests: ${form.notes || 'None'}\n\nKindly contact me with package details and pricing. Thank you!`
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank')
    setSuccess(true)
    setTimeout(() => onClose(), 3000)
  }

  const canNext = () => {
    if (step === 1) return !!selectedReception
    if (step === 2) return selectedMenus.length > 0
    if (step === 3) return !!selectedGuests
    return true
  }

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
  }
  const [direction, setDirection] = useState(1)

  const goNext = () => { setDirection(1); setStep(s => s + 1) }
  const goBack = () => { setDirection(-1); setStep(s => s - 1) }

  const inputStyle = (field) => ({
    width: '100%', padding: '11px 12px 11px 40px',
    fontFamily: "'Outfit', sans-serif", fontSize: 14,
    background: '#FFFDF8', color: '#3B2314',
    border: `1px solid ${errors[field] ? '#DC2626' : '#C8960C'}`,
    borderRadius: 8, outline: 'none',
    transition: 'border 0.2s, box-shadow 0.2s',
  })

  const fieldWrap = { position: 'relative', marginBottom: 18 }
  const iconStyle = { position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#C8960C', pointerEvents: 'none' }
  const labelStyle = { fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 600, color: '#3B2314', marginBottom: 6, display: 'block' }
  const errStyle = { fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#DC2626', marginTop: 4 }

  return (
    <>
      {/* Backdrop — also serves as the flex centering container */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        style={{
          position: 'fixed', inset: 0, zIndex: 10000,
          background: 'rgba(10,5,2,0.75)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '20px',
        }}
        onClick={onClose}
      >
        {/* Modal — centered by parent flex, no conflicting transform */}
        <motion.div
          className="booking-modal-sheet"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          onClick={e => e.stopPropagation()}
          style={{
            width: 'min(640px, 100%)',
            maxHeight: '90vh',
            background: '#FAF6EF',
            borderRadius: 20,
            overflow: 'hidden',
            display: 'flex', flexDirection: 'column',
            boxShadow: '0 32px 100px rgba(0,0,0,0.55)',
            border: '1px solid rgba(200,150,12,0.35)',
            flexShrink: 0,
          }}
        >
        {/* Kerala gold top border */}
        <div style={{ height: 4, background: 'repeating-linear-gradient(90deg,#C8960C 0,#C8960C 8px,#8B1A1A 8px,#8B1A1A 16px,transparent 16px,transparent 24px)' }} />

        {/* Header */}
        <div style={{ padding: '20px 24px 0', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <div>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#C8960C', textTransform: 'uppercase' }}>✦ MK Caters &amp; Events ✦</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#8B1A1A', marginTop: 2 }}>Book Your Event</h2>
              {event && <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#3B2314', opacity: 0.7, marginTop: 2 }}>{event.icon} {event.name}</p>}
            </div>
            <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8B1A1A', padding: 4 }} aria-label="Close modal">
              <X size={24} />
            </button>
          </div>

          {/* Progress bar */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              {STEP_LABELS.map((label, i) => (
                <span key={label} style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', color: i + 1 <= step ? '#C8960C' : 'rgba(59,35,20,0.35)', textTransform: 'uppercase', transition: 'color 0.3s' }}>{label}</span>
              ))}
            </div>
            <div style={{ height: 4, background: 'rgba(200,150,12,0.15)', borderRadius: 2, overflow: 'hidden' }}>
              <motion.div
                animate={{ width: `${((step - 1) / 3) * 100 + 25}%` }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                style={{ height: '100%', background: 'linear-gradient(90deg,#C8960C,#F0B429)', borderRadius: 2 }}
              />
            </div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#3B2314', opacity: 0.5, marginTop: 4, textAlign: 'right' }}>Step {step} of 4</p>
          </div>
        </div>

        {/* Step Content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '0 24px' }}>
          <AnimatePresence mode="wait" custom={direction}>
            {success ? (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '40px 0' }}>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', damping: 12, stiffness: 200 }}
                  style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg,#C8960C,#F0B429)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <Check size={36} color="#FFFFFF" strokeWidth={3} />
                </motion.div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#8B1A1A', marginBottom: 10 }}>Thank you, {form.name}! 🎉</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: '#3B2314', opacity: 0.75, lineHeight: 1.6 }}>Your booking details have been sent to MK Caters and Events via WhatsApp. We'll get back to you shortly!</p>
              </motion.div>
            ) : step === 1 ? (
              <motion.div key="s1" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: '#8B1A1A', margin: '16px 0 14px' }}>Choose Your Reception Style</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingBottom: 4 }}>
                  {RECEPTION_OPTIONS.map(opt => (
                    <motion.div key={opt.id} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                      onClick={() => setSelectedReception(opt.id)}
                      style={{
                        border: selectedReception === opt.id ? '2px solid #C8960C' : '2px solid #E5D5B0',
                        borderRadius: 12, padding: '14px 16px', cursor: 'pointer',
                        background: selectedReception === opt.id ? 'rgba(200,150,12,0.08)' : '#FFFDF8',
                        boxShadow: selectedReception === opt.id ? '0 0 16px rgba(200,150,12,0.3)' : 'none',
                        transition: 'all 0.25s', position: 'relative',
                      }}>
                      {selectedReception === opt.id && (
                        <div style={{ position: 'absolute', top: 10, right: 10, width: 22, height: 22, borderRadius: '50%', background: '#C8960C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Check size={13} color="#fff" strokeWidth={3} />
                        </div>
                      )}
                      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <span style={{ fontSize: 28 }}>{opt.icon}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: '#8B1A1A' }}>{opt.name}</span>
                            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 700, color: '#C8960C', background: 'rgba(200,150,12,0.12)', padding: '2px 8px', borderRadius: 20 }}>{opt.badge}</span>
                          </div>
                          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#3B2314', opacity: 0.7, lineHeight: 1.55 }}>{opt.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : step === 2 ? (
              <motion.div key="s2" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: '#8B1A1A', margin: '16px 0 14px' }}>Select Your Menu Preferences</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, paddingBottom: 4 }}>
                  {(MENU_BY_RECEPTION[selectedReception] || []).map(item => {
                    const sel = selectedMenus.includes(item)
                    return (
                      <motion.button key={item} whileTap={{ scale: 0.95 }} onClick={() => toggleMenu(item)}
                        style={{
                          fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 600,
                          padding: '9px 16px', borderRadius: 40, cursor: 'pointer',
                          background: sel ? '#C8960C' : '#FFFDF8',
                          color: sel ? '#3B2314' : '#3B2314',
                          border: `1.5px solid ${sel ? '#C8960C' : '#C8960C'}`,
                          transition: 'all 0.2s',
                          display: 'flex', alignItems: 'center', gap: 6,
                        }}>
                        {sel && <Check size={12} strokeWidth={3} />}
                        {item}
                      </motion.button>
                    )
                  })}
                </div>
              </motion.div>
            ) : step === 3 ? (
              <motion.div key="s3" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: '#8B1A1A', margin: '16px 0 14px' }}>Approximate Number of Guests</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, paddingBottom: 4 }}>
                  {GUEST_OPTIONS.map(g => (
                    <motion.button key={g} whileTap={{ scale: 0.96 }} onClick={() => setSelectedGuests(g)}
                      style={{
                        fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 700,
                        padding: '14px 28px', borderRadius: 40, cursor: 'pointer',
                        background: selectedGuests === g ? '#C8960C' : '#FFFDF8',
                        color: selectedGuests === g ? '#3B2314' : '#3B2314',
                        border: `2px solid ${selectedGuests === g ? '#C8960C' : '#E5D5B0'}`,
                        boxShadow: selectedGuests === g ? '0 0 14px rgba(200,150,12,0.4)' : 'none',
                        transition: 'all 0.25s',
                      }}>
                      {g}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div key="s4" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}
                className={shake ? 'shake-form' : ''}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: '#8B1A1A', margin: '16px 0 4px' }}>Your Contact Details</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#3B2314', opacity: 0.6, marginBottom: 16 }}>So we can get back to you with the perfect package</p>

                {/* Name */}
                <div style={fieldWrap}>
                  <label style={labelStyle}>Your Full Name *</label>
                  <div style={{ position: 'relative' }}>
                    <User size={16} style={iconStyle} />
                    <input type="text" placeholder="e.g. Mohammed Aslam" value={form.name}
                      onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(er => ({ ...er, name: '' })) }}
                      style={inputStyle('name')}
                      onFocus={e => e.target.style.boxShadow = '0 0 0 2px rgba(139,26,26,0.25)'}
                      onBlur={e => e.target.style.boxShadow = 'none'} />
                  </div>
                  {errors.name && <p style={errStyle}>{errors.name}</p>}
                </div>

                {/* Phone */}
                <div style={fieldWrap}>
                  <label style={labelStyle}>WhatsApp / Phone Number *</label>
                  <div style={{ position: 'relative' }}>
                    <Phone size={16} style={iconStyle} />
                    <input type="tel" placeholder="e.g. +91 98765 43210" value={form.phone}
                      onChange={e => { setForm(f => ({ ...f, phone: e.target.value })); setErrors(er => ({ ...er, phone: '' })) }}
                      style={inputStyle('phone')}
                      onFocus={e => e.target.style.boxShadow = '0 0 0 2px rgba(139,26,26,0.25)'}
                      onBlur={e => e.target.style.boxShadow = 'none'} />
                  </div>
                  {errors.phone && <p style={errStyle}>{errors.phone}</p>}
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#3B2314', opacity: 0.5, marginTop: 3 }}>We'll send your booking confirmation to this number</p>
                </div>

                {/* Date */}
                <div style={fieldWrap}>
                  <label style={labelStyle}>Preferred Event Date *</label>
                  <div style={{ position: 'relative' }}>
                    <Calendar size={16} style={iconStyle} />
                    <input type="date" value={form.date}
                      onChange={e => { setForm(f => ({ ...f, date: e.target.value })); setErrors(er => ({ ...er, date: '' })) }}
                      style={inputStyle('date')}
                      onFocus={e => e.target.style.boxShadow = '0 0 0 2px rgba(139,26,26,0.25)'}
                      onBlur={e => e.target.style.boxShadow = 'none'} />
                  </div>
                  {errors.date && <p style={errStyle}>{errors.date}</p>}
                </div>

                {/* Location */}
                <div style={fieldWrap}>
                  <label style={labelStyle}>Event Location or Venue *</label>
                  <div style={{ position: 'relative' }}>
                    <MapPin size={16} style={iconStyle} />
                    <input type="text" placeholder="e.g. Al Ameen Hall, Kottakkal" value={form.location}
                      onChange={e => { setForm(f => ({ ...f, location: e.target.value })); setErrors(er => ({ ...er, location: '' })) }}
                      style={inputStyle('location')}
                      onFocus={e => e.target.style.boxShadow = '0 0 0 2px rgba(139,26,26,0.25)'}
                      onBlur={e => e.target.style.boxShadow = 'none'} />
                  </div>
                  {errors.location && <p style={errStyle}>{errors.location}</p>}
                </div>

                {/* District */}
                <div style={fieldWrap}>
                  <label style={labelStyle}>District *</label>
                  <select value={form.district}
                    onChange={e => { setForm(f => ({ ...f, district: e.target.value })); setErrors(er => ({ ...er, district: '' })) }}
                    style={{ ...inputStyle('district'), paddingLeft: 12, appearance: 'none' }}>
                    <option value="">Select your district</option>
                    {KERALA_DISTRICTS.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                  {errors.district && <p style={errStyle}>{errors.district}</p>}
                </div>

                {/* Notes */}
                <div style={fieldWrap}>
                  <label style={labelStyle}>Any Special Requests or Notes <span style={{ fontWeight: 400, opacity: 0.6 }}>(Optional)</span></label>
                  <textarea rows={3} placeholder="e.g. Need stage decoration, live music, specific dietary requirements..."
                    value={form.notes}
                    onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                    style={{ ...inputStyle('notes'), paddingLeft: 12, resize: 'vertical', minHeight: 80 }} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Nav */}
        {!success && (
          <div style={{ padding: '16px 24px 20px', borderTop: '1px solid rgba(200,150,12,0.15)', display: 'flex', gap: 12, flexShrink: 0 }}>
            {step > 1 && (
              <button onClick={goBack}
                style={{ flex: 1, padding: '13px', fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 600, background: 'transparent', border: '1.5px solid #C8960C', borderRadius: 10, color: '#8B1A1A', cursor: 'pointer', transition: 'all 0.2s' }}>
                ← Back
              </button>
            )}
            {step < 4 ? (
              <motion.button whileTap={{ scale: 0.97 }} onClick={goNext} disabled={!canNext()}
                style={{ flex: 2, padding: '13px', fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 700, background: canNext() ? 'linear-gradient(135deg,#C8960C,#F0B429)' : 'rgba(200,150,12,0.3)', border: 'none', borderRadius: 10, color: canNext() ? '#3B2314' : 'rgba(59,35,20,0.4)', cursor: canNext() ? 'pointer' : 'not-allowed', transition: 'all 0.25s' }}>
                Continue →
              </motion.button>
            ) : (
              <motion.button whileTap={{ scale: 0.97 }} onClick={handleSubmit}
                style={{ flex: 2, padding: '13px', fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 700, background: 'linear-gradient(135deg,#C8960C,#F0B429)', border: 'none', borderRadius: 10, color: '#3B2314', cursor: 'pointer', boxShadow: '0 4px 20px rgba(200,150,12,0.4)' }}>
                📲 Confirm &amp; Send via WhatsApp
              </motion.button>
            )}
          </div>
        )}
        </motion.div>
      </motion.div>
    </>
  )
}
