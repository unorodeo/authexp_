"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { cn } from "@/lib/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	signUpSchema,
	type SignUpSchema,
} from "@/validations/auth/validate-sign-up";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

export const SignUpForm: React.FC = () => {
	const form = useForm<SignUpSchema>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirm: "",
		},
	});

	function onSubmit(values: SignUpSchema) {
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
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="sr-only">Name</FormLabel>
							<FormControl>
								<Input
									type="text"
									placeholder="Display name"
									className={cn("text-base")}
									{...field}
								/>
							</FormControl>
							<FormMessage />
							<FormDescription>
								This is your public display name.
							</FormDescription>
						</FormItem>
					)}
				/>
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
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confirm"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="sr-only">Confirm password</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="Confirm password"
									className={cn("text-base")}
									autoComplete="new-password"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					className="w-full"
				>
					Create account
				</Button>
				<div className="text-center pt-2">
					<p className="muted">
						By creating an account, you agree to our{" "}
						<span className="font-medium">Terms</span>,{" "}
						<span className="font-medium">Privacy</span> and{" "}
						<span className="font-medium">GAP</span>.
					</p>
				</div>
			</form>
		</Form>
	);
};
