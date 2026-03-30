"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import EtfFaqSection from "@/components/sections/EtfFaqSection";
import EtfTestimonialsCarouselSection from "@/components/sections/EtfTestimonialsCarouselSection";
import { BenefitsCtaSection } from "@/components/sections/benefits-cta-section";
import { ExpertsTeamSection } from "@/components/sections/experts-team-section";
import { InvestChildBenefitSection } from "@/components/sections/invest-child-benefit-section";
import { MissionCtaSection } from "@/components/sections/mission-cta-section";
import { ParentHesitationSection } from "@/components/sections/parent-hesitation-section";
import { ProcessTimelineSection } from "@/components/sections/process-timeline-section";
import { WishesFlowSection } from "@/components/sections/wishes-flow-section";
import FixedSocialRail from "@/components/ui/FixedSocialRail";
import headerLogo from "@/assets/images/header/invest4kids-logo.png";
import flagDe from "@/assets/images/header/flag-de.svg";
import flagGb from "@/assets/images/header/flag-gb.svg";
import "./etf-fuer-kinder.css";

const PERSPECTIVE_URL =
  "https://funnel.perspective.co/60b7c8d2bcad43001f5c35a3/690b34a62100cd003c13e6ad/";

const PARTNER_LOGOS = [
  { src: "https://invest4kids.de/wp-content/uploads/2024/11/1-1.png", alt: "Instagram" },
  { src: "https://invest4kids.de/wp-content/uploads/2024/11/2-1.png", alt: "TikTok" },
  { src: "https://invest4kids.de/wp-content/uploads/2024/11/3-1.png", alt: "Spotify" },
  { src: "https://invest4kids.de/wp-content/uploads/2024/11/Design-ohne-Titel.png", alt: "Agentur Partner 2024" },
  { src: "https://invest4kids.de/wp-content/uploads/2024/11/unnamed677.png", alt: "BHV Agentur Partner 2024" },
  { src: "https://invest4kids.de/wp-content/uploads/2024/11/5-1.png", alt: "Verified Partner" },
  { src: "https://invest4kids.de/wp-content/uploads/2024/11/unnamed434.png", alt: "Finanzberatung Siegel" },
  { src: "https://invest4kids.de/wp-content/uploads/2024/11/unnamed465.png", alt: "Auszeichnung" },
];

const partnerTrack = [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS];

const TRUST_AVATAR_URLS = [
  "https://invest4kids.de/wp-content/uploads/2024/11/unnamed809.png.webp",
  "https://invest4kids.de/wp-content/uploads/2024/11/unnamed285.png.webp",
  "https://invest4kids.de/wp-content/uploads/2024/11/unnamed480.png.webp",
  "https://invest4kids.de/wp-content/uploads/2024/11/unnamed430.png.webp",
];

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M5.333 1.333V4"
        stroke="currentColor"
        strokeWidth={1.333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.667 1.333V4"
        stroke="currentColor"
        strokeWidth={1.333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.667 2.667H3.333A1.333 1.333 0 0 0 2 4v9.333a1.333 1.333 0 0 0 1.333 1.334h9.334A1.333 1.333 0 0 0 14 13.333V4a1.333 1.333 0 0 0-1.333-1.333Z"
        stroke="currentColor"
        strokeWidth={1.333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 6.667h12"
        stroke="currentColor"
        strokeWidth={1.333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FooterTikTokIcon() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.75 2h2.43a4.88 4.88 0 0 0 3.02 3.04v2.45a7.33 7.33 0 0 1-2.98-.68v7.28a5.09 5.09 0 1 1-5.08-5.1c.31 0 .6.03.9.08v2.6a2.5 2.5 0 1 0 1.71 2.36V2z" />
    </svg>
  );
}

function FooterInstagramIcon() {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden="true"
    >
      <rect x={3} y={3} width={18} height={18} rx={5} />
      <circle cx={12} cy={12} r={4.25} />
      <circle cx={17.5} cy={6.5} r={0.75} fill="currentColor" stroke="none" />
    </svg>
  );
}

function FooterSpotifyIcon() {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx={12} cy={12} r={9} />
      <path d="M7.4 10.2c3.6-1.1 7.6-.7 10.5 1.1" />
      <path d="M8.3 13.2c2.8-.8 5.8-.5 8 .8" />
      <path d="M9 16c2-.4 3.8-.3 5.3.5" />
    </svg>
  );
}

