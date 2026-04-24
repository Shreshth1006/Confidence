import { useState } from "react";
import { motion } from "framer-motion";
import { TOIHeader } from "@/components/masterclass/toi-header";
import {
  Award,
  BadgeCheck,
  BookOpen,
  BrainCircuit,
  CalendarRange,
  Check,
  Crown,
  Gift,
  GraduationCap,
  HandCoins,
  HeartHandshake,
  Lightbulb,
  Medal,
  MessageSquareMore,
  Mic,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  UserRoundCheck,
  Users,
  Video,
  WandSparkles,
} from "lucide-react";

import { BeforeAfterSlider } from "@/components/masterclass/before-after-slider";
import { FloatingRegister } from "@/components/masterclass/floating-register";
import { ShyConfidenceQuiz } from "@/components/masterclass/shy-confidence-quiz";
import { TransformationHero } from "@/components/masterclass/transformation-hero";
import { WeeklyJourneyCarousel } from "@/components/masterclass/weekly-journey-carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const programHighlights = [
  {
    icon: CalendarRange,
    title: "4-week structure",
    copy: "A focused progression that builds confidence layer by layer instead of rushing results.",
  },
  {
    icon: Video,
    title: "1 live session weekly",
    copy: "Each session runs 60–90 minutes with practice, speaking drills, and guided reflection.",
  },
  {
    icon: Users,
    title: "Small live batch",
    copy: "Kept intentionally limited so students are seen, heard, and coached personally.",
  },
  {
    icon: BadgeCheck,
    title: "Visible outcomes",
    copy: "Every child works toward a stronger intro, better communication, and a final confident presentation.",
  },
] as const;

const weeklyJourney = [
  {
    week: "Week 1",
    title: "Confidence & self-introduction",
    icon: UserRoundCheck,
    focus: ["self-image", "posture & eye contact", "first impression"],
    outcome: "Leaves with a clear, confident 1-minute self-introduction.",
  },
  {
    week: "Week 2",
    title: "Communication & social skills",
    icon: MessageSquareMore,
    focus: ["clear speaking", "active listening", "conversation etiquette"],
    outcome: "Participates in conversations with more ease and self-belief.",
  },
  {
    week: "Week 3",
    title: "Emotional intelligence & teamwork",
    icon: HeartHandshake,
    focus: ["emotion control", "empathy & respect", "positive habits"],
    outcome: "Shows calmer behavior, better discipline, and teamwork awareness.",
  },
  {
    week: "Week 4",
    title: "Public speaking & final showcase",
    icon: Mic,
    focus: ["stage-fear release", "speech structure", "grooming & presentation"],
    outcome: "Delivers a short presentation with confidence and presence.",
  },
] as const;

const methods = [
  {
    icon: WandSparkles,
    title: "Role plays",
    detail: "Children rehearse real situations instead of memorising theory.",
  },
  {
    icon: Lightbulb,
    title: "Real-life scenarios",
    detail: "Every lesson connects to classroom, friendship, and family interactions.",
  },
  {
    icon: BrainCircuit,
    title: "Interactive activities",
    detail: "Games, guided speaking tasks, and performance exercises keep energy high.",
  },
  {
    icon: Target,
    title: "Personalised feedback",
    detail: "Each child gets clear guidance on voice, posture, clarity, and expression.",
  },
  {
    icon: Sparkles,
    title: "Weekly challenges",
    detail: "Simple between-session actions help confidence show up in real life.",
  },
] as const;

const outcomes = [
  { label: "Speak confidently", level: 92 },
  { label: "Body language awareness", level: 88 },
  { label: "Positive habits & discipline", level: 81 },
  { label: "Clear thinking & presentation", level: 85 },
  { label: "Social confidence", level: 90 },
] as const;

const certification = [
  {
    icon: GraduationCap,
    title: "Certificate of Excellence and Completion",
    copy: "Powered by TIMES OF INDIA and awarded to students who complete the program with visible growth.",
  },
  {
    icon: Crown,
    title: "TIMES OF INDIA recognition",
    copy: "Highlights standout performers who show exceptional confidence, communication, and stage presence.",
  },
] as const;

const awards = ["Best Speaker", "Most Improved Student", "Star Communicator", "Best Team Player"];

