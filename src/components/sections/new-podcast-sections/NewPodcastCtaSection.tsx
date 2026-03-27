import Image from "next/image";
import { HeadphoneLargeIcon } from "./PodcastIcons";

export default function NewPodcastCtaSection() {
  return (
    <section className="flex w-full flex-col items-center overflow-hidden bg-bg-light-blue px-5 py-[50px] lg:px-[30px] lg:py-[100px]">
      <div className="flex w-full max-w-[1100px] flex-col justify-center">
        <div className="flex flex-col items-center md:gap-[80px] gap-10 lg:flex-row">
          <div className="min-w-0 flex-1">
            <h1 className="mb-5 font-poppins text-[27px] font-bold md:font-extrabold leading-[1.25] text-text-medium sm:text-[32px]">
              Bereit, das Beste aus deinem Geld für dein Kind zu machen?
            </h1>
            <p className="mb-7 font-outfit text-base leading-[1.6] text-text-medium">
              Starte jetzt mit einer Folge, die dich inspiriert oder entdecke, wie du mit Invest4Kids ganz konkret für dein Kind investieren kannst. Egal ob du neu beginnst oder bereits investierst, hier findest du fundiertes Wissen und praktische Einblicke.
            </p>
            <div className="flex flex-nowrap flex-col gap-4 sm:flex-row">
              <a
                href="https://open.spotify.com/show/1250D6GILRDlZFw7mYwcvt?si=b6cbfe99f68c489d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center md:text-center md:leading-[1.1] justify-center gap-2.5 rounded-full bg-primary px-9 py-3.5 font-outfit text-[16px] md:text-[18px] font-semibold text-white no-underline transition-colors duration-200 hover:bg-primary-dark"
              >
                <HeadphoneLargeIcon />
                <span>Jetzt auf Spotify hören</span>
              </a>
              <a
                href="https://www.invest4kids-beratung.de/start"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center md:text-center md:leading-[1.1] justify-center gap-2.5 rounded-full border border-primary px-9 py-3.5 font-outfit text-[16px] md:text-[18px] font-semibold text-text-medium bg-bg-cream/80 no-underline transition-colors duration-200 hover:bg-primary hover:text-white"
              >
                Kostenlose Beratung sichern
              </a>
            </div>
          </div>
          <div className="w-full max-w-[420px] shrink-0 overflow-hidden rounded-2xl lg:w-[420px]">
            <Image
              src="/podcast/cta-cover.webp"
              alt="Menschen mit Mikrofon"
              width={889}
              height={888}
              className="block h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
