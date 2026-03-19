import Image from "next/image";
import {
  ArrowUp,
  Building2,
  GraduationCap,
  Headphones,
  Heart,
  Lightbulb,
  Megaphone,
  Medal,
  Star,
  Target,
  Users,
} from "lucide-react";

type Chip = {
  label: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
};

type TimelineCard = {
  date: string;
  mobileLabel: string;
  desktopLabel: string;
  mobileTitle: string;
  description: string;
  chips: Chip[];
  border: "blue" | "gold";
  iconTheme: "blue" | "gold";
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
};

const timelineCards: TimelineCard[] = [
  {
    date: "2020",
    mobileLabel: "The EXPLOSIVE start",
    desktopLabel: "Foundation of Invest4Kids",
    mobileTitle: "Foundation of Invest4Kids",
    description:
      "The starting signal for Invest4Kids. On this day, not only the idea was born, but also the name that stands for our commitment: to empower children and their families in financial matters.",
    chips: [
      { label: "VISION BORN", icon: Lightbulb },
      { label: "MISSION CLEAR", icon: Heart },
    ],
    border: "blue",
    iconTheme: "blue",
    icon: Target,
  },
  {
    date: "2022",
    mobileLabel: "TEAM EXPLOSION",
    desktopLabel: "Expansion of the team",
    mobileTitle: "Expansion of the team",
    description:
      "Our team is growing! The first marketing employees are joining us to spread the Invest4Kids message even further and reach more families.",
    chips: [{ label: "MARKETING POWER", icon: Megaphone }],
    border: "gold",
    iconTheme: "gold",
    icon: Users,
  },
  {
    date: "2023",
    mobileLabel: "MEGA MILESTONE",
    desktopLabel: "Founding of Invest4Kids GmbH",
    mobileTitle: "Founding of Invest4Kids GmbH",
    description:
      "A major milestone for us: the founding of Invest4Kids GmbH. This step underscores our commitment and success in advising families on matters relating to children and finances.",
    chips: [
      { label: "BUSINESS LEVEL UP", icon: Building2 },
      { label: "NEXT LEVEL", icon: ArrowUp },
    ],
    border: "gold",
    iconTheme: "gold",
    icon: Medal,
  },
  {
    date: "April 2024",
    mobileLabel: "PODCAST LAUNCH",
    desktopLabel: "Launching your own podcast",
    mobileTitle: "Launching your own podcast",
    description:
      "With KINDERleicht Investieren, we are launching our weekly podcast on investment and financial education for parents and children. This is another way for us to provide practical support to families and further our mission of making financial knowledge simple and accessible.",
    chips: [{ label: "EDUCATIONAL POWER", icon: GraduationCap }],
    border: "blue",
    iconTheme: "blue",
    icon: Headphones,
  },
  {
    date: "January 2025",
    mobileLabel: "EXPANSION MODE",
    desktopLabel: "Relocation to new company premises",
    mobileTitle: "Relocation to new company premises",
    description:
      "With over 35 employees, a larger location was necessary. The move marks an important step in our development and enables us to reach even more families.",
    chips: [{ label: "LARGER LOCATION", icon: ArrowUp }],
    border: "blue",
    iconTheme: "blue",
    icon: Building2,
  },
  {
    date: "2025",
    mobileLabel: "MARKET LEADERSHIP ACHIEVED",
    desktopLabel: "Leading in children's investments",
    mobileTitle: "Leading in children's investments",
    description:
      "With over 5,200 families under our care, we are now one of Germany's leading consulting firms for child investments, and we continue to grow in order to support even more families on their journey.",
    chips: [{ label: "5,200+ FAMILIES", icon: Users }],
    border: "gold",
    iconTheme: "gold",
    icon: Star,
  },
];

function QuoteMarkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 28 32"
      className="h-8 w-7 shrink-0 text-primary"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.665 7c-.619 0-1.213.246-1.65.683a2.333 2.333 0 0 0-.683 1.65v7c0 .619.246 1.213.683 1.65.437.438 1.031.684 1.65.684.309 0 .606.123.825.341.219.219.342.516.342.825V21c0 .619-.246 1.213-.684 1.65a2.333 2.333 0 0 1-1.65.683c-.309 0-.606.123-.824.342a1.167 1.167 0 0 0-.342.825v2.333c0 .31.123.607.342.825.218.219.515.342.824.342A7 7 0 0 0 24.5 21V9.333c0-.619-.246-1.213-.684-1.65A2.333 2.333 0 0 0 22.165 7h-3.5Z"
        stroke="currentColor"
        strokeWidth="2.333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.833 7c-.619 0-1.212.246-1.65.683a2.333 2.333 0 0 0-.683 1.65v7c0 .619.246 1.213.683 1.65.438.438 1.031.684 1.65.684.31 0 .606.123.825.341.219.219.342.516.342.825V21c0 .619-.246 1.213-.684 1.65a2.333 2.333 0 0 1-1.65.683c-.309 0-.606.123-.824.342A1.166 1.166 0 0 0 3.5 24.5v2.333c0 .31.123.607.342.825.218.219.515.342.824.342A7 7 0 0 0 11.667 21V9.333c0-.619-.246-1.213-.684-1.65A2.333 2.333 0 0 0 9.333 7h-3.5Z"
        stroke="currentColor"
        strokeWidth="2.333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TimelineCardItem({
  card,
}: Readonly<{
  card: TimelineCard;
}>) {
  const borderClass =
    card.border === "blue" ? "border-[#84B7CA]" : "border-accent";
  const iconBgClass =
    card.iconTheme === "blue"
      ? "bg-[linear-gradient(281deg,#006F99_-180%,#133A7D_97%)]"
      : "bg-[linear-gradient(281deg,#F8BF3C_-0.26%,#84B7CA_100.26%)]";

  return (
    <article
      className={`rounded-[20px] border bg-[#FFFFFFB8] p-6 shadow-[2px_8px_20px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[2px_8px_20px_rgba(0,0,0,0.09)] md:p-[34px] ${borderClass}`}
    >
      <div className="flex items-start gap-4 md:gap-4">
        <div
          className={`flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-[10px] shadow-[2px_8px_20px_rgba(0,0,0,0.09)] md:h-[70px] md:w-[70px] ${iconBgClass}`}
        >
          <card.icon className="h-9 w-9 text-white" strokeWidth={2.2} />
        </div>
        <div className="min-w-0">
          <h3 className="font-poppins text-[22px] leading-tight font-extrabold text-primary md:text-[28px]">
            {card.date}
          </h3>
          <p className="mt-1 font-poppins text-[18px] uppercase leading-normal font-medium text-text-medium md:hidden">
            {card.mobileLabel}
          </p>
          <p className="mt-1 hidden font-poppins text-[20px] leading-normal font-medium text-text-medium md:block">
            {card.desktopLabel}
          </p>
        </div>
      </div>

      <h4 className="mt-4 font-poppins text-[22px] leading-tight font-extrabold text-text-medium md:hidden">
        {card.mobileTitle}
      </h4>

      <p className="mt-4 font-outfit text-[16px] leading-[1.26] font-light text-[#4B5563] md:mt-6 md:text-[18px] md:leading-[1.28]">
        {card.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-3 md:mt-6">
        {card.chips.map(({ label, icon: Icon }) => (
          <span
            key={label}
            className="inline-flex h-[26px] items-center justify-center gap-2 rounded-[50px] border border-accent bg-bg-cream px-4 py-1.5 font-outfit text-[12px] leading-none font-normal text-[#4B5563]"
          >
            <Icon className="h-3 w-3" strokeWidth={1.8} />
            {label}
          </span>
        ))}
      </div>
    </article>
  );
}

export function AboutStoryTimelineSection() {
  return (
    <section className="bg-bg-light-blue px-5 py-[50px] md:px-[30px] md:py-[100px]">
      <div className="mx-auto w-full max-w-[1100px]">
        <header className="text-center">
          <h2 className="font-poppins text-[27px] leading-normal font-extrabold text-text-medium md:text-[34px] md:leading-tight">
            How it all began
          </h2>
          <p className="mt-4 font-poppins text-[18px] leading-normal font-medium text-[#4B5563] md:text-[20px]">
            and why we never stopped doing it again
          </p>
        </header>

        <div className="mt-[35px] rounded-[20px] bg-[#FFFFFFB8] p-6 shadow-[2px_8px_20px_rgba(0,0,0,0.04)] md:mt-12 md:p-[34px]">
          <div className="flex flex-col-reverse gap-[34px] md:flex-row md:items-center">
            <div className="w-full overflow-hidden rounded-[20px] border border-primary-light md:w-[362px] md:shrink-0">
              <div className="relative aspect-340/228 md:aspect-360/249">
                <Image
                  src="https://invest4kids.de/wp-content/uploads/2025/12/Bogdan-Jakuschenko.webp"
                  alt="Bogdan Jakuschenko, founder of Invest4Kids"
                  fill
                  sizes="(min-width: 768px) 362px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="border-t border-primary-light px-6 pb-[15px] pt-3 md:px-[34px] md:pb-4 md:pt-5">
                <h3 className="font-poppins text-[16px] leading-none font-bold text-text-medium md:text-[18px] md:leading-none">
                  Bogdan Yakovlevich Yakovlevich
                </h3>
                <p className="mt-3 font-outfit text-[18px] leading-[1.26] font-normal text-[#4B5563] md:leading-[24.5px]">
                  Founder of Invest4Kids
                </p>
              </div>
            </div>

            <div className="w-full md:max-w-[636px]">
              <h3 className="text-center font-poppins text-[22px] leading-normal font-extrabold text-text-medium md:text-left md:text-[28px] md:leading-tight">
                It all started with a simple question:
              </h3>
              <div className="mt-0 flex gap-[11px] md:mt-6">
                <QuoteMarkIcon />
                <p className="font-outfit text-[16px] leading-[1.26] font-light text-primary md:text-[18px] md:leading-[1.28]">
                  Why are there so many financial products, but hardly any that
                  are really tailored to children?
                </p>
              </div>
              <p className="mt-6 font-outfit text-[16px] leading-[1.26] font-light text-[#4B5563] md:text-[18px] md:leading-[1.28]">
                Parents were faced with the problem of not being able to find
                suitable, fair, and flexible options for their children&apos;s
                financial future. We wanted to close this gap.
              </p>
              <p className="mt-6 font-outfit text-[16px] leading-[1.26] font-light text-[#4B5563] md:text-[18px] md:leading-[1.28]">
                In 2020, it became Invest4Kids. Our goal was to provide parents
                with simple, transparent, and sustainable solutions for
                investing their children&apos;s money.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[34px] grid grid-cols-1 gap-[34px] md:grid-cols-2">
          {timelineCards.map((card) => (
            <TimelineCardItem key={card.date + card.desktopLabel} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
