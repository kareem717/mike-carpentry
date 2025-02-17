import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { redirects } from "@/lib/config/redirects";
import { LogoDiv } from "@/components/logo-div";
import { NewsletterSubscribeForm } from "@/components/newsletter-subscribe-form";
export type FooterConfig = {
  description: string;
};

interface FooterProps extends ComponentPropsWithoutRef<"footer"> {
  config: FooterConfig;
}

export async function Footer({ className, config, ...props }: FooterProps) {
  return (
    <footer className={cn("flex flex-col items-center justify-center min-h-40 w-full bg-background p-8 gap-4", className)} {...props}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-8 w-full">
        <div className="flex flex-col items-start gap-2 w-full md:w-1/2">
          <LogoDiv />
          <p className="text-sm text-muted-foreground">{config.description}</p>
        </div>
        <div className="flex flex-col items-start gap-8 w-full md:w-1/2">
          <h1 className="text-lg font-bold">Stay Updated</h1>
          <p className="text-sm text-muted-foreground">Subscribe to our newsletter for exclusive offers and updates.</p>
          <NewsletterSubscribeForm className="w-full" />
        </div>
      </div>
      <Separator />
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground w-full px-4">
        <span>
          © {new Date().getFullYear()} M.I.K.E. Carpentry. All rights reserved.
        </span>
        <div className="flex items-center justify-center gap-4">
          <Link href={redirects.legal.privacy} className="hover:underline">Privacy Policy</Link>
          <Link href={redirects.legal.terms} className="hover:underline">Terms of Service</Link>
          <Link href={redirects.sitemap} className="hover:underline">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}