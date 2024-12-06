import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function W3Layout({ children }: Props) {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <Navigation />
      <section className="relative flex-1">{children}</section>
      <Footer />
    </main>
  );
}
