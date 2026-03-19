import Image from "next/image";
import Link from "next/link";
import Container from "../layout/Container";

const CDN_BASE =
  "https://cdn-ilcgkon.nitrocdn.com/nagGuCyZytyRpkwQIcHQTdSzWgxfpvWP/assets/images/optimized/rev-96f7e66/invest4kids.de/wp-content/uploads/";

const avatarMembers = [
  {
    name: "Patrick",
    src: `${CDN_BASE}2025/11/Patrick-Makaryk-Experte-fuer-Kinderinvestments.webp`,
  },
  {
    name: "Laila",
    src: `${CDN_BASE}2025/11/Laila-Moor-Expertin-fuer-Kinderinvestments.webp`,
  },
  {
    name: "Felix",
    src: `${CDN_BASE}2025/11/Felix-Kleinhenz-Experte-fuer-Kinderinvestments.webp`,
  },
  {
    name: "Susanna",
    src: `${CDN_BASE}2025/11/Susanna-Schmitz-Expertin-fuer-Kinderinvestments.webp`,
  },
];

export default function HeroSection() {
  return (
    <section className="relative bg-bg-light-blue px-5 pb-20 pt-12.5 md:pb-28 md:pt-[190px]">
      <Container>
        <div className="relative flex flex-col items-center gap-10 md:flex-row md:gap-6">
          {/* Left — Text content */}
          <div className="relative z-10 w-full md:w-[590px]">
            <h1 className="text-[27px] md:text-[34px] font-bold md:font-extrabold leading-10 md:leading-tight text-text-medium pb-[24px]">
              Investieren für dein Kind - einfach, sinnvoll und mit Expert:innen
              an deiner Seite
            </h1>
 
            <div className="flex flex-col gap-y-1 md:gap-y-2.5 font-outfit w-full pb-8.5">
              <div className="flex items-center gap-3 w-full">
                <CheckIcon />
                <p className="text-[16px] md:text-[18px] leading-6 text-[#4B5563]">
                  <span className="underline decoration-text-dark/30 underline-offset-2">
                    Ø25.703 € mehr pro Kind
                  </span>
                  , durch unsere moderne ETF-Strategie
                </p>
              </div>
              <div className="flex items-center gap-3 w-full">
                <CheckIcon />
                <p className="text-[16px] md:text-[18px] leading-6 text-[#4B5563]">
                  In einer 30 Minuten Videokonferenz bequem von Zuhause aus zum
                  perfekten ETF-Investment für dein Kind
                </p>
              </div>
              <div className="flex items-center gap-3 w-full">
                <CheckIcon />
                <p className="text-[16px] md:text-[18px] leading-6 text-[#4B5563]">
                  Lehn dich zurück und sieh zu, wie das Vermögen deines Kindes
                  wächst – unsere Experten kümmern sich um den Rest
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between font-outfit pb-4 gap-y-2.5 md:gap-y-0">
              <a
                href="https://funnel.perspective.co/60b7c8d2bcad43001f5c35a3/690b34a62100cd003c13e6ad/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full md:w-auto max-h-12.5 gap-1.5 rounded-full bg-primary px-9 py-[15px] text-[16px] md:text-[18px] font-medium text-white transition-all hover:bg-accent-hover hover:text-text-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" className="fill-current"><path fill="currentColor" d="M14.6667 1.30769H12.6667V0.653846C12.6667 0.480435 12.5964 0.314127 12.4714 0.191507C12.3464 0.0688871 12.1768 0 12 0C11.8232 0 11.6536 0.0688871 11.5286 0.191507C11.4036 0.314127 11.3333 0.480435 11.3333 0.653846V1.30769H4.66667V0.653846C4.66667 0.480435 4.59643 0.314127 4.4714 0.191507C4.34638 0.0688871 4.17681 0 4 0C3.82319 0 3.65362 0.0688871 3.5286 0.191507C3.40357 0.314127 3.33333 0.480435 3.33333 0.653846V1.30769H1.33333C0.979711 1.30769 0.640573 1.44547 0.390524 1.69071C0.140476 1.93595 0 2.26856 0 2.61538V15.6923C0 16.0391 0.140476 16.3717 0.390524 16.617C0.640573 16.8622 0.979711 17 1.33333 17H14.6667C15.0203 17 15.3594 16.8622 15.6095 16.617C15.8595 16.3717 16 16.0391 16 15.6923V2.61538C16 2.26856 15.8595 1.93595 15.6095 1.69071C15.3594 1.44547 15.0203 1.30769 14.6667 1.30769ZM3.33333 2.61538V3.26923C3.33333 3.44264 3.40357 3.60895 3.5286 3.73157C3.65362 3.85419 3.82319 3.92308 4 3.92308C4.17681 3.92308 4.34638 3.85419 4.4714 3.73157C4.59643 3.60895 4.66667 3.44264 4.66667 3.26923V2.61538H11.3333V3.26923C11.3333 3.44264 11.4036 3.60895 11.5286 3.73157C11.6536 3.85419 11.8232 3.92308 12 3.92308C12.1768 3.92308 12.3464 3.85419 12.4714 3.73157C12.5964 3.60895 12.6667 3.44264 12.6667 3.26923V2.61538H14.6667V5.23077H1.33333V2.61538H3.33333ZM14.6667 15.6923H1.33333V6.53846H14.6667V15.6923ZM9 9.48077C9 9.67475 8.94135 9.86437 8.83147 10.0257C8.72159 10.1869 8.56541 10.3126 8.38268 10.3869C8.19996 10.4611 7.99889 10.4805 7.80491 10.4427C7.61093 10.4049 7.43275 10.3114 7.29289 10.1743C7.15304 10.0371 7.0578 9.86236 7.01921 9.67211C6.98063 9.48186 7.00043 9.28466 7.07612 9.10544C7.15181 8.92623 7.27998 8.77306 7.44443 8.66529C7.60888 8.55752 7.80222 8.5 8 8.5C8.26522 8.5 8.51957 8.60333 8.70711 8.78726C8.89464 8.97119 9 9.22065 9 9.48077ZM12.6667 9.48077C12.6667 9.67475 12.608 9.86437 12.4981 10.0257C12.3883 10.1869 12.2321 10.3126 12.0493 10.3869C11.8666 10.4611 11.6656 10.4805 11.4716 10.4427C11.2776 10.4049 11.0994 10.3114 10.9596 10.1743C10.8197 10.0371 10.7245 9.86236 10.6859 9.67211C10.6473 9.48186 10.6671 9.28466 10.7428 9.10544C10.8185 8.92623 10.9466 8.77306 11.1111 8.66529C11.2755 8.55752 11.4689 8.5 11.6667 8.5C11.9319 8.5 12.1862 8.60333 12.3738 8.78726C12.5613 8.97119 12.6667 9.22065 12.6667 9.48077ZM5.33333 12.75C5.33333 12.944 5.27468 13.1336 5.1648 13.2949C5.05492 13.4562 4.89874 13.5819 4.71602 13.6561C4.53329 13.7303 4.33222 13.7498 4.13824 13.7119C3.94426 13.6741 3.76608 13.5807 3.62623 13.4435C3.48637 13.3063 3.39113 13.1316 3.35255 12.9413C3.31396 12.7511 3.33377 12.5539 3.40945 12.3747C3.48514 12.1955 3.61331 12.0423 3.77776 11.9345C3.94221 11.8268 4.13555 11.7692 4.33333 11.7692C4.59855 11.7692 4.8529 11.8726 5.04044 12.0565C5.22798 12.2404 5.33333 12.4899 5.33333 12.75ZM9 12.75C9 12.944 8.94135 13.1336 8.83147 13.2949C8.72159 13.4562 8.56541 13.5819 8.38268 13.6561C8.19996 13.7303 7.99889 13.7498 7.80491 13.7119C7.61093 13.6741 7.43275 13.5807 7.29289 13.4435C7.15304 13.3063 7.0578 13.1316 7.01921 12.9413C6.98063 12.7511 7.00043 12.5539 7.07612 12.3747C7.15181 12.1955 7.27998 12.0423 7.44443 11.9345C7.60888 11.8268 7.80222 11.7692 8 11.7692C8.26522 11.7692 8.51957 11.8726 8.70711 12.0565C8.89464 12.2404 9 12.4899 9 12.75ZM12.6667 12.75C12.6667 12.944 12.608 13.1336 12.4981 13.2949C12.3883 13.4562 12.2321 13.5819 12.0493 13.6561C11.8666 13.7303 11.6656 13.7498 11.4716 13.7119C11.2776 13.6741 11.0994 13.5807 10.9596 13.4435C10.8197 13.3063 10.7245 13.1316 10.6859 12.9413C10.6473 12.7511 10.6671 12.5539 10.7428 12.3747C10.8185 12.1955 10.9466 12.0423 11.1111 11.9345C11.2755 11.8268 11.4689 11.7692 11.6667 11.7692C11.9319 11.7692 12.1862 11.8726 12.3738 12.0565C12.5613 12.2404 12.6667 12.4899 12.6667 12.75Z"></path></svg>
                Kostenlose Beratung
              </a>
              <Link
                href="/invest4kids-konzept"
                className="inline-flex items-center justify-center w-full md:w-auto max-h-12.5 rounded-full border border-primary/40 bg-white px-9 py-[15px] text-[16px] md:text-[18px] font-medium text-text-medium"
              >
                Wie funktioniert Invest4Kids?
              </Link>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="flex -space-x-2.5">
                <Image
                    src={`https://cdn-ilcgkon.nitrocdn.com/nagGuCyZytyRpkwQIcHQTdSzWgxfpvWP/assets/images/optimized/rev-96f7e66/invest4kids.de/wp-content/uploads/2025/11/DMs-Stats-Images.webp`}
                    alt={'5200+ Eltern vertrauen uns'}
                    width={23}
                    height={23}
                    className="h-5.75 w-full"
                    unoptimized
                    priority
                  />
              </div>
              <p className="text-[16px] md:text-[18px] text-text-muted font-outfit">
                5200+ Eltern vertrauen uns
              </p>
            </div>
          </div>

          {/* Right — Team photo with decorative elements */}
          <div className="relative flex items-center justify-center md:justify-end max-w-[487px]">
            {/* Decorative bubbles closer to production layout (desktop) */}
            <div className="pointer-events-none absolute inset-0 hidden md:block">
              <div className="absolute left-2 -top-14 h-4 w-4 rounded-full bg-primary-light/35 animate-[wobbleSoft_18s_ease-in-out_infinite]" />
              <div className="absolute left-10 -top-2 h-8 w-8 rounded-full bg-accent/40 animate-[wobbleDrift_21s_ease-in-out_infinite] [animation-delay:-4s]" />
              <div className="absolute -left-8 top-6 h-6 w-6 rounded-full bg-primary-light/45 animate-[wobbleSoft_20s_ease-in-out_infinite] [animation-delay:-9s]" />
              <div className="absolute -left-28 bottom-2 h-11 w-11 rounded-full border border-primary-light/70 animate-[wobbleDrift_24s_ease-in-out_infinite] [animation-delay:-6s]" />
              <div className="absolute -right-10 bottom-14 h-14 w-14 rounded-full bg-primary-light/35 animate-[wobbleSoft_22s_ease-in-out_infinite] [animation-delay:-11s]" />
              <div className="absolute right-2 bottom-4 h-3.5 w-3.5 rounded-full bg-accent/60 animate-[wobbleDrift_19s_ease-in-out_infinite] [animation-delay:-3s]" />
            </div>

            {/* Photo */}
            <div className="relative z-10 bg-transparent md:mt-9 ">
              <Image
                src={`${CDN_BASE}2025/12/Group-photo.webp`}
                alt="Das Invest4Kids Team"
                width={1000}
                height={1000}
                className="h-auto md:w-[487px] object-cover bg-transparent"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CheckIcon() {
  return (
    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" fill="none"><path d="M10.3449 19.5002L4.16992 13.3252L5.71367 11.7815L10.3449 16.4127L20.2845 6.47314L21.8283 8.01689L10.3449 19.5002Z" fill="#009846"></path></svg>
    </div>
  );
}
