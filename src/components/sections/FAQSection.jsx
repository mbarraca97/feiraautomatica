import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';
import { FAQ_ITEMS } from '../../data/content';
import { homepage } from '../../data/site';

function FAQItem({ item, isOpen, onToggle }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mb-2 overflow-hidden rounded-xl border border-border bg-background">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-body text-base font-medium text-foreground">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
          className="flex h-5 w-5 shrink-0 items-center justify-center"
          aria-hidden="true"
        >
          <svg
            className="h-5 w-5 text-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 font-body text-base leading-relaxed text-muted">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faq = homepage.faq;

  return (
    <section id="faq" className="py-section-sm tablet:py-section-md desktop:py-section-lg">
      <div className="mx-auto max-w-container px-4">
        <ScrollReveal>
          <div className="mx-auto mb-10 max-w-2xl text-center tablet:mb-14">
            <h2 className="text-heading-xl font-display">{faq.title}</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              {faq.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
