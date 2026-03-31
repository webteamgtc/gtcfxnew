"use client";

const affiliates = [
  {
    country: "United Arab Emirates",
    flag: "🇦🇪",
    entity: "GTC MULTI TRADING DMCC",
    description:
      "GTC MULTI TRADING DMCC is regulated by the Securities and Commodities Authority of the UAE, under license Number 20200000007. The company is licensed to do Broker Direct Clearing Member services under DGCX Derivative Futures.",
    website: "www.gtcmtd.com",
  },
  {
    country: "United Arab Emirates",
    flag: "🇦🇪",
    entity: "GTC FINANCIAL CONSULTANCY",
    description:
      "GTC FINANCIAL CONSULTANCY is regulated by the Securities and Commodities Authority of the UAE.",
    website: "www.gtcfc.com",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    entity: "Global Markets Group Limited",
    description:
      "Global Markets Group Limited, a company registered in England & Wales under company number 09493910, is authorised and regulated by the Financial Conduct Authority with reference number 744501. GTC GROUP L.L.C-FZ is a minority shareholder in Global Markets Group Limited. Registered Office: Green Park House, 15 Stratton Street, London W1J 8LQ, UK.",
    website: "www.gmgmarkets.co.uk",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    entity: "GTC Global (Australia) Pty Ltd",
    description:
      "GTC Global (Australia) Pty Ltd holds an Australian Financial Services Licence number 496371. GTC Global (Australia) focuses on providing education services to Australian clients.",
    website: "",
  },
  {
    country: "Mauritius",
    flag: "🇲🇺",
    entity: "GTC Global Ltd",
    description:
      "GTC Global Ltd. is a limited company incorporated in Mauritius (company number: C188049) and licensed by the Financial Services Commission, Mauritius (No. GB22200292) to trade as an SEC-2.",
    website: "",
  },
  {
    country: "South Africa",
    flag: "🇿🇦",
    entity: "GTC Global South Africa Proprietary Limited",
    description:
      "GTC Global South Africa Proprietary Limited (registration number: 2020/810937/07) hold a Financial Services Provider Licence number 51545. Register address is First Floor Kildare Centre, Cnr Kildare Road and Main Street, Newlands, Cape Town, Western Cape, 7550, South Africa.",
    website: "",
  },
  {
    country: "Vanuatu",
    flag: "🇻🇺",
    entity: "GTC Global Trade Capital Co. Limited",
    description:
      "GTC Global Trade Capital Co. Limited, is a global finance brokerage company registered, supervised, and authorized by the Vanuatu Financial Services Commission of the Republic of Vanuatu Company license number: 40354. Registered address: 1/Floor, B&P House, Kumul Highway, Port Vila, Vanuatu.",
    website: "",
    fullWidth: true,
  },
];

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

   <div className="mt-5 inline-flex rounded-2xl bg-gradient-to-r from-[#263788] via-[#101638] to-[#263788] px-5 py-2">
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
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#fff] to-[#fff] py-10 md:py-16">
      <div className="container relative z-10">
        {/* Intro */}
        <div className="">
          <div className="mb-5 flex items-center gap-3 text-[#b68756]">
            <BuildingIcon />
            <h2 className="HeadingH3 text-primary">
              GTC Financial Group’s{" "}
              <span className="text-[#b68756]">Presence Globally</span>
            </h2>
          </div>

          <p className="text-[15px] leading-7 text-[#374151] md:text-[17px] md:leading-8">
            GTC Group LLC-FZ, a limited liability company registered in the UAE,
            owns the following entities globally, together the GTC Financial
            Group. Each of these entities provides financial services according
            to their respective licences in the relevant jurisdiction. Each
            entity within the GTC Financial Group specialises in different
            services and is managed separately by experienced teams. The
            services and products on this website are offered by two group
            entities, being GTC Global Ltd and GTC Global Trade Capital Co.
            Limited.
          </p>

          <div className="mt-8 inline-flex rounded-full border border-[#b68756]/20 bg-[#b68756]/10 px-5 py-2 text-sm font-semibold text-[#b68756] md:text-base">
            Information on operating GTC Affiliates
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {affiliates.map((item, index) => (
            <AffiliateCard key={index} item={item} />
          ))}
        </div>

        {/* Closing note */}
        <div className="mt-12  text-center">
          <p className="text-[15px] leading-7 text-[#4B5563] md:text-[17px] md:leading-8">
            GTC Financial Group provides a wide range of financial services to
            clients. Different entities within the group have different licences
            and offerings as they are managed separately. If you are interested
            to know more about which entity you are dealing with, we encourage
            you to contact us.
          </p>
        </div>
      </div>

      {/* background effects */}
      <div className="pointer-events-none absolute left-[-100px] top-20 h-[240px] w-[240px] rounded-full bg-[#263788]/5 blur-3xl" />
      <div className="pointer-events-none absolute right-[-100px] bottom-20 h-[260px] w-[260px] rounded-full bg-[#b68756]/10 blur-3xl" />
    </section>
  );
}