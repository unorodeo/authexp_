"use client";

import { ArrowRightIcon, Loader2Icon } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { Button } from "@/components/ui/button";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import React from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { verificationTokenSchema } from "@/lib/schemas/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const VerificationTokenForm: React.FC = () => {
  const form = useForm<z.infer<typeof verificationTokenSchema>>({
    resolver: zodResolver(verificationTokenSchema),
    defaultValues: {
      token: "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  function onSubmit(data: z.infer<typeof verificationTokenSchema>) {
    toast.info(
      <pre className="w-[340px] rounded-md p-4">
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    );
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-4"
      >
        <FormField
          control={form.control}
          name="token"
          render={({ field }) => (
            <FormItem>
              <FormLabel>One-Time Password</FormLabel>
              <FormControl>
                <InputOTP
                  maxLength={6}
                  pattern={REGEXP_ONLY_DIGITS}
                  {...field}
                >
                  <InputOTPGroup className="[&>div]:size-12">
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup className="[&>div]:size-12">
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
                Please enter the one-time password sent to your email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="justify-between"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              Verifying account
              <Loader2Icon className="animate-spin" />
            </>
          ) : (
            <>
              Verify account
              <ArrowRightIcon />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};
