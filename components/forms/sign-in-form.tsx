"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	signInSchema,
	type SignInSchema,
} from "@/validations/auth/validate-sign-in";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/cn";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const SignInForm: React.FC = () => {
	const form = useForm<SignInSchema>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function onSubmit(values: SignInSchema) {
		console.log(values);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-2"
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="sr-only">Email address</FormLabel>
							<FormControl>
								<Input
									type="email"
									placeholder="Email address"
									className={cn("text-base")}
									autoComplete="email-address"
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
							<FormLabel className="sr-only">Password</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="Password"
									className={cn("text-base")}
									autoComplete="new-password"
									{...field}
								/>
							</FormControl>
							<FormMessage />
							<div className="flex justify-end">
								<Link
									href={"/forgot-password"}
									className={cn(
										buttonVariants({ variant: "ghost", size: "sm" })
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
					className="w-full"
				>
					Sign in
				</Button>
			</form>
		</Form>
	);
};
