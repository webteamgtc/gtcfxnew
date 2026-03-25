"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function clampIndex(index, length) {
  if (length <= 0) return 0;
  return Math.min(Math.max(0, index), length - 1);
}

function ChevronLeft({ className }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight({ className }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

/**
 * Mobile carousel (Swiper): one slide per view, full width, no peek.
 * Same API as before: items, renderItem, trackClassName, initialIndex, onActiveIndexChange, etc.
 *
 * @param {object} props
 * @param {unknown[]} props.items
 * @param {(item: unknown, index: number) => React.ReactNode} props.renderItem
 * @param {string} [props.className]
 * @param {string} [props.trackClassName] — passed to Swiper root (e.g. `-mx-4 px-4`)
 * @param {string} [props.slideClassName] — each slide wrapper
 * @param {boolean} [props.showArrows=true]
 * @param {number} [props.initialIndex=0]
 * @param {(index: number) => void} [props.onActiveIndexChange]
 */
export default function MobilePeekCarousel({
  items,
  renderItem,
  className = "",
  trackClassName = "",
  slideClassName = "",
  showArrows = true,
  initialIndex = 0,
  onActiveIndexChange,
}) {
  const swiperRef = useRef(null);
  const prevInitialIndexRef = useRef(initialIndex);
  const [activeIndex, setActiveIndex] = useState(() =>
    clampIndex(initialIndex, items.length)
  );

  const handleSwiper = useCallback((swiper) => {
    swiperRef.current = swiper;
    setActiveIndex(swiper.activeIndex);
  }, []);

  const handleSlideChange = useCallback(
    (swiper) => {
      const i = swiper.activeIndex;
      setActiveIndex(i);
      onActiveIndexChange?.(i);
    },
    [onActiveIndexChange]
  );

  useEffect(() => {
    const id = window.setTimeout(() => {
      const swiper = swiperRef.current;
      if (!swiper) return;

      if (prevInitialIndexRef.current !== initialIndex) {
        prevInitialIndexRef.current = initialIndex;
        const idx = clampIndex(initialIndex, items.length);
        swiper.slideTo(idx);
        return;
      }

      const max = items.length - 1;
      if (swiper.activeIndex > max) {
        swiper.slideTo(max);
      }
    }, 0);
    return () => window.clearTimeout(id);
  }, [initialIndex, items.length]);

  const goTo = useCallback(
    (index) => {
      swiperRef.current?.slideTo(clampIndex(index, items.length));
    },
    [items.length]
  );

  const goPrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const goNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  const atStart = activeIndex <= 0;
  const atEnd = activeIndex >= items.length - 1;

  if (!items.length) return null;

  const start = clampIndex(initialIndex, items.length);

  return (
    <div
      className={["w-full min-w-0 max-w-full", className].filter(Boolean).join(" ")}
      role="region"
      aria-roledescription="carousel"
      aria-label="Carousel"
    >
      <Swiper
        className={["mobile-peek-swiper w-full min-w-0 !pb-1", trackClassName]
          .filter(Boolean)
          .join(" ")}
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={false}
        initialSlide={start}
        resistanceRatio={0}
        speed={300}
        onSwiper={handleSwiper}
        onSlideChange={handleSlideChange}
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            className={["box-border !w-full", slideClassName].filter(Boolean).join(" ")}
          >
            <div
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${items.length}`}
              aria-hidden={index !== activeIndex}
            >
              {renderItem(item, index)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-6 flex items-center justify-center gap-4">
        {showArrows && (
          <button
            type="button"
            onClick={goPrev}
            disabled={atStart}
            aria-label="Previous slide"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-primary shadow-sm transition-opacity disabled:pointer-events-none disabled:opacity-35"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        <div
          className="flex min-h-10 items-center justify-center gap-2"
          role="tablist"
          aria-label="Slide indicators"
        >
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={[
                "h-2 rounded-full transition-all duration-300",
                i === activeIndex
                  ? "w-6 bg-primary"
                  : "w-4 bg-[#e8e8ed] hover:bg-[#dadada]",
              ].join(" ")}
            />
          ))}
        </div>

        {showArrows && (
          <button
            type="button"
            onClick={goNext}
            disabled={atEnd}
            aria-label="Next slide"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-primary shadow-sm transition-opacity disabled:pointer-events-none disabled:opacity-35"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}
