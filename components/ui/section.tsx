import React, { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

export const Section: React.FC<
	{ bleed?: boolean | undefined } & ComponentPropsWithoutRef<"section">
> = ({ children, className, bleed = false, ...props }) => {
	return (
		<section
			className={cn(
				"max-w-7xl mx-auto px-4 py-12 md:border-x-2 border-dashed",
				{
					"max-w-full border-none": bleed,
				},
				className
			)}
			{...props}
		>
			{children}
		</section>
	);
};
