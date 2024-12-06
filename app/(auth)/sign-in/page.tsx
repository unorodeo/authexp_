import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { HR } from "@/components/ui/hr";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { OAuth } from "@/components/oauth";
import PasswordInput from "@/components/password";
import { cn } from "@/utils/cn";
import { focusRing } from "@/utils/focuses";

export default function SignIn() {
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle>Sign in to Account</CardTitle>
          <CardDescription>Enter credentials to gain access</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 md:w-96">
          <form
            action="#"
            className="grid gap-4"
          >
            <div className="grid gap-2">
              <Label className="sr-only">email address</Label>
              <Input
                type="email"
                placeholder="Email address"
                autoComplete="email"
              />
            </div>
            <div className="grid gap-2">
              <Label className="sr-only">password</Label>
              <PasswordInput autoComplete="current-password" />
              <div className="flex justify-end">
                <Link
                  href={"/forgot-password"}
                  className={cn(
                    "text-sm font-medium p-1 text-muted-foreground hover:text-foreground rounded-lg underline underline-offset-2",
                    focusRing
                  )}
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <Button type="submit">Sign in</Button>
            <div className="flex justify-center">
              <Link
                href={"/sign-up"}
                className={cn(
                  "text-sm font-medium p-1 text-muted-foreground hover:text-foreground rounded-lg underline underline-offset-2",
                  focusRing
                )}
              >
                Don&apos;t have an account? Create
              </Link>
            </div>
          </form>
          <HR>or continue with</HR>
          <OAuth />
        </CardContent>
      </Card>
    </section>
  );
}
