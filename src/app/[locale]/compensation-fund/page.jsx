import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import SecurityOfFundSection from "../components/about/SecurityOfFundSection";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const meta = dict.metadata || {};
  return {
    title: meta.aboutTitle ?? "About - GTC FX",
    description: meta.aboutDescription,
  };
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const about = dict.about || {};

  return (
    <>
      <InnerPageBanner
        description="GTC Global Trade Capital Ltd. is a official member of the Financial Commission, an international organization engaged in the resolution of disputes in the financial services industry for the forex market."
        backgroundImage="/breadcamp/security.webp"
        mobileBackgroundImage="/breadcamp/security-mob.webp"
      />

    <SecurityOfFundSection />


      {/* other sections */}
    </>
  );
}
