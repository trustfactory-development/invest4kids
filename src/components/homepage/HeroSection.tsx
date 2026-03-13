import Image from "next/image";
import Container from "../layout/Container";

const avatarMembers = ["patrick", "laila", "felix", "susanna"];
const featureItems = [
  <>
    <span className="font-medium text-[#2f3a48] underline decoration-[#2f3a48]/30 underline-offset-2">
      &euro;25,703 more per child
    </span>{" "}
    thanks to our modern ETF strategy
  </>,
  "Find the perfect ETF investment for your child in a 30-minute video conference from the comfort of your own home.",
  "Sit back and watch your child's assets grow - our experts will take care of the rest.",
];

export default function HomeHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#eaf5f8] pb-16 pt-14 md:pb-20 md:pt-20">
      <Container>
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div className="relative z-10 max-w-[560px]">
            <h1 className="font-poppins text-[38px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#24344c] md:text-[48px]">
              Investing for your child - simple, sensible and with experts at your
              side
            </h1>

            <div className="mt-7 space-y-3.5">
              {featureItems.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckIcon />
                  <p className="max-w-[590px] font-outfit text-[16px] font-normal leading-[1.45] text-[#2f3a48]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="https://www.invest4kids-beratung.de/start/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_6px_18px_rgba(19,58,125,0.2)] transition-colors hover:bg-primary-dark"
              >
                <svg
                  className="h-[16px] w-[16px]"
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
                Free consultation
              </a>
              <a
                href="/invest4kids-konzept"
                className="inline-flex items-center rounded-full border border-[#bfc9d6] bg-white px-7 py-3.5 font-outfit text-[15px] font-medium text-[#25344c] transition-colors hover:border-[#9aabbe] hover:bg-[#f7fbfd]"
              >
                How does Invest4Kids work?
              </a>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex -space-x-2">
                {avatarMembers.map((name) => (
                  <div
                    key={name}
                    className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-white bg-primary-light/30"
                  >
                    <Image
                      src={`/images/team/${name}.webp`}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="28px"
                    />
                  </div>
                ))}
              </div>
              <p className="font-outfit text-[14px] font-normal text-[#445364]">
                5200+ parents trust us
              </p>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="absolute left-[-14px] top-[84px] z-20 h-3 w-3 rounded-full bg-[#98c6d7]" />
            <div className="absolute left-0 top-[106px] z-20 h-[18px] w-[18px] rounded-full bg-[#c5dbe5]" />
            <div className="absolute left-[20px] top-[92px] z-20 h-3 w-3 rounded-full bg-[#f2d68a]" />
            <div className="absolute right-[-6px] top-[46px] z-20 h-5 w-5 rounded-full bg-[#d5ebf3]" />
            <div className="absolute right-[-18px] bottom-[20px] z-20 h-4 w-4 rounded-full bg-[#d0e3ec]" />

            <div className="absolute z-0 h-[84%] w-[90%] rounded-[20px] bg-[#f6e6b4]" />
            <div className="relative z-10 w-full max-w-[500px] overflow-hidden rounded-[16px] shadow-[0_8px_25px_rgba(18,48,92,0.12)]">
              <Image
                src="/images/heroes/group-photo.webp"
                alt="The Invest4Kids Team"
                width={500}
                height={320}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CheckIcon() {
  return (
    <div className="mt-[2px] flex h-5 w-5 shrink-0 items-center justify-center">
      <svg
        className="h-5 w-5 text-[#009846]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.3}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
  );
}
