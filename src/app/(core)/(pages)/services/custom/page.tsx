import { ImageDiv } from "@/components/image-div";
import { copy } from "@/lib/config/copy";

const { header, main } = copy.pages.services.custom;

export default function CustomDoorPage() {
  return (
    <div className="flex flex-col sm:gap-6 md:gap-10">
    <ImageDiv
      imageProps={{
        src: "/assets/hero-image.jpg",
        alt: "",
        width: 1000,
        height: 1000,
      }}
      className="w-screen h-[35vh] max-h-[800px]"
    >
      <div className="text-background flex flex-col justify-center items-center h-full">
        <h1 className="font-bold">{header.title}</h1>
        <h3>{header.subtitle}</h3>
      </div>
    </ImageDiv>
    <div className="flex flex-col gap-4 p-4 container">
      <h2 className="font-semibold">{main.title}</h2>
      <p className="whitespace-pre-line text-muted-foreground">{main.description}</p>
    </div>
  </div>
  )
}