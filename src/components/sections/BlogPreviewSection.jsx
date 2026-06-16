import { useState } from 'react';
import { motion } from 'framer-motion';
import PlaceholderImage from '../ui/PlaceholderImage';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../ui/ScrollReveal';
import { BLOG_POSTS } from '../../data/content';
import { homepage } from '../../data/site';

function GalleryCard({ post }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.article
      className="group cursor-pointer overflow-hidden rounded-2xl"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="overflow-hidden rounded-2xl">
        {!failed && post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            onError={() => setFailed(true)}
          />
        ) : (
          <PlaceholderImage
            label={post.title}
            aspect="aspect-[16/10]"
            className="rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]"
          />
        )}
      </div>
      <div className="mt-5 space-y-3">
        <span className="inline-flex rounded-lg bg-accent-subtle px-2.5 py-1 font-body text-xs font-medium text-foreground">
          {post.category}
        </span>
        <h3 className="font-display text-xl font-medium leading-snug transition-colors group-hover:text-accent">
          {post.title}
        </h3>
      </div>
    </motion.article>
  );
}

export default function BlogPreviewSection() {
  const gallery = homepage.gallery;

  return (
    <section id="galeria" className="py-section-sm tablet:py-section-md desktop:py-section-lg">
      <div className="mx-auto max-w-container px-4">
        <ScrollReveal>
          <div className="mb-10 flex flex-col gap-4 tablet:mb-14 tablet:flex-row tablet:items-end tablet:justify-between">
            <div className="max-w-xl">
              <h2 className="text-heading-xl font-display">{gallery.title}</h2>
              <p className="mt-4 font-body text-base leading-relaxed text-muted">
                {gallery.subtitle}
              </p>
            </div>
            <a
              href="https://feiraautomatica.pt/galeria/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-base font-medium text-foreground transition-colors hover:text-accent"
            >
              {gallery.linkLabel}
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid gap-8 tablet:grid-cols-2 desktop:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <StaggerItem key={post.title}>
              <GalleryCard post={post} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
