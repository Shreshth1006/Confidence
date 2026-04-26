import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, HeartHandshake, MessageSquareMore, Mic, UserRoundCheck } from "lucide-react";

import week1Img from "@/assets/week1-shy.jpg";
import week2Img from "@/assets/week2-communication.jpg";
import week3Img from "@/assets/week3-teamwork.jpg";
import week4Img from "@/assets/week4-speaking.jpg";

const weeks = [
  {
    week: "Week 1", num: "01",
    mood: "Shy — but starting to explore themselves",
    title: "Confidence & Self-Introduction",
    icon: UserRoundCheck, image: week1Img,
    learn: ["Understanding personality & self-image", "First impressions: posture, eye contact, voice", "Confident self-introduction"],
    outcome: "Delivers a strong 1-minute self-introduction.",
    accent: "#38bdf8", bg: "rgba(56,189,248,0.12)",
    tint: "from-sky-950/80 via-sky-900/60 to-sky-900/20",
    progress: 25,
  },
  {
    week: "Week 2", num: "02",
    mood: "Opening up — finding their voice",
    title: "Communication & Social Skills",
    icon: MessageSquareMore, image: week2Img,
    learn: ["Speaking clearly & listening effectively", "Conversation skills & etiquette", "Asking and answering with confidence"],
    outcome: "Participates confidently in real conversations.",
    accent: "#a78bfa", bg: "rgba(167,139,250,0.12)",
    tint: "from-violet-950/80 via-violet-900/60 to-violet-900/20",
    progress: 50,
  },
  {
    week: "Week 3", num: "03",
    mood: "Grounded — calmer and more aware",
    title: "Emotional Intelligence & Teamwork",
    icon: HeartHandshake, image: week3Img,
    learn: ["Managing emotions & behavior", "Respect, empathy & discipline", "Teamwork and positive habits"],
    outcome: "Improved behavior, teamwork & self-control.",
    accent: "#34d399", bg: "rgba(52,211,153,0.12)",
    tint: "from-emerald-950/80 via-emerald-900/60 to-emerald-900/20",
    progress: 75,
  },
  {
    week: "Week 4", num: "04",
    mood: "Fully confident — leading the room",
    title: "Public Speaking & Final Showcase",
    icon: Mic, image: week4Img,
    learn: ["Overcoming stage fear", "Speech structure: opening, message, closing", "Grooming & presentation skills"],
    outcome: "Delivers a confident presentation on stage.",
    accent: "#fb923c", bg: "rgba(251,146,60,0.12)",
    tint: "from-orange-950/80 via-orange-900/60 to-orange-900/20",
    progress: 100,
  },
] as const;

