import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import React from "react";
import { cn } from "@/lib/cn";

export const SignUpForm: React.FC<{}> = ({}) => {
	return (
		<form className="space-y-4">
      <div className="grid gap-2">
        <Label className="sr-only">Email address</Label>
        <Input type="email" placeholder="Email address" className={cn("text-base")}/>
      </div>
      <div className="grid gap-2">
        <Label className="sr-only">Password</Label>
        <Input type="password" placeholder="Password" className={cn("text-base")}/>
      </div>
      <div className="grid gap-2">
        <Label className="sr-only">Confirm password</Label>
        <Input type="password" placeholder="Confirm password" className={cn("text-base")}/>
      </div>
			<Button type="submit" className="w-full">Create account</Button>
		</form>
	);
};
