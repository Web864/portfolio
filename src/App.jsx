import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Experince from './pages/Experince'
import Contact from './pages/Contact'
import Footer from './pages/Footer'



function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll('.fade-up')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      revealItems.forEach((item) => item.classList.add('visible'))
      return
    }

    document.body.classList.add('js-reveal-ready')

    revealItems.forEach((item, index) => {
      item.classList.remove('visible')
      item.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 0.08}s`)
    })

    let lastScrollY = window.scrollY
    const handleScrollDirection = () => {
      const currentScrollY = window.scrollY
      document.body.classList.toggle('scrolling-up', currentScrollY < lastScrollY)
      document.body.classList.toggle('scrolling-down', currentScrollY >= lastScrollY)
      lastScrollY = currentScrollY
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('visible', entry.isIntersecting)
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    revealItems.forEach((item) => observer.observe(item))
    window.addEventListener('scroll', handleScrollDirection, { passive: true })
    handleScrollDirection()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScrollDirection)
      document.body.classList.remove('js-reveal-ready', 'scrolling-up', 'scrolling-down')
    }
  }, [])

  return (
    <>
    <Header />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Experince />
    <Contact />
    <Footer />




    </>
  )
}

export default App
