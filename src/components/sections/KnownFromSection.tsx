import Image from "next/image";

const logos = [
  {
    alt: "Forbes logo",
    src: "https://cdn-ilcgkon.nitrocdn.com/nagGuCyZytyRpkwQIcHQTdSzWgxfpvWP/assets/images/optimized/rev-96f7e66/invest4kids.de/wp-content/uploads/2024/10/logo-8.png",
    width: 64,
    height: 64,
  },
  {
    alt: "Business Insider logo",
    src: "https://cdn-ilcgkon.nitrocdn.com/nagGuCyZytyRpkwQIcHQTdSzWgxfpvWP/assets/images/optimized/rev-96f7e66/invest4kids.de/wp-content/uploads/2024/11/Design-ohne-Titel.png",
    width: 56,
    height: 56,
  },
  {
    alt: "Stern logo",
    src: "https://cdn-ilcgkon.nitrocdn.com/nagGuCyZytyRpkwQIcHQTdSzWgxfpvWP/assets/images/optimized/rev-96f7e66/invest4kids.de/wp-content/uploads/2024/11/unnamed677.png",
    width: 128,
    height: 128,
  },
  {
    alt: "WELT logo",
    src: "https://cdn-ilcgkon.nitrocdn.com/nagGuCyZytyRpkwQIcHQTdSzWgxfpvWP/assets/images/optimized/rev-96f7e66/invest4kids.de/wp-content/uploads/2024/11/2-1.png",
    width: 96,
    height: 129,
  },
  {
    alt: "BILD logo",
    src: "https://cdn-ilcgkon.nitrocdn.com/nagGuCyZytyRpkwQIcHQTdSzWgxfpvWP/assets/images/optimized/rev-96f7e66/invest4kids.de/wp-content/uploads/2024/11/1-1.png",
    width: 96,
    height: 129,
  },
];

const trackLogos = [...logos, ...logos, ...logos];

export default function KnownFromSection() {
  return (
    <section className="w-full bg-white py-[52px] md:py-16 lg:py-[72px]">
      <div className="w-full">
        <h2 className="mb-[22px] text-center font-poppins text-[27px] leading-[1.35] font-bold text-text-medium md:mb-8 md:text-[32px] md:leading-[1.25] lg:text-[34px]">
          Bekannt aus
        </h2>

        <div
          className="group relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          }}
        >
          <div className="animate-known-from-marquee flex will-change-transform group-hover:[animation-play-state:paused]">
            {trackLogos.map((logo, index) => (
              <div
                className="relative mx-3 flex h-12 w-[122px] flex-none items-center justify-center md:mx-4 md:h-14 md:w-[150px] lg:w-[170px]"
                key={`${index}`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-full w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
