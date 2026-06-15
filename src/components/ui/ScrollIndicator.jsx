import { motion, useReducedMotion } from 'framer-motion';

export default function ScrollIndicator({ className = '' }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={`flex flex-col items-center gap-2 ${className}`}
      aria-hidden="true"
    >
      <div className="relative flex h-9 w-5 items-start justify-center rounded-pill border-2 border-foreground">
        <motion.div
          className="mt-1.5 h-1.5 w-0.5 rounded-full bg-foreground"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, 8, 0],
                  opacity: [1, 0.3, 1],
                }
          }
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  );
}
