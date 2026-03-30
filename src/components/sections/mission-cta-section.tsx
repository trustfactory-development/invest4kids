"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import trust1Image from "@/assets/images/etf-fuer-kinder/trust-1.png";
import trust2Image from "@/assets/images/etf-fuer-kinder/trust-2.png";
import trust3Image from "@/assets/images/etf-fuer-kinder/trust-3.png";
import trust4Image from "@/assets/images/etf-fuer-kinder/trust-4.png";

const trustAvatars = [
  trust1Image,
  trust2Image,
  trust3Image,
  trust4Image,
] as const;

const missionParagraphs = [
  "We are a dedicated team of investment experts from Kiel who are passionate about the financial security and education of families. Our mission is to create a stable and profitable financial foundation for the next generations.",
  "We are convinced that children always deserve the best. That's why we reject traditional and outdated savings methods such as savings books or building society savings contracts - these days they offer little return and can even reduce assets. With our modern approach to children's investments, we offer parents targeted advice on how to shape their children's financial future securely and profitably.",
  "Our concept combines the strengths of ETFs with the advantages of an insurance solution. This not only secures ETF shares for your child, but also your control over the investment - even after their 18th birthday.",
] as const;

export function MissionCtaSection() {
  return (
    <section
      aria-labelledby="mission-heading"
      className="font-outfit bg-[linear-gradient(180deg,#14397E_30%,#FFFFFF_100%)] px-5 pb-[60px] pt-[60px] text-white lg:px-0 lg:pt-[75px]"
    >
      <div className="mx-auto flex w-full max-w-[1550px] flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="w-full max-w-[760px] text-center"
        >
          <h2
            id="mission-heading"
            className="pb-5 text-[32px] font-medium leading-[32px] md:text-[30px] md:leading-[36px] lg:text-[32px] lg:leading-[40px]"
          >
            Our mission
          </h2>

          <div className="space-y-7 text-left text-[18px] font-medium leading-[28px] text-white lg:space-y-8">
            {missionParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-10 w-full max-w-[1410px] rounded-[30px] bg-[#14397E] px-10 py-10 text-center md:mt-[60px] lg:mt-[120px] lg:px-[70px] lg:py-[70px]"
        >
          <div className="mx-auto w-full max-w-[309px] lg:max-w-[68%]">
            <h3 className="pb-[30px] text-[30px] font-medium leading-[36px] text-white lg:text-[48px] lg:leading-[48px]">
              Get your personal expert by your side now
            </h3>
          </div>

          <div className="mx-auto w-full max-w-[500px] pb-[30px] text-[18px] font-medium leading-[28px] text-white">
            <p>
              It&apos;s time to take the next step and put your child&apos;s
              financial future on a stable footing. Sign up now for a free
              consultation and find out how you can invest wisely in your
              child&apos;s future.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[305px] lg:max-w-[345px]">
            <Link
              href="https://funnel.perspective.co/60b7c8d2bcad43001f5c35a3/690b34a62100cd003c13e6ad/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-[10px] rounded-full bg-[linear-gradient(90deg,#F8BF3C_0%,#FFD15B_55%,#FFE4A2_100%)] px-[30px] py-[19px] text-[16px] leading-[24px] text-white shadow-[0_0_40px_rgba(248,191,60,0.35)] transition-transform duration-200 hover:scale-[1.01]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5.33325 1.33333V3.99999"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.6667 1.33333V3.99999"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26363 2 4.00001V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4.00001C14 3.26363 13.403 2.66667 12.6667 2.66667Z"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 6.66667H14"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Book free consultation</span>
            </Link>
          </div>

          <div className="flex flex-row items-center justify-center px-0 pb-0 pt-6">
            <div className="flex items-center">
              {trustAvatars.map((avatar, index) => (
                <div
                  key={index}
                  className={index === 0 ? "relative" : "relative -ml-4"}
                >
                  <Image
                    src={avatar}
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full"
                  />
                </div>
              ))}
            </div>

            <p className="pl-4 text-[16px] lg:text-[18px] font-medium leading-[28px] text-white">
              5200+ parents trust us
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
