import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Brain, MessageCircleHeart, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const prompts = [
  {
    label: "Joining a new group",
    options: [
      { id: "hesitate", text: "Hesitates and waits to be invited" },
      { id: "observe", text: "Observes first, then joins slowly" },
      { id: "lead", text: "Introduces themselves and joins in" },
    ],
  },
  {
    label: "Speaking in class",
    options: [
      { id: "quiet", text: "Avoids raising a hand" },
      { id: "prompted", text: "Answers with encouragement" },
      { id: "ready", text: "Shares thoughts with clarity" },
    ],
  },
  {
    label: "Handling stage fear",
    options: [
      { id: "freeze", text: "Feels stuck and nervous" },
      { id: "recover", text: "Needs time but recovers" },
      { id: "own", text: "Stays composed and expressive" },
    ],
  },
] as const;

const scores: Record<string, number> = {
  hesitate: 0,
  quiet: 0,
  freeze: 0,
  observe: 1,
  prompted: 1,
  recover: 1,
  lead: 2,
  ready: 2,
  own: 2,
};

export function ShyConfidenceQuiz() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [revealed, setRevealed] = useState(false);

  const result = useMemo(() => {
    const total = Object.values(answers).reduce((sum, answer) => sum + (scores[answer] ?? 0), 0);

    if (total <= 1) {
      return {
        title: "Quiet potential",
        detail: "Your child may need a gentle push, structured practice, and safe repetition to express themselves with confidence.",
      };
    }

    if (total <= 4) {
      return {
        title: "Growing confidence",
        detail: "The foundation is there. With guided speaking practice and feedback, confidence can turn into strong communication.",
      };
    }

    return {
      title: "Ready to lead",
      detail: "Your child already shows promising confidence. This program can sharpen clarity, stage presence, and social leadership.",
    };
  }, [answers]);

  return (
    <div className="glass-panel p-6 sm:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Mini confidence check
          </p>
          <h3 className="mt-2 text-2xl font-extrabold text-foreground">
            Is your child shy, emerging, or ready to lead?
          </h3>
        </div>
        <div className="icon-tile">
          <Brain className="size-5" />
        </div>
      </div>

      <div className="grid gap-4">
        {prompts.map((prompt, index) => (
          <div key={prompt.label} className="highlight-panel">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-muted-foreground">
              {prompt.label}
            </p>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {prompt.options.map((option) => {
                const selected = answers[index] === option.id;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setAnswers((current) => ({ ...current, [index]: option.id }))}
                    className={`story-card text-left ${selected ? "story-card-active" : ""}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-sm font-semibold text-foreground">{option.text}</span>
                      <span className="icon-tile h-9 w-9 rounded-xl text-xs">0{scores[option.id] + 1}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <MessageCircleHeart className="size-4 text-secondary" />
          Quick signal for parents, not a formal assessment.
        </div>
        <Button
          variant="glass"
          size="lg"
          className="h-12 rounded-full px-6"
          onClick={() => setRevealed(true)}
        >
          <Sparkles className="size-4" />
          Reveal insight
        </Button>
      </div>

      {revealed && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 rounded-[1.75rem] border border-border/70 bg-background/80 p-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Result
          </p>
          <h4 className="mt-2 text-2xl font-extrabold text-foreground">{result.title}</h4>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">{result.detail}</p>
        </motion.div>
      )}
    </div>
  );
}
