import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FloatingRegisterProps {
  onQuizClick?: () => void;
}

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function FloatingRegister({ onQuizClick }: FloatingRegisterProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Left: quiz trigger */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="fixed bottom-5 left-3 z-50 sm:bottom-8 sm:left-6"
          >
            <Button
              variant="glass"
              size="lg"
              className="h-11 rounded-full px-4 text-xs font-bold shadow-2xl sm:h-14 sm:px-7 sm:text-base"
              onClick={() => onQuizClick ? onQuizClick() : smoothScrollTo("quiz")}
            >
              <HelpCircle className="size-4" />
              <span className="sm:hidden">Confidence check</span>
              <span className="hidden sm:inline">Is your child confident enough?</span>
            </Button>
          </motion.div>

          {/* Right: register */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="fixed bottom-5 right-3 z-50 sm:bottom-8 sm:right-6"
          >
            <Button
              variant="hero"
              size="lg"
              className="h-12 rounded-full px-5 text-sm font-bold shadow-2xl sm:h-14 sm:px-7 sm:text-base"
              onClick={() => smoothScrollTo("register")}
            >
              <Sparkles className="size-4" />
              Register Now
            </Button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}