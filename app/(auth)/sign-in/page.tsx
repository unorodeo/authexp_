import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { HR } from "@/components/ui/hr";
import { OAuth } from "@/components/oauth";
import { SignInForm } from "@/components/forms/auth/sign-in-form";

export default function SignIn() {
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle>Sign in to Account</CardTitle>
          <CardDescription>Enter credentials to gain access</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 md:w-96">
          <SignInForm />
          <HR>or continue with</HR>
          <OAuth />
        </CardContent>
      </Card>
    </section>
  );
}
