"use client";
import { usePathTranslation } from "../../LocaleProvider";

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
      className={`inline-flex items-center gap-2 rounded-xl px-3 py-1 text-xs font-semibold md:text-sm ${
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

function MobileAccountCard({
  title,
  variant,
  rows,
  extras,
  benefitsTitle,
  openButtonLabel,
}) {
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
          {benefitsTitle}
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
          {openButtonLabel}
        </a>
      </div>
    </div>
  );
}

export default function AccountTypesComparisonPremium() {
  const t = usePathTranslation("accountType");
  const mainComparisonRows = [
    {
      label: t("comparison.minimumDeposit.label"),
      standard: t("comparison.minimumDeposit.standard"),
      ecn: t("comparison.minimumDeposit.ecn"),
      highlight: true,
    },
    {
      label: t("comparison.leverage.label"),
      standard: t("comparison.leverage.standard"),
      ecn: t("comparison.leverage.ecn"),
    },
    {
      label: t("comparison.spreads.label"),
      standard: t("comparison.spreads.standard"),
      ecn: t("comparison.spreads.ecn"),
      highlight: true,
    },
    {
      label: t("comparison.commission.label"),
      standard: t("comparison.commission.standard"),
      ecn: t("comparison.commission.ecn"),
      highlight: true,
    },
    {
      label: t("comparison.execution.label"),
      standard: t(
        "comparison.execution.standard"
      ),
      ecn: t("comparison.execution.ecn"),
    },
    {
      label: t("comparison.bankAccess.label"),
      standard: t(
        "comparison.bankAccess.standard"
      ),
      ecn: t("comparison.bankAccess.ecn"),
    },
    {
      label: t("comparison.markets.label"),
      standard: t(
        "comparison.markets.standard"
      ),
      ecn: t("comparison.markets.ecn"),
    },
    {
      label: t("comparison.tradingRestrictions.label"),
      standard: t(
        "comparison.tradingRestrictions.standard"
      ),
      ecn: t("comparison.tradingRestrictions.ecn"),
    },
    {
      label: t("comparison.priceSlippage.label"),
      standard: t("comparison.priceSlippage.standard"),
      ecn: t("comparison.priceSlippage.ecn"),
    },
    {
      label: t("comparison.requotes.label"),
      standard: t("comparison.requotes.standard"),
      ecn: t("comparison.requotes.ecn"),
    },
    {
      label: t("comparison.rejections.label"),
      standard: t("comparison.rejections.standard"),
      ecn: t("comparison.rejections.ecn"),
    },
    {
      label: t("comparison.tradingPlatform.label"),
      standard: t(
          "comparison.tradingPlatform.standard"
      ),
      ecn: t(
        "comparison.tradingPlatform.ecn" 
      ),
    },
    {
      label: t("comparison.advancedAccess.label"),
      standard: t("comparison.advancedAccess.standard"),
      ecn: t("comparison.advancedAccess.ecn"),
    },
    {
      label: t("comparison.protection.label"),
      standard: t(
        "comparison.protection.standard"
      ),
      ecn: t("comparison.protection.ecn"),
    },
  ];

  const standardExtras = [
    t("benefits.standard.one"),
    t("benefits.standard.two"),
    t("benefits.standard.three"),
  ];

  const ecnExtras = [
    t("benefits.ecn.one"),
    t("benefits.ecn.two"),
    t("benefits.ecn.three"),
    t("benefits.ecn.four"),
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#fff] to-[#fff] py-10 md:py-16">
      <div className="container relative z-10">
        {/* Intro */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-xl border border-[#b68756]/20 bg-[#b68756]/10 px-4 py-1.5 text-sm font-semibold text-[#b68756]">
            {t("eyebrow")}
          </span>

          <h2 className="HeadingH3 my-5 text-primary">
            {t("titleStart")}{" "}
            <span className="text-[#b68756]">
              {t("titleHighlight")}
            </span>
          </h2>

          <p className="Text">
            {t("description")}
          </p>
        </div>

        {/* Top cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <AccountTopCard
            title={t("cards.standard.title")}
            subtitle={t(
              "cards.standard.subtitle")}
            variant="standard"
          />

          <AccountTopCard
            title={t("cards.ecn.title")}
            subtitle={t(
              "cards.ecn.subtitle")}
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
                <StarBadge variant="standard">
                  {t("cards.standard.title")}
                </StarBadge>
              </div>

              <div className="bg-[#fffaf5] px-6 py-6 text-center">
                <StarBadge variant="ecn">
                  {t("cards.ecn.title")}
                </StarBadge>
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
              title={t("benefits.standard.title")}
              items={standardExtras}
              variant="standard"
            />

            <BenefitsCard
              title={t("benefits.ecn.title")}
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
              {t("cta.openStandard")}
            </a>

            <a
              href="/account/live"
              className="flex min-h-[56px] items-center justify-center rounded-xl bg-[#b68756] px-6 text-sm font-semibold text-[#111827] transition hover:opacity-90 md:text-base"
            >
              {t("cta.openEcn")}
            </a>
          </div>
        </div>

        {/* Mobile / Tablet */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:hidden">
          <MobileAccountCard
            title={t("cards.standard.title")}
            variant="standard"
            rows={mainComparisonRows}
            extras={standardExtras}
            benefitsTitle={t("benefits.standard.title")}
            openButtonLabel={t("cta.openStandard")}
          />

          <MobileAccountCard
            title={t("cards.ecn.title")}
            variant="ecn"
            rows={mainComparisonRows}
            extras={ecnExtras}
            benefitsTitle={t("benefits.ecn.title")}
            openButtonLabel={t("cta.openEcn")}
          />
        </div>

        {/* Notes */}
        <div className="mt-10 rounded-[24px] border border-[#E5E7EB] bg-white px-5 py-5 md:px-6">
          <div className="space-y-3 text-sm leading-7 text-[#4B5563] md:text-[15px]">
            <p>
              {t(
                "notes.one",
              )}
            </p>
            <p>{t("notes.two")}</p>
            <p>
              {t(
                "notes.three"              )}
            </p>
          </div>
        </div>
      </div>

      {/* background glow */}
      <div className="pointer-events-none absolute left-[-100px] top-24 h-[240px] w-[240px] rounded-xl bg-[#263788]/5 blur-3xl" />
      <div className="pointer-events-none absolute right-[-100px] bottom-10 h-[260px] w-[260px] rounded-xl bg-[#b68756]/10 blur-3xl" />
    </section>
  );
}