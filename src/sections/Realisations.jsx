import { projects } from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.jsx';

export default function Realisations() {
  return (
    <section className="section" style={{ background: 'var(--surface-2)' }} id="realisations">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Réalisations</span>
          <h2>Des solutions concrètes pour des besoins concrets.</h2>
          <p>Découvrez comment nous abordons la gestion, l'automatisation et la création de services numériques.</p>
        </div>
        <div className="demo-note"><span className="dot"></span> Projets démonstratifs — nos références clients arrivent prochainement.</div>

        <div className="projects">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
