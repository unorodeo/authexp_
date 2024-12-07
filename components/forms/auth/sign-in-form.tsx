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
import { signInAction } from "@/actions/auth/sign-in-action";
import { signInSchema } from "@/lib/schemas/auth";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const SignInForm: React.FC = () => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    const res = await signInAction(values);
    if (res?.status === "error") {
      toast.error(res.message);
    }

    if (res?.status === "success") {
      toast.info(res.message);
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
                  autoComplete="current-password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
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
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2Icon className="animate-spin md:text-muted-foreground" />
              signing you in
            </>
          ) : (
            <>Sign in</>
          )}
        </Button>
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
    </Form>
  );
};
