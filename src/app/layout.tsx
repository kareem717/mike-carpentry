import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { env } from "@/lib/env";
import { Toaster } from "sonner";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: {
    default: "M.I.K.E. Carpentry",
    template: "%s | M.I.K.E. Carpentry",
  },
  description: "Window and door installation and manufacturing.",
  keywords: [
    "m.i.k.e. carpentry",
    "m.i.k.e. carpentry.com",
    "m.i.k.e. carpentry.ca",
    "carpentry",
    "window installation",
    "door installation",
    "window manufacturing",
    "door manufacturing",
    "custom carpentry",
    "custom window installation",
    "custom door installation",
    "custom window manufacturing",
    "custom door manufacturing",
  ],
  twitter: {
    card: "summary_large_image",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased scroll-smooth`} >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
