import { Section } from "@/components/ui/section";
import { Statistics } from "@/components/dashboard/statistics";
import { auth } from "@/authentication/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
	const session = await auth();

	if (!session) {
		redirect("/sign-in");
	}

	return (
		<>
			<Section>
				<h3>Welcome back! Acme</h3>
				<p>Thursday 21 November 2024</p>
			</Section>
			<Section>
				<Statistics />
			</Section>
		</>
	);
}
