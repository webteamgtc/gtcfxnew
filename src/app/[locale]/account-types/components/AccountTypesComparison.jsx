"use client";

const mainComparisonRows = [
  {
    label: "Minimum Deposit",
    standard: "No minimum deposit",
    ecn: "Minimum deposits from $3,000",
    highlight: true,
  },
  {
    label: "Leverage",
    standard: "Up to 1:2000 ***",
    ecn: "Up to 1:500 ***",
  },
  {
    label: "Spreads",
    standard: "Average spreads 1.0 pips",
    ecn: "Raw spreads 0.0 pips",
    highlight: true,
  },
  {
    label: "Commission",
    standard: "0 Commission Charges",
    ecn: "Commission $5 / standard lot",
    highlight: true,
  },
  {
    label: "Execution",
    standard: "Secure, instant and fast execution",
    ecn: "Secure, instant and fast execution",
  },
  {
    label: "Bank Access",
    standard: "Direct access to top tier banks",
    ecn: "Direct access to top tier banks",
  },
  {
    label: "Markets",
    standard: "Access to 7 markets with over 27,000 trading instruments",
    ecn: "Access to 7 markets with over 27,000 trading instruments",
  },
  {
    label: "Trading Restrictions",
    standard: "No trading restrictions",
    ecn: "No trading restrictions",
  },
  {
    label: "Price Slippage",
    standard: "No price slippage*",
    ecn: "No price slippage*",
  },
  {
    label: "Requotes",
    standard: "No requotes",
    ecn: "No requotes",
  },
  {
    label: "Rejections",
    standard: "No rejections",
    ecn: "No rejections",
  },
  {
    label: "Trading Platform",
    standard: "Meta Trader (MT) trading platform",
    ecn: "Meta Trader (MT) trading platform",
  },
  {
    label: "Advanced Access",
    standard: "MAM, PAMM, API available",
    ecn: "MAM, PAMM, API available",
  },
  {
    label: "Protection",
    standard: "Negative balance protection",
    ecn: "Negative balance protection",
  },
];

const standardExtras = [
  "Designed for flexible entry with no minimum deposit",
  "Simple structure with zero commission charges",
  "Suitable for traders looking for accessible market entry",
];

const ecnExtras = [
  "Offering tier 1 liquidity with ECN technology",
  "Market analysis",
  "Free advance trading tools and signals",
  "Dedicated relationship manager",
];

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path d="M5 12l4 4 10-10" />
    </svg>
  );
}

function DashIcon() {
  return <span className="text-[#9CA3AF] text-lg">—</span>;
}

function StarBadge({ children, variant = "standard" }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold md:text-sm ${
        variant === "ecn"
          ? "bg-[#b68756]/10 text-[#b68756]"
          : "bg-[#263788]/10 text-[#263788]"
      }`}
    >
      <span>{variant === "ecn" ? "✦" : "★"}</span>
      {children}
    </div>
  );
}

function FeatureValue({ value, emphasize = false }) {
  if (!value || value === "-") {
    return (
      <div className="flex items-center justify-center">
        <DashIcon />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center gap-2 text-center ${
        emphasize ? "font-semibold text-primary" : "text-[#374151]"
      }`}
    >
      <span className="text-[#22C55E]">
        <CheckIcon />
      </span>
      <span className="text-[15px] leading-7 md:text-base">{value}</span>
    </div>
  );
}

function AccountTopCard({ title, subtitle, variant = "standard" }) {
  const isECN = variant === "ecn";

  return (
    <div
      className={`rounded-[28px] border p-6 md:p-8 ${
        isECN
          ? "border-[#b68756]/25 bg-gradient-to-br from-[#fffaf5] to-white"
          : "border-[#E5E7EB] bg-white"
      }`}
    >
      <StarBadge variant={variant}>{title}</StarBadge>

      <h3 className="HeadingH4 my-5 font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-[15px] leading-7 text-[#4B5563] md:text-base md:leading-8">
        {subtitle}
      </p>
    </div>
  );
}

