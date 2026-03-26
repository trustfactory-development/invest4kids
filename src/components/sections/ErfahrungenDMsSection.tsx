import dmsStatsImages from "@/assets/images/home/hero/dms-stats-images.webp";
import dynamicIsland from "@/assets/images/erfahrungen/dynamic-island.webp";
import message1Avatar from "@/assets/images/erfahrungen/message-1.webp";
import message2Avatar from "@/assets/images/erfahrungen/message-2.webp";
import message3Avatar from "@/assets/images/erfahrungen/message-3.webp";
import message4Avatar from "@/assets/images/erfahrungen/message-4.webp";
import phoneImage from "@/assets/images/erfahrungen/phone-image.webp";

const dmMessages = [
  {
    id: 1,
    avatar: message1Avatar.src,
    alt: "avatar people S",
    text: `Hey ihr Lieben. 😌
Einmal ein ganz großes Dankeschön an euch. Durch eure Instagram Beiträge habe ich mich für eure Beratung eingetragen und fühle mich jetzt viel sicherer und endlich vorbereitet für die Zukunft meines Kindes! 😊👍🏻`,
  },
  {
    id: 2,
    avatar: message2Avatar.src,
    alt: "avatar people J",
    text: `Einfach nur top! Ich habe das Gefühl da ist endlich jemand, der sich wirklich Gedanken über die Wünsche von Eltern macht 😊`,
  },
  {
    id: 3,
    avatar: message3Avatar.src,
    alt: "avatar people A",
    text: `Ich bin so glücklich, dass ich mich bei euch beraten lassen habe!
Ich kann endlich positiv in die Zukunft schauen und weiß, dass mein Sohn perfekt abgesichert ist.
Danke, ich werde euch auf jeden Fall weiterempfehlen 😊`,
  },
  {
    id: 4,
    avatar: message4Avatar.src,
    alt: "avatar people L",
    text: `Ich hatte auch meine Beratung bei Felix und ich war wirklich richtig überrascht, wie leicht und verständlich er mir das Thema erklärt hat – ich bin da leider total verloren gewesen 😅🤣
Also danke nochmal lieber Felix, ich fühle mich jetzt endlich richtig sicher und gut aufgehoben bei euch.`,
  },
];

