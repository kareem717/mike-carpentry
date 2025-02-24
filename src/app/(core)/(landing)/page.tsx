import LandingHero from "./components/landing-hero";
import { copy } from "@/lib/config/copy";
import { WhoWeAre } from "./components/who-we-are";
import { Services } from "./components/services";
import { Locations } from "./components/locations";

const { hero } = copy.pages.landing;

export default async function LandingPage() {
  return (
    <div className="flex flex-col">
      <LandingHero className="overflow-hidden" config={hero} />
      <div className="flex flex-col gap-24 container py-8 p-4 sm:py-auto sm:p-12 md:p-24">
        <WhoWeAre />
        <Services />
        <Locations />
      </div>
    </div>
  );
}
