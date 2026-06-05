import { clubStats } from "@/lib/site";

type StatsSectionProps = {
  title?: string;
  compact?: boolean;
  className?: string;
};

export function StatsSection({
  title = "By the numbers",
  compact = false,
  className = "",
}: StatsSectionProps) {
  return (
    <section className={`${compact ? "space-y-3" : "space-y-6"} ${className}`}>
      <p
        className={`font-mono font-semibold uppercase tracking-[0.18em] ${compact ? "text-[0.65rem] sm:text-xs" : "text-xs sm:text-sm"}`}
        style={{ color: "var(--club-primary)" }}
      >
        {title}
      </p>

      <div className={`club-stats-grid ${compact ? "club-stats-grid-compact" : ""}`}>
        {clubStats.map((stat) => (
          <article
            key={stat.label}
            className={`club-card club-stat-cell flex flex-col justify-center border-[var(--club-primary)] ${compact ? "club-stat-card-compact gap-1" : "gap-2"}${"hint" in stat ? " cursor-help" : ""}`}
            title={"hint" in stat ? stat.hint : undefined}
          >
            <p
              className={`club-stat-value font-mono font-bold leading-none ${compact ? "text-xl sm:text-2xl lg:text-3xl" : "text-2xl sm:text-3xl"}`}
              style={{ color: "var(--club-primary)" }}
            >
              {stat.value}
            </p>
            <p
              className={`club-stat-label font-mono font-semibold uppercase leading-tight tracking-[0.08em] ${compact ? "text-[0.55rem] sm:text-[0.65rem]" : "text-[0.6rem] sm:text-xs"}${"hint" in stat ? " underline decoration-dotted underline-offset-2" : ""}`}
              style={{
                color: "var(--club-page-fg)",
                textDecorationColor: "var(--club-primary)",
              }}
            >
              {stat.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
