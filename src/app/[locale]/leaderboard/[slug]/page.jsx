import { getDictionary } from "@/i18n/request";
 import LeaderDetailPage from "../components/LeaderDetailPage";
import InnerPageBanner from "../../components/common/InnerPageBanner";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const meta = dict.metadata || {};
  return {
    title: meta.leaderboardTitle ?? "Leaderboard - GTC FX",
    description: meta.aboutDescription,
  };
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
