import React from "react";
import { SessionProvider } from "next-auth/react";
import { TailwindIndicator } from "@/components/ui/tailwindcss-indicator";
import { ThemeProvider } from "@/components/providers/theme";
import { Toaster } from "@/components/ui/sonner";

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <SessionProvider>
        {children}
        <Toaster
          className="font-mono"
          richColors
        />
        <TailwindIndicator />
      </SessionProvider>
    </ThemeProvider>
  );
};
