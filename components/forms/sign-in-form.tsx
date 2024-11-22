import { Button, buttonVariants } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/cn";

export const SignInForm: React.FC<{}> = ({}) => {
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
			<div className="grid gap-2">
				<Label className="sr-only">Password</Label>
				<Input
					type="password"
					placeholder="Password"
					className={cn("text-base")}
				/>
				<div className="flex justify-end">
					<Link
						href={"/forgot-password"}
						className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
					>
						Forgot password?
					</Link>
				</div>
			</div>
			<Button
				type="submit"
				className="w-full"
			>
				Sign in
			</Button>
		</form>
	);
};
