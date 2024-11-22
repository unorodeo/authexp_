import { Header } from "@/components/header";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function AppLayout({ children }: Props) {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
}
