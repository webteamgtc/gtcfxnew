import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import PrivacyPolicyPage from "../components/documents/PrivacyPolicy";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return getPageMetadata({
    locale,
    key: "privacyPolicy",
    dict,
    path: "legal-policies-client-agreements",
    fallbackTitle: "Privacy Policy - GTCFX",
    fallbackDescription: "Your privacy is important to us. Learn how we protect and manage your personal data with the highest standards of security and transparency.",
  });
}

export default async function pages({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const about = dict.about || {};

  return (
    <>
      <InnerPageBanner
        description="Learn how GTCFX collects, uses, and protects your personal information to ensure a secure and transparent experience. "
        backgroundImage="/breadcamp/legal.webp"
        mobileBackgroundImage="/breadcamp/legal-mobile.webp"
      />
      <PrivacyPolicyPage/>
      

      {/* other sections */}
    </>
  );
}
