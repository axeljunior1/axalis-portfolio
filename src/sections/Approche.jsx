import { ShieldIcon, CalendarIcon, TeamIcon, ClockIcon } from '../components/icons.jsx';

const STEPS = [
  { num: 1, title: 'Comprendre', text: 'Votre activité, vos contraintes et vos priorités.' },
  { num: 2, title: 'Définir', text: 'Un périmètre réaliste et un besoin clairement posé.' },
  { num: 3, title: 'Construire et valider', text: "Des étapes courtes, testées au fil de l'avancement." },
  { num: 4, title: 'Accompagner', text: 'Support, évolutions et suivi dans la durée.' },
];

const COMMITMENTS = [
  { Icon: ShieldIcon, label: 'Sécurité & confidentialité' },
  { Icon: CalendarIcon, label: 'Planning clair' },
  { Icon: TeamIcon, label: 'Accompagnement humain' },
  { Icon: ClockIcon, label: 'Budget maîtrisé' },
];

export default function Approche() {
  return (
    <section className="section" id="approche">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Notre approche</span>
          <h2>Un projet clair, du premier échange à la mise en service.</h2>
          <p>Nous commençons par comprendre votre activité, vos contraintes et vos priorités pour définir une solution utile et un périmètre réaliste.</p>
        </div>

        <div className="steps">
          {STEPS.map((step) => (
            <div className="step" key={step.num}>
              <span className="step-num">{step.num}</span>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          ))}
        </div>

        <div className="commitments">
          {COMMITMENTS.map(({ Icon, label }) => (
            <div className="commit" key={label}>
              <Icon />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
