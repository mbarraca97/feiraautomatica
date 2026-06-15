import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FEATURE_PILLS } from '../../data/content';

export default function FeatureTopics({ items = FEATURE_PILLS, interval = 2200 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(id);
  }, [items.length, interval, shouldReduceMotion]);

  return (
    <ul className="flex flex-col gap-0.5 text-right font-display text-base font-medium tablet:gap-1 tablet:text-xl desktop:text-2xl">
      {items.map((item, i) => (
        <motion.li
          key={item}
          animate={{
            color: i === activeIndex ? '#000000' : '#888888',
          }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
        >
          {item}
        </motion.li>
      ))}
    </ul>
  );
}
