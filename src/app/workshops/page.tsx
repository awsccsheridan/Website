import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { WorkshopSearch } from "@/components/workshop-search";
import { siteConfig } from "@/lib/site";
import { workshops } from "@/lib/workshops";

export const metadata: Metadata = {
  title: "Workshops",
  description: `AWS workshops hosted by ${siteConfig.name}.`,
};

export default function WorkshopsPage() {
  return (
    <PageShell>
      <div className="club-page space-y-10">
        <SectionHeading
          eyebrow="Workshops"
          title="Hands-on AWS learning sessions"
          description="Practical workshops designed for Sheridan College students at every skill level."
        />

        <WorkshopSearch workshops={workshops} />
      </div>
    </PageShell>
  );
}
