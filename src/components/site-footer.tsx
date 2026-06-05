import Link from "next/link";
import { navLinks, siteConfig, socialLinks } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer>
      <div
        className="border-t px-4 py-8 sm:px-8 sm:py-10"
        style={{ borderColor: "var(--club-grid)" }}
      >
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <p
              className="font-mono text-sm font-bold uppercase tracking-[0.14em]"
              style={{ color: "var(--club-primary)" }}
            >
              {siteConfig.name}
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--club-muted-text)" }}>
              {siteConfig.description}
            </p>
          </div>

          <div className="space-y-3">
            <p
              className="font-mono text-xs font-bold uppercase tracking-[0.14em]"
              style={{ color: "var(--club-page-fg)" }}
            >
              Pages
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:opacity-100"
                    style={{ color: "var(--club-muted-text)" }}
                  >
                    {"shortLabel" in link && link.shortLabel ? (
                      <>
                        <span className="sm:hidden">{link.shortLabel}</span>
                        <span className="hidden sm:inline">{link.label}</span>
                      </>
                    ) : (
                      link.label
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p
              className="font-mono text-xs font-bold uppercase tracking-[0.14em]"
              style={{ color: "var(--club-page-fg)" }}
            >
              Connect
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 sm:flex-col sm:gap-y-2">
              {socialLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm hover:opacity-100"
                    style={{ color: "var(--club-primary)", opacity: 0.9 }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className="flex items-center justify-center px-4 py-3 sm:px-6 sm:py-4"
        style={{ background: "var(--club-badge-bg)" }}
      >
        <p
          className="font-mono text-center text-[0.65rem] font-bold uppercase tracking-[0.1em] sm:text-sm sm:tracking-[0.14em]"
          style={{ color: "var(--club-on-accent)" }}
        >
          <span className="sm:hidden">
            {siteConfig.shortName} at {siteConfig.college}
          </span>
          <span className="hidden sm:inline">
            {siteConfig.name} at {siteConfig.college}
          </span>
        </p>
      </div>
    </footer>
  );
}
