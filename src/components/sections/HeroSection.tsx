import Image from "next/image";
import Container from "../layout/Container";

const avatarMembers = ["patrick", "laila", "felix", "susanna"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#EBF4F8] pb-20 pt-16 md:pb-28 md:pt-24">
      <Container>
        <div className="relative grid items-center gap-10 md:grid-cols-2 md:gap-8 lg:gap-4 hyphens-auto">
          {/* Left — Text content */}
          <div className="relative z-10 max-w-[580px]">
            <h1 className="text-[32px] text-[#24344c] font-bold leading-[1.18] tracking-tight md:text-[34px]">
              Investieren f&uuml;r dein Kindeinfach, sinnvoll und mit Expert:innen an deiner Seite
            </h1>

            <div className="mt-8 flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <CheckIcon />
                <p className="text-[16px] leading-relaxed text-text-medium">
                  <span className="font-medium text-text-dark underline decoration-text-dark/30 underline-offset-2">
                    &oslash;25.703 &euro; mehr pro Kind
                  </span>
                  , durch unsere moderne ETF-Strategie
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon />
                <p className="text-[16px] leading-relaxed text-text-medium">
                  In einer 30 Minuten Videokonferenz bequem von Zuhause aus zum
                  perfekten ETF-Investment f&uuml;r dein Kind
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon />
                <p className="text-[16px] leading-relaxed text-text-medium">
                  Lehn dich zur&uuml;ck und sieh zu, wie das Verm&ouml;gen deines Kindes
                  w&auml;chst – unsere Experten k&uuml;mmern sich um den Rest
                </p>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="https://www.invest4kids-beratung.de/start/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-[0_4px_16px_rgba(19,58,125,0.25)] transition-all hover:bg-primary-dark hover:shadow-[0_6px_20px_rgba(19,58,125,0.35)]"
              >
                <svg
                  className="h-[18px] w-[18px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Kostenlose Beratung
              </a>
              <a
                href="/invest4kids-konzept"
                className="inline-flex items-center rounded-full border-2 border-primary/20 bg-white px-7 py-3.5 text-[15px] font-semibold text-primary transition-all hover:border-primary hover:bg-primary/5"
              >
                Wie funktioniert Invest4Kids?
              </a>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {avatarMembers.map((name) => (
                  <div
                    key={name}
                    className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white bg-primary-light/30"
                  >
                    <Image
                      src={`/images/team/${name}.webp`}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="36px"
                    />
                  </div>
                ))}
              </div>
              <p className="text-[15px] font-medium text-text-muted">
                5200+ Eltern vertrauen uns
              </p>
            </div>
          </div>

          {/* Right — Team photo with decorative elements */}
          <div className="relative flex items-center justify-center md:justify-end">
            {/* Decorative circles */}
            <div className="absolute -right-8 -top-12 h-20 w-20 rounded-full bg-primary-light/15 md:h-28 md:w-28" />
            <div className="absolute -left-4 top-4 h-5 w-5 rounded-full bg-primary-light/25 md:h-7 md:w-7" />
            <div className="absolute -bottom-6 right-16 h-8 w-8 rounded-full bg-primary-light/20 md:h-12 md:w-12" />
            <div className="absolute left-8 top-1/4 h-3 w-3 rounded-full bg-[#2ECC71]/40" />
            <div className="absolute right-4 top-8 h-4 w-4 rounded-full bg-[#2ECC71]/30" />
            <div className="absolute -right-4 bottom-1/3 h-14 w-14 rounded-full bg-primary-light/10 md:h-20 md:w-20" />

            {/* Cream/yellow tilted card behind the photo */}
            <div className="absolute z-0 h-[95%] w-[92%] -rotate-[2deg] rounded-2xl bg-[#FFF6D6]/70 md:right-0" />

            {/* Photo */}
            <div className="relative z-10 max-w-[520px] rotate-[1.5deg] overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(19,58,125,0.15)]">
              <Image
                src="/images/heroes/group-photo.webp"
                alt="Das Invest4Kids Team"
                width={540}
                height={360}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom wave/curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60V30C240 0 480 0 720 15C960 30 1200 45 1440 30V60H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center">
      <svg
        className="h-6 w-6 text-[#2ECC71]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
  );
}
