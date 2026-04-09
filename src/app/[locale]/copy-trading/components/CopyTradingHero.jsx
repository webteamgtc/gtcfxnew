"use client";

import Image from "next/image";

export default function CopyTradingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EEF4FF] via-white to-[#F8FAFC] py-16 md:py-20 lg:py-24">
      {/* glow */}
      <div className="pointer-events-none absolute left-[-100px] top-10 h-[260px] w-[260px] rounded-full bg-[#263788]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-120px] bottom-0 h-[280px] w-[280px] rounded-full bg-[#b68756]/10 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <span className="inline-flex rounded-full border border-[#b68756]/20 bg-[#b68756]/10 px-4 py-1.5 text-sm font-semibold text-[#b68756]">
              Copy Trading
            </span>

            <h2 className="HeadingH2 mt-4 text-primary">
              Copy Trading Made
              <span className="block text-[#b68756]">Simple & Smarter</span>
            </h2>

            <p className="Text pt-5">
              Follow top-performing traders, copy their strategies automatically,
              and stay in control of your funds with a more flexible and transparent
              copy trading experience.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="/account/live"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#263788] px-7 text-sm font-semibold text-white transition hover:opacity-90 md:text-base"
              >
                Start Copy Trading
              </a>

              <a
                href="#copy-traders"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#D1D5DB] bg-white px-7 text-sm font-semibold text-primary transition hover:bg-[#F8FAFC] md:text-base"
              >
                Explore Traders
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-[#6B7280] lg:justify-start">
              <span>Automatic trade replication</span>
              <span>Transparent performance</span>
              <span>Mobile + web access</span>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute top-10 h-[380px] w-[380px] rounded-full bg-gradient-to-br from-[#263788]/10 to-[#b68756]/10 blur-3xl" />

            <div className="relative w-full max-w-[620px]">
              <Image
                src="/copy-trading/hero-map.webp"
                alt="Copy trading global network"
                width={620}
                height={480}
                className="h-auto w-full object-contain"
              />

              {/* floating stat cards */}
              <div className="absolute left-[2%] top-[12%] hidden rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur md:block">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#b68756]">
                  Top Strategy
                </p>
                <p className="mt-1 text-lg font-bold text-primary">+62.07%</p>
              </div>

              <div className="absolute right-[3%] top-[30%] hidden rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur md:block">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#b68756]">
                  Copied Trades
                </p>
                <p className="mt-1 text-lg font-bold text-primary">Global Network</p>
              </div>

              <div className="absolute bottom-[8%] left-[12%] hidden rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur md:block">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#b68756]">
                  Popular Picks
                </p>
                <p className="mt-1 text-lg font-bold text-primary">24/7 Access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}