import { getDictionary } from "@/i18n/request";
import PlatformAdvantages from "./components/PlatformAdvantage";
import InnerPageBanner from "../components/common/InnerPageBanner";

export default async function Mt4PlatformPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const copy = dict?.platform?.mt4PlatformPage || {};
  const trade1 = copy?.bannerText?.trade?.heading1 || "";
  const trade2 = copy?.bannerText?.trade?.heading2 || "";
  const bannerDescription = `${trade1} ${trade2}`.trim();
  return (
    <>
      <InnerPageBanner
        description={bannerDescription}
        backgroundImage="/breadcamp/mt4.webp"
        mobileBackgroundImage="/breadcamp/mt4-mobile.webp"
      />
      <PlatformAdvantages copy={copy} />
    </>
  );
}