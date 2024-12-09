import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ForgotPassword() {
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle>Create and Account</CardTitle>
          <CardDescription>Enter credentials to get started</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 md:w-96">
          forgot password form
        </CardContent>
      </Card>
    </section>
  );
}
