import { getDictionary } from '@/i18n/request';
import FeaturesSection from '../components/common/home/FeaturesSection';
import Counter from '../components/common/home/Counter';
import MarketTabsSection from '../components/common/home/MarketTabsSection';
import TradingFeaturesSection from '../components/common/home/TradingFeaturesSection';
import BlogsSection from '../components/common/home/BlogsSection';
import SecurityBanner from '../components/common/home/SecurityBanner';
import RevealOnScroll from '../components/RevealOnScroll';
import HeroSection from '../components/common/home/HeroSection';
import PlatformsSection from '../components/home2/PlatformsSection';
import TradingTicker from '../components/home2/TradingTicker';
import { getPageMetadata } from '@/lib/metadata/getPageMetadata';
import HeroSectionHome2 from '../components/home2/HeroSectionHome2';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata({
    locale,
    key: 'home',
    path: 'home2',
    fallbackTitle: 'Home - GTC FX',
    fallbackDescription: 'Trade global markets with GTCFX.',
  });
}


export default async function HomePage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const home = dict.home || {};

  return (
   <>
   <HeroSectionHome2 />
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
