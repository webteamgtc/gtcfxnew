import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import CompanyIntro from "../components/about/CompanyIntro";
import AwardsMarquee from "../components/common/home/AwardsMarquee";
import Counter from "../components/common/home/Counter";
import ReviewsSection from "../components/common/ReviewsSection";

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
        description="Watch GTCFX tutorial videos and learn how to open, verify, and manage your trading account easily."
        backgroundImage="/breadcamp/tutorial.webp"
        mobileBackgroundImage="/breadcamp/tutorial-mobile.webp"
      />
      <AwardsMarquee />
      <CompanyIntro />
      <Counter />
      <ReviewsSection />

      {/* other sections */}
    </>
  );
}
