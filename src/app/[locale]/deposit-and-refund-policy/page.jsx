import { getDictionary } from "@/i18n/request";
import DepositRefundPage from "../components/documents/DepositRefundPage";
import InnerPageBanner from "../components/common/InnerPageBanner";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return getPageMetadata({
    locale,
    key: "refundPolicy",
    dict,
    path: "legal-policies-client-agreements",
    fallbackTitle: "Deposit & Refund Policy- GTCFX",
    fallbackDescription: "This Deposit & Refund Policy outlines the procedures and conditions related to deposits, withdrawals, and refund requests with GTCFX.",
  });
}

export default async function pages({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const about = dict.about || {};

  return (
    <>
      <InnerPageBanner
        description="Review our policies regarding deposits, withdrawals, and refunds to ensure secure and transparent financial transactions."
        backgroundImage="/breadcamp/legal.webp"
        mobileBackgroundImage="/breadcamp/legal-mobile.webp"
      />
      <DepositRefundPage />
      

      {/* other sections */}
    </>
  );
}
