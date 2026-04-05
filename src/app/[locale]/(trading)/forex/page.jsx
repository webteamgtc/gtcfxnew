import { notFound } from "next/navigation";
import { getTradingPageProduct } from "../productConfig";
import TradingProductView from "../components/TradingProductView";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const p = await getTradingPageProduct(locale, "forex");
  return {
    title: p?.metaTitle ?? "Forex CFD Trading | GTCFX",
    description: p?.metaDescription,
  };
}

export default async function ForexCfdsPage({ params }) {
  const { locale } = await params;
  const product = await getTradingPageProduct(locale, "forex");
  if (!product) notFound();

  return <TradingProductView locale={locale} product={product} />;
}
