import type { Metadata } from "next";
import { AboutHeroSection } from "@/components/sections/AboutHeroSection";
import { AboutMissionCardsSection } from "@/components/sections/AboutMissionCardsSection";
import { AboutStoryTimelineSection } from "@/components/sections/AboutStoryTimelineSection";
import { AboutGetToKnowSection } from "@/components/sections/AboutGetToKnowSection";
import { AboutDiveDeeperSection } from "@/components/sections/AboutDiveDeeperSection";
import TeamCarousel from "@/components/sections/TeamCarousel";
import MapVimeoSection from "@/components/sections/MapVimeoSection";

export const metadata: Metadata = {
  title: "Über Uns - Invest4Kids",
  description:
    "Wer wir sind und wofür wir stehen. Lerne Invest4Kids kennen.",
};

export default function UeberUnsPage() {
  return (
    <main>
      <AboutHeroSection />
      <AboutMissionCardsSection />
      <AboutStoryTimelineSection />
      <TeamCarousel />
      <AboutGetToKnowSection />
      <AboutDiveDeeperSection />
      <MapVimeoSection />
    </main>
  );
}
