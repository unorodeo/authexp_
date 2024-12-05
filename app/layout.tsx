import "@/styles/globals.css";

import { geistMono, geistSans, inter } from "@/utils/fonts";

import type { Metadata } from "next";
import { cn } from "@/utils/cn";
import { defineMetadata } from "@/utils/metadata";

export const metadata: Metadata = defineMetadata({
  title: {
    template: "%s | Noauth, auth?",
    default: "Noauth, what is auth?",
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
          "dark antialiased",
          geistSans.variable,
          geistMono.variable,
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}

