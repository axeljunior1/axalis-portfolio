import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const closeMenu = () => setMenuOpen(false);

  // Referme le menu mobile à chaque navigation.
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Menu ouvert : bloque le défilement de la page et ferme avec Échap.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
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
          <button
            type="button"
            className="nav-toggle"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
        <nav id="mobile-menu" className={`mobile-menu${menuOpen ? ' is-open' : ''}`} aria-label="Navigation principale">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link to={link.href} onClick={closeMenu}>
                  {link.label}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
          <Link className="btn btn-primary mobile-menu-cta" to="/#contact" onClick={closeMenu}>
            Parlons de votre projet
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </nav>
      </header>
      {menuOpen && <div className="mobile-menu-backdrop" onClick={closeMenu} aria-hidden="true" />}
    </>
  );
}
