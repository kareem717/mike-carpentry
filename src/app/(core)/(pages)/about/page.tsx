import { ImageDiv } from "../../../../components/image-div";

const image = {
  src: "/assets/hero-image.jpg",
  alt: "Hero image",
  header: "About Us",
  subheader: "Learn more about our team and our mission"
}

export default function AboutPage() {
  return (
    <div>
      <ImageDiv
        imageProps={{
          src: image.src,
          alt: image.alt,
          width: 1000,
          height: 1000,
        }}
        className="w-screen h-[35vh] max-h-[800px]"
      >
        <div className="text-background flex flex-col justify-center items-center h-full">
          <h1 className="font-bold">About</h1>
          <h3 className="font-light">M.I.K.E. Carpentry</h3>
        </div>
      </ImageDiv>
      <div className="flex flex-col gap-4 p-4 container">
        <h2 className="font-semibold">Our Mission</h2>
        <p>stuff</p>
      </div>
    </div>
  )
}