import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import AwardsSection from "../components/about/AwardsSection";
import TradingPlatformsSection from "./components/TradingPlatformsSection";

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

  return (
    <>
      <InnerPageBanner
        description="Trading with us offers the optimal avenue for investing your money
            wisely and profitably. "
        backgroundImage="/breadcamp/awardpc.webp"
        mobileBackgroundImage="/breadcamp/award-mob.webp"
      />
      <TradingPlatformsSection />
  

      {/* other sections */}
    </>
  );
}
