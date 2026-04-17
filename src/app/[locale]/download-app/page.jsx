import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import TradingPlatformsSection from "./components/TradingPlatformsSection";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";
import { translationTextByPath } from "@/i18n/tranlsationText";
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
  const downApp = dict?.downApp || {};
 

  return (
    <>
      <InnerPageBanner
        title={downApp?.bannerTitle}
        description={downApp?.bannerDescription}
        backgroundImage="/breadcamp/awardpc.webp"
        mobileBackgroundImage="/breadcamp/award-mob.webp"
      />
      <TradingPlatformsSection />
  

      {/* other sections */}
    </>
  );
}
