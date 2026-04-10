import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import RiskDisclosureStatementPage from "../components/documents/RiskDisclosureStatementPage";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return getPageMetadata({
    locale,
    key: "riskDisclosure",
    dict,
    path: "risk-disclosure",
    fallbackTitle: "Risk Disclosure - GTC FX",
    fallbackDescription: "Understand the risks associated with trading financial instruments before making investment decisions.",
  });
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const about = dict.about || {};

  return (
    <>
      <InnerPageBanner
        description="Understand the risks associated with trading financial instruments before making investment decisions. "
        backgroundImage="/breadcamp/legal.webp"
        mobileBackgroundImage="/breadcamp/legal-mobile.webp"
      />
      <RiskDisclosureStatementPage />

      {/* other sections */}
    </>
  );
}
