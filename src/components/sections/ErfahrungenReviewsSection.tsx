"use client";

import { useEffect, useState } from "react";

type Review = {
  name: string;
  time: string;
  fullTime: string;
  avatar: string;
  text: string;
  initial: string;
  bg: string;
};

const reviews: Review[] = [
  {
    name: "Sezen Tatlıcı",
    time: "vor 4 Tagen",
    fullTime: "10. März 2026 um 15:24 GMT+3",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjX6wPEHJkpJ6N_LUoEzwbhJOUIoAFlIcyw6c3tdkyPBHTJSekM=w80-h80-c-rp-mo-ba2-br100",
    text: "Mallik hat mich kompetent, freundlich und geduldig beraten. Danke! Dieses Produkt ist für alle Eltern geeignet, die sich (aus welchen Gründen auch immer) nicht mit dem Aktienmarkt befassen wollen/können. Für Eltern, die einfach nur wollen, dass das, was sie jeden Monat für das eigene Kind ansparen, sich vermehrt und nicht weniger wird, wie bei normalen Sparbüchern, die der Inflation zum Opfer fallen. Hier haben sie einen guten Ansprechpartner und müssen selbst nichts tun und können stattdessen beobachten, dass das Vermögen des Kindes sich stetig aufbaut.",
    initial: "S",
    bg: "#EADFCF",
  },
  {
    name: "Daniela Schmidt",
    time: "vor 5 Tagen",
    fullTime: "9. März 2026 um 22:14 GMT+3",
    avatar: "",
    text: "Das Beratungsgespräch war sehr nett und professionell.",
    initial: "D",
    bg: "#417D1F",
  },
  {
    name: "Natalia Troitzsch",
    time: "vor 5 Tagen",
    fullTime: "9. März 2026 um 11:26 GMT+3",
    avatar: "",
    text: "Sehr freundliche und kompetente Beratung. Herr Kotala nimmt sich viel Zeit, erklärt alles verständlich und geht auf alle Fragen ein. Man merkt, dass ihm eine gute und langfristige Lösung für Kinder und Familien wichtig ist. Ich fühle mich sehr gut beraten. Vielen Dank für die tolle Unterstützung!",
    initial: "N",
    bg: "#EA3F7A",
  },
  {
    name: "Linh Pfeifer",
    time: "vor 1 Woche",
    fullTime: "6. März 2026 um 12:58 GMT+3",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjW_p0ZANR-mqJt3E1kmGSTr0QNaBPZuwTphPpk7Al5bIhTETDkH=w80-h80-c-rp-mo-br100",
    text: "Die Beratung war von Anfang an sehr professionell, transparent und verständlich erklärt. Susanna hat sich viel Zeit genommen, um alle Fragen ausführlich zu beantworten und verschiedene Möglichkeiten ruhig und geduldig zu erklären. Man merkt sofort, dass ihr das Wohl der Familien und Kinder wirklich am Herzen liegt. Besonders gefallen hat mir die freundliche Art und dass alles Schritt für Schritt nachvollziehbar erklärt wurde. Dadurch fühlt man sich gut aufgehoben und kann Entscheidungen mit einem sicheren Gefühl treffen. Vielen Dank an Susanna und das Team von invest4kids für die tolle Unterstützung – ich kann die Beratung auf jeden Fall weiterempfehlen!",
    initial: "L",
    bg: "#5B6678",
  },
  {
    name: "Kerstin H.",
    time: "vor 2 Wochen",
    fullTime: "26. Februar 2026 um 20:34 GMT+3",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocJkhndeRG5O4O1GMbm69QM2kmw-h_VNO-mqxrhJhiLh_S--Jg=w80-h80-c-rp-mo-ba2-br100",
    text: "Vom ersten Kontakt (Terminanfrage) bis zum persönlichen Onlinetermin lief alles super. Zu Beginn gab es ein erstes Telefonat, wo die Rahmenbedingungen erklärt wurden. Anschließend wurde gemeinsam geschaut, wann wir einen für uns passenden Termin finden können, welcher dann schon eine Woche später war. Am Tag des Gespräches wurden wir sogar nochmal an den Termin per WhatsApp erinnert. Wir fühlen uns sehr gut aufgehoben und bereuen nicht, den Schritt gegangen zu sein.",
    initial: "K",
    bg: "#8B3F0B",
  },
  {
    name: "Katharina Müller",
    time: "vor 2 Wochen",
    fullTime: "25. Februar 2026 um 16:29 GMT+3",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocLYHyEMB0qk5hdg7_FjIZj_ShjSrnLKePCn3XURhXzdK1Wtbg=w80-h80-c-rp-mo-br100",
    text: "Wir haben für unsere Kinder Verträge bei Invest 4 Kids abgeschlossen und sind mit dem gesamten Service sehr zufrieden. Unsere Ansprechpartnerin Laila war super freundlich und sehr kompetent. Wir haben uns bestens beraten und begleitet gefühlt. Vielen Dank für den tollen Service!",
    initial: "K",
    bg: "#CF2F72",
  },
  {
    name: "A.M.",
    time: "vor 2 Wochen",
    fullTime: "25. Februar 2026 um 15:44 GMT+3",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocIsfTMMO84EryezOOVwEsgKWOvOxF-JwCy02AYiRjvlWdZOgA=w80-h80-c-rp-mo-br100",
    text: "Super liebe und informative Präsentation. Fragen wurden ehrlich und transparent beantwortet. Punkte wurden alle besprochen und man merkt, dass hier auch mit Herz und Verstand gearbeitet wird. Man fühlt sich sicher und gut aufgehoben. Vielen Dank!",
    initial: "A",
    bg: "#5B6678",
  },
];

