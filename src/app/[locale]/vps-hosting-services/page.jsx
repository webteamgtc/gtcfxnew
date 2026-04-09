import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import BannerSection from "./components/BannerSection";
import VPSHosting from "./components/VPSHosting";
import WhyChooseVPS from "./components/WhyChooseVPS";
import VPSPricing from "./components/VPSPricing";
import VPSReadySection from "./components/VPSReadySection";
import ManagedAccountFaqs from "../components/common/ManagedAccountFaqs";
export default async function VpsHostingServicesPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
    const copy = dict?.primeTech?.vpsHosting || {};
  const bannerDescription = copy?.banner?.title || "";
  return (
    <div>
      <InnerPageBanner
        description={bannerDescription}
        backgroundImage="/breadcamp/about.webp"
        mobileBackgroundImage="/breadcamp/about-mobile.webp"
      />
      <BannerSection copy={copy} />
      <VPSHosting copy={copy} />
      <WhyChooseVPS copy={copy} />
      <VPSPricing copy={copy} />
      <VPSReadySection copy={copy} />
      <ManagedAccountFaqs faq={copy?.faqs} />
    </div>
  );
}