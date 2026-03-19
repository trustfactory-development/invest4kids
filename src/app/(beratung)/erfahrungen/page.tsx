import type { Metadata } from "next";
import ErfahrungenHeroSection from "@/components/sections/ErfahrungenHeroSection";
import ErfahrungenStoriesSection from "@/components/sections/ErfahrungenStoriesSection";
import ErfahrungenReviewsSection from "@/components/sections/ErfahrungenReviewsSection";
import ErfahrungenDMsSection from "@/components/sections/ErfahrungenDMsSection";
import ErfahrungenCtaSection from "@/components/sections/ErfahrungenCtaSection";
import MapVimeoSection from "@/components/sections/MapVimeoSection";

export const metadata: Metadata = {
  title: "Erfahrungen - Invest4Kids",
  description:
    "Das sagen unsere Kund:innen. Echte Erfahrungsberichte zu Invest4Kids.",
};

export default function ErfahrungenPage() {
  return (
    <main className="bg-[#EFFAFD]">
      <ErfahrungenHeroSection />
      <ErfahrungenStoriesSection />
      <ErfahrungenReviewsSection />
      <ErfahrungenDMsSection />
      <ErfahrungenCtaSection />
      <MapVimeoSection />
    </main>
  );
}
