"use client";

import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { redirects } from "@/lib/config/redirects";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect } from "react";
import { TriangleAlert } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center gap-4 justify-center h-screen w-full p-4">
      <TriangleAlert className="size-20" />
      <h2 className="text-2xl font-semibold">
        {error.message || "Something went wrong!"}{" "}
      </h2>
      <div className="flex gap-4 w-full md:w-1/3 max-w-xs min-w-[200px]">
        <Button onClick={() => reset()} className="w-full">
          Retry
        </Button>
        <Link
          href={redirects.core.landing}
          className={cn(buttonVariants({ variant: "secondary" }), "w-full")}
        >
          Home
        </Link>
      </div>
    </div>
  );
}
