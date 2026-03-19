import Image from "next/image";
import { HeadphoneLargeIcon } from "./PodcastIcons";

export default function PodcastCtaSection() {
  return (
    <section className="pc-section pc-cta">
      <div className="pc-section-inner">
        <div className="pc-cta-grid">
          <div className="pc-cta-content">
            <h1>Bereit, das Beste aus deinem Geld für dein Kind zu machen?</h1>
            <p>
              Starte jetzt mit einer Folge, die dich inspiriert oder entdecke, wie du mit Invest4Kids ganz konkret für dein Kind investieren kannst. Egal ob du neu beginnst oder bereits investierst, hier findest du fundiertes Wissen und praktische Einblicke.
            </p>
            <div className="pc-cta-buttons">
              <a
                href="https://open.spotify.com/show/1250D6GILRDlZFw7mYwcvt?si=b6cbfe99f68c489d"
                target="_blank"
                rel="noopener noreferrer"
                className="pc-btn-primary"
              >
                <HeadphoneLargeIcon />
                <span>Jetzt auf Spotify hören</span>
              </a>
              <a
                href="https://www.invest4kids-beratung.de/start"
                target="_blank"
                rel="noopener noreferrer"
                className="pc-btn-outline"
              >
                Kostenlose Beratung sichern
              </a>
            </div>
          </div>
          <div className="pc-cta-image">
            <Image
              src="/podcast/cta-cover.webp"
              alt="Menschen mit Mikrofon"
              width={889}
              height={888}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
