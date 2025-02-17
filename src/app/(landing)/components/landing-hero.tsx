import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export default function LandingHero({ className, ...props }: ComponentPropsWithoutRef<"section">) {
  return (
    <section className={cn("flex flex-col items-center justify-center h-screen", className)} {...props}>
      <h1 className="text-4xl font-bold">Welcome to the Landing Page</h1>
    </section>
  );
}
