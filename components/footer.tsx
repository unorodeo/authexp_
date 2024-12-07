import Link from "next/link";
import React from "react";
import { cn } from "@/utils/cn";
import { focusRing } from "@/utils/focuses";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-muted/40">
      <nav className="flex flex-row items-center justify-between px-4 py-6 mx-auto max-w-7xl">
        <div>
          <Link
            href="/"
            className={cn(
              "flex-none text-2xl font-bold rounded-lg p-1 ps-0 hover:text-foreground/60",
              focusRing
            )}
            aria-label="Brand"
          >
            Noauth
          </Link>
          <p className="small muted [&:not(:first-child)]:mt-2">Experimentation with Auth.js</p>
        </div>
      </nav>
    </footer>
  );
};
