import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import KycCompliancePolicy from "../components/documents/KycCompliancePolicy";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return getPageMetadata({
    locale,
    key: "legalPoliciesClientAgreements",
    dict,
    path: "legal-policies-client-agreements",
    fallbackTitle: "KYC & Compliance Policy - GTCFX",
    fallbackDescription: "We are committed to maintaining the highest standards of security and compliance through strict identity verification and regulatory procedures.",
  });
}

export default async function pages({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const about = dict.about || {};

  return (
    <>
      <InnerPageBanner
        description="Identity verification and compliance procedures to ensure a secure and transparent trading environment. "
        backgroundImage="/breadcamp/legal.webp"
        mobileBackgroundImage="/breadcamp/legal-mobile.webp"
      />
      <KycCompliancePolicy />
      

      {/* other sections */}
    </>
  );
}
