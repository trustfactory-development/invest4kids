import { Eye, Rocket, ShieldCheck, UserRound } from "lucide-react";

const cards = [
  {
    title: "Individuell & unabhängig:",
    description:
      "Jede Familie ist anders und genau deshalb entwickeln wir keine 08/15 Lösungen. Bei uns bekommst du eine persönliche Strategie, die zu deinen Zielen und deiner Familiensituation passt.",
    icon: UserRound,
  },
  {
    title: "Kostenlos & transparent:",
    description:
      "Die Beratung ist zu 100 % kostenfrei und ganz ohne versteckte Gebühren. Wir werden direkt von den Produktanbietern vergütet, wenn du dich für eine Umsetzung entscheidest.",
    icon: ShieldCheck,
  },
  {
    title: "Digital & flexible:",
    description:
      "Unsere Beratung läuft vollständig online über einen Video-Call, bequem von Zuhause und flexibel planbar. So bleibt dir mehr Zeit für deine Familie.",
    icon: Rocket,
  },
  {
    title: "Verständlich & auf Augenhöhe",
    description:
      "Du musst dich mit Investments nicht auskennen. Wir nehmen dich Schritt für Schritt mit und erklären alles so, dass du dich sicher fühlst und genau weißt, was mit dem Geld deines Kindes passiert.",
    icon: Eye,
  },
] as const;

export default function AdvantagesGrid() {
  return (
    <section className="bg-bg-light-blue">
      <div className="mx-auto w-full max-w-[1100px] px-4 py-14 sm:px-6 sm:py-16 lg:px-0 lg:py-20">
        {/* Heading */}
        <div className="text-center">
          <h2 className="mx-auto max-w-[1100px] font-poppins text-[27px]  font-bold  text-text-medium md:text-[34px]">
            Deine Vorteile auf einen Blick
          </h2>
        </div>

        {/* Card grid */}
        <div className="mt-8 grid gap-6 lg:mt-9 lg:grid-cols-2 lg:gap-6 ">
          {cards.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[24px]  px-6 py-6 shadow-[0_12px_24px_rgba(44,62,80,0.03)] sm:px-8 sm:py-8 lg:min-h-[219px] bg-[#FFFFFFB8]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#D7E4EA]">
                  <Icon className="h-[18px] w-[18px] text-primary" strokeWidth={1.8} />
                </div>
                <h3 className="font-poppins text-[18px] lg:text-[20px] leading-[1.35] font-medium tracking-[-0.02em] text-text-medium">
                  {title}
                </h3>
              </div>
              <p className="mt-6 max-w-[530px] font-outfit text-base lg:text-[18px] leading-[1.3] font-normal text-[#4B5563]">
                {description}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom actions */}
        <div className="mt-7 flex flex-col gap-6 lg:mt-5 lg:flex-row lg:items-center lg:justify-between">
          <a
            href="#"
            className="font-poppins text-[20px]  font-semibold tracking-[-0.02em] text-[#4B5563] underline  underline-offset-2"
          >
            mehr zum Invest4Kids Konzept findest du hier →
          </a>
          <button
            type="button"
            className=" text-base md:text-[18x]inline-flex h-[50px] items-center justify-center rounded-full bg-primary  hover:bg-accent-hover cursor-pointer hover:text-text-medium duration-300 font-outfit text-[16px] leading-none font-semibold text-white sm:w-auto sm:self-start py-[15px] px-[36px]"
          >
            Mehr dazu
          </button>
        </div>
      </div>
    </section>
  );
}