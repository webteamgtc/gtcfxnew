import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import DemoHeroSection from "./components/DemoHeroSection";
import Counter from "../components/common/home/Counter";
import FeaturesSection from "../components/common/home/FeaturesSection";
import TradingTicker from "../components/home2/TradingTicker";
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
  const accountForm = dict?.accounts?.accountForm || {};

  return (
    <>
      <InnerPageBanner
        description="Master the Markets with GTCFX Advanced Trading Platforms"
        backgroundImage="/breadcamp/demo.webp"
        mobileBackgroundImage="/breadcamp/demo-mob.webp"
      />
      <DemoHeroSection messages={accountForm} />
      <Counter />
      <FeaturesSection />
      <TradingTicker />
      <ReviewsSection />
  

      {/* other sections */}
    </>
  );
}
