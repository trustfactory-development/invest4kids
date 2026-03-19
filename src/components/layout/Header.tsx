"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

type NavItem = {
  label: string;
  href: string;
  active?: boolean;
  children?: Array<{
    label: string;
    href: string;
    description?: string;
    icon?:
      | "chat"
      | "bulb"
      | "star"
      | "calculator"
      | "building"
      | "users";
  }>;
};

const navItems: NavItem[] = [
  { label: "Startseite", href: "/", active: true },
  {
    label: "Beratung",
    href: "/beratung",
    children: [
      {
        label: "Beratung",
        description: "In 30 Minuten zur passenden Strategie",
        href: "/beratung",
        icon: "chat",
      },
      {
        label: "Invest4Kids Konzept",
        description: "5 Bedingungen für das perfekte Kinderinvestment",
        href: "/invest4kids-konzept",
        icon: "bulb",
      },
      {
        label: "Erfahrungen",
        description: "Das sagen unsere Kund:innen",
        href: "/erfahrungen",
        icon: "star",
      },
      {
        label: "Individueller Rechner",
        description: "Berechne, wie sich dein Investment entwickelt",
        href: "/vorteilsrechner",
        icon: "calculator",
      },
    ],
  },
  {
    label: "Über Uns",
    href: "/ueber-uns",
    children: [
      {
        label: "Über Uns",
        description: "Wer wir sind und wofür wir stehen",
        href: "/ueber-uns",
        icon: "building",
      },
      {
        label: "Team",
        description: "Lerne unsere Expert:innen kennen",
        href: "/team",
        icon: "users",
      },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Podcast", href: "/podcast" },
  { label: "Presse", href: "/presse" },
];

function DropdownIcon({
  icon,
}: {
  icon?:
    | "chat"
    | "bulb"
    | "star"
    | "calculator"
    | "building"
    | "users";
}) {
  const common = "h-[18px] w-[18px] text-[#2F435A]";

  if (icon === "chat") {
    return (
      <svg
        className={common}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 10h8M8 14h5m8-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    );
  }

  if (icon === "bulb") {
    return (
      <svg
        className={common}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 18h6m-5 3h4m-5.3-6.7A5.5 5.5 0 1115.3 14L14 15.3a2 2 0 00-.6 1.4V17h-2.8v-.3a2 2 0 00-.6-1.4L8.7 14.3z"
        />
      </svg>
    );
  }

  if (icon === "star") {
    return (
      <svg
        className={common}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.05 3.93c.3-.92 1.6-.92 1.9 0l1.65 5.1a1 1 0 00.95.69h5.36c.97 0 1.37 1.24.59 1.81l-4.34 3.15a1 1 0 00-.36 1.12l1.66 5.1c.3.92-.75 1.68-1.53 1.12l-4.34-3.15a1 1 0 00-1.18 0l-4.34 3.15c-.78.56-1.83-.2-1.53-1.12l1.66-5.1a1 1 0 00-.36-1.12L2.5 11.53c-.78-.57-.38-1.81.59-1.81h5.36a1 1 0 00.95-.69l1.65-5.1z"
        />
      </svg>
    );
  }

  if (icon === "calculator") {
    return (
      <svg
        className={common}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7h8m-8 5h8m-8 5h5M6 3h12a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z"
        />
      </svg>
    );
  }

  if (icon === "building") {
    return (
      <svg
        className={common}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 21h18M5 21V7.5A1.5 1.5 0 016.5 6h11A1.5 1.5 0 0119 7.5V21M9 6V4.5A1.5 1.5 0 0110.5 3h3A1.5 1.5 0 0115 4.5V6M8 10h2m4 0h2m-8 4h2m4 0h2"
        />
      </svg>
    );
  }

  if (icon === "users") {
    return (
      <svg
        className={common}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 20v-1.2a3.8 3.8 0 00-3.8-3.8H8.8A3.8 3.8 0 005 18.8V20m15 0v-1a3 3 0 00-3-3h-1.2M12 9a3 3 0 11-6 0 3 3 0 016 0zm7-1a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        />
      </svg>
    );
  }

  return null;
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<Set<string>>(
    new Set()
  );

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdowns((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white px-5 shadow-[0_14px_50px_rgba(0,0,0,0.14)]">
      <Container className="px-0 w-full max-w-275!">
        <div className="hidden h-30 items-center py-8.75 lg:flex ">
          <Link href="/" className="shrink-0">
            <Image
              src="https://cdn-ilcgkon.nitrocdn.com/nagGuCyZytyRpkwQIcHQTdSzWgxfpvWP/assets/images/optimized/rev-96f7e66/invest4kids.de/wp-content/uploads/2024/10/Invest-4-kids-logo.png"
              alt="Invest4Kids"
              width={130}
              height={82}
              className="h-11.25 w-auto"
              unoptimized
              priority
            />
          </Link>

          <nav className="mx-5 h-[40.5px] w-[572.72px] font-outfit">
            <ul className="flex h-full w-full pr-3 items-center justify-between">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="relative h-full"
                  onMouseEnter={() =>
                    item.children && setOpenDropdown(item.label)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex h-full items-center rounded-full px-2 py-2 font-outfit text-[18px] font-normal leading-[24.5px] text-[#333333] transition-colors duration-200 hover:bg-zinc-200 ${
                      item.children && openDropdown === item.label
                        ? "bg-zinc-200"
                        : ""
                    } ${
                      item.active
                        ? "underline decoration-[#333333]"
                        : ""
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <svg
                        className="h-3 w-3"
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

                  {item.children && openDropdown === item.label && (
                    <div className="absolute left-0 top-full z-50 pt-[10px]">
                      <div className="w-[375px] rounded-[20px] border border-[#DCE2E8] bg-white p-[34px] shadow-[0_18px_40px_rgba(23,42,79,0.09)]">
                        <ul className="w-[307px] space-y-[16px]">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="-mx-[6px] block rounded-[12px] px-[6px] py-[2px] transition-colors hover:bg-[#F3F6FA]"
                              >
                                <span className="flex items-center gap-[12px]">
                                  {child.icon && (
                                    <span className="flex h-[18px] w-[18px] items-center justify-center">
                                      <DropdownIcon icon={child.icon} />
                                    </span>
                                  )}
                                  <span className="font-outfit text-[18px] font-medium leading-[1.25] text-[#2F435A]">
                                    {child.label}
                                  </span>
                                </span>
                                {child.description && (
                                  <span className="mt-[6px] block w-[305px] pl-[32px] font-outfit text-[18px] font-normal leading-[1.35] text-primary">
                                    {child.description}
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex h-12.5 w-[416.25px] items-center justify-between gap-4">
            <Link
              href="https://funnel.perspective.co/60b7c8d2bcad43001f5c35a3/690b34a62100cd003c13e6ad/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-9 py-3.75 font-outfit text-[18px] font-medium leading-5 text-white transition-colors hover:bg-accent hover:text-text-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                className="h-4.25 w-4 shrink-0"
                aria-hidden="true"
              >
                <path
                  d="M14.6667 1.30769H12.6667V0.653846C12.6667 0.480435 12.5964 0.314127 12.4714 0.191507C12.3464 0.0688871 12.1768 0 12 0C11.8232 0 11.6536 0.0688871 11.5286 0.191507C11.4036 0.314127 11.3333 0.480435 11.3333 0.653846V1.30769H4.66667V0.653846C4.66667 0.480435 4.59643 0.314127 4.4714 0.191507C4.34638 0.0688871 4.17681 0 4 0C3.82319 0 3.65362 0.0688871 3.5286 0.191507C3.40357 0.314127 3.33333 0.480435 3.33333 0.653846V1.30769H1.33333C0.979711 1.30769 0.640573 1.44547 0.390524 1.69071C0.140476 1.93595 0 2.26856 0 2.61538V15.6923C0 16.0391 0.140476 16.3717 0.390524 16.617C0.640573 16.8622 0.979711 17 1.33333 17H14.6667C15.0203 17 15.3594 16.8622 15.6095 16.617C15.8595 16.3717 16 16.0391 16 15.6923V2.61538C16 2.26856 15.8595 1.93595 15.6095 1.69071C15.3594 1.44547 15.0203 1.30769 14.6667 1.30769ZM3.33333 2.61538V3.26923C3.33333 3.44264 3.40357 3.60895 3.5286 3.73157C3.65362 3.85419 3.82319 3.92308 4 3.92308C4.17681 3.92308 4.34638 3.85419 4.4714 3.73157C4.59643 3.60895 4.66667 3.44264 4.66667 3.26923V2.61538H11.3333V3.26923C11.3333 3.44264 11.4036 3.60895 11.5286 3.73157C11.6536 3.85419 11.8232 3.92308 12 3.92308C12.1768 3.92308 12.3464 3.85419 12.4714 3.73157C12.5964 3.60895 12.6667 3.44264 12.6667 3.26923V2.61538H14.6667V5.23077H1.33333V2.61538H3.33333ZM14.6667 15.6923H1.33333V6.53846H14.6667V15.6923ZM9 9.48077C9 9.67475 8.94135 9.86437 8.83147 10.0257C8.72159 10.1869 8.56541 10.3126 8.38268 10.3869C8.19996 10.4611 7.99889 10.4805 7.80491 10.4427C7.61093 10.4049 7.43275 10.3114 7.29289 10.1743C7.15304 10.0371 7.0578 9.86236 7.01921 9.67211C6.98063 9.48186 7.00043 9.28466 7.07612 9.10544C7.15181 8.92623 7.27998 8.77306 7.44443 8.66529C7.60888 8.55752 7.80222 8.5 8 8.5C8.26522 8.5 8.51957 8.60333 8.70711 8.78726C8.89464 8.97119 9 9.22065 9 9.48077ZM12.6667 9.48077C12.6667 9.67475 12.608 9.86437 12.4981 10.0257C12.3883 10.1869 12.2321 10.3126 12.0493 10.3869C11.8666 10.4611 11.6656 10.4805 11.4716 10.4427C11.2776 10.4049 11.0994 10.3114 10.9596 10.1743C10.8197 10.0371 10.7245 9.86236 10.6859 9.67211C10.6473 9.48186 10.6671 9.28466 10.7428 9.10544C10.8185 8.92623 10.9466 8.77306 11.1111 8.66529C11.2755 8.55752 11.4689 8.5 11.6667 8.5C11.9319 8.5 12.1862 8.60333 12.3738 8.78726C12.5613 8.97119 12.6667 9.22065 12.6667 9.48077ZM5.33333 12.75C5.33333 12.944 5.27468 13.1336 5.1648 13.2949C5.05492 13.4562 4.89874 13.5819 4.71602 13.6561C4.53329 13.7303 4.33222 13.7498 4.13824 13.7119C3.94426 13.6741 3.76608 13.5807 3.62623 13.4435C3.48637 13.3063 3.39113 13.1316 3.35255 12.9413C3.31396 12.7511 3.33377 12.5539 3.40945 12.3747C3.48514 12.1955 3.61331 12.0423 3.77776 11.9345C3.94221 11.8268 4.13555 11.7692 4.33333 11.7692C4.59855 11.7692 4.8529 11.8726 5.04044 12.0565C5.22798 12.2404 5.33333 12.4899 5.33333 12.75ZM9 12.75C9 12.944 8.94135 13.1336 8.83147 13.2949C8.72159 13.4562 8.56541 13.5819 8.38268 13.6561C8.19996 13.7303 7.99889 13.7498 7.80491 13.7119C7.61093 13.6741 7.43275 13.5807 7.29289 13.4435C7.15304 13.3063 7.0578 13.1316 7.01921 12.9413C6.98063 12.7511 7.00043 12.5539 7.07612 12.3747C7.15181 12.1955 7.27998 12.0423 7.44443 11.9345C7.60888 11.8268 7.80222 11.7692 8 11.7692C8.26522 11.7692 8.51957 11.8726 8.70711 12.0565C8.89464 12.2404 9 12.4899 9 12.75ZM12.6667 12.75C12.6667 12.944 12.608 13.1336 12.4981 13.2949C12.3883 13.4562 12.2321 13.5819 12.0493 13.6561C11.8666 13.7303 11.6656 13.7498 11.4716 13.7119C11.2776 13.6741 11.0994 13.5807 10.9596 13.4435C10.8197 13.3063 10.7245 13.1316 10.6859 12.9413C10.6473 12.7511 10.6671 12.5539 10.7428 12.3747C10.8185 12.1955 10.9466 12.0423 11.1111 11.9345C11.2755 11.8268 11.4689 11.7692 11.6667 11.7692C11.9319 11.7692 12.1862 11.8726 12.3738 12.0565C12.5613 12.2404 12.6667 12.4899 12.6667 12.75Z"
                  fill="currentColor"
                />
              </svg>
              Kostenlose Beratung sichern
            </Link>

            <div className="flex items-center gap-2">
              <Image
                src="https://cdn.weglot.com/flags/rectangle_mat/de.svg"
                width={24}
                height={16}
                alt="Deutsch"
                className="cursor-pointer py-1.5 mr-1 border-b border-primary/40"
                unoptimized
              />
              <Image
                src="https://cdn.weglot.com/flags/rectangle_mat/gb.svg"
                width={24}
                height={16}
                alt="English"
                className="cursor-pointer opacity-50 transition-opacity hover:opacity-100"
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="flex h-[96px]  items-center justify-between lg:hidden">
          <Link href="/" className="shrink-0">
            <Image
              src="https://cdn-ilcgkon.nitrocdn.com/nagGuCyZytyRpkwQIcHQTdSzWgxfpvWP/assets/images/optimized/rev-7e77c36/invest4kids.de/wp-content/uploads/2024/10/Invest-4-kids-logo-2048x1295.png"
              alt="Invest4Kids"
              width={1000}
              height={1000}
              className="h-11 w-auto"
              unoptimized
              priority
            />
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="https://funnel.perspective.co/60b7c8d2bcad43001f5c35a3/690b34a62100cd003c13e6ad/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary py-3.75 px-8.5 h-[48px] font-outfit font-medium text-white transition-colors hover:bg-primary-dark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="15"
                viewBox="0 0 16 17"
                fill="none"
                className="shrink-0"
                aria-hidden="true"
              >
                <path
                  d="M14.6667 1.30769H12.6667V0.653846C12.6667 0.480435 12.5964 0.314127 12.4714 0.191507C12.3464 0.0688871 12.1768 0 12 0C11.8232 0 11.6536 0.0688871 11.5286 0.191507C11.4036 0.314127 11.3333 0.480435 11.3333 0.653846V1.30769H4.66667V0.653846C4.66667 0.480435 4.59643 0.314127 4.4714 0.191507C4.34638 0.0688871 4.17681 0 4 0C3.82319 0 3.65362 0.0688871 3.5286 0.191507C3.40357 0.314127 3.33333 0.480435 3.33333 0.653846V1.30769H1.33333C0.979711 1.30769 0.640573 1.44547 0.390524 1.69071C0.140476 1.93595 0 2.26856 0 2.61538V15.6923C0 16.0391 0.140476 16.3717 0.390524 16.617C0.640573 16.8622 0.979711 17 1.33333 17H14.6667C15.0203 17 15.3594 16.8622 15.6095 16.617C15.8595 16.3717 16 16.0391 16 15.6923V2.61538C16 2.26856 15.8595 1.93595 15.6095 1.69071C15.3594 1.44547 15.0203 1.30769 14.6667 1.30769ZM3.33333 2.61538V3.26923C3.33333 3.44264 3.40357 3.60895 3.5286 3.73157C3.65362 3.85419 3.82319 3.92308 4 3.92308C4.17681 3.92308 4.34638 3.85419 4.4714 3.73157C4.59643 3.60895 4.66667 3.44264 4.66667 3.26923V2.61538H11.3333V3.26923C11.3333 3.44264 11.4036 3.60895 11.5286 3.73157C11.6536 3.85419 11.8232 3.92308 12 3.92308C12.1768 3.92308 12.3464 3.85419 12.4714 3.73157C12.5964 3.60895 12.6667 3.44264 12.6667 3.26923V2.61538H14.6667V5.23077H1.33333V2.61538H3.33333ZM14.6667 15.6923H1.33333V6.53846H14.6667V15.6923ZM9 9.48077C9 9.67475 8.94135 9.86437 8.83147 10.0257C8.72159 10.1869 8.56541 10.3126 8.38268 10.3869C8.19996 10.4611 7.99889 10.4805 7.80491 10.4427C7.61093 10.4049 7.43275 10.3114 7.29289 10.1743C7.15304 10.0371 7.0578 9.86236 7.01921 9.67211C6.98063 9.48186 7.00043 9.28466 7.07612 9.10544C7.15181 8.92623 7.27998 8.77306 7.44443 8.66529C7.60888 8.55752 7.80222 8.5 8 8.5C8.26522 8.5 8.51957 8.60333 8.70711 8.78726C8.89464 8.97119 9 9.22065 9 9.48077ZM12.6667 9.48077C12.6667 9.67475 12.608 9.86437 12.4981 10.0257C12.3883 10.1869 12.2321 10.3126 12.0493 10.3869C11.8666 10.4611 11.6656 10.4805 11.4716 10.4427C11.2776 10.4049 11.0994 10.3114 10.9596 10.1743C10.8197 10.0371 10.7245 9.86236 10.6859 9.67211C10.6473 9.48186 10.6671 9.28466 10.7428 9.10544C10.8185 8.92623 10.9466 8.77306 11.1111 8.66529C11.2755 8.55752 11.4689 8.5 11.6667 8.5C11.9319 8.5 12.1862 8.60333 12.3738 8.78726C12.5613 8.97119 12.6667 9.22065 12.6667 9.48077ZM5.33333 12.75C5.33333 12.944 5.27468 13.1336 5.1648 13.2949C5.05492 13.4562 4.89874 13.5819 4.71602 13.6561C4.53329 13.7303 4.33222 13.7498 4.13824 13.7119C3.94426 13.6741 3.76608 13.5807 3.62623 13.4435C3.48637 13.3063 3.39113 13.1316 3.35255 12.9413C3.31396 12.7511 3.33377 12.5539 3.40945 12.3747C3.48514 12.1955 3.61331 12.0423 3.77776 11.9345C3.94221 11.8268 4.13555 11.7692 4.33333 11.7692C4.59855 11.7692 4.8529 11.8726 5.04044 12.0565C5.22798 12.2404 5.33333 12.4899 5.33333 12.75ZM9 12.75C9 12.944 8.94135 13.1336 8.83147 13.2949C8.72159 13.4562 8.56541 13.5819 8.38268 13.6561C8.19996 13.7303 7.99889 13.7498 7.80491 13.7119C7.61093 13.6741 7.43275 13.5807 7.29289 13.4435C7.15304 13.3063 7.0578 13.1316 7.01921 12.9413C6.98063 12.7511 7.00043 12.5539 7.07612 12.3747C7.15181 12.1955 7.27998 12.0423 7.44443 11.9345C7.60888 11.8268 7.80222 11.7692 8 11.7692C8.26522 11.7692 8.51957 11.8726 8.70711 12.0565C8.89464 12.2404 9 12.4899 9 12.75ZM12.6667 12.75C12.6667 12.944 12.608 13.1336 12.4981 13.2949C12.3883 13.4562 12.2321 13.5819 12.0493 13.6561C11.8666 13.7303 11.6656 13.7498 11.4716 13.7119C11.2776 13.6741 11.0994 13.5807 10.9596 13.4435C10.8197 13.3063 10.7245 13.1316 10.6859 12.9413C10.6473 12.7511 10.6671 12.5539 10.7428 12.3747C10.8185 12.1955 10.9466 12.0423 11.1111 11.9345C11.2755 11.8268 11.4689 11.7692 11.6667 11.7692C11.9319 11.7692 12.1862 11.8726 12.3738 12.0565C12.5613 12.2404 12.6667 12.4899 12.6667 12.75Z"
                  fill="white"
                />
              </svg>
              Beratung buchen
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-primary"
              aria-label="Toggle menu"
            >
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
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Modal */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />

          {/* Modal Panel */}
          <div className="absolute right-0 top-0 w-[90%] max-w-9/12 rounded-bl-2xl bg-white p-6 pb-30 shadow-xl">
            {/* Close Button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-text-medium hover:text-primary"
              aria-label="Close menu"
            >
              <svg
                className="h-5 w-5"
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
            </button>

            {/* Nav Items */}
            <nav className="flex flex-col pt-10">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <button
                      onClick={() => toggleMobileDropdown(item.label)}
                      className="flex w-full items-center gap-2 py-3 font-outfit font-normal text-text-medium"
                    >
                      {item.label}
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${
                          openMobileDropdowns.has(item.label) ? "rotate-180" : ""
                        }`}
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
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 font-outfit font-normal text-text-medium"
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Accordion Sub-items */}
                  {item.children && openMobileDropdowns.has(item.label) && (
                    <div className="mb-2 ml-2 flex flex-col gap-4 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-start gap-3"
                        >
                          {child.icon && (
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                              <DropdownIcon icon={child.icon} />
                            </span>
                          )}
                          <div>
                            <span className="block font-outfit text-base font-medium text-[#2F435A]">
                              {child.label}
                            </span>
                            {child.description && (
                              <span className="mt-0.5 block font-outfit text-sm leading-snug text-primary">
                                {child.description}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="pt-8.5 flex flex-col gap-4">
              {/* CTA Button */}
              <Link
                href="https://funnel.perspective.co/60b7c8d2bcad43001f5c35a3/690b34a62100cd003c13e6ad/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 font-outfit text-base font-medium text-white transition-colors hover:bg-primary-dark"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="15"
                  viewBox="0 0 16 17"
                  fill="none"
                  className="shrink-0"
                  aria-hidden="true"
                >
                  <path
                    d="M14.6667 1.30769H12.6667V0.653846C12.6667 0.480435 12.5964 0.314127 12.4714 0.191507C12.3464 0.0688871 12.1768 0 12 0C11.8232 0 11.6536 0.0688871 11.5286 0.191507C11.4036 0.314127 11.3333 0.480435 11.3333 0.653846V1.30769H4.66667V0.653846C4.66667 0.480435 4.59643 0.314127 4.4714 0.191507C4.34638 0.0688871 4.17681 0 4 0C3.82319 0 3.65362 0.0688871 3.5286 0.191507C3.40357 0.314127 3.33333 0.480435 3.33333 0.653846V1.30769H1.33333C0.979711 1.30769 0.640573 1.44547 0.390524 1.69071C0.140476 1.93595 0 2.26856 0 2.61538V15.6923C0 16.0391 0.140476 16.3717 0.390524 16.617C0.640573 16.8622 0.979711 17 1.33333 17H14.6667C15.0203 17 15.3594 16.8622 15.6095 16.617C15.8595 16.3717 16 16.0391 16 15.6923V2.61538C16 2.26856 15.8595 1.93595 15.6095 1.69071C15.3594 1.44547 15.0203 1.30769 14.6667 1.30769ZM3.33333 2.61538V3.26923C3.33333 3.44264 3.40357 3.60895 3.5286 3.73157C3.65362 3.85419 3.82319 3.92308 4 3.92308C4.17681 3.92308 4.34638 3.85419 4.4714 3.73157C4.59643 3.60895 4.66667 3.44264 4.66667 3.26923V2.61538H11.3333V3.26923C11.3333 3.44264 11.4036 3.60895 11.5286 3.73157C11.6536 3.85419 11.8232 3.92308 12 3.92308C12.1768 3.92308 12.3464 3.85419 12.4714 3.73157C12.5964 3.60895 12.6667 3.44264 12.6667 3.26923V2.61538H14.6667V5.23077H1.33333V2.61538H3.33333ZM14.6667 15.6923H1.33333V6.53846H14.6667V15.6923ZM9 9.48077C9 9.67475 8.94135 9.86437 8.83147 10.0257C8.72159 10.1869 8.56541 10.3126 8.38268 10.3869C8.19996 10.4611 7.99889 10.4805 7.80491 10.4427C7.61093 10.4049 7.43275 10.3114 7.29289 10.1743C7.15304 10.0371 7.0578 9.86236 7.01921 9.67211C6.98063 9.48186 7.00043 9.28466 7.07612 9.10544C7.15181 8.92623 7.27998 8.77306 7.44443 8.66529C7.60888 8.55752 7.80222 8.5 8 8.5C8.26522 8.5 8.51957 8.60333 8.70711 8.78726C8.89464 8.97119 9 9.22065 9 9.48077ZM12.6667 9.48077C12.6667 9.67475 12.608 9.86437 12.4981 10.0257C12.3883 10.1869 12.2321 10.3126 12.0493 10.3869C11.8666 10.4611 11.6656 10.4805 11.4716 10.4427C11.2776 10.4049 11.0994 10.3114 10.9596 10.1743C10.8197 10.0371 10.7245 9.86236 10.6859 9.67211C10.6473 9.48186 10.6671 9.28466 10.7428 9.10544C10.8185 8.92623 10.9466 8.77306 11.1111 8.66529C11.2755 8.55752 11.4689 8.5 11.6667 8.5C11.9319 8.5 12.1862 8.60333 12.3738 8.78726C12.5613 8.97119 12.6667 9.22065 12.6667 9.48077ZM5.33333 12.75C5.33333 12.944 5.27468 13.1336 5.1648 13.2949C5.05492 13.4562 4.89874 13.5819 4.71602 13.6561C4.53329 13.7303 4.33222 13.7498 4.13824 13.7119C3.94426 13.6741 3.76608 13.5807 3.62623 13.4435C3.48637 13.3063 3.39113 13.1316 3.35255 12.9413C3.31396 12.7511 3.33377 12.5539 3.40945 12.3747C3.48514 12.1955 3.61331 12.0423 3.77776 11.9345C3.94221 11.8268 4.13555 11.7692 4.33333 11.7692C4.59855 11.7692 4.8529 11.8726 5.04044 12.0565C5.22798 12.2404 5.33333 12.4899 5.33333 12.75ZM9 12.75C9 12.944 8.94135 13.1336 8.83147 13.2949C8.72159 13.4562 8.56541 13.5819 8.38268 13.6561C8.19996 13.7303 7.99889 13.7498 7.80491 13.7119C7.61093 13.6741 7.43275 13.5807 7.29289 13.4435C7.15304 13.3063 7.0578 13.1316 7.01921 12.9413C6.98063 12.7511 7.00043 12.5539 7.07612 12.3747C7.15181 12.1955 7.27998 12.0423 7.44443 11.9345C7.60888 11.8268 7.80222 11.7692 8 11.7692C8.26522 11.7692 8.51957 11.8726 8.70711 12.0565C8.89464 12.2404 9 12.4899 9 12.75ZM12.6667 12.75C12.6667 12.944 12.608 13.1336 12.4981 13.2949C12.3883 13.4562 12.2321 13.5819 12.0493 13.6561C11.8666 13.7303 11.6656 13.7498 11.4716 13.7119C11.2776 13.6741 11.0994 13.5807 10.9596 13.4435C10.8197 13.3063 10.7245 13.1316 10.6859 12.9413C10.6473 12.7511 10.6671 12.5539 10.7428 12.3747C10.8185 12.1955 10.9466 12.0423 11.1111 11.9345C11.2755 11.8268 11.4689 11.7692 11.6667 11.7692C11.9319 11.7692 12.1862 11.8726 12.3738 12.0565C12.5613 12.2404 12.6667 12.4899 12.6667 12.75Z"
                    fill="white"
                  />
                </svg>
                Beratung buchen
              </Link>

              {/* Language Switcher */}
              <div className="mt-4 flex items-center justify-center gap-3">
                <Image
                  src="https://cdn.weglot.com/flags/rectangle_mat/de.svg"
                  width={28}
                  height={20}
                  alt="Deutsch"
                  className="cursor-pointer rounded-sm border border-primary/30"
                  unoptimized
                />
                <Image
                  src="https://cdn.weglot.com/flags/rectangle_mat/gb.svg"
                  width={28}
                  height={20}
                  alt="English"
                  className="cursor-pointer rounded-sm opacity-60 transition-opacity hover:opacity-100"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
