"use client";

import React from "react";
import Image from "next/image";
import MobileAppDownloadBanner from "./MobileAppDownloadBanner";
import { usePathTranslation } from "@/app/[locale]/LocaleProvider";

const GtcHero = ({
  backgroundImage = "/app/banner-app.webp",
}) => {
  const t = usePathTranslation("gtcGoApp.hero");

  return (
    <section
      id="hero"
      className="relative overflow-hidden  pt-12 md:pt-20"
      style={{
        backgroundImage: backgroundImage ? `url('${backgroundImage}')` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
   
      <div className="container relative z-10 grid  gap-10 lg:grid-cols-2  min-h-[80vh] items-center">
        {/* RIGHT SIDE (APP MOCKUP) – MOBILE FIRST */}
        <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
          {/* Background Gradient Circle (desktop / tablet only) */}
          <div
            className="
              absolute right-0 top-10 hidden h-[520px] w-[520px]
              rounded-xl bg-gradient-to-br
              from-[#e8eefc] via-[#b8c6e0] to-[#9aa7c0]
              opacity-60 blur-[50px] sm:block
            "
          />

          {/* Phone Image */}
          <div className="relative h-[320px] w-full sm:h-[480px] lg:h-[600px]">
            <Image
              src="/app/mobile-banner.webp"
              alt="GTC GO app mockup"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* LEFT CONTENT */}
        <div className="order-2 flex flex-col items-center space-y-4 text-center ltr:lg:text-left rtl:lg:text-right lg:order-1 lg:items-start">
          {/* Eyebrow text */}
          <p className="max-w-[300px] text-sm font-medium uppercase text-secondary md:max-w-full md:text-base">
            {t(
              "eyebrow",
            )}
          </p>

          {/* Heading */}
          <h2 className="HeadingH2 text-white">
            {t("titlePrefix")}{" "}
            <span className="text-secondary">
              {t("titleHighlight")}
            </span>{" "}
            {t("titleSuffix")}
          </h2>

          {/* Description */}
          <p className="Text text-white">
            {t(
              "description",
            )}
          </p>

          {/* QR CODE */}
          <div className="relative hidden h-[160px] w-[160px] md:block">
            <Image
              src="/app/qrcode.webp"
              alt={t("qrAlt")}
              fill
              className="object-contain"
            />
          </div>

          {/* iOS / Android label */}
          <div className="mt-3 hidden md:flex items-center justify-center gap-4 lg:justify-start">
            <span className="rounded-xl border border-primary/30 px-4 py-1 text-sm text-white lg:text-base">
            {t("availability")}
            </span>
          </div>

          <MobileAppDownloadBanner
            androidLink="https://play.google.com/store/search?q=GTC%20Go&c=apps&hl=en"
            iosLink="https://apps.apple.com/ae/app/gtc-go/id6753007277"
          />
        </div>
      </div>
    </section>
  );
};

export default GtcHero;