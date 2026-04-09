import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import CopyTradingHero from "./components/CopyTradingHero";
import WhatIsCopyTradingSection from "./components/WhatIsCopyTradingSection";
import CopyTradingHowItWorks from "./components/CopyTradingHowItWorks";
import CopyRatingData from "./components/CopyRatingData";


export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const meta = dict.metadata || {};
  return {
    title: meta.aboutTitle ?? "About - GTC FX",
    description: meta.aboutDescription,
  };
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const about = dict.about || {};
  const copy = dict.copy || {};
  return (
    <>
      <InnerPageBanner
        description="Trading with us offers the optimal avenue for investing your money
            wisely and profitably. "
        backgroundImage="/breadcamp/awardpc.webp"
        mobileBackgroundImage="/breadcamp/award-mob.webp"
      />
      <CopyTradingHero />
      <WhatIsCopyTradingSection />
      <CopyRatingData copy={copy} />
      <CopyTradingHowItWorks />
  

      {/* other sections */}
    </>
  );
}
