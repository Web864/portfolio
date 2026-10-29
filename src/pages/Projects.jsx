import { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, CalendarDays, Check, Fingerprint, Layers3, Leaf, PanelsTopLeft, Plus, Sparkles } from 'lucide-react';
import { Github } from '../components/BrandIcons';
import { projects } from '../data/portfolio';

function ProjectArtwork({ project }) {
  return (
    <figure className={`project-artwork artwork--${project.id}`} aria-label={`${project.title} concept illustration, not a product screenshot`}>
      <div className="artwork-geometric" aria-hidden="true" />
      <div className="artwork-label"><span>PROJECT CONCEPT</span><span>/{project.id === 'contnvra' ? '01' : project.id === 'nutriai' ? '02' : '03'}</span></div>
      {project.id === 'contnvra' ? <div className="content-art">
        <div className="artwork-brand"><Sparkles size={25} strokeWidth={1.3} aria-hidden="true" />Contnvra<span>.</span></div>
        <p>From a brand<br /><em>to a content workflow.</em></p>
        <div className="workflow-illustration" aria-hidden="true">
          <div><span><Layers3 size={22} strokeWidth={1.3} /></span><strong>Brand details</strong><small>Set the direction</small></div>
          <ArrowRight className="workflow-arrow" size={16} />
          <div><span><CalendarDays size={22} strokeWidth={1.3} /></span><strong>Content planning</strong><small>Shape the ideas</small></div>
          <ArrowRight className="workflow-arrow" size={16} />
          <div><span><Check size={22} strokeWidth={1.3} /></span><strong>Review & publish</strong><small>Planned workflow</small></div>
        </div>
      </div> : project.id === 'nutriai' ? <div className="supporting-art">
        <div className="product-emblem nutrition-emblem" aria-hidden="true"><Leaf size={37} strokeWidth={1.1} /></div>
        <div><div className="artwork-brand">NutriAI<span>.</span></div><p>A more personal approach.</p></div>
        <div className="artwork-features"><span><Fingerprint size={15} aria-hidden="true" />Secure sign-in</span><span>Personal workflows</span><span>Web + mobile concept</span></div>
      </div> : <div className="supporting-art">
        <div className="product-emblem prospect-emblem" aria-hidden="true"><PanelsTopLeft size={35} strokeWidth={1.1} /></div>
        <div><div className="artwork-brand">ProspectAI<span>.</span></div><p>One connected application concept.</p></div>
        <div className="artwork-features"><span>Web application</span><span>Admin interface</span><span>Browser extension</span></div>
      </div>}
      <figcaption>Illustrative concept · Not a product screenshot</figcaption>
    </figure>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card${project.featured ? ' project-card--featured' : ' project-card--compact'}${project.id === 'contnvra' ? ' project-card--primary' : ''}`} id={`project-${project.id}`}>
      {project.featured && <ProjectArtwork project={project} />}
      <div className="project-body">
        <div className="project-meta"><span>{project.category}</span>{project.status && <span className={`project-status${project.id === 'contnvra' ? ' status-development' : ''}`}>{project.status}</span>}</div>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        {project.contributions && <div className="project-contributions"><h4>{project.id === 'contnvra' ? 'CURRENT WORK & PLANNED SCOPE' : 'MY CONTRIBUTION'}</h4><ul>{project.contributions.map(item => <li key={item}>{item}</li>)}</ul></div>}
        {project.tech.length > 0 && <ul className="project-technologies" aria-label="Technologies">{project.tech.map(tech => <li key={tech}>{tech}</li>)}</ul>}
        {(project.demo || project.repo) && <div className="project-links">
          {project.demo && <a href={project.demo} className="text-link">View Project <ArrowUpRight size={17} aria-hidden="true" /></a>}
          {project.repo && <a href={project.repo} className="text-link"><Github size={16} aria-hidden="true" /> Source Code</a>}
        </div>}
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
        <div className="section-label"><span>03 / SELECTED WORK</span><span>From ideas to applications</span></div>
        <div className="section-heading reveal"><h2 id="projects-title">Selected work<br /><em>& projects.</em></h2><p>Personal application projects with distinct goals, clear development scope, and practical contributions.</p></div>
        <div id="project-grid" className="projects-grid">{visibleProjects.map(project => <ProjectCard project={project} key={project.id} />)}</div>
        <div className="more-projects"><span>More explorations in responsive web development</span><button type="button" className="button button-outline" aria-expanded={expanded} aria-controls="project-grid" onClick={() => setExpanded(!expanded)}>{expanded ? 'Show featured projects' : `Explore ${additionalCount} more projects`}{expanded ? <ArrowDown className="rotate-arrow" size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}</button></div>
      </div>
    </section>
  );
}
