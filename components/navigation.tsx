import { HeartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { ThemeBtn } from "@/components/theme";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { focusRing } from "@/utils/focuses";

export const Navigation: React.FC = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-50 bg-background">
      <nav className="flex items-center justify-between h-12 px-3 mx-auto max-w-7xl">
        <Link
          href="/"
          className={cn(
            "flex-none text-2xl font-bold rounded-lg p-1 hover:text-foreground/60",
            focusRing
          )}
          aria-label="Brand"
        >
          Noauth
        </Link>

        <div className="flex flex-wrap items-center gap-x-2">
          <Link
            href="#"
            className={cn(buttonVariants({ variant: "plain", size: "sm", className: "group" }))}
          >
            <HeartIcon className="fill-muted-foreground text-muted-foreground group-hover:text-rose-500 group-hover:fill-rose-500" />
            Buy me a coffee
          </Link>
          <Link
            href="/sign-in"
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
          >
            Sign in
          </Link>
          <Link
            href="/sign-up"
            className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}
          >
            Get started
          </Link>
          <Separator
            orientation="vertical"
            className="w-1 h-6 rounded-md"
          />
          <ThemeBtn />
        </div>
      </nav>
    </header>
  );
};
