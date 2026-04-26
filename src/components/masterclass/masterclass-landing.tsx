import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award, BadgeCheck, BookOpen, BrainCircuit, CalendarRange, Check,
  Crown, Gift, GraduationCap, HandCoins, Lightbulb, Medal, Quote,
  ShieldCheck, Sparkles, Star, Target, Trophy, Users, Video, WandSparkles, X,
} from "lucide-react";
import { FloatingRegister } from "@/components/masterclass/floating-register";
import { ShyConfidenceQuiz } from "@/components/masterclass/shy-confidence-quiz";
import { TOIHeader } from "@/components/masterclass/toi-header";
import { TransformationHero } from "@/components/masterclass/transformation-hero";
import { WeeklyJourneyCarousel } from "@/components/masterclass/weekly-journey-carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSectionAnimations } from "@/use-section-animations";

const programHighlights = [
  { icon: CalendarRange, title: "4-week structure",      copy: "A focused progression that builds confidence layer by layer." },
  { icon: Video,         title: "1 live session weekly", copy: "60–90 minutes of practice, speaking drills, and guided reflection." },
  { icon: Users,         title: "Small live batch",      copy: "Intentionally limited so every student is seen and coached." },
  { icon: BadgeCheck,    title: "Visible outcomes",      copy: "A stronger intro, better communication, and a confident final presentation." },
] as const;

const methods = [
  { icon: WandSparkles, title: "Role plays",             detail: "Children rehearse real situations instead of memorising theory." },
  { icon: Lightbulb,    title: "Real-life scenarios",    detail: "Every lesson connects to classroom, friendship, and family interactions." },
  { icon: BrainCircuit, title: "Interactive activities", detail: "Games, guided speaking tasks, and performance exercises keep energy high." },
  { icon: Target,       title: "Personalised feedback",  detail: "Each child gets clear guidance on voice, posture, clarity, and expression." },
  { icon: Sparkles,     title: "Weekly challenges",      detail: "Simple between-session actions help confidence show up in real life." },
] as const;

const outcomes = [
  { label: "Speak confidently",             level: 92 },
  { label: "Body language awareness",       level: 88 },
  { label: "Positive habits & discipline",  level: 81 },
  { label: "Clear thinking & presentation", level: 85 },
  { label: "Social confidence",             level: 90 },
] as const;

const whyProgram = [
  "Real confidence-building through practice, not theory alone",
  "Communication skills developed early for school and life",
  "Fun, structured learning that feels premium and outcome-led",
  "A final showcase that makes progress visible to parents",
] as const;

const testimonials = [
  { quote: "We wanted help with confidence, but we also saw better posture, clearer speech, and more self-belief at home.", author: "Priya M.", detail: "Parent of Aarav, Age 12", stars: 5 },
  { quote: "The program felt supportive, not intimidating. My child actually looked forward to speaking practice.",          author: "Rahul S.", detail: "Parent of Diya, Age 14", stars: 5 },
  { quote: "Within two weeks we noticed a real shift in how she carries herself in conversations.",                          author: "Anita K.", detail: "Parent of Riya, Age 11", stars: 5 },
];

const awards = [
  { title: "Child of the Session",  emoji: "🌟" },
  { title: "Best Speaker",          emoji: "🎤" },
  { title: "Most Improved Student", emoji: "📈" },
  { title: "Star Communicator",     emoji: "💬" },
  { title: "Best Team Player",      emoji: "🤝" },
];

const giveaways = {
  all: ["Digital certificate", "Personality development workbook (PDF)", "Habit tracker & confidence guide"],
  top: ["Books or learning kits", "Trophies or medals", "Gift vouchers", "Featured recognition"],
};

