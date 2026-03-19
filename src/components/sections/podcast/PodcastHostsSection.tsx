import Image from "next/image";
import Link from "next/link";
import { QuoteIcon } from "./PodcastIcons";

export default function PodcastHostsSection() {
  return (
    <section className="pc-section pc-hosts">
      <div className="pc-section-inner">
        <div className="pc-hosts-header">
          <h2>Lerne die Hosts kennen</h2>
          <p>
            Hinter KINDERleicht Investieren stehen Susanna & Torben, zwei erfahrene Expert:innen für Kinderinvestments bei Invest4Kids.
          </p>
        </div>

        {/* Torben - image left, text right */}
        <div className="pc-host-row">
          <div className="pc-host-image">
            <Image src="/podcast/host-torben.webp" alt="man" width={888} height={853} />
          </div>
          <div className="pc-host-info">
            <p>
              Torben ist Mitbegründer von Invest4Kids und hat sich darauf spezialisiert, komplexe Finanzthemen verständlich und greifbar zu machen.
            </p>
            <div className="pc-host-quote">
              <QuoteIcon />
              <p>Ich möchte langfristig für Kinder finanzielle Sicherheit und Stabilität schaffen.</p>
            </div>
          </div>
        </div>

        {/* Susanna - text left, image right */}
        <div className="pc-host-row">
          <div className="pc-host-info">
            <p>
              Susanna begleitet täglich Familien dabei, clevere Strategien für die finanzielle Zukunft ihrer Kinder zu entwickeln.
            </p>
            <div className="pc-host-quote">
              <QuoteIcon />
              <p>Die Zukunft ist unsicher. Ein Plan gibt Sicherheit, um Kinder zuverlässig zu unterstützen.</p>
            </div>
          </div>
          <div className="pc-host-image">
            <Image src="/podcast/host-susanna.webp" alt="woman" width={846} height={1024} />
          </div>
        </div>

        {/* Team - image left, text right */}
        <div className="pc-host-row">
          <div className="pc-host-image">
            <Image src="/podcast/host-team.webp" alt="women" width={888} height={729} />
          </div>
          <div className="pc-host-info">
            <p>
              Immer wieder sind auch Eltern aus dem Invest4Kids-Team zu Gast, darunter Laila und Maike sowie Gründer Bogdan, die ihre persönlichen Erfahrungen, Perspektiven und Geschichten aus der Beratung teilen.
            </p>
            <Link href="/team" className="pc-team-link">
              <span>→</span>
              <span>Zum Team</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
