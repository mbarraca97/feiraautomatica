const variants = {
  primary:
    'bg-foreground text-on-dark hover:opacity-90 active:scale-[0.98]',
  secondary:
    'bg-border text-foreground hover:bg-[#e0e0e0] active:scale-[0.98]',
  accent:
    'bg-accent text-on-dark hover:brightness-110 active:scale-[0.98]',
};

const sizes = {
  md: 'px-6 py-3 text-sm tablet:text-base',
  lg: 'px-8 py-3.5 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-pill font-body font-medium transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
