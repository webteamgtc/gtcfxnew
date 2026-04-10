import React from 'react'
import GtcHero from './components/GtcHero'
import GtcFeatureSection from './components/GtcFeatureSection'
import GtcFeatures from './components/GtcFeatures'
import GtcCopyTradingSection from './components/GtcCopyTradingSection '
import ReviewsSection from '../components/common/ReviewsSection'
import Counter from '../components/common/home/Counter'
import HowItWorksSection from './components/HowItWorksSection'
import { getPageMetadata } from '@/lib/metadata/getPageMetadata'

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata({
    locale,
    path: 'gtc-go-app',
    fallbackTitle: 'GTC Go App - GTC FX',
    fallbackDescription: 'Explore the GTC Go mobile trading app.',
  });
}

const page = () => {
  return (
    <>
    <GtcHero />
    <GtcFeatures />
    <GtcFeatureSection />
    <GtcCopyTradingSection />
    <Counter />
    <ReviewsSection />
    <HowItWorksSection />
    </>
  )
}

export default page