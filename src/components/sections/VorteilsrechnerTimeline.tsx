"use client";

import type { TimelineBlock, TimelinePill } from "@/lib/invest4kidsApi";

const IMAGE_BASE_URL = "https://invest4kids.de";

interface TimelineProps {
  blocks: TimelineBlock[] | null;
  isLoading: boolean;
}

/** Resolve relative image paths from the API to absolute URLs */
function resolveImageUrl(src: string | undefined): string | undefined {
  if (!src) return undefined;
  if (src.startsWith("http")) return src;
  return `${IMAGE_BASE_URL}${src}`;
}

/** Classify pill text length for row layout balancing */
function getSizeByLength(text: string): "small" | "medium" | "large" {
  const clean = (text || "").replace(/<[^>]+>/g, "").trim();
  const len = clean.length;

  const targets: Record<string, number> = {
    small: 12,
    medium: 17,
    large: 23,
  };

  let best: "small" | "medium" | "large" = "small";
  let bestDiff = Infinity;

  for (const [size, target] of Object.entries(targets)) {
    const diff = Math.abs(len - target);
    if (diff < bestDiff) {
      bestDiff = diff;
      best = size as "small" | "medium" | "large";
    }
  }

  return best;
}

/** Group pills into balanced rows (ported from original Vue logic) */
function groupPills(
  pills: TimelinePill[] | TimelinePill[][]
): TimelinePill[][] {
  const manualRows: TimelinePill[][] = [];
  const all: { data: TimelinePill; size: string }[] = [];

  const items = Array.isArray(pills) ? pills : [];
  items.forEach((item) => {
    if (Array.isArray(item)) {
      manualRows.push(item as TimelinePill[]);
    } else if (item && typeof item === "object" && item.text) {
      const size = getSizeByLength(item.text);
      all.push({ data: item, size });
    }
  });

  if (!all.length) return manualRows.length ? manualRows : [[]];

  const small = all.filter((p) => p.size === "small");
  const medium = all.filter((p) => p.size === "medium");
  const large = all.filter((p) => p.size === "large");

  const rows: TimelinePill[][] = [];

  while (large.length) {
    const L = large.shift()!;
    if (small.length) {
      const S = small.shift()!;
      rows.push([L.data, S.data]);
    } else {
      rows.push([L.data]);
    }
  }

  const mediumSingles = [...medium];
  while (mediumSingles.length) {
    const M = mediumSingles.shift()!;
    if (small.length) {
      const S = small.shift()!;
      rows.push([M.data, S.data]);
    } else {
      rows.push([M.data]);
    }
  }

  while (small.length) {
    const row: TimelinePill[] = [];
    row.push(small.shift()!.data);
    if (small.length) {
      row.push(small.shift()!.data);
    }
    rows.push(row);
  }

  return manualRows.concat(rows);
}

