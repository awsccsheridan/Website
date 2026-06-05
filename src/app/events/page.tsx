import type { Metadata } from "next";
import Link from "next/link";
import { InfoCard } from "@/components/info-card";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { pastEvents } from "@/lib/events";
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

        <Link
          href="/student-community-day"
          className="club-card block border-[var(--club-primary)] hover:opacity-95"
        >
          <p
            className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.14em]"
            style={{ color: "var(--club-primary)" }}
          >
            Upcoming
          </p>
          <h2
            className="font-mono text-2xl font-bold"
            style={{ color: "var(--club-page-fg)" }}
          >
            Student Community Day
          </h2>
          <p
            className="mt-3 max-w-2xl text-sm leading-relaxed sm:text-base"
            style={{ color: "var(--club-muted-text)" }}
          >
            Our flagship student event — learn more about the agenda, speakers, and how to participate.
          </p>
        </Link>

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
