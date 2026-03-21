"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/* ─── Animated grid canvas ──────────────────────────────────────────────── */
function GridCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      const { width: W, height: H } = canvas;
      ctx.clearRect(0, 0, W, H);

      const COLS = 18;
      const cellW = W / COLS;
      const ROWS = Math.ceil(H / cellW);

      ctx.lineWidth = 0.5;

      for (let c = 0; c <= COLS; c++) {
        for (let r = 0; r <= ROWS; r++) {
          const x = c * cellW;
          const y = r * cellW;
          const wave = Math.sin(c * 0.35 + t) * Math.cos(r * 0.35 + t * 0.7);
          const alpha = 0.04 + 0.06 * ((wave + 1) / 2);

          ctx.strokeStyle = `rgba(100,180,255,${alpha})`;
          if (c < COLS) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + cellW, y);
            ctx.stroke();
          }
          if (r < ROWS) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + cellW);
            ctx.stroke();
          }

          if (Math.abs(wave) > 0.82) {
            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(130,200,255,${alpha * 3})`;
            ctx.fill();
          }
        }
      }

      t += 0.008;
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main
      className="relative flex h-screen w-full flex-col items-start justify-center overflow-hidden px-10 sm:px-20"
      style={{ background: "var(--club-page-bg)", color: "var(--club-page-fg)" }}
    >
      <GridCanvas />

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 60% at 40% 50%, color-mix(in srgb, var(--club-primary) 16%, transparent), transparent 70%)",
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-xl flex-col gap-6">

        {/* Logo + badge */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo/transparent-blue.png"
            alt="AWS Cloud Club logo"
            width={220}
            height={220}
            className="h-auto w-24 m:w-24"
            priority
          />
          <span
            className="rounded-full border px-3 py-0.5 text-xs font-semibold uppercase tracking-widest"
            style={{
              borderColor: "color-mix(in srgb, var(--club-secondary) 40%, transparent)",
              color: "var(--club-secondary)",
              background: "color-mix(in srgb, var(--club-secondary) 8%, transparent)",
            }}
          >
            AWS Cloud Club
          </span>
        </div>

        {/* Headline */}
        <div className="space-y-2">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--club-secondary)" }}
          >
            Upcoming Launch
          </p>
          <h1
            className="font-heading text-5xl leading-tight tracking-tight sm:text-6xl"
            style={{ color: "var(--club-page-fg)" }}
          >
            Our website is
            <br />
            <span
              style={{
                background: "linear-gradient(110deg, var(--club-secondary), var(--club-accent))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              on its way.
            </span>
          </h1>
        </div>

        {/* Body */}
        <p
          className="max-w-sm text-sm leading-relaxed"
          style={{ color: "var(--club-muted-text)" }}
        >
          We're putting together our event pages, project showcases, and member
          portal. Check back soon — it won't be long.
        </p>

        {/* Divider */}
        <div
          className="h-px w-24"
          style={{
            background:
              "linear-gradient(90deg, color-mix(in srgb, var(--club-secondary) 50%, transparent), transparent)",
          }}
        />

        {/* Social links */}
        <div className="flex items-center gap-4 text-xs" style={{ color: "var(--club-muted-text)" }}>
          <span>Follow us</span>
          {[
            { label: "Discord", href: "https://discord.com/invite/TfzbXUCp3y" },
            { label: "LinkedIn", href: "https://www.linkedin.com/company/aws-cloud-club-sc" },
            { label: "Instagram", href: "https://www.instagram.com/awsclub.sheridan" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium transition-opacity hover:opacity-100"
              style={{ color: "var(--club-accent)", opacity: 0.75 }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Pulse dots — bottom right */}
      <div className="absolute bottom-8 right-8 flex items-center gap-1.5" aria-hidden>
        {(
          [
            ["var(--club-secondary)", "1.1s"],
            ["var(--club-accent)", "1.3s"],
            ["var(--club-primary)", "1.5s"],
          ] as const
        ).map(([color, dur], i) => (
          <span
            key={i}
            className="rounded-full"
            style={{
              width: 7,
              height: 7,
              background: color,
              animation: `pulse ${dur} ease-in-out infinite`,
            }}
          />
        ))}
      </div>
    </main>
  );
}