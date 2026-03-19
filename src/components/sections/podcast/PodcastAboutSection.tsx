import Image from "next/image";

export default function PodcastAboutSection() {
  return (
    <section className="pc-section pc-about">
      <div className="pc-section-inner">
        <div className="pc-about-grid">
          <div className="pc-about-image">
            <Image
              src="/podcast/studio.webp"
              alt="Podcast-Studio mit zwei blauen Sesseln und Mikrofonen."
              width={936}
              height={677}
            />
          </div>
          <div className="pc-about-text">
            <h1>Über den Podcast</h1>
            <p>
              Susanna & Torben sprechen über die{" "}
              <strong>finanziellen Themen, die Familien wirklich bewegen</strong>
              : clever investieren mit ETFs, Steuervorteile nutzen, finanzielle Erziehung und das richtige Mindset rund ums Geld.
            </p>
            <p>
              Dazu laden sie regelmäßig spannende Gäste ein, die ihre Erfahrungen und Perspektiven teilen. Dabei geht es unter anderem um Taschengeld, Partnerschaft und gesellschaftliche Entwicklungen rund um Finanzen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
