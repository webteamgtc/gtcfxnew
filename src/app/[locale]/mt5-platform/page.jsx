import { getDictionary } from "@/i18n/request";
import PlatformAdvantages from "./components/PlatformAdvantage";
import InnerPageBanner from "../components/common/InnerPageBanner";

export default async function Mt5PlatformPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const copy = dict?.platform?.mt5PlatformPage || {};
  const trade1 = copy?.bannerText?.trade?.heading1 || "";
  const trade2 = copy?.bannerText?.trade?.heading2 || "";
  const bannerDescription = `${trade1} ${trade2}`.trim();
  return (
    <div>
        <InnerPageBanner
        description={bannerDescription}
        backgroundImage="/breadcamp/mt5.webp"
        mobileBackgroundImage="/breadcamp/mt5-mobile.webp"
      />
      <PlatformAdvantages copy={copy} />
    </div>
  );
}