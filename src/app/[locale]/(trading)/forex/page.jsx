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
    key: "forex",
    dict,
    path: "forex",
    fallbackTitle: "Forex - GTC FX",
    fallbackDescription: "Trade forex with GTCFX and gain exposure to global forex markets. Invest in currencies with flexible contracts and risk management tools.",
  });
}

export default async function ForexCfdsPage({ params }) {
  const { locale } = await params;
  const product = await getTradingPageProduct(locale, "forex");
  if (!product) notFound();

  return <TradingProductView locale={locale} product={product} />;
}
