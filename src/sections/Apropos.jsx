const PEOPLE = [
  {
    name: 'Axel',
    role: 'Développement & relation projets',
    bio: "Cadrage des besoins, développement d'applications et suivi des projets côté Europe.",
    location: 'France',
  },
  {
    name: 'Alain',
    role: 'Développement & architecture technique',
    bio: 'Conception technique, automatisation et solutions adaptées aux contraintes de connexion.',
    location: 'Italie',
  },
];

export default function Apropos() {
  return (
    <section className="section" style={{ background: 'var(--surface-2)' }} id="apropos">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">À propos</span>
          <h2>Des interlocuteurs accessibles, entre l'Europe et le Cameroun.</h2>
          <p>AXALIS réunit des compétences techniques et une connaissance des réalités du terrain pour accompagner les entreprises et les entrepreneurs.</p>
        </div>
        <div className="people">
          {PEOPLE.map((person) => (
            <div className="person" key={person.name}>
              <span className="avatar">{person.name[0]}</span>
              <div>
                <h3>{person.name}</h3>
                <span className="role">{person.role}</span>
                <p className="bio">{person.bio}</p>
                <span className="loc">📍 {person.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
