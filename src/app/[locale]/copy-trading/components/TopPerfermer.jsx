"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
 import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import LeaderCardGridItem from "../../components/common/leaderboard/LeaderCardGridItem";
import { usePathTranslation } from "@/app/[locale]/LocaleProvider";

const TopPerformer = ({ messages = {} }) => {
    const t = usePathTranslation("copyTradingPage.rating.topPerformer");

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios
            .get(
                `${process.env.NEXT_PUBLIC_LEADER_URL}rating/1?%24top=100&widget_key=social_platform_ratings`
            )
            .then((res) => {
                setData(res?.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log({ err });
                setLoading(false);
            });
    }, []);

    return (
        <div className="container">
            <h2 className="text-2xl mb-2 font-medium">{t("title")}</h2>
            {loading ? (
                <div className=" flex justify-center text-center min-h-44">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : (
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    loop={true}
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
                            slidesPerView: 1,
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
                    className="leaderboard mt-4"
                >
                    {data?.items?.map((single, index) => {
                        if (single?.maxProfit < 50) return null

                        return (
                            <SwiperSlide key={index} className=" h-full"

                            >
                               <LeaderCardGridItem
              key={single?.profileId ?? index}
              item={single}
            />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            )}
        </div>
    );
};

export default TopPerformer;
