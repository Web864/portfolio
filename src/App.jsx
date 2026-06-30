import { useState } from 'react'
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
  const [count, setCount] = useState(0)

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
