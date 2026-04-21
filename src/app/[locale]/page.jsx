import { Suspense } from "react";
import HeroSectionHomeVideo from "./components/home2/HeroSectionHomeVideo";
import FeaturesSection from './components/common/home/FeaturesSection';
import Counter from './components/common/home/Counter';
import MarketTabsSection from './components/common/home/MarketTabsSection';
import MarketTicker from './components/common/home/MarketTicker';
import TradingFeaturesSection from './components/common/home/TradingFeaturesSection';
import AppPromoSection from './components/common/home/AppPromoSection';
import BlogsSection from './components/common/home/BlogsSection';
import SecurityBanner from './components/common/home/SecurityBanner';
import AwardsMarquee from './components/common/home/AwardsMarquee';
import RevealOnScroll from './components/RevealOnScroll';
import TradingTicker from './components/home2/TradingTicker';
import PlatformsSection from './components/home2/PlatformsSection';
import CopyTradingSection from './components/common/home/CopyTradingSection';
import { getPageMetadata } from '@/lib/metadata/getPageMetadata';
import HeroSectionHome2 from './components/home2/HeroSectionHome2';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata({
    locale,
    key: 'home',
    path: '',
    fallbackTitle: 'GTC FX',
    fallbackDescription: 'Trading & Finance',
  });
}


export default async function HomePage({ params }) {
  const { locale } = await params;

  return (
   <>
   <HeroSectionHomeVideo />
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
  <Suspense fallback={<div className="container py-8 md:py-12" />}>
    <CopyTradingSection />
  </Suspense>
</RevealOnScroll>
<RevealOnScroll>
  <SecurityBanner />
</RevealOnScroll>

<RevealOnScroll>
  <TradingFeaturesSection />
</RevealOnScroll>


<RevealOnScroll>
 <PlatformsSection />
</RevealOnScroll>

<RevealOnScroll>
  <Suspense fallback={<div className="container py-10 md:py-16" />}>
    <BlogsSection locale={locale} />
  </Suspense>
</RevealOnScroll>

   </>
  );
}