const giveaways = {
  all: ["Digital certificate", "Personality development workbook (PDF)", "Habit tracker & confidence guide"],
  top: ["Books or learning kits", "Trophies or medals", "Gift vouchers", "Featured recognition"],
};

const whyProgram = [
  "Real confidence-building through practice, not theory alone",
  "Communication skills developed early for school and life",
  "Fun, structured learning that still feels premium and outcome-led",
  "A final showcase that makes progress visible to both parents and students",
] as const;

const testimonials = [
  {
    quote: "We wanted help with confidence, but we also saw better posture, clearer speech, and more self-belief at home.",
    author: "Parent of a 12-year-old",
  },
  {
    quote: "The program felt supportive, not intimidating. My child actually looked forward to speaking practice.",
    author: "Parent of a 14-year-old",
  },
];

export function MasterclassLanding() {
  const [activeMethod, setActiveMethod] = useState(0);

  return (
    <main className="page-shell">
      <TOIHeader />
      <TransformationHero />

      {/* ── Program Intro ── */}
      <section className="section-shell pt-10 md:pt-16">
        <div className="mb-10 max-w-2xl">
          <Badge variant="glass" className="eyebrow">
            Program intro
          </Badge>
          <h2 className="section-title mt-4">
            Build confidence. Improve communication. Shape personality.
          </h2>
          <p className="section-copy mt-4 text-muted-foreground">
            Built for ages 10–16, this live online masterclass blends speaking, emotional growth,
            social confidence, and presentation skills into one clear transformation path.
          </p>
        </div>
        {/* 4 highlight cards — equal 2×2 grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="story-card h-full border-border/70 bg-card/80">
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="icon-tile self-start">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.copy}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* ── Transformation Journey + Before/After COMBINED ── */}
      <section className="story-band">
        <div className="section-shell">
          {/* Section header */}
          <div className="mb-10 max-w-2xl">
            <Badge variant="glass" className="eyebrow">
              Transformation journey
            </Badge>
            <p className="mt-3 text-sm font-bold uppercase tracking-widest text-primary">
              Every week unlocks a new layer of confidence
            </p>
            <h2 className="section-title mt-2">
              Parents !!! Don't just hear about the progress — see it yourself.
            </h2>
            <p className="section-copy mt-4 text-muted-foreground">
              Watch the 4-week transformation play out: from a shy child quietly exploring
              themselves to a fully confident leader on stage.
            </p>
          </div>

          {/* Carousel only — full width */}
          <WeeklyJourneyCarousel />
        </div>
      </section>

      {/* ── Learning Methods (tab-style) ── */}
      <section className="section-shell">
        <div className="mb-10 max-w-2xl">
          <Badge variant="glass" className="eyebrow">
            Learning experience
          </Badge>
          <h2 className="section-title mt-4">Learn by doing, not just listening.</h2>
          <p className="section-copy mt-4 text-muted-foreground">
            The teaching style is energetic, practical, and confidence-oriented so students stay
            involved instead of fading into the background.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          {/* Tab list — left column */}
          <div className="grid gap-3">
            {methods.map((method, index) => {
              const Icon = method.icon;
              const active = activeMethod === index;
              return (
                <button
                  key={method.title}
                  type="button"
                  onClick={() => setActiveMethod(index)}
                  className={`story-card flex items-center gap-4 text-left transition-all duration-200 ${
                    active ? "story-card-active" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className={`icon-tile shrink-0 ${active ? "bg-primary/15" : ""}`}>
                    <Icon className={`size-5 ${active ? "text-primary" : ""}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-foreground">{method.title}</h3>
                    <p className="mt-1 text-sm leading-snug text-muted-foreground">{method.detail}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active method detail — right column */}
          <motion.div
            key={activeMethod}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-[2rem] border border-border/70 bg-card/80 p-8 backdrop-blur-xl"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            {(() => {
              const ActiveIcon = methods[activeMethod].icon;
              return (
                <>
                  <div className="icon-tile h-14 w-14 rounded-2xl bg-primary/10">
                    <ActiveIcon className="size-6 text-primary" />
                  </div>
                  <h3 className="mt-6 text-2xl font-extrabold text-foreground">
                    {methods[activeMethod].title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">
                    {methods[activeMethod].detail}
                  </p>
                  <div className="mt-6 h-px w-full bg-border/50" />
                  <p className="mt-4 text-sm text-muted-foreground">
                    Each method is built to keep your child engaged and build lasting habits —
                    not just perform well for a single session.
                  </p>
                </>
              );
            })()}
          </motion.div>
        </div>
      </section>

      {/* ── Outcomes ── */}
      <section className="story-band">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Badge variant="glass" className="eyebrow">
              Outcomes
            </Badge>
            <h2 className="section-title mt-4">By the end, confidence starts showing up everywhere.</h2>
            <p className="section-copy mt-4 text-muted-foreground">
              The goal is bigger than one speech. Students start to carry a new kind of ease into
              class participation, friendships, and everyday expression.
            </p>
          </div>
          <div className="grid gap-3">
            {outcomes.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
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
        </div>
      </section>

      {/* ── Quiz ── */}
      <section id="quiz" className="section-shell">
        <ShyConfidenceQuiz />
      </section>

      {/* ── Certification & Rewards ── */}
      <section className="section-shell">
        <div className="mb-10 max-w-2xl">
          <Badge variant="glass" className="eyebrow">
            Certification & rewards
          </Badge>
          <h2 className="section-title mt-4">Recognition that keeps motivation high.</h2>
          <p className="section-copy mt-4 text-muted-foreground">
            Every student leaves with proof of progress, while top performers get extra recognition
            for the growth they demonstrate across the program.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          {/* Certificates */}
          <div className="grid gap-4">
            {certification.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="story-card flex gap-5">
                  <div className="icon-tile shrink-0 self-start">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.copy}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Awards + bonus */}
          <div className="grid gap-4">
            <div className="glass-panel p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="icon-tile">
                  <Trophy className="size-5" />
                </div>
                <h3 className="text-lg font-extrabold text-foreground">Awards spotlight</h3>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {awards.map((award) => (
                  <div
                    key={award}
                    className="highlight-panel flex items-center gap-3 text-sm font-semibold text-foreground"
                  >
                    <Award className="size-4 shrink-0 text-primary" />
                    {award}
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-panel p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Bonus opportunity
              </p>
              <p className="mt-3 text-base font-bold leading-7 text-foreground">
                Standout students may be considered for a guided educational office visit, subject to availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Giveaways ── */}
      <section className="story-band">
        <div className="section-shell">
          <div className="mb-10 max-w-2xl">
            <Badge variant="glass" className="eyebrow">
              Giveaways
            </Badge>
            <h2 className="section-title mt-4">Every student walks away with something.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="story-card flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="icon-tile">
                  <Gift className="size-5" />
                </div>
                <h2 className="text-xl font-extrabold text-foreground">For every student</h2>
              </div>
              <div className="grid gap-2">
                {giveaways.all.map((item) => (
                  <div
                    key={item}
                    className="highlight-panel flex items-center gap-3 text-sm font-semibold text-foreground"
                  >
                    <BookOpen className="size-4 shrink-0 text-secondary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="story-card flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="icon-tile">
                  <Medal className="size-5" />
                </div>
                <h2 className="text-xl font-extrabold text-foreground">For top performers</h2>
              </div>
              <div className="grid gap-2">
                {giveaways.top.map((item) => (
                  <div
                    key={item}
                    className="highlight-panel flex items-center gap-3 text-sm font-semibold text-foreground"
                  >
                    <Star className="size-4 shrink-0 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why this program ── */}
      <section className="section-shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <Badge variant="glass" className="eyebrow">
              Why this program
            </Badge>
            <h2 className="section-title mt-4">
              Built for real-world confidence, not just classroom theory.
            </h2>
          </div>
          <div className="grid gap-3">
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
      </section>

      {/* ── Parent trust ── */}
      <section className="story-band">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <Badge variant="glass" className="eyebrow">
              Parent trust
            </Badge>
            <h2 className="section-title mt-4">
              A safe, structured environment parents can feel good about.
            </h2>
            <p className="section-copy mt-4 text-muted-foreground">
              Designed with clear outcomes, limited seats, guided participation, and an engaging
              pace that helps children grow without feeling overwhelmed.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <div className="metric-pill">Limited seats</div>
              <div className="metric-pill">Structured curriculum</div>
              <div className="metric-pill">Supportive live setting</div>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              {
                icon: ShieldCheck,
                title: "Safe learning environment",
                copy: "Supportive live batches help children practise confidently without feeling exposed.",
              },
              {
                icon: CalendarRange,
                title: "Structured journey",
                copy: "Every session builds on the previous one so progress feels organised and measurable.",
              },
              {
                icon: HandCoins,
                title: "Intentional seat limit",
                copy: "Smaller batches protect interaction quality and give students room to be noticed.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="story-card flex gap-4">
                  <div className="icon-tile shrink-0 self-start">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.copy}</p>
                  </div>
                </div>
              );
            })}

            <div className="grid gap-4 sm:grid-cols-2">
              {testimonials.map((item) => (
                <div key={item.author} className="glass-panel p-5">
                  <p className="text-sm italic leading-7 text-foreground">"{item.quote}"</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    — {item.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Enrollment flow ── */}
      <section className="section-shell">
        <div className="mb-10 max-w-2xl">
          <Badge variant="glass" className="eyebrow">
            Enrollment flow
          </Badge>
          <h2 className="section-title mt-4">A simple path from interest to confirmed seat.</h2>
          <p className="section-copy mt-4 text-muted-foreground">
            Parents can move from enquiry to enrollment in a few simple steps, without confusion.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ["01", "Fill the registration form", "Share student and parent details so the team can guide the right batch."],
            ["02", "Pay the program fee", "Secure the seat and confirm participation in the upcoming batch."],
            ["03", "Receive confirmation", "Get the final schedule, batch details, and next-step instructions."],
          ].map(([step, title, copy]) => (
            <div key={step} className="story-card flex flex-col gap-3 h-full">
              <p className="text-2xl font-black text-primary/30">{step}</p>
              <h3 className="text-lg font-extrabold text-foreground">{title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{copy}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button variant="hero" size="lg" className="h-12 rounded-full px-7 text-base">
            Enroll Now
          </Button>
          <Button variant="glass" size="lg" className="h-12 rounded-full px-7 text-base">
            Book Your Seat Now
          </Button>
        </div>
      </section>

      {/* ── Callback form ── */}
      <section id="register" className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <Badge variant="glass" className="eyebrow">
              Request a call back
            </Badge>
            <h2 className="section-title mt-4">Need help deciding if this is the right fit?</h2>
            <p className="section-copy mt-4 text-muted-foreground">
              Parents can request a quick call for batch timing, fee clarity, program suitability,
              and any questions about their child's readiness.
            </p>
          </div>

          <div className="glass-panel grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
            <Input className="form-field" placeholder="Parent name" aria-label="Parent name" />
            <Input className="form-field" placeholder="Phone number" aria-label="Phone number" />
            <Input className="form-field" placeholder="Email address" aria-label="Email address" />
            <Input className="form-field" placeholder="Child age" aria-label="Child age" />
            <Textarea
              className="form-area sm:col-span-2"
              placeholder="Tell us what you'd like help with"
              aria-label="What help do you need"
            />
            <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
              <Button variant="hero" size="lg" className="h-12 rounded-full px-7 text-base">
                Request a Call Back
              </Button>
              <p className="text-xs text-muted-foreground">
                We'll respond with program details, fees, and timing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section-shell pb-24">
        <div className="cta-band">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Badge variant="glass" className="eyebrow">
                Final call
              </Badge>
              <h2 className="section-title mt-4">Give your child a confident edge this summer.</h2>
              <p className="section-copy mt-4 max-w-2xl text-muted-foreground">
                Help them speak with clarity, carry themselves with confidence, and show up with a
                stronger voice in school, friendships, and beyond.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:items-start lg:items-end">
              <Button variant="hero" size="lg" className="h-12 rounded-full px-8 text-base">
                Book Your Seat Now
              </Button>
              <div className="metric-pill">Interactive live online batches · limited seats</div>
            </div>
          </div>
        </div>
      </section>
      <FloatingRegister />
    </main>
  );
}