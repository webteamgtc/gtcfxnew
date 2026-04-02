"use client";

import React from "react";

const ScrollingBanner = () => {
  const updates = [
    "Latest Updates",
    "New Announcements",
    "Live Notices",
    "Workshop Alerts",
    "Quick Updates",
    "Latest Offers",
    "Quickest Offers",
  ];

  // Duplicate content so -50% translation creates a seamless infinite loop
  const marqueeItems = [...updates, ...updates];

  return (
    <div className="w-full  py-4 overflow-hidden border-y border-white/10"
      style={{
        background: 'linear-gradient(0deg, #0D1155 0%, #293B93 100%)',
      }}
    >
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {marqueeItems.map((item, index) => (
          <div key={index} className="inline-flex items-center shrink-0">
            <span className="text-white md:text-[19px] text-[16px] font-medium tracking-wide">
              {item}
            </span>
            <div>
              <img
                src="/event/staric.svg"
                alt="banner-icon"
                className="w-[14px] h-[14px] mx-10"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;