import { getDictionary } from '@/i18n/request';
import HeroSection from './components/common/home/HeroSection';
import FeaturesSection from './components/common/home/FeaturesSection';
import Counter from './components/common/home/Counter';
import MarketTabsSection from './components/common/home/MarketTabsSection';
import MarketTicker from './components/common/home/MarketTicker';
import TradingFeaturesSection from './components/common/home/TradingFeaturesSection';
import SecurityBanner from './components/common/home/SecurityBanner';


export default async function HomePage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const home = dict.home || {};

  return (
   <>
   <HeroSection />
   <FeaturesSection />
   <Counter />
   <MarketTabsSection />
   <MarketTicker />
   <TradingFeaturesSection />
   <SecurityBanner />

   </>
  );
}
