import { useEffect } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import CookieBanner from './components/CookieBanner'
import Home from './pages/Home'
import Privacy from './pages/Privacy'

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <HashRouter>
      <ScrollToHash />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacidad" element={<Privacy />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </div>
    </HashRouter>
  )
}

export default App
