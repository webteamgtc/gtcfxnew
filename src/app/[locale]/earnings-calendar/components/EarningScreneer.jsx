"use client";

import React, { useMemo } from "react";

export default function EarningScreneer({
    locale = "en",
    height = 600,
    market = "america",
    defaultScreen = "earnings_this_month",
    colorTheme = "light",
    showToolbar = true,
    isTransparent = false,
    enableScrolling = true,
}) {
    const src = useMemo(() => {
        const config = {
            width: "100%",
            height,
            defaultColumn: "overview",
            defaultScreen,
            market,
            showToolbar,
            colorTheme,
            isTransparent,
            enableScrolling,
        };

        // TradingView uses URL hash with encoded JSON
        const encoded = encodeURIComponent(JSON.stringify(config));
        return `https://www.tradingview-widget.com/embed-widget/screener/?locale=${encodeURIComponent(
            locale
        )}#${encoded}`;
    }, [locale, height, market, defaultScreen, colorTheme, showToolbar, isTransparent, enableScrolling]);

    return (
        <section
            style={{
                background: "linear-gradient(173deg, #293B93 6.07%, rgba(13, 21, 58, 0.00) 92.35%)",
            }}
        >
            <div className="container mx-auto py-8 md:py-12">
                <iframe
                    title="TradingView Screener"
                    src={src}
                    className="block w-full"
                    style={{ height }}

                    allowTransparency={true}
                />
            </div>
        </section>
    );
}
