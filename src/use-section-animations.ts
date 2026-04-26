import { useEffect } from "react";

/**
 * useSectionAnimations
 *
 * Call once at the top of MasterclassLanding.
 * It finds each section by its bg class and injects:
 *  - .orb-1 / .orb-2 / .orb-3  (blurred floating circles)
 *  - .shimmer-1 / .shimmer-2   (horizontal light sweeps, dark sections only)
 *  - .pulse-ring-1/2/3         (expanding rings, light sections only)
 *  - .anim-particle × N        (rising dots)
 *
 * All injected elements are absolutely positioned and pointer-events: none,
 * so they never block clicks. CSS handles all animation via keyframes in index.css.
 */

type SectionConfig = {
  cls: string;
  orbs: { color: string; size: number; top?: string; bottom?: string; left?: string; right?: string; opacity: number; delay: string; duration: string }[];
  shimmers?: boolean;
  pulseRings?: boolean;
  particles: { color: string; count: number };
};

const SECTIONS: SectionConfig[] = [
  {
    cls: "section-bg-hero",
    orbs: [
      { color: "#7c3aed", size: 500, top: "-120px",  left: "-80px",  opacity: 0.55, delay: "0s",   duration: "10s" },
      { color: "#2563eb", size: 380, top: "60px",    right: "-60px", opacity: 0.45, delay: "-4s",  duration: "13s" },
      { color: "#06b6d4", size: 260, bottom: "-60px",left: "42%",    opacity: 0.35, delay: "-7s",  duration: "9s"  },
    ],
    shimmers: true,
    particles: { color: "#a78bfa", count: 14 },
  },
  {
    cls: "section-bg-program",
    orbs: [
      { color: "#8b5cf6", size: 420, top: "-120px", right: "80px",  opacity: 0.22, delay: "0s",  duration: "12s" },
      { color: "#a78bfa", size: 300, bottom: "-80px",left: "30px",  opacity: 0.18, delay: "-5s", duration: "15s" },
    ],
    pulseRings: true,
    particles: { color: "#8b5cf6", count: 8 },
  },
  {
    cls: "section-bg-journey",
    orbs: [
      { color: "#3b82f6", size: 480, top: "-120px",  left: "-80px",  opacity: 0.50, delay: "0s",   duration: "11s" },
      { color: "#6366f1", size: 340, top: "40px",    right: "-40px", opacity: 0.40, delay: "-5s",  duration: "14s" },
      { color: "#0ea5e9", size: 220, bottom: "-40px",left: "48%",    opacity: 0.35, delay: "-8s",  duration: "10s" },
    ],
    shimmers: true,
    particles: { color: "#60a5fa", count: 12 },
  },
  {
    cls: "section-bg-learn",
    orbs: [
      { color: "#0ea5e9", size: 380, top: "-100px", right: "40px",  opacity: 0.20, delay: "0s",  duration: "13s" },
      { color: "#38bdf8", size: 280, bottom: "-70px",left: "20px",  opacity: 0.17, delay: "-6s", duration: "16s" },
    ],
    pulseRings: true,
    particles: { color: "#38bdf8", count: 8 },
  },
  {
    cls: "section-bg-recognition",
    orbs: [
      { color: "#9333ea", size: 440, top: "-100px",  left: "-60px",  opacity: 0.55, delay: "0s",   duration: "11s" },
      { color: "#c026d3", size: 320, top: "50px",    right: "-30px", opacity: 0.42, delay: "-5s",  duration: "14s" },
      { color: "#e11d48", size: 240, bottom: "-50px",left: "42%",    opacity: 0.35, delay: "-8s",  duration: "10s" },
    ],
    shimmers: true,
    particles: { color: "#e879f9", count: 14 },
  },
  {
    cls: "section-bg-testimonials",
    orbs: [
      { color: "#d946ef", size: 340, top: "-90px",   right: "60px", opacity: 0.18, delay: "0s",  duration: "14s" },
      { color: "#a855f7", size: 260, bottom: "-60px",left: "40px",  opacity: 0.15, delay: "-6s", duration: "17s" },
    ],
    particles: { color: "#d946ef", count: 8 },
  },
  {
    cls: "section-bg-enroll",
    orbs: [
      { color: "#4f46e5", size: 500, top: "-120px",  left: "-80px",  opacity: 0.50, delay: "0s",   duration: "12s" },
      { color: "#7c3aed", size: 360, top: "60px",    right: "-50px", opacity: 0.42, delay: "-5s",  duration: "15s" },
      { color: "#2563eb", size: 260, bottom: "-60px",left: "44%",    opacity: 0.35, delay: "-9s",  duration: "11s" },
    ],
    shimmers: true,
    particles: { color: "#818cf8", count: 14 },
  },
];

