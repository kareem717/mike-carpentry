import { TextBlock } from "@/components/text-block";
import { buttonVariants } from "@/components/ui/button";
import { copy } from "@/lib/config/copy";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

const { title, description } = copy.pages.landing.locations;

export function Locations({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("max-h-[500px] rounded-lg overflow-hidden relative", className)} {...props}>
      <Image src="/assets/hero-image.jpg" alt="Locations" width={1000} height={1000} className="w-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-foreground/50" />
      <TextBlock
        className="text-background absolute top-1/2 ml-12 space-y-4"
        tagline="Locations"
        title={title}
        description={description}
      >
        <Link href="/locations" className={cn("w-fit", buttonVariants({ variant: "secondary", size: "lg" }))}>View All Locations</Link>
      </TextBlock>
    </div>
  )
}