type TeamCardProps = {
  name: string;
  title: string;
  role: string;
  bio: string;
  linkedin: string;
};

export function TeamCard({ name, title, role, bio, linkedin }: TeamCardProps) {
  return (
    <article className="club-card flex flex-col gap-4">
      <div
        className="flex h-14 w-14 items-center justify-center font-mono text-lg font-bold"
        style={{
          background: "var(--club-badge-bg)",
          color: "var(--club-on-accent)",
        }}
      >
        {name
          .split(" ")
          .map((part) => part[0])
          .join("")
          .slice(0, 2)}
      </div>
      <div className="space-y-2">
        <h3
          className="font-mono text-lg font-bold"
          style={{ color: "var(--club-page-fg)" }}
        >
          {name}
        </h3>
        <p
          className="font-mono text-xs font-semibold uppercase tracking-[0.12em]"
          style={{ color: "var(--club-primary)" }}
        >
          {title}
        </p>
        <p
          className="font-mono text-[0.65rem] uppercase tracking-[0.1em]"
          style={{ color: "var(--club-muted-text)" }}
        >
          {role}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--club-muted-text)" }}>
          {bio}
        </p>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="club-cta club-cta-outline mt-1 w-fit text-[0.65rem]"
        >
          LinkedIn
        </a>
      </div>
    </article>
  );
}
