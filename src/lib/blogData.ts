import aktienVerschenkenAnKinderImage from "@/assets/images/blog/aktien-verschenken-an-kinder.jpeg"
import alleinerziehendImage from "@/assets/images/blog/alleinerziehend.jpg"
import angelinaAvatar from "@/assets/images/blog/angelina-avatar.webp"
import daxErklaertFuerKinderImage from "@/assets/images/blog/dax-erklaert-fuer-kinder.jpeg"
import familieMitBabyImage from "@/assets/images/blog/familie-mit-baby.webp"
import fruehstartRenteChart1 from "@/assets/images/blog/fruehstart-rente-chart-1.png"
import fruehstartRenteChart2 from "@/assets/images/blog/fruehstart-rente-chart-2.png"
import fruehstartRenteChart3 from "@/assets/images/blog/fruehstart-rente-chart-3.png"
import fruehstartRenteChart4 from "@/assets/images/blog/fruehstart-rente-chart-4.png"
import fruehstartRenteChart5 from "@/assets/images/blog/fruehstart-rente-chart-5.png"
import fruehstartRenteCover from "@/assets/images/blog/fruehstart-rente-cover.png"
import geldAufKontoDerKinderParkenImage from "@/assets/images/blog/geld-auf-konto-der-kinder-parken.jpeg"
import hausVererbenAnKinderImage from "@/assets/images/blog/haus-vererben-an-kinder.jpeg"
import kindersparplanImage from "@/assets/images/blog/kindersparplan.jpeg"
import mutterMitKindAufFeldImage from "@/assets/images/blog/mutter-mit-kind-auf-feld.webp"
import niessbrauchNachteileFuerKinderImage from "@/assets/images/blog/niessbrauch-nachteile-fuer-kinder.jpeg"
import schenkungAnKinderImage from "@/assets/images/blog/schenkung-an-kinder.jpeg"
import studieThumbnailImage from "@/assets/images/blog/studie-thumbnail.png"

export interface Author {
  name: string
  slug: string
  image: string
}

export type ContentBlock =
  | { type: "paragraph"; text: string; bold?: boolean }
  | { type: "heading"; text: string }
  | { type: "image"; src: string; alt?: string; width?: string; caption?: string }
  | { type: "list"; items: string[] }
  | { type: "download"; href: string; label: string }

export interface Category {
  name: string
  slug: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  image: string
  publishedAt: string
  readingTime: string
  author: Author
  category: Category
  content?: ContentBlock[]
}

const angelinaAuthor: Author = {
  name: "Angelina",
  slug: "angelina",
  image: angelinaAvatar.src,
}

