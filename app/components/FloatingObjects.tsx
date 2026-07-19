'use client';

import { useState, useEffect } from 'react';

// FloatingObjects.tsx
// Decorative, pointer-events-auto interactive floating football paraphernalia

type FloatingItem = {
  id: string;
  floatClass: string;
  positionClass: string;
  sizeClass: string;
  opacity: string;
  rotate?: string;
  component: React.ReactNode;
};

// ── Colorful SVG Icons ───────────────────────────────────────────────────────

const Football = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Base white with slight shadow */}
    <circle cx="50" cy="50" r="47" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
    {/* Black patches */}
    <polygon points="50,18 64,30 59,48 41,48 36,30" fill="#1e293b" />
    <polygon points="64,30 82,35 82,55 69,62 59,48" fill="#334155" />
    <polygon points="36,30 41,48 31,62 18,55 18,35" fill="#334155" />
    <polygon points="59,48 69,62 62,78 38,78 31,62 41,48" fill="#0f172a" />
    {/* Seams */}
    <line x1="50" y1="3" x2="50" y2="18"   stroke="#94a3b8" strokeWidth="2" />
    <line x1="83" y1="35" x2="97" y2="28"  stroke="#94a3b8" strokeWidth="2" />
    <line x1="82" y1="55" x2="97" y2="62"  stroke="#94a3b8" strokeWidth="2" />
    <line x1="18" y1="55" x2="3"  y2="62"  stroke="#94a3b8" strokeWidth="2" />
    <line x1="18" y1="35" x2="3"  y2="28"  stroke="#94a3b8" strokeWidth="2" />
    <line x1="62" y1="78" x2="67" y2="97"  stroke="#94a3b8" strokeWidth="2" />
    <line x1="38" y1="78" x2="33" y2="97"  stroke="#94a3b8" strokeWidth="2" />
  </svg>
);

const Trophy = () => (
  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Cup body gold */}
    <path d="M25 10 H75 V55 C75 75 62 88 50 92 C38 88 25 75 25 55 Z" fill="#fbbf24" />
    {/* Handles */}
    <path d="M25 20 C10 20 5 35 15 45 L25 42" stroke="#f59e0b" strokeWidth="5" fill="none" strokeLinecap="round" />
    <path d="M75 20 C90 20 95 35 85 45 L75 42" stroke="#f59e0b" strokeWidth="5" fill="none" strokeLinecap="round" />
    {/* Base stem */}
    <rect x="44" y="92" width="12" height="16" fill="#d97706" />
    {/* Base */}
    <rect x="30" y="108" width="40" height="8" rx="3" fill="#1e293b" />
    <rect x="30" y="106" width="40" height="2" fill="#94a3b8" />
    {/* Shine */}
    <path d="M35 20 Q40 40 35 55" stroke="rgba(255,255,255,0.4)" strokeWidth="4" fill="none" strokeLinecap="round" />
  </svg>
);

const Medal = () => (
  <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Ribbon (Red/Blue/White) */}
    <path d="M30 5 L40 35 L50 5" stroke="#ef4444" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M25 5 L35 30 L20 5" stroke="#3b82f6" strokeWidth="5" fill="none" strokeLinecap="round" />
    <path d="M55 5 L45 30 L60 5" stroke="#3b82f6" strokeWidth="5" fill="none" strokeLinecap="round" />
    {/* Disc */}
    <circle cx="40" cy="70" r="28" fill="#fbbf24" />
    <circle cx="40" cy="70" r="22" stroke="#d97706" strokeWidth="3" fill="none" />
    {/* "1" */}
    <text x="40" y="78" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#78350f" fontFamily="sans-serif">1</text>
    {/* Shine */}
    <path d="M28 58 Q32 68 28 78" stroke="rgba(255,255,255,0.4)" strokeWidth="3" fill="none" strokeLinecap="round" />
  </svg>
);

