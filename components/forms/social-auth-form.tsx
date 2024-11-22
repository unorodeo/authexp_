import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import React from "react";

export const SocialAuthForm: React.FC<{}> = ({}) => {
	return (
		<div className="my-4">
			<div className="flex items-center py-3 text-xs uppercase text-muted-foreground before:flex-1 before:border-t before:border-muted-foreground/60 before:me-6 after:flex-1 after:border-t after:border-muted-foreground/60 after:ms-6">
				Or
			</div>
			<Button
				type="button"
				variant={"outline"}
				className="w-full"
			>
				<Icons.GoogleIcon className="size-[1.2rem]" />
				Continue with Google
			</Button>
		</div>
	);
};
