"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

export const EmailClient: React.FC = () => {
  const searchParams = useSearchParams();

  if (!searchParams.get("email")) {
    return <span className="text-red-500 font-medium">unknown@email.com</span>;
  }

  return <>{searchParams.get("email")}</>;
};