/** Render pill rows (mobile) */
function MobilePillRows({
  pills,
  isBottomRight,
}: {
  pills: TimelinePill[] | TimelinePill[][];
  isBottomRight: boolean;
}) {
  const pillGroups = groupPills(pills);
  const displayGroups = isBottomRight
    ? [...pillGroups].reverse()
    : pillGroups;

  if (!pillGroups.length || (pillGroups.length === 1 && pillGroups[0].length === 0))
    return null;

  return (
    <>
      {displayGroups.map((pillGroup, rowIndex) => (
        <div className="flex gap-0.5" key={`row-${rowIndex}`}>
          {pillGroup.map((pill, pIndex) => (
            <div className="text-[10px] flex items-center bg-bg-cream border border-accent py-1.5 px-[18px] rounded-full flex-none gap-3 opacity-85" key={`pill-${rowIndex}-${pIndex}`}>
              {pill.imgSrc && (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="w-3 h-3" src={resolveImageUrl(pill.imgSrc)} alt="" />
              )}
              <span className="text-gray-600 font-outfit font-normal text-[10px] leading-none whitespace-nowrap">{pill.text}</span>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

/** Render pill rows (desktop) */
function DesktopPillRows({
  pills,
}: {
  pills: TimelinePill[] | TimelinePill[][];
}) {
  const pillGroups = groupPills(pills);

  if (!pillGroups.length || (pillGroups.length === 1 && pillGroups[0].length === 0))
    return null;

  return (
    <>
      {pillGroups.map((pillGroup, rowIndex) => (
        <div className="flex gap-0.5" key={`row-${rowIndex}`}>
          {pillGroup.map((pill, pIndex) => (
            <div className="text-[10px] flex items-center bg-bg-cream border border-accent py-[7px] px-[18px] rounded-full flex-none gap-3" key={`pill-${rowIndex}-${pIndex}`}>
              {pill.imgSrc && (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="w-3 h-3" src={resolveImageUrl(pill.imgSrc)} alt="" />
              )}
              <span className="text-gray-600 font-outfit font-normal text-[13px] leading-[13px] whitespace-nowrap">{pill.text}</span>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

function TimelineStep({
  block,
  showArrow,
}: {
  block: TimelineBlock;
  showArrow: boolean;
}) {
  const imageUrl = resolveImageUrl(block.imageSrc);
  const isBottomRight = block.mobile_pills_start_position === "bottom-right";
  const pillGroups = block.pills ? groupPills(block.pills) : [];
  const hasPills =
    pillGroups.length > 0 &&
    !(pillGroups.length === 1 && pillGroups[0].length === 0);

  const hasCapitalExpression =
    block.capital_as_text &&
    (block.capital_as_text.includes("+") ||
      block.capital_as_text.includes("=") ||
      block.capital_as_text.includes("-"));

  return (
    <div>
      {/* ===== DESKTOP LAYOUT (two-column) ===== */}
      <div className="hidden md:flex md:w-full">
        {/* Left column: image + age/capital */}
        <div className="flex-1 flex flex-col border border-primary-light rounded-[20px] overflow-hidden bg-white">
          {imageUrl && (
            <div className="rounded-t-[20px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-full h-auto block object-cover" src={imageUrl} alt="" />
            </div>
          )}
          {block.age !== null && block.age_text && (
            <div className="p-2.5 text-center flex flex-col gap-1.5">
              <p
                className="m-0 font-poppins text-[20px] font-medium leading-normal text-gray-600"
                dangerouslySetInnerHTML={{ __html: block.age_text }}
              />
              {block.capital_as_text && (
                <p
                  className={`m-0 font-poppins font-bold leading-normal text-text-medium ${hasCapitalExpression ? "text-[28px] font-bold" : "text-[28px]"}`}
                  dangerouslySetInnerHTML={{ __html: block.capital_as_text }}
                />
              )}
            </div>
          )}
        </div>

        {/* Right column: pills + bullets + tip */}
        <div className="flex-1 flex flex-col justify-start pl-[15px] gap-2.5">
          {hasPills && (
            <div className="flex flex-wrap gap-2.5">
              <DesktopPillRows pills={block.pills} />
            </div>
          )}

          <div className="flex-1">
            <ul className="pl-5 m-0 list-disc">
              {block.texts
                .filter((t) => t)
                .map((text, i) => (
                  <li className="mb-2 leading-6 text-base text-text-medium font-outfit font-normal" key={i} dangerouslySetInnerHTML={{ __html: text }} />
                ))}
            </ul>
          </div>

          {block.tipp && (
            <div className="relative py-4 px-[34px] bg-bg-cream border border-accent rounded-[15px] flex items-center gap-2.5">
              {block.show_birne && <div className="kw-lamp-icon-lg shrink-0 w-[65px] h-[65px] bg-white border border-accent rounded-full flex items-center justify-center" />}
              <div
                className="m-0 text-sm leading-[21px] text-text-medium font-outfit font-normal"
                lang="de"
                dangerouslySetInnerHTML={{ __html: block.tipp }}
              />
            </div>
          )}
        </div>
      </div>

      {/* ===== MOBILE LAYOUT (single-column card) ===== */}
      <div className="block md:hidden">
        <div className="w-full relative box-border">
          {imageUrl && (
            <div className="relative border border-primary-light rounded-t-[20px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-full h-auto rounded-t-[20px] block object-cover" src={imageUrl} alt="" />
              {hasPills && (
                <div
                  className={isBottomRight
                    ? "absolute bottom-3 right-3 flex flex-col gap-0.5 z-2 items-end"
                    : "absolute top-3 left-3 flex flex-col gap-0.5 z-2"
                  }
                >
                  <MobilePillRows pills={block.pills} isBottomRight={isBottomRight} />
                </div>
              )}
            </div>
          )}

          {block.age !== null && block.age_text && (
            <div className="kw-age-capital-mobile m-0 p-4 bg-white text-center flex flex-col gap-1.5 border border-primary-light border-t-0">
              <p dangerouslySetInnerHTML={{ __html: block.age_text }} />
              {block.capital_as_text && (
                <p
                  className={hasCapitalExpression ? "capital-expression" : undefined}
                  dangerouslySetInnerHTML={{ __html: block.capital_as_text }}
                />
              )}
            </div>
          )}

          <div
            className={`kw-bullet m-0 py-4 px-6 bg-white border border-primary-light border-t-0 list-none${!block.tipp ? " rounded-b-[20px]" : ""}`}
          >
            <ul className="pl-0 m-0 list-none">
              {block.texts
                .filter((t) => t)
                .map((text, i) => (
                  <li className="mb-3 leading-[21px] text-base text-text-medium font-outfit font-normal" key={i} dangerouslySetInnerHTML={{ __html: text }} />
                ))}
            </ul>
          </div>

          {block.tipp && (
            <div className="relative m-0 p-6 bg-bg-cream border border-accent text-text-medium rounded-b-[20px]">
              {block.show_birne && <div className="kw-lamp-icon absolute -top-5 right-0 w-10 h-10 bg-white border border-accent rounded-full flex items-center justify-center" />}
              <div
                className="m-0 text-base leading-[21px] text-text-medium font-outfit font-normal"
                lang="de"
                dangerouslySetInnerHTML={{ __html: block.tipp }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Arrow (shared) */}
      {showArrow && (
        <div className="md:w-1/2 w-full">
          <div className="flex flex-col items-center m-0 p-0 mr-auto">
            <div className="w-3.75 md:w-1.5 h-[35px] md:h-[50px] bg-primary-light" />
            <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-l-transparent border-r-transparent border-t-primary-light" />
          </div>
        </div>
      )}
    </div>
  );
}

export default function VorteilsrechnerTimeline({
  blocks,
  isLoading,
}: TimelineProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary" />
      </div>
    );
  }

  if (!blocks || blocks.length === 0) return null;

  return (
    <div className="flex flex-col w-full py-5">
      {blocks.map((block, index) => {
        // Text-only blocks (age -1 or -2)
        if (block.age === -1 || block.age === -2) {
          return (
            <div key={`text-${index}`} className="py-5 px-2.5 md:py-25 md:px-0 text-center">
              <h3 className="m-0 font-outfit font-semibold text-lg md:text-[31px] leading-7 md:leading-8 text-text-medium">
                {block.texts.map((text, i) => (
                  <span key={i} dangerouslySetInnerHTML={{ __html: text }} />
                ))}
              </h3>
            </div>
          );
        }

        const nextBlock = blocks[index + 1];
        const showArrow =
          index < blocks.length - 1 &&
          block.age < 67 &&
          nextBlock &&
          nextBlock.age !== -1 &&
          nextBlock.age !== -2;

        return (
          <TimelineStep
            key={`step-${block.age}-${index}`}
            block={block}
            showArrow={showArrow}
          />
        );
      })}
    </div>
  );
}
