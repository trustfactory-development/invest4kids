import groupPhoto from "@/assets/images/home/hero/group-photo.webp";
import footerMap from "@/assets/images/home/map/footer-map.png";
import DeferredEmbedPlayer from "@/components/media/DeferredEmbedPlayer";

export default function MapVimeoSection() {
  const renderVideo = () => (
    <DeferredEmbedPlayer
      aspectRatioClassName="aspect-[9/16] w-full"
      embedUrl="https://player.vimeo.com/video/1162162723?autoplay=1&h=5f5a57089c&autopause=0&loop=0&muted=0&title=0&portrait=0&byline=0"
      imageSizes="(max-width: 768px) 100vw, 350px"
      posterAlt="Invest4Kids team preview"
      posterSrc={groupPhoto}
      title="Wer ist Invest4Kids? Vimeo Video"
    />
  );

  return (
    <section
      className="bg-[#FBFBFB] bg-[position:top_left] bg-cover bg-no-repeat px-5 py-[50px] md:bg-auto md:bg-[position:bottom_center] md:bg-repeat md:px-0 md:py-[100px]"
      style={{
        backgroundImage: `url(${footerMap.src})`,
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
