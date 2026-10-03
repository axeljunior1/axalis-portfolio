import { Link } from 'react-router-dom';
import { solutions } from '../data/solutions.js';

export default function Solutions() {
  return (
    <section className="section" id="solutions">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Nos solutions</span>
          <h2>Quatre façons de faire avancer votre activité</h2>
          <p>Chaque axe mène à un échange concret : vos besoins, les solutions possibles, des exemples, puis un devis.</p>
        </div>
        <div className="axes">
          {solutions.map((solution) => (
            <div className="axis" key={solution.slug}>
              <span className="axis-num mono">{solution.number}</span>
              <h3>{solution.title}</h3>
              <p>{solution.shortDescription}</p>
              <Link to={`/solutions/${solution.slug}`}>En savoir plus →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
