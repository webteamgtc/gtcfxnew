"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobilePeekCarousel from "../MobilePeekCarousel";
import { usePathTranslation } from "../../../LocaleProvider";

export default function MarketTabsSection() {
  const t = usePathTranslation("home.homeMarkets");
  const [activeTab, setActiveTab] = useState("forex");

  const tabs = [
    {
      key: "forex",
      label: t("tabs.forex.label"),
      icon: t("tabs.forex.icon"),
      contentTitle: t("tabs.forex.contentTitle"),
      contentDescription: t("tabs.forex.contentDescription"),
      buttonText: t("tabs.forex.buttonText"),
      buttonLink: t("tabs.forex.buttonLink"),
      image: t("tabs.forex.image"),
    },
    {
      key: "energy",
      label: t("tabs.energy.label"),
      icon: t("tabs.energy.icon"),
      contentTitle: t("tabs.energy.contentTitle"),
      contentDescription: t("tabs.energy.contentDescription"),
      buttonText: t("tabs.energy.buttonText"),
      buttonLink: t("tabs.energy.buttonLink"),
      image: t("tabs.energy.image"),
    },
    {
      key: "commodities",
      label: t("tabs.commodities.label"),
      icon: t("tabs.commodities.icon"),
      contentTitle: t("tabs.commodities.contentTitle"),
      contentDescription: t("tabs.commodities.contentDescription"),
      buttonText: t("tabs.commodities.buttonText"),
      buttonLink: t("tabs.commodities.buttonLink"),
      image: t("tabs.commodities.image"),
    },
    {
      key: "indices",
      label: t("tabs.indices.label"),
      icon: t("tabs.indices.icon"),
      contentTitle: t("tabs.indices.contentTitle"),
      contentDescription: t("tabs.indices.contentDescription"),
      buttonText: t("tabs.indices.buttonText"),
      buttonLink: t("tabs.indices.buttonLink"),
      image: t("tabs.indices.image"),
    },
    {
      key: "metals",
      label: t("tabs.metals.label"),
      icon: t("tabs.metals.icon"),
      contentTitle: t("tabs.metals.contentTitle"),
      contentDescription: t("tabs.metals.contentDescription"),
      buttonText: t("tabs.metals.buttonText"),
      buttonLink: t("tabs.metals.buttonLink"),
      image: t("tabs.metals.image"),
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
        <div className="mx-auto flex max-w-[950px] flex-col items-center gap-8 text-center">
          <h2 className="HeadingH2 mx-auto max-w-[700px]">
            {t("heading.beforeHighlight")}
            <span className="text-secondary">{t("heading.highlightOne")}</span>
            {t("heading.middle")}
            <span className="text-secondary">{t("heading.highlightTwo")}</span>
            {t("heading.afterHighlight")}
          </h2>

          <p className="Text">{t("description")}</p>
        </div>

        <div className="mt-12 hidden flex-wrap items-center justify-center gap-4 md:flex xl:gap-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`flex min-w-[180px] items-center justify-center gap-3 rounded-[14px] border px-5 py-5 shadow-lg transition-all duration-300 xl:min-w-[200px] ${
                  isActive
                    ? "bg-primary-gradient text-white shadow-lg"
                    : "border-[#ececec] bg-[#F1F2F4] text-[#4b4b4b] hover:border-[#d9dffb] hover:bg-white"
                }`}
              >
                <div className="relative h-7 w-7 shrink-0">
                  <Image
                    src={tab.icon}
                    alt={tab.label}
                    fill
                    className={`object-contain ${isActive ? "brightness-0 invert" : ""}`}
                  />
                </div>

                <span className="HeadingH5 whitespace-nowrap">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mx-auto hidden max-w-[1060px] items-center gap-10 py-10 md:grid lg:grid-cols-2 lg:gap-16">
          <div className="max-w-[520px]">
            <h3 className="HeadingH3 text-primary">
              {currentTab.contentTitle}
            </h3>

            <p className="Text mt-4">{currentTab.contentDescription}</p>

            <Link
              href={currentTab.buttonLink}
              className="TextButton mt-10 inline-flex items-center justify-center rounded-xl bg-primary-gradient bg-[length:200%_200%] px-6 py-3 text-white transition-all duration-500 hover:bg-right hover:bg-secondary hover:no-underline hover:opacity-90"
            >
              {currentTab.buttonText}
            </Link>
          </div>

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
                  className="TextButton mt-8 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-white transition hover:opacity-90"
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