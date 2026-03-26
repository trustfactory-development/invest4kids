import Image from "next/image";
import DeferredVideoPlayer from "@/components/media/DeferredVideoPlayer";
import { getLocalVideoUrl, type LocalVideoId } from "@/lib/localVideos";

type Testimonial = {
  initial: string;
  name: string;
  role: string;
  text: string;
  poster: string;
  video: LocalVideoId;
};

const testimonials: Testimonial[] = [
  {
    initial: "L",
    name: "Laura",
    role: "mother of a son",
    text: "Invest4Kids was always there to offer me advice and support.",
    poster: "/media-posters/testimonial-laura.jpg",
    video: "testimonial-laura",
  },
  {
    initial: "O",
    name: "Oliver",
    role: "Father of two children",
    text: "A well-thought-out way to invest wisely in funds and ETFs for children.",
    poster: "/media-posters/testimonial-oliver.jpg",
    video: "testimonial-oliver",
  },
  {
    initial: "Y",
    name: "Yvonne",
    role: "Mother of 2 children",
    text: "From the outset, the consultation felt professional and positive.",
    poster: "/media-posters/testimonial-yvonne.jpg",
    video: "testimonial-yvonne",
  },
];

const CalendarIcon = () => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
  >
    <path
      d="M14.6667 1.30769H12.6667V0.653846C12.6667 0.480435 12.5964 0.314127 12.4714 0.191507C12.3464 0.0688871 12.1768 0 12 0C11.8232 0 11.6536 0.0688871 11.5286 0.191507C11.4036 0.314127 11.3333 0.480435 11.3333 0.653846V1.30769H4.66667V0.653846C4.66667 0.480435 4.59643 0.314127 4.4714 0.191507C4.34638 0.0688871 4.17681 0 4 0C3.82319 0 3.65362 0.0688871 3.5286 0.191507C3.40357 0.314127 3.33333 0.480435 3.33333 0.653846V1.30769H1.33333C0.979711 1.30769 0.640573 1.44547 0.390524 1.69071C0.140476 1.93595 0 2.26856 0 2.61538V15.6923C0 16.0391 0.140476 16.3717 0.390524 16.617C0.640573 16.8622 0.979711 17 1.33333 17H14.6667C15.0203 17 15.3594 16.8622 15.6095 16.617C15.8595 16.3717 16 16.0391 16 15.6923V2.61538C16 2.26856 15.8595 1.93595 15.6095 1.69071C15.3594 1.44547 15.0203 1.30769 14.6667 1.30769ZM3.33333 2.61538V3.26923C3.33333 3.44264 3.40357 3.60895 3.5286 3.73157C3.65362 3.85419 3.82319 3.92308 4 3.92308C4.17681 3.92308 4.34638 3.85419 4.4714 3.73157C4.59643 3.60895 4.66667 3.44264 4.66667 3.26923V2.61538H11.3333V3.26923C11.3333 3.44264 11.4036 3.60895 11.5286 3.73157C11.6536 3.85419 11.8232 3.92308 12 3.92308C12.1768 3.92308 12.3464 3.85419 12.4714 3.73157C12.5964 3.60895 12.6667 3.44264 12.6667 3.26923V2.61538H14.6667V5.23077H1.33333V2.61538H3.33333ZM14.6667 15.6923H1.33333V6.53846H14.6667V15.6923ZM9 9.48077C9 9.67475 8.94135 9.86437 8.83147 10.0257C8.72159 10.1869 8.56541 10.3126 8.38268 10.3869C8.19996 10.4611 7.99889 10.4805 7.80491 10.4427C7.61093 10.4049 7.43275 10.3114 7.29289 10.1743C7.15304 10.0371 7.0578 9.86236 7.01921 9.67211C6.98063 9.48186 7.00043 9.28466 7.07612 9.10544C7.15181 8.92623 7.27998 8.77306 7.44443 8.66529C7.60888 8.55752 7.80222 8.5 8 8.5C8.26522 8.5 8.51957 8.60333 8.70711 8.78726C8.89464 8.97119 9 9.22065 9 9.48077Z"
      fill="currentColor"
    />
  </svg>
);

const QuoteIcon = () => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
  >
    <path
      d="M18.6667 3.5C18.0479 3.5 17.4544 3.74583 17.0168 4.18342C16.5792 4.621 16.3334 5.21449 16.3334 5.83333V12.8333C16.3334 13.4522 16.5792 14.0457 17.0168 14.4832C17.4544 14.9208 18.0479 15.1667 18.6667 15.1667C18.9761 15.1667 19.2729 15.2896 19.4917 15.5084C19.7105 15.7272 19.8334 16.0239 19.8334 16.3333V17.5C19.8334 18.1188 19.5875 18.7123 19.15 19.1499C18.7124 19.5875 18.1189 19.8333 17.5 19.8333C17.1906 19.8333 16.8939 19.9562 16.6751 20.175C16.4563 20.3938 16.3334 20.6906 16.3334 21V23.3333C16.3334 23.6428 16.4563 23.9395 16.6751 24.1583C16.8939 24.3771 17.1906 24.5 17.5 24.5C19.3566 24.5 21.137 23.7625 22.4498 22.4497C23.7625 21.137 24.5 19.3565 24.5 17.5V5.83333C24.5 5.21449 24.2542 4.621 23.8166 4.18342C23.379 3.74583 22.7855 3.5 22.1667 3.5H18.6667Z"
      stroke="currentColor"
      strokeWidth="2.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.83333 3.5C5.21449 3.5 4.621 3.74583 4.18342 4.18342C3.74583 4.621 3.5 5.21449 3.5 5.83333V12.8333C3.5 13.4522 3.74583 14.0457 4.18342 14.4832C4.621 14.9208 5.21449 15.1667 5.83333 15.1667C6.14275 15.1667 6.4395 15.2896 6.65829 15.5084C6.87708 15.7272 7 16.0239 7 16.3333V17.5C7 18.1188 6.75417 18.7123 6.31658 19.1499C5.879 19.5875 5.28551 19.8333 4.66667 19.8333C4.35725 19.8333 4.0605 19.9562 3.84171 20.175C3.62292 20.3938 3.5 20.6906 3.5 21V23.3333C3.5 23.6428 3.62292 23.9395 3.84171 24.1583C4.0605 24.3771 4.35725 24.5 4.66667 24.5C6.52318 24.5 8.30366 23.7625 9.61641 22.4497C10.9292 21.137 11.6667 19.3565 11.6667 17.5V5.83333C11.6667 5.21449 11.4208 4.621 10.9832 4.18342C10.5457 3.74583 9.95217 3.5 9.33333 3.5H5.83333Z"
      stroke="currentColor"
      strokeWidth="2.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type TestimonialsSectionProps = {
  creamBackground?: boolean;
};

