import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';

const NAV_LINKS = [
  { href: '/#besoins', label: 'Besoins' },
  { href: '/#solutions', label: 'Solutions' },
  { href: '/#difference', label: 'Différence' },
  { href: '/#realisations', label: 'Réalisations' },
  { href: '/#approche', label: 'Approche' },
  { href: '/#apropos', label: 'À propos' },
];

export default function Header() {
  return (
    <header className="site">
      <div className="wrap nav-row">
        <Logo />
        <nav>
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link className="nav-cta" to="/#contact">Parlons de votre projet</Link>
      </div>
    </header>
  );
}
