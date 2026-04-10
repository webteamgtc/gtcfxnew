import { notFound } from "next/navigation";
import { getTradingPageProduct } from "../productConfig";
import TradingProductView from "../components/TradingProductView";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";
import { getDictionary } from "@/i18n/request";
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return getPageMetadata({
    locale,
    key: "commodities",
    dict,
    path: "commodities",
    fallbackTitle: "Commodities - GTC FX",
    fallbackDescription: "Trade commodities with GTCFX and gain exposure to global commodity markets. Invest in gold, silver, copper, and other precious metals with flexible contracts and risk management tools.",
  });
}

export default async function CommoditiesPage({ params }) {
  const { locale } = await params;
  const product = await getTradingPageProduct(locale, "commodities");
  if (!product) notFound();
  return <TradingProductView locale={locale} product={product} />;
}
