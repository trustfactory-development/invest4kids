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
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 27 22" fill="none"><path d="M26.1 20.1667H24.3V7.33333C24.5387 7.33333 24.7676 7.23676 24.9364 7.06485C25.1052 6.89294 25.2 6.65978 25.2 6.41667C25.2 6.17355 25.1052 5.94039 24.9364 5.76849C24.7676 5.59658 24.5387 5.5 24.3 5.5H18.9V1.83333C19.1387 1.83333 19.3676 1.73676 19.5364 1.56485C19.7052 1.39294 19.8 1.15978 19.8 0.916667C19.8 0.673552 19.7052 0.440394 19.5364 0.268486C19.3676 0.0965773 19.1387 0 18.9 0H2.7C2.46131 0 2.23239 0.0965773 2.0636 0.268486C1.89482 0.440394 1.8 0.673552 1.8 0.916667C1.8 1.15978 1.89482 1.39294 2.0636 1.56485C2.23239 1.73676 2.46131 1.83333 2.7 1.83333V20.1667H0.9C0.661305 20.1667 0.432387 20.2632 0.263604 20.4352C0.0948211 20.6071 0 20.8402 0 21.0833C0 21.3265 0.0948211 21.5596 0.263604 21.7315C0.432387 21.9034 0.661305 22 0.9 22H26.1C26.3387 22 26.5676 21.9034 26.7364 21.7315C26.9052 21.5596 27 21.3265 27 21.0833C27 20.8402 26.9052 20.6071 26.7364 20.4352C26.5676 20.2632 26.3387 20.1667 26.1 20.1667ZM22.5 7.33333V20.1667H18.9V7.33333H22.5ZM4.5 1.83333H17.1V20.1667H14.4V14.6667C14.4 14.4236 14.3052 14.1904 14.1364 14.0185C13.9676 13.8466 13.7387 13.75 13.5 13.75H8.1C7.8613 13.75 7.63239 13.8466 7.4636 14.0185C7.29482 14.1904 7.2 14.4236 7.2 14.6667V20.1667H4.5V1.83333ZM12.6 20.1667H9V15.5833H12.6V20.1667ZM6.3 5.5C6.3 5.25689 6.39482 5.02373 6.5636 4.85182C6.73239 4.67991 6.9613 4.58333 7.2 4.58333H9C9.23869 4.58333 9.46761 4.67991 9.6364 4.85182C9.80518 5.02373 9.9 5.25689 9.9 5.5C9.9 5.74312 9.80518 5.97627 9.6364 6.14818C9.46761 6.32009 9.23869 6.41667 9 6.41667H7.2C6.9613 6.41667 6.73239 6.32009 6.5636 6.14818C6.39482 5.97627 6.3 5.74312 6.3 5.5ZM11.7 5.5C11.7 5.25689 11.7948 5.02373 11.9636 4.85182C12.1324 4.67991 12.3613 4.58333 12.6 4.58333H14.4C14.6387 4.58333 14.8676 4.67991 15.0364 4.85182C15.2052 5.02373 15.3 5.25689 15.3 5.5C15.3 5.74312 15.2052 5.97627 15.0364 6.14818C14.8676 6.32009 14.6387 6.41667 14.4 6.41667H12.6C12.3613 6.41667 12.1324 6.32009 11.9636 6.14818C11.7948 5.97627 11.7 5.74312 11.7 5.5ZM6.3 10.0833C6.3 9.84022 6.39482 9.60706 6.5636 9.43515C6.73239 9.26324 6.9613 9.16667 7.2 9.16667H9C9.23869 9.16667 9.46761 9.26324 9.6364 9.43515C9.80518 9.60706 9.9 9.84022 9.9 10.0833C9.9 10.3264 9.80518 10.5596 9.6364 10.7315C9.46761 10.9034 9.23869 11 9 11H7.2C6.9613 11 6.73239 10.9034 6.5636 10.7315C6.39482 10.5596 6.3 10.3264 6.3 10.0833ZM11.7 10.0833C11.7 9.84022 11.7948 9.60706 11.9636 9.43515C12.1324 9.26324 12.3613 9.16667 12.6 9.16667H14.4C14.6387 9.16667 14.8676 9.26324 15.0364 9.43515C15.2052 9.60706 15.3 9.84022 15.3 10.0833C15.3 10.3264 15.2052 10.5596 15.0364 10.7315C14.8676 10.9034 14.6387 11 14.4 11H12.6C12.3613 11 12.1324 10.9034 11.9636 10.7315C11.7948 10.5596 11.7 10.3264 11.7 10.0833Z" fill="#2C3E50"></path></svg>,
  },
  {
    title: "Heute mehr als",
    value: "35 Mitarbeiter:innen",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 14" fill="none"><path d="M10.0628 9.61291C11.0003 8.98879 11.7121 8.07956 12.0929 7.01965C12.4737 5.95975 12.5032 4.80544 12.1772 3.72744C11.8512 2.64944 11.1868 1.70497 10.2825 1.0337C9.37811 0.362433 8.28172 0 7.15543 0C6.02913 0 4.93274 0.362433 4.02838 1.0337C3.12401 1.70497 2.45969 2.64944 2.13366 3.72744C1.80762 4.80544 1.83718 5.95975 2.21796 7.01965C2.59874 8.07956 3.31052 8.98879 4.24805 9.61291C2.55215 10.2379 1.1038 11.3945 0.119139 12.9101C0.0673886 12.987 0.0314426 13.0734 0.0133905 13.1643C-0.00466149 13.2552 -0.00445938 13.3488 0.0139851 13.4397C0.0324296 13.5305 0.0687486 13.6168 0.120831 13.6935C0.172913 13.7702 0.23972 13.8358 0.317368 13.8864C0.395016 13.937 0.481956 13.9717 0.573134 13.9885C0.664313 14.0052 0.757912 14.0037 0.848489 13.984C0.939067 13.9642 1.02482 13.9267 1.10076 13.8735C1.17669 13.8203 1.24131 13.7526 1.29083 13.6742C1.92599 12.6974 2.79511 11.8947 3.81928 11.339C4.84344 10.7833 5.99021 10.4923 7.15543 10.4923C8.32065 10.4923 9.46741 10.7833 10.4916 11.339C11.5157 11.8947 12.3849 12.6974 13.02 13.6742C13.1226 13.8267 13.2811 13.9327 13.4612 13.9693C13.6413 14.0058 13.8286 13.97 13.9826 13.8696C14.1365 13.7692 14.2447 13.6123 14.2839 13.4327C14.323 13.2532 14.2899 13.0654 14.1917 12.9101C13.207 11.3945 11.7587 10.2379 10.0628 9.61291ZM3.30807 5.24819C3.30807 4.4873 3.53372 3.7435 3.95647 3.11085C4.37922 2.47819 4.9801 1.9851 5.68311 1.69392C6.38612 1.40274 7.1597 1.32656 7.90601 1.475C8.65232 1.62344 9.33786 1.98984 9.87592 2.52787C10.414 3.0659 10.7804 3.75139 10.9289 4.49765C11.0773 5.24392 11.0011 6.01745 10.7099 6.72041C10.4187 7.42338 9.9256 8.02421 9.2929 8.44694C8.66021 8.86967 7.91636 9.0953 7.15543 9.0953C6.1354 9.09414 5.15748 8.68845 4.43621 7.96723C3.71495 7.246 3.30923 6.26815 3.30807 5.24819ZM21.6827 13.878C21.5273 13.9793 21.338 14.0147 21.1565 13.9765C20.975 13.9383 20.8161 13.8296 20.7147 13.6742C20.0803 12.6968 19.2113 11.8938 18.187 11.3383C17.1626 10.7829 16.0154 10.4927 14.8501 10.4942C14.6646 10.4942 14.4867 10.4206 14.3555 10.2894C14.2243 10.1582 14.1506 9.98028 14.1506 9.79477C14.1506 9.60926 14.2243 9.43134 14.3555 9.30017C14.4867 9.16899 14.6646 9.0953 14.8501 9.0953C15.4167 9.09476 15.9762 8.9691 16.4886 8.7273C17.001 8.48549 17.4536 8.13351 17.8142 7.6965C18.1748 7.25949 18.4344 6.74824 18.5744 6.19928C18.7145 5.65031 18.7316 5.07719 18.6245 4.52086C18.5174 3.96453 18.2887 3.43873 17.9548 2.98101C17.6209 2.5233 17.19 2.14498 16.6929 1.87308C16.1959 1.60118 15.6449 1.44241 15.0793 1.40813C14.5138 1.37385 13.9477 1.46489 13.4214 1.67475C13.3356 1.71184 13.2432 1.73136 13.1497 1.73215C13.0562 1.73294 12.9635 1.71498 12.8771 1.67935C12.7907 1.64371 12.7123 1.59111 12.6465 1.52467C12.5808 1.45822 12.529 1.37927 12.4943 1.29248C12.4596 1.20568 12.4426 1.11282 12.4444 1.01936C12.4462 0.925896 12.4667 0.833742 12.5047 0.748338C12.5427 0.662935 12.5974 0.586014 12.6657 0.522122C12.7339 0.45823 12.8143 0.408662 12.902 0.376347C14.1064 -0.103972 15.4461 -0.121257 16.6625 0.327827C17.879 0.776911 18.886 1.66054 19.4893 2.80826C20.0927 3.95597 20.2496 5.28645 19.9298 6.54302C19.61 7.79958 18.8361 8.89321 17.7575 9.61291C19.4534 10.2379 20.9018 11.3945 21.8864 12.9101C21.9877 13.0654 22.0232 13.2547 21.985 13.4362C21.9468 13.6177 21.8381 13.7766 21.6827 13.878Z" fill="#2C3E50"></path></svg>,
  },
  {
    title: "Spezialisiert auf",
    value: "Kinderinvestments",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 22" fill="none"><path d="M19.25 0H1.75C1.28587 0 0.840752 0.185427 0.512563 0.515491C0.184374 0.845554 0 1.29322 0 1.76V7.91998C0 13.7192 2.79125 17.2337 5.13297 19.1608C7.65516 21.2354 10.1642 21.9394 10.2736 21.9691C10.424 22.0103 10.5826 22.0103 10.733 21.9691C10.8423 21.9394 13.3481 21.2354 15.8736 19.1608C18.2087 17.2337 21 13.7192 21 7.91998V1.76C21 1.29322 20.8156 0.845554 20.4874 0.515491C20.1592 0.185427 19.7141 0 19.25 0ZM19.25 7.91998C19.25 11.9977 17.7559 15.3076 14.8094 17.7562C13.5267 18.8184 12.0679 19.6451 10.5 20.1981C8.95257 19.6547 7.51182 18.8427 6.24312 17.7991C3.26156 15.3461 1.75 12.023 1.75 7.91998V1.76H19.25V7.91998ZM5.50594 11.1826C5.34175 11.0174 5.24951 10.7935 5.24951 10.56C5.24951 10.3265 5.34175 10.1025 5.50594 9.93737C5.67012 9.77225 5.89281 9.67948 6.125 9.67948C6.35719 9.67948 6.57988 9.77225 6.74406 9.93737L8.75 11.9559L14.2559 6.41738C14.3372 6.33562 14.4337 6.27077 14.54 6.22652C14.6462 6.18227 14.76 6.15949 14.875 6.15949C14.99 6.15949 15.1038 6.18227 15.21 6.22652C15.3163 6.27077 15.4128 6.33562 15.4941 6.41738C15.5754 6.49914 15.6398 6.59621 15.6838 6.70303C15.7278 6.80986 15.7505 6.92435 15.7505 7.03998C15.7505 7.15561 15.7278 7.2701 15.6838 7.37693C15.6398 7.48375 15.5754 7.58082 15.4941 7.66258L9.36906 13.8226C9.2878 13.9044 9.1913 13.9693 9.08507 14.0136C8.97885 14.0579 8.86499 14.0807 8.75 14.0807C8.63501 14.0807 8.52115 14.0579 8.41493 14.0136C8.3087 13.9693 8.2122 13.9044 8.13094 13.8226L5.50594 11.1826Z" fill="#2C3E50"></path></svg>,
  },
  {
    title: "Bereits über",
    value: "5200 Elternberatungen",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 22 19" fill="none"><path d="M15.9107 0C13.8826 0 12.1069 0.878957 11 2.36467C9.89313 0.878957 8.11741 0 6.08929 0C4.47487 0.00183387 2.92709 0.648984 1.78552 1.79947C0.643952 2.94996 0.00181965 4.50983 0 6.13686C0 13.0656 10.1937 18.6739 10.6278 18.9055C10.7422 18.9675 10.8701 19 11 19C11.1299 19 11.2578 18.9675 11.3722 18.9055C11.8063 18.6739 22 13.0656 22 6.13686C21.9982 4.50983 21.356 2.94996 20.2145 1.79947C19.0729 0.648984 17.5251 0.00183387 15.9107 0ZM11 17.302C9.20661 16.2488 1.57143 11.4512 1.57143 6.13686C1.57299 4.92977 2.04948 3.77257 2.8964 2.91903C3.74333 2.06549 4.89155 1.58528 6.08929 1.58371C7.99955 1.58371 9.60339 2.60916 10.2732 4.25621C10.3324 4.40145 10.4331 4.52567 10.5625 4.61309C10.6919 4.70051 10.8442 4.74719 11 4.74719C11.1558 4.74719 11.3081 4.70051 11.4375 4.61309C11.5669 4.52567 11.6676 4.40145 11.7268 4.25621C12.3966 2.60619 14.0004 1.58371 15.9107 1.58371C17.1084 1.58528 18.2567 2.06549 19.1036 2.91903C19.9505 3.77257 20.427 4.92977 20.4286 6.13686C20.4286 11.4433 12.7914 16.2478 11 17.302Z" fill="#2C3E50"></path></svg>,
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
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#84B7CA4D] text-text-medium">
                  {stat.icon}
                </div>
                <p className="max-w-[150px] md:max-w-full mx-auto md:mx-0 mt-5 font-outfit text-[16px] leading-[126%] font-light text-[#4B5563] md:text-[18px] md:leading-[23px] md:text-center">
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
           marker:text-[#2C3E50] md:text-[18px] md:leading-[170%]">
            {pressReviewItems.map((item) => (
              <li key={`${item.source}-${item.href}`}>
                <span className="font-normal">{item.source}</span>
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
