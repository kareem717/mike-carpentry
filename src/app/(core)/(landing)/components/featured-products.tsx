import { buttonVariants } from "@/components/ui/button";
import { redirects } from "@/lib/config/redirects";
import { TextBlock } from "@/components/text-block";
import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
}

function ProductCard({ title, description, image, link }: ProductCardProps) {
  return (
    <div className="relative flex flex-col gap-4 rounded-lg overflow-hidden h-[300px] md:h-[400px]"  >
      <Image src={image} alt={title} width={100} height={100} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-background">{title}</h2>
        <p className="text-background/80">{description}</p>
        <Link href={link} className={cn("w-full mt-2", buttonVariants({ size: "lg" }))}>View Product</Link>
      </div>
    </div>
  )
}

interface FeaturedProductsProps extends ComponentPropsWithoutRef<"div"> {
  products: ProductCardProps[];
}

export function FeaturedProducts({ className, products, ...props }: FeaturedProductsProps) {
  if (products.length > 4) {
    throw new Error("FeaturedProducts must have at most 4 products");
  }

  return (
    <div className={cn("flex flex-col gap-8", className)} {...props}>
      <TextBlock
        tagline="Featured Products"
        title="Our Products"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
      >
        <Link href={redirects.core.contact} className={cn(buttonVariants(), "w-fit")}>
          Get a Quote
        </Link>
      </TextBlock>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </div>
  )
}