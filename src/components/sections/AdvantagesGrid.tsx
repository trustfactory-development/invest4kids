import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const advantages = [
  {
    icon: (
      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Individual & independent",
    description:
      "Every family is different, which is precisely why we don't develop cookie-cutter solutions. With us, you get a personalized strategy that fits your goals and your family situation.",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Free of charge & transparent",
    description:
      "The consultation is 100% free of charge and there are no hidden fees. We are paid directly by the product providers if you decide to go ahead with the implementation.",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    title: "Digital & flexible",
    description:
      "Our consultations are conducted entirely online via video call, conveniently from home and with flexible scheduling. This leaves you more time for your family.",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
    title: "Understandable & at eye level",
    description:
      "You don't need to be an expert in investments. We'll guide you step by step and explain everything so that you feel confident and know exactly what is happening with your child's money.",
  },
];

export default function AdvantagesGrid() {
  return (
    <section className="bg-gradient-to-b from-bg-light-blue/30 to-bg-light-blue/60 py-14 md:py-20">
      <Container>
        <SectionHeading title="Your advantages at a glance" />
        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border/40 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-6"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-bg-light-blue">
                {item.icon}
              </div>
              <h3 className="mb-1.5 text-[15px] font-semibold md:text-base">
                {item.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-text-medium md:text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/invest4kids-konzept" variant="ghost" className="text-sm underline">
            You can find out more about the Invest4Kids concept here &rarr;
          </Button>
        </div>
      </Container>
    </section>
  );
}
