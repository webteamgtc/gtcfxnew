import MarketOverviewHero from "./components/MarketOverviewHero";
import TradingHoursSection from "./components/TradingHoursSection";
import HolidayHoursNoticesSection from "./components/HolidayHoursNoticesSection";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";

/** Holiday schedule is loaded from Strapi + Excel at request time (needs server env). */
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata({
    locale,
    key: "marketOverview",
    path: "market-overview",
    fallbackTitle: "Market Overview - GTC FX",
    fallbackDescription: "Latest market trading hours and notices.",
  });
}

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