export const posts: BlogPost[] = [
  {
    slug: "fruehstart-rente-eltern-zweifel",
    title: "Frühstart-Rente: Warum Eltern Zweifel an Wirkung und Fairness haben",
    excerpt:
      "Invest4Kids-Umfrage unter 2.400 Eltern zeigt deutlichen Reformbedarf. Die Frühstart-Rente soll Kindern frühzeitig beim Vermögensaufbau helfen und langfristig die Altersvorsorge stärken. Doch wie bewerten Eltern dieses Modell tatsächlich?",
    image: fruehstartRenteCover.src,
    publishedAt: "21.01.2026",
    readingTime: "5 Minuten",
    author: angelinaAuthor,
    category: { name: "Neuigkeiten", slug: "neuigkeiten" },
    content: [
      { type: "paragraph", text: "Invest4Kids-Umfrage unter 2.400 Eltern zeigt deutlichen Reformbedarf", bold: true },
      {
        type: "paragraph",
        text: "Die Frühstart-Rente soll Kindern frühzeitig beim Vermögensaufbau helfen und langfristig die Altersvorsorge stärken. Doch wie bewerten Eltern dieses Modell tatsächlich? Eine aktuelle Umfrage von Invest4Kids unter 2.400 Eltern zeigt ein klares Bild. In der aktuellen Ausgestaltung stößt die Frühstart-Rente sowohl bei der Wirkung als auch bei der Fairness auf erhebliche Zweifel.",
      },
      { type: "heading", text: "Frühstart-Rente: Reichen 10 Euro monatlich für den Vermögensaufbau?" },
      {
        type: "image",
        src: fruehstartRenteChart1.src,
        alt: "Einschätzung der Eltern zur Wirkung der Frühstart-Rente",
        caption: "Abbildung 1: Einschätzung der Eltern zur Wirkung der Frühstart-Rente",
      },
      {
        type: "paragraph",
        text: "Ein zentrales Ergebnis der Umfrage betrifft die Höhe der staatlichen Förderung. 72,6 Prozent der befragten Eltern glauben nicht, dass die vorgesehenen 10 Euro monatlich ihrem Kind später spürbar helfen werden. Knapp 40 Prozent halten den Betrag für klar zu gering, weitere 33 Prozent äußern deutliche Zweifel. Lediglich 27,5 Prozent sehen überhaupt einen relevanten Nutzen.",
      },
      {
        type: "paragraph",
        text: "Aus ökonomischer Sicht ist das problematisch. Nachhaltiger Vermögensaufbau basiert auf Zeit, ausreichenden Beträgen und dem Zinseszinseffekt. Viele Eltern haben offenbar das Gefühl, dass diese Faktoren bei der Frühstart-Rente nicht konsequent genutzt werden.",
      },
      { type: "heading", text: "Kritik an der Fairness: Wenn Geschwister unterschiedlich profitieren" },
      {
        type: "image",
        src: fruehstartRenteChart2.src,
        alt: "Wahrnehmung der Fairness der Frühstart-Rente innerhalb von Familien",
        caption: "Abbildung 2: Wahrnehmung der Fairness der Frühstart-Rente innerhalb von Familien",
      },
      {
        type: "paragraph",
        text: "Besonders sensibel reagieren Eltern auf die Verteilungswirkung der Frühstart-Rente. 88,6 Prozent empfinden es als ungerecht oder sehr ungerecht, dass Kinder je nach Geburtsjahr profitieren, während ältere Geschwister leer ausgehen.",
      },
      {
        type: "paragraph",
        text: "Gerade innerhalb von Familien entsteht dadurch ein Spannungsfeld. Statt Chancengleichheit wird das Modell als zufallsabhängig wahrgenommen — abhängig vom Geburtsdatum und nicht vom tatsächlichen Bedarf. Für viele Eltern ist das schwer vermittelbar und untergräbt die Akzeptanz der staatlichen Vorsorge.",
      },
      { type: "heading", text: "Verständlichkeit als zentrales Problem der Frühstart-Rente" },
      {
        type: "image",
        src: fruehstartRenteChart3.src,
        alt: "Verständlichkeit der Frühstart-Rente aus Sicht der Eltern",
        caption: "Abbildung 3: Verständlichkeit der Frühstart-Rente aus Sicht der Eltern",
      },
      {
        type: "paragraph",
        text: "Ein weiteres deutliches Ergebnis der Umfrage betrifft die Komplexität des Modells. Nur 10,6 Prozent der Eltern geben an, genau zu verstehen, wie die Frühstart-Rente funktioniert und wie sie beantragt werden kann. 56,5 Prozent verstehen das Modell gar nicht, weitere 32,9 Prozent nur teilweise.",
      },
      {
        type: "paragraph",
        text: "Für ein staatliches Vorsorgeinstrument mit Millionen potenziell Betroffenen ist das ein alarmierender Wert. Finanzielle Vorsorge funktioniert nur dann, wenn sie transparent, niedrigschwellig und verständlich ist.",
      },
      { type: "heading", text: "Gute Idee, aber Schwächen in der Umsetzung" },
      {
        type: "image",
        src: fruehstartRenteChart4.src,
        alt: "Gesamtbewertung der Frühstart-Rente durch Eltern",
        caption: "Abbildung 4: Gesamtbewertung der Frühstart-Rente durch Eltern",
      },
      {
        type: "paragraph",
        text: "Trotz aller Kritik zeigt die Umfrage auch, dass 85 Prozent der Eltern die Idee einer staatlichen Vorsorge für Kinder grundsätzlich für sinnvoll halten. Gleichzeitig bewerten nur 29,6 Prozent die konkrete Ausgestaltung der Frühstart-Rente als \u201Esehr gut\u201C. Die Mehrheit sieht deutlichen Verbesserungsbedarf oder lehnt das Modell in seiner aktuellen Form ab.",
      },
      {
        type: "paragraph",
        text: "Eltern unterscheiden also klar zwischen der Idee und der Umsetzung — und erwarten, dass staatliche Vorsorge ökonomisch sinnvoll gestaltet wird.",
      },
      { type: "heading", text: "Welche Alternativen Eltern bevorzugen" },
      {
        type: "image",
        src: fruehstartRenteChart5.src,
        alt: "Bevorzugte Modelle zur staatlichen Förderung des Vermögensaufbaus von Kindern",
        caption: "Abbildung 5: Bevorzugte Modelle zur staatlichen Förderung des Vermögensaufbaus von Kindern",
      },
      {
        type: "paragraph",
        text: "Besonders aufschlussreich ist der Blick auf mögliche Alternativen zur Frühstart-Rente. Nur 15,9 Prozent der Eltern würden sich bewusst für das Modell der monatlichen 10 Euro entscheiden. Deutlich mehr bevorzugen:",
      },
      {
        type: "list",
        items: [
          "eine Einmalzahlung von 1.000 Euro zur Geburt mit langfristiger Anlage oder",
          "mit Abstand am häufigsten — eine Kombination aus staatlichem Startkapital und laufender Förderung (58,1 Prozent).",
        ],
      },
      {
        type: "paragraph",
        text: "Das zeigt ein klares Bedürfnis nach einem früheren Einstieg und einem stärkeren Zinseszinseffekt.",
      },
      { type: "heading", text: "Warum der Startzeitpunkt entscheidender ist als die Förderhöhe" },
      {
        type: "paragraph",
        text: "Entscheidend für den Vermögensaufbau von Kindern ist nicht nur die Höhe der Förderung, sondern vor allem der Zeitpunkt, ab dem investiert wird. Invest4Kids hat zwei Szenarien verglichen, bei denen die Gesamtsumme identisch ist:",
      },
      {
        type: "list",
        items: [
          "Anlage ab Geburt",
          "Anlage ab dem sechsten Lebensjahr, wie es die Frühstart-Rente vorsieht.",
        ],
      },
      {
        type: "paragraph",
        text: "Das Ergebnis ist eindeutig. Durch den längeren Zinseszinseffekt entsteht bei der Anlage ab Geburt ein Renditevorsprung von rund 14.000 Euro bis zum Rentenalter. Allein der frühere Start sorgt dafür, dass deutlich mehr Vermögen aufgebaut wird — ohne höhere Einzahlungen.",
      },
      {
        type: "paragraph",
        text: "Das Beispiel zeigt, warum frühes Investieren der zentrale Hebel für echten Vermögensaufbau ist. Auch aus staatlicher Sicht ist das relevant. Ein einmaliger Startbetrag von 1.000 Euro zur Geburt würde den Staat langfristig rund 30 Prozent weniger kosten als eine über Jahre verteilte monatliche Förderung — bei gleichzeitig deutlich höherem Nutzen für die Kinder.",
      },
      { type: "heading", text: "Was Eltern konkret fordern" },
      {
        type: "paragraph",
        text: "Eltern konnten in der Umfrage selber Ideen einbringen, wie das Modell besser gestaltet werden kann. Raus kamen zahlreiche Verbesserungsvorschläge zur Frühstart-Rente:",
      },
      {
        type: "list",
        items: [
          "höhere oder dynamisch angepasste Förderbeträge",
          "automatische Auszahlung ohne Antrag",
          "sinnvolle, kostengünstige Kapitalmarktanlagen",
          "stärkere Verzahnung mit finanzieller Bildung",
        ],
      },
      {
        type: "paragraph",
        text: "Diese Punkte verdeutlichen, dass Eltern nicht per se gegen staatliche Vorsorge sind. Sie erwarten jedoch ein durchdachtes, faires und verständliches Modell.",
      },
      { type: "heading", text: "Fazit: Frühstart-Rente braucht klare Nachbesserungen" },
      {
        type: "paragraph",
        text: "Die Ergebnisse der Invest4Kids-Umfrage zeigen deutlich, dass Eltern sich staatliche Unterstützung beim Vermögensaufbau für ihre Kinder wünschen. Gleichzeitig erwarten sie, dass diese Unterstützung wirksam, fair und verständlich gestaltet ist. Bleibt die Frühstart-Rente in ihrer aktuellen Form unverändert, droht sie aus Sicht vieler Familien ihr Ziel zu verfehlen.",
      },
      {
        type: "paragraph",
        text: "Invest4Kids begleitet Eltern genau an dieser Stelle — mit transparenter Beratung, klaren Strukturen und einem langfristigen Blick auf die finanzielle Zukunft von Kindern.",
      },
      {
        type: "download",
        href: "https://invest4kids.de/wp-content/uploads/2026/01/Invest4Kids-Fruehstart-Rente-Umfrage.pdf",
        label: "PDF herunterladen",
      },
    ],
  },
  {
    slug: "offener-brief-alleinerziehende",
    title: "Offener Brief zum Thema Alleinerziehende",
    excerpt:
      "Ein offener Brief zur Situation von Alleinerziehenden und den besonderen Herausforderungen bei der finanziellen Absicherung ihrer Kinder.",
    image: alleinerziehendImage.src,
    publishedAt: "08.10.2025",
    readingTime: "6 Minuten",
    author: angelinaAuthor,
    category: { name: "Neuigkeiten", slug: "neuigkeiten" },
  },
  {
    slug: "aktien-verschenken-an-kinder",
    title: "Aktien verschenken an Kinder: Das müssen Eltern wissen",
    excerpt:
      "Aktien als Geschenk für Kinder — eine clevere Möglichkeit, frühzeitig Vermögen aufzubauen. Erfahre, worauf Eltern achten müssen und welche Vorteile es gibt.",
    image: aktienVerschenkenAnKinderImage.src,
    publishedAt: "24.07.2025",
    readingTime: "11 Minuten",
    author: angelinaAuthor,
    category: { name: "Investment-Strategien", slug: "investment-strategien" },
  },
  {
    slug: "schenkung-an-kinder",
    title: "Schenkung an Kinder: Was müssen Eltern dabei beachten?",
    excerpt:
      "Schenkungen an Kinder bieten steuerliche Vorteile und helfen beim Vermögensaufbau. Hier erfährst du, was Eltern beachten sollten.",
    image: schenkungAnKinderImage.src,
    publishedAt: "24.07.2025",
    readingTime: "11 Minuten",
    author: angelinaAuthor,
    category: { name: "Investment-Strategien", slug: "investment-strategien" },
  },
  {
    slug: "haus-vererben-an-kinder",
    title: "Haus vererben an Kinder: Das sollten Eltern dabei bedenken",
    excerpt:
      "Ein Haus an die Kinder vererben — was es zu beachten gibt, welche steuerlichen Aspekte wichtig sind und wie du den Übergang optimal planst.",
    image: hausVererbenAnKinderImage.src,
    publishedAt: "23.07.2025",
    readingTime: "11 Minuten",
    author: angelinaAuthor,
    category: { name: "Investment-Strategien", slug: "investment-strategien" },
  },
  {
    slug: "dax-erklaert-fuer-kinder",
    title: "DAX erklärt für Kinder – und für Eltern, die clever vorsorgen wollen",
    excerpt:
      "Was ist der DAX und warum ist er für die Geldanlage wichtig? Eine verständliche Erklärung für Eltern, die clever für ihre Kinder vorsorgen möchten.",
    image: daxErklaertFuerKinderImage.src,
    publishedAt: "18.07.2025",
    readingTime: "11 Minuten",
    author: angelinaAuthor,
    category: { name: "Investment-Strategien", slug: "investment-strategien" },
  },
  {
    slug: "geld-auf-konto-der-kinder-parken",
    title: "Geld auf dem Konto der Kinder parken: Eine Hilfe beim Steuern sparen!",
    excerpt:
      "Geld auf dem Kinderkonto parken kann steuerliche Vorteile bringen. Erfahre, wie Eltern davon profitieren und worauf zu achten ist.",
    image: geldAufKontoDerKinderParkenImage.src,
    publishedAt: "16.07.2025",
    readingTime: "11 Minuten",
    author: angelinaAuthor,
    category: { name: "Investment-Strategien", slug: "investment-strategien" },
  },
  {
    slug: "niessbrauch-nachteile-fuer-kinder",
    title: "Nießbrauch: Nachteile für Kinder erklärt",
    excerpt:
      "Nießbrauch kann Nachteile für Kinder mit sich bringen. Wir erklären, worauf Eltern achten sollten und welche Alternativen es gibt.",
    image: niessbrauchNachteileFuerKinderImage.src,
    publishedAt: "15.07.2025",
    readingTime: "10 Minuten",
    author: angelinaAuthor,
    category: { name: "Investment-Strategien", slug: "investment-strategien" },
  },
  {
    slug: "kontrolle-oder-freiheit-studie",
    title: "Kontrolle oder Freiheit? Eine Untersuchung zur finanziellen Sicherheit von Kindern und den Einfluss elterlicher Entscheidungen",
    excerpt:
      "Eine umfassende Untersuchung darüber, wie elterliche Entscheidungen die finanzielle Sicherheit von Kindern beeinflussen — zwischen Kontrolle und Freiheit.",
    image: studieThumbnailImage.src,
    publishedAt: "08.04.2025",
    readingTime: "25 Minuten",
    author: angelinaAuthor,
    category: { name: "Neuigkeiten", slug: "neuigkeiten" },
  },
  {
    slug: "kindersparplan-invest4kids",
    title: "Die Zukunft deines Kindes mit einem maßgeschneiderten Kindersparplan von Invest4Kids sichern",
    excerpt:
      "Ein maßgeschneiderter Kindersparplan hilft dir, die finanzielle Zukunft deines Kindes langfristig und sicher aufzubauen.",
    image: kindersparplanImage.src,
    publishedAt: "18.02.2025",
    readingTime: "10 Minuten",
    author: angelinaAuthor,
    category: { name: "Neuigkeiten", slug: "neuigkeiten" },
  },
  {
    slug: "kostenlose-expertenberatung-sparvertrag",
    title: "Kostenlose Expertenberatung – Sparvertrag für Kinder gemeinsam mit Invest4Kids",
    excerpt:
      "Sichere dir eine kostenlose Expertenberatung und finde gemeinsam mit Invest4Kids den passenden Sparvertrag für dein Kind.",
    image: mutterMitKindAufFeldImage.src,
    publishedAt: "11.10.2024",
    readingTime: "5 Minuten",
    author: angelinaAuthor,
    category: { name: "Neuigkeiten", slug: "neuigkeiten" },
  },
  {
    slug: "invest4kids-goldene-zukunft",
    title: "Mit Invest4Kids sicherst du deinem Kind eine goldene Zukunft – Sparen für Kinder leicht gemacht",
    excerpt:
      "Sparen für Kinder leicht gemacht: Erfahre, wie Invest4Kids dir hilft, die goldene Zukunft deines Kindes zu sichern.",
    image: familieMitBabyImage.src,
    publishedAt: "08.10.2024",
    readingTime: "6 Minuten",
    author: angelinaAuthor,
    category: { name: "Neuigkeiten", slug: "neuigkeiten" },
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getPostsByCategorySlug(categorySlug: string): BlogPost[] {
  return posts.filter((post) => post.category.slug === categorySlug)
}
