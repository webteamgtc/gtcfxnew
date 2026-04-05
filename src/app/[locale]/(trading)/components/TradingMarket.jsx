"use client";

import Image from "next/image";
import Link from "next/link";
import { tabHref } from "./tradingMarketTabs";

export default function TradingMarket({
    locale = "en",
    tabs,
    activeTab,
    onTabChange,
}) {
    const currentTab = tabs.find((tab) => tab.key === activeTab) || tabs[0];

    return (
        <section
            id="trading-markets-section"
            className="scroll-mt-24 border-b border-slate-100 bg-[#fafbfc] py-10 md:py-16"
            aria-labelledby="trading-markets-heading"
        >
            <div className="container">
                {/* Mobile / tablet: horizontal tabs (dock is lg+ fixed) */}
                <div className="mb-8 lg:hidden">
                    <div className="-mx-4 border-y border-slate-200/80 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-sm supports-[backdrop-filter]:bg-white/75 sticky top-[60px] z-20 sm:top-[68px]">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                            Switch market
                        </p>
                        <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
                            {tabs.map((tab) => {
                                const isActive = activeTab === tab.key;
                                return (
                                    <button
                                        key={tab.key}
                                        type="button"
                                        onClick={() => onTabChange(tab.key)}
                                        className={`snap-start shrink-0 flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-sm font-semibold transition-all ${isActive
                                                ? "border-primary bg-gradient-to-r from-[#263788] to-[#101638] text-white shadow-md"
                                                : "border-slate-200 bg-white text-[#2f2f2f] hover:border-primary/40 hover:bg-slate-50"
                                            }`}
                                    >
                                        <img
                                            src={tab.icon}
                                            alt=""
                                            className={`h-5 w-5 shrink-0 object-contain ${isActive ? "brightness-0 invert" : ""}`}
                                        />
                                        <span className="whitespace-nowrap">{tab.shortLabel}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="mx-auto grid max-w-[1060px] items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12">
                    <div className="max-w-[480px] lg:max-w-none">
                        <h3 className="HeadingH3 text-[#2f2f2f] transition-opacity duration-200">
                            {currentTab.contentTitle}
                        </h3>
                        <p className="Text mt-4 text-slate-600">{currentTab.contentDescription}</p>
                        <Link
                            href={tabHref(locale, currentTab.buttonLink)}
                            className="TextButton mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-white transition hover:opacity-90 md:mt-10"
                        >
                            {currentTab.buttonText}
                        </Link>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[300px]">
                            <Image
                                key={currentTab.key}
                                src={currentTab.image}
                                alt=""
                                width={250}
                                height={250}
                                className="h-auto w-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
