import { useState } from 'react';
import { motion } from 'framer-motion';
import PlaceholderImage from '../ui/PlaceholderImage';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../ui/ScrollReveal';
import { SERVICE_CATEGORIES } from '../../data/content';
import { company } from '../../data/site';

function ServiceCategoryCard({ category }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.article
      className="group flex h-full flex-col items-center rounded-2xl bg-surface px-4 py-8 text-center tablet:px-6 tablet:py-10"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="mb-5 flex h-[100px] w-[100px] items-center justify-center tablet:h-[120px] tablet:w-[120px]">
        {!failed && category.icon ? (
          <img
            src={category.icon}
            alt=""
            width={120}
            height={120}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
            onError={() => setFailed(true)}
          />
        ) : (
          <PlaceholderImage
            label={category.title}
            aspect="aspect-square"
            className="h-full w-full rounded-xl"
          />
        )}
      </div>
      <h3 className="font-display text-base font-medium leading-snug text-foreground transition-colors group-hover:text-accent tablet:text-lg">
        {category.title}
      </h3>
    </motion.article>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="servicos"
      className="py-section-sm tablet:py-section-md desktop:py-section-lg"
    >
      <div className="mx-auto max-w-container px-4">
        <ScrollReveal>
          <div className="mb-10 max-w-2xl tablet:mb-14">
            <h2 className="text-heading-xl font-display">{company.servicesSection.title}</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted tablet:text-lg">
              {company.about}
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 gap-4 tablet:grid-cols-3 tablet:gap-6">
          {SERVICE_CATEGORIES.map((category) => (
            <StaggerItem key={category.title}>
              <ServiceCategoryCard category={category} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
