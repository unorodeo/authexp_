import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import { SignUpForm } from "@/components/forms/sign-up-form";
import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/focuses";

export default function SignUp() {
	return (
		<Card className="border-none shadow-none">
			<CardHeader>
				<CardTitle>Create an Account</CardTitle>
				<CardDescription>Enter credentials to get started.</CardDescription>
			</CardHeader>
			<CardContent className="md:max-w-72">
				<SignUpForm />
				<p className="mt-4 text-center small muted">
					Already have an account?{" "}
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
