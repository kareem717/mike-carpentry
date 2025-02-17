import LandingHero from "./components/landing-hero";
import { copy } from "@/lib/config/copy";

export default async function Home() {
  return (
    <LandingHero className="w-full h-screen overflow-hidden" config={copy.landing.hero} />
  );
}
