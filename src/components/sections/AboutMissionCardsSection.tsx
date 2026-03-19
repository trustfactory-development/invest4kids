import Image from "next/image";

const cards = [
  {
    title: "Our vision",
    description:
      "We believe that every child deserves a fair chance at a self-determined, secure future, regardless of their parents' income or prior knowledge.",
    image:
      "https://invest4kids.de/wp-content/uploads/2025/12/Illustration-eines-Kindes-mit-Stern-Symbol-fuer-die-Invest4Kids-Vision-einer-sicheren-Zukunft.webp",
    imageAlt: "Illustration of child holding a star",
    imageBg: "bg-[#C9E8FF]",
  },
  {
    title: "Our mission",
    description:
      "Our mission is to provide parents with the best tools, the necessary knowledge, and the right strategy to take early precautions.",
    image:
      "https://invest4kids.de/wp-content/uploads/2025/12/Grafik-mit-Zahnraedern-Buch-und-Gluehbirne-stellvertretend-fuer-die-Invest4Kids-Mission-Finanzwissen-zu-vermitteln.webp",
    imageAlt: "Illustration of gear, lightbulb, and book",
    imageBg: "bg-[#F9EAB5]",
  },
  {
    title: "More than just a financial product",
    description:
      "We raise awareness, support decision-making, and empower families with knowledge that lasts.",
    image:
      "https://invest4kids.de/wp-content/uploads/2025/12/Illustration-eines-Schutzschildes-Symbol-fuer-Invest4Kids-Finanzprodukte-und-Sicherheit-fuer-Familien.webp",
    imageAlt: "Illustration of shield and stars",
    imageBg: "bg-[#D6E7F8]",
  },
] as const;

export function AboutMissionCardsSection() {
  return (
    <section className="border-t border-[#d9eaf3] bg-[#f5f5f5]">
      <div className="mx-auto w-full max-w-285 px-3 py-10 sm:px-6 sm:py-14 lg:px-0 lg:py-21">
        <div className="grid place-items-center grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map(({ title, description, image, imageAlt, imageBg }) => (
            <article
              key={title}
              className="h-full w-11/12 rounded-2xl bg-[#fffffff8] p-6 shadow-[0_8px_18px_rgba(44,62,80,0.04)] transition-shadow duration-300 hover:shadow-[0_16px_30px_rgba(44,62,80,0.12)] sm:w-full md:p-[34px]"
            >
              <div
                className={`relative aspect-324/178 w-full overflow-hidden rounded-2xl md:aspect-284/178 ${imageBg}`}
              >
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 94vw"
                  className="object-contain"
                />
              </div>
              <h3 className="mt-4 font-poppins text-[18px] leading-[1.35] font-medium text-text-medium md:text-[20px]">
                {title}
              </h3>
              <p className="mt-3 font-outfit text-[16px] leading-[1.3] font-light text-text-medium md:text-[18px]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
