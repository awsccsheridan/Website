"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";

function getNavLabel(link: (typeof navLinks)[number], mobile = false) {
  if (mobile && "shortLabel" in link && link.shortLabel) {
    return link.shortLabel;
  }
  return link.label;
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.matchMedia("(min-width: 640px)").matches) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        borderColor: "var(--club-grid)",
        background: "color-mix(in srgb, var(--club-page-bg) 92%, transparent)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-8 sm:py-4">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Image
            src="/logo/svg/sbg_icon_blue.svg"
            alt={`${siteConfig.name} logo`}
            width={40}
            height={40}
            className="h-8 w-8 shrink-0 sm:h-10 sm:w-10"
            priority
          />
          <span className="truncate font-mono text-[0.65rem] font-bold uppercase tracking-[0.1em] sm:text-sm">
            <span className="sm:hidden">{siteConfig.shortName}</span>
            <span className="hidden sm:inline">{siteConfig.name}</span>
          </span>
        </Link>

        <button
          type="button"
          className="club-menu-btn inline-flex"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
              <path
                d="M4 4L16 16M16 4L4 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
              <path d="M3 5H17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
              <path d="M3 10H17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
              <path d="M3 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
            </svg>
          )}
        </button>

        <nav className="club-desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="club-nav-link"
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {getNavLabel(link)}
            </Link>
          ))}
        </nav>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="club-mobile-nav border-t px-4 py-3"
          style={{ borderColor: "var(--club-grid)" }}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="club-mobile-nav-link"
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {getNavLabel(link, true)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
