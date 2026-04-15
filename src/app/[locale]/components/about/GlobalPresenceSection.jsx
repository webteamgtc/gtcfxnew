"use client";

import { usePathTranslation } from "../../LocaleProvider";

function BuildingIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 10h.01" />
      <path d="M9 14h.01" />
      <path d="M15 10h.01" />
      <path d="M15 14h.01" />
      <path d="M11 21v-4h2v4" />
    </svg>
  );
}

function AffiliateCard({ item }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] md:p-7 ${
        item.fullWidth ? "md:col-span-2" : ""
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#263788] via-[#b68756] to-[#263788]" />

      <div className="flex items-center gap-3">
        <span className="text-[28px] leading-none">{item.flag}</span>
        <h3 className="HeadingH4">
          {item.country}
        </h3>
      </div>

   <div className="mt-5 inline-flex rounded-2xl bg-primary-gradient px-5 py-2">
  <p className="text-xs sm:text-sm font-light uppercase tracking-[0.04em] text-[#fff]">
    {item.entity}
  </p>
</div>

      <p className="mt-5 text-[15px] leading-7 text-[#4B5563] md:text-base md:leading-8">
        {item.description}
      </p>

      {item.website ? (
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-primary">Website:</span>
          <a
            href={`https://${item.website}`}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-[#2563EB] underline underline-offset-4 transition hover:text-[#1D4ED8]"
          >
            {item.website}
          </a>
        </div>
      ) : null}
    </div>
  );
}

export default function GlobalPresenceSection() {
  const t = usePathTranslation("about.gtc-regulations");

  const sectionTitle = t("title", "GTC Financial Group’s Presence Globally");
  const sectionDescription = t(
    "des",
    ""
  );
  const sectionSubtitle = t(
    "sub_title",
    ""
  );
  const sectionNotice = t(
    "notice",
    ""
  );

  const translatedAffiliates = [
    {
      country: t("regulation1_3", ""),
      entity: t("regulation1_1", ""),
      description: t("regulation1_4", ""),
    },
    {
      country: t("regulation1_3", ""),
      entity: t("regulation1_1", ""),
      description: t("regulationnew_4", ""),
    },
    {
      country: t("regulation5_3", ""),
      entity: t("regulation5_1", ""),
      description: `${t("regulation5_4", "")} ${t(
        "regulation5_5",
        ""
      )}`.trim(),
    },
    {
      country: t("regulation2_3", ""),
      entity: t("regulation2_1", ""),
      description: t("regulation2_4", ""),
    },
    {
      country: t("regulation3_3", ""),
      entity: t("regulation3_1", ""),
      description: t("regulation3_4", ""),
    },
    {
      country: t("regulation6_3", ""),
      entity: t("regulation6_1", ""),
      description: t("regulation6_4", ""),
    },
    {
      country: t("regulation4_3", ""),
      entity: t("regulation4_1", ""),
      description: t("regulation4_4", ""),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#fff] to-[#fff] py-10 md:py-16">
      <div className="container relative z-10">
        {/* Intro */}
        <div className="">
          <div className="mb-5 flex items-center gap-3 text-[#b68756]">
            <BuildingIcon />
            <h2 className="HeadingH3 text-primary">
              {sectionTitle}
            </h2>
          </div>

          <p className="text-[15px] leading-7 text-[#374151] md:text-[17px] md:leading-8">
            {sectionDescription}
          </p>

          <div className="mt-8 inline-flex rounded-xl border border-[#b68756]/20 bg-[#b68756]/10 px-5 py-2 text-sm font-semibold text-[#b68756] md:text-base">
            {sectionSubtitle}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {translatedAffiliates.map((item, index) => (
            <AffiliateCard key={index} item={item} />
          ))}
        </div>

        {/* Closing note */}
        <div className="mt-12  text-center">
          <p className="text-[15px] leading-7 text-[#4B5563] md:text-[17px] md:leading-8">
            {sectionNotice}
          </p>
        </div>
      </div>

      {/* background effects */}
      <div className="pointer-events-none absolute left-[-100px] top-20 h-[240px] w-[240px] rounded-xl bg-[#263788]/5 blur-3xl" />
      <div className="pointer-events-none absolute right-[-100px] bottom-20 h-[260px] w-[260px] rounded-xl bg-[#b68756]/10 blur-3xl" />
    </section>
  );
}