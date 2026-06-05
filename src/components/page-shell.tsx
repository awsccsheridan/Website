import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <div className={`club-grid-bg relative min-h-full ${className}`}>
      <div className="club-grid-decorations" aria-hidden>
        <div className="club-grid-block club-grid-block-2 club-deco-tl" />
        <div className="club-grid-block club-grid-block-3 club-deco-br-main" />
        <div className="club-grid-block club-grid-block-2 club-deco-br-step" />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
