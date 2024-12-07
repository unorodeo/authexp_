"use client";

import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import React from "react";
import { signOut } from "next-auth/react";

export const SignOut: React.FC = () => {
  return (
    <Button
      type="button"
      variant={"ghost"}
      onClick={() => signOut()}
    >
      <LogOutIcon className="text-muted-foreground" />
      Sign out
    </Button>
  );
};
