import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import AdvantagesGrid from "@/components/sections/AdvantagesGrid";
import TeamCarousel from "@/components/sections/TeamCarousel";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTABanner from "@/components/sections/CTABanner";
import MissionSection from "@/components/sections/MissionSection";
import KnownFromSection from "@/components/sections/KnownFromSection";
import MapVimeoSection from "@/components/sections/MapVimeoSection";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Startseite",
  description:
    "Investiere sinnvoll für dein Kind mit professioneller ETF-Beratung von Invest4Kids. Klar, transparent und individuell auf eure Familie abgestimmt.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Invest4Kids - Expertenhilfe beim Geld anlegen für Kinder",
    description:
      "Investiere sinnvoll für dein Kind mit professioneller ETF-Beratung von Invest4Kids.",
    url: "/",
    images: [{ url: siteConfig.ogImage, alt: "Invest4Kids Team" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invest4Kids - Expertenhilfe beim Geld anlegen für Kinder",
    description:
      "Investiere sinnvoll für dein Kind mit professioneller ETF-Beratung von Invest4Kids.",
    images: [siteConfig.ogImage],
  },
};

export default function Home() {
    return (
        <main>
            <HeroSection/>
            <MissionSection/>
            <AdvantagesGrid/>
            <TeamCarousel/>
            <ProcessTimeline/>
            <TestimonialsSection creamBackground />
            <CTABanner/>
            <MapVimeoSection />
            <KnownFromSection />
        </main>
    );
}
