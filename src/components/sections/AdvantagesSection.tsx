import {
  BookOpen,
  CircleHelp,
  Eye,
  Rocket,
  ShieldCheck,
  Target,
} from "lucide-react";

const advantageCards = [
  {
    title: "Klarheit statt Verwirrung",
    description:
      "Wir zeigen dir, welche Optionen für dich wirklich sinnvoll sind.",
    icon: ShieldCheck,
  },
  {
    title: "Eine klare Strategie, die zu dir passt:",
    description:
      "Abgestimmt auf deine Lebenssituation und das, was dir wichtig ist.",
    icon: Target,
  },
  {
    title: "Finanzwissen, das bleibt",
    description:
      "Du verstehst nicht nur das Ergebnis, sondern auch den Weg dorthin.",
    icon: BookOpen,
  },
  {
    title: "Ein Gespräch auf Augenhöhe",
    description:
      "Wir nehmen uns Zeit, beantworten deine Fragen ehrlich und erklären alles verständlich.",
    icon: Eye,
  },
  {
    title: "Raum für deine Fragen",
    description:
      "Welche Fragen dich auch beschäftigen, wir beantworten sie verständlich und individuell.",
    icon: CircleHelp,
  },
] as const;

export default function AdvantagesSection() {
  return (
    <section className="bg-[linear-gradient(90deg,#f2faf9_0%,#fdfaef_100%)]">
      <div className="mx-auto w-full max-w-275 px-5 py-14 sm:px-8 sm:py-16 lg:px-0 lg:py-24">
        <div className="mx-auto max-w-190 text-center">
          <h2 className="font-poppins text-[27px] leading-[1.2] font-bold tracking-[-0.03em] text-text-medium sm:text-[32px] lg:text-[34px]">
            Deine Vorteile auf einen Blick
          </h2>
          <p className="mx-auto mt-4 max-w-190 font-poppins text-[18px] lg:text-[20px] leading-[1.45] font-medium tracking-[-0.02em] text-[#4B5563]">
            Struktur, Klarheit und eine solide Basis für deine
            Finanzentscheidungen
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-6">
          {advantageCards.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="h-auto rounded-3xl bg-[#FFFFFFB8] px-6 py-6 shadow-[0_12px_24px_rgba(44,62,80,0.05)] transition-shadow duration-300 hover:shadow-[0_16px_28px_rgba(44,62,80,0.1)] sm:px-7 sm:py-7 lg:min-h-[250px] lg:px-7 lg:py-8"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#84B7CA4D] lg:h-11 lg:w-11">
                  <Icon className="h-4 w-4 text-primary lg:h-5 lg:w-5" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-poppins text-[18px] leading-[1.35] font-medium tracking-[-0.02em] text-text-medium lg:text-[20px]">
                    {title}
                  </h3>
                </div>
              </div>
              <p className="mt-5 max-w-[288px] font-outfit text-[16px] leading-[1.45] font-normal text-[#4B5563] lg:text-[18px]">
                {description}
              </p>
            </article>
          ))}

          <div className="flex min-h-44 flex-col items-center gap-6 rounded-3xl px-6 py-7 lg:min-h-62.5 lg:px-8 lg:py-10">
            <h3 className="font-poppins text-[18px] leading-[1.35] font-medium tracking-[-0.02em] text-text-medium lg:text-[20px]">
              Bereit für finanzielle Klarheit?
            </h3>
            <div className="flex w-full items-center justify-center">
              <button
                type="button"
                className="inline-flex h-11.5 w-full max-w-[320px] cursor-pointer items-center justify-center gap-2 rounded-full border border-accent bg-white px-6 font-outfit text-base leading-none font-semibold text-[#4B5563] transition-colors duration-300 hover:bg-accent-hover hover:text-text-medium sm:max-w-[320px] lg:w-45 lg:text-[18px]"
              >
                <Rocket className="h-4 w-4 text-[#4B5563]" strokeWidth={1.8} />
                <span>Jetzt starten</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
