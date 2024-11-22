import React from "react";
import { ThemeProvider } from "@/components/themes";
import { Toaster } from "@/components/ui/sonner";

export const Providers: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="light"
			disableTransitionOnChange
		>
			{children}
			<Toaster />
		</ThemeProvider>
	);
};
