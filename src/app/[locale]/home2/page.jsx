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
import HeroSection from '../components/home2/HeroSection';
import AwardsTropy from '../components/home2/AwardsTropy';
import PlatformsSection from '../components/home2/PlatformsSection';
import TradingTicker from '../components/home2/TradingTicker';


export default async function HomePage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const home = dict.home || {};

  return (
   <>
   <HeroSection />
  <RevealOnScroll>
  <TradingTicker />
</RevealOnScroll>
<RevealOnScroll>
  <FeaturesSection />
</RevealOnScroll>





<RevealOnScroll>
  <Counter />
</RevealOnScroll>


<RevealOnScroll>
  <MarketTabsSection />
</RevealOnScroll>


<RevealOnScroll>
  <SecurityBanner />
</RevealOnScroll>



<RevealOnScroll>
  <TradingFeaturesSection />
</RevealOnScroll>


<RevealOnScroll>
 <PlatformsSection/>
</RevealOnScroll>


<RevealOnScroll>
  <BlogsSection />
</RevealOnScroll>

   </>
  );
}