function injectOrb(
  section: Element,
  cfg: SectionConfig["orbs"][number],
  index: number
) {
  if (section.querySelector(`.orb-${index + 1}`)) return;
  const el = document.createElement("div");
  el.className = `orb-${index + 1}`;
  Object.assign(el.style, {
    position: "absolute",
    width: `${cfg.size}px`,
    height: `${cfg.size}px`,
    borderRadius: "50%",
    background: `radial-gradient(circle, ${cfg.color} 0%, transparent 68%)`,
    opacity: String(cfg.opacity),
    pointerEvents: "none",
    willChange: "transform",
    zIndex: "0",
    animationName: ["orbFloat", "orbFloat2", "orbFloat3"][index] ?? "orbFloat",
    animationDuration: cfg.duration,
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
    animationDelay: cfg.delay,
    ...(cfg.top    !== undefined ? { top: cfg.top }       : {}),
    ...(cfg.bottom !== undefined ? { bottom: cfg.bottom } : {}),
    ...(cfg.left   !== undefined ? { left: cfg.left }     : {}),
    ...(cfg.right  !== undefined ? { right: cfg.right }   : {}),
  });
  section.prepend(el);
}

function injectShimmers(section: Element) {
  if (section.querySelector(".shimmer-1")) return;
  [
    { cls: "shimmer-1", top: "32%",  color: "rgba(255,255,255,0.25)", dur: "6s",  delay: "0s" },
    { cls: "shimmer-2", top: "68%",  color: "rgba(255,255,255,0.18)", dur: "9s",  delay: "-4s" },
  ].forEach(({ cls, top, color, dur, delay }) => {
    const el = document.createElement("div");
    el.className = cls;
    Object.assign(el.style, {
      position: "absolute",
      top,
      left: "-15%",
      width: "130%",
      height: "1px",
      background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
      animationName: "shimmerSweep",
      animationDuration: dur,
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
      animationDelay: delay,
      pointerEvents: "none",
      zIndex: "0",
    });
    section.prepend(el);
  });
}

function injectPulseRings(section: Element) {
  if (section.querySelector(".pulse-ring-1")) return;
  [0, 1, 2].forEach((i) => {
    const el = document.createElement("div");
    el.className = `pulse-ring-${i + 1}`;
    Object.assign(el.style, {
      position: "absolute",
      borderRadius: "50%",
      border: "1.5px solid rgba(139,92,246,0.32)",
      width: "300px",
      height: "300px",
      top: "50%",
      right: "6%",
      transform: "translate(30%, -50%)",
      pointerEvents: "none",
      animationName: "pulseRing",
      animationDuration: "5.5s",
      animationTimingFunction: "ease-out",
      animationIterationCount: "infinite",
      animationDelay: `${-i * 1.85}s`,
      zIndex: "0",
    });
    section.prepend(el);
  });
}

function injectParticles(section: Element, color: string, count: number) {
  if (section.querySelector(".anim-particle")) return;
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = "anim-particle";
    const size = Math.random() * 5 + 2;
    Object.assign(el.style, {
      width: `${size}px`,
      height: `${size}px`,
      background: color,
      left: `${Math.random() * 100}%`,
      bottom: "0",
      animationDuration: `${Math.random() * 7 + 5}s`,
      animationDelay: `${Math.random() * 9}s`,
    });
    section.appendChild(el);
  }
}

function injectGridOverlay(section: Element) {
  if (section.querySelector(".grid-overlay")) return;
  const el = document.createElement("div");
  el.className = "grid-overlay";
  Object.assign(el.style, {
    position: "absolute",
    inset: "0",
    zIndex: "0",
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
    backgroundSize: "44px 44px",
    pointerEvents: "none",
  });
  section.prepend(el);
}

export function useSectionAnimations() {
  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    SECTIONS.forEach((cfg) => {
      document.querySelectorAll(`.${cfg.cls}`).forEach((section) => {
        cfg.orbs.forEach((orb, i) => injectOrb(section, orb, i));
        if (cfg.shimmers) injectShimmers(section);
        if (cfg.pulseRings) injectPulseRings(section);
        injectGridOverlay(section);
        injectParticles(section, cfg.particles.color, cfg.particles.count);
      });
    });
  }, []);
}
