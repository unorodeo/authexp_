import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export const UpdateEmailForm: React.FC = () => {
	return (
		<form className="grid max-w-3xl space-y-2">
			<div className="grid items-center grid-cols-1 gap-2 md:grid-cols-2">
				<Label>Email address</Label>
				<Input
					type="email"
					placeholder="Email addresss"
				/>
			</div>
			<div className="flex justify-end">
				<Button type="submit" variant={"secondary"}>Save email</Button>
			</div>
		</form>
	);
};
