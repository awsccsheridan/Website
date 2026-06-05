import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { TeamCard } from "@/components/team-card";
import { siteConfig } from "@/lib/site";
import { teamMembers } from "@/lib/team";

export const metadata: Metadata = {
  title: "Team",
  description: `Meet the team behind ${siteConfig.name}.`,
};

export default function TeamPage() {
  return (
    <PageShell>
      <div className="club-page space-y-10">
        <SectionHeading
          eyebrow="Team"
          title="The people behind the group"
          description="Our student leadership team runs workshops, events, and community programs at Sheridan College."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
