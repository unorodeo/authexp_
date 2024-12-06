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

export default function SignUp() {
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle>Create and Account</CardTitle>
          <CardDescription>Enter credentials to get started</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 md:w-96">
          <form
            action="#"
            className="grid gap-4"
          >
            <div className="grid gap-2">
              <Label className="sr-only">full name</Label>
              <Input
                type="text"
                placeholder="Full name"
                autoComplete="off"
              />
            </div>
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
              <PasswordInput autoComplete="off" />
            </div>
            <div className="grid gap-2">
              <Label className="sr-only">confirm password</Label>
              <PasswordInput autoComplete="off" placeholder="Confirm password" />
            </div>
            <p className="small muted">By creating an account, you agree to our terms and privacy.</p>
            <Button type="submit">Create account</Button>
            <div className="flex justify-center">
              <Link
                href={"/sign-in"}
                className={cn(
                  "text-sm font-medium p-1 text-muted-foreground hover:text-foreground rounded-lg underline underline-offset-2",
                  focusRing
                )}
              >
                Have an account? Sign in
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
