"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

type DeferredVideoPlayerProps = {
  aspectRatioClassName: string;
  imageSizes: string;
  posterAlt: string;
  posterSrc: StaticImageData | string;
  title: string;
  videoClassName?: string;
  videoPoster?: string;
  videoSrc: string;
};

function getPosterUrl(posterSrc: DeferredVideoPlayerProps["posterSrc"]) {
  return typeof posterSrc === "string" ? posterSrc : posterSrc.src;
}

export default function DeferredVideoPlayer({
  aspectRatioClassName,
  imageSizes,
  posterAlt,
  posterSrc,
  title,
  videoClassName = "object-cover",
  videoPoster,
  videoSrc,
}: DeferredVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-[20px] ${aspectRatioClassName}`}>
      {isPlaying ? (
        <video
          className={`absolute inset-0 h-full w-full bg-black ${videoClassName}`}
          controls
          autoPlay
          playsInline
          preload="metadata"
          poster={videoPoster ?? getPosterUrl(posterSrc)}
        >
          <source src={videoSrc} />
        </video>
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label={`${title} abspielen`}
          className="group absolute inset-0 block h-full w-full cursor-pointer"
        >
          <Image
            src={posterSrc}
            alt={posterAlt}
            fill
            sizes={imageSizes}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/15 transition-colors duration-300 group-hover:bg-black/25" />
          <div className="absolute left-1/2 top-1/2 flex h-[54px] w-[54px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#133A7D] transition-transform duration-300 group-hover:scale-[1.04]">
            <svg
              viewBox="0 0 24 24"
              className="ml-[2px] h-7 w-7 fill-current"
              aria-hidden="true"
            >
              <polygon points="7,5 7,19 19,12" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}
