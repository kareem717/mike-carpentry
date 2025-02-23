import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentProps, ComponentPropsWithoutRef } from "react";

interface ImageDivProps extends ComponentPropsWithoutRef<"div"> {
  imageProps: ComponentProps<typeof Image>;
}

export function ImageDiv({ imageProps, className, children, ...props }: ImageDivProps) {
  const { className: imageStyle, alt, ...image } = imageProps

  return (
    <div className={cn("relative overflow-hidden", className)} {...props}>
      <Image {...image} alt={alt} className={cn("w-full h-full object-cover", imageStyle)} />
      <div className="absolute w-full h-full top-0 left-0">
        {children}
      </div>
    </div>
  )
}