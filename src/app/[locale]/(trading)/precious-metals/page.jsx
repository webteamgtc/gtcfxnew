import { notFound } from "next/navigation";
import { getTradingPageProduct } from "../productConfig";
import TradingProductView from "../components/TradingProductView";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const p = await getTradingPageProduct(locale, "metals");
  return {
    title: p?.metaTitle ?? "Metals CFD Trading | GTCFX",
    description: p?.metaDescription,
  };
}

export default async function MetalsCfdsPage({ params }) {
  const { locale } = await params;
  const product = await getTradingPageProduct(locale, "metals");
  if (!product) notFound();
  return <TradingProductView locale={locale} product={product} />;
}
