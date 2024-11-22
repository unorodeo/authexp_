import { Section } from "@/components/ui/section";
import { UpdateEmailForm } from "@/components/forms/update-email-form";
import { UpdateNameForm } from "@/components/forms/update-name-form";
import { UpdatePasswordForm } from "@/components/forms/update-password-form";
import { auth } from "@/authentication/auth";
import { redirect } from "next/navigation";

export default async function Profile() {
	const session = await auth();

	if (!session) {
		redirect("/sign-in");
	}

	return (
		<>
			<Section>
				<h3>My profile</h3>
				<p>Everything about you in one place.</p>
			</Section>
			<Section className="space-y-4">
				<UpdateNameForm />
				<UpdateEmailForm />
				<UpdatePasswordForm />
			</Section>
		</>
	);
}
