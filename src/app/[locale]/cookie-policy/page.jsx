import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import CookiePolicy from "../components/documents/CookiePolicy";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return getPageMetadata({
    locale,
    key: "legalPoliciesClientAgreements",
    dict,
    path: "legal-policies-client-agreements",
    fallbackTitle: "Cookie Policy - GTCFX",
    fallbackDescription: "Learn how GTCFX uses cookies and similar technologies to enhance your browsing experience and improve our services.",
  });
}

export default async function pages({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const about = dict.about || {};

  return (
    <>
      <InnerPageBanner
        description="We use cookies to enhance functionality, analyze usage, and deliver a better user experience across our website."
        backgroundImage="/breadcamp/legal.webp"
        mobileBackgroundImage="/breadcamp/legal-mobile.webp"
      />
      <CookiePolicy />
      

      {/* other sections */}
    </>
  );
}
