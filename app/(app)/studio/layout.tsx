import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function StudioLayout({ children }: Props) {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <header>studio header</header>
      <section className="relative flex-1">{children}</section>
    </main>
  );
}
