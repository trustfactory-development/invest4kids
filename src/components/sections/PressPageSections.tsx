"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Landmark, Users, BadgeCheck, Heart, Mail } from "lucide-react";
import MapVimeoSection from "@/components/sections/MapVimeoSection";
import groupPhoto from "@/assets/images/home/hero/group-photo.webp";
import pressContactImage from "@/assets/images/press/sabrina-rymarowicz.png";
import pressVideoCover from "@/assets/images/press/video-cover-presse.jpg";

const stats = [
  {
    title: "Gründung von Invest4Kids",
    value: "2020",
    icon: <Landmark className="h-7 md:h-4 md:w-4" aria-hidden="true" />,
  },
  {
    title: "Heute mehr als",
    value: "35 Mitarbeiter:innen",
    icon: <Users className="h-7 md:h-4 md:w-4" aria-hidden="true" />,
  },
  {
    title: "Spezialisiert auf",
    value: "Kinderinvestments",
    icon: <BadgeCheck className="h-7 md:h-4 md:w-4" aria-hidden="true" />,
  },
  {
    title: "Bereits über",
    value: "5200 Elternberatungen",
    icon: <Heart className="h-7 md:h-4 md:w-4" aria-hidden="true" />,
  },
];

const pressReviewItems = [
  {
    source: "Verbraucherschutz",
    date: "28.04.2025",
    title:
      "Invest4Kids seriös: Das sagen Verbraucherschützer und Experten",
    href: "https://verbraucherschutz.tv/invest4kids-serioes/",
  },
  {
    source: "Altkreis Blitz",
    date: "11.04.2025",
    title:
      "Studie: Jugendliche geben plötzlich verfügbares Geld häufig unüberlegt aus",
    href: "https://www.altkreisblitz.de/2025/04/11/studie-jugendliche-geben-ploetzlich-verfuegbares-geld-haeufig-unueberlegt-aus/",
  },
  {
    source: "ABG TV",
    date: "11.04.2025",
    title: "So schnell geben junge Erwachsene ihr Geld aus",
    href: "https://www.altenburg.tv/nachrichten/20756/So_schnell_geben_junge_Erwachsene_ihr_Geld_aus.html",
  },
  {
    source: "News.de",
    date: "17.01.2025",
    title:
      "Finanzielle Meilensteine für Kinder: Wie viel sollten Eltern für Führerschein, Studium und Co. zurücklegen?",
    href: "https://www.news.de/verbraucher/858301484/clever-sparen-fuer-kinder-zukunft-planen-mit-invest4kids/1/",
  },
  {
    source: "PRINZ.de",
    date: "10.01.2025",
    title: "Im Praxistest: So seriös ist Invest4Kids wirklich",
    href: "https://prinz.de/leipzig/artikel/im-praxistest-so-serioes-ist-invest4kids-wirklich/",
  },
  {
    source: "KINDER.de",
    date: "23.12.2024",
    title:
      "Steuerersparnisse und niedrige Kosten bei ETFs: So maximiert Invest4Kids das Kapital deines Kindes",
    href: "https://www.kinder.de/spartipps-im-haushalt/steuerersparnisse-und-niedrige-kosten-bei-etfs-so-maximiert-invest4kids-das-kapital-deines-kindes/",
  },
  {
    source: "Allgemeine Zeitung",
    date: "23.12.2024",
    title: "Beratungskonzept der Nummer 1 für Kinderinvestments",
    href: "https://www.azonline.de/welt/ratgeber/finanzen/invest4kids-erfahrungen-die-wahrheit-ueber-das-beratungskonzept-der-nummer-1-fuer-kinderinvestments-3215441",
  },
  {
    source: "MarktSpiegel",
    date: "22.04.2025",
    title:
      "Vom Sparbuch bis zum ETF – so sichern Eltern die finanzielle Zukunft ihrer Kinder",
    href: "https://www.marktspiegel.de/nuernberg/c-ratgeber/vom-sparbuch-bis-zum-etf-so-sichern-eltern-die-finanzielle-zukunft-ihrer-kinder_a121185#gallery=null",
  },
  {
    source: "Sachsen-net",
    date: "18.03.2025",
    title:
      "Sicher investieren – wie ETF-Versicherungen langfristige Stabilität bieten",
    href: "https://sachsen-net.com/ratgeber/sicher-investieren-wie-etf-versicherungen-langfristige-stabilitaet-bieten/",
  },
  {
    source: "Der Reporter",
    date: "01.07.2025",
    title:
      "Sicher investieren: Warum Invest4Kids klassische Kindersparbücher alt aussehen lässt",
    href: "https://www.der-reporter.de/ratgeber/thema/ratgeber/artikel/sicher-investieren-warum-invest4kids-klassische-kindersparbuecher-alt-aussehen-laesst",
  },
  {
    source: "Ulm-News",
    date: "16.06.2025",
    title:
      "Von Anfang an richtig investieren: Wie Invest4Kids das Sparen für Kinder revolutioniert",
    href: "https://www.ulm-news.de/weblog/ulm-news/view/dt/3/article/101147/Von_Anfang_an_richtig_investieren%3A_Wie_Invest4Kids_das_Sparen_f-uuml-r_Kinder_revolutioniert.html",
  },
  {
    source: "Bochumer Zeitung",
    date: "Artikel",
    title:
      "Kinderdepot oder Kostenfalle? Was Eltern jetzt über Gebührenexplosionen wissen sollten",
    href: "https://www.bochumer-zeitung.com/aktuell-aktuell/vermischtes/87300614-kinderdepot-oder-kostenfalle-was-eltern-jetzt-%C3%BCber-geb%C3%BChrenexplosionen-wissen-sollte",
  },
  {
    source: "Frankfurt Live",
    date: "06.06.2025",
    title:
      "Wie Eltern und Großeltern gemeinsam für die Zukunft der Kinder investieren können",
    href: "https://www.frankfurt-live.com/wie-eltern-und-grosseltern-gemeinsam-fuer-die-zukunft-der-kinder-investieren-koennen",
  },
  {
    source: "Finanzen und Wirtschaft",
    date: "11.06.2025",
    title:
      "Kinder-Geldanlage in der Inflation: Wie Eltern jetzt sinnvoll vorsorgen können",
    href: "https://finanzen-und-wirtschaft.de/kinder-geldanlage-in-der-inflation-wie-eltern-jetzt-sinnvoll-vorsorgen-koennen/",
  },
  {
    source: "branchenleader.",
    date: "Juni 2025",
    title:
      "Sparplan für Kinder: Warum eine solide Strategie wichtiger ist als ein gutes Produkt",
    href: "https://branchenleader.com/sparplan-fur-kinder/",
  },
  {
    source: "Klamm.de",
    date: "03.07.2025",
    title:
      "Die größten Fehler, die Eltern machen, wenn sie ihren Kindern Geld schenken",
    href: "https://www.klamm.de/news/die-groessten-fehler-die-eltern-machen-wenn-sie-ihren-kindern-geld-schenken-52N175de.html",
  },
] as const;

