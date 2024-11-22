import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export const UpdatePasswordForm: React.FC<{}> = ({}) => {
	return (
		<form className="grid max-w-3xl space-y-4 md:space-y-2">
			<div className="grid items-center grid-cols-1 gap-2 md:grid-cols-2">
				<Label>New password</Label>
				<Input
					type="password"
					placeholder="New password"
				/>
			</div>
			<div className="grid items-center grid-cols-1 gap-2 md:grid-cols-2">
				<Label>Confirm new password</Label>
				<Input
					type="password"
					placeholder="Confirm new password"
				/>
			</div>
			<div className="flex justify-end">
				<Button type="submit" variant={"secondary"}>Save password</Button>
			</div>
		</form>
	);
};
