export const siteConfig = {
  name: "Invest4Kids",
  shortName: "Invest4Kids",
  description:
    "Professionelle Beratung für Kinderinvestments. Mit uns die richtige Sparanlage für deine Kinder finden.",
  url: "https://invest4kids.de",
  locale: "de_DE",
  ogImage: "/seo/og-invest4kids.webp",
  socialLinks: [
    "https://www.instagram.com/invest4kids_official",
    "https://www.tiktok.com/@invest4kids_official",
    "https://www.youtube.com/@Invest4kids1",
    "https://open.spotify.com/show/4jg6PIzvMeuQwS9ut92h5l",
  ],
} as const;

export function parseGermanDate(dateValue: string): Date | undefined {
  const [day, month, year] = dateValue.split(".");
  if (!day || !month || !year) {
    return undefined;
  }

  const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
  if (Number.isNaN(date.getTime())) {
    return undefined;
  }

  return date;
}