export default function TestimonialsSection({
  creamBackground = false,
}: TestimonialsSectionProps) {
  return (
    <section
      className={`px-5 py-12 md:px-[30px] md:py-[100px] ${
        creamBackground ? "bg-bg-cream" : "bg-bg-light-blue"
      }`}
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-4 flex justify-center">
          <div className="inline-flex w-fit items-center gap-[10px] rounded-full border border-[#F8BF3C] bg-[#FFFAEE] px-4 py-[5px]">
            <Image
              src="/parents.webp"
              alt="People"
              className="w-[41px]"
              width={1000}
              height={1000}
              draggable={false}
            />
            <p className="font-poppins text-[10px] font-normal leading-none text-[#4B5563] md:text-[12px]">
              5200+ parents trust us
            </p>
          </div>
        </div>

        <h2 className="mx-auto mb-4 max-w-[1000px] text-center font-poppins text-[27px] font-extrabold leading-[1.5] text-[#2C3E50] md:text-[34px] md:leading-[1.25]">
          How other parents experienced our consultations
        </h2>

        <p className="mx-auto mb-4 max-w-[1000px] text-center font-poppins text-[18px] font-medium leading-[1.5] text-[#4B5563] md:mb-6 md:text-[20px]">
          Every family has its own unique situation, and we take this into account
          in our counseling.
        </p>

        <p className="mx-auto mb-8 max-w-[810px] text-center font-poppins text-[18px] font-medium leading-[1.5] text-[#4B5563] md:mb-6 md:text-[20px]">
          Here, parents share their experiences of the conversation, what helped
          them, and why they would recommend Invest4Kids to others.
        </p>

        <div className="grid grid-cols-1 gap-[34px] md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-[20px] shadow-[2px_8px_20px_0px_#0000000A]">
                <DeferredVideoPlayer
                  aspectRatioClassName="aspect-[4/3] w-full"
                  imageSizes="(max-width: 1280px) 100vw, 340px"
                  posterAlt={`${item.name} testimonial preview`}
                  posterSrc={item.poster}
                  title={`${item.name} testimonial`}
                  videoSrc={getLocalVideoUrl(item.video)}
                />
              </div>

              <article className="rounded-[21px] bg-white p-6 md:p-8.5 shadow-[2px_8px_20px_0px_#0000000A]">
                <div className="mb-4 flex items-start gap-[14px]">
                  <span className="shrink-0 text-[#2C3E50]">
                    <QuoteIcon />
                  </span>
                  <p className="w-full font-outfit text-[16px] font-light leading-[1.26] text-[#4B5563] md:text-[18px] md:leading-5.75">
                    {item.text}
                  </p>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="flex h-9.5 w-9.5 items-center justify-center rounded-full bg-[#4B5563] font-poppins text-[12px] font-normal leading-5.5 text-white lg:h-[42px] lg:w-[42px] lg:text-[14px] lg:leading-[21px]">
                    {item.initial}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p className="font-outfit text-[16px] font-medium leading-none text-[#2C3E50] md:text-[18px]">
                      {item.name}
                    </p>
                    <p className="font-outfit text-[10px] font-normal leading-none text-[#4B5563] md:text-[12px]">
                      {item.role}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col-reverse items-start gap-6 md:mt-8 md:flex-row md:items-end md:justify-between">
          <div className="w-full md:w-auto">
            <Image
              src="/review-stars.png"
              alt="4.9 stars"
              className="mb-3 w-full max-w-[140px]"
              width={1000}
              height={1000}
              draggable={false}
            />
            <p className="font-poppins text-[18px] font-medium leading-[1.5] text-[#4B5563] md:text-[20px]">
              4.9 stars with over 1,000 genuine reviews on Trustpilot and Google
            </p>
          </div>

          <a
            href="https://www.invest4kids-beratung.de/start-now?posthog_distinct_id=019cf192-9eb2-7336-8937-fc8fac979238"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-[#133A7D] bg-[#133A7D] px-9 py-[15px] font-outfit text-[16px] font-medium leading-none text-white transition-colors duration-300 hover:border-[#F8BF3C] hover:bg-[#F8BF3C] hover:text-[#2C3E50] md:w-auto md:text-[18px]"
          >
            <CalendarIcon />
            <span>Book a consultation</span>
          </a>
        </div>
      </div>
    </section>
  );
}
