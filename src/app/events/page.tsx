import type { Metadata } from "next";
import Link from "next/link";
import { InfoCard } from "@/components/info-card";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { pastEvents, studentCommunityDay } from "@/lib/events";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description: `Past and upcoming events from ${siteConfig.name}.`,
};

export default function EventsPage() {
  return (
    <PageShell>
      <div className="club-page space-y-10">
        <SectionHeading
          eyebrow="Events"
          title="Club events and community gatherings"
          description="Past events and upcoming programs hosted by the AWS Student Builder Group at Sheridan College."
        />

        <article className="club-card border-[var(--club-primary)]">
          <p
            className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.14em]"
            style={{ color: "var(--club-primary)" }}
          >
            Upcoming
          </p>
          <Link href="/student-community-day" className="hover:opacity-95">
            <h2
              className="font-mono text-2xl font-bold hover:text-[var(--club-primary)]"
              style={{ color: "var(--club-page-fg)" }}
            >
              {studentCommunityDay.title}
            </h2>
          </Link>
          <p
            className="mt-2 font-mono text-xs uppercase tracking-[0.1em]"
            style={{ color: "var(--club-muted-text)" }}
          >
            {studentCommunityDay.schedule}
          </p>
          <p
            className="mt-3 max-w-2xl text-sm leading-relaxed sm:text-base"
            style={{ color: "var(--club-muted-text)" }}
          >
            {studentCommunityDay.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={studentCommunityDay.rsvpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="club-cta"
            >
              {studentCommunityDay.rsvpLabel}
            </a>
            <Link href="/student-community-day" className="club-cta club-cta-outline">
              Event details
            </Link>
          </div>
        </article>

        <section className="space-y-6">
          <h2
            className="font-mono text-xl font-bold uppercase tracking-[0.1em] sm:text-2xl"
            style={{ color: "var(--club-page-fg)" }}
          >
            Past Events
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {pastEvents.map((event) => (
              <InfoCard key={event.title} {...event} />
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
