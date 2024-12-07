import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import React from "react";

export const OAuth: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Button
        type="button"
        variant={"tertiary"}
      >
        <Icons.GoogleIcon />
        Google
      </Button>
      <Button
        type="button"
        variant={"tertiary"}
      >
        <Icons.TwitterIcon />
        Twitter
      </Button>
    </div>
  );
};
