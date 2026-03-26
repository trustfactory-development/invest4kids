import Image from "next/image";
import rechnerScreen from "@/assets/images/calculator/rechner-screen.webp";

export default function CalculatorSection() {
  return (
    <section
      className="px-[20px] py-[50px] md:px-[30px] md:py-[80px]"
      style={{
        background: "linear-gradient(174deg, #133A7D 0%, #006F99 100%)",
      }}
    >
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-[30px] md:flex-row md:gap-12">
        <div className="hidden md:block">
          <Image
            src={rechnerScreen}
            alt="Interaktiver Rechner für Invest4Kids Berechnung von Investment-Wachstum basierend auf Sparrate und Alter des Kindes."
            className="h-auto w-full max-w-[506px] object-contain"
            width={1000}
            height={1000}
            draggable={false}
          />
        </div>

        <div className="w-full max-w-[550px] text-white">
          <h2 className="font-poppins text-[28px] leading-[125%] font-extrabold text-white md:text-[34px]">
            Du willst sehen, wie sich diese Vorteile auf dein Investment
            auswirken?
          </h2>

          <p className="mt-[16px] font-outfit text-[16px] leading-[24.5px] font-[400] text-white/90 md:text-[18px]">
            Mit unserem interaktiven Rechner siehst du, wie sich dein Investment
            abhängig von Sparrate, Einmalzahlung und Alter deines Kindes
            entwickeln kann. Die Ergebnisse werden individuell berechnet und
            verständlich dargestellt.
          </p>

          <p className="mt-[8px] font-outfit text-[16px] text-white/90">
            Angepasst an:
          </p>

          <ul className="mt-[14px] space-y-[10px]">
            <li className="flex items-center gap-[10px]">
              <span className="text-[18px] text-[#5BFF85]">✓</span>
              <span className="font-outfit text-[18px] text-white">
                das Alter deines Kindes
              </span>
            </li>
            <li className="flex items-center gap-[10px]">
              <span className="text-[18px] text-[#5BFF85]">✓</span>
              <span className="font-outfit text-[18px] text-white">
                deine monatliche Sparrate
              </span>
            </li>
            <li className="flex items-center gap-[10px]">
              <span className="text-[18px] text-[#5BFF85]">✓</span>
              <span className="font-outfit text-[18px] text-white">
                und mögliche Einmalzahlungen
              </span>
            </li>
          </ul>

          <a
            href="/vorteilsrechner"
            className="mt-[22px] inline-flex h-[50px] w-full md:w-auto items-center justify-center rounded-[8px] border border-[#E2B448] bg-[#FFFDF7] px-[34px] py-[15px] font-outfit text-[18px] font-medium text-[#2E4259] transition-all duration-300 hover:bg-[#E2B448] hover:text-[#1F3550]"
          >
            Jetzt Rechner testen
          </a>

          <div className="pt-6 md:mt-[30px] md:hidden">
            <Image
              src={rechnerScreen}
              alt="Interaktiver Rechner für Invest4Kids"
              className="h-auto w-full max-w-[420px] object-contain"
              width={800}
              height={747}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
