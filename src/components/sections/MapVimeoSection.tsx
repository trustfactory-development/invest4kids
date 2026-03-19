export default function MapVimeoSection() {
  const renderVideo = () => (
    <div className="overflow-hidden rounded-[20px]">
      <div className="relative aspect-[9/16] w-full">
        <iframe
            src="https://player.vimeo.com/video/1162162723?h=5f5a57089c?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=0&amp;portrait=0&amp;byline=0#t="
            className="absolute inset-0 h-full w-full"
            title="Wer ist Invest4Kids? Vimeo Video"
            allow="clipboard-write"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            data-gtm-yt-inspected-12="true"
        />
      </div>
    </div>
  );

  return (
      <section
          className="bg-[#FBFBFB] bg-[position:top_left] bg-cover bg-no-repeat px-5 py-[50px] md:bg-auto md:bg-[position:bottom_center] md:bg-repeat md:px-0 md:py-[100px]"
          style={{
            backgroundImage:
                "url('https://invest4kids.de/wp-content/uploads/2026/02/Footer-with-a-map-scaled.png')",
      }}
    >
      <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-center gap-0 md:flex-row md:items-center md:gap-12">
        <div className="hidden w-[350px] md:block">{renderVideo()}</div>

        <div className="mb-[34px] flex w-full flex-col gap-4 rounded-[8px] bg-white p-6 shadow-[2px_8px_20px_0_rgba(0,0,0,0.09)] md:mb-0 md:w-[493px] md:p-[34px]">
          <h2 className="font-poppins text-[27px] leading-[150%] font-extrabold text-[#2C3E50] md:text-[34px] md:leading-[125%]">
            Wir sind <span className="text-[#133A7D]">Invest4Kids</span>
          </h2>

          <p className="font-outfit text-[16px] leading-[126%] font-light text-[#2C3E50] md:text-[18px] md:leading-[23px]">
            Erhalte einen Einblick in unser Büro in Kiel und sieh, wie wir
            Eltern mit Expertise und Leidenschaft unterstützen.
          </p>

          <p className="font-outfit text-[16px] leading-[126%] font-light text-[#4B5563] md:text-[18px] md:leading-[23px]">
            Unser Standort: Fabrikstraße 7, 24103 Kiel
          </p>
        </div>

        <div className="w-full md:hidden">{renderVideo()}</div>
      </div>
    </section>
  );
}