function FooterYouTubeIcon() {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden="true"
    >
      <rect x={3} y={6} width={18} height={12} rx={3} />
      <path d="m10 9.5 5 2.5-5 2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ShimmerCTA({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={PERSPECTIVE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-flex w-[345px] max-w-full items-center justify-center gap-2 overflow-hidden 
      rounded-full bg-accent px-[30px] pt-[19px] pb-[20px] font-outfit text-base font-medium text-white 
      no-underline transition-all duration-300 ease-in-out max-md:w-[305px] after:absolute after:inset-0 
      after:animate-[shimmer_2.5s_infinite] after:bg-gradient-to-r after:from-transparent after:via-white/40 
      after:to-transparent after:bg-[length:200%_100%] after:content-[''] hover:-translate-y-[1px] hover:bg-[#e5ac2f] 
      hover:shadow-[0_4px_16px_rgba(248,191,60,0.4)] ${className}`}
    >
      <CalendarIcon />
      {children}
    </Link>
  );
}

function TrustAvatars({ label, dark }: { label: string; dark?: boolean }) {
  return (
    <div className="flex items-center">
      {TRUST_AVATAR_URLS.map((url, i) => (
          <Image
              key={i}
              src={url}
              alt=""
              width={32}
              height={32}
              className="rounded-full"
              style={{ marginLeft: i === 0 ? 0 : -17 }}
          />
      ))}
      <p className={`pl-4 font-outfit ${dark ? "text-black" : "text-slate-500"}`}>
        {label}
      </p>
    </div>
  );
}

function StarRating() {
  return (
    <div className="flex gap-0.5 text-[#00B67A]">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width={20} height={20} viewBox="0 0 20 20" fill="#00B67A">
          <path d="M10 1l2.5 5.5H18l-4.5 3.5 1.5 6L10 13l-5 3 1.5-6L2 6.5h5.5z" />
        </svg>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  LP Header                                                          */
/* ------------------------------------------------------------------ */
const navLinks = [
  { label: "Deine Situation", href: "#situation" },
  { label: "Deine Vorteile", href: "#vorteile" },
  { label: "Ablauf der Beratung", href: "#ablauf" },
  { label: "Rezensionen", href: "#rezensionen" },
];

const footerLinks = [
  { label: "Blog", href: "https://invest4kids.de/blog/" },
  { label: "Podcast", href: "https://invest4kids.de/podcast/" },
  { label: "Ueber uns", href: "https://invest4kids.de/ueber-uns/" },
  { label: "Datenschutz", href: "https://invest4kids.de/datenschutz/" },
  { label: "Impressum", href: "https://invest4kids.de/impressum/" },
  { label: "Transparenz", href: "https://invest4kids.de/transparenz/" },
  {
    label: "Studie zum Finanzverhalten junger Erwachsener",
    href: "https://invest4kids.de/study-on-the-financial-behavior-of-young-adults/",
  },
];

function LpHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="relative mx-auto flex h-[74px] max-w-[1540px] items-center justify-between px-5 py-[15px] lg:h-[96px] lg:gap-[40px] lg:py-3">
        {/* Logo */}
        <Link href="https://invest4kids.de" className="shrink-0">
          <Image
            src={headerLogo}
            alt="Invest4Kids Logo"
            width={150}
            height={40}
            className="h-auto w-20 lg:w-[150px]"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex ml-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-secondary font-outfit text-[16px] py-1 px-0 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop right side */}
        <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="https://funnel.perspective.co/60b7c8d2bcad43001f5c35a3/690b34a62100cd003c13e6ad/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-white border-2 border-border-light/80 text-secondary px-9 py-3.75 font-outfit text-[16px] leading-5 transition-colors hover:bg-border-light/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                className="h-4.25 w-4 shrink-0"
                aria-hidden="true"
              >
                <path
                  d="M14.6667 1.30769H12.6667V0.653846C12.6667 0.480435 12.5964 0.314127 12.4714 0.191507C12.3464 0.0688871 12.1768 0 12 0C11.8232 0 11.6536 0.0688871 11.5286 0.191507C11.4036 0.314127 11.3333 0.480435 11.3333 0.653846V1.30769H4.66667V0.653846C4.66667 0.480435 4.59643 0.314127 4.4714 0.191507C4.34638 0.0688871 4.17681 0 4 0C3.82319 0 3.65362 0.0688871 3.5286 0.191507C3.40357 0.314127 3.33333 0.480435 3.33333 0.653846V1.30769H1.33333C0.979711 1.30769 0.640573 1.44547 0.390524 1.69071C0.140476 1.93595 0 2.26856 0 2.61538V15.6923C0 16.0391 0.140476 16.3717 0.390524 16.617C0.640573 16.8622 0.979711 17 1.33333 17H14.6667C15.0203 17 15.3594 16.8622 15.6095 16.617C15.8595 16.3717 16 16.0391 16 15.6923V2.61538C16 2.26856 15.8595 1.93595 15.6095 1.69071C15.3594 1.44547 15.0203 1.30769 14.6667 1.30769ZM3.33333 2.61538V3.26923C3.33333 3.44264 3.40357 3.60895 3.5286 3.73157C3.65362 3.85419 3.82319 3.92308 4 3.92308C4.17681 3.92308 4.34638 3.85419 4.4714 3.73157C4.59643 3.60895 4.66667 3.44264 4.66667 3.26923V2.61538H11.3333V3.26923C11.3333 3.44264 11.4036 3.60895 11.5286 3.73157C11.6536 3.85419 11.8232 3.92308 12 3.92308C12.1768 3.92308 12.3464 3.85419 12.4714 3.73157C12.5964 3.60895 12.6667 3.44264 12.6667 3.26923V2.61538H14.6667V5.23077H1.33333V2.61538H3.33333ZM14.6667 15.6923H1.33333V6.53846H14.6667V15.6923ZM9 9.48077C9 9.67475 8.94135 9.86437 8.83147 10.0257C8.72159 10.1869 8.56541 10.3126 8.38268 10.3869C8.19996 10.4611 7.99889 10.4805 7.80491 10.4427C7.61093 10.4049 7.43275 10.3114 7.29289 10.1743C7.15304 10.0371 7.0578 9.86236 7.01921 9.67211C6.98063 9.48186 7.00043 9.28466 7.07612 9.10544C7.15181 8.92623 7.27998 8.77306 7.44443 8.66529C7.60888 8.55752 7.80222 8.5 8 8.5C8.26522 8.5 8.51957 8.60333 8.70711 8.78726C8.89464 8.97119 9 9.22065 9 9.48077ZM12.6667 9.48077C12.6667 9.67475 12.608 9.86437 12.4981 10.0257C12.3883 10.1869 12.2321 10.3126 12.0493 10.3869C11.8666 10.4611 11.6656 10.4805 11.4716 10.4427C11.2776 10.4049 11.0994 10.3114 10.9596 10.1743C10.8197 10.0371 10.7245 9.86236 10.6859 9.67211C10.6473 9.48186 10.6671 9.28466 10.7428 9.10544C10.8185 8.92623 10.9466 8.77306 11.1111 8.66529C11.2755 8.55752 11.4689 8.5 11.6667 8.5C11.9319 8.5 12.1862 8.60333 12.3738 8.78726C12.5613 8.97119 12.6667 9.22065 12.6667 9.48077ZM5.33333 12.75C5.33333 12.944 5.27468 13.1336 5.1648 13.2949C5.05492 13.4562 4.89874 13.5819 4.71602 13.6561C4.53329 13.7303 4.33222 13.7498 4.13824 13.7119C3.94426 13.6741 3.76608 13.5807 3.62623 13.4435C3.48637 13.3063 3.39113 13.1316 3.35255 12.9413C3.31396 12.7511 3.33377 12.5539 3.40945 12.3747C3.48514 12.1955 3.61331 12.0423 3.77776 11.9345C3.94221 11.8268 4.13555 11.7692 4.33333 11.7692C4.59855 11.7692 4.8529 11.8726 5.04044 12.0565C5.22798 12.2404 5.33333 12.4899 5.33333 12.75ZM9 12.75C9 12.944 8.94135 13.1336 8.83147 13.2949C8.72159 13.4562 8.56541 13.5819 8.38268 13.6561C8.19996 13.7303 7.99889 13.7498 7.80491 13.7119C7.61093 13.6741 7.43275 13.5807 7.29289 13.4435C7.15304 13.3063 7.0578 13.1316 7.01921 12.9413C6.98063 12.7511 7.00043 12.5539 7.07612 12.3747C7.15181 12.1955 7.27998 12.0423 7.44443 11.9345C7.60888 11.8268 7.80222 11.7692 8 11.7692C8.26522 11.7692 8.51957 11.8726 8.70711 12.0565C8.89464 12.2404 9 12.4899 9 12.75ZM12.6667 12.75C12.6667 12.944 12.608 13.1336 12.4981 13.2949C12.3883 13.4562 12.2321 13.5819 12.0493 13.6561C11.8666 13.7303 11.6656 13.7498 11.4716 13.7119C11.2776 13.6741 11.0994 13.5807 10.9596 13.4435C10.8197 13.3063 10.7245 13.1316 10.6859 12.9413C10.6473 12.7511 10.6671 12.5539 10.7428 12.3747C10.8185 12.1955 10.9466 12.0423 11.1111 11.9345C11.2755 11.8268 11.4689 11.7692 11.6667 11.7692C11.9319 11.7692 12.1862 11.8726 12.3738 12.0565C12.5613 12.2404 12.6667 12.4899 12.6667 12.75Z"
                  fill="currentColor"
                />
              </svg>
              Kostenlose Beratung sichern
            </Link>

            <div className="flex items-center gap-4">
              <div className="py-1.5 px-3 border-b-3 border-primary-light">
                <Image
                  src={flagDe}
                  width={24}
                  height={24}
                  alt="Deutsch"
                  className="cursor-pointer "
                />
              </div>

              <Image
                src={flagGb}
                width={24}
                height={16}
                alt="English"
                className="w-6 h-6 cursor-pointer opacity-50 transition-opacity hover:opacity-100"
              />
            </div>
          </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-[8px] bg-primary-light py-3 px-2 font-outfit text-[16px] leading-none font-medium text-white transition-colors hover:bg-primary lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-menu"
          aria-label="Menü Umschalter"
        >
          <span>Menu</span>
          <Menu size={14} strokeWidth={2} />
        </button>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              id="mobile-nav-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1] }}
              exit={{ opacity: [1, 0] }}
              transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
              className="absolute right-0 top-[70px] z-50 w-[calc(100vw-40px)] max-w-[314px] rounded-[8px] border-2 border-[rgba(228,228,231,0.18)] bg-white px-[10px] pb-3 pt-2 shadow-[0_8px_30px_0_rgba(0,0,0,0.2)] lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="pb-[10px] space-y-1.25">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <a
                      href={link.href}
                      className="py-[5px] font-outfit text-[14px] leading-[24px] font-normal text-secondary transition-colors hover:text-primary"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  </div>
                ))}
              </div>

              <Link
                href={PERSPECTIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-accent px-5 py-[13px] font-outfit text-[16px] leading-[24px] font-medium text-white transition-colors hover:bg-accent-hover"
              >
                <CalendarIcon />
                Kostenlose Beratung sichern
              </Link>

              <Link
                href="https://invest4kids.de/en/etf-fuer-kinder/"
                className="mt-[10px] inline-flex h-6 w-6 overflow-hidden rounded-full"
                aria-label="English"
                onClick={() => setMobileOpen(false)}
              >
                <Image
                  src={flagGb}
                  width={24}
                  height={24}
                  alt="English"
                  className="h-6 w-6 object-cover"
                />
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function LpFooter() {
  return (
    <footer className="bg-white md:pt-[174px] md:pb-[154px] py-12 font-outfit">
      <div className="mx-auto max-w-[1540px] px-5 lg:px-0">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <Link href="https://invest4kids.de" className="order-1 shrink-0 lg:order-none">
            <Image
              src={headerLogo}
              alt="Invest4Kids Logo"
              width={180}
              height={72}
              className="w-20 h-auto"
            />
          </Link>

          <nav className="order-2 flex flex-col items-center gap-4 text-[16px] text-[#24324B] lg:order-none lg:flex-row lg:flex-wrap lg:justify-center lg:gap-x-5 lg:gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors duration-200 hover:text-primary font-outfit"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="order-3 flex items-center gap-4 text-[#24324B] md:gap-5 lg:order-none">
            <Link
              href="https://www.tiktok.com/@invest4kids"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="transition-colors duration-200 hover:text-primary"
            >
              <FooterTikTokIcon />
            </Link>
            <Link
              href="https://www.instagram.com/invest4kids/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-colors duration-200 hover:text-primary"
            >
              <FooterInstagramIcon />
            </Link>
            <Link
              href="https://open.spotify.com/show/4lG1MbcE0fpkh7QvArfWCP"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify"
              className="transition-colors duration-200 hover:text-primary"
            >
              <FooterSpotifyIcon />
            </Link>
            <Link
              href="https://www.youtube.com/@invest4kids"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="transition-colors duration-200 hover:text-primary"
            >
              <FooterYouTubeIcon />
            </Link>
            <Link
              href="https://www.google.com/search?q=invest4kids"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google"
              className="text-[22px] leading-none transition-colors duration-200 hover:text-primary"
            >
              G
            </Link>
          </div>
        </div>

        <div className="mt-12.5 border-t-2 border-dashed border-[#8DB9D8]" />

        <p className="pt-12.5 text-center text-[16px] text-[#24324B]">
          © 2024 Invest4Kids. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Known-from marquee items                                          */
/* ------------------------------------------------------------------ */
const knownFromItems = [
  "WirtschaftsWoche",
  "Capital",
  "Focus Money",
  "Handelsblatt",
  "n-tv",
  "RTL",
  "Bild",
];

/* ------------------------------------------------------------------ */
/*  Section data arrays                                                */
/* ------------------------------------------------------------------ */
const kindergeldCards = [
  "…dass dein Kind einen finanziellen Vorsprung hat und seine Zukunft sicher planen kann?",
  "…selbst für die Zukunft abgesichert sein und keine Angst haben müssen, dass du später nicht genug für dein Kind hast?",
  "…ein Vorbild für dein Kind sein und ihm zeigen, wie man durch ETF-Investments klug für die Zukunft spart?",
];

const benefitsCards = [
  {
    title: "Langfristiger Vermögensaufbau",
    text: "Mit Aktien ETFs und Anleihen wächst das Vermögen des Kindes stabil. Durch den Zinseszinseffekt entsteht aus kleinen Sparbeträgen ein großes Guthaben.",
  },
  {
    title: "Steuervorteile nutzen",
    text: "Keine Kapitalertragssteuer bei Strategiewechseln, optimale Nutzung von Steuerfreibeträgen, transparente Behandlung bei Auszahlung.",
  },
  {
    title: "Bestimmungsrecht ab 18",
    text: "Eltern behalten die Verfügung über das Vermögen auch nach der Volljährigkeit – ein klarer Vorteil gegenüber Standarddepots.",
  },
  {
    title: "Flexible Sparrate",
    text: "Schon ab der Mindestsparrate von 25 € monatlich starten, jederzeit anpassen oder Einmalbeträge einfügen.",
  },
  {
    title: "Breite Auswahl an Wertpapieren",
    text: "Zugriff auf ETFs, Fonds und Anleihen – immer passend zu deinen Sparzielen.",
  },
  {
    title: "Beratung und Service",
    text: "Persönliche Betreuung für Eltern, Opa, Oma oder Großeltern – kostenlos und unverbindlich.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Kostenlose Beratung buchen",
    text: "Melde dich für eine kostenlose und unverbindliche Beratung an. Fülle einfach unser Formular aus, beantworte ein paar kurze Fragen und hinterlasse deine Kontaktdaten. Unser Experte wird sich dann bei dir melden, um die ersten Schritte zu besprechen.",
  },
  {
    num: "02",
    title: "Invest4Kids kontaktiert dich",
    text: "Innerhalb von 48 Stunden melden wir uns bei dir, um in einem kurzen Telefonat den Ablauf zu besprechen. In diesem Gespräch prüfen wir deinen aktuellen Stand und stellen sicher, dass du maximal von unserer Beratung profitieren kannst.",
  },
  {
    num: "03",
    title: "Dein individuelles Beratungsgespräch",
    text: "In einem 30-minütigen Beratungsgespräch erfährst du alles, was du über ETF-Investments für dein Kind wissen musst. Wir besprechen deine familiäre Situation und deine Sparziele.",
  },
  {
    num: "04",
    title: "Das Invest4Kids Konzept für dein Kind",
    text: "Von der Erstellung der Strategie bis hin zur Depoteröffnung und dem Controlling übernehmen unsere Experten alles für dich. Du kannst dich zurücklehnen und sicher sein, dass dein Kind von einem langfristigen Vermögensaufbau profitiert.",
  },
];

const testimonials = [
  {
    name: "Nadine S.",
    date: "Februar 2024",
    text: "Wir haben viele Anbieter getestet und verglichen, aber nirgendwo waren Kosten, Steuerfreibeträge und Rendite so transparent erklärt. Heute sparen wir für unsere Tochter mit klarer Strategie – und fühlen uns endlich sicher.",
  },
  {
    name: "Familie Schmitt",
    date: "März 2024",
    text: "Mein Opa wollte 1.000 Euro auf das Kinder Depot einzahlen, um den Start zu erleichtern. Mit Invest4Kids war das problemlos möglich, und wir haben sofort gesehen, wie sich die ETF Anteile entwickelt haben.",
  },
  {
    name: "Lisa & Tobias",
    date: "Juni 2024",
    text: "Wir haben viele Anbieter getestet und verglichen, aber nirgendwo waren Kosten, Steuerfreibeträge und Rendite so transparent erklärt. Heute sparen wir für unsere Tochter mit klarer Strategie – und fühlen uns endlich sicher.",
  },
  {
    name: "Familie Schmitt",
    date: "März 2024",
    text: "Mein Opa wollte 1.000 Euro auf das Kinder Depot einzahlen, um den Start zu erleichtern. Mit Invest4Kids war das problemlos möglich, und wir haben sofort gesehen, wie sich die ETF Anteile entwickelt haben.",
  },
  {
    name: "Lisa & Tobias",
    date: "Juni 2024",
    text: "Wir haben viele Anbieter getestet und verglichen, aber nirgendwo waren Kosten, Steuerfreibeträge und Rendite so transparent erklärt. Heute sparen wir für unsere Tochter mit klarer Strategie – und fühlen uns endlich sicher.",
  },
  {
    name: "Familie Schmitt",
    date: "März 2024",
    text: "Mein Opa wollte 1.000 Euro auf das Kinder Depot einzahlen, um den Start zu erleichtern. Mit Invest4Kids war das problemlos möglich, und wir haben sofort gesehen, wie sich die ETF Anteile entwickelt haben.",
  },
  {
    name: "Lisa & Tobias",
    date: "Juni 2024",
    text: "Wir haben viele Anbieter getestet und verglichen, aber nirgendwo waren Kosten, Steuerfreibeträge und Rendite so transparent erklärt. Heute sparen wir für unsere Tochter mit klarer Strategie – und fühlen uns endlich sicher.",
  },
];

const faqItems = [
  {
    q: "Sind ETFs für Kinder wirklich sicher?",
    a: "ETFs sind eine der sichersten und transparentesten Anlageformen, weil sie nicht auf ein einzelnes Unternehmen setzen, sondern auf ganze Märkte. Das bedeutet: Das Risiko wird durch breite Streuung stark reduziert. Natürlich schwanken Kurse kurzfristig, aber über viele Jahre hinweg gleichen sich diese Bewegungen aus und es entsteht ein stabiler Wachstumstrend. Gerade für Kinder ist das ideal, da der Anlagehorizont lang genug ist, um von dieser Entwicklung zu profitieren. Mit Invest4Kids erhältst du zusätzlich eine persönliche Strategie, die Risiken minimiert und Chancen gezielt nutzt. Sicherheit entsteht hier durch Diversifikation, Erfahrung und unsere laufende Begleitung.",
  },
  {
    q: "Ab welchem Betrag kann ich starten?",
    a: "Viele Eltern denken, dass man hohe Summen benötigt, um sinnvoll zu investieren. Das stimmt nicht: Mit Invest4Kids kannst du bereits ab 25 € monatlich starten. Schon kleine Beträge entfalten durch den Zinseszinseffekt eine große Wirkung, wenn sie langfristig in ETFs angelegt werden. Entscheidend ist nicht die Höhe des Einstiegs, sondern die Kontinuität über die Jahre hinweg. Eltern haben jederzeit die Möglichkeit, die Sparrate anzupassen, zu erhöhen oder auch vorübergehend zu pausieren. So bleibst du flexibel, ohne auf den langfristigen Vermögensaufbau zu verzichten. Unser Ziel ist es, auch Familien mit kleinerem Budget den Zugang zu professionellen Investmentstrategien zu ermöglichen.",
  },
  {
    q: "Kann ich jederzeit Geld entnehmen?",
    a: "Flexibilität ist ein zentrales Merkmal des Invest4Kids-Konzepts. Du entscheidest selbst, ob du Sparraten anpassen, Einmalzahlungen leisten oder bei Bedarf Geld entnehmen möchtest. Das ist besonders wichtig, da sich Lebensumstände ändern können – sei es durch ungeplante Ausgaben, Arbeitswechsel oder neue Wünsche für dein Kind. Im Gegensatz zu starren Sparverträgen bleibt dein Geld jederzeit verfügbar. Gleichzeitig profitierst du von der Sicherheit, dass die langfristige Anlagestrategie intakt bleibt, auch wenn du zwischendurch Anpassungen vornimmst. So kombinierst du die Stabilität eines ETF-Investments mit der Flexibilität, die Familien im Alltag brauchen.",
  },
  {
    q: "Was passiert, wenn mein Kind 18 wird?",
    a: "Bei klassischen Kinderdepots wechselt das Eigentum automatisch auf das Kind, sobald es volljährig ist. Damit hast du keine Kontrolle mehr über das Vermögen. Invest4Kids funktioniert anders: Mit dem einzigartigen „Bestimmungsrecht ab 18“ behalten Eltern die Kontrolle über das Investment, solange sie es wünschen. Das schützt davor, dass das Geld vorschnell ausgegeben wird und stellt sicher, dass es für die wirklich wichtigen Ziele genutzt wird – sei es Studium, Führerschein oder die erste Immobilie. Du bestimmst also, wie lange das Kapital investiert bleibt, und kannst es flexibel auf die Zukunft deines Kindes abstimmen.",
  },
  {
    q: "Was kostet mich die Beratung?",
    a: "Die Erstberatung bei Invest4Kids ist für dich vollkommen kostenlos und unverbindlich. Uns ist es wichtig, dass Eltern in Ruhe alle Fragen stellen und ein klares Bild von den Möglichkeiten bekommen. Transparenz ist dabei ein Kernwert: Es gibt keine versteckten Gebühren, keine Depotführungs- oder Transaktionskosten. Auch nach der Einrichtung bleibst du flexibel und zahlst nur klar definierte Verwaltungskosten. Langfristig ist die Kostenstruktur sogar günstiger als bei vielen Depots, da Steuervorteile und fehlende Wechselgebühren ins Gewicht fallen. Mit unserer kostenlosen Beratung erhältst du also nicht nur Informationen, sondern auch ein individuelles Konzept, das zu deinem Kind passt.",
  },
];

const calcResults = [
  { label: "Führerschein & Auto", value: "5.000 €" },
  { label: "Weltreise", value: "15.000 €" },
  { label: "Studium (6 Semester)", value: "24.000 €" },
];

/* ================================================================== */
/*  Page Component                                                     */
/* ================================================================== */

export default function EtfFuerKinderPage() {
  return (
    <div className="etf-lp">
      <FixedSocialRail />
      <LpHeader />
      <main>

      {/* ========== 1. HERO ========== */}
      <section className="relative overflow-hidden bg-linear-to-b from-primary-light/15 to-primary-light/20 pt-[30px] pb-[74px] md:pt-12.5 md:pb-25">
        <div className="mx-auto flex max-w-[1540px] flex-col gap-10 px-6 lg:grid lg:grid-flow-col lg:items-start lg:px-0">
          {/* Left: Video */}
          <div className="order-2 flex w-full justify-center pr-0 lg:order-1 lg:w-[600px] lg:justify-end lg:pr-3">
            <div className="w-full max-w-[313px] overflow-hidden rounded-[20px] bg-black shadow-none lg:w-fit lg:max-w-none lg:shadow-xl">
              <video
                className="h-[533px] w-full max-w-[300px] object-cover lg:h-[742px] lg:w-[417px] lg:max-w-none lg:aspect-3/4"
                controls
                preload="metadata"
                controlsList="nodownload"
                poster="/images/etf-video-poster.jpg"
              >
                <source
                  src="https://invest4kids.de/wp-content/uploads/2024/11/LP-Video-Header.mov"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 flex h-full w-full flex-col items-start justify-center font-outfit lg:order-2 lg:w-[895px]">
            {/* Trustpilot badge */}
            <div className="w-full max-w-[805px]">
              <div className="mb-6 hidden items-center gap-3 lg:flex">
                <Image
                  src="https://invest4kids.de/wp-content/uploads/2024/11/trustpilot-stars.c9889a20.svg"
                  alt="Trustpilot Sterne"
                  width={120}
                  height={27}
                />
                <Image
                  src="https://invest4kids.de/wp-content/uploads/2024/11/trustpilot-icon.svg"
                  alt="Trustpilot"
                  width={100}
                  height={27}
                />
              </div>

              <h1 className="mb-6 text-[36px] leading-[40px] font-medium text-text-dark md:text-[48px] md:leading-[48px]">
                ETF für Kinder: So baust du mit Invest4Kids ein starkes Fundament für die
                Zukunft deines Nachwuchses
              </h1>

              <div className="mb-6 h-px w-full bg-primary-light/50 md:w-12" />

              <ul className="mb-8 flex flex-col gap-2 text-[14px] leading-[24px] text-black font-medium md:text-lg md:leading-normal">
                <li>
                  ✅ <span className="font-semibold">Bis zu 25.703 €* mehr</span>, Vermögen des Kindes im Vergleich zum
                  Sparbuch oder Tagesgeldkonto
                </li>
                <li>
                  ✅ ETFs statt niedrige Zinsen: langfristiger Vermögensaufbau
                  durch Aktien ETFs, Fonds und Anleihen
                </li>
                <li>
                  ✅ Monatliche Sparrate flexibel anpassen – schon ab 25 € starten
                </li>
              </ul>

              <ShimmerCTA
                  className="bg-linear-to-r from-accent to-[#F4D98F] shadow-[0_12px_28px_rgba(248,191,60,0.3)]
                  after:hidden md:after:block text-center"
              >
                Jetzt kostenlose Beratung sichern
              </ShimmerCTA>

              <div className="mt-6 w-full">
                <TrustAvatars
                  dark
                  label="Über 5.200+ Eltern vertrauen Invest4Kids beim Sparen für Kinder"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PARTNER LOGO MARQUEE ========== */}
      <section className="w-full bg-[#FBFBFB] py-8 lg:py-10">
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          }}
        >
          <div
            className="flex will-change-transform [animation-play-state:running] hover:[animation-play-state:paused]"
            style={{ animation: "known-from-marquee 16s linear infinite" }}
          >
            {partnerTrack.map((logo, i) => (
              <div
                key={i}
                className="relative mx-2.5 flex h-14 w-[153px] flex-none items-center justify-center md:mx-4 md:h-16 md:w-[170px]"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={153}
                  height={64}
                  className="h-full w-auto cursor-pointer object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 2. WARUM KINDERGELD INVESTIEREN ========== */}
      <InvestChildBenefitSection />
      <ParentHesitationSection />
      <ExpertsTeamSection />
      <MissionCtaSection />
      <WishesFlowSection />
      <BenefitsCtaSection />
      <ProcessTimelineSection />

      {/* ========== 10. TESTIMONIALS ========== */}
      <EtfTestimonialsCarouselSection testimonials={testimonials} />

      {/* ========== 11. QUOTE + FINAL CTA ========== */}
      <section className="bg-[--color-bg-light-blue] py-[72px] md:py-[120px]">
        <div className="relative mx-auto w-full max-w-[1460px] px-6 md:px-8 lg:px-0">
          <div
            className="pointer-events-none absolute left-6 top-0 z-0 md:left-8 md:-top-1"
            aria-hidden="true"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={170}
              height={190}
            >
              <path
                fill="#E5EBEF"
                d="M464 32H304c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h64v64c0 35.3-28.7 64-64 64h-16c-13.3 0-24 10.7-24 24v56c0 13.3 10.7 24 24 24h16c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zM208 32H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h64v64c0 35.3-28.7 64-64 64H32c-13.3 0-24 10.7-24 24v56c0 13.3 10.7 24 24 24h16c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"
              />
            </svg>
          </div>

          <div className="relative z-10 w-full max-w-[900px]">
            <p className="text-[#133A7D] font-outfit text-[27px] sm:text-[32px] md:text-[44px] font-medium leading-[1.18]">
              Das Investieren in die Zukunft deines Kindes ist mehr als nur eine
              finanzielle Entscheidung – es ist ein Akt der Liebe und Fürsorge.
            </p>
            <ShimmerCTA
              className="mt-4 bg-linear-to-r from-[#F2BA2A] via-[#F4C84F] to-[#F6DA95] text-center
              shadow-[0_14px_32px_rgba(248,191,60,0.35)] after:hidden md:after:block"
            >
              Kostenlose Beratung sichern
            </ShimmerCTA>
          </div>
        </div>
      </section>


        {/* ========== 12. FAQ ACCORDION ========== */}
        <EtfFaqSection items={faqItems}/>

        <LpFooter/>
      </main>
    </div>
  );
}
