"use client";

import { Brand } from "@/components/ui/brand";
import React from "react";
import {
	CircleUserIcon,
	HomeIcon,
	type LucideIcon,
	ShieldIcon,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { buttonVariants } from "@/components/ui/button";
import { ThemeBtn } from "@/components/theme-btn";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ClientSignOutForm } from "../forms/client-sign-out-form";

type NavItem = {
	href: string;
	label: string;
	icon: LucideIcon;
};

const NAVS: NavItem[] = [
	{
		href: "/dashboard",
		label: "Home",
		icon: HomeIcon,
	},
	{
		href: "/dashboard/profile",
		label: "Profile",
		icon: CircleUserIcon,
	},
	{
		href: "/dashboard/account",
		label: "Account",
		icon: ShieldIcon,
	},
];

export const Header: React.FC = () => {
	const match = useMediaQuery("(max-width: 768px)");
	const pathname = usePathname();

	return (
		<header className="sticky inset-x-0 top-0 border-b bg-background">
			<nav className="flex flex-col items-center px-4 mx-auto max-w-7xl">
				{match ? (
					<div className="flex flex-row items-center justify-between w-full h-14">
						<Brand />
						<div className="flex items-center gap-4 h-14">
							<ThemeBtn />
						</div>
					</div>
				) : (
					<>
						<div className="flex flex-row items-center justify-between w-full h-14">
							<Brand />
							<div className="flex items-center gap-4 h-14">
								<ClientSignOutForm />
								<ThemeBtn />
							</div>
						</div>
						<div className="flex items-center w-full gap-4 h-14">
							{NAVS.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className={cn(
										buttonVariants({
											variant: `${
												pathname === item.href ? "secondary" : "ghost"
											}`,
											size: "sm",
										})
									)}
								>
									<item.icon className="size-4 text-muted-foreground" />
									{item.label}
								</Link>
							))}
						</div>
					</>
				)}
			</nav>
		</header>
	);
};
