"use client";

import React from "react";
import Image from "next/image";
import { usePathTranslation } from "@/app/[locale]/LocaleProvider";

const GtcFeatureSection = () => {
  const t = usePathTranslation("gtcGoApp.featureSection");

  const numberBox =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#293794] to-[#000021] text-white text-sm font-semibold shadow-md shadow-blue-200/30 md:h-12 md:w-12 md:text-base";

  return (
    <section className="relative py-12 md:py-14 bg-[#f8f8f8] overflow-hidden border-t border-slate-200 border-b" id="trading">
      <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        
        {/* LEFT: Image */}
        <div className="relative order-1 flex justify-center lg:justify-start">
          
          {/* Background Gradient Circle */}
          <div
            className="
              absolute left-0 top-10 hidden
              h-[320px] w-[320px]
              md:h-[420px] md:w-[420px]
              lg:h-[520px] lg:w-[520px]
              rounded-full
              bg-gradient-to-br from-[#e8eefc] via-[#b8c6e0] to-[#9aa7c0]
              opacity-60 blur-[50px]
              sm:block
            "
          />

          {/* Image */}
          <div className="relative h-[320px] w-full max-w-[500px] sm:h-[420px] lg:h-[600px]">
            <Image
              src="/app/feature-app.webp"
              alt="GTC GO app mockup"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="order-2 space-y-5 text-center ltr:lg:text-left rtl:lg:text-right lg:space-y-4">
          
       <span className="inline-flex rounded-full bg-[#b68756]/10 px-4 py-1.5 text-sm font-semibold text-[#b68756]">
          {t("badge")}
          </span>


          {/* Title */}
          <h2 className="HeadingH3 max-w-lg">
            {t("titlePrefix")}{" "}
            <span className="text-[#b68756]">
              {t("titleHighlight")}
            </span>{" "}
            {t("titleSuffix")}
          </h2>

          {/* Description */}
          <p className="Text">
            {t("description")}
          </p>

          {/* Features */}
          <div className="mx-auto max-w-xl space-y-4 lg:mx-0 pt-5">

            {/* Item 1 */}
            <div className="flex items-start gap-4">
              <div className={numberBox}>01</div>
              <div className="space-y-1 text-left">
                <p className="text-sm font-semibold text-slate-900 sm:text-base">
                  {t("items.item1.title")}
                </p>
                <p className="text-xs leading-6 text-slate-600 sm:text-sm">
                  {t("items.item1.description")}
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4">
              <div className={numberBox}>02</div>
              <div className="space-y-1 text-left">
                <p className="text-sm font-semibold text-slate-900 sm:text-base">
                  {t("items.item2.title")}
                </p>
                <p className="text-xs leading-6 text-slate-600 sm:text-sm">
                  {t("items.item2.description")}
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4">
              <div className={numberBox}>03</div>
              <div className="space-y-1 text-left">
                <p className="text-sm font-semibold text-slate-900 sm:text-base">
                  {t("items.item3.title")}
                </p>
                <p className="text-xs leading-6 text-slate-600 sm:text-sm">
                  {t("items.item3.description")}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GtcFeatureSection;