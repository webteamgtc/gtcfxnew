import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import AccountTypesComparison from "./components/AccountTypesComparison";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";
import { translationTextByPath } from "@/i18n/tranlsationText";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return getPageMetadata({
    locale,
    key: "accountTypes",
    dict,
    path: "account-types",
    fallbackTitle: "Account Types - GTC FX",
    fallbackDescription: "Explore different account types and find the one that suits your trading needs.",
  });
}
export default async function AccountTypesPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const accountTypes = dict?.accountType || {};
  return (
    <>
      <InnerPageBanner
        title={accountTypes?.bannerTitle}
        description={accountTypes?.bannerDescription}
        backgroundImage="/breadcamp/deposit.webp"
        mobileBackgroundImage="/breadcamp/account-mobile.webp"
      />
      <AccountTypesComparison />



      {/* other sections */}
    </>
  );
}
