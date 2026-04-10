import { getDictionary } from "@/i18n/request";
import InnerPageBanner from "../components/common/InnerPageBanner";
import DemoHeroSection from "./components/DemoHeroSection";
import Counter from "../components/common/home/Counter";
import FeaturesSection from "../components/common/home/FeaturesSection";
import TradingTicker from "../components/home2/TradingTicker";
import ReviewsSection from "../components/common/ReviewsSection";
import { getPageMetadata } from "@/lib/metadata/getPageMetadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return getPageMetadata({
    locale,
    key: "freeDemoAccount",
    dict,
    path: "free-demo-account",
    fallbackTitle: "Free Demo Account - GTC FX",
    fallbackDescription: "Get a free demo account to test our trading platforms.",
  });
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
