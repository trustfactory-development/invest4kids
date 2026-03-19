import Image from "next/image";

interface TeamCardProps {
  name: string;
  imageUrl: string;
  subtitle: string;
  isCenter?: boolean;
}

export default function TeamCard({
  name,
  imageUrl,
  subtitle,
  isCenter = false,
}: TeamCardProps) {
  return (
    <div
      className={`flex w-63.25 shrink-0 flex-col transition-transform duration-500 ease-in-out ${
        isCenter ? "-translate-y-14" : "translate-y-0"
      }`}
    >
      <div className="relative w-full">
        <div className="absolute w-full inset-x-0 top-18 bottom-0 rounded-2xl bg-white shadow-[0_1px_12px_rgba(0,0,0,0.06)] ring-1 ring-black/3" />

        <div className="relative z-10 w-full h-83.25">
          <Image
            src={imageUrl}
            alt={name}
            width={464}
            height={668}
            unoptimized
            className="h-full w-full object-contain object-top"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] bg-linear-to-t from-white via-white/85 to-transparent" />
          <div className="pointer-events-none absolute inset-x-5 bottom-2 h-10 rounded-full bg-white/70 blur-xl" />
        </div>

        <div className="relative z-10 p-8.5 flex flex-col gap-y-2.75">
          <h3 className="text-lg font-bold leading-tight text-text-medium">
            {name}
          </h3>
          <p className="font-outfit text-lg leading-snug text-[#4B5563]">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
