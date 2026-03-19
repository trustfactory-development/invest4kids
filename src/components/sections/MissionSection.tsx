"use client";
import Image from "next/image";
import { Eye, Target } from "lucide-react";
import React from "react";

function InfoIcon({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-10.25 w-10.25 shrink-0 items-center justify-center rounded-full bg-[#84B7CA4D]">
      {children}
    </div>
  );
}

export default function MissionSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#F2FAFA_-2.06%,#FFFAEE_100%)]">
      <div className="mx-auto w-full max-w-275 px-5 py-14 sm:px-8 sm:py-16 lg:px-0 lg:py-25">
        {/* Intro card */}
        <article className="rounded-[28px] bg-white/72 px-5 py-6 shadow-[0_16px_30px_rgba(44,62,80,0.03)] backdrop-blur-[2px] sm:px-8 sm:py-8 lg:px-[34px] lg:py-[34px]">
          <div className="grid items-start gap-8 lg:grid-cols-[373px_minmax(0,1fr)] lg:gap-8">
            {/* Intro visual */}
            <div className="relative order-last mx-auto overflow-hidden rounded-3xl bg-bg-light-blue md:h-72.75 md:w-93.25 lg:order-first lg:h-72.75 lg:w-89 lg:max-w-none">
              <Image
                src="https://cdn-ilcgkon.nitrocdn.com/nagGuCyZytyRpkwQIcHQTdSzWgxfpvWP/assets/images/optimized/rev-96f7e66/invest4kids.de/wp-content/uploads/2025/11/image.png.webp"
                alt="Invest4Kids team portrait"
                width={1024}
                height={788}
                className="h-full w-full object-cover"
              />
            </div>
            
            {/* Intro content */}
            <div className="text-center lg:text-left ">
              <h2 className="mx-auto font-poppins text-[28px] leading-[1.2] font-extrabold  text-text-medium lg:mx-0">
                Invest4Kids ist die erste Anlaufstelle für Eltern, die clever
                und sicher für ihr Kind in ETFs investieren wollen.
              </h2>
              <div className="mt-4 space-y-5 font-outfit text-[18px] leading-[1.45] font-light  text-[#4B5563]">
                <p className="mx-auto max-w-160 lg:mx-0">
                  Invest4Kids hat es sich zur Aufgabe gemacht, Eltern beim
                  Vermögensaufbau für ihre Kinder zu unterstützen mit unserer
                  individuellen Beratung, verständlichen Erklärungen und einem
                  klaren Konzept.
                </p>
                <p className="mx-auto max-w-160 lg:mx-0">
                  Mit unserer spezialisierten Investmentberatung helfen wir
                  Familien in ganz Deutschland, maßgeschneiderte ETF-Lösungen
                  für ihre Kinder umzusetzen. Dabei legen wir Wert auf eine
                  einfache Struktur, volle Transparenz und langfristiges
                  Wachstum.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Mission and vision cards */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-6">
          <article className="space-y-6 min-h-46 rounded-[28px] bg-white/72 px-5 py-6 shadow-[0_16px_30px_rgba(44,62,80,0.03)] backdrop-blur-[2px] sm:px-8 sm:py-8 lg:min-h-[272px] lg:px-[34px] lg:py-[34px]">
            <div className="flex items-center gap-3">
              <InfoIcon>
                <Target className="h-5 w-5 text-primary" strokeWidth={1.8} />
              </InfoIcon>
              <h3 className="font-poppins text-[20px] leading-[1.35] font-medium tracking-[-0.02em] text-text-medium">
                Unsere Mission
              </h3>
            </div>
            <p className="font-outfit text-base md:text-[18px] leading-[1.2] font-light text-[#4B5563]">
              Wir wollen Eltern befähigen, kluge Finanzentscheidungen für ihre
              Kinder zu treffen und so Generationen nachhaltig absichern.
            </p>
          </article>

          <article className="space-y-6 min-h-46 rounded-[28px] bg-white/72 px-5 py-6 shadow-[0_16px_30px_rgba(44,62,80,0.03)] backdrop-blur-[2px] sm:px-8 sm:py-8 lg:min-h-[272px] lg:px-[34px] lg:py-[34px]">
            <div className="flex items-center gap-3">
              <InfoIcon>
                <Eye className="h-5 w-5 text-primary" strokeWidth={1.8} />
              </InfoIcon>
              <h3 className="font-poppins text-[20px] leading-[1.35] font-medium tracking-[-0.02em] text-text-medium">
                Unsere Vision
              </h3>
            </div>
            <div className="space-y-6 font-outfit text-base  md:text-[18px] leading-[1.2] font-light text-[#4B5563]">
              <p>
                Jedes Kind in Deutschland soll die Chance auf einen finanziell
                sicheren Start ins Leben haben.
              </p>
              <p>
                Wir glauben, dass finanzielle Bildung und verantwortungsvolle
                Investments bereits in der Kindheit beginnen und Familien die
                besten Partner dafür sind.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}