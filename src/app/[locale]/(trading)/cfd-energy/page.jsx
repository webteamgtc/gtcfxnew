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
    key: "energy",
    dict,
    path: "cfd-energy",
    fallbackTitle: "Energy CFD Trading - GTC FX",
    fallbackDescription: "Trade energy CFDs with GTCFX and gain exposure to global energy markets. Invest in oil, gas, and renewable energy sources with flexible contracts and risk management tools.",
  });
}

export default async function EnergyCfdsPage({ params }) {
  const { locale } = await params;
  const product = await getTradingPageProduct(locale, "energy");
  if (!product) notFound();
  return <TradingProductView locale={locale} product={product} />;
}
