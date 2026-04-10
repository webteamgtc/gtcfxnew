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
    key: "indices",
    dict,
    path: "indices",
    fallbackTitle: "Indices - GTC FX",
    fallbackDescription: "Trade indices with GTCFX and gain exposure to global index markets. Invest in indices with flexible contracts and risk management tools.",
  });
}

export default async function IndicesPage({ params }) {
  const { locale } = await params;
  const product = await getTradingPageProduct(locale, "indices");
  if (!product) notFound();
  return <TradingProductView locale={locale} product={product} />;
}
