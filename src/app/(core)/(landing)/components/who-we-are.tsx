import { buttonVariants } from "@/components/ui/button";
import { redirects } from "@/lib/config/redirects";
import Link from "next/link";
import Image from "next/image";
import { TextBlock } from "@/components/text-block";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { copy } from "@/lib/config/copy";

const { title, description } = copy.pages.landing.whoWeAre;

export function WhoWeAre({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("grid md:grid-cols-2 gap-8 items-center", className)} {...props}>
      <Image src="/assets/hero-image.jpg" alt="Hero Image" width={1000} height={1000} className="w-full object-cover rounded-lg" />
      <div className="flex flex-col gap-4">
        <TextBlock
          tagline="Who We Are"
          title={title}
          description={description}
        >
          <div className="flex gap-4">
            <Link href={redirects.core.about} className={buttonVariants()}>
              Learn More About Us
            </Link>
            <Link href={redirects.core.contact} className={buttonVariants({ variant: "secondary" })}>
              Contact Us
            </Link>
          </div>
        </TextBlock>
      </div>
    </div>
  )
}