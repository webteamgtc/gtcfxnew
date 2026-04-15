"use client";

import Image from "next/image";
import Link from "next/link";
import MobilePeekCarousel from "../common/MobilePeekCarousel";

const reviews = [
  {
    name: "Google",
    logo: "/common/google.webp",
    rating: "4.5",
    stars: 5,
  },
  {
    name: "WikiFX",
    logo: "/common/wiki.webp",
    rating: "9.2",
    stars: 5,
  },
  {
    name: "Investing.com",
    logo: "/common/invest.webp",
    rating: "4.1",
    stars: 4,
  },
  {
    name: "myfxbook",
    logo: "/common/fx.png",
    rating: "4.8",
    stars: 5,
  },
  {
    name: "TradingView",
    logo: "/common/trading.webp",
    rating: "4.8",
    stars: 5,
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < count ? "fill-[#f5b301]" : "fill-[#d1d5db]"}`}
          aria-hidden="true"
        >
          <path d="M10 1.5l2.47 5 5.53.8-4 3.9.94 5.5L10 14.1 5.06 16.7 6 11.2 2 7.3l5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ item, mobile = false }) {
  return (
    <div
      className={[
        "flex items-center gap-4 border border-gray-200/10 bg-primary-gradient shadow-[0_6px_20px_rgba(0,0,0,0.08)]",
        mobile
          ? "w-full min-h-[86px] rounded-[14px] px-4 py-4"
          : "justify-center rounded-lg px-4 py-4",
      ].join(" ")}
    >
      <div className={`relative shrink-0 ${mobile ? "h-8 w-8" : "h-8 w-8"}`}>
        <Image src={item.logo} alt={item.name} fill className="object-contain  rounded-xl" />
      </div>

      <div className="flex min-w-0 flex-col">
        <span className="text-left text-[12px] font-semibold leading-none text-white">
          {item.name}
        </span>

        <div className="mt-1 flex items-center gap-2">
          <span className="text-[14px] font-bold text-white">{item.rating}</span>
          <Stars count={item.stars} />
        </div>
      </div>
    </div>
  );
}

export default function HeroSectionHome2() {
  return (
    <section className="relative overflow-hidden bg-primary-gradient">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(182,135,86,0.08)_0%,rgba(35,47,116,0)_65%)]" />

        <div className="absolute inset-x-0 bottom-24 md:bottom-0 opacity-30">
          <div className="container">
            <Image
              src="/home2/bg-overlay.webp"
              alt=""
              width={1440}
              height={708}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-48 md:bottom-0">
          <div className="container">
            <div className="home2-chart-reveal">
              <Image
                src="/home2/charts.webp"
                alt=""
                width={1440}
                height={708}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div> 
      </div>

      <div className="container relative z-10">
        <div className="flex min-h-[100vh] 2xl:min-h-[95vh] 3xl:min-h-[90vh] 4xl:min-h-[90vh] 5xl:min-h-[60vh] flex-col items-center justify-center text-center pt-28 pb-10 md:pt-28 md:pb-0 lg:pt-32 lg:pb-0">
          <p className="mb-3 text-sm font-medium text-white md:text-base uppercase">
            Global network across
            <span className="font-bold text-secondary"> 22+ destinations.</span>
          </p>

          <h1 className="md:max-w-xl 2xl:max-w-[500px] 3xl:max-w-[700px] text-[35px] font-semibold leading-[1.05] tracking-[-0.03em] text-white md:text-[40px] lg:text-[50px] 2xl:text-[50px] 3xl:text-[60px]">
            Trade <span className="font-bold text-secondary">Global Markets </span>
            with Confidence
          </h1>

          <p className="mt-4 max-w-[680px] text-[15px] leading-7 text-white md:text-[17px] md:leading-8 lg:text-[20px]">
            Access Forex, Indices, Commodities and CFDs through a powerful trading
            environment built for speed, security and precision.
          </p>

          <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/register"
              className="inline-flex min-h-[54px] items-center hover:no-underline justify-center rounded-xl bg-[#172154] px-6 text-[16px] font-semibold text-white transition hover:bg-secondary md:px-8 md:text-[18px]"
            >
              Open Live Account
            </Link>

            <Link
              href="/demo"
              className="inline-flex min-h-[54px] items-center  hover:no-underline justify-center rounded-xl border border-white/30 px-6 text-[16px] font-semibold text-white transition hover:bg-white/10 md:px-8 md:text-[18px]"
            >
              Free Demo Account
            </Link>
          </div>


          <div className="2xl:mt-32 w-full max-w-[1120px] md:mt-20 lg:mt-24">
            <div className="block md:hidden px-10">
              <MobilePeekCarousel
                items={reviews}
                trackClassName="-mx-4 px-4"
                renderItem={(item, index) => (
                  <div key={index} className="w-full">
                    <ReviewCard item={item} mobile />
                  </div>
                )}
              />
            </div>

            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5">
                {reviews.map((item, index) => (
                  <ReviewCard key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}