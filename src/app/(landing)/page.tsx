import LandingHero from "./components/landing-hero";
import { NavBar } from "@/components/nav-bar";
import { copy } from "@/lib/config/copy"; 

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <NavBar className="sticky top-0 left-0 right-0" />
      <LandingHero className="w-full h-screen overflow-hidden" config={copy.landing.hero} />
    </main>
  );
}
