import { notFound } from "next/navigation";
import { getTradingPageProduct } from "../productConfig";
import TradingProductView from "../components/TradingProductView";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const p = await getTradingPageProduct(locale, "commodities");
  return {
    title: p?.metaTitle ?? "Commodity CFD Trading | GTCFX",
    description: p?.metaDescription,
  };
}

export default async function CommoditiesPage({ params }) {
  const { locale } = await params;
  const product = await getTradingPageProduct(locale, "commodities");
  if (!product) notFound();
  return <TradingProductView locale={locale} product={product} />;
}
