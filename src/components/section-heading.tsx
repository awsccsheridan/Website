type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <p
        className="font-mono text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm"
        style={{ color: "var(--club-primary)" }}
      >
        {eyebrow}
      </p>
      <h1
        className="font-mono text-2xl leading-tight tracking-tight sm:text-5xl"
        style={{ color: "var(--club-page-fg)" }}
      >
        {title}
      </h1>
      {description ? (
        <p
          className="max-w-3xl text-base leading-relaxed sm:text-lg"
          style={{ color: "var(--club-muted-text)" }}
        >
          {description}
        </p>
      ) : null}
      <div
        className="h-px w-24 sm:w-32"
        style={{
          background: "linear-gradient(90deg, var(--club-primary), transparent)",
        }}
      />
    </div>
  );
}
