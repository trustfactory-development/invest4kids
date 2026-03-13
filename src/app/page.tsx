import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import AdvantagesGrid from "@/components/sections/AdvantagesGrid";
import TeamCarousel from "@/components/sections/TeamCarousel";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTABanner from "@/components/sections/CTABanner";
import WeAreSection from "@/components/sections/WeAreSection";
import KnownFrom from "@/components/sections/KnownFrom";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <AdvantagesGrid />
      <TeamCarousel />
      <ProcessTimeline />
      <TestimonialsSection />
      <CTABanner />
      <WeAreSection />
      <KnownFrom />
    </>
  );
}
