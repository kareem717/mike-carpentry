import { Separator } from "@/components/ui/separator";
import { copy } from "@/lib/config/copy";
import { LogoDiv } from "@/components/logo-div";
import { NavMenu } from "./components/nav-menu";
import { redirects } from "@/lib/config/redirects";
import Link from "next/link";

export default function CoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full bg-background fixed top-0 left-0 right-0 z-50 border-b">
        <header className="flex items-center h-24 max-w-screen-2xl mx-auto relative">
          <LogoDiv className="size-16" />
          <NavMenu direction="horizontal" className="absolute left-1/2 -translate-x-1/2" />
        </header>
      </div>
      <main className="flex flex-col items-center justify-center max-w-screen-2xl mx-auto mt-24">
        {children}
      </main>
      <div className="w-full bg-background border-t">
        <footer className="flex flex-col justify-center min-h-40 max-w-screen-2xl mx-auto p-8 gap-4">
          <div className="flex flex-col items-start gap-2 w-full md:w-1/2">
            <LogoDiv />
            <p className="text-sm text-muted-foreground">{copy.footer.description}</p>
          </div>
          <Separator />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground w-full px-4">
            <span>
              © {new Date().getFullYear()} M.I.K.E. Carpentry. All rights reserved.
            </span>
            <div className="flex items-center justify-center gap-4">
              <Link href={redirects.legal.privacy} className="hover:underline">Privacy Policy</Link>
              <Link href={redirects.legal.terms} className="hover:underline">Terms of Service</Link>
              <Link href={redirects.sitemap} className="hover:underline">Sitemap</Link>
            </div>
          </div>
        </footer>
      </div>
    </div >
  );
}
