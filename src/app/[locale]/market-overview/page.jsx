import MarketOverviewHero from "./components/MarketOverviewHero";
import TradingHoursSection from "./components/TradingHoursSection";
import HolidayHoursNoticesSection from "./components/HolidayHoursNoticesSection";

/** Holiday schedule is loaded from Strapi + Excel at request time (needs server env). */
export const dynamic = "force-dynamic";

export default async function MarketOverviewPage({ params }) {
  const { locale } = await params;

  return (
    <>
      <MarketOverviewHero />
      <TradingHoursSection />
      <HolidayHoursNoticesSection locale={locale} />
    </>
  );
}

