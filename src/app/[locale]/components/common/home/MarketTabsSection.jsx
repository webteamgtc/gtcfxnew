"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobilePeekCarousel from "../MobilePeekCarousel";
import PaymentMethodsSection from "./PaymentMethodsSection";

export default function MarketTabsSection() {
  const [activeTab, setActiveTab] = useState("forex");

    const tabs = [
    {
      key: "forex",
      label: "Forex",
      icon: "/home/forex.svg",
      contentTitle: "Trade Forex",
      contentDescription:
        "Gain access to deep FX liquidity with 200+ trading pairs, tight spreads, competitive margins, and lightning-fast execution.",
      buttonText: "Explore Forex",
      buttonLink: "/forex",
      image:
        "/home/products/currencies-image.webp",
    },
      {
      key: "energy",
      label: "Energy",
      icon: "/home/energy.svg",
      contentTitle: "Invest in Energy",
      contentDescription:
        "Access the energy markets with strong liquidity, tight spreads, and reliable execution.",
      buttonText: "Trade Energy",
      buttonLink: "/cfd-energy",
      image:
        "/home/products/energy-image.webp",
    },
    {
      key: "commodities",
      label: "Commodities",
      icon: "/home/commed.svg",
      contentTitle: "Trade Commodities",
      contentDescription:
        "Gain deep liquidity, competitive pricing, and seamless execution across metals, energy, and other key commodity markets.",
      buttonText: "Explore Commodities",
      buttonLink: "/commodities",
      image:
        "/home/products/commodities-image.webp",
    },
    {
      key: "indices",
      label: "Indices",
      icon: "/home/indices.svg",
      contentTitle: "Trade Indices",
      contentDescription:
        "Tap into global indices liquidity with tight spreads, rapid execution, and competitive pricing.",
      buttonText: "Explore Indices",
      buttonLink: "/indices",
      image:
        "/home/products/indices-image.webp",
    },
    {
      key: "liquidity",
      label: "Metals",
      icon: "/home/first.svg",
      contentTitle: "Trade Metal",
      contentDescription:
        "Enhance your business with deep metals liquidity, featuring tight spreads and dependable pricing.",
      buttonText: "Explore Metals",
      buttonLink: "/precious-metals",
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
    <section className="pt-10 md:py-16">
      <div className="container">
        {/* Fixed Heading */}
        <div className="mx-auto max-w-[900px] text-center flex flex-col items-center gap-8">
          <h2 className="HeadingH2 max-w-[700px] mx-auto">Trade Global <span className="text-secondary">CFD Markets</span> with <span className="text-secondary">Institutional-Grade</span> Liquidity </h2>

          <p className="Text">
            GTCFX delivers institutional-grade liquidity, empowering traders with fast execution, competitive pricing, and seamless access to global CFD markets. Our advanced infrastructure ensures efficient, transparent, and reliable trading performance.
          </p>
        </div>

        {/* Tabs — desktop */}
        <div className="mt-12 hidden md:flex flex-wrap items-center justify-center gap-3 md:gap-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`flex flex-row min-w-[160px] items-center shadow-lg justify-center gap-2 md:gap-4 rounded-[14px] border px-5 py-5 transition-all duration-300 md:min-w-[200px] ${
                  isActive
                    ? "bg-gradient-to-r from-[#1e2a78] to-[#243caa] text-white shadow-lg"
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
          <div className="max-w-[520px]">
            <h3 className="HeadingH3 text-primary">
              {currentTab.contentTitle}
            </h3>

            <p className="Text mt-4">
              {currentTab.contentDescription}
            </p>

            <Link
              href={currentTab.buttonLink}
              className="TextButton mt-10 hover:no-underline hover:bg-secondary inline-flex items-center justify-center rounded-full bg-primary-gradient bg-[length:200%_200%] transition-all duration-500 hover:bg-right px-6 py-3 text-white hover:opacity-90"
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


                <h3 className="HeadingH3 text-primary">{tab.contentTitle}</h3>

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

      </div>
    </section>
  );
}