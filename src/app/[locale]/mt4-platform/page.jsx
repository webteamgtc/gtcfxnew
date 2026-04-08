import { getDictionary } from "@/i18n/request";
import PlatformAdvantages from "./components/PlatformAdvantage";
import InnerPageBanner from "../components/common/InnerPageBanner";

export default async function Mt4PlatformPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const copy = dict?.platform?.mt4PlatformPage || {};
  return (
    <>
      <InnerPageBanner
        description= {`${copy.bannerText.trade.heading1} ${copy.bannerText.trade.heading2}`}
        backgroundImage="/breadcamp/mt4.webp"
        mobileBackgroundImage="/breadcamp/mt4-mobile.webp"
      />
      <PlatformAdvantages copy={copy} />
    </>
  );
}