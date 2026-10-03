import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page introuvable — AXALIS';
  }, []);

  return (
    <section className="not-found">
      <div className="wrap">
        <span className="eyebrow">Erreur 404</span>
        <h1>Cette page n'existe pas (ou plus).</h1>
        <p>Le lien suivi est peut-être incorrect ou la page a été déplacée. Revenez à l'accueil pour retrouver nos solutions, nos réalisations et nos coordonnées.</p>
        <Link className="btn btn-primary" to="/#accueil">Retour à l'accueil</Link>
      </div>
    </section>
  );
}
