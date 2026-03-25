import { getDictionary } from '@/i18n/request';
import FeaturesSection from '../components/common/home/FeaturesSection';
import Counter from '../components/common/home/Counter';
import MarketTabsSection from '../components/common/home/MarketTabsSection';
import MarketTicker from '../components/common/home/MarketTicker';
import TradingFeaturesSection from '../components/common/home/TradingFeaturesSection';
import AppPromoSection from '../components/common/home/AppPromoSection';
import BlogsSection from '../components/common/home/BlogsSection';
import SecurityBanner from '../components/common/home/SecurityBanner';
import AwardsMarquee from '../components/common/home/AwardsMarquee';
import RevealOnScroll from '../components/RevealOnScroll';
import HeroSection from '../components/common/home/HeroSection';


export default async function HomePage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const home = dict.home || {};

  return (
   <>
   <HeroSection/>
   <RevealOnScroll>
  <Counter />
</RevealOnScroll>
  

<RevealOnScroll>
  <FeaturesSection />
</RevealOnScroll>

<RevealOnScroll>
  <SecurityBanner />
</RevealOnScroll>

<RevealOnScroll>
  <MarketTabsSection />
</RevealOnScroll>

<RevealOnScroll>
  <MarketTicker />
</RevealOnScroll>

<RevealOnScroll>
  <TradingFeaturesSection />
</RevealOnScroll>

<RevealOnScroll>
  <AwardsMarquee />
</RevealOnScroll>

<RevealOnScroll>
  <AppPromoSection />
</RevealOnScroll>

<RevealOnScroll>
  <BlogsSection />
</RevealOnScroll>

   </>
  );
}
