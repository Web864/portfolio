import { ArrowUpRight, GraduationCap } from 'lucide-react';
import { education, experience } from '../data/portfolio';

export default function Experince() {
  return (
    <section id="experience" className="section experience-section" aria-labelledby="experience-title">
      <div className="container">
        <div className="section-label"><span>04 / THE JOURNEY</span><span>Experience & education</span></div>
        <div className="section-heading reveal"><h2 id="experience-title">Learning. Building.<br /><em>Moving forward.</em></h2><p>Professional experience, practical foundations, and a commitment to growing with every project.</p></div>
        <div className="journey-grid">
          <div><h3 className="column-label">PROFESSIONAL EXPERIENCE <ArrowUpRight size={17} aria-hidden="true" /></h3>
            <ol className="timeline">{experience.map(job => (
              <li className={`timeline-item reveal${job.current ? ' is-current' : ''}`} key={job.id}>
                <div className="timeline-meta"><span>{job.date}</span>{job.current && <span className="current-label">CURRENT</span>}</div>
                <h4>{job.role}</h4><p className="timeline-company">{job.company}</p>
                <ul className="timeline-description">{job.points.map(point => <li key={point}>{point}</li>)}</ul>
              </li>
            ))}</ol>
          </div>
          <aside className="education-panel reveal" aria-labelledby="education-title">
            <div className="education-heading"><GraduationCap size={23} aria-hidden="true" /><h3 id="education-title">Education</h3></div>
            <ol className="education-list">{education.map(item => <li key={item.degree}><span className="education-date">{item.date}</span><h4>{item.degree}</h4><p>{item.institution}</p></li>)}</ol>
            <p className="education-footnote">A foundation in computing.<br />A curiosity that keeps growing.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
