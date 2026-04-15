"use client";

const items = [
  {
    number: "01",
    title: "Choose a trader",
    desc: "Browse trader profiles, review performance, and select the strategy that matches your goals.",
  },
  {
    number: "02",
    title: "Copy automatically",
    desc: "Once connected, trades can be replicated automatically without needing to manage each move manually.",
  },
  {
    number: "03",
    title: "Monitor and control",
    desc: "Track results, manage your allocations, and stay flexible with full visibility over your account.",
  },
];

export default function WhatIsCopyTradingSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-xl border border-[#b68756]/20 bg-[#b68756]/10 px-4 py-1.5 text-sm font-semibold text-[#b68756]">
            What Is Copy Trading
          </span>

          <h2 className="HeadingH3 mt-4 text-primary">
            Follow Strategies. <span className="text-[#b68756]">Stay in Control.</span>
          </h2>

          <p className="mt-5 text-[15px] leading-7 text-[#4B5563] md:text-lg md:leading-8">
            Copy trading allows you to follow experienced traders and automatically
            mirror their trades. It offers a simpler way to participate in the markets
            while maintaining visibility and control over your capital.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.number}
              className="group rounded-[28px] border border-[#E5E7EB] bg-[#F8FAFC] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] md:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#263788]/10 text-sm font-bold text-[#263788]">
                {item.number}
              </div>

              <h3 className="mt-5 text-[22px] font-semibold text-primary">
                {item.title}
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-[#4B5563]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}