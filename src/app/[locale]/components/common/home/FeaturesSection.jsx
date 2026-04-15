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

function FeatureCard({ item, index, mobile = false }) {
  const surface = mobile
    ? "bg-white border-[#ececec] shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
    : [
        item.highlight
          ? "bg-[#eef2ff] border-[#c7d2fe]"
          : "bg-[#F1F2F4] border-[#ececec]",
        "hover:bg-[#eef2ff] hover:border-[#c7d2fe] hover:shadow-[0_12px_30px_rgba(59,92,255,0.15)] hover:-translate-y-1",
      ].join(" ");

  const Icon = item.icon;

  return (
    <div
      className={`group relative rounded-[14px] md:rounded-[10px] p-8  border transition-all duration-300 ${surface}`}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex items-center rounded-xl bg-secondary px-3 py-1 text-[10px] text-white transition-all duration-300 md:text-xs group-hover:bg-primary">
          {item.tag}
        </span>

        <div className="text-[#A3A3A3] transition-all duration-300 group-hover:text-secondary group-hover:scale-110">
          <Icon className="h-5 w-5 md:h-6 md:w-6" />
        </div>
      </div>

      <h3 className="mt-5 text-[20px] font-semibold text-primary transition-colors duration-300 group-hover:text-[#1e2f99] md:text-[22px]">
        {item.title}
      </h3>

      <p className="mt-3 text-[14px] leading-relaxed text-[#4B5563] md:text-base">
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
  const features = [
    {
      tag: "Spread",
      title: "Tightest Spread",
      description:
        "Offering the industry's tightest Spread, from 0 pips on FX & 5 cents on Gold",
      icon: RiExchangeDollarLine,
      badge: false,
    },
    {
      tag: "Leverage",
      title: "Best Leverage",
      description:
        "Trade with leverage up to 1:2000 and low margin requirements from 0.1%.",
      icon: RiBarChartBoxLine,
      badge: false,
      highlight: false,
    },
    {
      tag: "Instrument",
      title: "Trading Instrument",
      description:
        "Access to over 27,000 instruments across seven trading markets",
      icon: RiLineChartLine,
      badge: false,
    },
    {
      tag: "Execution",
      title: "Ultra-fast Execution",
      description:
        "Trade with top-tier liquidity for fast, secure execution in just 10ms.",
      icon: RiFlashlightLine,
      badge: false,
    },
    {
      tag: "Flexible Trading",
      title: "Dynamic Leverage",
      description:
        "Dynamic leverage at GTCFX automatically adjusts based on your trading positions.",
      icon: RiSettings3Line,
    },
    {
      tag: "Client Support",
      title: "24/7 Global Support",
      description:
        "24/7 multilingual support for traders worldwide, whenever you need it.",
      icon: RiCustomerService2Line,
    },
  ];

  return (
    <section className="bg-[#fff] py-10 md:py-14">
      <div className="container">
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="HeadingH2 text-primary">
            Invest with the World's <br className="hidden md:block" />
            <span className="text-secondary">Premier Online Trading</span> Platform
          </h2>

          <p className="Text">
            Trade 27,000 financial products with the most stable platform, our
            MetaTrader Platform offers favorable spreads.
          </p>
        </div>

        <div className="mt-6 hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-3">
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

        <div className="mt-5 flex justify-center md:mt-8">
          <PrimaryButton href="/register">Open Live Account</PrimaryButton>
        </div>
      </div>
    </section>
  );
}