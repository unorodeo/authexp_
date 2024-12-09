import { Resend } from "resend";
import { Verification } from "@/emails/verification";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  try {
    await resend.emails.send({
      from: "no-reply@norauth.com",
      to: email,
      subject: "Account Verification Procedure",
      react: Verification({ email, token }),
    });
  } catch (error) {
    console.log("[EMAIL_ERROR]:[RESEND] >", error);
  }
};
