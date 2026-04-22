"use client";
import {
  RiExchangeDollarLine,
  RiBarChartBoxLine,
  RiLineChartLine,
  RiFlashlightLine,
  RiSettings3Line,
  RiCustomerService2Line,
} from "react-icons/ri";

import MobilePeekCarousel from "../MobilePeekCarousel";
import PrimaryButton from "../PrimaryButton";
import { usePathTranslation } from "../../../LocaleProvider";

function FeatureCard({ item, index, mobile = false }) {
  const surface = mobile
    ? "bg-white border-[#ececec] shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
    : [
        item.highlight
          ? "bg-[#eef2ff] border-[#c7d2fe]"
          : "bg-[#fff] border-[#ececec] shadow-[0_6px_20px_rgba(0,0,0,0.08)]",
        "hover:bg-[#eef2ff] hover:border-[#c7d2fe] hover:shadow-[0_12px_30px_rgba(59,92,255,0.15)] hover:-translate-y-1",
      ].join(" ");

  const Icon = item.icon;

  return (
    <div
      className={`group relative rounded-[14px] md:rounded-[10px] p-4 md:p-5 2xl:p-8  border transition-all duration-300 ${surface}`}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex gap-4 items-center rounded-xl bg-secondary px-3 py-1 text-[10px] text-white transition-all duration-300 md:text-xs group-hover:bg-primary">
           <Icon className="h-3 w-3 md:h-4 md:w-4" /> {item.tag}
        </span>

        <div className="text-[#A3A3A3] transition-all duration-300 group-hover:text-secondary group-hover:scale-110">
         
        </div>
      </div>

      <h3 className="mt-5 text-[16px] font-semibold text-primary transition-colors duration-300 group-hover:text-[#1e2f99] md:text-[18px]  4xl:text-[20px]">
        {item.title}
      </h3>

      <p className="mt-3 text-[14px] leading-relaxed text-[#4B5563] md:text-sm xl:text-base">
        {item.description}
      </p>

      {item.highlight && (
        <span className="absolute right-4 top-4 rounded-xl bg-[#3b5cff] px-3 py-1 text-[11px] text-white transition-transform duration-300 group-hover:scale-105">
          New Offering
        </span>
      )}
    </div>
  );
}

export default function FeaturesSection() {
  const t = usePathTranslation("home.invest");
  const features = [
    {
      tag: t("items.one.tag"),
      title: t("items.one.title"),
      description: t("items.one.description"),
      icon: RiExchangeDollarLine,
      badge: false,
    },
    {
      tag: t("items.two.tag"),
      title: t("items.two.title"),
      description: t("items.two.description"),
      icon: RiBarChartBoxLine,
      badge: false,
      highlight: false,
    },
    {
      tag: t("items.three.tag"),
      title: t("items.three.title"),
      description: t("items.three.description"),
      icon: RiLineChartLine,
      badge: false,
    },
    {
      tag: t("items.four.tag"),
      title: t("items.four.title"),
      description: t("items.four.description"),
      icon: RiFlashlightLine,
      badge: false,
    },
    {
      tag: t("items.five.tag"),
      title: t("items.five.title"),
      description: t("items.five.description"),
      icon: RiSettings3Line,
    },
    {
      tag: t("items.six.tag"),
      title: t("items.six.title"),
      description: t("items.six.description"),
      icon: RiCustomerService2Line,
    },
  ];

  return (
    <section className="bg-[#fff] py-10 md:py-14">
      <div className="container">
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="HeadingH2 text-primary">
            {t("titleLine1")}{" "}
            <br className="hidden md:block" />
            <span className="text-secondary">
              {t("titleHighlight")}
            </span>{" "}
            {t("titleLine2")}
          </h2>

          <p className="Text">
            {t("description")}
          </p>
        </div>

        <div className="mt-6 hidden gap-6 md:grid md:grid-cols-3 xl:grid-cols-3">
          {features.map((item, index) => (
            <FeatureCard key={index} item={item} index={index} />
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <MobilePeekCarousel
            items={features}
            trackClassName="-mx-4 px-4"
            renderItem={(item, index) => (
              <FeatureCard item={item} index={index} mobile />
            )}
          />
        </div>
        <div className="flex justify-center mt-5 md:mt-8">
          <PrimaryButton href="/register">
            {t("cta")}
          </PrimaryButton>
        </div>
        
      </div>
    </section>
  );
}