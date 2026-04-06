"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { FaAngleRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

import useGraphDetails from "../chart/hooks/useGraphDetails";
import ColumnChart from "../chart";
import ChartWrapperComponent from "../chart/ChartWrapper";

function LeaderboardGraph({ item }) {
  const { quarterlyGraphData } = useGraphDetails({ item, date: "3months" });
  return (
    <div className="w-full flex flex-col gap-4 relative h-full">
      <ColumnChart
        width={"100%"}
        height={150}
        seriesData={quarterlyGraphData}
        strokeWidth={[2]}
        showAxis={false}
        grid={false}
      />
    </div>
  );
}

export default function CopyTradingSectionClient({ initialData }) {
  const router = useRouter();
  const items = initialData?.items || [];
  const visibleItems = items.filter((s) => Number(s?.maxProfit) >= 50);

  if (!visibleItems.length) return null;

  return (
    <section className=" pt-10 md:py-16 bg-[#F1F2F4]">
      <div className="container">
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col gap-4 items-start">
          <h2 className="HeadingH2">
                    Copy Trading <span className="text-secondary">Made Simple</span>
                  </h2>
                  <p className="Text max-w-3xl">
                    Follow top-performing traders and automatically copy their trades in real time. Choose who to follow, set your investment amount, and stay in control an easy way to trade without constant monitoring.
                  </p>
        </div>
        
        <div className="flex flex-row gap-3">
          <button className="rounded-full bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#995F22] hover:from-[#263788] hover:via-[#101638] hover:to-[#263788] px-3 md:px-5 py-2.5 text-[12px] md:text-base font-medium text-white transition hover:opacity-90">
            Explore Copy Trading
          </button>
          <button className="rounded-full border border-[#8f8f8f] px-3 md:px-5 py-2.5 text-[12px] md:text-base font-medium text-white transition hover:bg-white bg-gradient-to-r from-[#263788] via-[#101638] to-[#263788]">
            Review More Copy Trading
          </button>
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
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1160: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1260: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="leaderboard mt-8"
      >
        {visibleItems.map((single, index) => {
          const slideKey =
            single?.profileId ?? single?.accountId ?? `leader-${index}`;

          const countryCode = single?.account?.countryCode?.toLowerCase();
          const flagSrc =
            countryCode?.length > 3 || countryCode === ""
              ? "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/avatar.webp"
              : `https://flagcdn.com/96x72/${countryCode}.webp`;

          return (
            <SwiperSlide key={slideKey} className="h-full !overflow-visible">
  <div
    className="group w-full cursor-pointer rounded-2xl border border-gray-200 bg-white p-1 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(25,32,85,0.15)]"
    onClick={() => router.push(`/leaderboard/${single?.profileId}`)}
  >
    {/* Inner Card */}
    <div className="rounded-2xl bg-gradient-to-b from-white to-[#f8faff] p-3">

      {/* Header */}
      <div className="flex items-center justify-between">
        
        {/* Avatar */}
        <div className="relative flex items-center gap-2">
          <div className="relative">
            <img
              className="h-12 w-12 rounded-full border-2 border-white shadow-md"
              src={
                single?.public?.avatarPath ||
                "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/avatar.webp"
              }
              alt=""
            />

            {/* Flag */}
            <div className="absolute -right-1 -top-1 h-5 w-5 overflow-hidden rounded-full border border-white shadow">
              <img
                className="h-full w-full object-cover"
                src={flagSrc}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Copy Button */}
        <button
          className="rounded-full border border-secondary px-3 py-1 text-xs font-medium text-secondary transition-all duration-300 hover:bg-secondary hover:text-white hover:shadow-md"
          onClick={(e) => {
            e.stopPropagation();
            window.open(
              `https://gtccopy.com/portal/registration/subscription?provider=${single?.accountId}&backLink=true&backUrl=https%3A%2F%2Fratings.gtccopy.com%2Fwidgets%2Fratings%3FwidgetKey=social_platform_ratings&lang=en&wlid=2b9e7678-160f-48f5-9a5f-5f5bef2d9d26&widgetKey=social_platform_ratings`,
              "_blank"
            );
          }}
        >
          Copy
        </button>
      </div>

      {/* Name */}
      <div className="mt-3">
        <h4 className="line-clamp-1 text-base font-semibold text-secondary group-hover:text-primary transition">
          {single?.accountName}
        </h4>
      </div>

      {/* Chart */}
      <div className="mt-3 rounded-xl bg-white p-2 shadow-sm">
        <ChartWrapperComponent item={single} height={140} width={"100%"} />
      </div>

      {/* Footer */}
      <div className="mt-3 flex items-center justify-between">
        <div>
          <p className="text-[11px] text-gray-500">Max Profit</p>
          <p className="text-sm font-semibold text-gray-800 group-hover:text-secondary">
            {single?.maxProfit}%
          </p>
        </div>

        <FaAngleRight className="text-secondary transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
      </div>
    </div>
  </div>
</SwiperSlide>
          );
        })}
      </Swiper>
      </div>
    </section>
  );
}

