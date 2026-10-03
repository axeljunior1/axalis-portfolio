import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolle vers l'ancre de section (#besoins, #contact...) après chaque
// navigation, y compris quand on arrive depuis une autre page (ex. depuis
// une page solution vers "/#contact").
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
}
