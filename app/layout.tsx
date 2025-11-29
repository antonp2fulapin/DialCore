import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dialcore.com"),
  title: {
    default: "DialCore | Next-Generation VoIP",
    template: "%s | DialCore",
  },
  description:
    "DialCore delivers modern VoIP, SIP trunks, and AI-powered call automation for global teams and call centers.",
  applicationName: "DialCore",
  keywords: [
    "VoIP platform",
    "SIP trunking",
    "WebRTC",
    "call center software",
    "AI voice automation",
    "global phone numbers",
  ],
  alternates: {
    canonical: "/",
    languages: { "en-US": "/" },
  },
  authors: [{ name: "DialCore" }],
  creator: "DialCore",
  publisher: "DialCore",
  formatDetection: { telephone: true, address: true, email: true },
  robots: {
    index: true,
    follow: true,
  },
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
  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} bg-background text-foreground`}>{children}</body>
    </html>
  );
}
