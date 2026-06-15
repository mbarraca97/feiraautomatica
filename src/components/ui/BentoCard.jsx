import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BentoCard({
  children,
  className = '',
  hoverLabel,
  hoverText,
}) {
  return (
    <motion.article
      className={`group relative overflow-hidden rounded-[1.5rem] tablet:rounded-[1.75rem] desktop:rounded-[2rem] ${className}`}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}

      {(hoverLabel || hoverText) && (
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 tablet:p-6">
          {hoverLabel && (
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-white/80">
              {hoverLabel}
            </span>
          )}
          {hoverText && (
            <p className="mt-2 font-body text-sm leading-relaxed text-white tablet:text-base">
              {hoverText}
            </p>
          )}
        </div>
      )}
    </motion.article>
  );
}
