import Image from "next/image";
import Container from "../layout/Container";
import Button from "../ui/Button";

export default function CTABanner() {
  return (
    <section className="bg-gradient-to-br from-bg-light-blue via-bg-blue-mist to-bg-light-blue py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
          {/* Text */}
          <div className="max-w-lg">
            <h2 className="text-2xl font-bold leading-tight md:text-[30px] md:leading-[1.2]">
              Book your personal consultation now
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-text-medium md:text-base">
              Whether you&apos;re just starting out or have already built
              something up, we&apos;ll sit down with you for a personal
              consultation to work out what makes sense for your situation.
              Clearly explained. No sales pressure. But with a real plan.
            </p>
            <div className="mt-6">
              <Button
                href="https://www.invest4kids-beratung.de/start/"
                icon={
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                }
              >
                Book a free consultation
              </Button>
            </div>
          </div>

          {/* Phone mockup / dark image block */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-[300px] w-[200px] overflow-hidden rounded-2xl bg-primary shadow-xl md:h-[360px] md:w-[240px]">
              <Image
                src="/images/heroes/cta-image.webp"
                alt="Invest4Kids consultation"
                width={240}
                height={360}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="hidden h-[250px] w-[180px] overflow-hidden rounded-2xl bg-primary/90 shadow-lg md:block">
              <Image
                src="/images/heroes/group-photo.webp"
                alt=""
                width={180}
                height={250}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
