import { getDictionary } from "@/i18n/request";
import ThankYouPageClient from "./ThankYouPageClient";
import { Suspense } from "react";

export default async function ThankYouPage({ params }) {
  const locale = params?.locale || "en";
  const dict = await getDictionary(locale);
  const content = dict?.thankYouLiveAccount?.content || {};

  return <Suspense fallback={null}> <ThankYouPageClient messages={content} /> </Suspense>;
}