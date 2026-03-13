import Image from "next/image";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const steps = [
  {
    number: "1",
    title: "Telephone Getting to know each other",
    description:
      "Within the next 48 hours, a member of our team will call you to clarify the most important questions in advance.",
    image: "/images/heroes/step1.jpg",
  },
  {
    number: "2",
    title: "Your consultation",
    description:
      "During the 30-minute consultation, your personal advisor will put together a strategy tailored to you and your child.",
    image: "/images/heroes/step2.jpg",
  },
  {
    number: "3",
    title: "Lean back!",
    description:
      "Your work is done! From implementation to monitoring and optimization, we take care of everything! - Simple, non-binding and accompanied step by step.",
    image: "/images/heroes/step3.jpg",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="bg-bg-blue-mist/60 py-16 md:py-24">
      <Container>
        <SectionHeading
          title="What does a collaboration with us look like?"
          subtitle="This is how your free investment consultation with Invest4Kids works:"
        />
        <div className="mx-auto max-w-3xl">
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-[23px] top-12 hidden h-[calc(100%-96px)] w-0.5 bg-border md:block" />

            <div className="flex flex-col gap-6">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-4 md:gap-6"
                >
                  {/* Number */}
                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-white shadow-md">
                    {step.number}
                  </div>
                  {/* Card */}
                  <div className="flex flex-1 gap-4 rounded-xl border border-border/40 bg-white p-5 shadow-sm md:gap-6">
                    <div className="flex-1">
                      <h3 className="mb-1.5 text-base font-semibold md:text-[17px]">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-text-medium">
                        {step.description}
                      </p>
                    </div>
                    <div className="hidden h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-bg-light-blue sm:block">
                      <Image
                        src={step.image}
                        alt=""
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button href="/beratung" variant="outline" className="text-sm">
              More info
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
