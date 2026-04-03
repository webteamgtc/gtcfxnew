import React from 'react'
import GtcHero from './components/GtcHero'
import GtcFeatureSection from './components/GtcFeatureSection'
import GtcFeatures from './components/GtcFeatures'
import GtcCopyTradingSection from './components/GtcCopyTradingSection '
import ReviewsSection from '../components/common/ReviewsSection'
import Counter from '../components/common/home/Counter'
import HowItWorksSection from './components/HowItWorksSection'

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