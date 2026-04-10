import { getDictionary } from "@/i18n/request";
 import LeaderDetailPage from "../components/LeaderDetailPage";
import InnerPageBanner from "../../components/common/InnerPageBanner";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale);
  return getPageMetadata({
    locale,
    key: "leaderboard",
    dict,
    path: `leaderboard/${slug}`,
    fallbackTitle: "Leaderboard - GTC FX",
    fallbackDescription: "Explore our leaderboard and see the top traders.",
  });
}

export default async function pages({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <InnerPageBanner
        description="Enhance your trading power with additional margin support, giving you greater flexibility to seize market opportunities. "
        backgroundImage="/breadcamp/regulations.webp"
        mobileBackgroundImage="/breadcamp/mobile-regu.webp"
      />
      <LeaderDetailPage />

      {/* other sections */}
    </>
  );
}
