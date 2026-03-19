import Image from "next/image";
import { HeadphoneIcon } from "./PodcastIcons";

export default function NewPodcastHeroSection() {
  return (
    <section className="flex w-full flex-col items-center overflow-hidden bg-bg-light-blue px-5 py-[50px] lg:px-[30px] lg:pt-[100px] lg:pb-[150px]">
      <div className="flex w-full max-w-[1100px] flex-col justify-center">
        <div className="flex flex-col items-end gap-10 md:gap-25 lg:flex-row">
          <div className="min-w-0 flex-1 flex flex-col items-center md:items-start">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-300 bg-bg-cream px-4 py-1.5 pl-4 md:py-1 font-outfit text-[10px] md:text-xs text-[#4B5563]">
              <HeadphoneIcon />
              <span>Über 50 Folgen</span>
            </div>
            <h1 className="text-center md:text-left font-poppins text-[27px] font-bold leading-10 md:leading-[1.25] text-primary sm:text-[34px]">
              KINDERleicht Investieren –<span className="text-text-medium">der Podcast von Invest4Kids</span>
            </h1>
            <div className="w-full max-w-[150px] h-0.75 bg-primary-light my-3.75"></div>
            <p className="text-center md:text-left font-light md:font-normal max-w-[520px] font-outfit text-base md:leading-[1.6] text-text-medium">
              Einfach erklärt, direkt umsetzbar – Susanna & Torben zeigen dir, wie du mit ETFs, Steuervorteilen und dem richtigen Mindset das Beste für dein Kind rausholst.
            </p>
          </div>
          <div className="w-full max-w-[504px] shrink-0 overflow-hidden rounded-2xl lg:w-[504px]">
            <Image
              src="/podcast/hero-banner.webp"
              alt="Zwei Personen sprechen in einem Podcast vor Mikrofonen"
              width={1512}
              height={884}
              className="block h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
