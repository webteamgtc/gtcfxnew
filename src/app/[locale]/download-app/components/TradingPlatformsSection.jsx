"use client";

import Image from "next/image";
import { usePathTranslation } from "@/app/[locale]/LocaleProvider";

function DesktopIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M12 3v12" />
      <path d="M8 11l4 4 4-4" />
      <path d="M4 20h16" />
    </svg>
  );
}

function AppleIcon() {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="46" height="46" viewBox="0 0 48 48">
<path fill="#42A5F5" d="M40.084,32.613c-0.848,1.835-1.254,2.655-2.342,4.274c-1.521,2.264-3.67,5.089-6.326,5.109c-2.361,0.018-2.971-1.507-6.176-1.482c-3.204,0.016-3.872,1.51-6.237,1.484c-2.654-0.022-4.688-2.568-6.21-4.826c-4.259-6.34-4.707-13.768-2.076-17.721c1.861-2.803,4.807-4.449,7.572-4.449c2.817,0,4.588,1.514,6.916,1.514c2.262,0,3.638-1.517,6.896-1.517c2.464,0,5.07,1.313,6.931,3.575C32.942,21.836,33.931,30.337,40.084,32.613z"></path><path fill="#42A5F5" d="M30.046,12.072c1.269-1.577,2.232-3.804,1.882-6.072c-2.069,0.138-4.491,1.418-5.905,3.075c-1.282,1.51-2.345,3.752-1.931,5.922C26.351,15.066,28.689,13.764,30.046,12.072z"></path><path fill="#1E88E5" d="M36.736,20.421C28,30.001,20,21.001,9.228,27.842c0.375,3.027,1.53,6.303,3.565,9.331c1.521,2.258,3.556,4.804,6.21,4.826c2.365,0.025,3.033-1.469,6.237-1.484c3.205-0.024,3.814,1.5,6.176,1.482c2.656-0.021,4.805-2.846,6.326-5.109c1.088-1.619,1.494-2.439,2.342-4.274C34.878,30.688,33.389,24.314,36.736,20.421z"></path>
</svg>
  );
}

function AndroidIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="46" height="46" viewBox="0 0 48 48">
<path fill="#7cb342" d="M12 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM40 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM22 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40zM30 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40z"></path><path fill="#7cb342" d="M14 18v15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V18H14zM24 8c-6 0-9.7 3.6-10 8h20C33.7 11.6 30 8 24 8zM20 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C21 13.1 20.6 13.6 20 13.6zM28 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C29 13.1 28.6 13.6 28 13.6z"></path><path fill="#7cb342" d="M28.3 10.5c-.2 0-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l1.7-2.5c.3-.5.9-.6 1.4-.3.5.3.6.9.3 1.4l-1.7 2.5C29 10.3 28.7 10.5 28.3 10.5zM19.3 10.1c-.3 0-.7-.2-.8-.5l-1.3-2.1c-.3-.5-.2-1.1.3-1.4.5-.3 1.1-.2 1.4.3l1.3 2.1c.3.5.2 1.1-.3 1.4C19.7 10 19.5 10.1 19.3 10.1z"></path>
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
  const t = usePathTranslation("downApp.section");
  const platformGroups = [
    {
      title: t("groups.pcMac.title"),
      items: [
        t("groups.pcMac.items.one"),
        t("groups.pcMac.items.two"),
      ],
      icon: "desktop",
    },
    {
      title: t("groups.smartphones.title"),
      items: [
        t("groups.smartphones.items.one"),
        t("groups.smartphones.items.two"),
        t("groups.smartphones.items.three"),
        t("groups.smartphones.items.four"),
      ],
      icon: "phone",
    },
    {
      title: t("groups.apkFile.title"),
      items: [
        t("groups.apkFile.items.one"),
        t("groups.apkFile.items.two"),
      ],
      icon: "download",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] py-16 md:py-20">
      <div className="pointer-events-none absolute left-[-80px] top-16 h-[220px] w-[220px] rounded-xl bg-[#263788]/8 blur-3xl" />
      <div className="pointer-events-none absolute right-[-80px] bottom-10 h-[240px] w-[240px] rounded-xl bg-[#b68756]/10 blur-3xl" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-xl border border-[#b68756]/20 bg-[#b68756]/10 px-4 py-1.5 text-sm font-semibold text-[#b68756]">
            {t("badge")}
          </span>

          <h2 className="HeadingH2 my-4">
            {t("titleStart")}{" "}
            <span className="text-[#b68756]">{t("titleHighlight")}</span>
          </h2>

          <p className="Text">
            {t("description")}
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
                    {t("appCard.eyebrow")}
                  </p>
                  <h3 className="text-[28px] font-semibold md:text-[30px]">
                    {t("appCard.title")}
                  </h3>
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/85 md:text-base md:leading-8">
                {t("appCard.description")}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Image
                  src="/whiteicon/appstore.svg"
                  alt={t("appCard.storeButtons.appStoreAlt")}
                  width={150}
                  height={46}
                  className="h-auto w-auto"
                />
                <Image
                  src="/whiteicon/googleplay.svg"
                  alt={t("appCard.storeButtons.googlePlayAlt")}
                  width={150}
                  height={46}
                  className="h-auto w-auto"
                />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white px-5 py-4">
                  <p className="text-sm font-semibold text-secondary">
                    {t("appCard.featureOne.title")}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-primary">
                    {t("appCard.featureOne.description")}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white px-5 py-4">
                  <p className="text-sm font-semibold text-secondary">
                    {t("appCard.featureTwo.title")}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-primary">
                    {t("appCard.featureTwo.description")}
                  </p>
                </div>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute h-[280px] w-[280px] rounded-xl bg-white/10 blur-3xl" />
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