import LandingHero from "./components/landing-hero";
import { copy } from "@/lib/config/copy";
import { WhoWeAre } from "./components/who-we-are";
import { FeaturedProducts } from "./components/featured-products";
import { Locations } from "./components/locations";

const featuredProducts = [
  {
    title: "Product 1",
    description: "Product 1 description",
    image: "/assets/hero-image.jpg",
    link: "/products/product-1",
  },
  {
    title: "Product 2",
    description: "Product 2 description",
    image: "/assets/hero-image.jpg",
    link: "/products/product-2",
  },
  {
    title: "Product 3",
    description: "Product 3 description",
    image: "/assets/hero-image.jpg",
    link: "/products/product-3",
  },
  {
    title: "Product 4",
    description: "Product 4 description",
    image: "/assets/hero-image.jpg",
    link: "/products/product-4",
  },
];

export default async function LandingPage() {
  return (
    <div className="flex flex-col">
      <LandingHero className="overflow-hidden" config={copy.landing.hero} />
      <div className="flex flex-col gap-24 max-w-screen-2xl mx-auto py-8 p-4 sm:py-auto sm:p-12 md:p-24">
        <WhoWeAre />
        <FeaturedProducts products={featuredProducts} />
        <Locations />
      </div>  
    </div>
  );
}