function PressVideoCard() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full overflow-hidden rounded-[20px] shadow-[2px_8px_20px_rgba(0,0,0,0.04)]">
      <div className="relative aspect-video w-full overflow-hidden rounded-[20px]">
        {isPlaying ? (
          <iframe
            src="https://www.youtube.com/embed/uHQtxoGJjXs?autoplay=1&rel=0"
            title="Invest4Kids Pressevideo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label="Invest4Kids Pressevideo abspielen"
            className="group relative block h-full w-full cursor-pointer"
          >
            <Image
              src={pressVideoCover}
              alt="Invest4Kids Pressevideo Cover"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/20" />
            <div className="absolute left-1/2 top-1/2 flex h-[48px] w-[48px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[10px] bg-[rgba(0,0,0,0.62)] transition-transform duration-300 group-hover:scale-[1.04]">
              <svg
                viewBox="0 0 27 30"
                className="ml-[2px] h-[30px] w-[27px] fill-white"
                aria-hidden="true"
              >
                <polygon points="0,0 0,30 27,15" />
              </svg>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

export function PressPageSections() {
  return (
    <>
      <section className="bg-[linear-gradient(174deg,#133A7D_0%,#006F99_100%)] px-5 py-[50px] md:px-6 lg:px-0">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
          <h1 className="font-poppins text-[27px] leading-[150%] font-extrabold text-white md:text-[34px] md:leading-[125%]">
            Presseportal
          </h1>
          <p className="mt-4 max-w-[776px] font-outfit text-[16px] leading-[126%] font-light text-white md:text-[18px] md:leading-[32px]">
            Hier findest du alle Informationen und Veröffentlichungen von Invest4Kids
          </p>
        </div>
      </section>

      <section className="bg-[#FBFBFB] px-5 py-[50px] md:px-6 lg:px-0">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-[34px] lg:gap-[50px]">
          <div className="flex flex-col gap-[34px] lg:flex-row lg:items-center lg:justify-between lg:gap-[78px]">
            <div className="w-full lg:max-w-[544px] text-center lg:text-left">
              <h2 className="font-poppins text-[27px] leading-[150%] font-extrabold text-[#2C3E50] md:text-[34px] md:leading-[125%]">
                Über Invest4Kids
              </h2>
              <div className="py-3">
                <div className="h-[2px] w-full max-w-[300px] bg-[#84B7CA]" />
              </div>
              <p className="font-outfit text-[16px] leading-[126%] font-light px-2 md:px-0 text-[#4B5563] md:text-[18px] md:leading-[32px]">
                Invest4Kids wurde 2020 in Kiel gegründet und umfasst heute 36
                Mitarbeiter:innen. Seit der Gründung haben die
                Investmentexpert:innen bereits über 5200 Familien beraten und
                sind mit dieser Expertise auf die Bedürfnisse von Familien und
                Kinderinvestment spezialisiert.
              </p>
            </div>

            <div className="w-full lg:max-w-[478px]">
              <PressVideoCard />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-6">
            {stats.map((stat) => (
              <article
                key={stat.title}
                className="text-center rounded-[20px] bg-white px-6 py-6 shadow-[2px_8px_20px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[2px_8px_20px_rgba(0,0,0,0.09)] md:px-[34px] md:py-[34px]"
              >
                <div className="mx-auto md:mx-0 flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#84B7CA4D] text-text-medium">
                  {stat.icon}
                </div>
                <p className="max-w-[150px] mx-auto md:mx-0 mt-5 font-outfit text-[16px] leading-[126%] font-light text-[#4B5563] md:text-[18px] md:leading-[23px]">
                  {stat.title} <span className="font-bold">{stat.value}</span> 
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFFDF8] px-5 py-[50px] md:px-6 lg:px-0 lg:py-[100px]">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-[34px]">
          <div className="flex flex-col gap-[34px] lg:flex-row lg:items-center lg:justify-between lg:gap-[43px]">
            <div className="w-full lg:max-w-[513px]">
              <Image
                src={groupPhoto}
                alt="Gruppenfoto des Invest4Kids Teams, das Eltern bei Finanzberatung unterstützt"
                width={1026}
                height={676}
                sizes="(max-width: 1024px) 100vw, 513px"
                className="h-auto w-full rounded-[20px]"
              />
            </div>

            <div className="flex w-full flex-col items-center text-center lg:max-w-[544px] lg:items-start lg:text-left">
              <p className="font-outfit text-[16px] leading-[126%] md:font-light text-[#4B5563] md:text-[18px] md:leading-[32px]">
                Kern des Angebots sind die durchweg kostenlosen und persönlichen
                Beratungen, sowie die langfristige Betreuung durch die
                Investmentexpert:innen. Das Invest4Kids-Konzept vereint
                Flexibilität und Sicherheit, indem die Eltern auch nach dem 18.
                Geburtstag des Kindes mitbestimmen können, was mit dem Investment
                passiert.
              </p>
              <p className="mt-5 font-outfit text-[16px] leading-[126%] md:font-light text-[#4B5563] md:text-[18px] md:leading-[32px]">
                In Verbindung mit der umfassenden Beratung ist das Invest4Kids
                Konzept auf dem deutschen Markt einzigartig und zukunftsweisend.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="font-poppins text-[18px] md:text-[20px] leading-[150%] font-medium text-[#4B5563]">
              Vision &amp; Team von Invest4Kids &darr;
            </p>
            <Link
              href="/team/"
              className="inline-flex w-full md:w-auto min-h-[48px] md:min-h-[54px] items-center justify-center rounded-full border border-[#133A7D] bg-[#133A7D] px-8 py-[15px] font-outfit text-[16px] leading-none font-medium text-white transition-colors duration-200 hover:border-[#F8BF3C] hover:bg-[#F8BF3C] hover:text-[#2C3E50] md:text-[18px]"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#FBFBFB] px-5 py-[50px] md:px-6 lg:px-0 lg:py-[100px]">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center">
          <div className="w-full max-w-[915px] rounded-[20px] bg-white px-6 py-6 shadow-[2px_8px_20px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[2px_8px_20px_rgba(0,0,0,0.09)] md:px-[34px] md:py-[34px]">
            <div className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-start lg:gap-[40px]">
              <div className="mx-auto flex w-full md:max-w-[150px] flex-col items-center lg:mx-0 lg:shrink-0">
                <Image
                  src={pressContactImage}
                  alt="Sabrina Rymarowicz"
                  width={150}
                  height={150}
                  className="aspect-square w-[150px] md:w-full rounded-full object-cover"
                />
                <h3 className="w-full md:w-auto mt-4 text-center font-poppins text-[18px] md:text-[20px] leading-[150%] font-medium text-[#2C3E50]">
                  Sabrina Rymarowicz
                </h3>
              </div>

              <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
                <h2 className="font-poppins text-[27px] leading-[150%] font-extrabold text-[#2C3E50] md:text-[28px] md:leading-[125%]">
                  Kontakt
                </h2>
                <p className="mt-4 w-full border-l-[3px] border-[#84B7CA] pl-4 font-outfit text-[16px] leading-[126%] text-[#4B5563] md:text-[18px] md:leading-[32px]">
                  Bei Fragen freuen wir uns, wenn Du direkt auf uns zukommst.
                  Für alle Anliegen rund um unsere Presse- und Medienarbeit
                  steht Dir Sabrina Rymarowicz gerne als Ansprechpartnerin zur
                  Verfügung.
                </p>
                <Link
                  href="mailto:presse@invest4kids.de"
                  className="mt-[34px] inline-flex w-full md:w-auto min-h-[48px] md:min-h-[54px] items-center justify-center gap-2 rounded-[50px] border border-[#84B7CA] bg-white px-8 py-[15px] font-outfit text-[16px] leading-none font-medium text-[#2C3E50] transition-colors duration-200 hover:bg-[#EFFAFD] md:text-[18px]"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  presse@invest4kids.de
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#133A7D] px-5 py-[50px] md:px-6 lg:px-0 lg:py-[100px]">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center">
          <h2 className="font-poppins text-center md:text-left text-[27px] leading-[150%] font-extrabold text-white md:text-[34px] md:leading-[125%]">
            Aktuelle Veröffentlichungen
          </h2>
          <div className="my-11 h-[1px] w-full bg-white" />
          <div className="flex w-full flex-col items-start">
            <p className="font-poppins text-[18px] leading-[150%] font-medium text-white md:text-[20px]">
              Studie:
            </p>
            <p className="font-outfit leading-[140%] font-medium text-white text-[32px] px-2 md:px-0">
              Eltern und Finanzen junger Erwachsener (2025)
            </p>
            <Link
              href="/studie/"
              className="mt-[24px] inline-flex h-12 md:h-12.5 items-center justify-center rounded-[8px] border border-white 
              bg-transparent px-9 py-3.75 font-outfit text-[16px] leading-none font-medium text-white transition-colors 
              duration-200 hover:bg-white hover:text-[#2C3E50] md:text-[18px]"
            >
              Hier klicken zur Studie
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#FBFBFB] px-5 py-[50px] md:px-6 lg:px-0 lg:py-[100px]">
        <div className="mx-auto w-full max-w-[1100px]">
          <h2 className="pb-6 font-poppins text-[27px] leading-[150%] font-extrabold text-[#2C3E50] md:pb-[34px]
           md:text-[34px] md:leading-[125%]">
            Pressespiegel
          </h2>
          <p className="font-outfit text-[16px] leading-[126%] font-light text-[#4B5563] md:text-[18px] md:leading-[32px]">
            Anbei findest Du eine Liste von Erwähnungen von Invest4Kids in
            verschiedenen Publikationen:
          </p>

          <ul className="list-disc pl-10 font-outfit text-[16px] leading-[230%] font-light text-[#2C3E50]
           marker:text-[#2C3E50] md:text-[18px] md:leading-[230%]">
            {pressReviewItems.map((item) => (
              <li key={`${item.source}-${item.href}`}>
                <span className="font-medium">{item.source}</span>
                {item.date === "Artikel"
                  ? " – Artikel: "
                  : ` – Artikel vom ${item.date}: `}
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 transition-colors hover:text-[#133A7D]"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </>
  );
}
