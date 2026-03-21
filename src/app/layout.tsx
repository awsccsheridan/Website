import type { Metadata } from "next";
import localFont from "next/font/local";
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
  title: "AWS Cloud Club",
  description: "Official website for AWS Cloud Club.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${amazonEmber.variable} ${amazonDisplay.variable} ${amazonMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
