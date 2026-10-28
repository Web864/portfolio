import { Braces, Layers3, Workflow } from 'lucide-react';

const strengths = [
  { Icon: Layers3, title: 'Laravel Admin Dashboard Frontend', description: 'Responsive, usable interfaces within existing Laravel applications.' },
  { Icon: Braces, title: 'Modern React & Next.js Interfaces', description: 'Maintainable components that turn designs into working experiences.' },
  { Icon: Workflow, title: 'API-Connected Web Applications', description: 'Connecting thoughtful interfaces with services and data workflows.' },
];

export default function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="container">
        <div className="section-label"><span>01 / ABOUT</span><span>A little context</span></div>
        <div className="about-grid reveal">
          <h2 id="about-title">Building interfaces that make complex applications <em>feel simple.</em></h2>
          <div className="about-copy">
            <p> Frontend Developer with hands-on experience building interfaces for live Laravel-based admin dashboards at Career Institute.</p>
            <p>I work with React, Next.js, JavaScript, TypeScript, and Tailwind CSS to build responsive and maintainable web experiences.</p>
            <p>My background also includes PHP, MySQL, API integration, and AI-assisted application development. I enjoy transforming ideas and designs into functional digital products.</p>
          </div>
        </div>
        <div className="strength-grid">
          {strengths.map(({ Icon, title, description }, index) => (
            <article className="strength-card reveal" key={title}>
              <div className="strength-top"><Icon size={23} aria-hidden="true" /><span>0{index + 1}</span></div>
              <h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
