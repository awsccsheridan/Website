import type { Metadata } from "next";
import { Suspense } from "react";
import { PageShell } from "@/components/page-shell";
import { TurnstileVerify } from "@/components/turnstile-verify";
import { siteConfig } from "@/lib/site";
import { getTurnstileSiteKey, VERIFICATION_TTL_SECONDS } from "@/lib/verification";

export const metadata: Metadata = {
  title: "Verify",
  description: `Human verification for ${siteConfig.name}.`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function VerifyPage() {
  const ttlMinutes = VERIFICATION_TTL_SECONDS / 60;
  const siteKey = getTurnstileSiteKey();

  return (
    <PageShell>
      <div className="club-page flex min-h-[calc(100dvh-10rem)] flex-col justify-center">
        <div className="club-card max-w-xl space-y-5">
          <div className="space-y-2">
            <p
              className="font-mono text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--club-primary)" }}
            >
              Human Verification
            </p>
            <h1
              className="font-mono text-2xl font-bold sm:text-3xl"
              style={{ color: "var(--club-page-fg)" }}
            >
              Confirm you&apos;re human
            </h1>
            <p className="text-sm leading-relaxed" style={{ color: "var(--club-muted-text)" }}>
              Complete the Cloudflare check below to continue to {siteConfig.name}.
              Verification lasts {ttlMinutes} minutes per session.
            </p>
          </div>

          <Suspense
            fallback={
              <p className="text-sm" style={{ color: "var(--club-muted-text)" }}>
                Loading verification...
              </p>
            }
          >
            <TurnstileVerify siteKey={siteKey} />
          </Suspense>
        </div>
      </div>
    </PageShell>
  );
}
