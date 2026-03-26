import { Headphones } from "lucide-react";
import DeferredEmbedPlayer from "@/components/media/DeferredEmbedPlayer";

export function AboutDiveDeeperSection() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(103deg,#F2FAFA_-2%,#FFFAEE_100%)] px-5 py-12.5 md:px-7.5 lg:py-37.5">
      <div className="mx-auto w-full max-w-275">
        <header className="text-center">
          <h2 className="font-poppins text-[27px] leading-normal font-extrabold text-text-medium md:text-[34px] md:leading-tight">
            Dive even deeper?
          </h2>
          <p className="mx-auto mt-4 max-w-170 font-poppins text-[18px] leading-normal font-medium text-[#4B5563] md:text-[20px]">
            In this podcast episode, you will learn more about our mission.
          </p>
        </header>

        <div className="mt-8.5 rounded-[20px] bg-[#FFFFFFB8] p-6 shadow-[2px_8px_20px_rgba(0,0,0,0.04)] md:p-8.5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-5.75">
            <div className="flex w-full flex-col gap-4 lg:w-135 lg:gap-7">
              <div className="flex items-center gap-3">
                <div className="flex h-9.25 w-9.25 shrink-0 items-center justify-center rounded-[10px] bg-[#84B7CA4D] lg:h-10.25 lg:w-10.25">
                  <Headphones
                    className="h-4.75 w-4.75 text-primary"
                    strokeWidth={1.9}
                  />
                </div>
                <div>
                  <p className="font-outfit text-[16px] leading-none font-medium text-text-medium lg:text-[18px]">
                    KINDERleicht Investing
                  </p>
                  <p className="mt-2 font-outfit text-[12px] leading-none font-normal text-[#4B5563]">
                    Podcast
                  </p>
                </div>
              </div>

              <h3 className="text-left font-poppins text-[16px] leading-normal font-bold text-text-medium lg:text-[18px] lg:leading-[1.4]">
                Episode 58: &quot;Our mission at Invest4Kids: Financial security
                for your child&quot;
              </h3>

              <div className="hidden max-w-134 font-outfit text-[18px] leading-5.75 font-light text-[#4B5563] lg:block">
                <p>
                  Why did we establish Invest4Kids? And why is it more important
                  than ever for parents to take responsibility for their
                  children&apos;s financial future?
                </p>
                <p className="mt-6">
                  In this special episode, Laila and Bogdan talk openly about
                  the story behind Invest4Kids and why we launched a specialized
                  consulting service that finally gives parents real guidance.
                </p>
              </div>
            </div>

            <div className="w-full overflow-hidden rounded-[20px] lg:w-[450px]">
              <DeferredEmbedPlayer
                aspectRatioClassName="aspect-video rounded-[17px]"
                embedUrl="https://www.youtube.com/embed/JIjQb4xj0bg?autoplay=1&rel=0"
                imageSizes="(max-width: 1024px) 100vw, 450px"
                posterAlt="Episode 58 podcast preview"
                posterSrc="/podcast/episode-71.jpg"
                title="Episode 58: Our mission at Invest4Kids"
              />
            </div>

            <div className="w-full font-outfit text-[16px] leading-5.25 font-light text-[#4B5563] lg:hidden">
              <p>
                Why did we establish Invest4Kids? And why is it more important
                than ever for parents to take responsibility for their
                children&apos;s financial future?
              </p>
              <p className="mt-5">
                In this special episode, Laila and Bogdan talk openly about the
                story behind Invest4Kids and why we launched a specialized
                consulting service that finally gives parents real guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
