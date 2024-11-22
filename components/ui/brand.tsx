import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/focuses";

interface Props {
	as?: "link" | "brand" | undefined;
	href?: `/${string}` | undefined;
}

export const Brand: React.FC<Props> = ({ as = "link", href }) => {
	if (as === "link")
		return (
			<Link
				href={href ?? "/"}
				className={cn(
					"inline-flex gap-2 items-center justify-center rounded-md",
					focusRing
				)}
			>
				<Icons.Logo className="h-8 w-7" />
				<span className="text-xl font-semibold tracking-tight">Authexp_</span>
			</Link>
		);

	if (as === "brand")
		return (
			<div className={cn("inline-flex gap-2 items-center justify-start")}>
				<Icons.Logo className="h-8 w-7" />
				<span className="text-xl font-semibold tracking-tight">Authexp_</span>
			</div>
		);

	return null;
};
