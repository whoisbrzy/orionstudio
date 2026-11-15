import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteNav } from "@/components/site";

export const metadata: Metadata = {
  title: {
    default: "Orion Studio — Creative direction & digital experiences",
    template: "%s — Orion Studio",
  },
  description:
    "Orion Studio brings thoughtful identities and digital experiences to life.",
  metadataBase: new URL("https://orionstudio-pink.vercel.app"),
  openGraph: {
    title: "Orion Studio",
    description: "Thoughtful identities. Considered digital experiences.",
    siteName: "Orion Studio",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ebe8fd",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="page-frame" aria-hidden="true" />
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
