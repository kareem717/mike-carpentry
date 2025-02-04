import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { redirects } from "@/lib/config/redirects";

export interface NavMenuProps extends ComponentPropsWithoutRef<"nav"> {
  direction?: "horizontal" | "vertical";
}

export function NavMenu({ className, direction = "horizontal", ...props }: NavMenuProps) {
  return (
    <nav className={cn("flex items-center justify-between", className, direction === "horizontal" && "flex-row", direction === "vertical" && "flex-col")} {...props}>
      <Link href={redirects.home}>Home</Link>
    </nav>
  )
}

