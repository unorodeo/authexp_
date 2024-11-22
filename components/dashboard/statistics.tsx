import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { CheckCircle2Icon } from "lucide-react";
import React from "react";

export const Statistics: React.FC<{}> = ({}) => {
	return (
		<Table className="border">
			<TableCaption>Your account statistics.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Role</TableHead>
					<TableHead>Email address</TableHead>
					<TableHead className="text-right">Status</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell>Basic</TableCell>
					<TableCell>enoabasidream@gmail.com</TableCell>
					<TableCell className="text-right">
						<Badge variant={"secondary"}>
							<CheckCircle2Icon className="fill-muted-foreground text-background size-4" />
							verified
						</Badge>
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
};
