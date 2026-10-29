import { Braces, Layers3, Workflow } from 'lucide-react';

const strengths = [
  { Icon: Layers3, title: 'Responsive Application Interfaces', description: 'Clear layouts and thoughtful interactions.' },
  { Icon: Braces, title: 'Modern React & Next.js Interfaces', description: 'Reusable components, built with care.' },
  { Icon: Workflow, title: 'API-Connected Web Applications', description: 'Interfaces connected to services and data.' },
];

export default function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="container">
        <div className="section-label"><span>01 / ABOUT</span><span>A little context</span></div>
        <div className="about-grid reveal">
          <h2 id="about-title">Building interfaces that make complex applications <em>feel simple.</em></h2>
          <div className="about-copy">
            <p>I'm a Frontend Developer focused on making practical web applications clear, responsive, and easy to use.</p>
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
