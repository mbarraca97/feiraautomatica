import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BentoCard({
  children,
  className = '',
  hoverLabel,
  hoverText,
  hoverOverlay = 'gradient',
}) {
  const overlayClasses =
    hoverOverlay === 'solid'
      ? 'items-center justify-center bg-foreground p-6 text-center'
      : 'justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-5 tablet:p-6';

  const labelClasses =
    hoverOverlay === 'solid'
      ? 'font-body text-xs font-semibold uppercase tracking-widest text-on-dark-muted'
      : 'font-body text-xs font-semibold uppercase tracking-widest text-white/80';

  const textClasses =
    hoverOverlay === 'solid'
      ? 'mt-2 font-body text-sm leading-relaxed text-on-dark tablet:text-base'
      : 'mt-2 font-body text-sm leading-relaxed text-white tablet:text-base';

  return (
    <motion.article
      className={`group relative overflow-hidden rounded-[1.5rem] tablet:rounded-[1.75rem] desktop:rounded-[2rem] ${className}`}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}

      {(hoverLabel || hoverText) && (
        <div
          className={`pointer-events-none absolute inset-0 flex flex-col opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${overlayClasses}`}
        >
          {hoverLabel && <span className={labelClasses}>{hoverLabel}</span>}
          {hoverText && <p className={textClasses}>{hoverText}</p>}
        </div>
      )}
    </motion.article>
  );
}
