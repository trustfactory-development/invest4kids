"use client";

import { MessageCircle, Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqItems = [
  {
    question: "Kostet die Beratung etwas?",
    answer:
      "Nein. Die Beratung ist zu 100 % kostenfrei und unverbindlich.",
  },
  {
    question: "Muss ich direkt einen Vertrag abschließen?",
    answer:
      "Nein. Du entscheidest in deinem Tempo und gehst nur weiter, wenn die Empfehlung zu deiner Familie passt.",
  },
  {
    question: "Muss ich mich auf das Gespräch vorbereiten?",
    answer:
      "Keine besondere Vorbereitung nötig. Wir führen dich Schritt für Schritt durch das Gespräch.",
  },
  {
    question: "Wie lange dauert das Gespräch?",
    answer:
      "Das Gespräch dauert in der Regel ca. 30 Minuten, je nach deinen Fragen und deiner Situation.",
  },
] as const;

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#FBFBFB]">
      <div className="mx-auto w-full max-w-275 px-5 py-14 sm:px-6 sm:py-16 lg:px-0 lg:py-24">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="font-poppins text-[27px] leading-[1.4] font-extrabold tracking-[-0.03em] text-text-medium lg:text-[34px]">
            Noch Fragen zur Beratung? Hier sind die wichtigsten Antworten
          </h2>
        </div>

        <div className="mx-auto mt-10 flex max-w-227.5 flex-col gap-6">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const Icon = isOpen ? Minus : Plus;

            return (
              <article
                key={item.question}
                className={`overflow-hidden rounded-[10px] border bg-white shadow-[0_10px_22px_rgba(44,62,80,0.06)] transition-all duration-300 ${
                  isOpen
                    ? "border-[#1E1E1E]"
                    : "border-border hover:shadow-[0_14px_28px_rgba(44,62,80,0.10)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="group flex min-h-[72px] w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left sm:px-8"
                >
                  <span
                    className={`font-poppins text-[18px] leading-[1.35] font-medium transition-colors duration-300 lg:text-[20px] ${
                      isOpen
                        ? "text-text-medium"
                        : "text-text-medium group-hover:text-accent-hover"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F6F4F2] text-primary">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-[#E9E7E3] px-5 py-4 sm:px-8 sm:py-5">
                      <div className="flex items-start gap-5">
                        <div className="w-[2px] shrink-0 self-stretch bg-primary" />
                        <p className="font-outfit text-[16px] leading-[1.45] font-normal text-[#4B5563] lg:text-[18px]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-8 max-w-227.5 rounded-[10px] border border-border bg-white px-4 py-6 shadow-[0_10px_22px_rgba(44,62,80,0.06)] sm:px-8 sm:py-8">
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-center">
              <div className="flex h-16.5 w-16.5 items-center justify-center rounded-xl bg-[rgba(225,247,236,0.88)] shadow-[0_14px_24px_rgba(44,62,80,0.08)] ring-1 ring-white/60 backdrop-blur-[2px] lg:h-17.5 lg:w-17.5">
                <MessageCircle className="h-9 w-9 text-[#08E000]" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-poppins text-[18px] leading-[1.35] font-bold tracking-[-0.02em] text-text-medium lg:text-[20px]">
                  Deine Frage war nicht dabei?
                </h3>
                <p className="mt-2 font-outfit text-[16px] leading-[1.45] font-light text-[#4B5563] lg:text-[18px]">
                  Schreib uns einfach über WhatsApp.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex h-10.5 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#08E000] px-6 py-2 font-outfit text-[16px] leading-none font-semibold text-text-medium transition-colors duration-300 hover:bg-[#1bf10f] sm:w-auto sm:min-w-[255px]"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} />
              <span>WhatsApp Chat starten</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
