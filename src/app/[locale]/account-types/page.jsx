import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import AccountTypesComparison from "./components/AccountTypesComparison";


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
        mobileBackgroundImage="/breadcamp/account-mobile.webp"
      />
      <AccountTypesComparison />
 
  

      {/* other sections */}
    </>
  );
}
