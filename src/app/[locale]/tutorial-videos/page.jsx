import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import CompanyIntro from "../components/about/CompanyIntro";
import AwardsMarquee from "../components/common/home/AwardsMarquee";
import Counter from "../components/common/home/Counter";
import ReviewsSection from "../components/common/ReviewsSection";
import TutorialVideosPageSection from "./components/TutorialVideosPageSection";

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
        description="Browse our easy-to-follow video guides and get the help you need to trade with more confidence."
        backgroundImage="/breadcamp/tutorial.webp"
        mobileBackgroundImage="/breadcamp/tutorial-mobile.webp"
      />
      <TutorialVideosPageSection />

      {/* other sections */}
    </>
  );
}
