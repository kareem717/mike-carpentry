import { buttonVariants } from "@/components/ui/button";
import { redirects } from "@/lib/config/redirects";
import { TextBlock } from "@/components/text-block";
import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { copy } from "@/lib/config/copy";

export type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
}

function ServiceCard({ title, description, image, link }: ServiceCardProps) {
  return (
    <div className="relative flex flex-col gap-4 rounded-lg overflow-hidden h-[300px] md:h-[400px] w-full"  >
      <Image src={image} alt={title} width={100} height={100} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col gap-2">
        <h2 className="font-bold text-background">{title}</h2>
        <p className="text-background/80">{description}</p>
        <Link href={link} className={cn("w-full mt-2", buttonVariants({ size: "lg" }))}>Learn More</Link>
      </div>
    </div>
  )
}

const { services, title, description } = copy.pages.landing.services;

if (services.length > 4) {
  throw new Error("FeaturedProducts must have at most 4 products");
}

export function Services({ className, ...props }: ComponentPropsWithoutRef<"div">) {

  return (
    <div className={cn("flex flex-col gap-8", className)} {...props}>
      <TextBlock
        tagline="Featured Services"
        title={title}
        description={description}
      >
        <Link href={redirects.core.contact} className={cn(buttonVariants(), "w-fit")}>
          Get a Quote
        </Link>
      </TextBlock>
      <div className="flex gap-4 flex-col lg:flex-row items-center justify-center">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </div>
  )
}