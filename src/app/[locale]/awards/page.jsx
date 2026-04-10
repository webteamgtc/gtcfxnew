import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import AwardsSection from "../components/about/AwardsSection";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return getPageMetadata({
    locale,
    key: "awards",
    dict,
    path: "awards",
    fallbackTitle: "Awards - GTC FX",
    fallbackDescription: "GTCFX is an award-winning CFD broker celebrated for innovation, trust, and service quality. Trade with confidence on a platform recognized worldwide.",
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
      <AwardsSection />
  

      {/* other sections */}
    </>
  );
}
