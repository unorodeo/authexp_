"use client";

import { ComponentPropsWithoutRef, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

export default function PasswordInput({
  ...props
}: Omit<ComponentPropsWithoutRef<"input">, "type">) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  return (
    <div className="relative">
      <Input
        className="pe-9"
        placeholder="Password"
        type={isVisible ? "text" : "password"}
        {...props}
      />
      <button
        className="absolute inset-y-0 flex items-center justify-center h-full transition-colors end-0 w-9 rounded-e-lg text-muted-foreground/80 outline-offset-2 hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        type="button"
        onClick={toggleVisibility}
        aria-label={isVisible ? "Hide password" : "Show password"}
        aria-pressed={isVisible}
        aria-controls="password"
      >
        {isVisible ? (
          <EyeOffIcon
            size={20}
            strokeWidth={2}
            aria-hidden="true"
            className="text-foreground md:text-muted-foreground md:hover:text-foreground"
          />
        ) : (
          <EyeIcon
            size={20}
            strokeWidth={2}
            aria-hidden="true"
            className="text-foreground md:text-muted-foreground md:hover:text-foreground"
          />
        )}
      </button>
    </div>
  );
}
