import React from "react";
import { cn } from "@/utils/cn";

export const HR: React.FC<{
  align?: "left" | "center" | "right";
  children?: React.ReactNode;
}> = ({ align = "center", children }) => {
  return (
    <div
      className={cn("py-3 flex items-center text-sm", {
        "after:flex-1 after:border-t after:border-border after:ms-6":
          align === "left",
        "before:flex-1 before:border-t before:border-border before:me-6 after:flex-1 after:border-t after:border-border after:ms-6":
          align === "center",
        "before:flex-1 before:border-t before:border-border before:me-6":
          align === "right",
      })}
    >
      {children}
    </div>
  );
};
