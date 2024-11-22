import { Section } from "@/components/ui/section";
import { Statistics } from "@/components/dashboard/statistics";

export default function Dashboard() {
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
