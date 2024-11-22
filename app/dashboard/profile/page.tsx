import { Section } from "@/components/ui/section";
import { UpdateEmailForm } from "@/components/forms/update-email-form";
import { UpdateNameForm } from "@/components/forms/update-name-form";
import { UpdatePasswordForm } from "@/components/forms/update-password-form";

export default function Profile() {
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
