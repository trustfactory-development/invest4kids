import {
  ShieldCheck,
  SlidersVertical,
  UserCheck,
  MousePointerClick,
  Coins,
} from "lucide-react";
import ConditionCardExpandable, {
  ExpandedInfoBox,
  ExpandedBullet,
  ExpandedStat,
} from "@/components/sections/ConditionCardExpandable";

function StatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[20px] w-[20px]"
      fill="none"
      stroke="#133A7D"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M12 20V10M18 20V4M6 20v-4" />
    </svg>
  );
}

export default function ConditionsSection() {
  return (
    <section
      className="px-[20px] py-[50px] md:px-[30px] md:py-[80px]"
      style={{
        background: "linear-gradient(102deg, #F2FAFA -2%, #FFFAEE 100%)",
      }}
    >
      <div className="mx-auto max-w-[1100px]">
        <h2 className="mx-auto max-w-[946px] text-center font-poppins text-[27px] leading-[125%] font-bold md:font-[800] text-[#2C3E50] md:text-[34px]">
          Die 5 Bedingungen für das perfekte Kinderinvestment
        </h2>

        <p className="mx-auto mt-[16px] max-w-[900px] text-center font-poppins text-[17px] leading-[150%] font-[500] text-[#4B5563] md:text-[20px]">
          Entdecke die verschiedenen Aspekte unseres durchdachten Konzepts für
          die finanzielle Zukunft deines Kindes
        </p>

        <div className="mt-[30px] space-y-[16px] md:mt-[40px] md:space-y-[20px]">
          {/* CARD 1 – Konditionssicherung */}
          <ConditionCardExpandable
            icon={
              <ShieldCheck
                className="h-[30px] w-[30px] text-[#1E4A93]"
                strokeWidth={1.7}
              />
            }
            title="Kondition ssicherung"
            subtitle="Heute sichern, was morgen zählt"
            description="Mit Invest4Kids sicherst du dir schon heute attraktive Konditionen, die dir auch morgen noch Vorteile bringen. Keine steigenden Gebühren, kein Stress bei Steuerreformen."
            expandedContent={
              <div className="space-y-[16px]">
                <ExpandedInfoBox emoji="💡" title="Wusstest du schon?">
                  <p>
                    Seit 2009 wurden Kapitalanlagen mehrfach steuerlich
                    angepasst. Wer frühzeitig investiert und sich gute
                    Bedingungen sichert, ist auf der sicheren Seite.
                  </p>
                </ExpandedInfoBox>
                <p className="font-outfit text-[16px] leading-[23px] font-[300] text-[#4B5563]">
                  Du willst deinem Kind das Beste ermöglichen – auch, wenn sich
                  die Welt verändert?
                </p>
                <p className="font-outfit text-[16px] leading-[23px] font-[500] text-[#4B5563]">
                  Wer für sein Kind investiert, denkt langfristig. Aber gerade
                  über viele Jahre hinweg kann sich einiges ändern – vor allem,
                  wenn es um Steuern oder gesetzliche Rahmenbedingungen geht.
                </p>
                <p className="font-outfit text-[16px] leading-[23px] font-[300] text-[#4B5563]">
                  Mit Invest4Kids sicherst du dir schon heute attraktive
                  Konditionen, die dir auch morgen noch Vorteile bringen.
                </p>
                <div className="space-y-[10px]">
                  <ExpandedBullet>Keine steigenden Gebühren</ExpandedBullet>
                  <ExpandedBullet>
                    Kein Stress bei zukünftigen Steuerreformen
                  </ExpandedBullet>
                  <ExpandedBullet>
                    Kein Verlust wertvoller Vorteile, weil du zu spät dran warst
                  </ExpandedBullet>
                </div>
                <p className="font-outfit text-[16px] leading-[23px] font-[300] text-[#4B5563]">
                  Allein ein Unterschied von 5 % bei der Besteuerung kann{" "}
                  <strong>über Jahrzehnte mehrere tausend Euro</strong>{" "}
                  ausmachen – nur wegen einer Gesetzesänderung.
                </p>
                <p className="font-outfit text-[16px] leading-[23px] font-[300] text-[#4B5563]">
                  Deshalb gilt:{" "}
                  <strong>
                    Früh planen. Clever sichern. Und das meiste für dein Kind
                    rausholen.
                  </strong>
                </p>
              </div>
            }
          />

          {/* CARD 2 – Flexibilität */}
          <ConditionCardExpandable
            icon={
              <SlidersVertical
                className="h-[30px] w-[30px] text-[#1E4A93]"
                strokeWidth={1.7}
              />
            }
            title="Flexibilität"
            subtitle="Flexibel bleiben – auch wenn sich das Leben ändert"
            description="Sparrate anpassen, Zuzahlungen leisten oder Geld entnehmen – dein Investment passt sich deinem Leben an. So flexibel wie du es brauchst."
            expandedContent={
              <div className="space-y-[16px]">
                <p className="font-outfit text-[16px] leading-[23px] font-[300] text-[#4B5563]">
                  Jede Familie ist anders. Und kein Leben verläuft nach Plan.
                  Deshalb brauchst du ein Investment, das mitdenkt und mitgeht.
                </p>
                <p className="font-outfit text-[16px] leading-[23px] font-[300] text-[#4B5563]">
                  Mit Invest4Kids kannst du:
                </p>
                <div className="space-y-[10px]">
                  <ExpandedBullet>
                    <strong>Die Sparrate jederzeit anpassen:</strong> hoch oder
                    runter, ganz wie es zur aktuellen Lebenssituation passt
                  </ExpandedBullet>
                  <ExpandedBullet>
                    <strong>Zuzahlungen leisten</strong>, zum Beispiel zum
                    Geburtstag oder zur Einschulung
                  </ExpandedBullet>
                  <ExpandedBullet>
                    <strong>Geld entnehmen</strong>, wenn du es brauchst – weil
                    das Investment auf deinen Namen läuft und du so auch
                    kurzfristig handeln kannst
                  </ExpandedBullet>
                </div>
                <p className="font-outfit text-[16px] leading-[23px] font-[300] text-[#4B5563]">
                  Ob Jobwechsel, finanzielle Engpässe oder ein Geschenk von den
                  Großeltern: Dein Plan für dein Kind bleibt flexibel – genau
                  wie das Leben.
                </p>
              </div>
            }
          />

          {/* CARD 3 – Bestimmungsrecht ab 18 */}
          <ConditionCardExpandable
            icon={
              <UserCheck
                className="h-[30px] w-[30px] text-[#1E4A93]"
                strokeWidth={1.6}
              />
            }
            title="Bestimmungsrecht ab 18"
            subtitle="Du bestimmst mit, wie das Geld verwendet wird – auch nach dem 18. Geburtstag"
            description="Anders als beim klassischen Kinderdepot behältst du das Mitspracherecht. Dein Kind bekommt nicht einfach Geld, sondern eine begleitete Chance für die Zukunft."
            expandedContent={
              <div className="space-y-[16px]">
                <p className="font-outfit text-[16px] leading-[23px] font-[500] text-[#4B5563]">
                  Viele Eltern wissen gar nicht:
                </p>
                <p className="font-outfit text-[16px] leading-[23px] font-[300] text-[#4B5563]">
                  Wenn du ein Kinderdepot auf dein Kind laufen lässt, gehört das
                  Geld ab dem 18. Geburtstag zu 100 % deinem Kind – mit voller
                  Verfügungsgewalt.
                </p>
                <ExpandedInfoBox emoji="💡" title="Was das bedeutet?">
                  <p>
                    Du hast über Jahre gespart, geplant, vielleicht verzichtet.
                    Und dann entscheidet ein Teenager plötzlich selbst, was damit
                    passiert. Neues Handy, Auto, Krypto? Keine Kontrolle. Keine
                    Sicherheit. Kein Mitspracherecht mehr.
                  </p>
                </ExpandedInfoBox>
                <div className="grid grid-cols-1 gap-[12px] md:grid-cols-2">
                  <ExpandedStat
                    icon={<StatIcon />}
                    value="96%"
                    description="der jungen Erwachsenen sagen, ihr Geldverhalten wird vor allem vom sozialen Umfeld und ihren Hobbys beeinflusst."
                    source="Quelle: Invest4Kids-Studie (2025)"
                  />
                  <ExpandedStat
                    icon={<StatIcon />}
                    value="68%"
                    description="geben an, dass Plattformen wie TikTok, Instagram & YouTube ihr Konsumverhalten prägen."
                    source="Quelle: Invest4Kids-Studie (2025)"
                  />
                </div>
                <p className="font-outfit text-[16px] leading-[23px] font-[300] text-[#4B5563]">
                  Stell dir vor: Du hast 18 Jahre lang alles richtig gemacht –
                  und dann verpufft das Ersparte innerhalb weniger Wochen. Nicht,
                  weil dein Kind es böse meint. Sondern weil es jung ist. Und
                  jung denkt.
                </p>
                <p className="font-outfit text-[16px] leading-[23px] font-[500] text-[#4B5563]">
                  Aber was kannst du dagegen tun?
                </p>
                <p className="font-outfit text-[16px] leading-[23px] font-[300] text-[#4B5563]">
                  👉 Mit dem Invest4Kids Konzept bekommst du das Beste aus zwei
                  Welten:
                </p>
                <div className="space-y-[10px]">
                  <ExpandedBullet>
                    <strong>
                      Steuervorteile wie bei einer Anlage auf den Namen deines
                      Kindes
                    </strong>
                  </ExpandedBullet>
                  <ExpandedBullet>
                    <strong>Aber mit Bestimmungsrecht ab 18</strong>
                  </ExpandedBullet>
                </div>
                <p className="font-outfit text-[16px] leading-[23px] font-[300] text-[#4B5563]">
                  Du kannst weiter Einfluss darauf nehmen, wann und wofür das
                  Geld verwendet wird. Zum Beispiel:
                </p>
                <ul className="ml-[16px] list-disc space-y-[4px] font-outfit text-[16px] leading-[23px] font-[300] text-[#4B5563]">
                  <li>Für eine Ausbildung, die Türen öffnet</li>
                  <li>Für den Start in ein Studium</li>
                  <li>
                    Für den Führerschein, ein Auslandsjahr oder den ersten
                    Mietvertrag
                  </li>
                </ul>
                <p className="font-outfit text-[16px] leading-[23px] font-[300] text-[#4B5563]">
                  Dein Kind bekommt später nicht einfach nur Geld, sondern{" "}
                  <strong>eine echte Chance</strong>, mit Verantwortung
                  begleitet.
                </p>
                <ExpandedStat
                  icon={<StatIcon />}
                  value="19,5%"
                  description="würden eine Summe von 10.000 € direkt für Konsumgüter oder Erlebnisse ausgeben – statt in Ausbildung oder Vorsorge zu investieren."
                  source="Quelle: Invest4Kids-Studie (2025)"
                />
              </div>
            }
          />

          {/* CARD 4 – Freie Fonds und ETF-Auswahl */}
          <ConditionCardExpandable
            icon={
              <MousePointerClick
                className="h-[30px] w-[30px] text-[#1E4A93]"
                strokeWidth={1.6}
              />
            }
            title="Freie Fonds und ETF-Auswahl"
            subtitle="Experten-Auswahl aus 45.000 Fonds & ETFs"
            description="Unsere Expert:innen stellen eine Lösung zusammen, die zu eurer Familie sowie euren Zielen und Werten passt. Die Auswahl erfolgt persönlich und nicht automatisiert."
            expandedContent={
              <div className="space-y-[16px]">
                <p className="font-outfit text-[16px] leading-[23px] font-[500] text-[#4B5563]">
                  Du willst nicht irgendeine Lösung, sondern die, die wirklich
                  zu deinem Kind passt.
                </p>
                <p className="font-outfit text-[16px] leading-[23px] font-[300] text-[#4B5563]">
                  Anders als bei Bankprodukten oder Robo-Advisors bist du bei
                  Invest4Kids nicht auf ein begrenztes Set Geldanlage beschränkt.
                  Unsere Expert:innen beobachten den Markt laufend und wählen aus
                  über <strong>45.000 Fonds &amp; ETFs</strong> individuell die
                  besten Produkte für deine Familie aus – angepasst an eure
                  Ziele, Werte und Vorstellungen. Ob nachhaltige ETFs, spezielle
                  Branchen oder langfristige Strategien: Wir entwickeln ein
                  Konzept, das zu euch passt. Bei uns sprichst du nicht mit einem
                  Algorithmus, sondern mit <strong>echten Menschen</strong>, die
                  sich Zeit nehmen.
                </p>
                <a
                  href="/team"
                  className="inline-flex items-center gap-[8px] font-poppins text-[15px] font-[600] text-[#133A7D] transition-colors hover:text-[#006F99]"
                >
                  <span>→</span> Zum Team von Invest4Kids
                </a>
                <ExpandedInfoBox
                  emoji="🔎"
                  title="Welche Strategie passt wirklich zu deiner Situation?"
                >
                  <p>
                    In einer kostenlosen Beratung zeigen wir dir, wie ein
                    ETF-Portfolio aussehen kann, das zu deiner Familie passt –
                    und klar nachvollziehbar aufgebaut ist.
                  </p>
                  <a
                    href="https://www.invest4kids-beratung.de/start"
                    target="_blank"
                    rel="noopener"
                    className="mt-[12px] inline-flex h-[40px] items-center justify-center rounded-[8px] bg-[#133A7D] px-[20px] font-poppins text-[14px] font-[600] text-white transition-colors hover:bg-[#0E2D66]"
                  >
                    Kostenlose Beratung vereinbaren
                  </a>
                </ExpandedInfoBox>
              </div>
            }
          />

          {/* CARD 5 – Steuervorteile nutzen */}
          <ConditionCardExpandable
            icon={
              <Coins
                className="h-[30px] w-[30px] text-[#1E4A93]"
                strokeWidth={1.6}
              />
            }
            title="Steuervorteile nutzen"
            subtitle="Mehr Geld fürs Kind durch clevere Steuerstruktur"
            description="Steueroptimierter Vermögensaufbau ohne Vorabpauschale. So kommt möglichst viel bei deinem Kind an – und nicht beim Finanzamt."
            expandedContent={
              <div className="space-y-[16px]">
                <p className="font-outfit text-[16px] leading-[23px] font-[500] text-[#4B5563]">
                  Weniger Steuern zahlen – und mehr fürs Kind rausholen
                </p>
                <p className="font-outfit text-[16px] leading-[23px] font-[300] text-[#4B5563]">
                  Wenn du für dein Kind investierst, willst du, dass möglichst
                  viel davon bei ihm ankommt – und nicht beim Staat. Mit dem
                  richtigen Konzept kannst du genau das erreichen: Unsere
                  Strategien sind so aufgebaut, dass du steuerliche Vorteile
                  bestmöglich nutzt.
                </p>
                <p className="font-outfit text-[16px] leading-[23px] font-[300] text-[#4B5563]">
                  Das bedeutet:
                </p>
                <div className="space-y-[10px]">
                  <ExpandedBullet>
                    Möglichst{" "}
                    <strong>steueroptimierter Vermögensaufbau</strong>
                  </ExpandedBullet>
                  <ExpandedBullet>
                    <strong>Keine Vorabsteuer auf Kursgewinne</strong>, wie es z.
                    B. bei klassischen Depots der Fall ist
                  </ExpandedBullet>
                  <ExpandedBullet>
                    <strong>Optimierung bei der Auszahlung</strong> – damit dein
                    Kind möglichst viel vom Ersparten behält
                  </ExpandedBullet>
                </div>
                <ExpandedInfoBox emoji="💡" title="Wusstest du schon?">
                  <p>
                    Bei klassischen ETF-Depots fällt jedes Jahr die sogenannte{" "}
                    <strong>Vorabpauschale an</strong> – eine Steuer auf
                    Kursgewinne, selbst wenn du gar nichts verkaufst. Mit dem
                    Invest4Kids Konzept kannst du das{" "}
                    <strong>vermeiden</strong> und den Zinseszinseffekt voll
                    ausnutzen.
                  </p>
                </ExpandedInfoBox>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
