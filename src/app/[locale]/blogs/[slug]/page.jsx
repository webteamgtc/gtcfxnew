import InnerPageBanner from "../../components/common/InnerPageBanner";
import { getDictionary } from "@/i18n/request";
import SingleDetailPage from "../../components/common/SingleDetailPage";

export default async function CompanyNewsDetailPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const blogs = dict.blogs || {};
  const text = (key, fallback) =>
    typeof blogs?.[key] === "string" && blogs[key].length
      ? blogs[key]
      : fallback;

  return (
    <>
      <InnerPageBanner
        description={text("bannerDescription", "Market Insights & CFD Trading Strategies - GTCFX Blog")}
        backgroundImage="/breadcamp/contact.webp"
        mobileBackgroundImage="/breadcamp/contact-mobile.webp"
      />

      <SingleDetailPage url="blogs" />
    </>
  );
}
