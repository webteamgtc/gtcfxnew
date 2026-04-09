import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import ManagedAccountBannerSection from "../components/common/ManagedAccountBannerSection";
import ManagedAccountFaqs from "../components/common/ManagedAccountFaqs";

export default async function MamAccountPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const copy = dict?.primeTech?.mam || {};

  return (
    <div>
      <InnerPageBanner
        description="Streamline multi-account trading with a powerful MAM solution built for performance, flexibility, and precise trade allocation."
        backgroundImage="/breadcamp/mam.webp"
        mobileBackgroundImage="/breadcamp/mam-mobile.webp"
      />

      <ManagedAccountBannerSection
        title={copy?.banner?.title || ""}
        content={copy?.banner?.des1 || ""}
        content2={copy?.banner?.des2 || ""}
        subtitle={copy?.CallAction?.first || ""}
        subtitle2={copy?.CallAction?.sec || ""}
        imageUrl="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/account/mam.webp"
        buttonText={copy?.CallAction?.liveAccount || "Register LIVE ACCOUNT"}
        buttonLink="https://pamm-ratings.gtcfx.com/widgets/ratings?widgetKey=mam-ratings"
        imageAlt={copy?.banner?.title || "MAM Account"}
      />

      <ManagedAccountFaqs faq={copy?.faq} />
    </div>
  );
}

