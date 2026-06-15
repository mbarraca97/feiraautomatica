import { motion } from 'framer-motion';
import Carousel from '../ui/Carousel';
import ScrollReveal from '../ui/ScrollReveal';
import { TESTIMONIALS } from '../../data/content';

function TestimonialCard({ testimonial }) {
  return (
    <motion.article
      className="w-[300px] shrink-0 rounded-2xl bg-surface p-6 tablet:w-[360px] tablet:p-8"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <p className="font-body text-base italic leading-relaxed text-foreground">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-6 border-t border-border pt-6">
        <p className="font-body text-base font-semibold">{testimonial.name}</p>
        <p className="mt-1 font-body text-sm text-muted">{testimonial.title}</p>
      </div>
    </motion.article>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="overflow-hidden py-section-sm tablet:py-section-md desktop:py-section-lg">
      <div className="mx-auto max-w-container px-4">
        <ScrollReveal>
          <div className="mb-10 max-w-2xl tablet:mb-14">
            <h2 className="text-heading-xl font-display">Trusted by product builders</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted tablet:text-lg">
              Staying focused, moving quickly, and always aiming for high-quality work.
            </p>
          </div>
        </ScrollReveal>

        <Carousel className="-mx-4 px-4">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
