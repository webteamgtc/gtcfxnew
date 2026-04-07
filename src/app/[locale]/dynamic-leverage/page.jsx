import { getDictionary } from "@/i18n/request";
import DynamicLeverageClient from "./DynamicLeverageClient";

export default async function DynamicLeveragePage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const copy = dict.dynamicLeverage || {};
  return <DynamicLeverageClient locale={locale} copy={copy} />;
}

