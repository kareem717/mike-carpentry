import { buttonVariants } from "@/components/ui/button";
import { redirects } from "@/lib/config/redirects";
import Link from "next/link";
import Image from "next/image";
import { TextBlock } from "@/components/text-block";

export function WhoWeAre() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <Image src="/assets/hero-image.jpg" alt="Hero Image" width={1000} height={1000} className="w-full object-cover rounded-lg" />
      <div className="flex flex-col gap-4">
        <TextBlock
          tagline="Who We Are"
          title="Welcome To M.I.K.E. Carpentry"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
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