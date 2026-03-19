import type { Metadata } from "next";
import { TeamGetToKnowSection } from "@/components/sections/TeamGetToKnowSection";
import { TeamHeroSection } from "@/components/sections/TeamHeroSection";
import { TeamReviewsSection } from "@/components/sections/TeamReviewsSection";
import { TeamSecurityCardsSection } from "@/components/sections/TeamSecurityCardsSection";
import { TeamTabsCarouselSection } from "@/components/sections/TeamTabsCarouselSection";
import MapVimeoSection from "@/components/sections/MapVimeoSection";
export const metadata: Metadata = {
  title: "Team - Invest4Kids",
  description:
    "Lerne unsere Expert:innen kennen. Das Team hinter Invest4Kids.",
};

export default function TeamPage() {
  return (
    <main>
      <TeamHeroSection />
      <TeamTabsCarouselSection />
      <TeamSecurityCardsSection />
      <TeamReviewsSection />
      <TeamGetToKnowSection />
      <MapVimeoSection />
    </main>
  );
}
