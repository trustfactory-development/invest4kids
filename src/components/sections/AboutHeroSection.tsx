import Image from "next/image";
import aboutHeroGroupPhoto from "@/assets/images/about/about-hero-group-photo.webp";
import { Heart } from "lucide-react";

export function AboutHeroSection() {
  return (
    <section className="bg-bg-light-blue">
      <div className="mx-auto grid w-full max-w-275 items-center gap-10 px-6 py-14 sm:px-8 sm:py-16 lg:grid-cols-[470px_530px] lg:gap-23.75 lg:px-0 lg:py-40">
        <div className="flex flex-col items-center text-left md:items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent bg-[#fffaee] px-4 py-1.5 font-outfit text-[10px] leading-none font-normal text-[#4B5563] md:text-[12px]">
            <Heart className="h-3.5 w-3.5 text-[#4B5563]" strokeWidth={1.8} />
            <span>Mit Liebe seit 2020</span>
          </div>

          <h1 className="mt-4 text-center font-poppins text-[27px] leading-[1.6] md:leading-[1.18] font-bold tracking-[-0.03em] text-text-medium md:text-[34px] lg:max-w-90">
            Wer hinter <br />
            <span className="text-[#133a7d]">Invest4Kids</span> steckt
          </h1>

          <p className="mt-4 max-w-130 text-center font-outfit text-[16px] leading-[1.45] font-light text-[#4B5563] md:mx-0 md:text-start md:text-[18px] lg:max-w-117.5">
            Wir begleiten Familien auf dem Weg zu einem sicheren
            finanziellen Fundament für ihre Kinder – mit Herz, Verstand und
            einer klaren Mission. Als <strong className="font-medium">Beratungsunternehmen für Kinderinvestments</strong> zeigen 
            wir Eltern verständlich, individuell und nachhaltig den Weg
            in eine abgesicherte Zukunft.
          </p>

          <p className="mt-3 max-w-130 text-center font-outfit text-[16px] leading-[1.45] font-normal text-[#4B5563] md:mx-0 md:text-start md:text-[18px] lg:max-w-117.5">
            Hier erfährst du, was uns antreibt, wer wir sind und warum sich
            bereits tausende Eltern für Invest4Kids entschieden haben.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-93 md:max-w-182 lg:max-w-none">
          <Image
            src={aboutHeroGroupPhoto}
            alt="The Invest4Kids team"
            width={530}
            height={350}
            preload
            className="relative h-[245.66px] w-93 rounded-2xl object-cover md:h-full md:w-full lg:h-87.5 lg:w-132.5"
          />
        </div>
      </div>
    </section>
  );
}
