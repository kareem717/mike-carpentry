import { ComponentPropsWithoutRef } from "react";

export type TextBlockConfig = {
  tagline?: string;
  title?: string;
  description?: string;
}

export function TextBlock({ children, title, description, tagline, ...props }: ComponentPropsWithoutRef<"div"> & TextBlockConfig) {
  return (
    <div className="flex flex-col gap-4" {...props}>
      {tagline && <p className="text-sm opacity-70 uppercase font-light">{tagline}</p>}
      {title && <h1 className="font-bold">{title}</h1>}
      {description && <p className="text-sm opacity-70">{description}</p>}
      {children}
    </div>
  )
}