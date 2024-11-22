import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { cn } from "@/lib/cn";

export const ForgotPasswordForm: React.FC<{}> = ({}) => {
	return (
		<form className="space-y-4">
			<div className="grid gap-2">
				<Label className="sr-only">Email address</Label>
				<Input
					type="email"
					placeholder="Email address"
					className={cn("text-base")}
				/>
			</div>
			<Button
				type="submit"
				className="w-full"
			>
				Get instructions &mdash; Email
			</Button>
		</form>
	);
};
