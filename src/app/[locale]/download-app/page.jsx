import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import AwardsSection from "../components/about/AwardsSection";
import TradingPlatformsSection from "./components/TradingPlatformsSection";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return getPageMetadata({
    locale,
    key: "downloadApp",
    dict,
    path: "download-app",
    fallbackTitle: "Download App - GTC FX",
    fallbackDescription: "Download our trading platform and start trading anytime. Access global markets with a fast, secure, and user-friendly platform on your device. Download now.",
  });
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
