"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import LeaderCardGridItem from "../leaderboard/LeaderCardGridItem";

export default function CopyTradingSectionClient({ initialData }) {
  const items = initialData?.items || [];
  const visibleItems = items.filter((s) => Number(s?.maxProfit) >= 50);

  if (!visibleItems.length) return null;

  return (
    <section className="py-10 md:py-16 bg-[#F1F2F4]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-4 items-start">
            <h2 className="HeadingH2">
              Copy Trading <span className="text-secondary">Made Simple</span>
            </h2>
            <p className="Text max-w-3xl">
              Follow top-performing traders and automatically copy their trades in real time. Choose who to follow, set your investment amount, and stay in control an easy way to trade without constant monitoring.
            </p>
          </div>

          <div className="flex flex-row gap-3">
            <Link href="https://gtccopy.com/portal/login?redirectUrl=%2F" target="_blank" className="rounded-full hover:no-underline bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#995F22] hover:from-[#263788] hover:via-[#101638] hover:to-[#263788] px-3 md:px-5 py-2.5 text-[12px] md:text-base font-medium text-white transition hover:opacity-90">
              Explore Copy Trading
            </Link>
            <Link href="https://gtccopy.com/portal/login?redirectUrl=%2F" target="_blank" className="rounded-full  hover:no-underline border border-[#8f8f8f] px-3 md:px-5 py-2.5 text-[12px] md:text-base font-medium text-white transition hover:bg-white bg-primary-gradient">
              Review More Copy Trading
            </Link>
          </div>
        </div>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          loop={false}
          observer
          observeParents
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1160: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1260: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="leaderboard mt-8"
        >
          {visibleItems.map((single, index) => {
            const slideKey =
              single?.profileId ?? single?.accountId ?? `leader-${index}`;

            return (
              <SwiperSlide key={slideKey} className="h-full !overflow-visible">
                <LeaderCardGridItem
                  key={single?.profileId ?? index}
                  item={single}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

