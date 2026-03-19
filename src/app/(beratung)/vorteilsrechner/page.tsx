import type { Metadata } from "next";
import VorteilsrechnerHeroSection from "@/components/sections/VorteilsrechnerHeroSection";
import VorteilsrechnerCalculator from "@/components/sections/VorteilsrechnerCalculator";

export const metadata: Metadata = {
  title: "Individueller Rechner - Invest4Kids",
  description:
    "Berechne, wie sich dein Investment entwickelt. Der Invest4Kids Vorteilsrechner.",
};

export default function VorteilsrechnerPage() {
  return (
    <main>
      <VorteilsrechnerHeroSection />
      <VorteilsrechnerCalculator showExFields />
    </main>
  );
}
