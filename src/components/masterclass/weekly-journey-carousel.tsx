import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, MessageSquareMore, Mic, HeartHandshake, UserRoundCheck } from "lucide-react";
import week1Img from "@/assets/week1-shy.jpg";
import week2Img from "@/assets/week2-communication.jpg";
import week3Img from "@/assets/week3-teamwork.jpg";
import week4Img from "@/assets/week4-speaking.jpg";

const weeks = [
  {
    week: "Week 1",
    mood: "Shy — but starting to explore themselves",
    title: "Confidence & self-introduction",
    icon: UserRoundCheck,
    image: week1Img,
    imagePosition: "right center",
    learn: [
      "Understanding personality & self-image",
      "First impressions: posture, eye contact, voice",
      "Confident self-introduction",
    ],
    outcome: "Delivers a strong 1-minute self-introduction.",
    accent: "from-sky-500/30 via-sky-300/10 to-transparent",
    panelTint: "from-sky-950/85 via-sky-900/70 to-sky-900/40",
    progress: 25,
  },
  {
    week: "Week 2",
    mood: "Opening up — finding their voice",
    title: "Communication & social skills",
    icon: MessageSquareMore,
    image: week2Img,
    imagePosition: "right center",
    learn: [
      "Speaking clearly & listening effectively",
      "Conversation skills & etiquette",
      "Asking and answering with confidence",
    ],
    outcome: "Participates confidently in real conversations.",
    accent: "from-emerald-500/25 via-lime-300/10 to-transparent",
    panelTint: "from-emerald-950/85 via-emerald-900/70 to-emerald-900/40",
    progress: 50,
  },
  {
    week: "Week 3",
    mood: "Grounded — calmer and more aware",
    title: "Emotional intelligence & teamwork",
    icon: HeartHandshake,
    image: week3Img,
    imagePosition: "right center",
    learn: [
      "Managing emotions & behavior",
      "Respect, empathy & discipline",
      "Teamwork and positive habits",
    ],
    outcome: "Improved behavior, teamwork & self-control.",
    accent: "from-violet-500/25 via-purple-300/10 to-transparent",
    panelTint: "from-violet-950/85 via-violet-900/70 to-violet-900/40",
    progress: 75,
  },
  {
    week: "Week 4",
    mood: "Fully confident — leading the room",
    title: "Public speaking & final showcase",
    icon: Mic,
    image: week4Img,
    imagePosition: "right center",
    learn: [
      "Overcoming stage fear",
      "Speech structure: opening, message, closing",
      "Grooming & presentation skills",
    ],
    outcome: "Delivers a confident presentation on stage.",
    accent: "from-orange-500/25 via-amber-300/10 to-transparent",
    panelTint: "from-orange-950/85 via-amber-900/70 to-amber-900/40",
    progress: 100,
  },
] as const;

export function WeeklyJourneyCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % weeks.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  const current = weeks[active];
  const Icon = current.icon;

  return (
    <div className="glass-panel overflow-hidden p-4 sm:p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
            The 4-week transformation
          </p>
          <p className="mt-1 text-lg font-bold text-foreground sm:text-xl">
            From shy to fully confident
          </p>
        </div>
        <div className="metric-pill">Auto-playing</div>
      </div>

      <div className="relative aspect-[16/14] overflow-hidden rounded-[1.75rem] border border-border/70 bg-muted sm:aspect-[16/10]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.week}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`absolute inset-0 flex flex-col bg-gradient-to-br ${current.accent}`}
          >
            {/* Background image */}
            <img
              src={current.image}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-right"
            />
            {/* Readability gradient: dark on bottom (mobile) / left (desktop) where text sits */}
            <div
              className={`absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r ${current.panelTint}`}
            />

            <div className="relative flex flex-1 flex-col p-4 sm:p-7">
              <div className="flex items-start justify-between gap-3">
                <div className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-primary shadow-sm sm:text-sm">
                  {current.week}
                </div>
                <div className="icon-tile h-12 w-12 rounded-2xl bg-white/95 text-primary shadow-sm">
                  <Icon className="size-5" />
                </div>
              </div>

              {/* Content panel — bottom on mobile, left on desktop */}
              <div className="mt-auto w-full sm:max-w-[58%]">
                <div className="rounded-2xl bg-white/95 p-3.5 shadow-lg backdrop-blur sm:p-5">
                  <p className="text-sm font-semibold text-primary sm:text-base">
                    {current.mood}
                  </p>
                  <h3 className="mt-0.5 text-lg font-extrabold leading-tight text-foreground sm:text-2xl">
                    {current.title}
                  </h3>

                  <ul className="mt-3 grid gap-1.5">
                    {current.learn.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs font-medium text-foreground sm:text-sm"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-3 rounded-xl bg-primary/10 px-3 py-2">
                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-primary sm:text-[0.7rem]">
                      Outcome
                    </p>
                    <p className="mt-0.5 text-xs font-semibold text-foreground sm:text-sm">
                      {current.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <div className="mt-5">
        <div className="flex items-center justify-between text-[0.7rem] font-bold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
          <span>Shy</span>
          <span>Confident leader</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
          <motion.div
            animate={{ width: `${current.progress}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-secondary via-primary to-primary"
          />
        </div>
      </div>

      {/* Dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {weeks.map((w, i) => (
          <button
            key={w.week}
            type="button"
            aria-label={`Go to ${w.week}`}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-8 bg-primary" : "w-2 bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}