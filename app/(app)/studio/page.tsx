import { Section } from "@/components/ui/section";
import { auth } from "@/lib/auth";

export default async function Studio() {
  const session = await auth()

  return (
    <>
      <Section>
        <h2 className="border-none">Welcome to your studio.</h2>
        <p className="text-lg">
          Currently signed in as{" "}
          <span className="font-medium text-primary">anon</span>
        </p>
      </Section>
      <Section>
        {JSON.stringify(session, null, 2)}
      </Section>
    </>
  );
}
