import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export type LandingHeroConfig = {
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;   
  }
}

interface LandingHeroProps extends ComponentPropsWithoutRef<"section"> {
  config: LandingHeroConfig;
}

export default function LandingHero({ className, config, ...props }: LandingHeroProps) {
  return (
    <section className={cn("flex flex-col items-center justify-center", className)} {...props}>
      <Image src="/assets/hero-image.jpg" alt="Hero Image" width={1000} height={1000} className="w-full object-cover" />
      <div className="z-10 text-center absolute top-1/2 -translate-x-1/2 flex flex-col gap-4 items-start">
        <h1 className="text-4xl font-bold text-background">{config.title}</h1>
        <p className="text-lg text-background">{config.description}</p>
        <Link href={config.cta.href} className={buttonVariants()}>{config.cta.label}</Link>
      </div>
    </section>
  );
}
