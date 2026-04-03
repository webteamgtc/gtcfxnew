import { getDictionary } from "@/i18n/request";
import ThankYouPageClient from "./ThankYouPageClient";
import { Suspense } from "react";
import InnerPageBanner from "../components/common/InnerPageBanner";

export default async function ThankYouPage({ params }) {
  const locale = params?.locale || "en";
  const dict = await getDictionary(locale);
  const content = dict?.thankYouLiveAccount?.content || {};

  return <Suspense fallback={null}>
    <InnerPageBanner
        description="Thank you for your interest in GTCFX. We will get back to you soon."
        backgroundImage="/breadcamp/about.webp"
        mobileBackgroundImage="/breadcamp/about-mobile.webp"
      />
     <ThankYouPageClient messages={content} />
      </Suspense>;
}