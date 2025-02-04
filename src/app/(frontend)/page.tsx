import LandingHero from "@/components/landing-hero";
import { NavBar } from "@/components/nav-bar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <NavBar className="sticky top-0 left-0 right-0" />
      <LandingHero />
    </main>
  );
}
