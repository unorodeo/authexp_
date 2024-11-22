import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";
import { CircleHelpIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export const UpdateNameForm: React.FC = () => {
	return (
		<form className="grid max-w-3xl space-y-2">
			<div className="grid items-center grid-cols-1 gap-2 md:grid-cols-2">
				<Label className="flex items-center">
					Display name
					<Help />
				</Label>
				<Input
					type="text"
					placeholder="Display name"
				/>
			</div>
			<div className="flex justify-end">
				<Button type="submit" variant={"secondary"}>Save</Button>
			</div>
		</form>
	);
};

const Help: React.FC = () => {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger className="ml-2">
					<CircleHelpIcon className="size-4 text-muted-foreground" />
				</TooltipTrigger>
				<TooltipContent>
					<span>This is your public display name</span>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
