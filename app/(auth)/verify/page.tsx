import { Card, CardHeader } from "@/components/ui/card";

import { EmailClient } from "./_email";
import { Suspense } from "react";
import { cn } from "@/utils/cn";

export default function Verify() {
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <Card className="border-none shadow-none">
        <CardHeader className="md:items-center">
          <h1>Verify Email Address</h1>
          <p className="lead [&:not(:first-child)]:mt-0">
            We&apos;ve sent a verification token to your email at{" "}
            <Suspense
              fallback={
                <span className={cn("animate-bounce muted small")}>
                  fetching...
                </span>
              }
            >
              <span className="text-primary">
                <EmailClient />
              </span>
            </Suspense>
          </p>
        </CardHeader>
      </Card>
    </section>
  );
}
