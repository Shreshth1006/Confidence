import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import confidentStudent from "@/assets/confident-student.jpg";
import shyStudent from "@/assets/shy-student.jpg";
export function BeforeAfterSlider() {
  const [split, setSplit] = useState(52);

  useEffect(() => {
    let direction = 1;

    const timer = window.setInterval(() => {
      setSplit((current) => {
        if (current >= 82) direction = -1;
        if (current <= 18) direction = 1;
        return current + direction * 2;
      });
    }, 180);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="glass-panel overflow-hidden p-4 sm:p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            See the transformation
          </p>
          <p className="mt-1 text-xl font-bold text-foreground">Day 1 to final showcase</p>
        </div>
        <div className="metric-pill">Drag to compare</div>
      </div>

      <div className="relative aspect-[16/11] overflow-hidden rounded-[1.75rem] border border-border/70 bg-muted">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background" />

        <div className="absolute inset-0 flex items-end justify-center p-6">
          <img
            src={confidentStudent}
            alt="Confident child after the masterclass"
            width={1024}
            height={1280}
            loading="lazy"
            className="h-full w-auto object-contain"
          />
        </div>

        <div className="absolute inset-0 overflow-hidden" style={{ width: `${split}%` }}>
          <div className="absolute inset-0 flex items-end justify-center bg-background/55 p-6 backdrop-blur-[1px]">
            <img
              src={shyStudent}
              alt="Shy child before the masterclass"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-full w-auto object-contain opacity-95"
            />
          </div>
        </div>

        <motion.div
          className="absolute inset-y-0 z-10 w-1 rounded-full bg-primary shadow-[var(--shadow-lift)]"
          animate={{ left: `calc(${split}% - 2px)` }}
          transition={{ type: "spring", stiffness: 240, damping: 30 }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border/70 bg-card text-sm font-bold text-foreground shadow-[var(--shadow-soft)]">
            ↔
          </div>
        </motion.div>

        <div className="absolute left-4 top-4 rounded-full bg-card/85 px-3 py-1 text-sm font-semibold text-foreground backdrop-blur">
          Week 1 · shy
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-card/85 px-3 py-1 text-sm font-semibold text-foreground backdrop-blur">
          Week 4 · fully confident leader
        </div>
      </div>

      <input
        aria-label="Compare shy and confident transformation"
        type="range"
        min={15}
        max={85}
        value={split}
        onChange={(event) => setSplit(Number(event.target.value))}
        className="mt-5 h-2 w-full cursor-pointer appearance-none rounded-full bg-muted accent-primary"
      />
    </div>
  );
}
