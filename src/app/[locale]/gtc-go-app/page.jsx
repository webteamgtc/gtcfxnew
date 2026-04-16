import React from "react";
import GtcHero from "./components/GtcHero";
import GtcFeatureSection from "./components/GtcFeatureSection";
import GtcFeatures from "./components/GtcFeatures";
import GtcCopyTradingSection from "./components/GtcCopyTradingSection ";
import ReviewsSection from "../components/common/ReviewsSection";
import Counter from "../components/common/home/Counter";
import HowItWorksSection from "./components/HowItWorksSection";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";
import { getDictionary } from "@/i18n/request";

export async function generateMetadata({ params }) {
  const { locale } = params;
  const dict = await getDictionary(locale);

  return getPageMetadata({
    locale,
    dict, // ✅ REQUIRED
    key: "gtcGoApp", // ✅ THIS IS MISSING
    path: "gtc-go-app",
    fallbackTitle:
      "GTC Go Trading App | Trade Anytime, Anywhere | GTCFX",
    fallbackDescription:
      "Download the GTC Go app to trade global markets with fast execution and real-time data.",
  });
}

const Page = () => {
  return (
    <>
      <GtcHero />
      <GtcFeatures />
      <GtcFeatureSection />
      <GtcCopyTradingSection />
      <Counter />
      <ReviewsSection />
      <HowItWorksSection />
    </>
  );
};

export default Page;