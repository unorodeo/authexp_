import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "400 900",
});

export const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "400 900",
});

export const inter = Inter({
  display: "fallback",
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "variable"
});
