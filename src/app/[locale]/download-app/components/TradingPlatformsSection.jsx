"use client";

import Image from "next/image";

const platformGroups = [
  {
    title: "PC / MAC",
    items: ["MT4 for PC", "MT5 for PC"],
    icon: "desktop",
  },
  {
    title: "Smartphones",
    items: ["MT4 for Android", "MT4 for iPhone", "MT5 for Android", "MT5 for iPhone"],
    icon: "phone",
  },
  {
    title: "APK File",
    items: ["MT4 for Android", "MT5 for Android"],
    icon: "download",
  },
];

function DesktopIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v12" />
      <path d="M8 11l4 4 4-4" />
      <path d="M4 20h16" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M10.74.8c0 .64-.22 1.23-.65 1.76-.52.63-1.14.99-1.82.93-.04-.61.2-1.25.63-1.74.48-.55 1.17-.95 1.84-.95v0ZM12.67 8.3c.01 1.55 1.36 2.07 1.37 2.08-.01.04-.22.76-.73 1.5-.44.64-.9 1.27-1.62 1.28-.71.02-.94-.42-1.75-.42-.82 0-1.07.4-1.74.44-.69.03-1.22-.69-1.67-1.33-.92-1.33-1.63-3.75-.68-5.4.47-.82 1.31-1.34 2.22-1.36.69-.01 1.34.47 1.75.47.41 0 1.18-.58 1.99-.49.34.01 1.29.14 1.9 1.03-.05.03-1.13.66-1.12 2.2Z" />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.2 9h9.6c.66 0 1.2.54 1.2 1.2V18c0 .66-.54 1.2-1.2 1.2h-.6V22h-1.8v-2.8h-1.2V22h-1.8v-2.8H10.2V22H8.4v-2.8h-.6c-.66 0-1.2-.54-1.2-1.2v-7.8C6.6 9.54 7.14 9 7.8 9Zm1.4-4.07.86 1.49A6.74 6.74 0 0 1 12 6c.89 0 1.74.16 2.54.42l.86-1.49.78.45-.83 1.44A6.1 6.1 0 0 1 18 9H6a6.1 6.1 0 0 1 2.65-2.18l-.83-1.44.78-.45ZM9.5 8.1a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Zm5 0a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z" />
    </svg>
  );
}

function GroupIcon({ type }) {
  const common = "text-[#b68756]";
  if (type === "desktop") return <span className={common}><DesktopIcon /></span>;
  if (type === "phone") return <span className={common}><PhoneIcon /></span>;
  return <span className={common}><DownloadIcon /></span>;
}

function PlatformCard({ title, items, icon }) {
  return (
    <div className="h-full rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)] md:p-7">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b68756]/10">
          <GroupIcon type={icon} />
        </div>
        <h3 className="text-[22px] font-semibold text-primary">{title}</h3>
      </div>

      <ul className="space-y-3">
        {items.map((item, index) => {
          const isApple = item.toLowerCase().includes("iphone");
          const isAndroid = item.toLowerCase().includes("android");

          return (
            <li
              key={index}
              className="flex items-center justify-between rounded-xl border border-[#EEF2F7] bg-[#F8FAFC] px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-[#b68756]/20 hover:bg-[#fffaf5]"
            >
              <span>{item}</span>
              <span className="text-[#b68756]">
                {isApple ? <AppleIcon /> : isAndroid ? <AndroidIcon /> : null}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function TradingPlatformsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] py-16 md:py-20">
      <div className="pointer-events-none absolute left-[-80px] top-16 h-[220px] w-[220px] rounded-full bg-[#263788]/8 blur-3xl" />
      <div className="pointer-events-none absolute right-[-80px] bottom-10 h-[240px] w-[240px] rounded-full bg-[#b68756]/10 blur-3xl" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#b68756]/20 bg-[#b68756]/10 px-4 py-1.5 text-sm font-semibold text-[#b68756]">
            Trading Platforms
          </span>

          <h2 className="HeadingH2 my-4">
            Trade Anywhere, <span className="text-[#b68756]">Anytime</span>
          </h2>

          <p className="Text">
            Easily access our intuitive platforms from mobile, tablet, or desktop and enjoy seamless trading across global markets wherever you are.
          </p>
        </div>

        {/* Top 3 cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {platformGroups.map((group) => (
            <PlatformCard
              key={group.title}
              title={group.title}
              items={group.items}
              icon={group.icon}
            />
          ))}
        </div>

        {/* Bottom full-width app card */}
        <div className="mt-8 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#263788] via-[#1e2d7a] to-[#101638] p-8 text-white shadow-[0_18px_45px_rgba(38,55,136,0.18)] md:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left content */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#E5D0B2]">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#E5D0B2]">
                    GTC Go App
                  </p>
                  <h3 className="text-[28px] font-semibold md:text-[30px]">
                    Trade on the go with one powerful app
                  </h3>
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/85 md:text-base md:leading-8">
                Download now and access MT4 & MT5 compatible trading in one place.
                The all-in-one GTC app is built for traders who want speed, flexibility,
                and a smoother mobile trading experience.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Image
                  src="/whiteicon/appstore.svg"
                  alt="Download on the App Store"
                  width={150}
                  height={46}
                  className="h-auto w-auto"
                />
                <Image
                  src="/whiteicon/googleplay.svg"
                  alt="Get it on Google Play"
                  width={150}
                  height={46}
                  className="h-auto w-auto"
                />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white px-5 py-4">
                  <p className="text-sm font-semibold text-secondary">MT4 & MT5 Compatible</p>
                  <p className="mt-1 text-sm leading-6 text-primary">
                    Access trusted trading environments with mobile convenience.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white px-5 py-4">
                  <p className="text-sm font-semibold text-secondary">Built for flexibility</p>
                  <p className="mt-1 text-sm leading-6 text-primary">
                    Stay connected to markets and manage trades anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute h-[280px] w-[280px] rounded-full bg-white/10 blur-3xl" />
              <div className="relative w-full max-w-[460px]">
                <Image
                  src="/app/mobile-banner.webp"
                  alt="GTC App Mobile Preview"
                  width={460}
                  height={520}
                  className="h-auto w-full object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.25)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}