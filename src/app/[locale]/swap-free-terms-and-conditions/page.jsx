import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";
import { locales } from "@/i18n/config";
import PrivacyPolicyPage from "../components/documents/PrivacyPolicy";
import { getLocalizedDocument } from "@/lib/documents/getLocalizedDocument";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const SWAP_FREE_TERMS_AND_CONDITIONS_DOCUMENT_BASE_URL =
  process.env.NEXT_PUBLIC_DOCUMENTS_URL + "/swap-free-terms-and-conditions";
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return getPageMetadata({
    locale,
    dict,
    key: "swapTermsCondition",
    path: "swap-free-terms-and-conditions",
    fallbackTitle: "Swap-Free Terms & Conditions | GTCFX",
    fallbackDescription:
      "Review the terms and conditions for swap-free accounts, including eligibility, usage rules, and applicable conditions.",
  });
}

export default async function SwapFreeTerms({ params }) {
  const { locale } = await params;
  const swapTermsPageData = await getLocalizedDocument(
    SWAP_FREE_TERMS_AND_CONDITIONS_DOCUMENT_BASE_URL,
    locale
  );

  return (
    <>
      <InnerPageBanner
        description={
          swapTermsPageData?.bannerDesc ||
          "Explore the terms and conditions for swap-free accounts, including how they work and the requirements to maintain them."
        }
        backgroundImage="/breadcamp/legal.webp"
        mobileBackgroundImage="/breadcamp/legal-mobile.webp"
      />
      <PrivacyPolicyPage data={swapTermsPageData} />

      {/* other sections */}
    </>
  );
}