function ReviewCard({
  review,
  onReadMore,
  isDesktop,
}: {
  review: Review;
  onReadMore: () => void;
  isDesktop?: boolean;
}) {
  return (
    <article className="min-h-[232px] rounded-[16px] border border-[#ECECEC] bg-white px-[20px] py-[18px] shadow-[1px_4px_10px_0_rgba(0,0,0,0.08),0_0_2px_0_rgba(0,0,0,0.05)]">
      <div className="flex items-start justify-between gap-[12px]">
        <div className="flex min-w-0 items-center gap-[12px]">
          {review.avatar ? (
            <img
              src={review.avatar}
              alt={review.name}
              className="h-[40px] w-[40px] shrink-0 rounded-full object-cover"
              draggable={false}
            />
          ) : (
            <div
              className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full text-[17px] font-[600] text-white"
              style={{ backgroundColor: review.bg }}
            >
              {review.initial}
            </div>
          )}

          <div className="min-w-0">
            <div className="truncate text-[16px] leading-[1.2] font-[700] text-[#111111]">
              {review.name}
            </div>
            {isDesktop ? (
              <div className="group/time relative z-[20] mt-[4px] inline-block text-[14px] leading-none text-[#8B8B8B]">
                {review.time}
                <div className="pointer-events-none absolute left-1/2 top-[-42px] z-[40] -translate-x-1/2 whitespace-nowrap rounded-[8px] bg-black px-[10px] py-[7px] text-[12px] leading-none text-white opacity-0 shadow-[0_6px_18px_rgba(0,0,0,0.28)] transition-opacity duration-200 group-hover/time:opacity-100">
                  {review.fullTime}
                </div>
              </div>
            ) : (
              <div className="mt-[4px] text-[14px] leading-none text-[#8B8B8B]">
                {review.time}
              </div>
            )}
          </div>
        </div>

        {isDesktop ? (
          <div className="group/google relative z-[30] shrink-0">
            <img
              src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
              alt="Google"
              className="mt-[2px] h-[20px] w-[20px] shrink-0"
              draggable={false}
            />
            <div className="pointer-events-none absolute right-0 top-[-44px] z-[40] whitespace-nowrap rounded-[8px] bg-black px-[10px] py-[7px] text-[12px] leading-none text-white opacity-0 shadow-[0_6px_18px_rgba(0,0,0,0.28)] transition-opacity duration-200 group-hover/google:opacity-100">
              Gepostet auf Google
            </div>
          </div>
        ) : (
          <img
            src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
            alt="Google"
            className="mt-[2px] h-[20px] w-[20px] shrink-0"
            draggable={false}
          />
        )}
      </div>

      <div className="mt-[12px] flex items-center gap-[6px]">
        <div className="flex items-center gap-[2px]">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <img
              key={starIndex}
              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
              alt="star"
              className="h-[17px] w-[17px]"
              draggable={false}
            />
          ))}
        </div>

        {isDesktop ? (
          <div className="group/check relative z-[20]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              className="h-[16px] w-[16px]"
            >
              <circle cx="8.5" cy="8.5" r="8.5" fill="#4285F4" />
              <path
                d="M12.301 6.374L7.509 11.166L5.242 8.899"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="pointer-events-none absolute left-1/2 top-[-48px] z-[40] w-[190px] -translate-x-1/2 rounded-[8px] bg-black px-[10px] py-[8px] text-[12px] leading-[1.25] text-white opacity-0 shadow-[0_6px_18px_rgba(0,0,0,0.28)] transition-opacity duration-200 group-hover/check:opacity-100">
              Trustindex überprüft, ob die Originalquelle der Bewertung Google
              ist.
            </div>
          </div>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            className="h-[16px] w-[16px]"
          >
            <circle cx="8.5" cy="8.5" r="8.5" fill="#4285F4" />
            <path
              d="M12.301 6.374L7.509 11.166L5.242 8.899"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      <div className="mt-[12px] line-clamp-4 text-[16px] leading-[1.38] text-[#1F1F1F]">
        {review.text}
      </div>

      <button
        type="button"
        onClick={onReadMore}
        className="mt-[10px] cursor-pointer text-[14px] text-[#8B8B8B] transition-colors duration-200 hover:text-[#556274]"
      >
        Weiterlesen
      </button>
    </article>
  );
}

function ArrowLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="15"
      viewBox="0 0 9 15"
      fill="none"
      className="h-[14px] w-[8px]"
    >
      <path
        d="M0 7.5L7.2973 15L9 13.25L3.40541 7.5L9 1.75L7.2973 0L0 7.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="15"
      viewBox="0 0 9 15"
      fill="none"
      className="h-[14px] w-[8px]"
    >
      <path
        d="M9 7.5L1.7027 15L0 13.25L5.59459 7.5L0 1.75L1.7027 0L9 7.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    className="h-[16px] w-[16px]"
  >
    <path
      d="M16 6.375C16 6.56286 15.9298 6.74303 15.8047 6.87587C15.6797 7.00871 15.5101 7.08333 15.3333 7.08333C15.1565 7.08333 14.987 7.00871 14.8619 6.87587C14.7369 6.74303 14.6667 6.56286 14.6667 6.375V2.41896L9.13917 8.29281C9.01407 8.42572 8.84441 8.50039 8.6675 8.50039C8.49059 8.50039 8.32093 8.42572 8.19583 8.29281C8.07074 8.1599 8.00046 7.97963 8.00046 7.79167C8.00046 7.6037 8.07074 7.42343 8.19583 7.29052L13.7233 1.41667H10C9.82319 1.41667 9.65362 1.34204 9.52859 1.2092C9.40357 1.07636 9.33333 0.896195 9.33333 0.708333C9.33333 0.520472 9.40357 0.340304 9.52859 0.207466C9.65362 0.0746279 9.82319 0 10 0H15.3333C15.5101 0 15.6797 0.0746279 15.8047 0.207466C15.9298 0.340304 16 0.520472 16 0.708333V6.375ZM12.6667 8.5C12.4899 8.5 12.3203 8.57463 12.1953 8.70747C12.0702 8.8403 12 9.02047 12 9.20833V15.5833H1.33333V4.25H7.33333C7.51014 4.25 7.67971 4.17537 7.80474 4.04253C7.92976 3.9097 8 3.72953 8 3.54167C8 3.35381 7.92976 3.17364 7.80474 3.0408C7.67971 2.90796 7.51014 2.83333 7.33333 2.83333H1.33333C0.979711 2.83333 0.640573 2.98259 0.390524 3.24827C0.140476 3.51394 0 3.87428 0 4.25V15.5833C0 15.9591 0.140476 16.3194 0.390524 16.5851C0.640573 16.8507 0.979711 17 1.33333 17H12C12.3536 17 12.6928 16.8507 12.9428 16.5851C13.1929 16.3194 13.3333 15.9591 13.3333 15.5833V9.20833C13.3333 9.02047 13.2631 8.8403 13.1381 8.70747C13.013 8.57463 12.8435 8.5 12.6667 8.5Z"
      fill="currentColor"
    />
  </svg>
);

