import { Button } from "./ui/button";
import { Icons } from "./ui/icons";
import React from "react";

export const OAuth: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Button
        type="button"
        variant={"outline"}
      >
        <Icons.GoogleIcon />
        Google
      </Button>
      <Button
        type="button"
        variant={"outline"}
      >
        <Icons.TwitterIcon />
        Twitter
      </Button>
    </div>
  );
};
