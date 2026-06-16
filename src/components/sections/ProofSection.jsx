import ScrollReveal from '../ui/ScrollReveal';
import LogoMarquee from '../ui/LogoMarquee';
import PlaceholderImage from '../ui/PlaceholderImage';
import { FEATURED_TESTIMONIAL, PROOF_INTRO } from '../../data/proof';

function QuoteIcon() {
  return (
    <svg
      className="h-8 w-8 text-foreground tablet:h-10 tablet:w-10"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  );
}

function SectionIcon() {
  return (
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-surface tablet:h-16 tablet:w-16">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground shadow-sm">
        <span className="font-body text-[10px] font-bold text-on-dark">⌘</span>
      </div>
    </div>
  );
}

export default function ProofSection() {
  const { label, quote, author, company, image, avatar } = FEATURED_TESTIMONIAL;

  return (
    <section className="py-section-sm tablet:py-section-md desktop:py-section-lg">
      <div className="mx-auto max-w-container px-4">
        {/* Intro: icon → title → marquee */}
        <ScrollReveal>
          <div className="text-center">
            <SectionIcon />

            <h2 className="mx-auto mt-8 max-w-3xl text-heading-xl font-display tablet:mt-10">
              {PROOF_INTRO.title}
            </h2>

            <LogoMarquee />
          </div>
        </ScrollReveal>

        {/* Testimonial card */}
        <ScrollReveal delay={0.15} className="mt-14 tablet:mt-16 desktop:mt-20">
          <div className="rounded-[2rem] bg-surface p-3 tablet:rounded-[2.5rem] tablet:p-4">
            <div className="grid gap-3 tablet:grid-cols-2 tablet:gap-4">
              {/* Left — portrait */}
              <div className="overflow-hidden rounded-[1.25rem] tablet:rounded-[1.5rem]">
                <img
                  src={image}
                  alt={`Feedback de ${author}`}
                  className="h-full min-h-[280px] w-full object-cover tablet:min-h-[420px]"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden">
                  <PlaceholderImage
                    label="Testimonial portrait"
                    aspect="aspect-[4/5] tablet:aspect-auto tablet:min-h-[420px]"
                    className="h-full w-full rounded-none"
                  />
                </div>
              </div>

              {/* Right — quote */}
              <div className="relative flex flex-col rounded-[1.25rem] bg-background p-6 tablet:rounded-[1.5rem] tablet:p-10 desktop:p-12">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex rounded-lg bg-accent px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-wide text-on-dark">
                    {label}
                  </span>
                  <QuoteIcon />
                </div>

                <blockquote className="mt-8 flex flex-1 flex-col text-left">
                  <p className="whitespace-pre-line font-body text-lg leading-relaxed text-foreground tablet:text-xl desktop:text-2xl">
                    {quote}
                  </p>

                  <footer className="mt-auto flex items-center gap-3 pt-10">
                    <img
                      src={avatar}
                      alt={author}
                      className="h-10 w-10 rounded-full object-cover"
                      onError={(e) => {
                        e.currentTarget.className =
                          'h-10 w-10 rounded-full bg-border';
                      }}
                    />
                    <cite className="font-body text-base not-italic text-muted">
                      — {author}
                      {company ? `, ${company}` : ''}
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
