import { getDictionary } from "@/i18n/request";
import DynamicLeverageClient from "./DynamicLeverageClient";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata({
    locale,
    key: "dynamicLeverage",
    path: "dynamic-leverage",
    fallbackTitle: "Dynamic Leverage - GTC FX",
    fallbackDescription: "Learn about dynamic leverage at GTCFX.",
  });
}

export default async function DynamicLeveragePage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const copy = dict.dynamicLeverage || {};
  return <DynamicLeverageClient locale={locale} copy={copy} />;
}

