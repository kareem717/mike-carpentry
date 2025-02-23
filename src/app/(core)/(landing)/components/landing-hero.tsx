import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ImageDiv } from "@/components/image-div";

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
      <ImageDiv
        imageProps={{
          src: "/assets/hero-image.jpg",
          alt: "Hero Image",
          width: 1000,
          height: 1000,
        }}
        className="w-screen h-screen"
      >
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col gap-4 items-start container w-full px-4 sm:px-12 md:px-24">
            <h1 className="font-bold text-background">{config.title}</h1>
            <p className="text-sm sm:text-lg text-background">{config.description}</p>
            <Link href={config.cta.href} className={buttonVariants()}>{config.cta.label}</Link>
          </div>
        </div>
      </ImageDiv>
    </section>
  );
}
