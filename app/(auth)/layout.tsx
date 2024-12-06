import { ChevronLeftCircleIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { ThemeBtn } from "@/components/theme";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/utils/cn";

interface Props {
  children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <main className="grid min-h-screen p-1.5 bg-muted dark:bg-muted/60 place-items-center">
      <section className="relative border-2 rounded-lg dark:border-0 size-full bg-background">
        <div className="absolute top-4 start-4">
          <Link
            href={"/"}
            className={cn(buttonVariants({ variant: "plain", size: "sm" }))}
          >
            <ChevronLeftCircleIcon />
            Back to home
          </Link>
        </div>
        {children}
        <div className="absolute top-4 end-4">
          <div className="flex items-center gap-4">
            <Link
              href={"/"}
              className={cn(buttonVariants({ variant: "plain", size: "sm" }))}
            >
              Terms
            </Link>
            <Link
              href={"/"}
              className={cn(buttonVariants({ variant: "plain", size: "sm" }))}
            >
              Privacy
            </Link>
            <ThemeBtn />
          </div>
        </div>
      </section>
    </main>
  );
}
