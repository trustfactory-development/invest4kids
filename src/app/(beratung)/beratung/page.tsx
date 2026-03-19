import AdvantagesSection from "@/components/sections/AdvantagesSection";
import ConsultationSection from "@/components/sections/ConsultationSection";
import CTABanner from "@/components/sections/CTABanner";
import FaqSection from "@/components/sections/FaqSection";
import MapVimeoSection from "@/components/sections/MapVimeoSection";
import PodcastSection from "@/components/sections/PodcastSection";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beratung - Invest4Kids",
  description:
    "In 30 Minuten zur passenden Strategie. Kostenfreie Beratung für Kinderinvestments anfragen!",
};

export default function BeratungPage() {
  return (
    <main>
      <ConsultationSection />
      <ProcessTimeline />
      <TestimonialsSection />
      <AdvantagesSection />
      <FaqSection />
      <CTABanner />
      <PodcastSection />
      <MapVimeoSection />
    </main>
  );
}
