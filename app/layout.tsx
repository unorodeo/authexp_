import "./globals.css";

import { geistMono, geistSans } from "@/lib/fonts";

import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
	title: {
		template: "%s | Auth.js Exp_",
		default: "Authexp | Auth.js Exp_"
	},
	description: "Authentication experiment with Auth.js",
};

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
					"antialiased font-geist-sans",
					geistSans.variable,
					geistMono.variable
				)}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}