export default function ErfahrungenDMsSection() {
  return (
    <section className="bg-white px-[20px] py-[60px] sm:px-[24px] sm:py-[80px] md:px-[30px] md:py-[100px]">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-col lg:flex-row items-center gap-[72px] lg:justify-between md:gap-[150px]">
          {/* LEFT CONTENT */}
          <div className="">
            <h2 className="w-full text-[27px] leading-[1.25] font-[800] text-[#2C3E50] sm:text-[30px] md:text-[34px]">
              <span className="block">
                Nachrichten aus unserer Community
              </span>
              <span className="block">
                – direkt aus den DMs
              </span>
            </h2>

            <p className="mt-[12px] max-w-[500px] font-medium text-[16px] leading-[23px] font-[300] text-[#4B5563] sm:text-[18px] md:mt-[14px] md:text-[20px]">
              Echte Einblicke von Familien, die ihre Erfahrungen mit
              Invest4Kids teilen.
            </p>

            <div className="mt-[14px] h-[3px] w-[96px] bg-[#84B7CA] md:mt-[16px]" />

            <div className="mt-[14px] flex items-center gap-[12px] md:mt-[16px]">
              <img
                src={dmsStatsImages.src}
                alt="people"
                className="h-auto w-[94px] object-contain md:w-[112px]"
                draggable={false}
              />
              <p className="font-outfit text-[15px] leading-[23px] font-[300] text-[#4B5563] sm:text-[16px] md:text-[18px]">
                5200+ Eltern vertrauen uns
              </p>
            </div>

            <div className="pt-[48px] space-y-[10px] md:space-y-[12px] ">
              <div className="inline-flex min-h-[38px] font-outfit w-full max-w-[412px] items-center rounded-full bg-[#E9E7E1] px-[18px] py-[10px] text-[16px] leading-[1.15] font-medium tracking-[-0.015em] text-[#556274] md:min-h-[42px] md:px-[34px] md:text-[18px]">
                &ldquo; Einfach nur top!
              </div>

              <div className="inline-flex min-h-[38px] font-outfit w-full max-w-[412px] items-center rounded-full bg-[#E9E7E1] px-[18px] py-[10px] text-[16px] leading-[1.15] font-medium tracking-[-0.015em] text-[#556274] md:min-h-[42px] md:px-[34px] md:text-[18px]">
                &ldquo; Sehr professionell und verständlich
              </div>

              <div className="inline-flex min-h-[38px] font-outfit w-full max-w-[412px] items-center rounded-full bg-[#E9E7E1] px-[18px] py-[10px] text-[16px] leading-[1.15] font-medium tracking-[-0.015em] text-[#556274] md:min-h-[42px] md:px-[34px] md:text-[18px]">
                &ldquo; Endlich vorbereitet für die Zukunft
              </div>
            </div>
          </div>

          {/* RIGHT PHONE */}
          <div className="flex justify-center lg:order-2 lg:justify-end px-5">
            <div className="relative w-full sm:w-[330px] md:w-[350px]" style={{ aspectRatio: "1.01/2.07" }}>
              {/* phone shell */}
              <img
                src={phoneImage.src}
                alt="Phone frame"
                className="relative z-[5] h-auto w-full object-contain select-none"
                draggable={false}
              />

              {/* dynamic island */}
              <img
                src={dynamicIsland.src}
                alt=""
                aria-hidden="true"
                className="absolute left-1/2 top-[30px] z-[8] w-[122px] -translate-x-1/2 object-contain"
                draggable={false}
              />

              {/* scrollable content area */}
              <div className="absolute left-[17px] right-[17px] top-[19px] bottom-[17px] z-[7] overflow-hidden rounded-[34px] bg-[#F8F8F8] sm:left-[19px] sm:right-[19px] sm:top-[21px] sm:bottom-[19px] sm:rounded-[38px] md:left-[21px] md:right-[21px] md:top-[23px] md:bottom-[21px] md:rounded-[42px]">
                {/* status / header */}
                <div className="absolute inset-x-0 top-0 z-[3] bg-[#F8F8F8]">
                  <div className="flex items-center justify-between px-[18px] pt-[10px] text-[10px] font-[600] text-black sm:px-[20px] sm:pt-[11px] sm:text-[11px]">
                    <div>9:41</div>
                    <div className="flex items-center gap-[6px]">
                      <div className="h-[6px] w-[6px] rounded-full bg-black" />
                      <div className="h-[6px] w-[6px] rounded-full bg-black" />
                      <div className="h-[6px] w-[10px] rounded-[3px] border border-black" />
                    </div>
                  </div>

                  <div className="mt-[12px] flex items-center justify-between border-b border-black/10 px-[18px] pb-[12px] sm:px-[20px] sm:pb-[13px]">
                    <div className="flex items-center gap-[10px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-[19px] w-[19px] text-black"
                        aria-hidden="true"
                      >
                        <path
                          d="M15.5312 18.9693C15.6009 19.039 15.6562 19.1217 15.6939 19.2128C15.7316 19.3038 15.751 19.4014 15.751 19.4999C15.751 19.5985 15.7316 19.6961 15.6939 19.7871C15.6562 19.8781 15.6009 19.9609 15.5312 20.0306C15.4615 20.1002 15.3788 20.1555 15.2878 20.1932C15.1967 20.2309 15.0991 20.2503 15.0006 20.2503C14.902 20.2503 14.8045 20.2309 14.7134 20.1932C14.6224 20.1555 14.5396 20.1002 14.47 20.0306L6.96996 12.5306C6.90023 12.4609 6.84491 12.3782 6.80717 12.2871C6.76943 12.1961 6.75 12.0985 6.75 11.9999C6.75 11.9014 6.76943 11.8038 6.80717 11.7127C6.84491 11.6217 6.90023 11.539 6.96996 11.4693L14.47 3.9693C14.6107 3.82857 14.8016 3.74951 15.0006 3.74951C15.1996 3.74951 15.3905 3.82857 15.5312 3.9693C15.6719 4.11003 15.751 4.30091 15.751 4.49993C15.751 4.69895 15.6719 4.88982 15.5312 5.03055L8.5609 11.9999L15.5312 18.9693Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="text-[15px] leading-none font-[700] tracking-[-0.02em] text-black sm:text-[16px]">
                        Chats
                      </span>
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3"
                      height="20"
                      viewBox="0 0 3 20"
                      fill="none"
                      className="h-[17px] w-[3px] text-black"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 10C3 10.2967 2.91203 10.5867 2.7472 10.8334C2.58238 11.08 2.34811 11.2723 2.07402 11.3858C1.79994 11.4994 1.49834 11.5291 1.20736 11.4712C0.916393 11.4133 0.649119 11.2704 0.43934 11.0607C0.229562 10.8509 0.0867006 10.5836 0.0288228 10.2926C-0.0290551 10.0017 0.000649929 9.70006 0.114181 9.42598C0.227713 9.15189 0.419972 8.91762 0.666646 8.7528C0.91332 8.58797 1.20333 8.5 1.5 8.5C1.89783 8.5 2.27936 8.65804 2.56066 8.93934C2.84196 9.22064 3 9.60218 3 10ZM1.5 3C1.79667 3 2.08668 2.91203 2.33336 2.74721C2.58003 2.58238 2.77229 2.34811 2.88582 2.07403C2.99935 1.79994 3.02906 1.49834 2.97118 1.20737C2.9133 0.916394 2.77044 0.649119 2.56066 0.43934C2.35088 0.229562 2.08361 0.0867006 1.79264 0.0288228C1.50166 -0.0290551 1.20006 0.000649929 0.925976 0.114181C0.651887 0.227713 0.417618 0.419972 0.252796 0.666645C0.0879739 0.913319 8.0917e-07 1.20333 8.0917e-07 1.5C8.0917e-07 1.89783 0.158036 2.27936 0.43934 2.56066C0.720645 2.84197 1.10218 3 1.5 3ZM1.5 17C1.20333 17 0.91332 17.088 0.666646 17.2528C0.419972 17.4176 0.227713 17.6519 0.114181 17.926C0.000649929 18.2001 -0.0290551 18.5017 0.0288228 18.7926C0.0867006 19.0836 0.229562 19.3509 0.43934 19.5607C0.649119 19.7704 0.916393 19.9133 1.20736 19.9712C1.49834 20.0291 1.79994 19.9993 2.07402 19.8858C2.34811 19.7723 2.58238 19.58 2.7472 19.3334C2.91203 19.0867 3 18.7967 3 18.5C3 18.1022 2.84196 17.7206 2.56066 17.4393C2.27936 17.158 1.89783 17 1.5 17Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>

                {/* chats scroll area */}
                <div className="absolute inset-x-0 top-[76px] bottom-[72px] overflow-y-auto px-[12px] pb-[20px] pt-[8px] sm:top-[82px] sm:bottom-[76px] sm:px-[14px] md:top-[86px] md:bottom-[82px] md:px-[16px]">
                  <div className="space-y-[16px]">
                    {dmMessages.map((message) => (
                      <div
                        key={message.id}
                        className="flex items-end gap-[8px] sm:gap-[9px]"
                      >
                        <img
                          src={message.avatar}
                          alt={message.alt}
                          className="mb-[8px] h-[34px] w-[34px] shrink-0 rounded-full object-cover sm:h-[38px] sm:w-[38px] md:h-[40px] md:w-[40px]"
                          draggable={false}
                        />

                        <div className="max-w-[198px] rounded-[20px] bg-[#ECEBE9] px-[14px] py-[12px] text-[13px] leading-[1.42] font-[400] tracking-[-0.01em] text-black shadow-[0_1px_0_rgba(0,0,0,0.02)] sm:max-w-[220px] sm:px-[15px] sm:py-[13px] sm:text-[14px] md:max-w-[236px] md:rounded-[22px] md:px-[16px] md:py-[14px] md:text-[15px]">
                          {message.text.split("\n").map((line, lineIndex) => (
                            <p
                              key={lineIndex}
                              className={lineIndex === 0 ? "" : "mt-[2px]"}
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* bottom input glass panel */}
                <div className="absolute inset-x-[10px] bottom-[10px] z-[4] rounded-[999px] border border-white/45 bg-white/42 p-[6px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-[14px] sm:inset-x-[12px] sm:bottom-[12px] md:inset-x-[14px] md:bottom-[14px]">
                  <div className="flex items-center justify-between rounded-[999px] bg-white/36 px-[14px] py-[10px] sm:px-[16px] sm:py-[11px] md:px-[18px] md:py-[12px]">
                    <p className="text-[14px] leading-none font-[400] text-black/70 sm:text-[15px]">
                      Nachricht…
                    </p>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="28"
                      viewBox="0 0 25 28"
                      fill="none"
                      className="h-[22px] w-[22px] shrink-0 sm:h-[24px] sm:w-[24px]"
                      aria-hidden="true"
                    >
                      <path
                        d="M23.983 12.2434L2.98299 0.257183C2.62876 0.0577758 2.22219 -0.0289626 1.81743 0.00852432C1.41267 0.0460112 1.02894 0.205944 0.717368 0.467014C0.405794 0.728084 0.181168 1.0779 0.0734162 1.46985C-0.0343354 1.8618 -0.020097 2.27728 0.114235 2.66093L3.94299 13.9934L0.114235 25.3272C0.00768182 25.6288 -0.0249819 25.9515 0.0189843 26.2683C0.0629505 26.5852 0.182264 26.8868 0.366914 27.148C0.551563 27.4092 0.796163 27.6223 1.08019 27.7694C1.36421 27.9165 1.67938 27.9933 1.99924 27.9934C2.34674 27.9927 2.68817 27.9023 2.99049 27.7309L23.9805 15.7247C24.2901 15.5513 24.548 15.2986 24.7277 14.9926C24.9074 14.6866 25.0024 14.3383 25.003 13.9834C25.0037 13.6285 24.9099 13.2799 24.7313 12.9732C24.5527 12.6666 24.2957 12.413 23.9867 12.2384L23.983 12.2434ZM1.99924 25.9934C1.99977 25.9884 1.99977 25.9834 1.99924 25.9784L5.71673 14.9934H12.9992C13.2645 14.9934 13.5188 14.8881 13.7063 14.7005C13.8939 14.513 13.9992 14.2586 13.9992 13.9934C13.9992 13.7282 13.8939 13.4739 13.7063 13.2863C13.5188 13.0988 13.2645 12.9934 12.9992 12.9934H5.71673L2.00674 2.01343C2.00551 2.00636 2.00296 1.99957 1.99924 1.99343L22.9992 13.9722L1.99924 25.9934Z"
                        fill="url(#dmSendGradient)"
                      />
                      <defs>
                        <linearGradient
                          id="dmSendGradient"
                          x1="0"
                          y1="28.1384"
                          x2="27.9693"
                          y2="3.17883"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F8BF3C" />
                          <stop offset="1" stopColor="#84B7CA" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
