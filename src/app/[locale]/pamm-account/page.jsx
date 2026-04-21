import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import ManagedAccountBannerSection from "../components/common/ManagedAccountBannerSection";
import ManagedAccountFaqs from "../components/common/ManagedAccountFaqs";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata({
    locale,
    key: "pammAccount",
    path: "pamm-account",
    fallbackTitle: "PAMM Account - GTC FX",
    fallbackDescription: "Invest through PAMM accounts with GTCFX.",
  });
}

export default async function PammAccountPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const copy = dict?.primeTech?.pamm || {};
  
  return (
    <div>
      <InnerPageBanner
        description={copy?.bannerDesc || ""}
        backgroundImage="/breadcamp/pamm-mobile.webp"
        mobileBackgroundImage="/breadcamp/pamm.webp"
      />
      <ManagedAccountBannerSection
        title={copy?.banner?.title || ""}
        content={copy?.banner?.des1 || ""}
        content2={copy?.banner?.des2 || ""}
        subtitle={copy?.CallAction?.first || ""}
        subtitle2={copy?.CallAction?.sec || ""}
        imageUrl="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/account/pamm.webp"
        buttonText={copy?.CallAction?.liveAccount || "Open Live Account"}
        buttonLink="https://pamm-ratings.gtcfx.com/widgets/ratings?widgetKey=pamm-ratings"
        imageAlt={copy?.banner?.title || "PAMM"}
      />

      <ManagedAccountFaqs faq={copy?.faq} />
    </div>
  );
}