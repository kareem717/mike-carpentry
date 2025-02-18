import LandingHero from "./(landing)/components/landing-hero";
import { copy } from "@/lib/config/copy";

export default async function Home() {
  return (
    <LandingHero className="w-screen h-screen overflow-hidden top-4" config={copy.landing.hero} />
  );
}
