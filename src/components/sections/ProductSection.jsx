import Button from '../ui/Button';
import PlaceholderImage from '../ui/PlaceholderImage';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../ui/ScrollReveal';

const PRODUCTS = [
  {
    id: 'airbeat',
    label: 'Immerse yourself in sound',
    title: 'Quora AirBeat',
    description:
      'Dome HarmonyX features a sophisticated noise reduction system that delivers crystal-clear audio. Designed for clarity and precision, it lets you feel every wave of sound. Available in yellow, blue, grey, and black.',
    imageLabel: 'Quora AirBeat',
    imageRight: false,
  },
  {
    id: 'proaudio',
    label: 'Hear every detail',
    title: 'Quora ProAudio',
    description:
      'Dome ProAudio brings powerful bass and crisp highs for a truly immersive experience. Precision-tuned for audiophiles who demand more.',
    descriptionExtra: 'Available in light blue.',
    imageLabel: 'Quora ProAudio',
    imageRight: true,
  },
];

function ProductLabel({ children }) {
  return (
    <span className="inline-flex w-fit self-start rounded-pill bg-surface px-4 py-2 font-body text-xs text-[#4A4A4A] tablet:text-sm">
      {children}
    </span>
  );
}

function ProductBlock({ product }) {
  const imageBlock = (
    <StaggerItem>
      <PlaceholderImage
        label={product.imageLabel}
        aspect="aspect-[4/3] tablet:aspect-square"
        className="w-full rounded-[1.5rem] tablet:rounded-[1.75rem] desktop:rounded-[2rem]"
      />
    </StaggerItem>
  );

  const textBlock = (
    <StaggerItem>
      <div className="flex h-full max-w-lg flex-col justify-center">
        <ProductLabel>{product.label}</ProductLabel>

        <h2 className="mt-5 text-heading-xl font-display font-bold text-foreground tablet:mt-6">
          {product.title}
        </h2>

        <div className="mt-5 space-y-4 font-body text-sm leading-[1.6] text-[#4A4A4A] tablet:mt-6 tablet:text-base">
          <p>{product.description}</p>
          {product.descriptionExtra && <p>{product.descriptionExtra}</p>}
        </div>

        <div className="mt-8 self-start tablet:mt-10">
          <Button variant="soft" size="sm" className="gap-2">
            Pre-order
            <span aria-hidden="true">→</span>
          </Button>
        </div>
      </div>
    </StaggerItem>
  );

  return (
    <div className="py-12 first:pt-0 last:pb-0 tablet:py-16 desktop:py-20">
      <StaggerContainer className="grid items-center gap-10 tablet:gap-14 desktop:grid-cols-2 desktop:gap-20">
        {product.imageRight ? (
          <>
            {textBlock}
            {imageBlock}
          </>
        ) : (
          <>
            {imageBlock}
            {textBlock}
          </>
        )}
      </StaggerContainer>
    </div>
  );
}

export default function ProductSection() {
  return (
    <section id="product" className="bg-background py-section-sm tablet:py-section-md desktop:py-section-lg">
      <div className="mx-auto max-w-container px-4">
        {PRODUCTS.map((product) => (
          <ProductBlock key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
