import { PARTNER_BRANDS } from '../../data/proof';

function BrandLogo({ name }) {
  return (
    <span className="shrink-0 font-display text-xl font-semibold tracking-tight text-foreground/40 tablet:text-2xl">
      {name}
    </span>
  );
}

export default function LogoMarquee({ brands = PARTNER_BRANDS }) {
  const items = [...brands, ...brands];

  return (
    <div className="relative mt-10 overflow-hidden tablet:mt-12">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent" />

      <div className="flex w-max animate-marquee items-center gap-12 tablet:gap-16 desktop:gap-20">
        {items.map((brand, i) => (
          <BrandLogo key={`${brand}-${i}`} name={brand} />
        ))}
      </div>
    </div>
  );
}
