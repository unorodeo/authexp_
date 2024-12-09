import {
  Body,
  Container,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";

import React from "react";

interface Props {
  email: string;
  token: string;
}

export const Verification: React.FC<Props> = ({ email, token }) => {
  return (
    <Html lang="en">
      <Preview>Your verification code for Norauth</Preview>
      <Body>
        <Container>
          <Heading>Your login code for Norauth</Heading>
          <Text>
            This code will only be valid for the next 30 minutes. If the link
            does not work, you can generate a new verification code by logging
            in.
          </Text>
          <code>{token}</code>
          <Hr />
          <Text>Thank you for joining Norauth &mdash; {email}</Text>
        </Container>
      </Body>
    </Html>
  );
};
