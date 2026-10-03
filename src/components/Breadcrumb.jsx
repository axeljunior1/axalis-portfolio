import { Link } from 'react-router-dom';

export default function Breadcrumb({ current }) {
  return (
    <nav className="breadcrumb" aria-label="Fil d'Ariane">
      <Link to="/#accueil">Accueil</Link>
      <span className="sep">/</span>
      <Link to="/#solutions">Solutions</Link>
      <span className="sep">/</span>
      <span className="current">{current}</span>
    </nav>
  );
}
