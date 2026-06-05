import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig, socialLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Student Community Day",
  description: `Student Community Day hosted by ${siteConfig.name} at ${siteConfig.college}.`,
};

const highlights = [
  {
    title: "Keynote & AWS Talks",
    description: "Sessions on cloud careers, AWS services, and student success stories.",
  },
  {
    title: "Hands-on Labs",
    description: "Guided workshops where students build and deploy projects on AWS.",
  },
  {
    title: "Networking",
    description: "Connect with peers, club leaders, and professionals in the AWS ecosystem.",
  },
  {
    title: "Swag & Prizes",
    description: "Participate in activities, challenges, and giveaways throughout the day.",
  },
];

export default function StudentCommunityDayPage() {
  return (
    <PageShell>
      <div className="club-page space-y-12">
        <SectionHeading
          eyebrow="Student Community Day"
          title="Our flagship student event"
          description="Student Community Day brings Sheridan College students together for a full day of AWS learning, collaboration, and community — designed by students, for students."
        />

        <section className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="club-card space-y-4">
            <h2
              className="font-mono text-2xl font-bold"
              style={{ color: "var(--club-page-fg)" }}
            >
              Event Overview
            </h2>
            <p className="leading-relaxed" style={{ color: "var(--club-muted-text)" }}>
              Student Community Day is the highlight of our club calendar. Whether you are
              brand new to AWS or already building projects in the cloud, this event gives
              you practical skills, inspiration, and connections to grow your tech journey.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--club-muted-text)" }}>
              Date, venue, and registration details will be announced soon. Follow our
              social channels to be the first to know when spots open.
            </p>
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
                <dt className="font-mono text-xs uppercase tracking-[0.1em]" style={{ color: "var(--club-primary)" }}>
                  Date
                </dt>
                <dd style={{ color: "var(--club-muted-text)" }}>To be announced</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.1em]" style={{ color: "var(--club-primary)" }}>
                  Location
                </dt>
                <dd style={{ color: "var(--club-muted-text)" }}>{siteConfig.college}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.1em]" style={{ color: "var(--club-primary)" }}>
                  Registration
                </dt>
                <dd style={{ color: "var(--club-muted-text)" }}>Opening soon</dd>
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
            {highlights.map((item) => (
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
              Stay Updated
            </p>
            <p className="mt-2 text-sm leading-relaxed sm:text-base" style={{ color: "var(--club-muted-text)" }}>
              Follow us for event announcements, registration links, and schedule updates.
            </p>
          </div>
          <div className="club-cta-row sm:flex sm:flex-row sm:flex-wrap sm:gap-3">
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
