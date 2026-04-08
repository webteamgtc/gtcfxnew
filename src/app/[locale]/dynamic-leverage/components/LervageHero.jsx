'use client';
import React from 'react';
import Image from 'next/image';
 
const LervageHero = ({ copy }) => {
  const hero = copy?.lervageHero || {};

  return (
    <section className="hero-banner py-10 md:py-14 lg:py-20 2xl:py-24 bg-gradient-to-t from-[#24358b] via-[#202766] to-[#141b43] border-y border-gray-200">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-center md:text-left">
          {/* Image column */}
          <div className="relative w-full h-72 md:h-[450px] md:order-2">
            <Image
              src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/images/gtcmtd/phone.png"
              fill
              alt="MT5 Trader"
              className="object-contain"
            />
          </div>
          {/* Content column */}
          <div className="content md:order-1  ltr:text-left rtl:text-right">
            <h2 className="HeadingH1 bg-gradient-to-b from-white to-secondary inline-block text-transparent bg-clip-text mobile-setting-line">
              {hero.title}
            </h2>
            <p className="Text text-white tracking-wider py-8 mx-auto">
              {hero.description}
            </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default LervageHero;
