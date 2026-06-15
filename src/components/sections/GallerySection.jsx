import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';
import PlaceholderImage from '../ui/PlaceholderImage';

function LiveClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-body text-sm tabular-nums text-on-dark-muted">{time}</span>
  );
}

export default function GallerySection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-dark-surface py-section-sm text-on-dark tablet:py-section-md desktop:py-section-lg">
      <div className="mx-auto max-w-container px-4">
        <ScrollReveal>
          <div className="relative mx-auto max-w-lg">
            <PlaceholderImage
              label="Quora app UI"
              aspect="aspect-[9/16]"
              dark
              className="mx-auto w-full shadow-card"
            />

            <motion.div
              className="absolute left-6 top-8"
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <LiveClock />
            </motion.div>

            <motion.div
              className="absolute left-6 top-1/3"
              initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="font-display text-7xl font-bold leading-none tablet:text-8xl">
                8D
              </span>
              <div className="mt-2 space-y-0.5">
                <p className="font-display text-lg font-medium">Immersive sound</p>
                <p className="font-display text-lg font-medium text-on-dark-muted">
                  Mode
                </p>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-8 right-6 rounded-xl bg-white/10 p-4 backdrop-blur-md"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p className="font-body text-xs text-on-dark-muted">Top rated app</p>
              <p className="font-display text-3xl font-bold">4.9</p>
              <p className="font-body text-xs text-on-dark-muted">
                Based on 1200+ reviews
              </p>
            </motion.div>

            <motion.div
              className="absolute bottom-24 left-6 rounded-lg bg-accent px-3 py-1.5"
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <span className="font-body text-xs font-medium text-on-dark">
                Immersive
              </span>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
