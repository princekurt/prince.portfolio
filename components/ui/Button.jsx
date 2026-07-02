import { ArrowDown } from "lucide-react";

const variants = {
  primary:
    "bg-accent text-accent-foreground hover:brightness-110 focus-visible:ring-accent",
  ghost:
    "border border-border bg-transparent text-foreground hover:bg-surface-raised focus-visible:ring-muted",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-[background-color,transform,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]",
    variants[variant],
    className,
  ].join(" ");

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}

export function ButtonIcon({ icon: Icon = ArrowDown }) {
  return <Icon size={16} aria-hidden="true" />;
}
