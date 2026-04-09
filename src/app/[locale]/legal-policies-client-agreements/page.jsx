import { getDictionary } from "@/i18n/request";
import LegalPoliciesClientAgreementsPage from "./components/LegalPoliciesClientAgreementsPage";
import InnerPageBanner from "../components/common/InnerPageBanner";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const meta = dict.metadata || {};
  return {
    title: meta.aboutTitle ?? "About - GTC FX",
    description: meta.aboutDescription,
  };
}

export default async function pages({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const about = dict.about || {};

  return (
    <>
      <InnerPageBanner
        description="Explore our legal documents, policies, and client agreements. "
        backgroundImage="/breadcamp/regulations.webp"
        mobileBackgroundImage="/breadcamp/mobile-regu.webp"
      />
      <LegalPoliciesClientAgreementsPage /> 
      

      {/* other sections */}
    </>
  );
}
