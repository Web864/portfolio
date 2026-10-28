import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '../data/portfolio';

const navigation = [
  ['hero', 'Home'], ['about', 'About'], ['skills', 'Skills'],
  ['projects', 'Projects'], ['experience', 'Experience'], ['contact', 'Contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);
  const navigationRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    navigationRef.current?.querySelector('a')?.focus();
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const closeOutside = (event) => {
      if (!navigationRef.current?.contains(event.target) && !menuButton.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOutside);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOutside);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#hero" aria-label={`${profile.name}, home`} onClick={() => setOpen(false)}>
          <span className="wordmark-symbol" aria-hidden="true">rn<span>.</span></span>
          <span className="wordmark-label">RABIA NAZ<span>FRONTEND DEVELOPER</span></span>
        </a>
        <nav ref={navigationRef} id="main-navigation" className={`main-nav${open ? ' is-open' : ''}`} aria-label="Main navigation">
          {navigation.map(([id, label]) => (
            <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <a href="#contact" className="button button-small button-outline">Let's talk <ArrowUpRight size={16} aria-hidden="true" /></a>
          <button ref={menuButton} className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
    </header>
  );
}
