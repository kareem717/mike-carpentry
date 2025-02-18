import { buttonVariants } from "@/components/ui/button";
import { redirects } from "@/lib/config/redirects";
import Link from "next/link";
import Image from "next/image";

export function WhoWeAre() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <Image src="/assets/hero-image.jpg" alt="Hero Image" width={1000} height={1000} className="w-full object-cover" />  
      <div className="flex flex-col gap-4">
        <h3 className="text-sm text-muted-foreground uppercase font-light">Who We Are</h3>
        <h1 className="text-4xl font-bold">Welcome To M.I.K.E. Carpentry</h1>
        <p className="text-sm text-muted-foreground">
          BonaVista LeisureScapes is your premier destination for creating the ultimate outdoor living experience. With years of expertise in hot tubs, swim spas, and outdoor living, we&apos;re dedicated to transforming your backyard into a personal oasis. Our commitment to quality products and exceptional customer service ensures that your journey to relaxation and wellness is seamless and enjoyable.
        </p>
        <div className="flex gap-4">
          <Link href={redirects.core.about} className={buttonVariants()}>
            Learn More About Us
          </Link>
          <Link href={redirects.core.contact} className={buttonVariants({ variant: "secondary" })}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}