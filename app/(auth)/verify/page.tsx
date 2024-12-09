import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { VerificationTokenForm } from "@/components/forms/auth/verification-token-form";

export default function Verify() {
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle>Account verification</CardTitle>
          <CardDescription>
            Enter one-time password code to gain access
          </CardDescription>
        </CardHeader>
        <CardContent>
          <VerificationTokenForm />
        </CardContent>
      </Card>
    </section>
  );
}
