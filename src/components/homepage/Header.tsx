"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Outfit } from "next/font/google";
import Container from "../layout/Container";

const navItems = [
  { label: "Home", href: "/homepage", active: true },
  {
    label: "Consultation",
    href: "/beratung",
    children: [
      { label: "The right strategy in 30 minutes", href: "/beratung" },
      { label: "Invest4Kids concept", href: "/invest4kids-konzept" },
      { label: "Experiences", href: "/erfahrungen" },
      { label: "Advantage calculator", href: "/vorteilsrechner" },
    ],
  },
  {
    label: "About Us",
    href: "/ueber-uns",
    children: [
      { label: "Who we are", href: "/ueber-uns" },
      { label: "Team", href: "/team" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Podcast", href: "/podcast" },
  { label: "Press", href: "/presse" },
];

const outfitThin = Outfit({
  subsets: ["latin"],
  weight: ["300"],
  display: "swap",
});

export default function HomeHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <Container className="max-w-[1200px]">
        <div className="flex h-[90px] items-center">
          {/* Logo */}
          <Link href="/homepage" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Invest4Kids"
              width={130}
              height={44}
              className="h-[44px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden flex-1 items-center justify-center gap-0.5 px-6 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.children && setOpenDropdown(item.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`${outfitThin.className} flex items-center gap-1 px-4 py-2 text-[16px] font-light text-[#2C3E50] transition-colors hover:text-primary-light ${
                    item.active
                      ? "underline decoration-[#1E293B] decoration-2 underline-offset-[8px]"
                      : ""
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <svg
                      className="ml-0.5 h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {item.children && openDropdown === item.label && (
                  <div className="absolute left-0 top-full z-50 w-72 rounded-xl border border-border bg-white p-2.5 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-4 py-3 text-sm font-outfit text-text-dark transition-colors hover:bg-bg-light-blue"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2.5">
            {/* CTA */}
            <Link
              href="https://www.invest4kids-beratung.de/start/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2.5 rounded-full bg-[#1E293B] px-8 py-4 text-[15px] font-medium text-white transition-colors hover:bg-[#162033] lg:inline-flex"
            >
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
              Book free consultation
            </Link>

            {/* Language flags */}
            <div className="hidden items-center gap-2.5 pl-1 lg:flex">
              <img
                src="https://cdn.weglot.com/flags/rectangle_mat/de.svg"
                width={24}
                height={16}
                alt="Deutsch"
                className="cursor-pointer opacity-50 transition-opacity hover:opacity-100"
              />
              <img
                src="https://cdn.weglot.com/flags/rectangle_mat/gb.svg"
                width={24}
                height={16}
                alt="English"
                className="cursor-pointer"
              />
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-secondary lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-white lg:hidden">
          <Container>
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => !item.children && setMobileOpen(false)}
                    className={`${outfitThin.className} flex items-center justify-between py-3 text-base font-light text-[#2f3a48]`}
                  >
                    {item.label}
                    {item.children && (
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
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>
                  {item.children && (
                    <div className="mb-2 ml-4 flex flex-col border-l-2 border-border pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="py-2 font-outfit text-sm text-text-medium"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="https://www.invest4kids-beratung.de/start/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white"
              >
                Free consultation
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
