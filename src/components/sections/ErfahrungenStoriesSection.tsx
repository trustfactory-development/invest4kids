"use client";

import { useEffect, useState } from "react";

const stories = [
  {
    name: "Yvonne",
    role: "Mutter von 2 Kindern",
    image: "https://invest4kids.de/wp-content/uploads/2025/11/Yvonne.webp",
    video:
      "https://invest4kids.de/wp-content/uploads/2025/12/Yvonne-351x274-1.mov",
  },
  {
    name: "Oliver",
    role: "Vater von 2 Söhnen",
    image: "https://invest4kids.de/wp-content/uploads/2025/11/Oliver.webp",
    video:
      "https://invest4kids.de/wp-content/uploads/2025/12/Oliver-Frohnert-351x274-1.mov",
  },
  {
    name: "Laura",
    role: "Mutter von einem Sohn",
    image: "https://invest4kids.de/wp-content/uploads/2025/11/Laura.webp",
    video:
      "https://invest4kids.de/wp-content/uploads/2025/12/Laura-Steinhaeuser-351x274-1.mov",
  },
  {
    name: "Sarah",
    role: "Mutter von 2 Töchtern",
    image: "https://invest4kids.de/wp-content/uploads/2025/11/Sarah.webp",
    video:
      "https://invest4kids.de/wp-content/uploads/2025/12/Sarah-Siegmund-351x274-1.mov",
  },
  {
    name: "Margot",
    role: "Mutter von 2 Söhnen",
    image: "https://invest4kids.de/wp-content/uploads/2025/11/Margot.webp",
    video:
      "https://invest4kids.de/wp-content/uploads/2025/12/Margot-351x274-1.mov",
  },
];

