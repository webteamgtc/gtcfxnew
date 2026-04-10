import { getDictionary } from "@/i18n/request";
import PlatformAdvantages from "./components/PlatformAdvantage";
import InnerPageBanner from "../components/common/InnerPageBanner";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata({
    locale,
    key: "mt5Platform",
    path: "mt5-platform",
    fallbackTitle: "MT5 Platform - GTC FX",
    fallbackDescription: "Trade with the MT5 platform at GTCFX.",
  });
}

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