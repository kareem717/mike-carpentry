import LandingHero from "./components/landing-hero";
import { copy } from "@/lib/config/copy";
import { WhoWeAre } from "./components/who-we-are";

export default async function LandingPage() {
  return (
    <div className="flex flex-col gap-4">
      <LandingHero className="overflow-hidden" config={copy.landing.hero} />
      <div className="flex flex-col gap-4 max-w-screen-2xl mx-auto px-2 sm:px-12 md:px-24">
        <WhoWeAre />
      </div>
    </div>
  );
}
