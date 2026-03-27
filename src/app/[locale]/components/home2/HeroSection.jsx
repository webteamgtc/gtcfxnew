"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import HeroStats from "../common/home/HeroStats";
import PrimaryButton from "../common/PrimaryButton";

const heroSlides = [
  {
    id: 1,
    badge: "New",
    badgeText: "GTC GO Trading App",
    title: (
      <>
        Trade Global Markets with <span className="text-secondary">Confidence</span>
      </>
    ),
    description:
      "Access Forex, Indices, Commodities, and CFDs on a powerful mobile trading platform built for speed, security, and precision.",
    subTitle: "Global network across 22+ destinations.",
    stats: [
      { icon: "/home/instru.svg", label: "27,000+ Instruments" },
      { icon: "/home/globel.svg", label: "Global Liquidity" },
      { icon: "/home/support.svg", label: "24/7 Support" },
    ],
    primaryBtn: {
      label: "Open Live Account",
      href: "/register",
    },
    secondaryBtn: {
      label: "Free Demo Account",
      href: "/demo",
      variant: "dark",
    },
    image: "/home/slider/slider1.webp",
    imageAlt: "GTC GO Trading App",
  },
  {
    id: 2,
    badge: "Partner",
    badgeText: "Grow With GTCFX",
    title: (
      <>
        Start Your IB Journey <span className="text-secondary">& Earn Without Limits</span>
      </>
    ),
    description:
      "Take your partner business to the next level with advanced tools, high rebate payouts, and full partner support from GTCFX",
    subTitle: "Built for IBs, affiliates and strategic partners.",
    stats: [
      { icon: "/home/instru.svg", label: "Flexible Models" },
      { icon: "/home/globel.svg", label: "Global Reach" },
      { icon: "/home/support.svg", label: "Dedicated Support" },
    ],
    primaryBtn: {
      label: "Partner With Us",
      href: "/partners",
    },
    secondaryBtn: {
      label: "Learn More",
      href: "/about",
      variant: "dark",
    },
    image: "/home/slider/traphy-2026.webp",
    imageAlt: "Partner With Us",
  },
  {
    id: 3,
    badge: "Promo",
    badgeText: "Latest Promotions",
    title: (
      <>
        Unlock More Value with <span className="text-secondary">GTCFX Promotions</span>
      </>
    ),
    description:
      "Discover trading promotions, exclusive campaigns and seasonal offers designed to enhance your overall trading experience.",
    subTitle: "More opportunities. More rewards.",
    stats: [
      { icon: "/home/instru.svg", label: "Big Offers" },
      { icon: "/home/globel.svg", label: "Campaign Updates" },
      { icon: "/home/support.svg", label: "Trader Benefits" },
    ],
    primaryBtn: {
      label: "View Promotions",
      href: "/promotions",
    },
    secondaryBtn: {
      label: "Start Trading",
      href: "/register",
      variant: "dark",
    },
    image: "/home/slider/slider2.webp",
    imageAlt: "Promotions",
  },
  {
    id: 4,
    badge: "Mobile App",
    badgeText: "Trade On The Go",
    title: (
      <>
        You Been Loyal Now <span className="text-secondary">Watch It Pay Off</span>
      </>
    ),
    description:
      "Register and trade to earn loyalty points, redeemable for luxury rewards including premium experiences and exclusive gifts.",
    subTitle: "You're earning your way into something bigger.",
    stats: [
      { icon: "/home/instru.svg", label: "Smart Tools" },
      { icon: "/home/globel.svg", label: "Real-Time Access" },
      { icon: "/home/support.svg", label: "Great Experience" },
    ],
    primaryBtn: {
      label: "Download App",
      href: "/app",
    },
    secondaryBtn: {
      label: "Open Account",
      href: "/register",
      variant: "dark",
    },
    image: "/home/slider/slider3.webp",
    imageAlt: "Mobile App",
  },
];

export default function HeroSection() {
  return (
    <section className="relative z-40 overflow-hidden bg-white">
      <div className="relative min-h-[720px] py-14">
        <div className="pointer-events-none absolute inset-0 opacity-100">
          <Image
            src="/home/homehero1.webp"
            alt=""
            fill
            priority
            className="object-cover object-[50%_30%]"
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[220px] bg-gradient-to-b from-transparent to-white" />

        <div className="container relative z-10">
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            slidesPerView={1}
            loop
            speed={1000}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".hero-swiper-pagination",
            }}
            className="hero-swiper"
          >
            {heroSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="grid min-h-[780px] items-center gap-4 pt-10 lg:grid-cols-2 md:pb-16">
                  <div className="pt-20 lg:pt-28">
                    <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-gray-500 bg-white px-4 py-2 shadow-[0_6px_20px_rgba(0,0,0,0.08)]">
                      <span className="rounded-full bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#995F22] px-3 py-2 text-[11px] font-semibold uppercase leading-none text-white">
                        {slide.badge}
                      </span>
                      <span className="text-[14px] font-medium text-[#2f2f2f] md:text-lg">
                        {slide.badgeText}
                      </span>
                    </div>

                    <h1 className="HeadingH1">{slide.title}</h1>

                    <p className="mt-2 text-[15px] font-medium leading-[1.7] text-[#fff] md:text-[16px] xl:text-[20px]">
                      {slide.description}
                    </p>

                    <h2 className="mt-3 text-[16px] font-semibold leading-[1.25] text-[#fff] md:text-[22px] xl:text-[25px]">
                      {slide.subTitle}
                    </h2>

                    <HeroStats items={slide.stats} />

                    <div className="mt-10 flex flex-row gap-2 md:inline-flex md:gap-4">
                      <PrimaryButton href={slide.primaryBtn.href}>
                        {slide.primaryBtn.label}
                      </PrimaryButton>

                      <PrimaryButton
                        href={slide.secondaryBtn.href}
                        variant={slide.secondaryBtn.variant || "dark"}
                      >
                        {slide.secondaryBtn.label}
                      </PrimaryButton>
                    </div>
                  </div>

                  <div className="relative flex w-full justify-end h-96 md:h-[500px]">
                    <div className="relative w-full max-w-[650px]">
                      <Image
                        src={slide.image}
                        alt={slide.imageAlt}
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="hero-swiper-pagination absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-2" />
          </Swiper>
        </div>
      </div>
    </section>
  );
}