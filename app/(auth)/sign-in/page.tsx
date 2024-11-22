import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import { SignInForm } from "@/components/forms/sign-in-form";
import { SocialAuthForm } from "@/components/forms/social-auth-form";
import { auth } from "@/authentication/auth";
import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/focuses";
import { redirect } from "next/navigation";

export default async function SignIn() {
	const session = await auth();

	if (session) {
		redirect("/dashboard");
	}

	return (
		<Card className="border-none shadow-none">
			<CardHeader>
				<CardTitle>Sign in to Account</CardTitle>
				<CardDescription>Enter credentials to get access.</CardDescription>
			</CardHeader>
			<CardContent className="md:min-w-72">
				<SignInForm />
				<p className="mt-4 text-center small muted">
					Do not have an account?{" "}
					<Link
						href={"/sign-up"}
						className={cn(
							"hover:text-blue-500 rounded text-foreground",
							focusRing
						)}
					>
						Sign up
					</Link>
				</p>
				<SocialAuthForm />
			</CardContent>
		</Card>
	);
}
