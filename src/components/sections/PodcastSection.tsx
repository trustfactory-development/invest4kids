"use client";

import { Headphones } from "lucide-react";

const EMBED_URL = "https://www.youtube.com/embed/B4sfJBmJDi0";

export default function PodcastSection() {
  return (
    <section className="bg-[linear-gradient(to_right,#f2faf9_0%,#fefaef_100%)]">
      <div className="mx-auto w-full max-w-275 px-4 py-14 sm:px-6 sm:py-16 lg:px-0 lg:py-24">
        {/* Section heading */}
        <div className="mx-auto max-w-190 text-center lg:mt-12">
          <h2 className="font-poppins text-[27px] leading-[1.2] font-bold tracking-[-0.03em] text-text-medium lg:text-[34px]">
            Dive even deeper?
          </h2>
          <p className="mx-auto mt-5 max-w-190 font-poppins text-[18px] leading-[1.45] font-medium text-[#4B5563] lg:text-[20px]">
            In this podcast episode, you can find out more about our
            consultation
          </p>
        </div>

        {/* Podcast card */}
        <article className="mx-auto mt-10 h-fit max-w-275 rounded-[23px] bg-white px-5 py-6 shadow-[0_16px_30px_rgba(44,62,80,0.04)] sm:px-8 sm:py-8 lg:px-8.5 lg:py-8.5">
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_452px] lg:items-center lg:gap-10">
            {/* Text content */}
            <div className="order-1">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-light-blue">
                  <Headphones
                    className="h-5 w-5 text-primary lg:h-6 lg:w-6"
                    strokeWidth={1.8}
                  />
                </div>
                <div>
                  <h3 className="font-poppins text-[16px] leading-[1.3] font-medium text-text-medium lg:text-[18px]">
                    KINDERleicht Investing
                  </h3>
                  <p className="mt-1 font-outfit text-[10px] leading-none font-normal text-[#4B5563] md:text-[12px]">
                    Podcast
                  </p>
                </div>
              </div>

              <h4 className="mt-6 max-w-140 font-poppins text-[18px] leading-[1.1] font-bold text-text-medium lg:text-[18px]">
                Episode: &quot;This is how consultations really works at
                Invest4Kids&quot;
              </h4>

              <p className="mt-6 hidden max-w-155 font-outfit text-[16px] leading-[1.4] font-normal text-[#4B5563] lg:block lg:text-[18px]">
                Torben and Susanna take you behind the scenes: How do the
                interviews work? What are the real benefits of counseling? And
                why do parents so often report: &quot;I wish I&apos;d known that
                earlier.&quot;
              </p>
            </div>

            {/* Media player */}
            <div className="order-2 rounded-[22px]">
              <div className="relative overflow-hidden rounded-[22px]">
                <iframe
                  src={EMBED_URL}
                  title="Invest4Kids podcast episode"
                  className="aspect-video w-full rounded-[22px] border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <p className="mt-6 max-w-155 font-outfit text-[16px] leading-[1.3] font-normal text-[#4B5563] md:text-[18px] md:leading-[1.4] lg:hidden">
                Torben and Susanna take you behind the scenes: How do the
                interviews work? What are the real benefits of counseling? And
                why do parents so often report: &quot;I wish I&apos;d known that
                earlier.&quot;
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
