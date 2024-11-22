"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { cn } from "@/lib/cn";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	forgotPasswordSchema,
	type ForgotPasswordSchema,
} from "@/validations/auth/validate-sign-in";

export const ForgotPasswordForm: React.FC = () => {
	const form = useForm<ForgotPasswordSchema>({
		resolver: zodResolver(forgotPasswordSchema),
		defaultValues: {
			email: "",
		},
	});

	function onSubmit(values: ForgotPasswordSchema) {
		// TODO: POST data to login server action
		console.log(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
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
				<Button
					type="submit"
					className="w-full"
				>
					Get instructions &mdash; Email
				</Button>
			</form>
		</Form>
	);
};
