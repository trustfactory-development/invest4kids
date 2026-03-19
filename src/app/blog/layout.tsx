import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Invest4Kids",
  description:
    "Deutschlands führender Investment-Blog für Eltern. Tipps, Strategien und Wissen rund ums Investieren für Kinder.",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
