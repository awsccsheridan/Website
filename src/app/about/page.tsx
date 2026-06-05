import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { StatsSection } from "@/components/stats-section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} at ${siteConfig.college}.`,
};

const values = [
  {
    title: "Learn by Building",
    description:
      "We focus on hands-on cloud projects so students gain practical AWS experience, not just theory.",
  },
  {
    title: "Community First",
    description:
      "Students connect through workshops, events, and peer support to grow together in tech.",
  },
  {
    title: "Career Ready",
    description:
      "Members explore certifications, portfolios, and industry skills that prepare them for cloud roles.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <div className="club-page space-y-12">
        <SectionHeading
          eyebrow="About Us"
          title={`Who we are at ${siteConfig.college}`}
          description={siteConfig.description}
        />

        <StatsSection title="Our impact" />

        <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="club-card space-y-4">
            <h2
              className="font-mono text-2xl font-bold"
              style={{ color: "var(--club-page-fg)" }}
            >
              Our Mission
            </h2>
            <p className="leading-relaxed" style={{ color: "var(--club-muted-text)" }}>
              The AWS Student Builder Group empowers Sheridan College students to explore
              cloud computing through workshops, collaborative projects, and AWS community
              events. We create an inclusive space where beginners and experienced builders
              can learn, experiment, and grow.
            </p>
          </div>

          <div className="club-card space-y-4">
            <h2
              className="font-mono text-2xl font-bold"
              style={{ color: "var(--club-page-fg)" }}
            >
              What We Do
            </h2>
            <ul className="space-y-3 text-sm leading-relaxed sm:text-base" style={{ color: "var(--club-muted-text)" }}>
              <li>Host AWS-focused workshops and study sessions</li>
              <li>Organize club events and Student Community Day activities</li>
              <li>Support certification prep and project showcases</li>
              <li>Connect members with peers, mentors, and industry opportunities</li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2
            className="font-mono text-2xl font-bold"
            style={{ color: "var(--club-page-fg)" }}
          >
            Our Values
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="club-card">
                <h3
                  className="mb-3 font-mono text-lg font-bold"
                  style={{ color: "var(--club-primary)" }}
                >
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--club-muted-text)" }}>
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
