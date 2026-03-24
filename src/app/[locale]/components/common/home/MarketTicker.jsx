"use client";

import Script from "next/script";

export default function MarketTicker() {
  return (
    <div className="w-full">
      <div>

        {/* Wrapper for styling */}
        <div className="overflow-hidden">

          {/* Panda TS Widget */}
          <div
            className="pts-assets-ticker tape-cards"
            data-icons="true"
            data-assets="btcusd,usdjpy,eurusd,gbpusd"
            data-direction="right"
            data-speed="10"
            data-chart="baseline"
          ></div>

        </div>

      </div>

      {/* Script Load */}
      <Script
        src="https://wm.pandats.com/pts-assets-ticker/pts-assets-ticker.js"
        strategy="afterInteractive"
      />
    </div>
  );
}