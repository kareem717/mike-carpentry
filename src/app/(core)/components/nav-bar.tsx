import { LogoDiv } from "@/components/logo-div";
import { NavMenu } from "./nav-menu";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";

export function NavBar({ className, ...props }: ComponentPropsWithoutRef<"header">) {
  return (
    <header className={cn("flex items-center justify-between md:justify-normal h-24 container px-4", className)} {...props}>
      <LogoDiv className="size-6" />
      <NavMenu direction="horizontal" className="absolute left-1/2 -translate-x-1/2 hidden md:flex" />
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu className="size-6" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-16">
          <SheetHeader>
            <SheetTitle className="flex gap-4">
              <LogoDiv className="size-8" />
              M.I.K.E. Carpentry
            </SheetTitle>
          </SheetHeader>
          <NavMenu
            direction="vertical"
          />
        </SheetContent>
      </Sheet>
    </header>
  )
}