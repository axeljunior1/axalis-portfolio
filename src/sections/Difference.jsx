const SCENARIOS = [
  {
    title: 'Boutique',
    text: "La caisse continue d'enregistrer les ventes même sans réseau, puis se synchronise en fin de journée.",
    icon: (
      <>
        <path d="M3 9l1.5-5h15L21 9" />
        <path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9" />
        <path d="M9 20v-6h6v6" />
      </>
    ),
  },
  {
    title: 'Entrepôt',
    text: "L'inventaire est scanné zone par zone, sans dépendre d'une connexion stable sur place.",
    icon: (
      <>
        <rect x="2" y="7" width="20" height="13" rx="1.5" />
        <path d="M7 7V4h10v3" />
        <path d="M8 13h3" />
      </>
    ),
  },
  {
    title: 'Équipe en déplacement',
    text: 'Les rapports de terrain sont enregistrés localement, puis transmis dès le retour du signal.',
    icon: (
      <>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
      </>
    ),
  },
];

export default function Difference() {
  return (
    <section className="section" id="difference">
      <div className="wrap">
        <div className="diff-grid">
          <div>
            <span className="eyebrow">Notre différence</span>
            <h2 style={{ marginTop: 10, fontSize: 'clamp(1.6rem,2.6vw,2.2rem)' }}>
              Votre activité continue.<br />Même lorsque la connexion ne suit pas.
            </h2>
            <p style={{ color: 'var(--muted)', marginTop: 16 }}>
              Une connexion instable ne devrait pas bloquer votre travail. Selon vos besoins, nous concevons des applications capables de fonctionner localement et de synchroniser les données lorsque la connexion revient.
            </p>

            <div className="diff-flow" aria-hidden="true">
              <span className="flow-step">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M1 9a16 16 0 0 1 22 0" />
                  <path d="M5 13a10.5 10.5 0 0 1 14 0" opacity=".3" />
                  <line x1="12" y1="20" x2="12" y2="20" />
                </svg>
                Saisie hors ligne
              </span>
              <span className="flow-arrow">→</span>
              <span className="flow-step">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M3 9h18" />
                </svg>
                Stockage local
              </span>
              <span className="flow-arrow">→</span>
              <span className="flow-step">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                  <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
                </svg>
                Synchronisation
              </span>
            </div>
          </div>

          <div className="scenarios">
            {SCENARIOS.map((s) => (
              <div className="scenario" key={s.title}>
                <span className="ico">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {s.icon}
                  </svg>
                </span>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
