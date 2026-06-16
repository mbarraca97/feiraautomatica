import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';
import BentoCard from '../ui/BentoCard';
import PlaceholderImage from '../ui/PlaceholderImage';
import { BENTO_CARDS, TECHNOLOGY } from '../../data/benefits';

function AnimatedCounter({ target = 156, suffix = 'K' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [count, setCount] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      setCount(target);
      return;
    }

    const duration = 2200;
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
    <span ref={ref} className="font-display text-5xl font-bold text-on-dark tablet:text-6xl">
      {count}
      {suffix}
    </span>
  );
}

function CardImage({ src, alt, label, className = '' }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <PlaceholderImage
        label={label}
        className={`h-full w-full rounded-none ${className}`}
        aspect="aspect-auto min-h-[200px]"
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full object-cover ${className}`}
      onError={() => setHasError(true)}
    />
  );
}

function LiveClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString('pt-PT', {
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
    <span className="font-body text-sm tabular-nums text-on-dark tablet:text-base">
      {time}
    </span>
  );
}

export default function BenefitsSection() {
  const { trusted, remote, hero, immersive, clock } = BENTO_CARDS;

  return (
    <section id="about" className="bg-surface py-section-sm tablet:py-section-md desktop:py-section-lg">
      <div className="mx-auto max-w-container px-4">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-heading-xl font-display">{TECHNOLOGY.title}</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted tablet:mt-5 tablet:text-lg">
              {TECHNOLOGY.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-12 tablet:mt-14 desktop:mt-16">
          <div className="grid grid-cols-1 gap-4 tablet:grid-cols-3 tablet:gap-5">
            {/* Left bento cluster */}
            <div className="grid grid-cols-2 gap-4 tablet:col-span-2 tablet:gap-5">
              {/* Trusted by */}
              <BentoCard
                className="col-span-1 min-h-[220px] tablet:min-h-[260px]"
                hoverLabel={trusted.hoverLabel}
                hoverText={trusted.hoverText}
              >
                <div className="absolute inset-0">
                  <CardImage
                    src={trusted.image}
                    alt="Trusted by community"
                    label="Trusted by"
                    className="min-h-[220px] tablet:min-h-[260px]"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-between p-5 text-center text-on-dark tablet:p-6">
                  <span className="font-body text-sm text-on-dark/80">
                    {trusted.stat.prefix}
                  </span>
                  <AnimatedCounter target={trusted.stat.value} suffix={trusted.stat.suffix} />
                  <span className="font-body text-xs text-on-dark/70 tablet:text-sm">
                    {trusted.stat.label}
                  </span>
                </div>
              </BentoCard>

              {/* Remote */}
              <BentoCard
                className="col-span-1 min-h-[280px] tablet:min-h-[260px]"
                hoverLabel={remote.hoverLabel}
                hoverText={remote.hoverText}
              >
                <CardImage
                  src={remote.image}
                  alt="Quora remote"
                  label="Voice remote"
                  className="min-h-[280px] tablet:min-h-[260px]"
                />
              </BentoCard>

              {/* 8D Immersive */}
              <BentoCard
                className="col-span-2 min-h-[180px] bg-[#FFF0ED] tablet:min-h-[200px]"
                hoverLabel={immersive.hoverLabel}
                hoverText={immersive.hoverText}
              >
                <div className="flex h-full min-h-[180px] flex-col items-center justify-center px-6 py-10 text-center tablet:min-h-[200px]">
                  <span className="font-display text-6xl font-bold leading-none text-accent tablet:text-7xl desktop:text-8xl">
                    {immersive.title}
                  </span>
                  <span className="mt-2 font-display text-xl font-medium text-accent tablet:text-2xl">
                    {immersive.subtitle}
                  </span>
                </div>
              </BentoCard>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-4 tablet:gap-5">
              {/* Hero portrait */}
              <BentoCard
                className="relative min-h-[360px] flex-1 tablet:min-h-[420px]"
                hoverLabel={hero.hoverLabel}
                hoverText={hero.hoverText}
              >
                <CardImage
                  src={hero.image}
                  alt="Woman enjoying immersive sound"
                  label="Immersive experience"
                  className="min-h-[360px] tablet:min-h-[420px]"
                />
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-5 tablet:p-6">
                  <span className="inline-flex w-fit items-center gap-2 rounded-pill bg-background/95 px-3 py-1.5 font-body text-xs font-medium text-foreground shadow-sm backdrop-blur-sm">
                    <span className="text-accent">★</span>
                    {hero.badge}
                  </span>
                  <div className="text-on-dark">
                    <p className="font-display text-2xl font-bold">{hero.rating}</p>
                    <p className="font-body text-xs text-on-dark/80 tablet:text-sm">
                      {hero.reviews}
                    </p>
                  </div>
                </div>
              </BentoCard>

              {/* Clock pill */}
              <BentoCard
                className="bg-foreground"
                hoverLabel={clock.hoverLabel}
                hoverText={clock.hoverText}
              >
                <div className="flex items-center justify-center gap-3 px-6 py-4 tablet:py-5">
                  <svg
                    className="h-5 w-5 shrink-0 text-on-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <LiveClock />
                </div>
              </BentoCard>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
