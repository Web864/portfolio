import { ArrowUp } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="site-footer"><div className="container footer-inner">
      <a className="footer-name" href="#hero">{profile.name}<span>.</span></a>
      <p>Designed & built with care · © {new Date().getFullYear()}</p>
      <a className="back-to-top" href="#hero">Back to top <ArrowUp size={16} aria-hidden="true" /></a>
    </div></footer>
  );
}
