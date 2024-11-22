import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { ForgotPasswordForm } from "@/components/forms/forgot-password-form";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/focuses";

export default function ForgotPassword() {
	return (
		<Card className="border-none shadow-none">
			<CardHeader>
				<CardTitle>Oh no! Forgot your password?</CardTitle>
				<CardDescription>
					Enter credentials to get instructions.
				</CardDescription>
			</CardHeader>
			<CardContent className="md:min-w-72">
				<ForgotPasswordForm />
				<p className="mt-4 text-center small muted">
					Remembered password?{" "}
					<Link
						href={"/sign-in"}
						className={cn(
							"hover:text-blue-500 rounded text-foreground",
							focusRing
						)}
					>
						Sign in
					</Link>
				</p>
			</CardContent>
		</Card>
	);
}
