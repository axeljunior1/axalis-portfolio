// Contenu des 4 axes "Solutions" : carte courte sur l'accueil + contenu
// complet de la page dédiée (besoins concernés -> ce qu'on met en place
// -> exemples -> contact).
export const solutions = [
  {
    slug: 'applications-web-mobiles',
    number: '01',
    title: 'Applications web et mobiles',
    shortDescription: "Des sites, plateformes et applications conçus autour de vos utilisateurs et de vos objectifs.",
    lead: "Des sites, plateformes et applications conçus autour de vos utilisateurs et de vos objectifs — pensés, si besoin, pour continuer à fonctionner même quand la connexion ne suit pas.",
    ctaLabel: 'Discuter de votre projet',
    ctaBannerTitle: "Un projet d'application en tête ?",
    besoins: [
      "Vous avez une idée de site, de plateforme ou d'application, mais pas encore de cahier des charges précis.",
      "Votre outil actuel est vieillissant, lent, ou ne couvre plus vos usages réels.",
      "Vous voulez donner une interface simple à un processus aujourd'hui géré à la main.",
    ],
    miseEnPlace: [
      "Site vitrine ou plateforme sur mesure, conçue autour de vos utilisateurs.",
      "Application mobile Android / iPhone connectée à vos outils existants.",
      "Mode hors ligne et synchronisation selon vos contraintes de connexion.",
      "Mise en ligne, nom de domaine et hébergement accompagnés.",
    ],
    examples: { type: 'projects', ids: ['rdv', 'dashboard'] },
  },
  {
    slug: 'automatisation-metier',
    number: '02',
    title: 'Solutions métier et automatisation',
    shortDescription: 'Centralisez vos informations, simplifiez vos opérations et réduisez les saisies répétitives.',
    lead: "Centralisez vos informations, simplifiez vos opérations et réduisez les saisies répétitives — avec un outil construit autour de votre façon de travailler, pas l'inverse.",
    ctaLabel: 'Discuter de votre organisation',
    ctaBannerTitle: 'Des tâches à simplifier ou automatiser ?',
    besoins: [
      'Vos informations sont dispersées entre tableurs, messages et papier.',
      'Certaines tâches (saisie, relances, exports) se répètent chaque semaine sans valeur ajoutée.',
      'Vous manquez de visibilité sur votre activité au quotidien.',
    ],
    miseEnPlace: [
      'Outil centralisé adapté à votre activité (stock, rendez-vous, suivi clients...).',
      'Automatisation des tâches répétitives : saisie, notifications, exports, relances.',
      'Tableaux de bord pour suivre vos indicateurs en un coup d\'œil.',
      'Fonctionnement hors ligne avec synchronisation différée si votre connexion est instable.',
    ],
    examples: { type: 'projects', ids: ['stock', 'dashboard'] },
  },
  {
    slug: 'renfort-technique',
    number: '03',
    title: 'Renfort technique',
    shortDescription: 'Des compétences de développement pour accompagner votre équipe et faire avancer vos projets.',
    lead: "Des compétences de développement pour accompagner votre équipe et faire avancer vos projets — à distance, entre l'Europe et le Cameroun.",
    ctaLabel: "Discuter d'un renfort",
    ctaBannerTitle: 'Un projet qui a besoin de renfort ?',
    besoins: [
      'Votre équipe technique est débordée et un projet prend du retard.',
      'Vous avez besoin d\'une compétence précise (front, back, mobile) pour une durée limitée.',
      'Vous voulez avancer sans passer par un recrutement long.',
    ],
    miseEnPlace: [
      'Développeurs qualifiés intégrés à votre équipe et à vos outils (tickets, revues de code, points d\'avancement).',
      'Intervention à distance, sur des créneaux compatibles avec votre équipe.',
      'Transfert de connaissances et documentation pour que votre équipe reste autonome.',
      "Montée en charge ou réduction progressive selon l'avancement du projet.",
    ],
    examples: {
      type: 'formats',
      heading: 'Formats d\'intervention',
      subheading: 'Trois façons de nous intégrer à votre projet',
      items: [
        { icon: 'clock', title: 'Mission courte (2 à 4 semaines)', text: 'Pour déverrouiller un point bloquant ou tenir un délai serré.' },
        { icon: 'team', title: 'Renfort dans la durée', text: 'Un ou plusieurs développeurs intégrés à votre équipe sur plusieurs mois.' },
        { icon: 'search', title: 'Audit technique ponctuel', text: 'Un regard extérieur sur votre code, votre architecture ou vos choix techniques.' },
      ],
    },
  },
  {
    slug: 'maintenance-evolution',
    number: '04',
    title: 'Maintenance et évolution',
    shortDescription: 'Faites vivre vos outils avec du support, des sauvegardes et des évolutions adaptées à vos besoins.',
    lead: "Faites vivre vos outils avec du support, des sauvegardes et des évolutions adaptées à vos besoins — sans attendre la panne pour y penser.",
    ctaLabel: 'Discuter de la maintenance',
    ctaBannerTitle: 'Un outil existant à faire vivre ?',
    besoins: [
      "Votre site ou application existe déjà, mais personne ne s'en occupe activement.",
      'Vous craignez une faille de sécurité, une panne ou une perte de données.',
      'Vous voulez faire évoluer un outil existant sans tout reconstruire.',
    ],
    miseEnPlace: [
      'Suivi régulier : mises à jour, correctifs, surveillance.',
      'Sauvegardes planifiées et testées.',
      'Évolutions priorisées avec vous, par petites étapes.',
      "Point de contact unique en cas d'incident.",
    ],
    examples: {
      type: 'formats',
      heading: 'Formules',
      subheading: "Trois niveaux d'accompagnement, selon votre rythme",
      items: [
        { icon: 'shield', title: 'Suivi ponctuel', text: 'Intervention à la demande, facturée au besoin, pour les imprévus.' },
        { icon: 'calendar', title: 'Forfait maintenance', text: 'Un volume d\'heures mensuel réservé pour les correctifs et petites évolutions.' },
        { icon: 'sync', title: 'Évolution continue', text: "Un backlog d'améliorations traité en continu, en lien avec votre activité." },
      ],
    },
  },
];

export const getSolutionBySlug = (slug) => solutions.find((s) => s.slug === slug);
