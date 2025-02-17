import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { redirects } from "@/lib/config/redirects";

export interface NavMenuProps extends ComponentPropsWithoutRef<"nav"> {
  direction?: "horizontal" | "vertical";
}

const navLinks = [
  {
    href: redirects.core.landing,
    label: "Home",
  },
  {
    href: redirects.core.contact,
    label: "Contact",
  },
  {
    href: redirects.core.about,
    label: "About",
  },
  {
    href: redirects.core.services,
    label: "Services",
  },
]

export function NavMenu({ className, direction = "horizontal", ...props }: NavMenuProps) {
  return (
    <nav className={cn("flex items-center justify-between gap-4", className, direction === "horizontal" && "flex-row", direction === "vertical" && "flex-col")} {...props}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          prefetch
          className="relative text-lg font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all after:duration-200 hover:after:w-full"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

