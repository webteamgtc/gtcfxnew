import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import GlobalPresenceSection from "../components/about/GlobalPresenceSection";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return getPageMetadata({
    locale,
    key: "regulations",
    dict,
    path: "regulations",
    fallbackTitle: "Regulations - GTC FX",
    fallbackDescription: "Explore our regulations and see how we ensure fair and transparent trading.",
  });
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const regulation = dict.regulationPage || {};

  return (
    <>
      <InnerPageBanner
        description={regulation?.bannerDescription}
        backgroundImage="/breadcamp/regulations.webp"
        mobileBackgroundImage="/breadcamp/mobile-regu.webp"
      />

      <GlobalPresenceSection />


      {/* other sections */}
    </>
  );
}
