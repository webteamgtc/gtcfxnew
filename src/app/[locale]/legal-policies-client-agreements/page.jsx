import { getDictionary } from "@/i18n/request";
import LegalPoliciesClientAgreementsPage from "./components/LegalPoliciesClientAgreementsPage";
import InnerPageBanner from "../components/common/InnerPageBanner";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return getPageMetadata({
    locale,
    key: "legalPoliciesClientAgreements",
    dict,
    path: "legal-policies-client-agreements",
    fallbackTitle: "Legal Policies and Client Agreements - GTC FX",
    fallbackDescription: "Explore our legal documents, policies, and client agreements.",
  });
}

export default async function pages({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const about = dict.about || {};

  return (
    <>
      <InnerPageBanner
        description="Explore our legal documents, policies, and client agreements. "
        backgroundImage="/breadcamp/legal.webp"
        mobileBackgroundImage="/breadcamp/legal-mobile.webp"
      />
      <LegalPoliciesClientAgreementsPage /> 
      

      {/* other sections */}
    </>
  );
}
