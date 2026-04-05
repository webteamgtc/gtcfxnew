import { notFound } from "next/navigation";
import { getTradingPageProduct } from "../productConfig";
import TradingProductView from "../components/TradingProductView";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const p = await getTradingPageProduct(locale, "indices");
  return {
    title: p?.metaTitle ?? "Index CFD Trading | GTCFX",
    description: p?.metaDescription,
  };
}

export default async function IndicesPage({ params }) {
  const { locale } = await params;
  const product = await getTradingPageProduct(locale, "indices");
  if (!product) notFound();
  return <TradingProductView locale={locale} product={product} />;
}
