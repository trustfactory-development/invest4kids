"use client";

import { useState, useRef, useCallback } from "react";

interface ConditionCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  expandedContent?: React.ReactNode;
}

export default function ConditionCardExpandable({
  icon,
  title,
  subtitle,
  description,
  expandedContent,
}: ConditionCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <article className="overflow-hidden rounded-[20px] border border-[#E4E4E7] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      <div className="flex flex-col gap-[16px] p-[24px] md:flex-row md:items-start md:gap-[12px] md:p-[30px]">
        {/* Icon */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-[10px] bg-[#84B7CA4D]">
            {icon}
          </div>
          <h3 className="md:hidden font-poppins text-[24px] leading-[125%] font-[800] text-[#133A7D] md:text-[28px]">
            {title}
          </h3>
        </div>
        
        {/* Content */}
        <div className="min-w-0 flex-1">
          <h3 className="hidden md:block font-poppins text-[24px] leading-[125%] font-[800] text-[#133A7D] md:text-[28px]">
            {title}
          </h3>
          <p className="mt-[6px] font-poppins text-[17px] leading-[150%] font-medium  text-[#2C3E50] md:text-[20px]">
            {subtitle}
          </p>
          <p className="mt-[12px] font-outfit text-[16px] leading-[23px] font-[300] text-[#4B5563] md:text-[18px]">
            {description}
          </p>

          {expandedContent && (
            <>
              <button
                onClick={toggle}
                className="mt-[24px] inline-flex h-[44px] min-w-[160px] w-full md:w-auto items-center justify-center rounded-full border border-[#133A7D] bg-transparent px-[24px] font-poppins text-[15px] font-[600] text-[#2C3E50] transition-all duration-300 ease-out hover:bg-[#133A7D] hover:text-white"
                aria-expanded={isOpen}
              >
                {isOpen ? "Weniger anzeigen" : "Mehr erfahren"}
              </button>

              <div
                ref={contentRef}
                className="transition-[max-height,opacity] duration-500 ease-in-out"
                style={{
                  maxHeight: isOpen
                    ? `${contentRef.current?.scrollHeight ?? 2000}px`
                    : "0px",
                  opacity: isOpen ? 1 : 0,
                  overflow: "hidden",
                }}
                aria-hidden={!isOpen}
                {...(!isOpen ? { inert: true } : {})}
              >
                <div className="pt-[20px]">{expandedContent}</div>
              </div>
            </>
          )}

          {!expandedContent && (
            <button className="mt-[18px] inline-flex h-[44px] min-w-[160px] items-center justify-center rounded-full border border-[#133A7D] bg-transparent px-[24px] font-poppins text-[15px] font-[600] text-[#2C3E50] transition-all duration-300 ease-out hover:bg-[#133A7D] hover:text-white">
              Mehr erfahren
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export function ExpandedInfoBox({
  emoji,
  title,
  children,
}: {
  emoji?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[12px] bg-[#F2FAFA] p-[20px] md:p-[24px]">
      <h4 className="font-poppins text-[18px] font-[700] text-[#2C3E50]">
        {emoji && <span className="mr-[6px]">{emoji}</span>}
        {title}
      </h4>
      <div className="mt-[10px] font-outfit text-[16px] leading-[23px] font-[300] text-[#4B5563]">
        {children}
      </div>
    </div>
  );
}

export function ExpandedBullet({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-[10px]">
      <div className="mt-[4px] flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#133A7D]">
        <svg
          viewBox="0 0 24 24"
          className="h-[12px] w-[12px]"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m5 12 5 5L20 7" />
        </svg>
      </div>
      <p className="font-outfit text-[16px] leading-[23px] font-[300] text-[#4B5563]">
        {children}
      </p>
    </div>
  );
}

export function ExpandedStat({
  icon,
  value,
  description,
  source,
}: {
  icon: React.ReactNode;
  value: string;
  description: string;
  source?: string;
}) {
  return (
    <div className="rounded-[12px] bg-[#EFFAFD] p-[20px]">
      <div className="flex items-center gap-[10px]">
        {icon}
        <span className="font-poppins text-[28px] font-[800] text-[#133A7D]">
          {value}
        </span>
      </div>
      <p className="mt-[8px] font-outfit text-[15px] leading-[22px] font-[300] text-[#4B5563]">
        {description}
      </p>
      {source && (
        <p className="mt-[6px] font-outfit text-[13px] font-[300] text-[#8B95A5]">
          {source}
        </p>
      )}
    </div>
  );
}
