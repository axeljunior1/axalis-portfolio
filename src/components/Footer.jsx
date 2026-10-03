import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';

const FOOT_LINKS = [
  { href: '/#besoins', label: 'Besoins' },
  { href: '/#solutions', label: 'Solutions' },
  { href: '/#difference', label: 'Différence' },
  { href: '/#realisations', label: 'Réalisations' },
  { href: '/#approche', label: 'Approche' },
  { href: '/#apropos', label: 'À propos' },
  { href: '/#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-row">
          <Logo />
          <ul className="foot-links">
            {FOOT_LINKS.map((link) => (
              <li key={link.href}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="foot-bottom">
          <span>© 2026 AXALIS — Cameroun · Europe</span>
          <span>contact@axalis.com</span>
        </div>
      </div>
    </footer>
  );
}
