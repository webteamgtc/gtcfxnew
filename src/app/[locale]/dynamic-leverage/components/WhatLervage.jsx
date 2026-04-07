'use client';
import React from 'react';
import Image from 'next/image';
// import LiveAccountButton from '../liveAccountButton';

const WhatLervage = ({ copy }) => {
  const w = copy?.whatLervage || {};
  const details = [
    w?.leverageDetails?.one,
    w?.leverageDetails?.two,
    w?.leverageDetails?.three,
    w?.leverageDetails?.five,
    w?.leverageDetails?.six
  ];

  const examples = [
    w?.exampleDetails?.one,
    w?.exampleDetails?.two,
  ];

  return (
    <section className="md:py-16 3xl:py-16 py-8 bg-gradient-to-b from-slate-50 via-gray-300 to-zinc-50 border-b border-gray-300">
      <div className="container">
        <div className="relative text-center">
          <h2 className="HeadingH2 capitalize">
             {w.title}
          </h2>
          <p className="Text mt-3 text-center max-w-5xl mx-auto">{w.description}</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4 pt-10">
          <div className="basis-full md:basis-1/5 flex flex-col gap-6 md:gap-16 justify-center items-center">
            <div className="ltr:text-left rtl:text-right flex flex-col items-start justify-start gap-3 md:w-96">
              <button className="TextSmall bg-primary rounded-full text-white px-3 h-6">
              {w.boostTrades}
              </button>
              <h3 className="HeadingH4 bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text m-0 p-0 justify-center gap-2 items-center py-2">
              {w.leverage}
              </h3>
              <p className="Text text-primary m-0">
              {w.leverageDescription}
              </p>
              <ul className="TextSmall leading-8 list-disc pl-4 text-primary">
                {details.filter(Boolean).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hidden md:block md:basis-4/5 relative w-full h-64 md:h-[600px]">
            <Image
              src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/images/gtcmtd/phone2.webp"
              alt="Invest with GTC"
              fill
              className="object-contain"
            />
          </div>
          <div className="basis-full md:basis-1/5 flex flex-col gap-6 md:gap-16 justify-center items-center">
            <div className="ltr:text-left rtl:text-right flex flex-col items-start justify-start gap-3 md:w-96">
              <button className="TextSmall bg-primary rounded-full text-white px-3 h-6">
              {w.scaleTrades}
              </button>
              <h3 className="HeadingH4 bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text m-0 p-0 justify-center gap-2 items-center py-2">
              {w.dynamicLeverageTiers}
              </h3>
              <p className="Text text-primary m-0">
              {w.tiersDescription}              </p>
              <p className="TextButton text-left text-primary">{w.example}</p>
              <ul className="TextSmall leading-7 list-disc pl-4 text-primary">
                {examples.filter(Boolean).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="container text-primary flex flex-col justify-center items-center py-4 pt-16 gap-2 md:gap-4">
          <p className="TextSmall text-center italic">
          {w.disclaimer}
          </p>
          {/* <LiveAccountButton hoverStyle="bg-primary text-white hover:bg-secondary" /> */}
        </div>
      </div>
    </section>
  );
};

export default WhatLervage;
