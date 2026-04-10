import { getDictionary } from "@/i18n/request";
import PlatformAdvantages from "./components/PlatformAdvantage";
import InnerPageBanner from "../components/common/InnerPageBanner";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata({
    locale,
    key: "mt4Platform",
    path: "mt4-platform",
    fallbackTitle: "MT4 Platform - GTC FX",
    fallbackDescription: "Trade with the MT4 platform at GTCFX.",
  });
}

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