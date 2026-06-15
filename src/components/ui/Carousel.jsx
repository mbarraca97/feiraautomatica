import { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion } from 'framer-motion';

export default function Carousel({ children, className = '' }) {
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div ref={constraintsRef} className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex cursor-grab gap-4 active:cursor-grabbing tablet:gap-6"
        drag={shouldReduceMotion ? false : 'x'}
        dragConstraints={constraintsRef}
        dragElastic={0.08}
        style={{ x }}
      >
        {children}
      </motion.div>
    </div>
  );
}