function BenefitsCard({ title, items, variant = "standard" }) {
  const isECN = variant === "ecn";

  return (
    <div
      className={`rounded-[28px] border p-6 md:p-8 ${
        isECN
          ? "border-[#b68756]/25 bg-gradient-to-br from-[#fffaf5] to-white"
          : "border-[#E5E7EB] bg-white"
      }`}
    >
      <h3
        className={`HeadingH4 font-semibold ${
          isECN ? "text-[#b68756]" : "text-primary"
        }`}
      >
        {title}
      </h3>

      <ul className="mt-5 space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-1 text-[#22C55E]">
              <CheckIcon />
            </span>
            <span className="text-[15px] leading-7 text-[#374151] md:text-base md:leading-8">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileAccountCard({ title, variant, rows, extras }) {
  const isECN = variant === "ecn";

  return (
    <div
      className={`overflow-hidden rounded-[28px] border shadow-sm ${
        isECN
          ? "border-[#b68756]/25 bg-gradient-to-br from-[#fffaf5] to-white"
          : "border-[#E5E7EB] bg-white"
      }`}
    >
      <div className="border-b border-[#E5E7EB] px-6 py-6">
        <StarBadge variant={variant}>{title}</StarBadge>

        <h3 className="mt-4 text-[26px] font-bold text-primary">{title}</h3>
      </div>

      <div className="divide-y divide-[#E5E7EB]">
        {rows.map((row, index) => (
          <div key={index} className="px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.04em] text-[#6B7280]">
              {row.label}
            </p>
            <div className="mt-2 justify-start">
              <FeatureValue
                value={row[variant]}
                emphasize={row.highlight}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-[#E5E7EB] px-5 py-5">
        <h4
          className={`text-lg font-semibold ${
            isECN ? "text-[#b68756]" : "text-primary"
          }`}
        >
          {isECN ? "Exclusive ECN Benefits" : "Standard Account Benefits"}
        </h4>

        <ul className="mt-4 space-y-3">
          {extras.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 text-[#22C55E]">
                <CheckIcon />
              </span>
              <span className="text-sm leading-7 text-[#374151]">{item}</span>
            </li>
          ))}
        </ul>

        <a
          href="/account/live"
          className={`mt-6 flex min-h-[50px] items-center justify-center rounded-xl px-6 text-sm font-semibold transition ${
            isECN
              ? "bg-[#b68756] text-[#111827] hover:opacity-90"
              : "bg-[#263788] text-white hover:opacity-90"
          }`}
        >
          Open {title}
        </a>
      </div>
    </div>
  );
}

export default function AccountTypesComparisonPremium() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#fff] to-[#fff] py-10 md:py-16">
      <div className="container relative z-10">
        {/* Intro */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-[#b68756]/20 bg-[#b68756]/10 px-4 py-1.5 text-sm font-semibold text-[#b68756]">
            Account Types
          </span>

          <h2 className="HeadingH3 my-5 text-primary">
            Compare Our <span className="text-[#b68756]">Trading Accounts</span>
          </h2>

          <p className="Text">
            Unlock the potential for profit by opening a live account and trading
            our competitive financial products with favorable spreads. Compare
            our account types and choose the option that best matches your
            trading style.
          </p>
        </div>

        {/* Top cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <AccountTopCard
            title="Standard Account"
            subtitle="A flexible account designed for accessible market entry, competitive spreads, and commission-free trading."
            variant="standard"
          />

          <AccountTopCard
            title="ECN Account"
            subtitle="A premium account built for raw spreads, direct market access, and advanced trading support."
            variant="ecn"
          />
        </div>

        {/* Desktop comparison */}
        <div className="mt-12 hidden lg:block">
          <div className="overflow-hidden rounded-[30px] border border-[#E5E7EB] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            {/* Header row */}
            <div className="grid grid-cols-[240px_1fr_1fr] border-b border-[#E5E7EB]">
              <div className="bg-[#F9FAFB]" />

              <div className="border-r border-[#E5E7EB] px-6 py-6 text-center">
                <StarBadge variant="standard">Standard Account</StarBadge>
              </div>

              <div className="bg-[#fffaf5] px-6 py-6 text-center">
                <StarBadge variant="ecn">ECN Account</StarBadge>
              </div>
            </div>

            {/* Comparison rows */}
            {mainComparisonRows.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-[240px_1fr_1fr] border-b border-[#E5E7EB] last:border-b-0"
              >
                <div className="flex items-center bg-[#F9FAFB] px-6 py-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.04em] text-[#6B7280]">
                    {row.label}
                  </p>
                </div>

                <div className="flex items-center justify-center border-r border-[#E5E7EB] px-6 py-5">
                  <FeatureValue
                    value={row.standard}
                    emphasize={row.highlight}
                  />
                </div>

                <div
                  className={`flex items-center justify-center px-6 py-5 ${
                    row.standard === "-" && row.ecn !== "-"
                      ? "bg-[#fffaf5]"
                      : "bg-[#fffaf5]/60"
                  }`}
                >
                  <FeatureValue value={row.ecn} emphasize={row.highlight} />
                </div>
              </div>
            ))}
          </div>

          {/* Extra benefits below table */}
          <div className="mt-8 grid grid-cols-2 gap-6">
            <BenefitsCard
              title="Standard Account Benefits"
              items={standardExtras}
              variant="standard"
            />

            <BenefitsCard
              title="Exclusive ECN Benefits"
              items={ecnExtras}
              variant="ecn"
            />
          </div>

          {/* CTA row */}
          <div className="mt-8 grid grid-cols-2 gap-6">
            <a
              href="/account/live"
              className="flex min-h-[56px] items-center justify-center rounded-xl bg-[#263788] px-6 text-sm font-semibold text-white transition hover:opacity-90 md:text-base"
            >
              Open Standard Account
            </a>

            <a
              href="/account/live"
              className="flex min-h-[56px] items-center justify-center rounded-xl bg-[#b68756] px-6 text-sm font-semibold text-[#111827] transition hover:opacity-90 md:text-base"
            >
              Open ECN Account
            </a>
          </div>
        </div>

        {/* Mobile / Tablet */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:hidden">
          <MobileAccountCard
            title="Standard Account"
            variant="standard"
            rows={mainComparisonRows}
            extras={standardExtras}
          />

          <MobileAccountCard
            title="ECN Account"
            variant="ecn"
            rows={mainComparisonRows}
            extras={ecnExtras}
          />
        </div>

        {/* Notes */}
        <div className="mt-10 rounded-[24px] border border-[#E5E7EB] bg-white px-5 py-5 md:px-6">
          <div className="space-y-3 text-sm leading-7 text-[#4B5563] md:text-[15px]">
            <p>
              * Trading in markets with low volatility and high liquidity, under
              normal market volatility liquidity condition.
            </p>
            <p>** Accounts above $50K</p>
            <p>
              *** The above applicable only for GTC Global Ltd. (FSCM) & GTC
              Global Trade Capital Co. (VFSC) Clients.
            </p>
          </div>
        </div>
      </div>

      {/* background glow */}
      <div className="pointer-events-none absolute left-[-100px] top-24 h-[240px] w-[240px] rounded-full bg-[#263788]/5 blur-3xl" />
      <div className="pointer-events-none absolute right-[-100px] bottom-10 h-[260px] w-[260px] rounded-full bg-[#b68756]/10 blur-3xl" />
    </section>
  );
}