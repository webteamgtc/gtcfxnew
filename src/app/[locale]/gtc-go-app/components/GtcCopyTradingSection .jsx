"use client";

import React from "react";
import Image from "next/image";
import { usePathTranslation } from "@/app/[locale]/LocaleProvider";

const GtcCopyTradingSection = () => {
  const t = usePathTranslation("gtcGoApp.copyTradingSection");

  return (
    <section
      className="relative py-14 md:py-16 bg-white"
      id="copy"
    >
      <div className="container grid gap-12 lg:grid-cols-2 items-center">
        
        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1 text-center lg:text-left space-y-6 max-w-xl">

          {/* Eyebrow */}
          <span className="inline-flex rounded-xl bg-[#b68756]/10 px-4 py-1.5 text-sm font-semibold text-[#b68756]">
          {t("badge")}
          </span>

          {/* Title */}
          <h2 className="HeadingH3">
            {t("titleLine1")}
            <span className="block text-secondary">
              {t("titleLine2")}
            </span>
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-slate-600 leading-7">
            {t("description")}
          </p>

          {/* FEATURES */}
          <ul className="space-y-4 text-sm md:text-base text-slate-700">
            
            {[
              t("points.point1"),
              t("points.point2"),
              t("points.point3"),
              t("points.point4"),
              t("points.point5"),
              t("points.point6"),
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                
                {/* Premium bullet */}
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-xl bg-gradient-to-r from-[#293794] to-[#000021] text-white text-xs">
                  ✓
                </span>

                <span>{item}</span>
              </li>
            ))}

          </ul>

          {/* CTA */}
          <div className="pt-3">
            <button
              onClick={() => {
                document.getElementById("hero")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="inline-flex items-center px-7 py-3 rounded-xl bg-gradient-to-r from-[#293794] to-[#000021] text-white text-sm md:text-base font-semibold shadow-lg shadow-blue-200/40 hover:scale-[1.02] hover:opacity-90 transition"
            >
              {t("cta")}
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
          
          {/* Glow Background */}
          <div className="absolute right-0 top-10 h-[520px] w-[520px] rounded-xl bg-gradient-to-br from-[#e8eefc] via-[#b8c6e0] to-[#9aa7c0] opacity-60 blur-[60px] hidden sm:block" />

          {/* Image */}
          <div className="relative w-full h-[320px] sm:h-[480px] lg:h-[600px]">
            <Image
              src="/app/capy.webp"
              alt="Copy Trading App"
              fill
              className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default GtcCopyTradingSection;