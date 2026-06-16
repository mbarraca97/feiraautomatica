import { useRef, useState } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import PlaceholderImage from '../ui/PlaceholderImage';
import {
  SHOWCASE_COPY,
  SHOWCASE_IMAGES_LEFT,
  SHOWCASE_IMAGES_RIGHT,
  SHOWCASE_VIDEO,
  SHOWCASE_VIDEO_POSTER,
} from '../../data/showcase';

function ShowcaseImageCard({ image }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="w-[26vw] max-w-[160px] shrink-0 overflow-hidden rounded-[1rem] shadow-card tablet:w-[18vw] tablet:max-w-[220px] tablet:rounded-[1.25rem] desktop:max-w-[260px] desktop:rounded-[1.5rem]">
      {!failed ? (
        <img
          src={image.src}
          alt={image.alt}
          className="aspect-[3/4] w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <PlaceholderImage
          label={image.label}
          aspect="aspect-[3/4]"
          className="rounded-none"
        />
      )}
    </div>
  );
}

function ImageColumn({ images, side, y, scale }) {
  return (
    <motion.div
      className={`absolute top-0 flex flex-col gap-5 tablet:gap-6 ${
        side === 'left'
          ? 'left-3 tablet:left-8 desktop:left-12'
          : 'right-3 tablet:right-8 desktop:right-12'
      }`}
      style={{ y, scale }}
    >
      {images.map((image) => (
        <ShowcaseImageCard key={image.id} image={image} />
      ))}
    </motion.div>
  );
}

function ShowcaseVideo({ videoY, videoOpacity, videoScale }) {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <motion.div
      className="absolute inset-x-0 bottom-0 z-30 h-[58vh] min-h-[320px] tablet:h-[62vh]"
      style={{ y: videoY, opacity: videoOpacity, scale: videoScale }}
    >
      <div className="relative h-full w-full overflow-hidden bg-dark-surface">
        {!videoFailed ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={SHOWCASE_VIDEO_POSTER}
            onError={() => setVideoFailed(true)}
          >
            <source src={SHOWCASE_VIDEO} type="video/mp4" />
          </video>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-dark-surface">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/30">
                <svg
                  className="ml-1 h-6 w-6 text-on-dark"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="font-body text-sm text-on-dark-muted">
                Add your video to{' '}
                <code className="text-on-dark">public/videos/showcase.mp4</code>
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function StaticShowcase() {
  const allImages = [...SHOWCASE_IMAGES_LEFT, ...SHOWCASE_IMAGES_RIGHT];

  return (
    <section className="bg-background py-section-lg">
      <div className="mx-auto max-w-container px-4 text-center">
          <h2 className="font-display text-[clamp(3rem,12vw,8rem)] font-black leading-none tracking-tighter text-foreground whitespace-pre-line">
          {SHOWCASE_COPY.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-muted tablet:text-lg">
          {SHOWCASE_COPY.subtitle}
        </p>
        <div className="mt-12 grid grid-cols-2 gap-4 tablet:grid-cols-3 tablet:gap-6">
          {allImages.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-2xl">
              <img src={image.src} alt={image.alt} className="aspect-[3/4] w-full object-cover" />
            </div>
          ))}
        </div>
        <div className="mt-12 overflow-hidden rounded-2xl">
          <PlaceholderImage label="Showcase video" aspect="aspect-video" className="w-full" dark />
        </div>
      </div>
    </section>
  );
}

export default function AwardStrip() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const leftY = useTransform(scrollYProgress, [0.05, 0.72], [360, -520]);
  const rightY = useTransform(scrollYProgress, [0.05, 0.72], [480, -400]);
  const leftScale = useTransform(scrollYProgress, [0.05, 0.72], [0.88, 1.1]);
  const rightScale = useTransform(scrollYProgress, [0.05, 0.72], [0.9, 1.12]);

  const textOpacity = useTransform(scrollYProgress, [0, 0.12, 0.58, 0.72], [0, 1, 1, 0]);
  const imagesOpacity = useTransform(scrollYProgress, [0.5, 0.78], [1, 0]);

  const videoY = useTransform(scrollYProgress, [0.58, 0.92], ['105%', '0%']);
  const videoOpacity = useTransform(scrollYProgress, [0.56, 0.72], [0, 1]);
  const videoScale = useTransform(scrollYProgress, [0.58, 0.92], [0.94, 1]);

  if (shouldReduceMotion) {
    return <StaticShowcase />;
  }

  return (
    <section
      ref={containerRef}
      className="relative bg-background"
      style={{ height: '420vh' }}
      aria-label="Quora showcase"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center"
          style={{ opacity: textOpacity }}
        >
          <h2 className="font-display text-[clamp(3.5rem,14vw,9rem)] font-black leading-[0.95] tracking-tighter text-foreground whitespace-pre-line">
            {SHOWCASE_COPY.title}
          </h2>
          <p className="mt-5 max-w-xl font-body text-sm leading-relaxed text-[#4A4A4A] tablet:mt-6 tablet:max-w-2xl tablet:text-base desktop:text-lg">
            {SHOWCASE_COPY.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="absolute inset-0 z-10"
          style={{ opacity: imagesOpacity }}
        >
          <ImageColumn
            images={SHOWCASE_IMAGES_LEFT}
            side="left"
            y={leftY}
            scale={leftScale}
          />
          <ImageColumn
            images={SHOWCASE_IMAGES_RIGHT}
            side="right"
            y={rightY}
            scale={rightScale}
          />
        </motion.div>

        <ShowcaseVideo
          videoY={videoY}
          videoOpacity={videoOpacity}
          videoScale={videoScale}
        />
      </div>
    </section>
  );
}
