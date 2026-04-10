import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import MarginBonusPageSection from "./components/MarginBonusPageSection";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return getPageMetadata({
    locale,
    key: "marginBonus",
    dict,
    path: "margin-bonus",
    fallbackTitle: "Margin Bonus - GTC FX",
    fallbackDescription: "Enhance your trading power with additional margin support, giving you greater flexibility to seize market opportunities.",
  });
}

export default async function pages({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const about = dict.about || {};

  return (
    <>
      <InnerPageBanner
        description="Enhance your trading power with additional margin support, giving you greater flexibility to seize market opportunities. "
        backgroundImage="/breadcamp/bonue.webp"
        mobileBackgroundImage="/breadcamp/bonue-mobile.webp"
      />
      <MarginBonusPageSection />

      {/* other sections */}
    </>
  );
}