const GoalPost = () => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Net lines horizontal */}
    <line x1="12" y1="40" x2="108" y2="40" stroke="#94a3b8" strokeWidth="1.5" opacity="0.6" />
    <line x1="12" y1="55" x2="108" y2="55" stroke="#94a3b8" strokeWidth="1.5" opacity="0.6" />
    <line x1="12" y1="70" x2="108" y2="70" stroke="#94a3b8" strokeWidth="1.5" opacity="0.6" />
    <line x1="12" y1="85" x2="108" y2="85" stroke="#94a3b8" strokeWidth="1.5" opacity="0.6" />
    {/* Net lines vertical */}
    <line x1="28"  y1="27" x2="28"  y2="95" stroke="#94a3b8" strokeWidth="1.5" opacity="0.6" />
    <line x1="44"  y1="27" x2="44"  y2="95" stroke="#94a3b8" strokeWidth="1.5" opacity="0.6" />
    <line x1="60"  y1="27" x2="60"  y2="95" stroke="#94a3b8" strokeWidth="1.5" opacity="0.6" />
    <line x1="76"  y1="27" x2="76"  y2="95" stroke="#94a3b8" strokeWidth="1.5" opacity="0.6" />
    <line x1="92"  y1="27" x2="92"  y2="95" stroke="#94a3b8" strokeWidth="1.5" opacity="0.6" />
    {/* Crossbar */}
    <rect x="5" y="20" width="110" height="7" rx="2" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
    {/* Left post */}
    <rect x="5" y="20" width="7" height="75" rx="2" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
    {/* Right post */}
    <rect x="108" y="20" width="7" height="75" rx="2" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
  </svg>
);

const Jersey = () => (
  <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Body */}
    <path d="M30 20 L10 45 L25 52 L25 100 L75 100 L75 52 L90 45 L70 20 Z" fill="#ef4444" />
    {/* Collar */}
    <path d="M40 20 Q50 30 60 20" stroke="#f8fafc" strokeWidth="4" fill="none" strokeLinecap="round" />
    {/* Number 10 */}
    <text x="50" y="75" textAnchor="middle" fontSize="26" fontWeight="bold" fill="#f8fafc" fontFamily="sans-serif">10</text>
    {/* Sleeve lines */}
    <path d="M25 52 L10 45" stroke="#7f1d1d" strokeWidth="2" fill="none" />
    <path d="M75 52 L90 45" stroke="#7f1d1d" strokeWidth="2" fill="none" />
    {/* Shine */}
    <path d="M35 30 Q38 55 35 75" stroke="rgba(255,255,255,0.2)" strokeWidth="3" fill="none" strokeLinecap="round" />
  </svg>
);

const FootballBoot = () => (
  <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Boot body (Neon / Slate) */}
    <path d="M15 20 L15 60 Q15 72 30 72 L95 72 Q110 72 110 60 L110 55 Q110 45 95 45 L50 45 L50 20 Z"
      fill="#1e293b" />
    {/* Ankle cuff */}
    <rect x="15" y="15" width="35" height="10" rx="4" fill="#334155" />
    {/* Studs */}
    {[32,48,64,80].map((x, i) => (
      <circle key={i} cx={x} cy="79" r="4" fill="#a3e635" />
    ))}
    {[40,56,72].map((x, i) => (
      <circle key={i+4} cx={x} cy="79" r="4" fill="#65a30d" />
    ))}
    {/* Laces */}
    {[0,1,2,3].map(i => (
      <line key={i} x1={24} y1={24 + i*6} x2={44} y2={24 + i*6}
        stroke="#a3e635" strokeWidth="2" />
    ))}
    {/* Swoosh/Stripe */}
    <path d="M60 45 L90 45 L95 58 L60 58 Z" fill="#a3e635" />
    {/* Shine */}
    <path d="M55 50 Q58 60 55 68" stroke="rgba(255,255,255,0.1)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
  </svg>
);

