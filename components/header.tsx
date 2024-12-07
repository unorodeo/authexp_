import Link from "next/link";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { SignOut } from "@/components/sign-out.client";
import { ThemeBtn } from "@/components/theme";
import { cn } from "@/utils/cn";
import { focusRing } from "@/utils/focuses";

export const Header: React.FC = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-50 bg-background">
      <nav className="flex items-center justify-between h-12 px-4">
        <Link
          href="/studio"
          className={cn(
            "flex-none text-2xl font-semibold rounded-lg p-1",
            focusRing
          )}
          aria-label="Brand"
        >
          Noauth<span className="font-light"> | Studio</span>
        </Link>

        <div className="flex flex-wrap items-center gap-x-2">
          <ThemeBtn />
          <Separator
            orientation="vertical"
            className="w-1 h-6 rounded"
          />
          <SignOut />
        </div>
      </nav>
    </header>
  );
};
