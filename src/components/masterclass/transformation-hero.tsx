import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, Star, WandSparkles } from "lucide-react";

// ── All 5 stage images ───────────────────────────────────────────────────────
import shyStudent      from "@/assets/shy-student.jpg";
import unsureStudent   from "@/assets/unsure.png";
import findingVoice    from "@/assets/finding voice.png";
import confidentStudent from "@/assets/confident-student.jpg";
import leader          from "@/assets/leader .png";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// ── Story steps — each has its own image ────────────────────────────────────
const storySteps = [
  { label: "Shy...",               image: shyStudent,       alt: "A shy child at the start of the journey" },
  { label: "Unsure...",            image: unsureStudent,    alt: "A child who is unsure but curious" },
  { label: "Finding their voice...", image: findingVoice,  alt: "A child finding their voice and confidence" },
  { label: "Confident.",           image: confidentStudent, alt: "A confident child ready to speak" },
  { label: "A Leader.",            image: leader,           alt: "A child who has become a confident young leader" },
];

const STEP_DURATION = 2400; // ms per step

export function TransformationHero() {
  const reduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveStep((s) => (s + 1) % storySteps.length);
    }, STEP_DURATION);
  };

  useEffect(() => {
    startTimer();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const progress = activeStep / (storySteps.length - 1); // 0 → 1
  const barWidth  = Math.max(6, progress * 100);
  const glowOpacity = 0.15 + progress * 0.55;

  return (
    <section className="relative isolate">
      <div className="flex min-h-screen items-center overflow-hidden py-8 md:py-10">
        <div className="section-shell w-full grid gap-10 xl:grid-cols-2 xl:items-center xl:gap-12">

          {/* ── LEFT: Text content ── */}
          <div className="relative z-10 flex flex-col gap-6 order-2 xl:order-1">

            <Badge variant="glass" className="eyebrow self-start">
              <Sparkles className="size-3.5" />
              4-week live summer masterclass
            </Badge>

            <h1 className="display-title text-foreground leading-[1.08] tracking-tight">
              From a quiet child to a{" "}
              <span className="text-primary">confident speaker</span>{" "}
              in just four weeks.
            </h1>

            <p className="section-copy max-w-lg text-muted-foreground leading-relaxed">
              A cinematic personality-development journey for ages 10–16 designed to help
              children speak clearly, show up confidently, and carry themselves like young leaders.
            </p>

            {/* Story step pills — clickable */}
            <div className="flex flex-wrap gap-2">
              {storySteps.map((step, index) => (
                <motion.button
                  key={step.label}
                  type="button"
                  onClick={() => { setActiveStep(index); startTimer(); }}
                  animate={{
                    opacity: activeStep === index ? 1 : 0.38,
                    y:       activeStep === index ? 0 : 4,
                    scale:   activeStep === index ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="metric-pill cursor-pointer"
                >
                  {step.label}
                </motion.button>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button variant="hero" size="lg" className="h-12 rounded-full px-7 text-base">
                Start Your Child's Transformation
                <ArrowRight className="size-4" />
              </Button>
              <Button variant="glass" size="lg" className="h-12 rounded-full px-7 text-base">
                Register Now
              </Button>
            </div>

            <div className="floating-chip inline-flex w-fit items-center gap-2">
              <Star className="size-4 text-secondary" />
              Limited interactive batch · live online
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              {[
                ["60–90 min",    "Live session weekly"],
                ["40–50 seats",  "Small, personal batch"],
                ["Final showcase","Parents see the change"],
              ].map(([title, detail]) => (
                <div key={title} className="glass-panel flex flex-col gap-1 rounded-2xl p-4">
                  <p className="text-sm font-bold text-foreground leading-tight">{title}</p>
                  <p className="text-xs leading-snug text-muted-foreground">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Image panel ── */}
          <div className="relative order-1 xl:order-2 w-full h-[420px] sm:h-[520px] md:h-[580px] xl:h-[640px]">

            {/* Ambient glow */}
            <motion.div
              aria-hidden="true"
              animate={{ opacity: glowOpacity }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 rounded-[2rem] bg-primary/10 blur-3xl"
            />

            {/* Floating chips */}
            <motion.div
              className="absolute left-3 top-6 floating-chip hidden xl:flex z-20"
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 4.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <WandSparkles className="mr-2 size-4 text-primary" />
              posture • voice • confidence
            </motion.div>

            <motion.div
              className="absolute bottom-20 left-3 floating-chip hidden xl:flex z-20"
              animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 3.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Star className="mr-2 size-4 text-accent-foreground" />
              final showcase ready
            </motion.div>

            {/* Main image card */}
            <div className="glass-panel relative h-full w-full overflow-hidden rounded-[2rem]">

              {/* Top & bottom fades */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-background/60 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-background/80 to-transparent" />

              {/* ── All 5 images stacked, only active one visible ── */}
              {storySteps.map((step, index) => {
                const isActive = index === activeStep;
                // Each image gently rises/scales when it becomes active
                return (
                  <motion.img
                    key={step.label}
                    src={step.image}
                    alt={step.alt}
                    width={1024}
                    height={1280}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale:   isActive ? 1 : 0.94,
                      y:       isActive ? 0 : 20,
                    }}
                    transition={{
                      duration: 0.85,
                      ease: "easeInOut",
                      // stagger: active image fades in slightly after inactive fades out
                      opacity: { duration: 0.75 },
                      scale:   { duration: 0.85 },
                      y:       { duration: 0.85 },
                    }}
                    // PNG images need object-contain; jpgs look fine either way
                    className="absolute bottom-0 left-1/2 z-[2] h-[82%] w-auto max-w-[70%] -translate-x-1/2 object-contain"
                    style={{ zIndex: isActive ? 3 : 2 }}
                  />
                );
              })}

              {/* Pulse card overlay */}
              <div className="absolute inset-x-4 bottom-4 z-20 sm:inset-x-6 sm:bottom-6">
                <div className="glass-panel rounded-2xl p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground sm:text-xs">
                        Transformation pulse
                      </p>
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={activeStep}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="mt-1 text-base font-extrabold text-foreground sm:text-xl"
                        >
                          {storySteps[activeStep].label}
                        </motion.p>
                      </AnimatePresence>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs text-muted-foreground">Journey stage</p>
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={activeStep}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-base font-bold text-primary sm:text-lg"
                        >
                          0{activeStep + 1}/05
                        </motion.p>
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      className="h-full rounded-full bg-primary"
                      animate={{ width: `${barWidth}%` }}
                      transition={{ duration: 0.9, ease: "easeInOut" }}
                    />
                  </div>

                  {/* Step dots */}
                  <div className="mt-3 flex items-center gap-1.5">
                    {storySteps.map((_, i) => (
                      <motion.button
                        key={i}
                        type="button"
                        aria-label={`Go to stage ${i + 1}`}
                        onClick={() => { setActiveStep(i); startTimer(); }}
                        animate={{ width: i === activeStep ? 24 : 8 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className={`h-1.5 rounded-full transition-colors ${
                          i === activeStep ? "bg-primary" : "bg-muted-foreground/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Auto-play hint */}
            <motion.div
              className="mx-auto mt-4 hidden w-fit lg:flex"
              animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
              transition={{ duration: 4.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <div className="floating-chip inline-flex items-center gap-2">
                <Sparkles className="size-4 text-secondary" />
                tap a stage to explore · auto-playing
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}