export default function ErfahrungenReviewsSection() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewsModalOpen, setReviewsModalOpen] = useState(false);
  const [isDesktopReviews, setIsDesktopReviews] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const syncReviewsViewport = () => setIsDesktopReviews(mediaQuery.matches);

    syncReviewsViewport();
    mediaQuery.addEventListener("change", syncReviewsViewport);

    return () => mediaQuery.removeEventListener("change", syncReviewsViewport);
  }, []);

  const visibleReviews = isDesktopReviews ? 3 : 1;
  const maxReviewIndex = Math.max(reviews.length - visibleReviews, 0);

  useEffect(() => {
    setReviewIndex((prev) => Math.min(prev, maxReviewIndex));
  }, [maxReviewIndex]);

  const showPrevReviews = () => {
    setReviewIndex((prev) => Math.max(prev - 1, 0));
  };

  const showNextReviews = () => {
    setReviewIndex((prev) => Math.min(prev + 1, maxReviewIndex));
  };

  return (
    <section className="bg-white  px-[20px] py-[60px] sm:px-[24px] sm:py-[80px] md:px-[30px] md:py-[100px]">
      <div className="mx-auto max-w-[1100px]">
        {/* heading */}
        <div className="mx-auto max-w-[920px] text-center">
          <h2 className="text-[27px] leading-[1.25] font-[800] text-[#2C3E50] sm:text-[30px] md:text-[34px]">
            Bewertungen auf Google &amp; Trustpilot
          </h2>

          <p className="mx-auto mt-[18px] max-w-[860px] font-medium text-[16px] leading-[1.42] font-[300] text-[#4B5563] md:text-[20px]">
            Mehr als <span className="text-primary">1000 Eltern</span> haben
            uns auf Trustpilot und Google bewertet – mit durchschnittlich{" "}
            <span className="text-primary">4,9 von 5 Sternen</span>.
          </p>
        </div>

        {/* slider */}
        <div className="relative mt-[34px] md:mt-[42px]">
          {/* arrows desktop */}
          <button
            type="button"
            onClick={showPrevReviews}
            aria-label="Previous reviews"
            className="absolute left-[-14px] top-[118px] z-10 hidden h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full border border-[#D5D7DB] bg-[#F7F7F8] text-[#7B8088] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-colors duration-200 hover:bg-white disabled:cursor-default disabled:opacity-45 md:flex"
            disabled={reviewIndex === 0}
          >
            <ArrowLeft />
          </button>

          <button
            type="button"
            onClick={showNextReviews}
            aria-label="Next reviews"
            className="absolute right-[-14px] top-[118px] z-10 hidden h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full border border-[#D5D7DB] bg-[#F7F7F8] text-[#7B8088] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-colors duration-200 hover:bg-white disabled:cursor-default disabled:opacity-45 md:flex"
            disabled={reviewIndex >= maxReviewIndex}
          >
            <ArrowRight />
          </button>

          {/* mobile pager with side arrows */}
          <div className="relative md:hidden">
            <button
              type="button"
              onClick={showPrevReviews}
              aria-label="Previous reviews"
              className="absolute left-[-14px] top-1/2 z-10 flex h-[34px] w-[34px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#D5D7DB] bg-[#F7F7F8] text-[#7B8088] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-colors duration-200 hover:bg-white disabled:cursor-default disabled:opacity-45"
              disabled={reviewIndex === 0}
            >
              <ArrowLeft />
            </button>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${reviewIndex * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div
                    key={`${review.name}-${index}`}
                    className="w-full shrink-0 px-[2px]"
                  >
                    <ReviewCard
                      review={review}
                      onReadMore={() => setReviewsModalOpen(true)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={showNextReviews}
              aria-label="Next reviews"
              className="absolute right-[-14px] top-1/2 z-10 flex h-[34px] w-[34px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#D5D7DB] bg-[#F7F7F8] text-[#7B8088] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-colors duration-200 hover:bg-white disabled:cursor-default disabled:opacity-45"
              disabled={reviewIndex >= maxReviewIndex}
            >
              <ArrowRight />
            </button>
          </div>

          {/* desktop real track */}
          <div className="hidden overflow-x-hidden overflow-y-visible md:block py-7">
            <div
              className="flex gap-[16px] transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(-${reviewIndex} * ((100% - 32px) / 3 + 16px)))`,
              }}
            >
              {reviews.map((review, index) => (
                <div
                  key={`${review.name}-${index}`}
                  className="group min-w-0 shrink-0 basis-[calc((100%-32px)/3)]"
                  style={{ width: "calc((100% - 32px) / 3)" }}
                >
                  <ReviewCard
                    review={review}
                    onReadMore={() => setReviewsModalOpen(true)}
                    isDesktop
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* bottom buttons */}
        <div className="mt-[34px] flex flex-col items-center justify-center gap-[16px] md:mt-[42px] md:flex-row md:gap-[34px]">
          <a
            href="https://maps.app.goo.gl/Wkan6JM1G7vNrJhP9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[50px] font-outfit min-w-[286px] cursor-pointer items-center justify-center rounded-[10px] border border-[#D2D4D8] bg-transparent px-[24px] text-[18px] font-medium text-[#2C3E50] transition-all duration-300 hover:border-[#BFC3C9] hover:bg-white"
          >
            <span className="flex items-center gap-[10px]">
              <span>Alle Google-Bewertungen ansehen</span>
              <ExternalLinkIcon />
            </span>
          </a>

          <a
            href="https://de.trustpilot.com/review/invest4kids.de"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[50px] font-outfit min-w-[300px] cursor-pointer items-center justify-center rounded-[10px] border border-[#D2D4D8] bg-transparent px-[24px] text-[18px] font-medium text-[#2C3E50] transition-all duration-300 hover:border-[#BFC3C9] hover:bg-white"
          >
            <span className="flex items-center gap-[10px]">
              <span>Alle Trustpilot-Bewertungen ansehen</span>
              <ExternalLinkIcon />
            </span>
          </a>
        </div>
      </div>

      {/* all reviews modal */}
      {reviewsModalOpen && (
        <div className="fixed inset-0 z-[120] bg-[rgba(20,28,40,0.60)]">
          <button
            type="button"
            aria-label="Close reviews"
            onClick={() => setReviewsModalOpen(false)}
            className="absolute inset-0 cursor-default"
          />

          <div className="relative z-[121] flex min-h-screen items-start justify-center px-[16px] py-[28px]">
            <div className="relative w-full max-w-[520px]">
              <button
                type="button"
                onClick={() => setReviewsModalOpen(false)}
                className="absolute right-[-6px] top-[-6px] z-[130] flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-full text-white/90 transition-colors duration-200 hover:text-white"
                aria-label="Close reviews"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  className="h-[15px] w-[15px]"
                >
                  <path
                    d="M14.7802 13.719C14.8499 13.7887 14.9052 13.8714 14.9429 13.9625C14.9806 14.0535 15 14.1511 15 14.2496C15 14.3482 14.9806 14.4457 14.9429 14.5368C14.9052 14.6278 14.8499 14.7105 14.7802 14.7802C14.7105 14.8499 14.6278 14.9052 14.5368 14.9429C14.4457 14.9806 14.3482 15 14.2496 15C14.1511 15 14.0535 14.9806 13.9625 14.9429C13.8714 14.9052 13.7887 14.8499 13.719 14.7802L7.5 8.56025L1.28097 14.7802C1.14025 14.9209 0.949387 15 0.750375 15C0.551363 15 0.360502 14.9209 0.21978 14.7802C0.0790571 14.6395 0 14.4486 0 14.2496C0 14.0506 0.0790571 13.8598 0.21978 13.719L6.43975 7.5L0.21978 1.28097C0.0790571 1.14025 0 0.949387 0 0.750375C0 0.551363 0.0790571 0.360502 0.21978 0.21978C0.360502 0.0790571 0.551363 0 0.750375 0C0.949387 0 1.14025 0.0790571 1.28097 0.21978L7.5 6.43975L13.719 0.21978C13.8598 0.0790571 14.0506 0 14.2496 0C14.4486 0 14.6395 0.0790571 14.7802 0.21978C14.9209 0.360502 15 0.551363 15 0.750375C15 0.949387 14.9209 1.14025 14.7802 1.28097L8.56025 7.5L14.7802 13.719Z"
                    fill="currentColor"
                  />
                </svg>
              </button>

              <div className="max-h-[90vh] overflow-y-auto pr-[4px]">
                <div className="space-y-[14px]">
                  {reviews.map((review, index) => (
                    <article
                      key={`${review.name}-modal-${index}`}
                      className="rounded-[16px] border border-[#ECECEC] bg-white px-[18px] py-[16px] shadow-[1px_4px_10px_0_rgba(0,0,0,0.08),0_0_2px_0_rgba(0,0,0,0.05)]"
                    >
                      <div className="flex items-start justify-between gap-[12px]">
                        <div className="flex min-w-0 items-center gap-[12px]">
                          {review.avatar ? (
                            <img
                              src={review.avatar}
                              alt={review.name}
                              className="h-[40px] w-[40px] shrink-0 rounded-full object-cover"
                              draggable={false}
                            />
                          ) : (
                            <div
                              className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full text-[17px] font-[600] text-white"
                              style={{ backgroundColor: review.bg }}
                            >
                              {review.initial}
                            </div>
                          )}

                          <div className="min-w-0">
                            <div className="truncate text-[16px] leading-[1.2] font-[700] text-[#111111]">
                              {review.name}
                            </div>
                            <div className="group/time relative z-[20] mt-[4px] inline-block text-[14px] leading-none text-[#8B8B8B]">
                              {review.time}
                              <div className="pointer-events-none absolute left-1/2 top-[-42px] z-[40] -translate-x-1/2 whitespace-nowrap rounded-[8px] bg-black px-[10px] py-[7px] text-[12px] leading-none text-white opacity-0 shadow-[0_6px_18px_rgba(0,0,0,0.28)] transition-opacity duration-200 group-hover/time:opacity-100">
                                {review.fullTime}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="group/google relative z-[30] shrink-0">
                          <img
                            src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                            alt="Google"
                            className="mt-[2px] h-[20px] w-[20px] shrink-0"
                            draggable={false}
                          />
                          <div className="pointer-events-none absolute right-0 top-[-44px] z-[40] whitespace-nowrap rounded-[8px] bg-black px-[10px] py-[7px] text-[12px] leading-none text-white opacity-0 shadow-[0_6px_18px_rgba(0,0,0,0.28)] transition-opacity duration-200 group-hover/google:opacity-100">
                            Gepostet auf Google
                          </div>
                        </div>
                      </div>

                      <div className="mt-[12px] flex items-center gap-[6px]">
                        <div className="flex items-center gap-[2px]">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <img
                              key={starIndex}
                              src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                              alt="star"
                              className="h-[17px] w-[17px]"
                              draggable={false}
                            />
                          ))}
                        </div>

                        <div className="group/check relative z-[20]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            className="h-[16px] w-[16px]"
                          >
                            <circle cx="8.5" cy="8.5" r="8.5" fill="#4285F4" />
                            <path
                              d="M12.301 6.374L7.509 11.166L5.242 8.899"
                              stroke="white"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="pointer-events-none absolute left-1/2 top-[-48px] z-[40] w-[190px] -translate-x-1/2 rounded-[8px] bg-black px-[10px] py-[8px] text-[12px] leading-[1.25] text-white opacity-0 shadow-[0_6px_18px_rgba(0,0,0,0.28)] transition-opacity duration-200 group-hover/check:opacity-100">
                            Trustindex überprüft, ob die Originalquelle der
                            Bewertung Google ist.
                          </div>
                        </div>
                      </div>

                      <div className="mt-[12px] text-[16px] leading-[1.42] text-[#1F1F1F]">
                        {review.text}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
