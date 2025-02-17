import { redirects } from "@/lib/config/redirects";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

export function LogoDiv({ className, ...props }: Omit<ComponentPropsWithoutRef<typeof Link>, "href">) {
  return (
    <Link
      href={redirects.home}
      prefetch
      className={cn("flex items-center justify-center", className)}
      {...props}
    >
      <Image src="/assets/logo.svg" alt="Logo" width={100} height={100} />
    </Link>
  )
} 