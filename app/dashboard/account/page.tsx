import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export default function Account() {
	return (
		<>
			<Section>
				<h3>Account</h3>
				<p>Everything about your account in one place.</p>
			</Section>
			<Section>
				<div className="space-y-4">
					<h4 className="underline decoration-destructive">
						Delete Account Permanently
					</h4>
					<div className="flex flex-col gap-4 md:flex-row md:items-center">
						<small className="small">
							Danger, this action cannot be undone once completed.
						</small>
						<Button
							type="button"
							variant={"destructive"}
						>
							Delete my account
						</Button>
					</div>
				</div>
			</Section>
		</>
	);
}
