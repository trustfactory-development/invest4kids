import Image from "next/image";
import teamGetToKnowGroup from "@/assets/images/team/team-get-to-know-group.webp";

function CalendarIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.75" y="5.75" width="16.5" height="14.5" rx="2.25" />
      <path d="M7.5 3.75v4M16.5 3.75v4M3.75 9.75h16.5" />
      <path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01" />
    </svg>
  );
}

export default function ConsultationSection() {
  return (
    <section className="bg-bg-light-blue py-12.5 lg:py-25">
      <div className=" mx-auto grid w-full max-w-271 items-start gap-5 overflow-hidden px-5 sm:px-8 lg:grid-cols-[444px_minmax(0,1fr)] lg:items-center lg:gap-13 lg:px-0">
        {/* Left content */}
        <div className="justify-self-start">
          <header className="max-w-111.5">`
            <h1 className="font-poppins text-[27px] leading-tight font-bold md:font-extrabold text-text-medium md:text-[34px] tracking-[0.02em]">
              Unsere Beratung
            </h1>
            <p className="mt-5.5 max-w-111 hyphens-auto font-poppins text-[18px] lg:text-[20px] leading-normal font-medium text-[#485563]">
              Du willst für dein Kind finanziell vorsorgen, bist dir aber
              unsicher, was wirklich zu dir passt?
            </p>
          </header>

          <div className="w-full max-w-111 py-6">
            <div className="h-px w-full bg-primary-light" />
          </div>

          <div className="max-w-111.5">
            <p className="max-w-109.75 hyphens-auto font-outfit text-base lg:text-[18px] leading-[1.3] font-normal text-[#485563]">
              In unserer kostenlosen Beratung entwickeln wir in 30 Minuten
              eine Strategie, die perfekt auf deine Familiensituation
              abgestimmt ist ohne Vorwissen und ohne Verkaufsdruck. Wir
              kümmern uns um alles.
            </p>
          </div>

          <div className="mt-11 lg:mt-6">
            <button
              type="button"
              className="inline-flex h-12.5 w-full items-center justify-center gap-1 rounded-full bg-primary hover:bg-accent-hover cursor-pointer hover:text-text-medium duration-300 px-6 py-3.75 font-outfit text-base lg:text-[18px] leading-none font-semibold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark sm:w-auto sm:min-w-72.25 sm:px-9"
            >
              <CalendarIcon />
              <span>Kostenlose Beratung buchen</span>
            </button>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative w-full justify-self-stretch lg:mt-0 lg:min-h-[442px] lg:justify-self-start">
          <Image
            src={teamGetToKnowGroup}
            alt="Beratungsteam steht zusammen"
            width={575}
            height={442}
            preload
            className="ml-auto h-auto w-full max-w-none translate-y-10 object-contain object-right sm:translate-y-12 lg:absolute lg:right-0 lg:bottom-0 lg:w-[575px] lg:translate-y-0"
          />
        </div>
      </div>
    </section>
  );
}
