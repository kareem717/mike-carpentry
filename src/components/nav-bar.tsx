import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";
import { NavMenu } from "./nav-menu";
export function NavBar({ className, ...props }: ComponentPropsWithoutRef<"header">) {
  return (
    <header className={cn("flex items-center justify-between", className)} {...props}>
      <ThemeToggle />
      <NavMenu direction="horizontal" />
    </header>
  )
}