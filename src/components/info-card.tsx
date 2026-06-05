type InfoCardProps = {
  title: string;
  description: string;
  duration?: string;
  schedule?: string;
  meta?: string;
  tag?: string;
  href?: string;
  linkLabel?: string;
};

export function InfoCard({
  title,
  description,
  duration,
  schedule,
  meta,
  tag,
  href,
  linkLabel = "Learn more",
}: InfoCardProps) {
  return (
    <article className="club-card flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <h3
          className="font-mono text-lg font-bold leading-snug sm:text-xl"
          style={{ color: "var(--club-page-fg)" }}
        >
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--club-primary)]"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        {tag ? (
          <span className={tag === "Past" ? "club-tag-past" : "club-tag"}>{tag}</span>
        ) : null}
      </div>

      {duration || schedule ? (
        <div className="space-y-1">
          {duration ? (
            <p
              className="font-mono text-xs uppercase tracking-[0.12em]"
              style={{ color: "var(--club-primary)" }}
            >
              {duration}
            </p>
          ) : null}
          {schedule ? (
            <p
              className="font-mono text-xs uppercase tracking-[0.1em]"
              style={{ color: "var(--club-muted-text)" }}
            >
              {schedule}
            </p>
          ) : null}
        </div>
      ) : meta ? (
        <p
          className="font-mono text-xs uppercase tracking-[0.12em]"
          style={{ color: "var(--club-primary)" }}
        >
          {meta}
        </p>
      ) : null}

      <p className="text-sm leading-relaxed sm:text-base" style={{ color: "var(--club-muted-text)" }}>
        {description}
      </p>

      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="club-cta club-cta-outline mt-1 w-fit"
        >
          {linkLabel}
        </a>
      ) : null}
    </article>
  );
}
