// Petite bibliothèque d'icônes en ligne (trait, 18-20px), réutilisées
// entre les sections de l'accueil et les pages solutions.

const base = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 };

export function CheckIcon(props) {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} {...props}>
      <path d="M4 12l5 5L20 6" />
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 2" />
    </svg>
  );
}

export function TeamIcon() {
  return (
    <svg {...base}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.5 20c.6-3.4 3.2-5.4 6.5-5.4s5.9 2 6.5 5.4" />
      <circle cx="18" cy="8" r="2.4" />
      <path d="M15.6 14.8c2.6.3 4.3 2 4.8 4.9" />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg {...base}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

export function ShieldIcon() {
  return (
    <svg {...base}>
      <path d="M12 2l8 3.5v5.3c0 5-3.4 8.6-8 10.2-4.6-1.6-8-5.2-8-10.2V5.5L12 2z" />
    </svg>
  );
}

export function CalendarIcon() {
  return (
    <svg {...base}>
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M3 9h18" />
      <path d="M8 3v3M16 3v3" />
    </svg>
  );
}

export function SyncIcon() {
  return (
    <svg {...base}>
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
    </svg>
  );
}

export const SCENARIO_ICONS = {
  clock: ClockIcon,
  team: TeamIcon,
  search: SearchIcon,
  shield: ShieldIcon,
  calendar: CalendarIcon,
  sync: SyncIcon,
};
