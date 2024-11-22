import { useIsomorphicLayoutEffect } from "@/hooks/use-isomorphic-layout-effect";
import { useState } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
	const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

	useIsomorphicLayoutEffect(() => {
		const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
		const onChange = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};
		mql.addEventListener("change", onChange);
		setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		return () => mql.removeEventListener("change", onChange);
	}, []);

	return !!isMobile;
}
