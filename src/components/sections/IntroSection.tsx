import Container from "../layout/Container";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-sm">
            <Image
              src="/images/heroes/shield-logo.png"
              alt=""
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <span className="text-sm font-medium text-text-medium">
              &euro;25,703 more assets for your child
            </span>
          </div>

          <h2 className="text-xl font-semibold leading-snug md:text-[28px] md:leading-snug">
            Invest4Kids is the first port of call for parents who want to invest
            wisely and securely in ETFs for their children.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-text-medium md:text-base">
            With our specialized investment advice, we help families throughout
            Germany implement tailor-made ETF solutions for their children. We
            place great importance on a simple structure, full transparency, and
            long-term growth.
          </p>

          {/* Mission & Vision */}
          <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
            <div className="rounded-xl border border-border/60 bg-white p-5 transition-shadow hover:shadow-md">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-bg-light-blue">
                  <svg
                    className="h-3.5 w-3.5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold">Our mission</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-medium">
                We want to empower parents to make smart financial decisions for
                their children, thereby providing long-term security for
                generations to come.
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-white p-5 transition-shadow hover:shadow-md">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-bg-light-blue">
                  <svg
                    className="h-3.5 w-3.5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold">Our vision</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-medium">
                Every child in Germany should have the chance of a financially
                secure start in life. We believe that financial education and
                responsible investing begin in childhood.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
