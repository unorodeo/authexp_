import "@/styles/globals.css";

import { geistMono, geistSans, inter } from "@/utils/fonts";

import type { Metadata } from "next";
import { Providers } from "@/components/providers/providers";
import { cn } from "@/utils/cn";
import { defineMetadata } from "@/utils/metadata";

export const metadata: Metadata = defineMetadata({
  title: {
    template: "%s | Noauth",
    default: "Noauth | A simple experimentation of Auth.js",
  },
  description: "A simple experimentation of Auth.js",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={cn(
          "antialiased",
          geistSans.variable,
          geistMono.variable,
          inter.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

