import { motion, useReducedMotion } from 'framer-motion';
import Button from '../ui/Button';
import SlidingTitle from '../ui/SlidingTitle';
import FeatureTopics from '../ui/FeatureTopics';
import ScrollIndicator from '../ui/ScrollIndicator';

import { hero, navigation } from '../../data/site';

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const imageMotion = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.92 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
      };

  const fadeUp = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section className="px-3 pb-3 pt-3 tablet:px-4 tablet:pb-4 tablet:pt-4 desktop:px-5 desktop:pb-5 desktop:pt-5">
      <div className="relative mx-auto min-h-[calc(100vh-1.5rem)] max-w-[1600px] overflow-hidden rounded-[2rem] bg-surface tablet:min-h-[calc(100vh-2rem)] tablet:rounded-[2.5rem] desktop:rounded-[3rem]">
        {/* Top left — sliding title */}
        <motion.div
          className="absolute left-5 top-6 z-20 tablet:left-8 tablet:top-8 desktop:left-12 desktop:top-10"
          {...fadeUp(0.15)}
        >
          <SlidingTitle words={hero.slidingTitles} />
        </motion.div>

        {/* Center — product image */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-20 py-32 tablet:px-28 tablet:py-36">
          <motion.div
            className="relative w-full max-w-[240px] sm:max-w-[280px] tablet:max-w-[380px] desktop:max-w-[500px]"
            {...imageMotion}
          >
            <img
              src={hero.image}
              alt="Feira Automática"
              className="h-auto w-full object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.12)]"
            />
          </motion.div>
        </div>

        {/* Middle right — cycling topics */}
        <motion.div
          className="absolute right-5 top-[40%] z-20 -translate-y-1/2 tablet:right-8 desktop:right-12"
          {...fadeUp(0.35)}
        >
          <FeatureTopics />
        </motion.div>

        {/* Bottom left — copy + CTA */}
        <motion.div
          className="absolute bottom-6 left-5 z-20 max-w-[220px] tablet:bottom-8 tablet:left-8 tablet:max-w-[280px] desktop:bottom-10 desktop:left-12 desktop:max-w-xs"
          {...fadeUp(0.45)}
        >
          <p className="font-body text-sm leading-relaxed text-foreground tablet:text-base">
            {hero.subtitle}
          </p>
          <div className="mt-4">
            <a href="#contact">
              <Button variant="primary" size="md" className="gap-2 text-sm">
                {navigation.cta}
                <span aria-hidden="true">→</span>
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Bottom right — scroll indicator */}
        <motion.div
          className="absolute bottom-6 right-5 z-20 tablet:bottom-8 tablet:right-8 desktop:bottom-10 desktop:right-12"
          {...fadeUp(0.55)}
        >
          <ScrollIndicator />
        </motion.div>
      </div>
    </section>
  );
}
