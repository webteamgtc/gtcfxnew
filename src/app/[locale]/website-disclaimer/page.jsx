import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import SwapFreeTermsPage from "../components/documents/SwapFreeTermsPage";
import WebsiteDisclaimerPage from "../components/documents/WebsiteDisclaimerPage";

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
        description="GTCFX makes no representation or warranty as to the accuracy or completeness of the information provided and accepts no liability for any loss arising from reliance on such content."
        backgroundImage="/breadcamp/legal.webp"
        mobileBackgroundImage="/breadcamp/legal-mobile.webp"
      />
      <WebsiteDisclaimerPage />

      {/* other sections */}
    </>
  );
}
