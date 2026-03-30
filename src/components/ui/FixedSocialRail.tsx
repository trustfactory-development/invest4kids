"use client";

import { motion, useReducedMotion } from "framer-motion";
import { createLucideIcon, Instagram, type LucideIcon } from "lucide-react";

const TikTok = createLucideIcon("TikTok", [
  [
    "path",
    {
      d: "M14.75 2h2.43a4.88 4.88 0 0 0 3.02 3.04v2.45a7.33 7.33 0 0 1-2.98-.68v7.28a5.09 5.09 0 1 1-5.08-5.1c.31 0 .6.03.9.08v2.6a2.5 2.5 0 1 0 1.71 2.36V2z",
      fill: "currentColor",
      stroke: "none",
      key: "tiktok-path",
    },
  ],
]);

const Spotify = createLucideIcon("Spotify", [
  [
    "circle",
    { cx: "12", cy: "12", r: "9", fill: "currentColor", stroke: "none", key: "spotify-bg" },
  ],
  [
    "path",
    {
      d: "M7.4 10.2c3.6-1.1 7.6-.7 10.5 1.1",
      stroke: "#FFFFFF",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      fill: "none",
      key: "spotify-wave-1",
    },
  ],
  [
    "path",
    {
      d: "M8.3 13.2c2.8-.8 5.8-.5 8 .8",
      stroke: "#FFFFFF",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      fill: "none",
      key: "spotify-wave-2",
    },
  ],
  [
    "path",
    {
      d: "M9 16c2-.4 3.8-.3 5.3.5",
      stroke: "#FFFFFF",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      fill: "none",
      key: "spotify-wave-3",
    },
  ],
]);

const YouTube = createLucideIcon("YouTube", [
  [
    "rect",
    {
      x: "3",
      y: "6",
      width: "18",
      height: "12",
      rx: "3",
      fill: "currentColor",
      stroke: "none",
      key: "youtube-bg",
    },
  ],
  [
    "path",
    {
      d: "m10 9.5 5 2.5-5 2.5z",
      fill: "#FFFFFF",
      stroke: "none",
      key: "youtube-play",
    },
  ],
]);

const Google = createLucideIcon("Google", [
  [
    "path",
    {
      d: "M20 12.2c0 4.77-3.28 8.3-8 8.3a8.5 8.5 0 1 1 0-17 8.2 8.2 0 0 1 5.69 2.2l-2.36 2.36A4.7 4.7 0 0 0 12 6.8c-2.47 0-4.56 1.65-5.32 3.88a5.2 5.2 0 0 0 0 3.04c.75 2.22 2.84 3.87 5.32 3.87 1.28 0 2.35-.33 3.17-.9a4.16 4.16 0 0 0 1.84-2.78H12v-3.7h7.8c.13.62.2 1.24.2 1.99Z",
      fill: "currentColor",
      stroke: "none",
      key: "google-path",
    },
  ],
]);

type SocialLink = {
  href: string;
  icon: LucideIcon;
  label: string;
  size: number;
};

const SOCIAL_LINKS: SocialLink[] = [
  { href: "https://www.tiktok.com/@invest4kids", icon: TikTok, label: "TikTok", size: 20 },
  { href: "https://www.instagram.com/invest4kids/", icon: Instagram, label: "Instagram", size: 20 },
  {
    href: "https://open.spotify.com/show/4lG1MbcE0fpkh7QvArfWCP",
    icon: Spotify,
    label: "Spotify",
    size: 20,
  },
  { href: "https://www.youtube.com/@invest4kids", icon: YouTube, label: "YouTube", size: 20 },
  { href: "https://www.google.com/search?q=invest4kids", icon: Google, label: "Google", size: 20 },
];

export default function FixedSocialRail() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.aside
      initial={shouldReduceMotion ? undefined : { y: 10, opacity: 0 }}
      animate={shouldReduceMotion ? undefined : { y: 0, opacity: 1 }}
      transition={{ duration: 0.28, ease: [0.33, 1, 0.68, 1] }}
      className="fixed bottom-6 left-5 z-[70] md:top-1/2 md:right-0 md:bottom-auto md:left-auto md:-translate-y-1/2"
    >
      <nav
        aria-label="Social media links"
        className="flex items-center gap-3 rounded-full border border-accent bg-white px-3 py-1.5 md:w-[40px] md:flex-col md:gap-2 md:rounded-[22px] md:px-0 md:py-2"
      >
        {SOCIAL_LINKS.map(({ href, icon: Icon, label, size }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
            className="flex h-7 w-7 items-center justify-center text-secondary transition-colors hover:text-primary md:h-9 md:w-9"
          >
            <Icon size={size} strokeWidth={1.8} className="h-6 w-6 md:h-5 md:w-5" />
          </motion.a>
        ))}
      </nav>
    </motion.aside>
  );
}
