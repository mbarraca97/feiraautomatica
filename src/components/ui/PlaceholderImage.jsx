export default function PlaceholderImage({
  label,
  className = '',
  aspect = 'aspect-[4/3]',
  dark = false,
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${aspect} ${className} ${
        dark
          ? 'bg-gradient-to-br from-[#1a1a1a] via-dark-surface to-[#2a2a2a]'
          : 'bg-gradient-to-br from-surface via-border to-[#e8e8e8]'
      }`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div
            className={`mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl ${
              dark ? 'bg-white/10' : 'bg-white/60'
            }`}
          >
            <svg
              className={`h-8 w-8 ${dark ? 'text-white/40' : 'text-foreground/30'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
              />
            </svg>
          </div>
          <p
            className={`font-body text-xs uppercase tracking-widest ${
              dark ? 'text-white/40' : 'text-muted'
            }`}
          >
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}
