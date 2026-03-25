"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobilePeekCarousel from "../MobilePeekCarousel";
import PaymentMethodsSection from "./PaymentMethodsSection";

export default function MarketTabsSection() {
  const [activeTab, setActiveTab] = useState("forex");

  const sectionTitle = "Direct Access to Top Tier Liquidity Provider";
  const sectionDescription =
    "GTCFX is a trusted liquidity provider that gives you access to easy-to-use FX liquidity platforms. With our liquidity solutions, you can trade efficiently at low costs and with fast execution. You can count on our transparent and reliable service, ensuring your trades remain private. With our state-of-the-art technology and dedicated team, we support your business in liquidity trading.";

  const tabs = [
    {
      key: "forex",
      label: "Forex CFDs",
      icon: "/home/forex.svg",
      contentTitle: "Trade Forex CFDs",
      contentDescription:
        "With a Tightest Spread Starting from 0 PIPS Offering Leverage up to 1:2000 & No restriction",
      buttonText: "Explore Forex",
      buttonLink: "/",
      image:
        "/home/products/currencies-image.webp",
    },
      {
      key: "energy",
      label: "Energy CFDs",
      icon: "/home/energy.svg",
      contentTitle: "Invest in Energy",
      contentDescription:
        "Experience a Competitive Advantage When Trading Global Energy CFD Markets with Us",
      buttonText: "Trade Energy",
      buttonLink: "/",
      image:
        "/home/products/energy-image.webp",
    },
    {
      key: "commodities",
      label: "Commodities CFDs",
      icon: "/home/commed.svg",
      contentTitle: "Trade Commodities",
      contentDescription:
        "Access a broad range of commodity markets with reliable execution and flexible trading conditions.",
      buttonText: "Explore Commodities",
      buttonLink: "/",
      image:
        "/home/products/commodities-image.webp",
    },
    {
      key: "indices",
      label: "Indices CFDs",
      icon: "/home/indices.svg",
      contentTitle: "Trade Indices",
      contentDescription:
        "Follow the world’s major markets and trade global indices with speed, precision and confidence.",
      buttonText: "Explore Indices",
      buttonLink: "/",
      image:
        "/home/products/indices-image.webp",
    },
    {
      key: "liquidity",
      label: "Metals CFDs",
      icon: "/home/first.svg",
      contentTitle: "Trade Metal CFDs",
      contentDescription:
        "Maximize your profit potential with ultra-competitive Gold CFD spreads, starting at just 4 cents.",
      buttonText: "Explore Metals",
      buttonLink: "/",
      image:
        "/home/products/metals-image.webp",
    },
    
  
  ];

  const currentTab = tabs.find((tab) => tab.key === activeTab) || tabs[0];
  const activeTabIndex = Math.max(
    0,
    tabs.findIndex((tab) => tab.key === activeTab)
  );

  const tabsRef = useRef(tabs);
  tabsRef.current = tabs;

  const handleCarouselIndex = useCallback((index) => {
    const tab = tabsRef.current[index];
    if (tab) setActiveTab(tab.key);
  }, []);

  return (
    <section className="py-10 md:py-16">
      <div className="container">
        {/* Fixed Heading */}
        <div className="mx-auto max-w-[1100px] text-center flex flex-col items-center gap-8">
          <h2 className="HeadingH2 max-w-[600px] mx-auto">{sectionTitle}</h2>

          <p className="Text">
            {sectionDescription}
          </p>
        </div>

        {/* Tabs — desktop */}
        <div className="mt-12 hidden md:flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`flex min-w-[160px] flex-col items-center shadow-lg justify-center gap-2 rounded-[14px] border px-5 py-5 transition-all duration-300 md:min-w-[200px] ${
                  isActive
                    ? "border-[#1f2d98] bg-gradient-to-r from-[#263788] via-[#101638] to-[#263788] text-white shadow-[0_12px_25px_rgba(31,45,152,0.18)]"
                    : "bg-[#F1F2F4] border-[#ececec] text-[#4b4b4b] hover:border-[#d9dffb] hover:bg-white"
                }`}
              >
                <img
                  src={tab.icon}
                  alt={tab.label}
                  className={`h-7 w-7 object-contain ${
                    isActive ? "brightness-0 invert" : ""
                  }`}
                />
                <span className="HeadingH5">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Changing Content — desktop */}
        <div className="max-w-[1060px] mx-auto py-10 hidden md:grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div className="max-w-[420px]">
            <h3 className="HeadingH3 text-[#2f2f2f]">
              {currentTab.contentTitle}
            </h3>

            <p className="Text mt-4">
              {currentTab.contentDescription}
            </p>

            <Link
              href={currentTab.buttonLink}
              className="TextButton mt-10 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-white transition hover:opacity-90"
            >
              {currentTab.buttonText}
            </Link>
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[300px]">
              <Image
                src={currentTab.image}
                alt={currentTab.contentTitle}
                width={250}
                height={250}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="mt-10 pb-12 md:hidden">
          <MobilePeekCarousel
            items={tabs}
            initialIndex={activeTabIndex}
            onActiveIndexChange={handleCarouselIndex}
            trackClassName="-mx-4 px-4"
            renderItem={(tab) => (
              <div className="rounded-[14px] border border-[#ececec] bg-white p-6 text-center">
                 <div className="mt-8 flex justify-center">
                  <div className="relative w-full max-w-[260px]">
                    <Image
                      src={tab.image}
                      alt={tab.contentTitle}
                      width={250}
                      height={250}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>


                <h3 className="HeadingH3 text-[#2f2f2f]">{tab.contentTitle}</h3>

                <p className="Text mt-4">{tab.contentDescription}</p>

                <Link
                  href={tab.buttonLink}
                  className="TextButton mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-white transition hover:opacity-90"
                >
                  {tab.buttonText}
                </Link>

               
              </div>
            )}
          />
        </div>

        <PaymentMethodsSection />
      </div>
    </section>
  );
}