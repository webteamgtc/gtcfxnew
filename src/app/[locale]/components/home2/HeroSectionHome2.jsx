"use client";

import Image from "next/image";
import MobilePeekCarousel from "../common/MobilePeekCarousel";
import { usePathTranslation } from "../../LocaleProvider";
import TrackedLinkButton from "../common/home/TrackedLinkButton";

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
      <div className="relative h-8 w-8 shrink-0">
        <Image
          src={item.logo}
          alt={item.name}
          fill
          className="rounded-xl object-contain"
        />
      </div>

      <div className="flex min-w-0 flex-col">
        <span className="text-left text-[12px] font-semibold leading-none text-white">
          {item.name}
        </span>

        <div className="mt-1 flex items-center gap-2">
          <span className="text-[14px] font-bold text-white">{item.rating}</span>
          <Stars count={Number(item.stars)} />
        </div>
      </div>
    </div>
  );
}

export default function HeroSectionHome2() {
  const t = usePathTranslation("home.homeHero");

  const reviewOrder = [
    t("reviews.order.one"),
    t("reviews.order.two"),
    t("reviews.order.three"),
    t("reviews.order.four"),
    t("reviews.order.five"),
  ];

  const reviews = reviewOrder.map((key) => ({
    name: t(`reviews.items.${key}.name`),
    logo: t(`reviews.items.${key}.logo`),
    rating: t(`reviews.items.${key}.rating`),
    stars: t(`reviews.items.${key}.stars`),
  }));

  return (
    <section className="relative overflow-hidden bg-primary-gradient">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(182,135,86,0.08)_0%,rgba(35,47,116,0)_65%)]" />

        <div className="absolute inset-x-0 bottom-24 opacity-30 md:bottom-0">
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

        <div className="absolute inset-x-0 bottom-64 opacity-40 md:bottom-36">
          <div className="container">
            <div className="home2-chart-reveal">
              <Image
                src="/home2/chart2.webp"
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
        <div className="flex min-h-[87vh] flex-col items-center justify-center pt-28 pb-10 text-center md:pt-28 md:pb-0 lg:pt-32 lg:pb-0 2xl:min-h-[95vh] 3xl:min-h-[90vh] 4xl:min-h-[90vh] 5xl:min-h-[60vh]">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-gray-500 bg-white px-4 py-2 shadow-[0_6px_20px_rgba(0,0,0,0.08)]">
            <span className="rounded-xl bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#995F22] px-3 py-2 text-[11px] font-semibold uppercase leading-none text-white">
              {t("badge.tag")}
            </span>
            <span className="text-[14px] font-medium text-primary md:text-lg">
              {t("badge.title")}
            </span>
          </div>

          <h1 className="text-[35px] font-semibold leading-[1.05] rtl:leading-normal tracking-[-0.03em] text-white md:max-w-xl md:text-[40px] lg:text-[50px] 2xl:max-w-[500px] 2xl:text-[50px] 3xl:max-w-[700px] 3xl:text-[60px]">
            {t("title.beforeHighlight")}
            <span className="font-bold text-secondary">
              {t("title.highlight")}
            </span>
            {t("title.afterHighlight")}
          </h1>

          <p className="mt-4 max-w-[680px] text-sm leading-7 text-white md:text-[17px] md:leading-8 lg:text-[20px]">
            {t("description")}
          </p>

         <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
  <TrackedLinkButton
    href="https://mygtcfx.com/getview?view=register&token=exhowww.z8owwwww"
    buttonType="live_account"
    location="hero_section"
    className="inline-flex min-h-[54px] items-center justify-center rounded-xl border border-white/20 bg-[#172154] px-7 text-[16px] font-semibold text-white transition hover:bg-secondary hover:no-underline md:px-8 md:text-[18px]"
  >
    {t("buttons.liveAccount")}
  </TrackedLinkButton>

  <TrackedLinkButton
    href="/demo"
    buttonType="demo_account"
    location="hero_section"
    className="inline-flex min-h-[54px] items-center justify-center rounded-xl border border-white/30 px-6 text-[16px] font-semibold text-white transition hover:bg-white/10 hover:no-underline md:px-8 md:text-[18px]"
  >
    {t("buttons.demoAccount")}
  </TrackedLinkButton>
</div>

          <p className="mt-5 text-xs font-medium uppercase text-white md:text-sm lg:text-base">
            {t("networkText.label")}{" "}
            <span className="font-bold text-secondary">
              {t("networkText.highlight")}
            </span>
          </p>

          <div className="mt-10 w-full max-w-[1120px] md:mt-16 lg:mt-20 2xl:mt-24">
            <div className="block px-10 md:hidden">
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