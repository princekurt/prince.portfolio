import { ArrowUpRight } from "lucide-react";

export default function Card({
  title,
  description,
  href,
  className = "",
}) {
  const classes = [
    "group flex h-full flex-col rounded-lg border border-border bg-surface p-5 transition-colors duration-200 hover:border-muted hover:bg-surface-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    className,
  ].join(" ");

  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-medium leading-snug text-foreground">
          {title}
        </h3>
        {href ? (
          <ArrowUpRight
            size={16}
            aria-hidden="true"
            className="mt-0.5 shrink-0 text-muted transition-colors duration-200 group-hover:text-accent"
          />
        ) : null}
      </div>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      ) : null}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return <article className={classes}>{content}</article>;
}
