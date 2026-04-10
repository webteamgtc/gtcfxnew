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
    key: "metals",
    dict,
    path: "precious-metals",
    fallbackTitle: "Precious Metals - GTC FX",
    fallbackDescription: "Trade precious metals with GTCFX and gain exposure to global precious metals markets. Invest in gold, silver, and other precious metals with flexible contracts and risk management tools.",
  });
}

export default async function MetalsCfdsPage({ params }) {
  const { locale } = await params;
  const product = await getTradingPageProduct(locale, "metals");
  if (!product) notFound();
  return <TradingProductView locale={locale} product={product} />;
}
