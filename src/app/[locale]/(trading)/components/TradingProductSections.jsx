"use client";

import { useState } from "react";
import TradingAdvantages from "./TradingAdvantages";
import TradingSplitSections from "./TradingSplitSections";
import TradingCtaBand from "./TradingCtaBand";
import TradingFaq from "./TradingFaq";
import TradingMarketsDock from "./TradingMarketsDock";
import { TRADING_MARKET_TABS } from "./tradingMarketTabs";

export default function TradingProductSections({ locale, product }) {
  const [activeMarketTab, setActiveMarketTab] = useState("forex");
  const tabs = product.marketTabs ?? TRADING_MARKET_TABS;

  return (
    <>
      {/* <TradingMarketsDock
        tabs={tabs}
        activeTab={activeMarketTab}
        onTabChange={setActiveMarketTab}
      /> */}
 
      <TradingAdvantages
        items={product.advantages}
        heading={product.advantagesHeading}
      />
      <TradingSplitSections sections={product.sections} />
      {product.disclaimer ? (
        <section className="bg-white px-4 py-8 md:py-10">
          <div className="container max-w-4xl">
            <p className="text-center text-xs leading-relaxed text-slate-500 md:text-sm">
              {product.disclaimer}
            </p>
          </div>
        </section>
      ) : null}
      <TradingFaq
        items={product.faqs}
        title={product.faqTitle}
        subtitle={product.faqSubtitle}
      />
      <TradingCtaBand locale={locale} />
    </>
  );
}
