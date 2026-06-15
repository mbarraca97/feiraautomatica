export default function PillTag({ children, className = '' }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-lg bg-accent-subtle px-3.5 py-1.5 font-body text-sm text-foreground ${className}`}
    >
      {children}
    </span>
  );
}
