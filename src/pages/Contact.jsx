import { Github, Linkedin } from '../components/BrandIcons';
import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(data.get('subject'));
    const body = encodeURIComponent(`${data.get('message')}\n\nFrom: ${data.get('name')} <${data.get('email')}>`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-label"><span>05 / LET'S CONNECT</span><span>The next good thing starts with a conversation</span></div>
        <div className="contact-grid">
          <div className="contact-copy reveal">
            <p className="eyebrow">LET’S BUILD SOMETHING MEANINGFUL</p>
            <h2 id="contact-title">Have a project<br /><em>or opportunity in mind?</em><span className="contact-star" aria-hidden="true">✳</span></h2>
            <p>I'm open to frontend development, Laravel application UI, React/Next.js, and full-stack collaboration opportunities. Let's connect and build something meaningful.</p>
            <a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={23} aria-hidden="true" /></a>
            <div className="contact-socials"><a href={profile.github}><Github size={19} aria-hidden="true" />GitHub<ArrowUpRight size={15} aria-hidden="true" /></a><a href={profile.linkedin}><Linkedin size={19} aria-hidden="true" />LinkedIn<ArrowUpRight size={15} aria-hidden="true" /></a></div>
            <p className="contact-location"><MapPin size={16} aria-hidden="true" />{profile.location}</p>
          </div>
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-heading"><span className="icon-box"><Mail size={21} aria-hidden="true" /></span><div><h3>Start a conversation</h3><p>A little about you and what you have in mind.</p></div></div>
            <div className="form-row"><div className="form-field"><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" placeholder="Name" required maxLength={150} /></div><div className="form-field"><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></div></div>
            <div className="form-field"><label htmlFor="contact-subject">What's this about?</label><input id="contact-subject" name="subject" placeholder="A project, a role, an idea…" required maxLength={200} /></div>
            <div className="form-field"><label htmlFor="contact-message">Your message</label><textarea id="contact-message" name="message" rows={4} placeholder="Tell me a little more…" required maxLength={3000} /></div>
            <button type="submit" className="button button-primary">Open Email Draft <Send size={17} aria-hidden="true" /></button>
            <p className="form-note">Opens your email app with a draft to review and send.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
