import type { Metadata } from "next";
import { InfoCard } from "@/components/info-card";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { pastEvents, upcomingEvents } from "@/lib/events";
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

        {upcomingEvents.length > 0 ? (
          <section className="space-y-6">
            <h2
              className="font-mono text-xl font-bold uppercase tracking-[0.1em] sm:text-2xl"
              style={{ color: "var(--club-page-fg)" }}
            >
              Upcoming
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {upcomingEvents.map((event) => (
                <InfoCard key={event.title} {...event} />
              ))}
            </div>
          </section>
        ) : null}

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
