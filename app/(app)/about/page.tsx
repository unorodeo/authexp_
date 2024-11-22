import { Section } from "@/components/ui/section";

export default function About() {
	return (
		<>
			<Section>
				<h1>About Authexp_</h1>
				<div className="mt-6 md:w-1/2">
					<p>
						I made this project to learn about implementing Auth.js in a Next.js
						application. It serves as a basic template for my auth workflows in
						applications I build.
					</p>
					<ul className="mt-8 list-disc list-inside">
						<p>These are the following features included.</p>
						<li>Email/password authentication.</li>
						<li>Google, Facebook and Twitter authentication.</li>
						<li>Email verification.</li>
						<li>Forgot password workflow.</li>
						<li>User data hosted on Neon and Cloudinary.</li>
					</ul>
				</div>
			</Section>
			<Section>
				<h2>Feedback</h2>
				<p className="mt-6">If you have any feedback to me or the project, please reach out.</p>
				<ul className="list-disc list-inside text-muted-foreground">
					<li>
						GitHub &mdash;{" "}
						<a
							href="http://github.com/unorodeo/authexp"
							target="_blank"
							rel="noopener noreferrer"
							className="font-medium text-primary"
						>
							@unorodeo/authexp_
						</a>
					</li>
					<li>
						Work email &mdash;{" "}
						<a
							href="mailto:humanwhodreams@gmail.com"
							className="font-medium text-primary"
						>
							humanwhodreams@gmail.com
						</a>
					</li>
				</ul>
			</Section>
		</>
	);
}
