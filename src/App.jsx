import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import SplashScreen from './components/SplashScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [bookingEvent, setBookingEvent] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen key="splash" />}
      </AnimatePresence>

      <AnimatePresence>
        {!showSplash && (
          <div key="main">
            <Navbar />
            <main>
              <Hero />
              <Services onBook={(event) => setBookingEvent(event)} />
              <WhyChooseUs />
              <Gallery />
              <Testimonials />
              <Contact />
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>

      {/* Global Booking Modal */}
      <AnimatePresence>
        {bookingEvent && (
          <BookingModal
            key="booking-modal"
            event={bookingEvent}
            onClose={() => setBookingEvent(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
