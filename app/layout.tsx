import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "DialCore | Next-Generation VoIP",
  description:
    "DialCore delivers modern VoIP and SIP solutions for global teams, call centers, and AI-powered support.",
  metadataBase: new URL("https://dialcore.com"),
  openGraph: {
    title: "DialCore | Next-Generation VoIP",
    description:
      "VoIP built for professionals. Secure SIP, analytics, AI assistants, and WebRTC calling in one platform.",
    url: "https://dialcore.com",
    siteName: "DialCore",
    images: [
      {
        url:
          "https://images.unsplash.com/photo-1527443224154-d5e7c6f09417?auto=format&fit=crop&w=1600&q=80",
        width: 1200,
        height: 630,
        alt: "DialCore marketing preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DialCore | Next-Generation VoIP",
    description:
      "The VoIP platform for modern teams. Simple provisioning, AI automation, and crystal-clear calling.",
    images: [
      "https://images.unsplash.com/photo-1527443224154-d5e7c6f09417?auto=format&fit=crop&w=1600&q=80",
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-background text-foreground`}>{children}</body>
    </html>
  );
}
