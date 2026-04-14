"use client";

import { usePathTranslation } from "../../LocaleProvider";

function RegionCard({ title, countries }) {
  return (
    <div className="group rounded-[28px] border border-[#E5E7EB] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)] md:p-7">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="HeadingH4">
          {title}
        </h3>
        <span className="h-3 w-3 rounded-full bg-[#b68756] shadow-[0_0_0_6px_rgba(182,135,86,0.12)]" />
      </div>

      <div className="flex flex-wrap gap-3">
        {countries.map((country, index) => (
          <span
            key={index}
            className="inline-flex rounded-full border border-[#b68756]/20 bg-[#b68756]/10 px-4 py-2 text-sm font-medium text-[#8B5E34] transition group-hover:border-[#b68756]/30 group-hover:bg-[#b68756]/15"
          >
            {country}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function GlobalPresenceMapSection() {
  const t = usePathTranslation("about.global-presence-map");

  const regions = [
    {
      title: t("regions.middleEast", "Middle East"),
      countries: [
        t("countries.unitedArabEmirates", "United Arab Emirates"),
        t("countries.cyprus", "Cyprus"),
        t("countries.jordan", "Jordan"),
        t("countries.ksa", "KSA"),
      ],
    },
    {
      title: t("regions.europe", "Europe"),
      countries: [
        t("countries.unitedKingdom", "United Kingdom"),
        t("countries.turkey", "Turkey"),
      ],
    },
    {
      title: t("regions.asia", "Asia"),
      countries: [
        t("countries.china", "China"),
        t("countries.hongKong", "Hong Kong"),
        t("countries.india", "India"),
        t("countries.pakistan", "Pakistan"),
        t("countries.thailand", "Thailand"),
        t("countries.vietnam", "Vietnam"),
        t("countries.malaysia", "Malaysia"),
        t("countries.philippines", "Philippines"),
        t("countries.indonesia", "Indonesia"),
      ],
    },
    {
      title: t("regions.africa", "Africa"),
      countries: [
        t("countries.southAfrica", "South Africa"),
        t("countries.nigeria", "Nigeria"),
        t("countries.mauritius", "Mauritius"),
      ],
    },
    {
      title: t("regions.oceania", "Oceania"),
      countries: [
        t("countries.australia", "Australia"),
        t("countries.vanuatu", "Vanuatu"),
      ],
    },
    {
      title: t("regions.americas", "Americas"),
      countries: [
        t("countries.usa", "USA"),
        t("countries.mexico", "Mexico"),
        t("countries.chile", "Chile"),
      ],
    },
  ];

  const stats = [
    { value: "22+", label: t("stats.destinations", "Destinations") },
    { value: "100+", label: t("stats.countriesReached", "Countries Reached") },
    { value: "985,000+", label: t("stats.clientsServed", "Clients Served") },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#fff] to-[#fff] py-10 md:py-16">
      <div className="container relative z-10">
        {/* Intro */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-[#b68756]/20 bg-[#b68756]/10 px-4 py-1.5 text-sm font-semibold text-[#b68756]">
            {t("badge", "Global Presence")}
          </span>

          <h2 className="HeadingH3 mt-4 text-primary pb-4">
            {t("titlePrefix", "A Network Across")}{" "}
            <span className="text-[#b68756]">
              {t("titleHighlight", "Key Global Markets")}
            </span>
            {t("titleSuffix", "") ? ` ${t("titleSuffix")}` : ""}
          </h2>

          <p className="Text">
            {t(
              "description",
              "At GTCFX, our international presence reflects our commitment to serving clients across major financial hubs and emerging markets. With teams and operations spanning multiple regions, we deliver localized support with a truly global perspective."
            )}
          </p>
        </div>

        {/* Stats */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-full border border-[#E5E7EB] bg-white px-5 py-3 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-primary md:text-xl">
                  {item.value}
                </span>
                <span className="text-sm font-medium text-[#6B7280]">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Region cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {regions.map((region, index) => (
            <RegionCard
              key={index}
              title={region.title}
              countries={region.countries}
            />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mx-auto mt-10 max-w-4xl text-center">
          <p className="text-sm leading-7 text-[#6B7280] md:text-base">
            {t(
              "bottomNote",
              "Our expanding footprint enables us to connect with clients, partners, and markets worldwide while maintaining a strong focus on local needs and personalized service."
            )}
          </p>
        </div>
      </div>

      {/* soft background effects */}
      <div className="pointer-events-none absolute left-[-100px] top-20 h-[240px] w-[240px] rounded-full bg-[#263788]/5 blur-3xl" />
      <div className="pointer-events-none absolute right-[-80px] bottom-10 h-[260px] w-[260px] rounded-full bg-[#b68756]/10 blur-3xl" />
    </section>
  );
}
