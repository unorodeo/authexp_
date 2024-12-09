import type { Metadata } from "next";
import { siteConfig } from "@/site.config";

export const baseUrl =
  process.env.NODE_ENV === "development" || !process.env.VERCEL_URL
    ? new URL("https://localhost:3000")
    : new URL(`https://${process.env.VERCEL_URL}`);

export const defineMetadata = (meta: Metadata): Metadata => ({
  metadataBase: baseUrl,
  ...meta,
  openGraph: {
    title: meta.title ?? undefined,
    description: meta.description ?? undefined,
    url: baseUrl,
    images: "/banner.png",
    siteName: siteConfig.application,
    ...meta.openGraph,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@unorodeo",
    title: meta.title ?? undefined,
    description: meta.description ?? undefined,
    images: "/banner.png",
    ...meta.twitter,
  },
});
