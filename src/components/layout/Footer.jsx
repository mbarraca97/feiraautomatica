import ScrollReveal from '../ui/ScrollReveal';
import { contact, footer, meta } from '../../data/site';

const SOCIAL_ICONS = [
  {
    label: 'Facebook',
    href: contact.social.facebook,
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'Instagram',
    href: contact.social.instagram,
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark-surface text-on-dark">
      <div className="mx-auto max-w-container px-4 py-section-sm tablet:py-section-md desktop:py-section-lg">
        <ScrollReveal>
          <div className="grid gap-10 tablet:grid-cols-2 desktop:grid-cols-4 desktop:gap-8">
            <div className="space-y-4">
              <h5 className="font-display text-lg font-semibold">{footer.tagline}</h5>
              <p className="max-w-xs font-body text-base leading-relaxed text-on-dark-muted">
                {footer.description}
              </p>
            </div>

            <div className="space-y-4">
              <p className="font-body text-sm font-semibold uppercase tracking-wider text-on-dark-muted">
                Empresa
              </p>
              <ul className="space-y-3">
                {footer.columns.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-body text-base text-on-dark transition-colors hover:text-on-dark-muted"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <p className="font-body text-sm font-semibold uppercase tracking-wider text-on-dark-muted">
                Serviços
              </p>
              <ul className="space-y-3">
                {footer.columns.services.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-body text-base text-on-dark transition-colors hover:text-on-dark-muted"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <p className="font-body text-sm font-semibold uppercase tracking-wider text-on-dark-muted">
                Contactos
              </p>
              <p className="font-body text-sm text-on-dark-muted">{contact.address.full}</p>
              <a
                href={`tel:${contact.phone.landline.replace(/\s/g, '')}`}
                className="block font-body text-base text-on-dark"
              >
                {contact.phone.landline}
              </a>
              <a
                href={`tel:${contact.phone.mobile.replace(/\s/g, '')}`}
                className="block font-body text-base text-on-dark"
              >
                {contact.phone.mobile}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="block font-body text-base text-on-dark transition-colors hover:text-on-dark-muted"
              >
                {contact.email}
              </a>

              <div className="flex gap-4 pt-2">
                {SOCIAL_ICONS.map((icon) => (
                  <a
                    key={icon.label}
                    href={icon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={icon.label}
                    className="text-on-dark-muted transition-colors hover:text-on-dark"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={icon.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 tablet:flex-row tablet:items-center tablet:justify-between">
          <span className="font-display text-lg font-bold">{meta.siteName}</span>
          <p className="font-body text-sm text-on-dark-muted">{meta.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
