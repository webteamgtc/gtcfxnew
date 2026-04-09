"use client";

const restrictedPrimary = ["Australia", "USA", "Russia", "Japan" ];

const restrictedSecondary = [
  "Afghanistan",
  "Angola",
  "Bahamas",
  "Botswana",
  "Myanmar",
  "Cote d’Ivoire",
  "Crimea and Sevastopol",
  "Cuba",
  "DPRK",
  "Democratic Republic of Congo",
  "Liberia",
  "Ghana",
  "Iran",
  "Iraq",
  "Mongolia",
  "North Korea",
  "Panama",
  "Somalia",
  "Sudan",
  "Syria",
  "Trinidad and Tobago",
  "Yemen",
  "Zimbabwe",
];

export default function RestrictedCountriesPage() {
  return (
    <section className="bg-[#f8fafc] py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold text-[#0f172a]">
            Restricted Countries
          </h1>
          <p className="mt-4 text-gray-600">
            GTC Global Ltd does not provide services to residents of certain
            jurisdictions due to regulatory, compliance, and risk management policies.
          </p>
        </div>

        {/* PRIMARY COUNTRIES */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-[#293794] mb-4">
            Service Restrictions
          </h2>

          <div className="flex flex-wrap gap-3">
            {restrictedPrimary.map((country, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-[#293794]/10 text-[#293794] text-sm font-medium"
              >
                {country}
              </span>
            ))}
          </div>
        </div>

        {/* SECONDARY LIST */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-[#b68756] mb-4">
            High-Risk Jurisdictions (ML/FT Compliance)
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {restrictedSecondary.map((country, i) => (
              <div
                key={i}
                className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm text-gray-700 text-center hover:bg-gray-50 transition"
              >
                {country}
              </div>
            ))}
          </div>
        </div>

        {/* NOTE */}
        <div className="mt-12 rounded-2xl border border-[#b68756]/20 bg-[#fff7ed] p-5">
          <p className="text-sm text-gray-700 leading-6">
            <span className="font-semibold text-[#b68756]">Note:</span> The above list applies
            specifically to services offered by GTC Global Ltd and GTC Global Trade Capital Co. Limited.
            Other entities within the GTC Financial Group may operate under different regulatory
            frameworks. Please refer to their respective websites for more details.
          </p>
        </div>
      </div>
    </section>
  );
}