import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import SwapFreeTermsPage from "../components/documents/SwapFreeTermsPage";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";

export async function generateMetadata({ params }) {
  const { locale } = params;
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
  const { locale } = params;
  const dict = await getDictionary(locale);
  const swapTermsPage = dict?.swapTermsPage || {};

  return (
    <>
      <InnerPageBanner
        title={swapTermsPage?.bannerTitle || "Swap-Free Terms & Conditions"}
        description={
          swapTermsPage?.bannerDescription ||
          "Explore the terms and conditions for swap-free accounts, including how they work and the requirements to maintain them."
        }
        backgroundImage="/breadcamp/legal.webp"
        mobileBackgroundImage="/breadcamp/legal-mobile.webp"
      />
      <SwapFreeTermsPage />
    </>
  );
}