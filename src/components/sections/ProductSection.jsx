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
    imageRight: true,
  },
  {
    id: 'proaudio',
    label: 'Hear every detail',
    title: 'Quora ProAudio',
    description:
      'Dome ProAudio brings powerful bass and crisp highs for a truly immersive experience. Precision-tuned for audiophiles who demand more. Available in light blue.',
    imageLabel: 'Quora ProAudio',
    imageRight: false,
  },
];

function ProductBlock({ product, index }) {
  const imageBlock = (
    <StaggerItem>
      <PlaceholderImage
        label={product.imageLabel}
        aspect="aspect-square"
        className="w-full"
      />
    </StaggerItem>
  );

  const textBlock = (
    <StaggerItem>
      <div className="flex h-full flex-col justify-center">
        <span className="mb-4 font-body text-sm uppercase tracking-widest text-accent">
          {product.label}
        </span>
        <h2 className="text-heading-xl font-display">{product.title}</h2>
        <p className="mt-6 font-body text-base leading-relaxed text-muted">
          {product.description}
        </p>
        <div className="mt-8">
          <Button variant="primary">Pre-order</Button>
        </div>
      </div>
    </StaggerItem>
  );

  return (
    <div className="py-section-sm first:pt-0 last:pb-0 tablet:py-section-md">
      <StaggerContainer className="grid items-center gap-10 desktop:grid-cols-2 desktop:gap-16">
        {product.imageRight ? (
          <>
            {textBlock}
            {imageBlock}
          </>
        ) : (
          <>
            <div className="desktop:order-2">{textBlock}</div>
            <div className="desktop:order-1">{imageBlock}</div>
          </>
        )}
      </StaggerContainer>
    </div>
  );
}

export default function ProductSection() {
  return (
    <section id="product" className="py-section-sm tablet:py-section-md desktop:py-section-lg">
      <div className="mx-auto max-w-container px-4">
        {PRODUCTS.map((product, index) => (
          <ProductBlock key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}
