import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experince from './pages/Experince';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

export default function App() {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches || !('IntersectionObserver' in window)) return;
    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.documentElement.classList.add('reveal-enabled');
    items.forEach(item => observer.observe(item));
    const handleMotionChange = () => {
      if (media.matches) {
        document.documentElement.classList.remove('reveal-enabled');
        observer.disconnect();
      }
    };
    media.addEventListener('change', handleMotionChange);
    return () => {
      observer.disconnect();
      media.removeEventListener('change', handleMotionChange);
      document.documentElement.classList.remove('reveal-enabled');
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experince />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
