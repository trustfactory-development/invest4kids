import HeroSection from "@/components/sections/HeroSection";
import AdvantagesGrid from "@/components/sections/AdvantagesGrid";
import TeamCarousel from "@/components/sections/TeamCarousel";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTABanner from "@/components/sections/CTABanner";
import MissionSection from "@/components/sections/MissionSection";
import KnownFromSection from "@/components/sections/KnownFromSection";
import MapVimeoSection from "../components/sections/MapVimeoSection";

export default function Home() {
    return (
        <main>
            <HeroSection/>
            <MissionSection/>
            <AdvantagesGrid/>
            <TeamCarousel/>
            <ProcessTimeline/>
            <TestimonialsSection/>
            <CTABanner/>
            <MapVimeoSection />
            <KnownFromSection />
        </main>
    );
}
