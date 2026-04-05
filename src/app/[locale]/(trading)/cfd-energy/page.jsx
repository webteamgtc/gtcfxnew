import { notFound } from "next/navigation";
import { getTradingPageProduct } from "../productConfig";
import TradingProductView from "../components/TradingProductView";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const p = await getTradingPageProduct(locale, "energy");
  return {
    title: p?.metaTitle ?? "Energy CFD Trading | GTCFX",
    description: p?.metaDescription,
  };
}

export default async function EnergyCfdsPage({ params }) {
  const { locale } = await params;
  const product = await getTradingPageProduct(locale, "energy");
  if (!product) notFound();
  return <TradingProductView locale={locale} product={product} />;
}
