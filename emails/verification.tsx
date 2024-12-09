import {
  Body,
  Container,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";

import React from "react";

interface Props {
  email: string;
  token: string;
}

export const Verification: React.FC<Props> = ({ email, token }) => {
  return (
    <Tailwind>
      <Html lang="en">
        <Preview>Verification code for Norauth</Preview>
        <Body>
          <Container>
            <Heading className="text-neutral-900">Verification code for Norauth</Heading>
            <Text className="text-[16px] leading-7 text-neutral-900">
              This code will only be valid for the next 30 minutes. If the link
              does not work, you can generate a new verification code by logging
              in.
            </Text>
            <code className="bg-neutral-100 border-[8px] border-blue-700 px-[12px] py-[10px] rounded-[8px] text-[24px] font-bold w-[100%] text-neutral-900">
              {token}
            </code>
            <Hr className="mt-[24px]"/>
            <Text className="text-neutral-500 text-[14px] font-medium">
              Thank you for joining Norauth &mdash;
              <span className="text-blue-500 ms-[4px]">{email}</span>
            </Text>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default Verification;
