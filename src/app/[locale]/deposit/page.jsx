import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import { FundHero } from "./components/FundHero";
import { FundMethods } from "./components/FundMethods";
import { FundSteps } from "./components/FundSteps";


export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const meta = dict.metadata || {};
  return {
    title: meta.aboutTitle ?? "About - GTC FX",
    description: meta.aboutDescription,
  };
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
