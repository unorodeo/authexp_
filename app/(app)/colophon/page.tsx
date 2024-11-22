import { Section } from "@/components/ui/section";

export default function Colophon() {
	return (
		<>
			<Section>
				<h1>The Colophon</h1>
				<div className="mt-8">
					<span className="italic text-muted-foreground">noun</span>
					<p className="md:ml-8">
						a publisher's emblem or imprint, usually on the title page of a
						book.
					</p>
				</div>
			</Section>
			<Section>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					<div>
						<h2>Technical</h2>
						<div className="grid gap-2 mt-8">
							<div className="grid items-center grid-cols-2">
								<p className="small">Framework</p>
								<p>Next.js</p>
							</div>
							<div className="grid items-center grid-cols-2">
								<p className="small">Depolyment</p>
								<p>Vercel</p>
							</div>
							<div className="grid items-center grid-cols-2">
								<p className="small">Database</p>
								<p>Neon</p>
							</div>
						</div>
					</div>
					<div>
						<h2>Style guide</h2>
						<div className="grid gap-2 mt-8">
							<div className="grid items-center grid-cols-2">
								<p className="small">Font family</p>
								<p>Geist Sans &amp; Geist Mono</p>
							</div>
							<div className="grid items-center grid-cols-2">
								<p className="small">Components</p>
								<p>Shadcn/ui</p>
							</div>
							<div className="grid items-center grid-cols-2">
								<p className="small">Icons</p>
								<p>Lucide icons</p>
							</div>
							<div className="grid items-center grid-cols-2">
								<p className="small">Brand logo</p>
								<p>Untitled ui &mdash; Logos</p>
							</div>
						</div>
					</div>
				</div>
			</Section>
		</>
	);
}