const YellowCard = () => (
  <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="5" y="5" width="50" height="70" rx="4" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
    <path d="M15 15 L30 30" stroke="rgba(255,255,255,0.5)" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const Cracker = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Body */}
    <path d="M20 70 L30 80 L70 40 L60 30 Z" fill="#ec4899" />
    {/* Stripes */}
    <path d="M25 65 L35 75 M40 50 L50 60 M55 35 L65 45" stroke="#fbcfe8" strokeWidth="4" />
    {/* Ties */}
    <path d="M20 70 L10 80 L20 90 Z" fill="#8b5cf6" />
    <path d="M70 40 L80 30 L90 40 Z" fill="#8b5cf6" />
    {/* Sparks/Confetti */}
    <circle cx="80" cy="15" r="3" fill="#fbbf24" />
    <circle cx="90" cy="25" r="2" fill="#34d399" />
    <circle cx="70" cy="20" r="2.5" fill="#60a5fa" />
    <path d="M75 10 Q80 5 85 15" stroke="#fb7185" strokeWidth="2" fill="none" />
  </svg>
);

const Whistle = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Body */}
    <path d="M40 40 Q40 20 60 20 Q80 20 80 40 Q80 60 60 60 L40 60 Z" fill="#94a3b8" stroke="#475569" strokeWidth="4" />
    <circle cx="60" cy="40" r="10" fill="#cbd5e1" />
    {/* Mouthpiece */}
    <rect x="20" y="35" width="20" height="10" rx="3" fill="#475569" />
    <path d="M25 35 L35 45" stroke="#94a3b8" strokeWidth="2" />
    {/* Lanyard string */}
    <circle cx="75" cy="40" r="3" fill="#1e293b" />
    <path d="M75 40 Q85 30 90 40 Q95 50 85 60" stroke="#ef4444" strokeWidth="3" fill="none" />
  </svg>
);

// ── Floating Item Definitions ────────────────────────────────────────────────

