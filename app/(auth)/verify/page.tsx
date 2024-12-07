import { Card, CardHeader } from "@/components/ui/card";

import { EmailClient } from "./_email";

export default function Verify() {
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <Card className="border-none shadow-none">
        <CardHeader className="md:items-center">
          <h1>Verify Email Address</h1>
          <p className="lead [&:not(:first-child)]:mt-0">
            We&apos;ve sent a verification token to your email at{" "}
            <span className="text-primary">
              <EmailClient />
            </span>
          </p>
        </CardHeader>
      </Card>
    </section>
  );
}
