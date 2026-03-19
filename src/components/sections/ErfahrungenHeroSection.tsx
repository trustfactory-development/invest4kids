"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

type CountFormat = "integer-dot" | "decimal-comma" | "integer";

function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (!ref.current || seen) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [seen]);

  return { ref, seen };
}

function formatCount(value: number, format: CountFormat) {
  if (format === "integer-dot") return value.toLocaleString("de-DE");
  if (format === "decimal-comma") return value.toFixed(1).replace(".", ",");
  return String(value);
}

function CountNumber({
  end,
  duration = 1400,
  format,
  className = "",
}: {
  end: number;
  duration?: number;
  format: CountFormat;
  className?: string;
}) {
  const { ref, seen } = useInViewOnce<HTMLSpanElement>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!seen) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = end * eased;
      setValue(next);

      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [seen, end, duration]);

  const display =
    format === "decimal-comma"
      ? formatCount(value, format)
      : formatCount(Math.round(value), format);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

type Pin = {
  city: string;
  top: string;
  left: string;
};

const pins: Pin[] = [
  { city: "Hannover", top: "32%", left: "59%" },
  { city: "Hamburg", top: "21%", left: "54%" },
  { city: "Berlin", top: "23%", left: "83%" },
  { city: "Leipzig", top: "34%", left: "80%" },
  { city: "Düsseldorf", top: "43%", left: "28%" },
  { city: "Dresden", top: "42%", left: "92%" },
  { city: "Frankfurt", top: "61%", left: "55%" },
  { city: "Köln", top: "70%", left: "39%" },
  { city: "Stuttgart", top: "77%", left: "61%" },
  { city: "München", top: "88%", left: "76%" },
];

function MapPin({ city, top, left, index }: Pin & { index: number }) {
  return (
    <div
      className="absolute isolate"
      style={
        {
          top,
          left,
          "--pin-delay": `${index * 80}ms`,
        } as CSSProperties
      }
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 z-0 h-[28px] w-[28px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(86,128,194,0.4)] blur-[1px] animate-mapPinHalo sm:h-[30px] sm:w-[30px] md:h-[32px] md:w-[32px]"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 z-[1] h-[28px] w-[28px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(86,128,194,0.8)] animate-mapPinBeam sm:h-[30px] sm:w-[30px] md:h-[32px] md:w-[32px]"
      />

      <div
        className="group absolute top-0 left-0 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        aria-label={city}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          className="h-[20px] w-[20px] sm:h-[22px] sm:w-[22px] md:h-[24px] md:w-[24px] drop-shadow-[0_4px_10px_rgba(19,58,125,0.2)]"
          aria-hidden="true"
        >
          <rect x="1" y="1" width="23" height="23" rx="11.5" fill="url(#pg)" />
          <rect
            x="1"
            y="1"
            width="23"
            height="23"
            rx="11.5"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M17.1412 10.6429C17.1412 13.2071 14.8198 16.4001 12.4984 19.0001C10.2698 16.4001 7.85547 13.2071 7.85547 10.6429C7.85547 8.07869 9.93416 6 12.4984 6C15.0626 6 17.1412 8.07869 17.1412 10.6429Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="pg"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop stopColor="#84B7CA" />
              <stop offset="1" stopColor="#133A7D" />
            </linearGradient>
          </defs>
        </svg>

        <span className="pointer-events-none absolute left-1/2 top-[-34px] -translate-x-1/2 translate-y-[4px] whitespace-nowrap rounded-full bg-[#2C3E50] px-[10px] py-[7px] text-[12px] leading-none text-white opacity-0 shadow-[0_6px_18px_rgba(0,0,0,0.18)] transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
          {city}
        </span>
      </div>
    </div>
  );
}

