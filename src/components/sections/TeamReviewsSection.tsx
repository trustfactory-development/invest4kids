"use client";

import Image from "next/image";
import googleGLogo from "@/assets/images/team/google-g-logo.png";
import { useEffect, useMemo, useRef, useState } from "react";

type Review = {
  id: string;
  name: string;
  ago: string;
  text: string;
  initial: string;
  avatarColor: string;
};

const reviews: Review[] = [
  {
    id: "maili",
    name: "Maili Becker",
    ago: "vor 1 Woche",
    text: "Ich war sehr zufrieden mit Invest4Kids. Mein Berater Bastian ist ein toller Ansprechpartner gewesen. Kann man nur weiter empfehlen.",
    initial: "M",
    avatarColor: "#69A1AA",
  },
  {
    id: "sebastian",
    name: "Sebastian Griep",
    ago: "vor 2 Tagen",
    text: "Höflich, Nett und Geduldig.",
    initial: "S",
    avatarColor: "#684A3F",
  },
  {
    id: "boris",
    name: "Boris Kaiser",
    ago: "vor 2 Tagen",
    text: "So muss moderne Investment-Beratung funktionieren. Wir hatten bei Invest4Kids vom ersten Gespräch bis zum Abschluss unserer Verträge immer das Gefühl, se...",
    initial: "B",
    avatarColor: "#4A8D33",
  },
  {
    id: "daniela",
    name: "Daniela Schmidt",
    ago: "vor 5 Tagen",
    text: "Das Beratungsgespräch war sehr nett und professionell.",
    initial: "D",
    avatarColor: "#2F6C22",
  },
  {
    id: "linh",
    name: "Linh Pfeifer",
    ago: "vor 1 Woche",
    text: "Die Beratung war von Anfang an sehr professionell, transparent und verständlich erklärt. Susanna hat sich viel Zeit genommen, um alle Fragen...",
    initial: "L",
    avatarColor: "#D8B399",
  },
];

export function TeamReviewsSection() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const gap = 14;

  const cardsPerView = viewportWidth >= 1024 ? 3 : viewportWidth >= 700 ? 2 : 1;

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? 0;
      setViewportWidth(width);
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cardWidth = useMemo(() => {
    if (!viewportWidth) return 343;
    if (viewportWidth >= 1024) return 343;
    if (viewportWidth >= 700) return 343;
    return Math.min(346, Math.max(300, viewportWidth - 32));
  }, [viewportWidth]);

  const sideOffset = useMemo(() => {
    if (!viewportWidth) return 0;
    const occupiedWidth = cardsPerView * cardWidth + (cardsPerView - 1) * gap;
    return Math.max(0, (viewportWidth - occupiedWidth) / 2);
  }, [cardWidth, cardsPerView, viewportWidth]);

  const maxIndex = Math.max(0, reviews.length - cardsPerView);
  const safeIndex = Math.min(index, maxIndex);

  useEffect(() => {
    if (isPaused || maxIndex === 0) return;

    const timer = window.setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => window.clearInterval(timer);
  }, [isPaused, maxIndex]);

  const trackStyle = {
    transform: `translateX(-${safeIndex * (cardWidth + gap)}px)`,
  } as const;

  const handlePrev = () => {
    setIsPaused(true);
    setIndex(() => Math.max(0, safeIndex - 1));
  };

  const handleNext = () => {
    setIsPaused(true);
    setIndex(() => Math.min(maxIndex, safeIndex + 1));
  };

  return (
    <section className="bg-[#FBFBFB] px-5 py-[100px] lg:px-[30px] lg:py-[150px]">
      <div className="mx-auto w-full max-w-[1100px]">
        <h2 className="mb-[34px] text-center font-poppins text-[27px] leading-[150%] font-bold md:font-extrabold text-text-medium md:text-[34px] md:leading-[125%]">
          Was Familien über unser Team sagen
        </h2>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous reviews"
            className="absolute left-[-8px] top-1/2 z-10 inline-flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#D2D2D2] bg-[#F4F4F4] transition-colors hover:bg-[#4d4d4d] disabled:cursor-default disabled:hover:bg-[#F4F4F4] md:left-[-16px] [&:hover_svg_path]:stroke-white"
            disabled={safeIndex === 0}
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" aria-hidden="true">
              <path
                d="M7 1L1 7L7 13"
                stroke="#6B6B6B"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div ref={viewportRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                ...trackStyle,
                gap: `${gap}px`,
                paddingLeft: `${sideOffset}px`,
                paddingRight: `${sideOffset}px`,
              }}
            >
              {reviews.map((review) => (
                <article
                  key={review.id}
                  className="shrink-0 rounded-[14px] border border-[#E9E9E9] bg-white p-5 shadow-[2px_8px_20px_0_rgba(0,0,0,0.04)]"
                  style={{ width: cardWidth, minHeight: 234 }}
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-full font-poppins text-[28px] leading-none font-medium text-white"
                        style={{ backgroundColor: review.avatarColor }}
                      >
                        {review.initial}
                      </div>
                      <div>
                        <p className="font-poppins text-[16px] leading-[1.05] font-bold text-[#111111]">
                          {review.name}
                        </p>
                        <p className="font-poppins text-[14px] leading-[1.1] text-[#9A9A9A]">
                          {review.ago}
                        </p>
                      </div>
                    </div>

                    <Image
                      src={googleGLogo}
                      alt="Google image"
                      width={20}
                      height={20}
                      className="mt-1 h-5 w-5"
                    />
                  </div>

                  <div className="mb-2 flex items-center gap-1">
                    <span className="text-[20px] leading-none text-[#F4B400]">★★★★★</span>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M7.5 0.75L9.06 1.79L10.94 1.58L11.69 3.32L13.43 4.07L13.22 5.95L14.25 7.5L13.22 9.05L13.43 10.93L11.69 11.68L10.94 13.42L9.06 13.21L7.5 14.25L5.94 13.21L4.06 13.42L3.31 11.68L1.57 10.93L1.78 9.05L0.75 7.5L1.78 5.95L1.57 4.07L3.31 3.32L4.06 1.58L5.94 1.79L7.5 0.75Z"
                        fill="#4A90E2"
                      />
                      <path
                        d="M6.15 9.45L4.63 7.93L3.87 8.69L6.15 10.97L11.13 5.99L10.37 5.23L6.15 9.45Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                  </div>

                  <p className="font-poppins text-[14px] leading-normal font-normal text-[#121212]">
                    {review.text}
                  </p>
                  {review.text.includes("...") ? (
                    <p className="mt-2 font-poppins text-[14px] leading-[1.2] text-[#7E7E7E]">
                      Weiterlesen
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next reviews"
            className="absolute right-[-8px] top-1/2 z-10 inline-flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#D2D2D2] bg-[#F4F4F4] transition-colors hover:bg-[#4d4d4d] disabled:cursor-default disabled:hover:bg-[#F4F4F4] md:right-[-16px] [&:hover_svg_path]:stroke-white"
            disabled={safeIndex === maxIndex}
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" aria-hidden="true">
              <path
                d="M1 1L7 7L1 13"
                stroke="#6B6B6B"
                strokeWidth="1.8"
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
