import { Link } from 'react-router-dom';
import heroIllustration from '../assets/hero-illustration.webp';

export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-arc" aria-hidden="true"></div>
      <div className="wrap hero-grid">
        <div>
          <span className="badge">Cameroun · Europe</span>
          <h1>Vos idées.<br /><span className="accent">Nos solutions.</span></h1>
          <p className="lead">AXALIS accompagne les entreprises et les porteurs de projets dans la création d'applications, l'automatisation de leurs activités et le renforcement de leurs équipes techniques.</p>
          <div className="hero-ctas">
            <Link className="btn btn-primary" to="/#contact">Parlons de votre projet</Link>
            <Link className="btn btn-ghost" to="/#solutions">Découvrir nos solutions</Link>
          </div>
        </div>
        <div className="hero-visual">
          <img
            className="hero-image"
            src={heroIllustration}
            alt="Tableau de bord métier affiché sur ordinateur portable et mobile, connecté à des modules de stock, d'équipe, de documents et d'automatisation."
            width="1680"
            height="947"
          />
        </div>
      </div>
    </section>
  );
}
