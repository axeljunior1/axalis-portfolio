import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { CheckIcon, SCENARIO_ICONS } from '../components/icons.jsx';
import { solutions } from '../data/solutions.js';
import { projects } from '../data/projects.js';

export default function SolutionPage({ solution }) {
  useEffect(() => {
    document.title = `${solution.title} — AXALIS`;
  }, [solution.title]);

  const related = solutions.filter((s) => s.slug !== solution.slug);
  const examples = solution.examples;
  const exampleProjects = examples.type === 'projects'
    ? examples.ids.map((id) => projects.find((p) => p.id === id)).filter(Boolean)
    : [];

  return (
    <>
      <section className="axis-hero">
        <div className="wrap">
          <Breadcrumb current={solution.title} />
          <span className="eyebrow">Solution {solution.number}</span>
          <h1>{solution.title}</h1>
          <p className="lead">{solution.lead}</p>
          <div className="hero-ctas">
            <Link className="btn btn-primary" to="/#contact">{solution.ctaLabel}</Link>
            <a className="btn btn-ghost" href={examples.type === 'projects' ? '#exemples' : '#formats'}>
              {examples.type === 'projects' ? 'Voir des exemples' : `Voir les ${examples.heading.toLowerCase()}`}
            </a>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="content-grid">
            <div className="content-block">
              <h2>Besoins concernés</h2>
              <ul className="check-list">
                {solution.besoins.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="content-block">
              <h2>Ce que nous mettons en place</h2>
              <ul className="check-list solutions">
                {solution.miseEnPlace.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {examples.type === 'projects' ? (
            <div id="exemples" style={{ marginTop: 72 }}>
              <span className="eyebrow">Exemples</span>
              <h2 style={{ marginTop: 10, fontSize: '1.3rem' }}>Des projets démonstratifs pour illustrer le type de résultat</h2>
              <div className="demo-note" style={{ marginTop: 14 }}>
                <span className="dot"></span> Projets démonstratifs — nos références clients arrivent prochainement.
              </div>
              <div className="projects" style={{ marginTop: 22 }}>
                {exampleProjects.map((project) => (
                  <ProjectCard project={project} key={project.id} />
                ))}
              </div>
            </div>
          ) : (
            <div id="formats" style={{ marginTop: 72 }}>
              <span className="eyebrow">{examples.heading}</span>
              <h2 style={{ marginTop: 10, fontSize: '1.3rem' }}>{examples.subheading}</h2>
              <div className="scenarios" style={{ marginTop: 22 }}>
                {examples.items.map((item) => {
                  const Icon = SCENARIO_ICONS[item.icon];
                  return (
                    <div className="scenario" key={item.title}>
                      <span className="ico"><Icon /></span>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="cta-banner">
            <div>
              <h3>{solution.ctaBannerTitle}</h3>
              <p>Étude et devis gratuits — décrivez-nous votre besoin, même encore flou.</p>
            </div>
            <Link className="btn btn-primary" to="/#contact">{solution.ctaLabel}</Link>
          </div>

          <div className="related-nav">
            {related.map((s) => (
              <Link to={`/solutions/${s.slug}`} key={s.slug}>
                {s.title} <span>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
