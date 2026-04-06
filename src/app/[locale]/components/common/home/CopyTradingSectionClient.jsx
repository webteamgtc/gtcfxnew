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
    <div className="container pt-10 md:pt-14">
      <div className="flex justify-between items-center gap-4">
        <h2 className="HeadingH3">
          Copy Trading Made Simple
        </h2>
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
            <SwiperSlide key={slideKey} className="h-full">
              <div
                className="w-full min-h-40 cursor-pointer"
                onClick={() => router.push(`/leaderboard/${single?.profileId}`)}
              >
                <div className="flex items-center justify-between p-4 pb-0">
                  <div className="relative">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={
                        single?.public?.avatarPath ||
                        "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/avatar.webp"
                      }
                      alt=""
                    />
                    <div className="absolute -right-2 top-0 h-6 w-6 rounded-full">
                      <img
                        className="h-full w-full rounded-full object-cover"
                        src={flagSrc}
                        alt=""
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      className="cursor-pointer rounded-[25px] border-2 border-secondary px-2 py-1 text-sm"
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
                </div>

                <div className="mt-2 px-3">
                  <h4 className="text-base line-clamp-1 font-semibold text-secondary">
                    {single?.accountName}
                  </h4>
                </div>

                <ChartWrapperComponent item={single} height={150} width={"100%"} />


                <div className="mt-2 flex items-center justify-between px-3 pb-3">
                  <div>
                    <h5 className="text-[10px]">Max Profit</h5>
                    <p className="text-sm font-semibold">{single?.maxProfit}%</p>
                  </div>
                  <FaAngleRight className="text-secondary" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

