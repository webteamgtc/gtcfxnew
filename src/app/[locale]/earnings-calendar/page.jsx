import { getDictionary } from "@/i18n/request";
import EarningsCalendarHero from "./components/EarningCalenderHero";
import EarningsDividendsCalendar from "./components/EarningTable";
import EarningScreneer from "./components/EarningScreneer";
import MarginInfoPanel from "./components/MarginInfoPanel";
import EarningsFaq from "./components/EarningFaqs";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata({
    locale,
    key: "earningPage",
    path: "earnings-calendar",
    fallbackTitle: "Earnings Calendar - GTC FX",
    fallbackDescription: "Track upcoming earnings and dividends.",
  });
}

export default async function EarningsCalendarPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const earningsPage = dict.earningsPage || {};
  const earningsMarginPanel = dict.earningsMarginPanel || {};
  const earningsFaq = dict.earningsFaq || {};

  return (
    <>
      <EarningsCalendarHero />
      <EarningsDividendsCalendar locale={locale} messages={earningsPage} />
      <EarningScreneer/>
      <MarginInfoPanel messages={earningsMarginPanel} />
      <EarningsFaq messages={earningsFaq} />
    </>
  );
}

