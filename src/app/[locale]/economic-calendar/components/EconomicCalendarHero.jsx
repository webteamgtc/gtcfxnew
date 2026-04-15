 "use client";

import InnerPageBanner from "../../components/common/InnerPageBanner";
import { usePathTranslation } from "@/app/[locale]/LocaleProvider";

function CalendarIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <img
        src="/calender-banner.svg"
        alt="Calendar"
        className="h-full w-full object-contain"
      />
    </div>
  );
}

export default function EconomicCalendarHero() {
  const t = usePathTranslation("tradingTools.economicCal.bannerText");

  return (
    <InnerPageBanner
      title={t("heading", "ECONOMIC CALENDAR")}
      description={t(
        "description",
        "Stay updated with our economic calendar. Keep track of upcoming economic events and their effects on market movements."
      )}
      backgroundImage="/breadcamp/economic.webp"
      mobileBackgroundImage="/breadcamp/economic-mobile.webp"
    />
  );
}

