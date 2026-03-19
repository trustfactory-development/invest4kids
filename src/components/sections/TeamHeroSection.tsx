import Image from "next/image";

export function TeamHeroSection() {
  return (
    <section className="bg-bg-light-blue px-0 pb-27.5 pt-25 lg:px-7.5 lg:pb-25.5 lg:pt-0">
      <div className="mx-auto w-full max-w-275">
        <div className="relative">
          <Image
            src="https://invest4kids.de/wp-content/uploads/2025/12/team.webp"
            alt="Group photo of the Invest4Kids team, which supports parents with financial advice"
            width={2200}
            height={866}
            className="h-auto w-full"
            priority
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] bg-linear-to-b from-transparent to-bg-light-blue" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[24%] bg-linear-to-r from-bg-light-blue to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-[24%] bg-linear-to-l from-bg-light-blue to-transparent" />
        </div>

        <div className="relative -mt-6 mx-5 rounded-[20px] bg-[#FFFFFFB8] px-5 pb-6 pt-6 md:-mt-15 md:mx-5 md:px-8.5 md:pb-8.5 md:pt-8.5 lg:-mt-19.5 lg:mx-0">
          <h1 className="mb-4 text-center font-poppins text-[27px] leading-[150%] font-extrabold text-text-medium md:text-[34px] md:leading-[125%]">
            Who advises you at Invest4Kids
          </h1>

          <p className="text-center font-poppins text-[18px] leading-[150%] font-medium text-[#4B5563] md:text-[20px]">
            and why we love what we do
          </p>

          <div className="mx-auto my-6 h-px w-full max-w-171 bg-primary-light" />

          <div className="mx-auto max-w-171 text-center font-outfit text-[16px] leading-[126%] font-light text-[#4B5563] md:text-[18px] md:leading-5.75">
            <p>
              We are a team of <span className="font-normal">financial experts</span>, parents, and{" "}
              <span className="font-normal">future shapers.</span>
            </p>
            <p>
              We are united by one goal: to help families secure their children&apos;s financial
              future - honestly, independently, and transparently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