export function WeeklyJourneyCarousel() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const t = window.setInterval(() => {
      setDir(1);
      setActive((c) => (c + 1) % weeks.length);
    }, 4500);
    return () => window.clearInterval(t);
  }, []);

  function goTo(i: number) {
    setDir(i > active ? 1 : -1);
    setActive(i);
  }

  const cur = weeks[active];
  const Icon = cur.icon;

  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/50">
            The 4-week transformation
          </p>
          <p className="mt-0.5 text-base font-extrabold text-white">From shy to fully confident</p>
        </div>
        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">
          Auto-playing
        </span>
      </div>

      {/* Left tabs + right image */}
      <div className="grid grid-cols-[200px_1fr] sm:grid-cols-[230px_1fr]">

        {/* LEFT: tabs */}
        <div className="flex flex-col border-r border-white/20" style={{ background: "rgba(0,0,0,0.35)" }}>
          {weeks.map((w, i) => {
            const TIcon = w.icon;
            const on = active === i;
            return (
              <button
                key={w.week}
                type="button"
                onClick={() => goTo(i)}
                className="relative flex flex-col border-b border-white/10 px-4 py-4 text-left last:border-b-0 transition-all duration-300"
                style={{ background: on ? `${w.accent}35` : "transparent" }}
              >
                {/* Active accent bar */}
                {on && (
                  <motion.div
                    layoutId="tabBar"
                    className="absolute inset-y-0 left-0 w-[3px] rounded-r-full"
                    style={{ background: w.accent }}
                    transition={{ type: "spring", stiffness: 280, damping: 28 }}
                  />
                )}

                {/* Big number + icon row */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-[1.7rem] font-black leading-none tabular-nums transition-all duration-300"
                    style={{
                      color: on ? w.accent : "#ffffff",
                      textShadow: on ? `0 0 20px ${w.accent}88` : "none",
                    }}
                  >
                    {w.num}
                  </span>
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-xl border transition-all duration-300"
                    style={{
                      background: on ? `${w.accent}30` : "rgba(255,255,255,0.18)",
                      borderColor: on ? `${w.accent}60` : "rgba(255,255,255,0.30)",
                      color: on ? w.accent : "#ffffff",
                    }}
                  >
                    <TIcon className="size-3.5" />
                  </div>
                </div>

                {/* Week label */}
                <p
                  className="mt-1.5 text-[0.58rem] font-bold uppercase tracking-[0.2em] transition-colors duration-300"
                  style={{ color: on ? w.accent : "#ffffff" }}
                >
                  {w.week}
                </p>

                {/* Title */}
                <p
                  className="mt-0.5 text-xs leading-snug transition-all duration-300"
                  style={{
                    color: on ? "#fff" : "#ffffff",
                    fontWeight: on ? 700 : 500,
                  }}
                >
                  {w.title}
                </p>

                {/* Countdown bar */}
                {on && (
                  <motion.div
                    key={`cd-${active}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 4.5, ease: "linear" }}
                    className="mt-2 h-0.5 origin-left rounded-full"
                    style={{ background: w.accent }}
                  />
                )}
              </button>
            );
          })}

          {/* Progress */}
          <div className="border-t border-white/10 px-4 py-3">
            <div className="flex justify-between text-[0.55rem] font-bold uppercase tracking-widest text-white/35">
              <span>Shy</span><span>Leader</span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                animate={{ width: `${cur.progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg, #38bdf8, ${cur.accent})` }}
              />
            </div>
            <p className="mt-1 text-right text-[0.6rem] font-bold" style={{ color: cur.accent }}>
              {cur.progress}%
            </p>
          </div>
        </div>

        {/* RIGHT: image panel */}
        <div className="relative min-h-[340px] sm:min-h-[400px] overflow-hidden">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={cur.week}
              custom={dir}
              initial={{ opacity: 0, x: dir * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -50 }}
              transition={{ duration: 0.38, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img src={cur.image} alt={cur.title} loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center" />
              <div className={`absolute inset-0 bg-gradient-to-t ${cur.tint}`} />

              {/* Week badge */}
              <div className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-black uppercase tracking-widest text-white shadow-sm"
                style={{ background: cur.accent }}>
                {cur.week}
              </div>

              {/* Icon */}
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/90 shadow-md"
                style={{ color: cur.accent }}>
                <Icon className="size-5" />
              </div>

              {/* Content card */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.32 }}
                className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 shadow-xl sm:p-5"
              >
                <p className="text-xs font-bold sm:text-sm" style={{ color: cur.accent }}>{cur.mood}</p>
                <h3 className="mt-0.5 text-base font-extrabold leading-tight text-gray-900 sm:text-lg">{cur.title}</h3>
                <ul className="mt-2.5 grid gap-1.5">
                  {cur.learn.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-700 sm:text-sm">
                      <Check className="mt-0.5 size-3.5 shrink-0" style={{ color: cur.accent }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 rounded-xl px-3 py-2" style={{ background: `${cur.accent}18` }}>
                  <p className="text-[0.6rem] font-black uppercase tracking-widest" style={{ color: cur.accent }}>Outcome</p>
                  <p className="mt-0.5 text-xs font-semibold text-gray-800 sm:text-sm">{cur.outcome}</p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}