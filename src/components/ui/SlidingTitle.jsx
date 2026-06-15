import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const WORDS = ['Feira', 'Automatica'];

export default function SlidingTitle({ words = WORDS, interval = 2800 }) {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval, shouldReduceMotion]);

  return (
    <h1 className="font-display font-bold leading-none tracking-tight text-foreground">
      <span className="relative block overflow-hidden text-[clamp(3rem,10vw,6.5rem)]">
        <span className="invisible" aria-hidden="true">
          {words.reduce((a, b) => (a.length > b.length ? a : b), '')}
        </span>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={words[index]}
            className="absolute inset-0 flex items-center"
            initial={shouldReduceMotion ? false : { y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { y: '-100%', opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </h1>
  );
}
