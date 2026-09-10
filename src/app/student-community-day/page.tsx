import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { studentCommunityDay } from "@/lib/events";
import { siteConfig, socialLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: studentCommunityDay.shortTitle,
  description: studentCommunityDay.description,
};

export default function StudentCommunityDayPage() {
  return (
    <PageShell>
      <div className="club-page space-y-12">
        <SectionHeading
          eyebrow={studentCommunityDay.shortTitle}
          title={studentCommunityDay.title}
          description={studentCommunityDay.tagline}
        />

        <section
          className="club-card space-y-3"
          style={{ borderColor: "var(--club-primary)" }}
        >
          <p
            className="font-mono text-xs font-semibold uppercase tracking-[0.14em]"
            style={{ color: "var(--club-primary)" }}
          >
            Space is limited
          </p>
          <p className="text-sm leading-relaxed sm:text-base" style={{ color: "var(--club-muted-text)" }}>
            You must RSVP and apply before{" "}
            <strong style={{ color: "var(--club-page-fg)" }}>
              {studentCommunityDay.rsvpDeadline}
            </strong>{" "}
            to secure your spot. Registration is subject to host approval.
          </p>
          <a
            href={studentCommunityDay.rsvpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="club-cta mt-1 w-fit"
          >
            {studentCommunityDay.rsvpLabel}
          </a>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="club-card space-y-4">
            <h2
              className="font-mono text-2xl font-bold"
              style={{ color: "var(--club-page-fg)" }}
            >
              Event Overview
            </h2>
            {studentCommunityDay.overview.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="leading-relaxed"
                style={{ color: "var(--club-muted-text)" }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="club-card space-y-4">
            <p
              className="font-mono text-xs font-semibold uppercase tracking-[0.14em]"
              style={{ color: "var(--club-primary)" }}
            >
              Details
            </p>
            <dl className="space-y-3 text-sm sm:text-base">
              <div>
                <dt
                  className="font-mono text-xs uppercase tracking-[0.1em]"
                  style={{ color: "var(--club-primary)" }}
                >
                  Date
                </dt>
                <dd style={{ color: "var(--club-muted-text)" }}>{studentCommunityDay.date}</dd>
              </div>
              <div>
                <dt
                  className="font-mono text-xs uppercase tracking-[0.1em]"
                  style={{ color: "var(--club-primary)" }}
                >
                  Time
                </dt>
                <dd style={{ color: "var(--club-muted-text)" }}>{studentCommunityDay.time}</dd>
              </div>
              <div>
                <dt
                  className="font-mono text-xs uppercase tracking-[0.1em]"
                  style={{ color: "var(--club-primary)" }}
                >
                  Location
                </dt>
                <dd style={{ color: "var(--club-muted-text)" }}>
                  {studentCommunityDay.location}
                  <br />
                  <a
                    href={studentCommunityDay.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--club-primary)]"
                  >
                    {studentCommunityDay.address}
                  </a>
                </dd>
              </div>
              <div>
                <dt
                  className="font-mono text-xs uppercase tracking-[0.1em]"
                  style={{ color: "var(--club-primary)" }}
                >
                  Hosted by
                </dt>
                <dd style={{ color: "var(--club-muted-text)" }}>{siteConfig.name}</dd>
              </div>
              <div>
                <dt
                  className="font-mono text-xs uppercase tracking-[0.1em]"
                  style={{ color: "var(--club-primary)" }}
                >
                  RSVP deadline
                </dt>
                <dd style={{ color: "var(--club-muted-text)" }}>
                  {studentCommunityDay.rsvpDeadline}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="space-y-6">
          <h2
            className="font-mono text-2xl font-bold"
            style={{ color: "var(--club-page-fg)" }}
          >
            What to Expect
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {studentCommunityDay.highlights.map((item) => (
              <article key={item.title} className="club-card">
                <h3
                  className="mb-2 font-mono text-lg font-bold"
                  style={{ color: "var(--club-primary)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--club-muted-text)" }}>
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="club-card flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "var(--club-primary)" }}
        >
          <div>
            <p
              className="font-mono text-xs font-semibold uppercase tracking-[0.14em]"
              style={{ color: "var(--club-primary)" }}
            >
              RSVP & Updates
            </p>
            <p
              className="mt-2 text-sm leading-relaxed sm:text-base"
              style={{ color: "var(--club-muted-text)" }}
            >
              Apply before the {studentCommunityDay.rsvpDeadline} deadline, or follow
              us for schedule updates and reminders.
            </p>
          </div>
          <div className="club-cta-row sm:flex sm:flex-row sm:flex-wrap sm:gap-3">
            <a
              href={studentCommunityDay.rsvpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="club-cta"
            >
              {studentCommunityDay.rsvpLabel}
            </a>
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="club-cta"
              >
                {label}
              </a>
            ))}
            <Link href="/events" className="club-cta club-cta-outline">
              All Events
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
