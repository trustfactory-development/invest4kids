import type { Metadata } from "next";
import { PressPageSections } from "@/components/sections/PressPageSections";
import MapVimeoSection from "@/components/sections/MapVimeoSection";

export const metadata: Metadata = {
  title: "Presse - Invest4Kids",
  description:
    "Presseportal von Invest4Kids. Alle Informationen und Veröffentlichungen.",
};

export default function PressePage() {
  return (
    <main>
      <PressPageSections />
    </main>
  );
}