const FLOATING_ITEMS: FloatingItem[] = [
  // Left side objects (Filling the empty space)
  {
    id: 'football-left',
    floatClass: 'float-2',
    positionClass: 'top-[20%] left-[5%]',
    sizeClass: 'w-24 h-24',
    opacity: 'opacity-50 dark:opacity-30',
    component: <Football />,
  },
  {
    id: 'jersey-left',
    floatClass: 'float-6',
    positionClass: 'top-[45%] left-[8%]',
    sizeClass: 'w-24 h-28',
    opacity: 'opacity-40 dark:opacity-25',
    rotate: '-rotate-12',
    component: <Jersey />,
  },
  {
    id: 'boot-left',
    floatClass: 'float-7',
    positionClass: 'top-[75%] left-[5%]',
    sizeClass: 'w-28 h-20',
    opacity: 'opacity-50 dark:opacity-35',
    rotate: 'rotate-12',
    component: <FootballBoot />,
  },
  {
    id: 'medal-left',
    floatClass: 'pop-float', 
    positionClass: 'top-[10%] left-[15%]',
    sizeClass: 'w-20 h-28',
    opacity: 'opacity-100', 
    rotate: '-rotate-6',
    component: <Medal />,
  },
  {
    id: 'cracker-left',
    floatClass: 'float-5',
    positionClass: 'top-[85%] left-[20%]',
    sizeClass: 'w-20 h-20',
    opacity: 'opacity-60 dark:opacity-40',
    rotate: 'rotate-45',
    component: <Cracker />,
  },

  // Center/Right objects (existing + new)
  {
    id: 'trophy-1',
    floatClass: 'float-trophy',
    positionClass: 'top-[15%] left-[28%]',
    sizeClass: 'w-32 h-40',
    opacity: 'opacity-40 dark:opacity-25',
    rotate: '-rotate-6',
    component: <Trophy />,
  },
  {
    id: 'football-1',
    floatClass: 'float-1',
    positionClass: 'top-[30%] left-[85%]',
    sizeClass: 'w-24 h-24',
    opacity: 'opacity-50 dark:opacity-30',
    component: <Football />,
  },
  {
    id: 'medal-1',
    floatClass: 'pop-float', 
    positionClass: 'top-[60%] left-[30%]',
    sizeClass: 'w-20 h-28',
    opacity: 'opacity-100', 
    rotate: 'rotate-12',
    component: <Medal />,
  },
  {
    id: 'cracker-1',
    floatClass: 'float-3', 
    positionClass: 'top-[50%] left-[50%]',
    sizeClass: 'w-20 h-20',
    opacity: 'opacity-60 dark:opacity-40',
    rotate: 'rotate-12',
    component: <Cracker />,
  },
  {
    id: 'goalpost-1',
    floatClass: 'float-4',
    positionClass: 'top-[75%] left-[60%]',
    sizeClass: 'w-40 h-32',
    opacity: 'opacity-30 dark:opacity-20',
    component: <GoalPost />,
  },
  {
    id: 'jersey-1',
    floatClass: 'float-5',
    positionClass: 'top-[45%] left-[75%]',
    sizeClass: 'w-24 h-28',
    opacity: 'opacity-40 dark:opacity-25',
    rotate: 'rotate-6',
    component: <Jersey />,
  },
  {
    id: 'boot-1',
    floatClass: 'pop-float', 
    positionClass: 'top-[15%] left-[65%]',
    sizeClass: 'w-32 h-24',
    opacity: 'opacity-100',
    rotate: '-rotate-12',
    component: <FootballBoot />,
  },
  {
    id: 'card-1',
    floatClass: 'float-8',
    positionClass: 'top-[25%] left-[45%]',
    sizeClass: 'w-12 h-16',
    opacity: 'opacity-50 dark:opacity-30',
    rotate: 'rotate-[15deg]',
    component: <YellowCard />,
  },
  {
    id: 'cracker-2',
    floatClass: 'float-2',
    positionClass: 'top-[80%] left-[80%]',
    sizeClass: 'w-20 h-20',
    opacity: 'opacity-60 dark:opacity-40',
    rotate: '-rotate-45',
    component: <Cracker />,
  },
  {
    id: 'football-2',
    floatClass: 'pop-float',
    positionClass: 'top-[90%] left-[90%]',
    sizeClass: 'w-20 h-20',
    opacity: 'opacity-100',
    rotate: 'rotate-45',
    component: <Football />,
  },
  {
    id: 'whistle-2',
    floatClass: 'float-7',
    positionClass: 'top-[10%] left-[90%]',
    sizeClass: 'w-20 h-16',
    opacity: 'opacity-40 dark:opacity-25',
    rotate: '-rotate-[25deg]',
    component: <Whistle />,
  }
];

// ── Interactive Wrapper ──────────────────────────────────────────────────────

const InteractiveItem = ({ item, index }: { item: FloatingItem, index: number }) => {
  const [bursting, setBursting] = useState(false);

  const handleClick = () => {
    if (bursting) return;
    setBursting(true);
    // Let animation run, then just reset without hiding
    setTimeout(() => {
      setBursting(false);
    }, 600); // matches the animation duration
  };

  return (
    <div
      className={`
        absolute ${item.positionClass} ${item.sizeClass}
        ${item.opacity} ${item.floatClass} ${item.rotate ?? ''}
        cursor-pointer hover:scale-110 hover:brightness-125 transition-all
        pointer-events-auto
        ${bursting ? 'bursting' : ''}
      `}
      style={{ animationDelay: `${index * 1.5}s` }}
      onClick={handleClick}
      role="button"
      aria-label="Interactive floating object"
      tabIndex={-1}
    >
      {item.component}
    </div>
  );
};

// ── Export ──────────────────────────────────────────────────────────────────

export default function FloatingObjects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Wrapper */}
      <div className="absolute inset-0 blur-[1px]">
        {FLOATING_ITEMS.map((item, index) => (
          <InteractiveItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
