import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';
import PlaceholderImage from '../ui/PlaceholderImage';

function AnimatedCounter({ target = 50, suffix = 'K' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      setCount(target);
      return;
    }

    const duration = 2000;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, target, shouldReduceMotion]);

  return (
    <span ref={ref} className="font-display text-5xl font-bold tablet:text-6xl desktop:text-7xl">
      {count}
      {suffix}
    </span>
  );
}

export default function BenefitsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-section-sm tablet:py-section-md desktop:py-section-lg">
      <div className="mx-auto max-w-container px-4">
        <div className="grid items-center gap-12 desktop:grid-cols-2 desktop:gap-16">
          <div>
            <ScrollReveal>
              <h2 className="text-heading-xl font-display">Reimagined by Technology</h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-muted tablet:text-lg">
                Quora turns your living space into an intelligent, effortless
                environment that adapts to your day.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-end gap-4">
                <span className="font-body text-sm text-muted">Trusted by:</span>
                <AnimatedCounter target={50} suffix="K" />
                <span className="pb-2 font-body text-sm text-muted">
                  Leading technology users
                </span>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <div className="relative">
              <PlaceholderImage
                label="App interface"
                aspect="aspect-[9/16] max-h-[600px]"
                dark
                className="mx-auto w-full max-w-sm"
              />

              <motion.div
                className="absolute bottom-8 right-4 rounded-lg bg-accent px-4 py-2 backdrop-blur-sm tablet:right-8"
                initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <p className="text-right font-body text-sm font-medium text-on-dark">
                  Hey Quora!
                </p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
