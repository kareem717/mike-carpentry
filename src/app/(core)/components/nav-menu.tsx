import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { redirects } from "@/lib/config/redirects";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

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
    label: "Services",
    items: [
      {
        href: redirects.core.services.custom,
        label: "Custom Doors"
      },
      {
        href: redirects.core.services.installation,
        label: "Window & Door Installation"
      },]
  },
]

export function NavMenu({ className, direction = "horizontal", ...props }: NavMenuProps) {
  return (
    <nav className={cn("flex justify-between gap-4", className, direction === "horizontal" && "flex-row", direction === "vertical" && "flex-col")} {...props}>
      {navLinks.map(({ href, label, items }, idx) => (
        items ? (
          <DropdownMenu key={idx}>
            <DropdownMenuTrigger className="group relative flex items-center gap-1 w-min text-lg font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all after:duration-200 data-[state=open]:after:w-full hover:after:w-full">
              {label}
              <ChevronDown className="h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {items.map((item, itemIdx) => (
                <DropdownMenuItem key={itemIdx} asChild>
                  <Link href={item.href} prefetch className="text-lg font-medium">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            key={idx}
            href={href}
            prefetch
            className="relative text-lg font-medium w-min after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all after:duration-200 hover:after:w-full"
          >
            {label}
          </Link>
        )
      ))}
    </nav>
  )
}

