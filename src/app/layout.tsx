import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Al Taef Crane Rental | Premium Heavy Machinery & Access Solutions UAE",
  description: "Certified equipment rental in the UAE. Mobile cranes (25T to 500T), access platforms, forklifts, and site survey assessments with 24/7 support.",
  keywords: ["crane rental Dubai", "heavy machinery rental UAE", "mobile crane rental UAE", "access platforms Dubai", "Al Taef crane"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} dark scroll-smooth`}
    >
      <body className="bg-bg-dark text-foreground font-sans min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


