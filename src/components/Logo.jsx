import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link className="logo" to="/#accueil">
      <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 34L20 6L22.5 6L17 34L14 34Z" fill="var(--navy-900)" />
        <path d="M24 34L18 6L20.5 6L26.5 34L24 34Z" fill="var(--orange-500)" />
      </svg>
      <span>
        <span className="logo-word">AXAL<b>I</b>S</span>
        <span className="logo-tag">Digital solutions &amp; development</span>
      </span>
    </Link>
  );
}
