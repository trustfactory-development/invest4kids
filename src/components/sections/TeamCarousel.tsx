"use client";

import { useState, useCallback, useEffect } from "react";
import Container from "../layout/Container";
import Button from "../ui/Button";
import TeamCard from "../ui/TeamCard";
import { ArrowRight } from "lucide-react";

const CDN_BASE =
  "https://cdn-ilcgkon.nitrocdn.com/nagGuCyZytyRpkwQIcHQTdSzWgxfpvWP/assets/images/optimized/rev-96f7e66/invest4kids.de/wp-content/uploads/2025/11/";

const teamMembers = [
  { name: "Laila", image: "Laila-Moor-Expertin-fuer-Kinderinvestments.webp", subtitle: "Expertin für Kinderinvestments" },
  { name: "Bogdan", image: "Bogdan-Jakuschenko-Gruender-von-Invest4kids.webp", subtitle: "Gründer von Invest4kids" },
  { name: "Torben", image: "Torben-Kratzke-Experte-fuer-Kinderinvestments.webp", subtitle: "Experte für Kinderinvestments" },
  { name: "Alex", image: "Alexander-Min-Kim-Experte-fuer-Kinderinvestments.webp", subtitle: "Experte für Kinderinvestments" },
  { name: "Susanna", image: "Susanna-Schmitz-Expertin-fuer-Kinderinvestments.webp", subtitle: "Expertin für Kinderinvestments" },
  { name: "Tony", image: "Tony-Kotala-Experte-fuer-Kinderinvestments.webp", subtitle: "Experte für Kinderinvestments" },
  { name: "Janosch", image: "Janosch-Eisenbart-Experte-fuer-Kinderinvestments.webp", subtitle: "Experte für Kinderinvestments" },
  { name: "Till", image: "Till-Johan-Deraneck-Experte-fuer-Kinderinvestments.webp", subtitle: "Experte für Kinderinvestments" },
  { name: "Tim", image: "Tim-Ruser-Experte-fuer-Kinderinvestments.webp", subtitle: "Experte für Kinderinvestments" },
  { name: "Mallik", image: "Mallik-Godje-Issa-Experte-fuer-Kinderinvestments.webp", subtitle: "Experte für Kinderinvestments" },
  { name: "Glory", image: "Glory-Mayasi-Experte-fuer-Kinderinvestments.webp", subtitle: "Experte für Kinderinvestments" },
  { name: "Finn", image: "Finn-Diestel-Experte-fuer-Kinderinvestments.webp", subtitle: "Experte für Kinderinvestments" },
  { name: "Sofia", image: "Sofia-Lasovskaja-Expertin-fuer-Kinderinvestments.webp", subtitle: "Expertin für Kinderinvestments" },
  { name: "Bastian", image: "Bastian-Weise-Experte-fuer-Kinderinvestments.webp", subtitle: "Experte für Kinderinvestments" },
  { name: "Jerome", image: "Jerome-Joseph-Experte-fuer-Kinderinvestments.webp", subtitle: "Experte für Kinderinvestments" },
  { name: "Patrick", image: "Patrick-Makaryk-Experte-fuer-Kinderinvestments.webp", subtitle: "Experte für Kinderinvestments" },
  { name: "Felix", image: "Felix-Kleinhenz-Experte-fuer-Kinderinvestments.webp", subtitle: "Experte für Kinderinvestments" },
];

const CARD_W = 253;
const GAP = 24;
const EDGE_BUFFER = 2;

export default function TeamCarousel() {
  const teamCount = teamMembers.length;
  const [carouselMembers, setCarouselMembers] = useState(() => [
    ...teamMembers,
    ...teamMembers,
  ]);
  const [centerIndex, setCenterIndex] = useState(teamCount + 3);
  const [virtualStartIndex, setVirtualStartIndex] = useState(0);
  const [isIndexAdjusting, setIsIndexAdjusting] = useState(false);

  const prev = useCallback(() => {
    if (centerIndex <= EDGE_BUFFER) {
      setIsIndexAdjusting(true);
      setCarouselMembers((prevMembers) => [...teamMembers, ...prevMembers]);
      setVirtualStartIndex((prevValue) => prevValue - teamCount);
      setCenterIndex((prevIndex) => prevIndex + teamCount - 1);
      return;
    }

    setCenterIndex((i) => i - 1);
  }, [centerIndex, teamCount]);

  const next = useCallback(() => {
    if (centerIndex >= carouselMembers.length - (EDGE_BUFFER + 1)) {
      setCarouselMembers((prevMembers) => [...prevMembers, ...teamMembers]);
    }

    setCenterIndex((i) => i + 1);
  }, [centerIndex, carouselMembers.length]);

  const offset = centerIndex * (CARD_W + GAP) + CARD_W / 2;

  useEffect(() => {
    if (isIndexAdjusting) {
      const frame = requestAnimationFrame(() => {
        setIsIndexAdjusting(false);
      });

      return () => cancelAnimationFrame(frame);
    }
  }, [isIndexAdjusting]);

  return (
    <section className="bg-bg-cream">
      <div className="py-14 md:pt-25 md:pb-17.5 mx-auto w-full md:max-w-346.5">
        <div className="md:mx-35.75 flex flex-col md:flex-row items-center justify-between px-5 gap-y-5">
          <h2 className="text-center font-bold text-[27px] md:text-[28px] leading-[1.7]">
            Dein Team hinter Invest4Kids
          </h2>
          <a
            href="/team"
            className="items-center w-full justify-center border rounded-full transition-all duration-200 text-[16px] md:text-[18px] flex font-medium h-12.5 py-3.75 px-9 font-outfit border-accent-hover! bg-white!"
          >
            Mehr zum Team erfahren <ArrowRight width={16} height={16} className="ml-0.5" />
          </a>
        
        </div>

        <div className="overflow-x-hidden pt-20 z-10 pb-7.5 mt-8.5">
          <div
            className={`flex ease-in-out ${isIndexAdjusting ? "" : "transition-transform duration-500"}`}
            style={{
              gap: `${GAP}px`,
              transform: `translateX(calc(50% - ${offset}px))`,
            }}
          >
            {carouselMembers.map((member, idx) => (
              <TeamCard
                key={`${member.name}-${virtualStartIndex + idx}`}
                name={member.name}
                imageUrl={`${CDN_BASE}${member.image}`}
                subtitle={member.subtitle}
                isCenter={idx === centerIndex}
              />
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="-mt-13 flex items-center justify-center gap-5 relative z-20">
          <button
            onClick={prev}
            aria-label="Vorheriges Teammitglied"
            className="cursor-pointer p-2 hover:opacity-70 hover:text-accent-hover text-primary transition-colors duration-300"
          >
            <svg
              width="72"
              height="16"
              viewBox="0 0 72 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M70 8H2M2 8L9 1.5M2 8L9 14.5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Nächstes Teammitglied"
            className="cursor-pointer p-2 hover:opacity-70 hover:text-accent-hover text-primary transition-colors duration-300"
          >
            <svg
              width="72"
              height="16"
              viewBox="0 0 72 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8H70M70 8L63 1.5M70 8L63 14.5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>       
      </div>
    </section>
  );
}