export default function ErfahrungenStoriesSection() {
  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);
  const activeStory =
    activeStoryIndex === null ? null : stories[activeStoryIndex];

  useEffect(() => {
    if (activeStoryIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveStoryIndex(null);
      if (event.key === "ArrowRight") {
        setActiveStoryIndex((current) =>
          current === null ? 0 : (current + 1) % stories.length
        );
      }
      if (event.key === "ArrowLeft") {
        setActiveStoryIndex((current) =>
          current === null
            ? 0
            : (current - 1 + stories.length) % stories.length
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeStoryIndex]);

  const goToNextStory = () => {
    setActiveStoryIndex((current) =>
      current === null ? 0 : (current + 1) % stories.length
    );
  };

  return (
    <section className="bg-white px-[20px] py-[45px] pb-[60px] sm:px-[24px] md:px-[30px] md:py-[100px]">
      <div className="mx-auto max-w-[1160px]">
        {/* heading */}
        <div className="flex items-start gap-[16px] md:gap-[18px]">
          <img
            src="https://invest4kids.de/wp-content/uploads/2025/11/StoryImage.webp"
            alt="Story"
            className="h-[62px] w-[62px] shrink-0 object-contain md:h-[76px] md:w-[76px]"
            draggable={false}
          />

          <div className="pt-[2px]">
            <h2 className="text-left text-[27px] leading-[1.25] font-[800] text-[#2C3E50] sm:text-[30px] md:text-[34px]">
              Unsere Stories
            </h2>

            <p className="mt-[6px] text-left font-outfit text-[14px] leading-[23px] font-[300] text-[#4B5563] md:text-[18px]">
              5 Familien berichten
            </p>
          </div>
        </div>

        {/* profile list */}
        <div className="mt-[28px] flex flex-wrap justify-center gap-[40px] md:mt-[34px] md:flex-nowrap md:justify-around">
          {stories.map((story, index) => (
            <button
              key={story.name}
              type="button"
              onClick={() => setActiveStoryIndex(index)}
              className="group flex min-w-[110px] shrink-0 cursor-pointer flex-col items-center text-center"
              aria-label={`${story.name} ${story.role}`}
            >
              <div className="relative min-w-[118px] md:min-w-[138px] hover:scale-115 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]" style={{ aspectRatio: "1" }}>
                <div
                  className="absolute inset-0 overflow-hidden rounded-full p-[5px] shadow-[4px_12px_40px_rgba(0,0,0,0.15)]"
                  style={{ background: "linear-gradient(45.3deg, #F8BF3C -0.26%, #84B7CA 100.26%)" }}
                >
                  <div className="h-full w-full overflow-hidden rounded-full bg-white p-1">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="h-full w-full object-cover"
                      draggable={false}
                    />
                  </div>
                </div>

                <div className="absolute bottom-[6px] right-[6px] z-10 transition-transform duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.1]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="39"
                    viewBox="0 0 40 39"
                    fill="none"
                    className="h-[32px] w-[32px] md:h-[40px] md:w-[40px]"
                    aria-hidden="true"
                  >
                    <rect
                      x="1.89073"
                      y="1.89073"
                      width="35.3074"
                      height="35.19"
                      rx="17.595"
                      fill="white"
                    />
                    <rect
                      x="1.89073"
                      y="1.89073"
                      width="35.3074"
                      height="35.19"
                      rx="17.595"
                      stroke="#133A7D"
                      strokeWidth="3.78146"
                    />
                    <path
                      d="M29.3066 19.4856L14.6535 27.9456L14.6535 11.0256L29.3066 19.4856Z"
                      fill="#133A7D"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="mt-[10px] text-[16px] leading-[1.25] font-[700] text-[#2C3E50] md:text-[18px]">
                {story.name}
              </h3>

              <p className="mt-[2px] font-outfit text-[18px] leading-[1.3]  text-[#4B5563]">
                {story.role}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* STORY MODAL */}
      {activeStory && (
        <div className="fixed inset-0 z-[999] bg-[#000000B3]">
          <div
            className="absolute inset-0"
            onClick={() => setActiveStoryIndex(null)}
          />

          <div className="relative z-[1000] flex min-h-screen items-center justify-center px-[14px] py-[14px]">
            <div className="relative w-full max-w-[452px] overflow-hidden rounded-[22px] bg-[#111111] shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
              {/* progress */}
              <div className="absolute left-[18px] right-[18px] top-[16px] z-20 flex gap-[8px]">
                {stories.map((_, i) => (
                  <div
                    key={i}
                    className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/30"
                  >
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        i === activeStoryIndex
                          ? "w-full bg-white"
                          : "w-0 bg-white"
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* close */}
              <button
                type="button"
                onClick={() => setActiveStoryIndex(null)}
                className="absolute right-[18px] top-[52px] z-20 flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-full bg-black/45 text-white transition-colors duration-200 hover:bg-black/60"
                aria-label="Close stories"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  className="h-[15px] w-[15px]"
                  aria-hidden="true"
                >
                  <path
                    d="M14.7802 13.719C14.8499 13.7887 14.9052 13.8714 14.9429 13.9625C14.9806 14.0535 15 14.1511 15 14.2496C15 14.3482 14.9806 14.4457 14.9429 14.5368C14.9052 14.6278 14.8499 14.7105 14.7802 14.7802C14.7105 14.8499 14.6278 14.9052 14.5368 14.9429C14.4457 14.9806 14.3482 15 14.2496 15C14.1511 15 14.0535 14.9806 13.9625 14.9429C13.8714 14.9052 13.7887 14.8499 13.719 14.7802L7.5 8.56025L1.28097 14.7802C1.14025 14.9209 0.949387 15 0.750375 15C0.551363 15 0.360502 14.9209 0.21978 14.7802C0.0790571 14.6395 0 14.4486 0 14.2496C0 14.0506 0.0790571 13.8598 0.21978 13.719L6.43975 7.5L0.21978 1.28097C0.0790571 1.14025 0 0.949387 0 0.750375C0 0.551363 0.0790571 0.360502 0.21978 0.21978C0.360502 0.0790571 0.551363 0 0.750375 0C0.949387 0 1.14025 0.0790571 1.28097 0.21978L7.5 6.43975L13.719 0.21978C13.8598 0.0790571 14.0506 0 14.2496 0C14.4486 0 14.6395 0.0790571 14.7802 0.21978C14.9209 0.360502 15 0.551363 15 0.750375C15 0.949387 14.9209 1.14025 14.7802 1.28097L8.56025 7.5L14.7802 13.719Z"
                    fill="currentColor"
                  />
                </svg>
              </button>

              {/* next */}
              <button
                type="button"
                onClick={goToNextStory}
                className="absolute right-[18px] top-1/2 z-20 flex h-[38px] w-[38px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/45 text-white transition-colors duration-200 hover:bg-black/60"
                aria-label="Next story"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="15"
                  viewBox="0 0 9 15"
                  fill="none"
                  className="h-[15px] w-[9px]"
                  aria-hidden="true"
                >
                  <path
                    d="M9 7.5L1.7027 15L0 13.25L5.59459 7.5L0 1.75L1.7027 0L9 7.5Z"
                    fill="white"
                  />
                </svg>
              </button>

              {/* header overlay */}
              <div className="pointer-events-none absolute left-[18px] top-[46px] z-20 flex items-center gap-[12px]">
                <img
                  src={activeStory.image}
                  alt={activeStory.name}
                  className="h-[56px] w-[56px] rounded-full object-cover ring-2 ring-white/20"
                  draggable={false}
                />

                <div className="text-white">
                  <h3 className="text-[18px] leading-[1.1] font-[700]">
                    {activeStory.name}
                  </h3>
                  <p className="mt-[6px] text-[14px] leading-[1.2] text-white/90">
                    {activeStory.role}
                  </p>
                </div>
              </div>

              {/* video */}
              <video
                key={activeStory.video}
                className="aspect-[9/16] w-full object-cover"
                controls
                autoPlay
                preload="metadata"
                controlsList="nodownload"
                playsInline
              >
                <source src={activeStory.video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
