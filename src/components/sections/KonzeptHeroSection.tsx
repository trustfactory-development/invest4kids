import konzeptRad from "@/assets/images/konzept/konzept-rad.png";

export default function KonzeptHeroSection() {
  return (
    <section className="overflow-hidden bg-[#EFFAFD] px-5 md:px-0">
      <div className="mx-auto max-w-[1100px] py-[50px] md:pt-[100px] md:pb-[150px]">
        <div className="flex flex-col items-center md:gap-15 md:flex-row md:items-center md:justify-between">
          <div className="w-full text-center md:w-[500px] md:text-left">
            <div className="inline-flex items-center gap-[12px] rounded-full border border-[#F8BF3C] bg-[#FFFAEE] px-[16px] py-[1px]">
              <svg
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[12px] w-[12px] shrink-0"
                aria-hidden="true"
              >
                <path
                  d="M32.989 10.865c-2.61.603-5.331 2.224-8.088 4.817-2.005 1.885-3.799 4.082-5.333 6.534l-5.834.873a2.39 2.39 0 0 0-1.298.638l-4.928 4.927a2.39 2.39 0 0 0 2.154 4.026l6.36-1.587 8.885 8.885-1.587 6.36a2.389 2.389 0 0 0 4.026 2.153l4.928-4.928c.326-.326.542-.742.638-1.298l.873-5.834c2.452-1.534 4.649-3.328 6.534-5.333 2.593-2.757 4.214-5.478 4.817-8.088.746-3.228.008-6.34-2.195-9.253-2.913-2.203-6.025-2.941-9.253-2.195Z"
                  stroke="#4E5B72"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M36.21 19.79h.023"
                  stroke="#4E5B72"
                  strokeWidth="3.8"
                  strokeLinecap="round"
                />
                <path
                  d="M16.887 39.114c-1.347.34-2.9 1.337-4.614 2.964-2.103 1.995-3.198 4.02-3.255 6.02-.01.379.137.745.408 1.017.271.27.638.417 1.017.407 1.999-.056 4.025-1.15 6.02-3.254 1.627-1.714 2.624-3.267 2.964-4.614"
                  stroke="#4E5B72"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="py-1.5 font-outfit text-[10px] md:text-[12px] leading-none font-[400] text-[#4B5563]">
                Alle Vorteile auf einen Blick
              </span>
            </div>

            <h1 className="mt-[18px] font-poppins text-[27px] leading-[125% font-bold md:font-[800] text-[#2C3E50] md:text-[34px]">
              Das Invest4Kids Konzept
            </h1>

            <p className="mt-[14px] font-poppins text-[18px] leading-[150%] font-[500] text-[#4B5563] md:text-[20px]">
              Wir vereinen alles, was dein Kind braucht
            </p>

            <div className="mt-[16px] hidden h-[1px] w-full bg-[#84B7CA] md:block" />

            <p className="mx-auto mt-[16px] max-w-[500px] font-outfit text-[16px] leading-[1.3] md:leading-[24.5px] font-light text-[#4B5563] md:mx-0 md:mt-[20px] md:text-[18px]">
              Die durchdachte Kombination aus ETFs, Steuervorteilen und
              elterlicher Kontrolle. Für ein Investment, das wirklich auf dein
              Kind zugeschnitten ist.
            </p>
          </div>

          <div className="flex w-full justify-center md:w-auto md:justify-end">
            <img
              src={konzeptRad.src}
              alt="Invest4Kids Konzept – Vorteile wie Steuerfreiheit, elterliche Kontrolle und Flexibilität"
              className="h-auto min-w-[280px] w-full shrink-0 object-contain lg:w-[538px] lg:max-w-[538px]"
              width={800}
              height={800}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
