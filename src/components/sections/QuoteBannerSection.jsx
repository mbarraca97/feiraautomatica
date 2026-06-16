import ScrollReveal from '../ui/ScrollReveal';
import ContactForm from '../ui/ContactForm';
import { contact } from '../../data/site';

function MailIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

export default function QuoteBannerSection() {
  const banner = contact.quoteBanner;

  return (
    <section id="contact" className="pb-section-sm tablet:pb-section-md desktop:pb-section-lg">
      <div className="mx-auto max-w-container px-4">
        <ScrollReveal>
          <div className="overflow-hidden rounded-[2rem] bg-surface p-3 tablet:rounded-[2.5rem] tablet:p-4">
            <div className="grid gap-3 tablet:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] tablet:gap-4">
              <div className="flex flex-col justify-between rounded-[1.25rem] bg-foreground p-6 text-on-dark tablet:rounded-[1.5rem] tablet:p-8 desktop:p-10">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-lg bg-accent px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-wide text-on-dark">
                    <MailIcon />
                    {banner.label}
                  </span>

                  <h2 className="mt-6 font-display text-heading-lg leading-snug text-on-dark tablet:mt-8">
                    {banner.headline}
                  </h2>

                  <p className="mt-4 font-body text-base leading-relaxed text-on-dark-muted">
                    {banner.description}
                  </p>
                </div>

                <div className="mt-8 space-y-3 border-t border-white/10 pt-8">
                  <a
                    href={`tel:${contact.phone.landline.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 font-body text-sm text-on-dark transition-opacity hover:opacity-80 tablet:text-base"
                  >
                    <PhoneIcon />
                    {contact.phone.landline}
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-3 font-body text-sm text-on-dark transition-opacity hover:opacity-80 tablet:text-base"
                  >
                    <MailIcon />
                    {contact.email}
                  </a>
                </div>
              </div>

              <ContactForm formCopy={banner} />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
