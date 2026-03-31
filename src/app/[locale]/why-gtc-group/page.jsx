import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import CompanyIntro from "../components/about/CompanyIntro";
import AwardsMarquee from "../components/common/home/AwardsMarquee";
import Counter from "../components/common/home/Counter";
import ReviewsSection from "../components/common/ReviewsSection";
import WhyChooseGTC from "../components/about/WhyChooseGTC";

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
        description="The GTCFX brand encompasses multiple companies that provide a diverse range of online trading products, serving over 985,000 clients across more than 100 countries."
        backgroundImage="/breadcamp/about.webp"
        mobileBackgroundImage="/breadcamp/about-mobile.webp"
      />
      <WhyChooseGTC />
  

      {/* other sections */}
    </>
  );
}
