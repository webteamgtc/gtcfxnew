"use client";
import MobilePeekCarousel from "../MobilePeekCarousel";
import PrimaryButton from "../PrimaryButton";

function FeatureCard({ item, index, mobile = false }) {
  const surface = mobile
    ? "bg-white border-[#ececec] shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
    : [
        item.highlight
          ? "bg-[#eef2ff] border-[#c7d2fe]"
          : "bg-[#F1F2F4] border-[#ececec] bg-op",
        "hover:bg-[#eef2ff] hover:border-[#c7d2fe] hover:shadow-[0_12px_30px_rgba(59,92,255,0.15)] hover:-translate-y-1",
      ].join(" ");

  return (
    <div
      className={`group relative rounded-[14px] md:rounded-[16px] p-6 border transition-all duration-300 ${surface}`}
    >
      <div className="mb-5 h-[2px] w-[40px] bg-primary transition-all duration-300 group-hover:w-[60px]" />

      <span className="bg-secondary text-[10px] md:text-xs rounded-full text-white px-3 h-7 py-1">
        {item.tag}
      </span>

      <h3 className="mt-4 text-[20px] md:text-[22px] font-semibold text-[#2f2f2f] transition-colors duration-300 group-hover:text-[#1e2f99]">
        {item.title}
      </h3>

      <p className="mt-3 text-[14px] md:text-base text-primary leading-relaxed">
        {item.description}
      </p>

      {item.highlight && (
        <span className="absolute top-4 right-4 text-[11px] px-3 py-1 rounded-full bg-[#3b5cff] text-white transition-transform duration-300 group-hover:scale-105">
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
      badge: false,
    },
    {
      tag: "Leverage",
      title: "Best Leverage",
      description:
        "Providing the highest leverage, up to 1:2000, with minimal margin requirements starting from 0.1%",
      badge: false,
    },
    {
      tag: "Instrument",
      title: "Trading Instrument",
      description:
        "Access to over 27,000 instruments across seven trading markets",
      badge: false,
    },
    {
      tag: "Execution",
      title: "Ultra-fast Execution",
      description:
        "Trade with top-tier liquidity for fast, secure execution in just 10ms.",
      badge: false,
    },
    {
      tag: "Flexible Trading",
      title: "Dynamic Leverage",
      description:
        "Dynamic leverage at GTCFX automatically adjusts based on your trading positions.",
    },
    {
      tag: "Client Support",
      title: "24/7 Global Support",
      description:
        "24/7 multilingual support for traders worldwide, whenever you need it.",
    },
  ];

  return (
    <section className="py-10 md:py-14 bg-[#fff]">
      <div className="container">
        <div className="text-center flex flex-col items-center gap-8">
          <h2 className="HeadingH2">
            Invest with the World's <br className="hidden md:block" />
            Premier Online Trading Platform
          </h2>

          <p className="Text">
            Trade 27,000 financial products with the most stable platform, our
            MetaTrader Platform offers favorable spreads.
          </p>
        </div>

        <div className="mt-14 hidden md:grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
<div className="flex justify-center mt-5 md:mt-0"><PrimaryButton href="/register">
  Open Live Account
</PrimaryButton></div>
        
      </div>
    </section>
  );
}
