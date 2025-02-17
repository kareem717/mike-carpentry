import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";
import { NavMenu } from "./nav-menu";
import { LogoDiv } from "./logo-div";

export function NavBar({ className, ...props }: ComponentPropsWithoutRef<"header">) {
  return (
    <header className={cn("flex items-center justify-between h-24 w-full px-12 bg-background", className)} {...props}>
      <LogoDiv className="size-16" />
      <NavMenu direction="horizontal" className="mx-auto" />
    </header>
  )
}