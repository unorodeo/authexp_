"use client";

import { Button, buttonVariants } from "@/components/ui/button";

import { Brand } from "@/components/ui/brand";
import Link from "next/link";
import {
	ComponentIcon,
	LogInIcon,
	type LucideIcon,
	MenuIcon,
	UserRoundPlusIcon,
	UtilityPoleIcon,
} from "lucide-react";
import React from "react";
import { ThemeBtn } from "@/components/theme-btn";
import { cn } from "@/lib/cn";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { Separator } from "@/components/ui/separator";

type NavItem = {
	href: string;
	label: string;
	icon: LucideIcon;
};

const NAVS: NavItem[] = [
	{
		href: "/dashboard",
		label: "Dashboard",
		icon: UserRoundPlusIcon,
	},
	{
		href: "/about",
		label: "About",
		icon: UtilityPoleIcon,
	},
	{
		href: "/colophon",
		label: "Colophon",
		icon: ComponentIcon,
	},
];

export const Header: React.FC<{}> = ({}) => {
	const match = useIsMobile();

	return (
		<header className="sticky inset-x-0 top-0 border-b bg-background">
			<nav className="flex items-center justify-between px-4 mx-auto max-w-7xl h-14">
				<Brand />

				{match ? (
					<Button
						type="button"
						variant={"secondary"}
						size={"icon"}
					>
						<MenuIcon />
						<span className="sr-only">Toggle menu</span>
					</Button>
				) : (
					<div className="flex items-center gap-4">
						{NAVS.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									buttonVariants({ variant: "ghost", size: "sm" })
								)}
							>
								<item.icon className="size-4 text-muted-foreground" />
								{item.label}
							</Link>
						))}
						<ThemeBtn />
						<Separator
							orientation="vertical"
							className="h-8"
						/>
						<Link
							href={"/sign-in"}
							className={cn(
								buttonVariants({ variant: "secondary", size: "sm" })
							)}
						>
							<LogInIcon className="size-4 text-muted-foreground" />
							Sign in
						</Link>
					</div>
				)}
			</nav>
		</header>
	);
};
