import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Button from '../ui/Button';
import { NAV_LINKS } from '../../data/content';

function MenuDots() {
  return (
    <span className="flex flex-col gap-[3px]" aria-hidden="true">
      <span className="h-[3px] w-[3px] rounded-full bg-on-dark" />
      <span className="h-[3px] w-[3px] rounded-full bg-on-dark" />
    </span>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navMotion = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: -16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
      };

  return (
    <>
      <motion.header
        className="fixed right-4 top-4 z-50 tablet:right-6 tablet:top-6 desktop:right-8 desktop:top-8"
        {...navMotion}
      >
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="inline-flex min-w-[150px] items-center justify-between gap-4 rounded-pill bg-nav-glass px-6 py-2.5 font-body text-sm text-on-dark backdrop-blur-[10px] transition-opacity hover:opacity-90 tablet:min-w-[170px] tablet:px-7 tablet:py-3 tablet:text-base"
          aria-expanded={menuOpen}
          aria-label="Open menu"
        >
          Menu
          <MenuDots />
        </button>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-dark-surface"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-end px-6 py-5 tablet:px-8">
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-3 font-body text-base text-on-dark-muted"
                aria-label="Close menu"
              >
                Close
                <MenuDots />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-6 px-8 tablet:gap-8 tablet:px-12">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-4xl font-semibold text-on-dark tablet:text-5xl"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-6"
              >
                <Button variant="primary" size="lg">
                  Pre-order →
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
