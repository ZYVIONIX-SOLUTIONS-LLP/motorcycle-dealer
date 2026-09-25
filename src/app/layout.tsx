import type { Metadata } from "next";
import { Inter, Manrope, DM_Sans } from "next/font/google";
import "./globals.css";
import { BikeProvider } from "@/context/BikeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RideHub | Precision Motorcycle Engineering & Pre-Owned Showroom",
  description: "Bespoke motorcycle servicing, advanced diagnostics, performance tuning, and verified used superbikes.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "RideHub",
  },
  openGraph: {
    title: "RideHub Motorsport & Workshop",
    description: "Ultra-premium motorcycle servicing, diagnostics, performance tuning, and certified pre-owned bikes.",
    type: "website",
    locale: "en_US",
  },
};

import WhatsAppButton from "@/app/components/WhatsAppButton";
import MobileBottomNav from "@/app/components/MobileBottomNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${dmSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-text-primary pb-16 md:pb-0">
        <BikeProvider>
          {children}
          <WhatsAppButton />
          <MobileBottomNav />
        </BikeProvider>
      </body>
    </html>
  );
}
