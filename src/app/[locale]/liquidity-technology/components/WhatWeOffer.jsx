'use client'
import React, { useMemo, useState } from 'react';
import Image from "next/image";

const WhatWeOfferSection = ({ copy }) => {
  const offer = copy?.offerTitle || {};

  const tabs = useMemo(
    () => [
      {
        key: "liquidity",
        title: offer?.liquidity?.title,
        desc: offer?.liquidity?.desc,
        imageSrc: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/prime/prime-3.png",
      },
      {
        key: "connectivity",
        title: offer?.connectivity?.title,
        desc: offer?.connectivity?.desc,
        imageSrc: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/prime/prime-2.png",
      },
    //   {
    //     key: "risk",
    //     title: offer?.risk?.title,
    //     desc: offer?.risk?.desc,
    //     imageSrc: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/prime/prime-1.png",
    //   },
    ],
    [offer]
  );

  const [activeTab, setActiveTab] = useState(tabs?.[0]?.key || "liquidity");
  const currentTab = tabs.find((t) => t.key === activeTab) || tabs[0];

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="HeadingH2 text-primary">{offer?.heading}</h2>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`flex min-w-[160px] flex-col items-center justify-center gap-2 rounded-[14px] border px-5 py-4 transition-all duration-300 md:min-w-[210px] ${
                  isActive
                    ? "border-[#1f2d98] bg-primary-gradient text-white shadow-[0_12px_25px_rgba(31,45,152,0.18)]"
                    : "bg-[#F1F2F4] border-[#ececec] text-[#4b4b4b] hover:border-[#d9dffb] hover:bg-white"
                }`}
              >
                <span className="HeadingH5">{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        {currentTab ? (
          <div className="max-w-[1060px] mx-auto mt-10 rounded-[18px] border border-[#ececec] bg-[#F8FAFC] p-6 md:p-10">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <div className="max-w-[520px]">
                <h3 className="HeadingH3 text-primary">{currentTab.title}</h3>
                <p className="Text mt-4 ltr:text-left rtl:text-right">
                  {currentTab.desc}
                </p>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[340px]">
                  <Image
                    src={currentTab.imageSrc}
                    alt={currentTab.title || "Offer"}
                    width={360}
                    height={360}
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
