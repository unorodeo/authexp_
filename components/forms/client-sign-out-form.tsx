"use client";

import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import React from "react";
import { signOut } from "next-auth/react";

export const ClientSignOutForm: React.FC = () => {
	return (
		<Button
			type="button"
			variant={"secondary"}
			size={'sm'}
			onClick={() => signOut()}
		>
			<LogOutIcon className="size-4 text-muted-foreground" />
			Sign out
		</Button>
	);
};
