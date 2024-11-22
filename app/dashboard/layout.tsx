import { Header } from "@/components/dashboard/header";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
}
