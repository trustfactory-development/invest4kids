import Image from "next/image";

export default function NewPodcastAboutSection() {
  return (
    <section className="flex w-full flex-col items-center overflow-hidden bg-bg-light-blue px-5 py-[50px] lg:px-[30px] lg:py-[150px]">
      <div className="flex w-full max-w-[1100px] flex-col justify-center">
        <div className="flex flex-col-reverse items-center gap-[50px] lg:flex-row">
          <div className="w-full max-w-[400px] shrink-0 overflow-hidden rounded-2xl lg:w-[400px]">
            <Image
              src="/podcast/studio.webp"
              alt="Podcast-Studio mit zwei blauen Sesseln und Mikrofonen."
              width={936}
              height={677}
              className="block h-auto w-full"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="mb-5 font-poppins text-[26px] font-bold md:font-extrabold leading-[1.25] text-text-medium sm:text-[32px]">
              Über den Podcast
            </h1>
            <p className="mb-4 font-outfit font-light text-base md:leading-[1.6] text-text-medium">
              Susanna & Torben sprechen über die{" "}
              <strong>finanziellen Themen, die Familien wirklich bewegen</strong>
              : clever investieren mit ETFs, Steuervorteile nutzen, finanzielle Erziehung und das richtige Mindset rund ums Geld.
            </p>
            <div className="w-full max-w-[75px] h-0.75 bg-primary-light my-3.75"></div>
            <p className="font-outfit font-light text-base md:leading-[1.6] text-text-medium">
              Dazu laden sie regelmäßig spannende Gäste ein, die ihre Erfahrungen und Perspektiven teilen. Dabei geht es unter anderem um Taschengeld, Partnerschaft und gesellschaftliche Entwicklungen rund um Finanzen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
