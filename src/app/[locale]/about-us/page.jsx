import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import CompanyIntro from "../components/about/CompanyIntro";
import AwardsMarquee from "../components/common/home/AwardsMarquee";
import Counter from "../components/common/home/Counter";
import ReviewsSection from "../components/common/ReviewsSection";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return getPageMetadata({
    locale,
    key: "aboutUs",
    dict,
    path: "about-us",
    fallbackTitle: "About - GTC FX",
    fallbackDescription: "Learn more about GTCFX.",
  });
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const about = dict.about || {};
  const aboutGroup = about?.["about-gtc-group"] || {};
  const bannerDescription =
    aboutGroup?.bannerDes || "";

  return (
    <>
      <InnerPageBanner
        description={bannerDescription}
        backgroundImage="/breadcamp/about.webp"
        mobileBackgroundImage="/breadcamp/about-mobile.webp"
      />
      <AwardsMarquee />
      <CompanyIntro />
      <Counter />
      <ReviewsSection />

      {/* other sections */}
    </>
  );
}
