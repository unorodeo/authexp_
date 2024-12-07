"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import React from "react";
import { signIn } from "next-auth/react";

export const OAuth: React.FC = () => {
  return (
    <div className="grid">
      <Button
        type="button"
        variant={"tertiary"}
        className="justify-between"
        onClick={() => signIn("google")}
      >
        <Icons.GoogleIcon />
        Google
      </Button>
    </div>
  );
};
