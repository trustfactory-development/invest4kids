"use client";

import { useRef, useEffect } from "react";
import noUiSlider, { API } from "nouislider";
import "nouislider/dist/nouislider.css";

interface NoUiSliderProps {
  min: number;
  max: number;
  step: number;
  start: number;
  onSlide: (value: number) => void;
}

export default function NoUiSliderComponent({
  min,
  max,
  step,
  start,
  onSlide,
}: NoUiSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderInstance = useRef<API | null>(null);
  const onSlideRef = useRef(onSlide);

  // Keep callback ref up to date without recreating slider
  useEffect(() => {
    onSlideRef.current = onSlide;
  }, [onSlide]);

  // Initialize slider
  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = noUiSlider.create(sliderRef.current, {
      start: [start],
      connect: [true, false],
      range: { min, max },
      step,
    });

    slider.on("slide", (values) => {
      onSlideRef.current(parseFloat(values[0] as string));
    });

    sliderInstance.current = slider;

    return () => {
      slider.destroy();
      sliderInstance.current = null;
    };
    // Only recreate on range/step changes, not on start/onSlide
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [min, max, step]);

  // Sync external value changes to slider
  useEffect(() => {
    if (sliderInstance.current) {
      const currentVal = parseFloat(
        sliderInstance.current.get() as string
      );
      if (Math.abs(currentVal - start) > 0.001) {
        sliderInstance.current.set(start);
      }
    }
  }, [start]);

  return <div ref={sliderRef} />;
}
