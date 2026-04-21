import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";
import { locales } from "@/i18n/config";
import { getLocalizedDocument } from "@/lib/documents/getLocalizedDocument";
import PrivacyPolicyPage from "../components/documents/PrivacyPolicy";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const KYC_COMPLIANCE_POLICY_DOCUMENT_BASE_URL =
  process.env.NEXT_PUBLIC_DOCUMENTS_URL + "/kyc-compliance-policy";
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
  const kycCompliancePolicyData = await getLocalizedDocument(
    KYC_COMPLIANCE_POLICY_DOCUMENT_BASE_URL,
    locale
  );
  return (
    <>
      <InnerPageBanner
        description={kycCompliancePolicyData?.bannerDesc}
        backgroundImage="/breadcamp/legal.webp"
        mobileBackgroundImage="/breadcamp/legal-mobile.webp"
      />
      <PrivacyPolicyPage data={kycCompliancePolicyData} />
        

      {/* other sections */}
    </>
  );
}
