import React, { ComponentPropsWithoutRef } from "react";

import { cn } from "@/utils/cn";

export const Section: React.FC<
  ComponentPropsWithoutRef<"section"> & { bleed?: boolean }
> = ({ className, children, bleed, ...props }) => {
  return (
    <section
      className={cn(
        "max-w-7xl mx-auto px-4 py-6 lg:py-16",
        {
          "max-w-full py-2 lg:py-4": bleed,
        },
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