export function MasterclassLanding() {
  useSectionAnimations();

  const [activeMethod,   setActiveMethod]   = useState(0);
  const [activeLearnTab, setActiveLearnTab] = useState<"learn" | "outcomes">("learn");
  const [quizOpen,       setQuizOpen]       = useState(false);
  const [activeAward,    setActiveAward]    = useState(0);
  const outcomesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(() => setActiveAward((p) => (p + 1) % awards.length), 2800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const el = outcomesRef.current;
    if (!el) return;
    let hasBeenVisible = false;
    let fired = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasBeenVisible = true;
        } else if (hasBeenVisible && !fired) {
          fired = true;
          setQuizOpen(true);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="page-shell">
      <TOIHeader />
      <TransformationHero />

      {/* ── 1. Program Intro ── */}
      <section className="section-bg-program section-shell pt-10 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="glass" className="eyebrow">Program overview</Badge>
            <h2 className="section-title mt-4">Build confidence. Improve communication. Shape personality.</h2>
            <p className="section-copy mt-4 text-muted-foreground">
              Built for ages 10–16, this live online masterclass blends speaking, emotional growth,
              social confidence, and presentation skills into one clear transformation path.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {programHighlights.map((item, i) => {
              const Icon = item.icon;
              const accentColors = ["#7c3aed", "#0ea5e9", "#10b981", "#f59e0b"];
              return (
                <motion.div
                  key={item.title}
                  className="flex flex-col gap-4 rounded-2xl border border-border/70 bg-card/90 p-6 backdrop-blur-xl"
                  style={{ borderTop: `3px solid ${accentColors[i]}`, boxShadow: "var(--shadow-soft)" }}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60"
                    style={{ background: `${accentColors[i]}18`, color: accentColors[i] }}
                  >
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.copy}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 2. Weekly Journey ── */}
      <section className="section-bg-journey story-band">
        <div className="section-shell">
          <motion.div
            className="mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="glass" className="eyebrow">Transformation journey</Badge>
            <p className="mt-3 text-sm font-bold uppercase tracking-widest text-primary">
              Every week unlocks a new layer of confidence
            </p>
            <h2 className="section-title mt-2">
              Parents !!! Don't just hear about the progress — see it yourself.
            </h2>
            <p className="section-copy mt-4 text-muted-foreground">
              Watch the 4-week transformation: from a shy child quietly exploring themselves
              to a fully confident leader on stage.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <WeeklyJourneyCarousel />
          </motion.div>
        </div>
      </section>

      {/* ── 3. Learn + Outcomes ── */}
      <section ref={outcomesRef} className="section-bg-learn section-shell">
        <div className="mb-8 max-w-2xl">
          <Badge variant="glass" className="eyebrow">How it works</Badge>
          <h2 className="section-title mt-4">Learn by doing, not just listening.</h2>
          <p className="section-copy mt-4 text-muted-foreground">
            Energetic, practical, and confidence-oriented — students stay involved and build
            lasting habits they carry into real life.
          </p>
        </div>

        <div className="mb-6 inline-flex rounded-2xl border border-border/60 bg-muted/50 p-1">
          {(["learn", "outcomes"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveLearnTab(tab)}
              className={`rounded-xl px-5 py-2.5 text-sm font-bold transition-all duration-200 ${
                activeLearnTab === tab
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab === "learn" ? "🎯 Learning methods" : "📊 Outcomes"}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeLearnTab === "learn" ? (
            <motion.div
              key="learn"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {methods.map((method, index) => {
                const Icon = method.icon;
                const isActive = activeMethod === index;
                const cardAccents = ["#7c3aed", "#0ea5e9", "#10b981", "#f59e0b", "#e11d2a"];
                const accent = cardAccents[index];
                return (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveMethod(isActive ? -1 : index)}
                      className="w-full text-left rounded-2xl border border-border/70 bg-card/90 backdrop-blur-xl overflow-hidden transition-all duration-300"
                      style={{
                        borderTop: `3px solid ${accent}`,
                        boxShadow: isActive ? `0 8px 32px ${accent}28` : "var(--shadow-soft)",
                      }}
                    >
                      <div className="flex items-center gap-4 p-5">
                        <div
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/60"
                          style={{ background: `${accent}18`, color: accent }}
                        >
                          <Icon className="size-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-extrabold text-foreground">{method.title}</h3>
                          <p className="mt-0.5 text-sm text-muted-foreground">{method.detail}</p>
                        </div>
                        <div
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                          style={{ background: isActive ? `${accent}20` : "transparent" }}
                        >
                          <span className="text-lg font-bold leading-none" style={{ color: accent }}>
                            {isActive ? "−" : "+"}
                          </span>
                        </div>
                      </div>
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div
                              className="mx-5 mb-5 rounded-xl p-4"
                              style={{ background: `${accent}10`, borderLeft: `3px solid ${accent}` }}
                            >
                              <p className="text-sm leading-6 text-foreground">
                                {method.detail} Each session builds on real interactions so children
                                carry the confidence beyond the classroom.
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="outcomes"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid gap-8 lg:grid-cols-2 lg:items-start"
            >
              <div>
                <h3 className="text-2xl font-extrabold text-foreground">
                  By the end, confidence starts showing up everywhere.
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  The goal is bigger than one speech. Students carry a new kind of ease into
                  class participation, friendships, and everyday expression.
                </p>
                <div className="mt-6 grid gap-3">
                  {whyProgram.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="highlight-panel flex items-start gap-4"
                    >
                      <div className="icon-tile h-9 w-9 shrink-0 rounded-xl">
                        <Check className="size-4" />
                      </div>
                      <p className="text-sm font-semibold leading-7 text-foreground">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="grid gap-3">
                {outcomes.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="rounded-2xl border border-border/70 bg-card/80 p-5 backdrop-blur-xl"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-bold text-foreground">{item.label}</p>
                      <span className="shrink-0 text-sm font-bold text-primary">{item.level}%</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: index * 0.1 }}
                        className="h-full rounded-full bg-primary"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── 4. Recognition ── */}
      <section className="section-bg-recognition story-band">
        <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:py-12 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-2">
            <Badge variant="glass" className="eyebrow self-start">Recognition & rewards</Badge>
            <h2 className="section-title mt-3">Recognition that keeps motivation high.</h2>
            <p className="text-sm leading-6" style={{ color: "rgba(220,225,255,0.85)" }}>
              Every student leaves with proof of progress. Top performers get extra recognition.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Certificates */}
            <div className="rounded-2xl border border-border/70 bg-card/80 p-4 backdrop-blur-xl flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-border/70 bg-background/80 text-primary">
                  <GraduationCap className="size-4" />
                </div>
                <h3 className="text-sm font-extrabold text-foreground">Certificates</h3>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl border border-red-200/60 bg-red-50/60 px-3 py-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e11d2a] text-white text-[0.45rem] font-black leading-tight text-center">
                  THE<br/>TOI
                </div>
                <div>
                  <p className="text-[0.65rem] font-black uppercase tracking-widest text-[#e11d2a]">Times of India</p>
                  <p className="text-[0.65rem]" style={{ color: "#6b7280" }}>Certificate of Excellence</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl border border-blue-200/60 bg-blue-50/40 px-3 py-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1a2b5e] text-white text-[0.42rem] font-black leading-tight text-center">
                  TIL
                </div>
                <div>
                  <p className="text-[0.65rem] font-black uppercase tracking-widest text-[#1a2b5e]">Times Internet</p>
                  <p className="text-[0.65rem]" style={{ color: "#6b7280" }}>Standout performer recognition</p>
                </div>
              </div>
              <div className="rounded-xl border border-primary/25 bg-primary/8 px-3 py-2.5">
                <div className="flex items-center gap-1.5">
                  <Crown className="size-3.5 text-primary" />
                  <p className="text-[0.6rem] font-black uppercase tracking-widest text-primary">Featured on TOI</p>
                </div>
                <p className="mt-1 text-xs font-semibold leading-5" style={{ color: "rgba(220,225,255,0.9)" }}>
                  Top performers may be featured on the Times of India platform.
                </p>
              </div>
            </div>

            {/* Awards */}
            <div className="rounded-2xl border border-border/70 bg-card/80 p-4 backdrop-blur-xl flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-border/70 bg-background/80 text-primary">
                  <Trophy className="size-4" />
                </div>
                <h3 className="text-sm font-extrabold text-foreground">Awards spotlight</h3>
              </div>
              <div className="relative overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-primary/10 to-secondary/10 py-5 text-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeAward}
                    initial={{ opacity: 0, scale: 0.88, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.88, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <span className="text-4xl">{awards[activeAward].emoji}</span>
                    <p className="text-base font-extrabold text-foreground">{awards[activeAward].title}</p>
                    <p className="text-[0.6rem] font-semibold uppercase tracking-widest text-muted-foreground">
                      {activeAward + 1} / {awards.length}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex justify-center gap-1.5">
                {awards.map((_, i) => (
                  <button key={i} type="button" onClick={() => setActiveAward(i)}
                    className={`h-1.5 rounded-full transition-all ${i === activeAward ? "w-5 bg-primary" : "w-1.5 bg-muted-foreground/30"}`}
                  />
                ))}
              </div>
              <div className="grid gap-1">
                {awards.map((award, i) => (
                  <div key={award.title}
                    className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                      i === activeAward ? "bg-primary/10 text-primary" : "text-foreground"
                    }`}
                  >
                    <span className="text-sm">{award.emoji}</span>{award.title}
                  </div>
                ))}
              </div>
            </div>

            {/* Giveaways */}
            <div className="rounded-2xl border border-border/70 bg-card/80 p-4 backdrop-blur-xl flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-border/70 bg-background/80 text-primary">
                  <Gift className="size-4" />
                </div>
                <h3 className="text-sm font-extrabold text-foreground">For every student</h3>
              </div>
              {giveaways.all.map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/60 px-3 py-2 text-xs font-semibold text-foreground">
                  <BookOpen className="size-3.5 shrink-0 text-secondary" />{item}
                </div>
              ))}
              <div className="my-1 h-px bg-border/40" />
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-border/70 bg-background/80 text-primary">
                  <Medal className="size-4" />
                </div>
                <h3 className="text-sm font-extrabold text-foreground">For top performers</h3>
              </div>
              {giveaways.top.map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/60 px-3 py-2 text-xs font-semibold text-foreground">
                  <Star className="size-3.5 shrink-0 text-primary" />{item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Testimonials ── */}
      <section className="section-bg-testimonials section-shell py-14">
        <motion.div
          className="mb-8 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="glass" className="eyebrow">What parents say</Badge>
          <h2 className="section-title mt-4">Real words from real parents.</h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.author}
              className="rounded-2xl border border-border/60 bg-card/80 p-6 backdrop-blur-xl flex flex-col gap-4"
              style={{ boxShadow: "var(--shadow-soft)" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <Quote className="size-6 text-primary/40" />
              <p className="flex-1 text-sm italic leading-7 text-foreground">"{item.quote}"</p>
              <div>
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: item.stars }).map((_, s) => (
                    <Star key={s} className="size-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm font-bold text-foreground">— {item.author}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            { icon: ShieldCheck, label: "Safe learning environment" },
            { icon: Award,       label: "Structured journey" },
            { icon: HandCoins,   label: "Limited seats" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="metric-pill flex items-center gap-2">
              <Icon className="size-4 text-primary" />{label}
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. Enroll ── */}
      <section id="register" className="section-bg-enroll section-shell pb-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="glass" className="eyebrow">Enroll today</Badge>
              <h2 className="section-title mt-4">A simple path from interest to confirmed seat.</h2>
              <p className="section-copy mt-4 text-muted-foreground">
                Parents can move from enquiry to enrollment in a few simple steps.
              </p>
              {/* Urgency banner */}
              <div className="mt-5 flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold"
                  style={{ background: "oklch(0.72 0.19 46.0 / 15%)", color: "oklch(0.55 0.19 46.0)", border: "1px solid oklch(0.72 0.19 46.0 / 30%)" }}>
                  🔥 Next batch starting May 15
                </div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold"
                  style={{ background: "oklch(0.72 0.19 46.0 / 15%)", color: "oklch(0.55 0.19 46.0)", border: "1px solid oklch(0.72 0.19 46.0 / 30%)" }}>
                  ⚡ Only 12 seats left
                </div>
              </div>
            </motion.div>
            <div className="mt-8 grid gap-4">
              {[
                ["01", "Fill the registration form", "Share student and parent details."],
                ["02", "Pay the program fee",        "Secure the seat and confirm participation."],
                ["03", "Receive confirmation",       "Get the schedule, batch details, and next steps."],
              ].map(([step, title, copy], i) => (
                <motion.div
                  key={step}
                  className="story-card flex items-start gap-4"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                >
                  <p className="text-2xl font-black leading-none text-primary/30">{step}</p>
                  <div>
                    <h3 className="text-base font-extrabold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{copy}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 rounded-[2rem] border border-border/70 bg-gradient-to-br from-primary/10 to-secondary/10 p-6">
              <h3 className="text-xl font-extrabold text-foreground">
                Give your child a confident edge this summer.
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Help them speak with clarity, carry themselves with confidence, and show up
                with a stronger voice in school, friendships, and beyond.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button className="btn-cta">
                  <Sparkles className="size-4" />
                  Book Your Seat Now
                </button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">Interactive live online batches · limited seats</p>
            </div>
          </div>

          <div className="glass-panel grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
            <div className="sm:col-span-2">
              <Badge variant="glass" className="eyebrow">Request a call back</Badge>
              <h3 className="mt-3 text-xl font-extrabold text-foreground">
                Need help deciding if this is the right fit?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We'll respond with program details, fees, and timing.
              </p>
            </div>
            <Input className="form-field" placeholder="Parent name"   aria-label="Parent name" />
            <Input className="form-field" placeholder="Phone number"  aria-label="Phone number" />
            <Input className="form-field" placeholder="Email address" aria-label="Email address" />
            <Input className="form-field" placeholder="Child age"     aria-label="Child age" />
            <Textarea className="form-area sm:col-span-2" placeholder="Tell us what you'd like help with" />
            <div className="sm:col-span-2">
              <Button variant="hero" size="lg" className="h-12 rounded-full px-7 text-base">
                Request a Call Back
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quiz Popup ── */}
      <AnimatePresence>
        {quizOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm"
              onClick={() => setQuizOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="fixed inset-x-4 z-50 mx-auto max-w-3xl overflow-y-auto rounded-[2rem] border border-border/70 bg-background shadow-2xl sm:inset-x-6 md:inset-x-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
              style={{ maxHeight: "90vh" }}
            >
              <button
                type="button"
                onClick={() => setQuizOpen(false)}
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-card/80 text-muted-foreground hover:text-foreground"
              >
                <X className="size-4" />
              </button>
              <div className="p-4 sm:p-6">
                <ShyConfidenceQuiz />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <FloatingRegister onQuizClick={() => setQuizOpen(true)} />
    </main>
  );
}