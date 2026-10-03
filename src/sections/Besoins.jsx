import { Link } from 'react-router-dom';

const DOORS = [
  {
    title: 'Lancer un projet',
    text: "Vous avez une idée de plateforme, de site ou d'application ? Donnons-lui une forme concrète.",
    icon: (
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
    ),
    iconExtra: (
      <>
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </>
    ),
  },
  {
    title: 'Mieux gérer votre entreprise',
    text: 'Vos fichiers se multiplient et certaines tâches vous prennent trop de temps ? Construisons un outil adapté à votre fonctionnement.',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18" />
        <path d="M8 4v6" />
      </>
    ),
  },
  {
    title: 'Renforcer votre équipe',
    text: 'Vous avez besoin de compétences supplémentaires pour faire avancer un projet ?',
    icon: (
      <>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M2.5 20c.6-3.4 3.2-5.4 6.5-5.4s5.9 2 6.5 5.4" />
        <circle cx="18" cy="8" r="2.4" />
        <path d="M15.6 14.8c2.6.3 4.3 2 4.8 4.9" />
      </>
    ),
  },
];

export default function Besoins() {
  return (
    <section className="section" id="besoins">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Par où commencer</span>
          <h2>Qu'aimeriez-vous simplifier dans votre activité&nbsp;?</h2>
        </div>
        <div className="doors">
          {DOORS.map((door) => (
            <Link className="door" to="/#solutions" key={door.title}>
              <span className="door-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {door.icon}
                  {door.iconExtra}
                </svg>
              </span>
              <h3>{door.title}</h3>
              <p>{door.text}</p>
              <span className="go">Voir les solutions →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
