'use client'
import React from 'react'
import TabsContentdData from './TabsContentdData'

const leverageTable = ({ copy, locale }) => {
  const t = copy || {}
  return (
    <section className='hero-banner py-10 md:py-16 bg-gradient-to-t from-[#24358b] via-[#202766] to-[#141b43] border-y border-gray-200'>
      <div className="container">
        <div className="relative text-center">
          <h2
            style={{ lineHeight: "4rem" }}
            className="HeadingH2 bg-gradient-to-b from-white to-secondary inline-block text-transparent bg-clip-text capitalize"
          >
            {t.dynamicLeverageDetailsTitle}
          </h2>
          <p className="Text text-white text-center max-w-5xl mx-auto">
            {t.dynamicLeverageDetailsDescription}
          </p>
          <div className='tabs-content'>
            <TabsContentdData locale={locale} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default leverageTable 