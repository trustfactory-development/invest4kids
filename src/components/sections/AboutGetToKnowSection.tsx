import {
  CalendarDays,
  Clock3,
  Rocket,
  ShieldCheck,
  Sprout,
} from "lucide-react";

const benefitCards = [
  {
    title: "Free of charge & without obligation",
    icon: ShieldCheck,
  },
  {
    title: "Without sales pressure",
    icon: Sprout,
  },
  {
    title: "A real plan for your child",
    icon: Rocket,
  },
] as const;

export function AboutGetToKnowSection() {
  return (
    <section className="bg-[#FBFBFB] px-5 py-12.5 md:px-7.5 md:pb-19 md:pt-25">
      <div className="mx-auto w-full max-w-275">
        <header className="text-center">
          <h2 className="font-poppins text-[27px] leading-normal font-extrabold text-text-medium md:text-[34px] md:leading-tight">
            Would you like to get to know us?
          </h2>

          <p className="mx-auto mt-4 hidden max-w-170 font-outfit text-[18px] leading-5.75 font-light text-[#4B5563] md:block">
            If you are currently considering how to secure your child&apos;s
            future, we are here for you with a free, no-obligation consultation.
          </p>
          <p className="mx-auto mt-4 max-w-170 font-outfit text-[16px] leading-5.25 font-light text-[#4B5563] md:hidden">
            If you are currently considering how to secure your child&apos;s
            future, we are here for you with a free, no-obligation consultation.
            Clearly explained. No sales pressure. But with a real plan.
          </p>
        </header>

        <div className="mx-auto mb-8.5 mt-8.5 grid w-full max-w-205 grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefitCards.map(({ title, icon: Icon }) => (
            <article
              key={title}
              className="flex flex-col items-center gap-4 rounded-[20px] bg-white p-6 text-center shadow-[2px_8px_20px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[2px_8px_20px_rgba(0,0,0,0.09)] md:flex-col md:gap-6 md:p-[34px]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-bg-cream">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.9} />
              </div>
              <h3 className="text-left font-outfit text-[16px] leading-5.25 font-normal text-[#4B5563] md:text-center md:text-[18px] md:leading-[24.5px]">
                {title}
              </h3>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <a
            href="https://www.invest4kids-beratung.de/start/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-11/12 items-center justify-center gap-1 rounded-[50px] border border-primary bg-primary px-9 py-[15px] font-outfit text-[16px] leading-none font-medium text-white transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-text-medium md:w-fit md:text-[18px]"
          >
            <CalendarDays className="h-4 w-4" strokeWidth={1.8} />
            <span>Get free advice</span>
          </a>

          <div className="mt-3 flex items-center justify-center gap-1.5 text-[#4B5563]">
            <Clock3 className="h-3 w-3" strokeWidth={1.8} />
            <p className="font-outfit text-[12px] leading-none font-normal">
              We usually respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
