import { Github } from '../components/BrandIcons';
import { useState } from 'react';
import { ArrowDown, ArrowUpRight, LayoutDashboard, LockKeyhole, Plus } from 'lucide-react';
import { projects } from '../data/portfolio';

function ProjectCard({ project, index }) {
  return (
    <article className={`project-card${project.featured ? ' project-card--featured' : ' project-card--compact'}`} id={`project-${project.id}`}>
      <div className={`project-preview preview--${project.theme || 'practice'}`} aria-hidden="true">
        <div className="preview-top"><span>{project.featured ? 'PROJECT OVERVIEW' : 'WEB DESIGN & DEVELOPMENT'}</span><span>/{String(index + 1).padStart(2, '0')}</span></div>
        {project.featured ? <>
          <div className="preview-art"><span className="preview-ring" /><span className="preview-ring preview-ring--inner" /></div>
          <div className="preview-wordmark">{project.id === 'laravel-dashboard' ? <><LayoutDashboard size={31} strokeWidth={1.3} /><span>Laravel<span className="preview-secondary">Dashboard UI</span></span></> : <span>{project.title}<span className="preview-dot">.</span></span>}</div>
          <p className="preview-caption">{project.cover}</p>
        </> : <div className="practice-wordmark">{project.title}<ArrowUpRight size={28} strokeWidth={1} /></div>}
        <div className="preview-bottom"><span>{project.subtitle || 'Responsive website'}</span>{project.id === 'laravel-dashboard' && <LockKeyhole size={14} />}</div>
      </div>
      <div className="project-body">
        <div className="project-meta"><span>{project.category}</span>{project.status && <span className={`project-status${project.id === 'contnvra' ? ' status-development' : ''}`}>{project.status}</span>}</div>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        {project.contributions && <div className="project-contributions"><h4>MY CONTRIBUTION</h4><ul>{project.contributions.map(item => <li key={item}>{item}</li>)}</ul></div>}
        {project.tech.length > 0 && <ul className="project-technologies" aria-label="Technologies">{project.tech.map(tech => <li key={tech}>{tech}</li>)}</ul>}
        {(project.demo || project.repo) && <div className="project-links">
          {project.demo && <a href={project.demo} className="text-link">View Project <ArrowUpRight size={17} aria-hidden="true" /></a>}
          {project.repo && <a href={project.repo} className="text-link"><Github size={16} aria-hidden="true" /> Source Code</a>}
        </div>}
        {project.id === 'laravel-dashboard' && <p className="project-note"><LockKeyhole size={13} aria-hidden="true" /> Company work · Internal code and screens are private</p>}
      </div>
    </article>
  );
}

export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  const visibleProjects = expanded ? projects : projects.filter(project => project.featured);
  const additionalCount = projects.filter(project => !project.featured).length;

  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-label"><span>03 / SELECTED WORK</span><span>From interfaces to applications</span></div>
        <div className="section-heading reveal"><h2 id="projects-title">Selected work<br /><em>& projects.</em></h2><p>A selection of professional development work and applications I've built or contributed to. Clear scope, real contributions.</p></div>
        <div id="project-grid" className="projects-grid">{visibleProjects.map((project, index) => <ProjectCard project={project} index={index} key={project.id} />)}</div>
        <div className="more-projects"><span>More explorations in web development</span><button type="button" className="button button-outline" aria-expanded={expanded} aria-controls="project-grid" onClick={() => setExpanded(!expanded)}>{expanded ? 'Show selected projects' : `Explore ${additionalCount} more projects`}{expanded ? <ArrowDown className="rotate-arrow" size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}</button></div>
      </div>
    </section>
  );
}
