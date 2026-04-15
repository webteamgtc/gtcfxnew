import Image from "next/image";
import React from "react";
import { TiTick } from "react-icons/ti";
import PlatformsSection from "../home2/PlatformsSection";

function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 flex-shrink-0 text-[#16A34A]">
        <TiTick size={22} />
      </span>
      <span className="Text text-[#1F2937]">{children}</span>
    </li>
  );
}

function FeatureBlock({ title, items }) {
  return (
    <div className="relative rounded-[28px] border border-[#E5E7EB] bg-[#F1F2F4] p-6 shadow-sm backdrop-blur-sm md:p-8">
      <h3 className="HeadingH4">{title}</h3>

      <ul className="mt-6 space-y-4">
        {items.filter(Boolean).map((item, index) => (
          <CheckItem key={index}>{item}</CheckItem>
        ))}
      </ul>
    </div>
  );
}

export default function PlatformAdvantages({
  copy,
  imageSrc,
  imageAlt = "platform on Mobile Image",
}) {
  const t = (path, fallback = "") => {
    const value = String(path)
      .split(".")
      .reduce((acc, key) => (acc && typeof acc === "object" ? acc[key] : undefined), copy);
    return typeof value === "string" && value.length ? value : fallback;
  };

  const advantagesCol1 = [
    t("advantages.column1.heading1"),
    t("advantages.column1.heading2"),
    t("advantages.column1.heading3"),
    t("advantages.column1.heading4"),
    t("advantages.column1.heading5"),
    t("advantages.column1.heading6"),
    t("advantages.column1.heading7"),
    t("advantages.column1.heading8"),
  ];

  const advantagesCol2 = [
    t("advantages.column2.heading1"),
    t("advantages.column2.heading2"),
    t("advantages.column2.heading3"),
    t("advantages.column2.heading4"),
    t("advantages.column2.heading5"),
    t("advantages.column2.heading6"),
    t("advantages.column2.heading7"),
    t("advantages.column2.heading8"),
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-10 md:py-16">
      <div className=" relative z-10">
        <div className="grid grid-cols-1 container items-center gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h1 className="HeadingH2 text-primary">{t("bannerText.heading")}</h1>
            <p className="Text text-[#374151]">{t("bannerText.para1")}</p>
            <p className="Text text-[#374151]">{t("bannerText.para2")}</p>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <Image
              src={imageSrc}
              width={520}
              height={420}
              alt={imageAlt}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <PlatformsSection/>

        <div className="relative container mt-14">
          <div className="pointer-events-none absolute inset-0 hidden items-center justify-center lg:flex">
            <div className="h-[420px] w-[420px] rounded-xl bg-[#b68756]/5 blur-3xl" />
          </div>

          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
            <FeatureBlock title={t("advantages.title")} items={advantagesCol1} />
            <FeatureBlock title={t("advantages.title")} items={advantagesCol2} />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-[-120px] top-20 h-[260px] w-[260px] rounded-xl bg-[#263788]/5 blur-3xl" />
      <div className="pointer-events-none absolute right-[-120px] bottom-10 h-[280px] w-[280px] rounded-xl bg-[#b68756]/10 blur-3xl" />
    </section>
  );
}

