"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Loader2Icon } from "lucide-react";
import { PasswordInput } from "@/components/password-input";
import React from "react";
import { cn } from "@/utils/cn";
import { focusRing } from "@/utils/focuses";
import { signUpAction } from "@/actions/auth/sign-up-action";
import { signUpSchema } from "@/lib/schemas/auth";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const SignUpForm: React.FC = () => {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof signUpSchema>) {
    const res = await signUpAction(values);
    
    if (res?.status === "error") {
      toast.error(res.message);
    }
    if (res?.status === "success") {
      toast.success(res.message);
      form.reset();
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">full name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Full name"
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">email address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email address"
                  autoComplete="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">password</FormLabel>
              <FormControl>
                <PasswordInput
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">confirm password</FormLabel>
              <FormControl>
                <PasswordInput
                  autoComplete="off"
                  placeholder="Confirm password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="small muted">
          By creating an account, you agree to our terms and privacy.
        </p>
        <Button
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2Icon className="animate-spin text-muted-foreground" />
              creating your account
            </>
          ) : (
            <>Create account</>
          )}
        </Button>
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
    </Form>
  );
};
