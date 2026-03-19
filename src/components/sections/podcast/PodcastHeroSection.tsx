import Image from "next/image";
import { HeadphoneIcon } from "./PodcastIcons";

export default function PodcastHeroSection() {
  return (
    <section className="pc-section pc-hero">
      <div className="pc-section-inner">
        <div className="pc-hero-grid">
          <div className="pc-hero-content">
            <div className="pc-hero-badge">
              <HeadphoneIcon />
              <span>Über 50 Folgen</span>
            </div>
            <h1>KINDERleicht Investieren – der Podcast von Invest4Kids</h1>
            <p className="pc-hero-desc">
              Einfach erklärt, direkt umsetzbar – Susanna & Torben zeigen dir, wie du mit ETFs, Steuervorteilen und dem richtigen Mindset das Beste für dein Kind rausholst.
            </p>
          </div>
          <div className="pc-hero-image">
            <Image
              src="/podcast/hero-banner.webp"
              alt="Zwei Personen sprechen in einem Podcast vor Mikrofonen"
              width={1512}
              height={884}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
