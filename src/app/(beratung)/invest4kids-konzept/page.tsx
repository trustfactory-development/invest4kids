import type { Metadata } from "next";
import KonzeptHeroSection from "@/components/sections/KonzeptHeroSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import ConditionsSection from "@/components/sections/ConditionsSection";
import CalculatorSection from "@/components/sections/CalculatorSection";
import MapVimeoSection from "@/components/sections/MapVimeoSection";

export const metadata: Metadata = {
  title: "Das Invest4Kids Konzept - ETFs, Steuervorteile & Kontrolle",
  description:
    "Entdecke das Invest4Kids Konzept: ETF-Investment mit Steuervorteilen, elterlicher Kontrolle ab 18 & freier Fondsauswahl. Vergleiche Sparbuch, Depot & mehr.",
};

export default function KonzeptPage() {
  return (
    <main className="bg-white">
      <KonzeptHeroSection />
      <ComparisonSection />
      <ConditionsSection />
      <CalculatorSection />
      <MapVimeoSection />
    </main>
  );
}
