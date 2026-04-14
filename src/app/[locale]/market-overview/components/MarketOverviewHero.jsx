"use client";

import InnerPageBanner from "../../components/common/InnerPageBanner";
import { usePathTranslation } from "@/app/[locale]/LocaleProvider";

function MarketOverviewIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <img
        src="/market-overview-banner.svg"
        alt="Calendar"
        className="h-full w-full object-contain"
      />
    </div>
  );
}

export default function MarketOverviewHero() {
  const t = usePathTranslation("tradingTools.marketOverView.holiday");

  return (
    <InnerPageBanner
      title={t("title", "Holiday Hours & Notices")}
      description={t(
        "des",
        "Market holidays may affect the trading schedule and volatility of the markets."
      )}
      backgroundImage="/breadcamp/holiday.webp"
      mobileBackgroundImage="/breadcamp/holiday-mobile.webp"
    />
  );
}

