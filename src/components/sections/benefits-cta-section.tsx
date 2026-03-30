"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import benefitFlexibleImage from "@/assets/images/etf-fuer-kinder/benefit-flexible.webp";
import benefitLongTermImage from "@/assets/images/etf-fuer-kinder/benefit-long-term.webp";
import benefitRightsImage from "@/assets/images/etf-fuer-kinder/benefit-rights.webp";
import benefitSelectionImage from "@/assets/images/etf-fuer-kinder/benefit-selection.webp";
import benefitServiceImage from "@/assets/images/etf-fuer-kinder/benefit-service.webp";
import benefitTaxImage from "@/assets/images/etf-fuer-kinder/benefit-tax.webp";
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

const benefits = [
  {
    title: "Long-term wealth accumulation",
    description:
      "With shares, ETFs and bonds, the child's assets grow steadily. The compound interest effect turns small savings amounts into large assets.",
    icon: benefitLongTermImage,
    desktopSizeClass: "xl:h-[380px] xl:w-[300px]",
  },
  {
    title: "Take advantage of tax benefits",
    description:
      "No capital gains tax on strategy changes, optimum use of tax allowances, transparent treatment on payout.",
    icon: benefitTaxImage,
    desktopSizeClass: "xl:h-[380px] xl:w-[300px]",
  },
  {
    title: "Right of determination from 18",
    description:
      "Parents retain control of the assets even after they reach the age of majority - a clear advantage over standard custody accounts.",
    icon: benefitRightsImage,
    desktopSizeClass: "xl:h-[380px] xl:w-[300px]",
  },
  {
    title: "Flexible savings rate",
    description:
      "Start from a minimum monthly savings rate of € 25, adjust at any time or add one-off amounts.",
    icon: benefitFlexibleImage,
    desktopSizeClass: "xl:h-[380px] xl:w-[335px]",
  },
  {
    title: "Wide selection of securities",
    description:
      "Access to ETFs, funds and bonds - always in line with your savings goals.",
    icon: benefitSelectionImage,
    desktopSizeClass: "xl:h-[268px] xl:w-[335px]",
  },
  {
    title: "Advice and service",
    description:
      "Personal support for parents, grandpa, grandma or grandparents - free of charge and without obligation.",
    icon: benefitServiceImage,
    desktopSizeClass: "xl:h-[268px] xl:w-[335px]",
  },
] as const;

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
} satisfies Variants;

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 58,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.68,
      ease: [0.22, 1, 0.36, 1],
    },
  },
} satisfies Variants;

export function BenefitsCtaSection() {
  return (
    <section
      aria-labelledby="benefits-heading"
      className="font-outfit -mt-px bg-[linear-gradient(180deg,#F6F9FC_0%,#EDF4F7_100%)] px-5 pb-[60px] pt-[40px] text-black md:px-6 md:pt-[70px] lg:px-0 lg:pt-[100px]"
    >
      <div className="mx-auto flex w-full max-w-[1550px] flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="w-full max-w-[1120px] text-center"
        >
          <h2
            id="benefits-heading"
            className="text-[27px] font-medium leading-[36px] text-[#1E293B] md:text-[32px] md:leading-[40px]  xl:leading-[45px]"
          >
            The best reasons for a children&apos;s custody account with
            Invest4Kids
          </h2>
        </motion.div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-[50px] flex w-full max-w-[1403px] flex-col items-center justify-center gap-[50px] md:flex-row md:flex-wrap md:items-stretch md:gap-[30px] xl:gap-[56px]"
        >
          {benefits.map((benefit) => (
            <motion.article
              key={benefit.title}
              variants={cardVariants}
              className={`flex h-[268px] w-full max-w-[350px] flex-col justify-between rounded-[44px] bg-[linear-gradient(45deg,#FFFFFF_0%,#F0F9FF_100%)] p-8 md:self-stretch ${benefit.desktopSizeClass}`}
            >
              <div>
                <h3 className="pb-4 text-[20px] font-bold leading-[28px] text-[#0F172A] md:text-[24px] md:leading-[32px]">
                  {benefit.title}
                </h3>
                <p className="text-[16px] font-normal leading-[24px] text-[#334155] md:text-[18px] md:leading-[28px]">
                  {benefit.description}
                </p>
              </div>

              <div className="flex justify-end pt-5">
                <Image
                  src={benefit.icon}
                  alt=""
                  width={64}
                  height={64}
                  className="h-16 w-16"
                />
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-[60px] w-full md:w-[90%] md:max-w-[1410px]"
        >
          <div className="rounded-[30px] bg-[#14397E] px-10 py-10 text-center text-white md:px-10 md:py-10 lg:px-[70px] lg:py-[70px]">
            <div className="mx-auto w-full max-w-[300px] lg:max-w-[68%]">
              <h3 className="pb-[30px] text-[30px] font-medium leading-[36px] text-white md:text-[36px] md:leading-[40px] lg:text-[48px] lg:leading-[48px]">
                Secure these benefits now with Invest4Kids
              </h3>
            </div>

            <div className="mx-auto w-full max-w-[830px]">
              <p className="pb-[30px] text-[16px] font-normal leading-[24px] text-[#CBD5E1] md:text-[18px] md:leading-[28px]">
                Sign up today for a free, no-obligation consultation and
                benefit from the advantages of the Invest4Kids concept for a
                lifetime. You&apos;ll be laying the foundations for a secure
                financial future for your child, who will be grateful!
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
                    key={avatar.src}
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

              <p className="max-w-[210px] pl-4 text-left text-[16px] font-normal leading-[24px] text-white md:max-w-none md:text-[18px] md:leading-[28px]">
                5200+ parents trust us
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
