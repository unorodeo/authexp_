import { Section } from "@/components/ui/section";
import { auth } from "@/lib/auth";

export default async function Studio() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <>
      <Section>
        <h2 className="border-none">Welcome to your noauth.</h2>
        <p className="text-lg">
          Currently signed in as{" "}
          <span className="font-medium text-primary">
            {session.user.email}
          </span>
        </p>
      </Section>
      <Section>
        <code>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </code>
      </Section>
    </>
  );
}