export default function ErfahrungenHeroSection() {
  return (
    <section className="bg-[#EFFAFD] px-[20px] py-[60px] sm:px-[24px] sm:py-[80px] md:px-[30px] md:py-[150px]">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-[24px] lg:grid-cols-[1fr_auto] lg:gap-[30px]">
        {/* LEFT */}
        <div className="max-w-[530px] w-full">
          <div className="inline-flex items-center gap-[12px] rounded-full border border-[#F8BF3C] bg-[#FFFAEE] px-[16px] py-[5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="h-[12px] w-[12px] shrink-0"
              aria-hidden="true"
            >
              <path
                d="M8.34375 1.875C7.37578 1.875 6.52828 2.29125 6 2.99484C5.47172 2.29125 4.62422 1.875 3.65625 1.875C2.88573 1.87587 2.14702 2.18234 1.60218 2.72718C1.05734 3.27202 0.750868 4.01073 0.75 4.78125C0.75 8.0625 5.61516 10.7184 5.82234 10.8281C5.87695 10.8575 5.93799 10.8729 6 10.8729C6.06201 10.8729 6.12305 10.8575 6.17766 10.8281C6.38484 10.7184 11.25 8.0625 11.25 4.78125C11.2491 4.01073 10.9427 3.27202 10.3978 2.72718C9.85298 2.18234 9.11427 1.87587 8.34375 1.875ZM6 10.0688C5.14406 9.57 1.5 7.29797 1.5 4.78125C1.50074 4.20961 1.72816 3.66159 2.13237 3.25737C2.53659 2.85316 3.08461 2.62574 3.65625 2.625C4.56797 2.625 5.33344 3.11063 5.65312 3.89062C5.68138 3.9594 5.72944 4.01823 5.7912 4.05963C5.85297 4.10103 5.92564 4.12314 6 4.12314C6.07436 4.12314 6.14703 4.10103 6.2088 4.05963C6.27056 4.01823 6.31862 3.9594 6.34687 3.89062C6.66656 3.10922 7.43203 2.625 8.34375 2.625C8.91539 2.62574 9.46341 2.85316 9.86763 3.25737C10.2718 3.66159 10.4993 4.20961 10.5 4.78125C10.5 7.29422 6.855 9.56953 6 10.0688Z"
                fill="#4B5563"
              />
            </svg>

            <span className="text-[11px] leading-none font-outfit font-[500] text-[#4F5D73] sm:text-[12px]">
              Erfahrungen mit Invest4Kids
            </span>
          </div>

          <h1 className="mt-[16px] text-[24px] leading-[1.25] font-[800] tracking-[-0.02em] text-[#2C3E50] sm:text-[27px] md:text-[34px]">
            Immer noch unsicher, ob wir die <span className="text-primary">richtige Wahl</span> für deine Familie sind?
          </h1>

          <p className="mt-[16px] mb-[50px] max-w-[536px] font-outfit text-[14px] leading-[23px] font-[300] text-[#4B5563] sm:text-[16px] md:text-[18px]">
            Lass Dich nicht von uns überzeugen – höre direkt von Eltern,
            die bereits mit uns für ihr Kind vorgesorgt haben
          </p>

          <div className="flex items-start gap-[30px] sm:gap-[50px] md:gap-[80px]">
            <div className="text-center">
              <div className="flex items-end justify-center gap-[2px] text-primary">
                <CountNumber
                  end={5200}
                  format="integer-dot"
                  className="text-[22px] leading-[1.25] font-[800] sm:text-[27px] md:text-[34px]"
                />
                <span className="text-[22px] leading-[1.25] font-[800] sm:text-[27px] md:text-[34px]">
                  +
                </span>
              </div>
              <p className="mt-[7px] font-outfit text-[14px] leading-[23px] font-[300] text-[#4B5563] sm:text-[16px] md:text-[18px]">
                Familien
                <br />
                beraten
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-end justify-center gap-[2px] text-primary">
                <CountNumber
                  end={4.9}
                  format="decimal-comma"
                  className="text-[22px] leading-[1.25] font-[800] sm:text-[27px] md:text-[34px]"
                />
                <span className="text-[22px] leading-[1.25] font-[800] sm:text-[27px] md:text-[34px]">
                  ★
                </span>
              </div>
              <p className="mt-[7px] font-outfit text-[14px] leading-[23px] font-[300] text-[#4B5563] sm:text-[16px] md:text-[18px]">
                auf Trustpilot &amp;
                <br />
                Google
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-end justify-center gap-[2px] text-primary">
                <CountNumber
                  end={100}
                  format="integer"
                  className="text-[22px] leading-[1.25] font-[800] sm:text-[27px] md:text-[34px]"
                />
                <span className="text-[22px] leading-[1.25] font-[800] sm:text-[27px] md:text-[34px]">
                  %
                </span>
              </div>
              <p className="mt-[7px] font-outfit text-[14px] leading-[23px] font-[300] text-[#4B5563] sm:text-[16px] md:text-[18px]">
                unabhängig
                <br />
                beraten
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT MAP */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[260px] sm:max-w-[290px] md:max-w-[313px]">
            <img
              src="https://invest4kids.de/wp-content/uploads/2025/11/map-blur.webp"
              alt="map"
              className="h-auto w-full object-contain"
              draggable={false}
            />

            {pins.map((pin, index) => (
              <MapPin key={pin.city} {...pin} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
