import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav-bar";
import { copy } from "@/lib/config/copy";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar className="sticky top-0 left-0 right-0" />
      <main className="flex flex-col items-center justify-center h-screen">
        {children}
      </main>
      <Footer config={copy.footer} />
    </>
  );
}
