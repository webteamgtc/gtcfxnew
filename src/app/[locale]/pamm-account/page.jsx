import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import ManagedAccountBannerSection from "../components/common/ManagedAccountBannerSection";
import ManagedAccountFaqs from "../components/common/ManagedAccountFaqs";

export default async function PammAccountPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const copy = dict?.primeTech?.pamm || {};
  const bannerDescription = copy?.banner?.title || "";
  return (
    <div>
      <InnerPageBanner
        description={bannerDescription}
        backgroundImage="/breadcamp/mt5.webp"
        mobileBackgroundImage="/breadcamp/mt5-mobile.webp"
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