import type { Metadata } from "next";
import localFont from "next/font/local";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { siteConfig } from "@/lib/site";
import {
  isVerificationEnabled,
  isVerifiedCookie,
  isVerifyPath,
  VERIFICATION_COOKIE,
} from "@/lib/verification";
import "./globals.css";

const amazonEmber = localFont({
  src: [{ path: "../../public/Fonts/AmazonEmber_Bd.ttf", weight: "700" }],
  variable: "--font-amazon-ember",
  display: "swap",
});

const amazonDisplay = localFont({
  src: [
    { path: "../../public/Fonts/AmazonEmberDisplay_Rg.ttf", weight: "400" },
    { path: "../../public/Fonts/AmazonEmberDisplay_RgIt.ttf", weight: "400", style: "italic" },
    { path: "../../public/Fonts/AmazonEmberDisplay_Bd.ttf", weight: "700" },
    { path: "../../public/Fonts/AmazonEmberDisplay_BdIt.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-amazon-display",
  display: "swap",
});

const amazonMono = localFont({
  src: [{ path: "../../public/Fonts/AmazonEmberMono_Bd.ttf", weight: "700" }],
  variable: "--font-amazon-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const cookieStore = await cookies();
  const pathname = headersList.get("x-pathname") ?? "/";
  const onVerifyPage = isVerifyPath(pathname);
  const verified = isVerifiedCookie(cookieStore.get(VERIFICATION_COOKIE)?.value);
  const showSiteChrome = verified || !onVerifyPage;

  if (isVerificationEnabled() && !onVerifyPage && !verified) {
    redirect(`/verify?next=${encodeURIComponent(pathname)}`);
  }

  return (
    <html
      lang="en"
      className={`${amazonEmber.variable} ${amazonDisplay.variable} ${amazonMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {showSiteChrome ? <SiteNav /> : null}
        <main className="flex-1">{children}</main>
        {showSiteChrome ? <SiteFooter /> : null}
      </body>
    </html>
  );
}
