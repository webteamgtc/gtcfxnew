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
    <section className="py-20 bg-[#fff]">
      <div className="container">
        {/* Heading */}
        <div className="text-center flex flex-col items-center gap-8">
          <h2 className="HeadingH2">
            Invest with the World's <br className="hidden md:block" />
            Premier Online Trading Platform
          </h2>

          <p className="Text">
            Trade 27,000 financial products with the most stable platform,
            our MetaTrader Platform offers favorable spreads.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-[16px] p-6 border transition-all duration-300
                ${
                  item.highlight
                    ? "bg-[#eef2ff] border-[#c7d2fe]"
                    : "bg-[#F1F2F4] border-[#ececec] bg-op"
                }
                hover:bg-[#eef2ff] hover:border-[#c7d2fe] hover:shadow-[0_12px_30px_rgba(59,92,255,0.15)] hover:-translate-y-1
              `}
            >
              {/* Top Line */}
              <div className="mb-5 h-[2px] w-[40px] bg-primary transition-all duration-300 group-hover:w-[60px]" />

              {/* Tag */}
              <span className="bg-secondary text-[10px] md:text-xs rounded-full text-white px-3 h-7 py-1">
                {item.tag}
              </span>

              {/* Title */}
              <h3 className="mt-4 text-[20px] md:text-[22px] font-semibold text-[#2f2f2f] transition-colors duration-300 group-hover:text-[#1e2f99]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[14px] md:text-base text-primary leading-relaxed">
                {item.description}
              </p>

              {/* Badge (only for highlight) */}
              {item.highlight && (
                <span className="absolute top-4 right-4 text-[11px] px-3 py-1 rounded-full bg-[#3b5cff] text-white transition-transform duration-300 group-hover:scale-105">
                  New Offering
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}