import { motion } from 'framer-motion';
import PlaceholderImage from '../ui/PlaceholderImage';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../ui/ScrollReveal';
import { BLOG_POSTS } from '../../data/content';

function BlogCard({ post }) {
  return (
    <motion.article
      className="group cursor-pointer overflow-hidden rounded-2xl"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <PlaceholderImage
        label={post.title}
        aspect="aspect-[16/10]"
        className="rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]"
      />
      <div className="mt-5 space-y-3">
        <div className="flex items-center gap-3">
          <span className="rounded-lg bg-accent-subtle px-2.5 py-1 font-body text-xs font-medium text-foreground">
            {post.category}
          </span>
          <span className="font-body text-sm text-muted">{post.date}</span>
        </div>
        <h3 className="font-display text-xl font-medium leading-snug transition-colors group-hover:text-accent">
          {post.title}
        </h3>
      </div>
    </motion.article>
  );
}

export default function BlogPreviewSection() {
  return (
    <section id="blog" className="py-section-sm tablet:py-section-md desktop:py-section-lg">
      <div className="mx-auto max-w-container px-4">
        <ScrollReveal>
          <div className="mb-10 flex flex-col gap-4 tablet:mb-14 tablet:flex-row tablet:items-end tablet:justify-between">
            <div className="max-w-xl">
              <h2 className="text-heading-xl font-display">Quora Insights</h2>
              <p className="mt-4 font-body text-base leading-relaxed text-muted">
                Discover expert tips, smart home guides, and the latest updates on
                living intelligently with Quora.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 font-body text-base font-medium text-foreground transition-colors hover:text-accent"
            >
              Read more
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
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
