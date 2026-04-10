import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import { FundHero } from "./components/FundHero";
import { FundMethods } from "./components/FundMethods";
import { FundSteps } from "./components/FundSteps";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return getPageMetadata({
    locale,
    key: "deposit",
    dict,
    path: "deposit",
    fallbackTitle: "Deposit - GTC FX",
    fallbackDescription: "Fund your account at your own ease and comfort",
  });
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const about = dict.about || {};

  return (
    <>
      <InnerPageBanner
        description="Fund your account at your own ease and comfort"
        backgroundImage="/breadcamp/deposit.webp"
        mobileBackgroundImage="/breadcamp/fund-mobile.webp"
      />
     <FundHero />
     <FundMethods />
     <FundSteps />
  

      {/* other sections */}
    </>
  );
}
