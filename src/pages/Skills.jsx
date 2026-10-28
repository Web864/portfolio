import { Braces, Database, Fingerprint, PanelsTopLeft, Wrench } from 'lucide-react';
import { skillGroups } from '../data/portfolio';

const icons = { frontend: PanelsTopLeft, laravel: Braces, data: Database, auth: Fingerprint, tools: Wrench };

export default function Skills() {
  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-label"><span>02 / TOOLKIT</span><span>Built for real work</span></div>
        <div className="section-heading reveal"><h2 id="skills-title">The tools behind<br /><em>the interfaces.</em></h2><p>A practical toolkit for professional frontend work and personal application projects. Always learning, always validating.</p></div>
        <div className="skills-grid">
          {skillGroups.map(group => {
            const Icon = icons[group.id];
            return (
              <article className={`skill-card reveal skill-card--${group.id}`} key={group.id}>
                <div className="skill-card-heading"><span className="icon-box"><Icon size={21} aria-hidden="true" /></span><h3>{group.title}</h3></div>
                <p>{group.description}</p>
                <ul className="technology-list">{group.items.map(item => <li key={item}>{item}</li>)}</ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
