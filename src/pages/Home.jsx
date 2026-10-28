import { Github, Linkedin } from '../components/BrandIcons';
import { ArrowDown, ArrowDownRight, ArrowUpRight, Download, MapPin } from 'lucide-react';
import portrait from '../assets/img/portrait.jpg';
import { profile } from '../data/portfolio';

export default function Home() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <p className="availability"><span aria-hidden="true" />Open to opportunities</p>
            <p className="eyebrow hero-eyebrow">A THOUGHTFUL APPROACH TO THE WEB</p>
            <h1 id="hero-title">Rabia <span>Naz<span className="name-period">.</span></span></h1>
            <p className="hero-headline">{profile.headline}</p>
            <p className="hero-description">{profile.intro}</p>
            <div className="hero-actions">
              <a href="#projects" className="button button-primary">View My Work <ArrowUpRight size={19} aria-hidden="true" /></a>
              <a href={`${import.meta.env.BASE_URL}${profile.cv}`} download className="button button-outline">Download CV <Download size={17} aria-hidden="true" /></a>
              <a href="#contact" className="text-link">Contact Me <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <div className="hero-socials">
              <a href={profile.github}><Github size={17} aria-hidden="true" /> GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>
              <a href={profile.linkedin}><Linkedin size={17} aria-hidden="true" /> LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="hero-portrait">
            <span className="portrait-orbit" aria-hidden="true" />
            <div className="portrait-frame"><img src={portrait} alt="Rabia Naz" width="720" height="720" fetchPriority="high" /></div>
            <span className="portrait-spark" aria-hidden="true">✳</span>
            <div className="portrait-caption"><span className="caption-mark" aria-hidden="true"><ArrowDownRight size={24} /></span><div><span>FOCUSED ON THE DETAILS</span><p>Thoughtful UI. Practical code.</p></div></div>
            <p className="portrait-location"><MapPin size={13} aria-hidden="true" /> Based in Pakistan</p>
          </div>
        </div>
        <div className="hero-bottom">
          <p>FRONTEND CRAFT <span>/</span> APPLICATION THINKING <span>/</span> CONTINUOUS LEARNING</p>
          <a href="#about">A little about me <ArrowDown size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
