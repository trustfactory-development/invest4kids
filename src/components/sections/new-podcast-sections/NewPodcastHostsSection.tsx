import Image from "next/image";
import Link from "next/link";
import { QuoteIcon } from "./PodcastIcons";
import { ArrowRightIcon } from "lucide-react";

export default function NewPodcastHostsSection() {
  return (
    <section className="flex w-full flex-col items-center bg-[#FBFBFB] px-5 py-[50px] shadow-[0_1px_4px_0_rgba(0,0,0,0.05)] lg:px-[30px] lg:py-[100px]">
      <div className="flex w-full max-w-[1100px] flex-col items-center">
        {/* Header */}
        <div className="mb-[60px] text-center">
          <h2 className="mb-4 font-poppins text-[26px] font-extrabold text-primary md:text-[34px]">
            Lerne die Hosts kennen
          </h2>
          <p className="mx-auto max-w-[600px] font-outfit text-base md:text-lg leading-[1.6] text-text-medium">
            Hinter KINDERleicht Investieren stehen Susanna & Torben, zwei erfahrene Expert:innen für Kinderinvestments bei Invest4Kids.
          </p>
        </div>

        {/* Torben - image left, text right */}
        <div className="mb-[60px] flex w-full flex-col items-center md:gap-[50px] lg:flex-row md:justify-between">
          <div className="w-full max-w-[440px] shrink-0 overflow-hidden rounded-2xl lg:w-[440px]">
            <Image src="/podcast/host-torben.webp" alt="man" width={888} height={853} className="block h-auto w-full" />
          </div>
          <div className="min-w-0 flex-1 p-6 md:p-8.5 md:w-full md:max-w-[540px] shadow-xl bg-white rounded-2xl">
            <p className="mb-5 font-outfit text-base md:text-lg leading-[1.6] text-text-medium">
              Susanna begleitet täglich Familien dabei, clevere Strategien für die finanzielle Zukunft ihrer Kinder zu entwickeln.
            </p>
            <div className="flex items-start gap-3.5 rounded-xl bg-[#F9FAFB]">
              <QuoteIcon />
              <p className="font-poppins text-[15px] md:text-lg font-light leading-[1.5] text-primary">
                Die Zukunft ist unsicher. Ein Plan gibt Sicherheit, um Kinder zuverlässig zu unterstützen.
              </p>
            </div>
          </div>
        </div>

        {/* Susanna - text left, image right */}
        <div className="mb-[60px] flex w-full flex-col items-center md:gap-[50px] lg:flex-row md:justify-between">
          <div className="min-w-0 flex-1 max-lg:order-2 p-6 md:p-8.5 shadow-xl bg-white rounded-2xl flex flex-col md:w-full md:max-w-[540px]">
            <p className="mb-5 font-outfit text-base md:text-lg leading-[1.6] text-text-medium">
              Susanna begleitet täglich Familien dabei, clevere Strategien für die finanzielle Zukunft ihrer Kinder zu entwickeln.
            </p>
            <div className="flex items-start gap-3.5 rounded-xl bg-[#F9FAFB]">
              <QuoteIcon />
              <p className="font-poppins text-[15px] md:text-lg font-light leading-[1.5] text-primary">
                Die Zukunft ist unsicher. Ein Plan gibt Sicherheit, um Kinder zuverlässig zu unterstützen.
              </p>
            </div>
          </div>
          <div className="w-full max-w-[440px] shrink-0 overflow-hidden rounded-2xl max-lg:order-1 lg:w-[440px]">
            <Image src="/podcast/host-susanna.webp" alt="woman" width={846} height={1024} className="block h-auto w-full" />
          </div>
        </div>

        {/* Team - image left, text right */}
        <div className="flex w-full flex-col items-center md:gap-[50px] lg:flex-row md:justify-between">
          <div className="w-full max-w-[440px] shrink-0 overflow-hidden rounded-2xl lg:w-[440px]">
            <Image src="/podcast/host-team.webp" alt="women" width={888} height={729} className="block h-auto w-full" />
          </div>
          <div className="flex flex-col md:p-8.5 items-end md:w-full md:max-w-[540px] shadow-xl bg-white rounded-2xl">
            <p className="mb-5 font-outfit text-base md:text-lg leading-[1.6] text-text-medium p-6 md:p-0">
              Immer wieder sind auch Eltern aus dem Invest4Kids-Team zu Gast, darunter Laila und Maike sowie Gründer Bogdan, die ihre persönlichen Erfahrungen, Perspektiven und Geschichten aus der Beratung teilen.
            </p>
            <Link
              href="/team"
              className="inline-flex w-full md:w-auto max-w-[170px] items-center justify-center gap-2 rounded-full border border-primary-light px-7 py-3 font-outfit text-[16px] font-medium text-text-medium no-underline transition-colors duration-200 hover:border-primary hover:text-primary"
            >
              <span>Zum Team</span>
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
