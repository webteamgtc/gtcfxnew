import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import BannerSection from "./components/BannerSection";
import VPSHosting from "./components/VPSHosting";
import WhyChooseVPS from "./components/WhyChooseVPS";
import VPSPricing from "./components/VPSPricing";
import VPSReadySection from "./components/VPSReadySection";
import ManagedAccountFaqs from "../components/common/ManagedAccountFaqs";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata({
    locale,
    key: "vpsHosting",
    path: "vps-hosting-services",
    fallbackTitle: "VPS Hosting Services - GTC FX",
    fallbackDescription: "Low latency VPS hosting for reliable trading.",
  });
}

export default async function VpsHostingServicesPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
    const copy = dict?.primeTech?.vpsHosting || {};
  return (
    <div>
      <InnerPageBanner
        description={copy?.bannerDesc || ""}
        backgroundImage="/breadcamp/vps.webp"
        mobileBackgroundImage="/breadcamp/vps-mobile.webp"
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