import Image from "next/image";
import aboutHeroGroupPhoto from "@/assets/images/about/about-hero-group-photo.webp";

export default function ErfahrungenCtaSection() {
  return (
    <section className="bg-[linear-gradient(90deg,#173F88_0%,#0C7AA7_100%)] px-[20px] py-[60px] sm:px-[24px] sm:py-[80px] md:px-[30px] md:py-[150px]">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 items-center gap-[34px] lg:grid-cols-[minmax(0,470px)_minmax(0,500px)] lg:gap-[80px]">
          {/* IMAGE */}
          <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
            <div className="relative w-full max-w-[440px] md:max-w-[470px]">
              {/* <div className="absolute left-[10px] top-[4px] h-full w-full rounded-[14px] bg-[#7B8F82] opacity-[0.88] rotate-[-6deg]" /> */}
              <Image
                src={aboutHeroGroupPhoto.src}
                alt="Group photo of the Invest4Kids team, which supports parents with financial advice"
                className="relative z-[2] h-auto w-full rounded-[14px] object-cover shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
                width={1000}
                height={1000}
                draggable={false}
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="order-1 lg:order-2">
            <h2 className="max-w-[560px] text-center md:text-start text-[27px] leading-[1.6] md:leading-[1.25] font-bold md:font-[800] text-white sm:text-[30px] md:text-[34px]">
              Mach deine eigene Erfahrung mit Invest4Kids
            </h2>

            <p className="mt-[18px] max-w-[560px] text-center md:text-start font-medium text-[18px] leading-[23px] md:font-[300] text-white/90 sm:text-[18px] md:mt-[22px] md:text-[20px]">
              Ob du schon lange überlegst oder ganz neu beim Thema
              Kinderinvestment bist: Unsere Beratung ist kostenlos, individuell
              und auf Augenhöhe – überzeuge dich einfach selbst.
            </p>

            <div className="mt-[26px] justify-center md:justify-start md:mt-[34px]">
              <a
                href="https://www.invest4kids-beratung.de/start/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[50px] w-full md:w-auto cursor-pointer items-center justify-center rounded-full border border-[#F8BF3C] bg-white px-[36px] py-[15px] text-center text-[15px] leading-none font-medium whitespace-nowrap text-[#2C3E50] transition-all duration-300 hover:bg-[#F8BF3C] hover:text-[#2C3E50] hover:border-[#F8BF3C] sm:w-auto sm:min-w-[320px] sm:text-[16px] md:min-h-[54px] md:text-[17px]"
              >
                <span className="mr-[8px] shrink-0 md:mr-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    className="h-[16px] w-[16px]"
                    aria-hidden="true"
                  >
                    <path
                      d="M14.6667 1.30769H12.6667V0.653846C12.6667 0.480435 12.5964 0.314127 12.4714 0.191507C12.3464 0.0688871 12.1768 0 12 0C11.8232 0 11.6536 0.0688871 11.5286 0.191507C11.4036 0.314127 11.3333 0.480435 11.3333 0.653846V1.30769H4.66667V0.653846C4.66667 0.480435 4.59643 0.314127 4.4714 0.191507C4.34638 0.0688871 4.17681 0 4 0C3.82319 0 3.65362 0.0688871 3.5286 0.191507C3.40357 0.314127 3.33333 0.480435 3.33333 0.653846V1.30769H1.33333C0.979711 1.30769 0.640573 1.44547 0.390524 1.69071C0.140476 1.93595 0 2.26856 0 2.61538V15.6923C0 16.0391 0.140476 16.3717 0.390524 16.617C0.640573 16.8622 0.979711 17 1.33333 17H14.6667C15.0203 17 15.3594 16.8622 15.6095 16.617C15.8595 16.3717 16 16.0391 16 15.6923V2.61538C16 2.26856 15.8595 1.93595 15.6095 1.69071C15.3594 1.44547 15.0203 1.30769 14.6667 1.30769ZM3.33333 2.61538V3.26923C3.33333 3.44264 3.40357 3.60895 3.5286 3.73157C3.65362 3.85419 3.82319 3.92308 4 3.92308C4.17681 3.92308 4.34638 3.85419 4.4714 3.73157C4.59643 3.60895 4.66667 3.44264 4.66667 3.26923V2.61538H11.3333V3.26923C11.3333 3.44264 11.4036 3.60895 11.5286 3.73157C11.6536 3.85419 11.8232 3.92308 12 3.92308C12.1768 3.92308 12.3464 3.85419 12.4714 3.73157C12.5964 3.60895 12.6667 3.44264 12.6667 3.26923V2.61538H14.6667V5.23077H1.33333V2.61538H3.33333ZM14.6667 15.6923H1.33333V6.53846H14.6667V15.6923ZM9 9.48077C9 9.67475 8.94135 9.86437 8.83147 10.0257C8.72159 10.1869 8.56541 10.3126 8.38268 10.3869C8.19996 10.4611 7.99889 10.4805 7.80491 10.4427C7.61093 10.4049 7.43275 10.3114 7.29289 10.1743C7.15304 10.0371 7.0578 9.86236 7.01921 9.67211C6.98063 9.48186 7.00043 9.28466 7.07612 9.10544C7.15181 8.92623 7.27998 8.77306 7.44443 8.66529C7.60888 8.55752 7.80222 8.5 8 8.5C8.26522 8.5 8.51957 8.60333 8.70711 8.78726C8.89464 8.97119 9 9.22065 9 9.48077ZM12.6667 9.48077C12.6667 9.67475 12.608 9.86437 12.4981 10.0257C12.3883 10.1869 12.2321 10.3126 12.0493 10.3869C11.8666 10.4611 11.6656 10.4805 11.4716 10.4427C11.2776 10.4049 11.0994 10.3114 10.9596 10.1743C10.8197 10.0371 10.7245 9.86236 10.6859 9.67211C10.6473 9.48186 10.6671 9.28466 10.7428 9.10544C10.8185 8.92623 10.9466 8.77306 11.1111 8.66529C11.2755 8.55752 11.4689 8.5 11.6667 8.5C11.9319 8.5 12.1862 8.60333 12.3738 8.78726C12.5613 8.97119 12.6667 9.22065 12.6667 9.48077ZM5.33333 12.75C5.33333 12.944 5.27468 13.1336 5.1648 13.2949C5.05492 13.4562 4.89874 13.5819 4.71602 13.6561C4.53329 13.7303 4.33222 13.7498 4.13824 13.7119C3.94426 13.6741 3.76608 13.5807 3.62623 13.4435C3.48637 13.3063 3.39113 13.1316 3.35255 12.9413C3.31396 12.7511 3.33377 12.5539 3.40945 12.3747C3.48514 12.1955 3.61331 12.0423 3.77776 11.9345C3.94221 11.8268 4.13555 11.7692 4.33333 11.7692C4.59855 11.7692 4.8529 11.8726 5.04044 12.0565C5.22798 12.2404 5.33333 12.4899 5.33333 12.75ZM9 12.75C9 12.944 8.94135 13.1336 8.83147 13.2949C8.72159 13.4562 8.56541 13.5819 8.38268 13.6561C8.19996 13.7303 7.99889 13.7498 7.80491 13.7119C7.61093 13.6741 7.43275 13.5807 7.29289 13.4435C7.15304 13.3063 7.0578 13.1316 7.01921 12.9413C6.98063 12.7511 7.00043 12.5539 7.07612 12.3747C7.15181 12.1955 7.27998 12.0423 7.44443 11.9345C7.60888 11.8268 7.80222 11.7692 8 11.7692C8.26522 11.7692 8.51957 11.8726 8.70711 12.0565C8.89464 12.2404 9 12.4899 9 12.75ZM12.6667 12.75C12.6667 12.944 12.608 13.1336 12.4981 13.2949C12.3883 13.4562 12.2321 13.5819 12.0493 13.6561C11.8666 13.7303 11.6656 13.7498 11.4716 13.7119C11.2776 13.6741 11.0994 13.5807 10.9596 13.4435C10.8197 13.3063 10.7245 13.1316 10.6859 12.9413C10.6473 12.7511 10.6671 12.5539 10.7428 12.3747C10.8185 12.1955 10.9466 12.0423 11.1111 11.9345C11.2755 11.8268 11.4689 11.7692 11.6667 11.7692C11.9319 11.7692 12.1862 11.8726 12.3738 12.0565C12.5613 12.2404 12.6667 12.4899 12.6667 12.75Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>

                <span className="whitespace-nowrap">
                  Jetzt kostenlose Beratung buchen
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
