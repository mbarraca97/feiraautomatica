import { motion, useReducedMotion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';

export default function AwardStrip() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-foreground py-section-sm text-on-dark tablet:py-section-md desktop:py-section-lg">
      <div className="mx-auto max-w-container px-4">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-8 text-center">
            <motion.h2
              className="font-display text-[clamp(4rem,15vw,10rem)] font-black leading-none tracking-tighter opacity-20"
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 0.2, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              QUORA
            </motion.h2>

            <p className="max-w-2xl font-body text-lg leading-relaxed text-on-dark-muted tablet:text-xl">
              It takes care of the background so you can stay focused, sharp, and in
              full control of your day.
            </p>

            <motion.div
              className="inline-flex flex-col items-center gap-1 rounded-2xl border border-white/20 px-8 py-5"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="font-display text-lg font-semibold">
                2025 Best Product
              </span>
              <span className="font-body text-sm text-on-dark-muted">from Awwardo</span>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
