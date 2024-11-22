import Link from "next/link";
import { Section } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export default function Home() {
	return (
		<>
			<Section>
				<div className="w-full mt-24 md:text-center">
					<h1>Welcome to my Auth.js Exp_</h1>
					<p className="mt-4 lead">
						Exploring the features of{" "}
						<a
							href="https://authjs.dev/getting-started/installation?framework=Next.js"
							target="_blank"
							rel="noreferrer"
							className={cn("hover:text-blue-500 font-medium")}
						>
							Auth.js ↗
						</a>
						.
					</p>
				</div>
				<div className="flex items-center justify-center mt-6">
					<Link
						href={"/sign-up"}
						className={cn(buttonVariants({ size: "lg" }))}
					>
						Create an account &mdash; Free
					</Link>
				</div>
			</Section>
		</>
	);
}
