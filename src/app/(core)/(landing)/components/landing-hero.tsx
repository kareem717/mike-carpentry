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
    <section className={cn("flex flex-col items-center justify-center w-screen h-screen", className)} {...props}>
      <Image src="/assets/hero-image.jpg" alt="Hero Image" width={1000} height={1000} className="w-full h-full object-cover" />
      <div className="z-10 absolute flex flex-col gap-4 items-start max-w-screen-2xl w-full px-4 sm:px-12 md:px-24">
        <h1 className="text-2xl sm:text-4xl font-bold text-background">{config.title}</h1>
        <p className="text-sm sm:text-lg text-background">{config.description}</p>
        <Link href={config.cta.href} className={buttonVariants()}>{config.cta.label}</Link>
      </div>
    </section>
  );
}
