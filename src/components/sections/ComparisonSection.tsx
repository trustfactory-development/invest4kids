import { PiggyBank, Star, Landmark } from "lucide-react";

export default function ComparisonSection() {
  return (
    <section className="bg-[#FBFBFB] px-[20px] py-[50px] md:px-[34px] md:py-[80px]">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="text-center font-poppins text-[28px] leading-[125%] font-[800] text-[#2C3E50] md:text-[34px]">
          Das Invest4Kids Konzept im Vergleich
        </h2>

        <div className="mt-[40px] flex flex-col items-start gap-[20px] md:mt-[34px] md:flex-row md:gap-[24px]">
          {/* Card 1 – Sparbuch */}
          <div className="w-full overflow-hidden rounded-[10px] border-2 border-[#F8BF3C4D] bg-[#FFFFFFB8] md:mt-[40px] md:flex-1">
            <div className="flex min-h-[110px] flex-col items-center justify-center gap-[12px] bg-[#F8BF3C4D] px-[20px] py-[18px]">
              <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white">
                <PiggyBank
                  className="h-[24px] w-[24px] text-[#2C3E50]"
                  strokeWidth={1.8}
                />
              </div>
              <h3 className="text-center font-poppins text-[18px] leading-[100%] font-[700] text-[#2C3E50]">
                Sparbuch
              </h3>
            </div>
            <div className="px-[24px] py-[20px] md:px-[30px] md:py-[24px]">
              <ul className="space-y-[0px]">
                <ComparisonItem checked>Hohe Flexibilität</ComparisonItem>
                <ComparisonItem>Hohe Rendite</ComparisonItem>
                <ComparisonItem>Halbeinkünfteverfahren</ComparisonItem>
                <ComparisonItem>Steuerfreier Strategiewechsel</ComparisonItem>
                <ComparisonItem>
                  Lebenslange Konditionssicherung
                </ComparisonItem>
                <ComparisonItem>Kontrolle der Eltern mit 18</ComparisonItem>
                <ComparisonItem>
                  Steueroptimierte Auszahlung möglich
                </ComparisonItem>
              </ul>
            </div>
          </div>

          {/* Card 2 – Invest4Kids Konzept (main) */}
          <div className="w-full overflow-hidden rounded-[10px] border-2 border-[#84B7CA4D] bg-[#FFFFFFB8] md:flex-1">
            <div className="flex min-h-[110px] flex-col items-center justify-center gap-[12px] bg-[#84B7CA4D] px-[20px] py-[18px]">
              <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white">
                <Star
                  className="h-[24px] w-[24px] text-[#133A7D]"
                  strokeWidth={1.8}
                />
              </div>
              <h3 className="text-center font-poppins text-[18px] leading-[100%] font-[700] text-[#133A7D]">
                Invest4Kids Konzept
              </h3>
            </div>
            <div className="px-[24px] py-[20px] md:px-[30px] md:py-[24px]">
              <ul className="space-y-[0px]">
                <ComparisonItem checked>Hohe Flexibilität</ComparisonItem>
                <ComparisonItem checked>Hohe Rendite</ComparisonItem>
                <ComparisonItem checked>Halbeinkünfteverfahren</ComparisonItem>
                <ComparisonItem checked>
                  Steuerfreier Strategiewechsel
                </ComparisonItem>
                <ComparisonItem checked>
                  Lebenslange Konditionssicherung
                </ComparisonItem>
                <ComparisonItem checked>
                  Kontrolle der Eltern mit 18
                </ComparisonItem>
                <ComparisonItem checked>
                  Steueroptimierte Auszahlung möglich
                </ComparisonItem>
              </ul>
            </div>
          </div>

          {/* Card 3 – Depot */}
          <div className="w-full overflow-hidden rounded-[10px] border-2 border-[#F8BF3C4D] bg-[#FFFFFFB8] md:mt-[40px] md:flex-1">
            <div className="flex min-h-[110px] flex-col items-center justify-center gap-[12px] bg-[#F8BF3C4D] px-[20px] py-[18px]">
              <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white">
                <Landmark
                  className="h-[24px] w-[24px] text-[#2C3E50]"
                  strokeWidth={1.8}
                />
              </div>
              <h3 className="text-center font-poppins text-[18px] leading-[100%] font-[700] text-[#2C3E50]">
                Depot
              </h3>
            </div>
            <div className="px-[24px] py-[20px] md:px-[30px] md:py-[24px]">
              <ul className="space-y-[0px]">
                <ComparisonItem checked>Hohe Flexibilität</ComparisonItem>
                <ComparisonItem checked>Hohe Rendite</ComparisonItem>
                <ComparisonItem>Halbeinkünfteverfahren</ComparisonItem>
                <ComparisonItem>Steuerfreier Strategiewechsel</ComparisonItem>
                <ComparisonItem>
                  Lebenslange Konditionssicherung
                </ComparisonItem>
                <ComparisonItem>Kontrolle der Eltern mit 18</ComparisonItem>
                <ComparisonItem>
                  Steueroptimierte Auszahlung möglich
                </ComparisonItem>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonItem({
  checked,
  children,
}: {
  checked?: boolean;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-center gap-[12px] py-[8px]">
      {checked ? (
        <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className="h-[22px] w-[22px]"
            fill="none"
            stroke="#009846"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m5 12 5 5L20 7" />
          </svg>
        </span>
      ) : (
        <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className="h-[20px] w-[20px]"
            fill="none"
            stroke="#4B5563"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </span>
      )}
      <span
        className={
          checked
            ? "font-outfit text-[16px] leading-[23px] font-medium text-text-medium md:text-[18px]"
            : "font-outfit text-[16px] leading-[23px] font-[300] text-[#4B5563] md:text-[18px]"
        }
      >
        {children}
      </span>
    </li>
  );
}
