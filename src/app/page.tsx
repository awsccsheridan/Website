import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { StatsSection } from "@/components/stats-section";
import { siteConfig, socialLinks } from "@/lib/site";

export default function Home() {
  return (
    <PageShell>
      <div className="club-page">
        <section className="club-hero">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Image
              src="/logo/svg/sbg_icon_blue.svg"
              alt={`${siteConfig.name} logo`}
              width={220}
              height={220}
              className="h-auto w-[4.5rem] sm:w-24"
              priority
            />
            <span className="club-tag">{siteConfig.college}</span>
          </div>

          <div className="mt-4 space-y-2 sm:mt-5 sm:space-y-3">
            <h1
              className="max-w-4xl font-mono text-[1.65rem] leading-tight tracking-tight sm:text-4xl lg:text-5xl"
              style={{ color: "var(--club-page-fg)" }}
            >
              <span className="sm:hidden">{siteConfig.shortName}</span>
              <span className="hidden sm:inline">{siteConfig.name}</span>
            </h1>
            <p
              className="max-w-2xl text-sm leading-relaxed sm:text-lg"
              style={{ color: "var(--club-muted-text)" }}
            >
              {siteConfig.description}
            </p>
          </div>

          <div className="club-hero-cta mt-5 sm:mt-6">
            <Link href="/about" className="club-cta">
              About Us
            </Link>
            <Link href="/events" className="club-cta club-cta-outline">
              View Events
            </Link>
          </div>

          <StatsSection compact className="club-hero-stats" />
        </section>

        <section className="mt-10 sm:mt-12">
          <div
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm sm:gap-7 sm:text-base"
            style={{ color: "var(--club-muted-text)" }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.12em]">Follow us</span>
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono font-medium hover:opacity-100"
                style={{ color: "var(--club-primary)", opacity: 0.9 }}
              >
                {label}
              </a>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
