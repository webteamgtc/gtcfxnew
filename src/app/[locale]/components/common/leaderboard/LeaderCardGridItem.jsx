"use client";

import { useRouter } from "next/navigation";
import ChartWrapperComponent from "../chart/ChartWrapper";
import {
  buildGtccopySubscriptionUrl,
  formatInteger,
  formatMoney,
  formatNumber,
  formatPercent,
  getLeaderCardAvatar,
  getLeaderCardCountryCode,
  pickAumFromHistory,
} from "./leaderboardCardUtils";

const EXCLUDED_COUNTRY_CODES = new Set(["JP", "KR", "IR", "GB", "AU", "US"]);
const EXCLUDED_COUNTRY_NAMES = [
  "japan",
  "korea",
  "iran",
  "united kingdom",
  "australia",
  "united states",
  "usa",
];

function isExcludedCountry(item) {
  const code = String(item?.account?.countryCode || "").toUpperCase();
  if (EXCLUDED_COUNTRY_CODES.has(code)) return true;

  const countryName = String(item?.account?.country || "").toLowerCase();
  return EXCLUDED_COUNTRY_NAMES.some((name) => countryName.includes(name));
}

/**
 * Grid-style copy-trading / leaderboard card (avatar, PNL, chart, AUM/MDD/Sharpe, actions).
 */
export default function LeaderCardGridItem({
  item,
  getDetailPath = (i) =>
    i?.profileId != null ? `/leaderboard/${i.profileId}` : "#",
  getCopyProviderId = (i) => i?.profileId,
  chartHeight = 80,
  chartWidth = "100%",
  showMockButton = true,
  mockButtonLabel = "Mock",
  onMockClick,
  className = "",
}) {
  const router = useRouter();
  const countryCode = getLeaderCardCountryCode(item);
  const avatar = getLeaderCardAvatar(item);

  if (isExcludedCountry(item)) {
    return null;
  }

  const statAum =
    pickAumFromHistory(item) ??
    item?.account?.equity ??
    item?.account?.balance ??
    null;
  const statMdd =
    item?.maxDrawdown ?? item?.mdd ?? item?.account?.mdd ?? null;
  const statSharpe =
    item?.sharpeRatio ?? item?.account?.sharpeRatio ?? null;

  const pnlText = formatMoney(item?.totalProfit);
  const roiText = formatPercent(item?.maxProfit);
  const copyUrl = buildGtccopySubscriptionUrl(getCopyProviderId(item));
  const mockUrl = "https://gtccopy.com/portal/login"

  const handleCardClick = () => {
    const href = getDetailPath(item);
    if (href && href !== "#") router.push(href);
  };

  return (
    <div
      className={`group cursor-pointer min-h-[360px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${className}`.trim()}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleCardClick();
        }
      }}
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative">
              <img
                className="h-12 w-12 rounded-xl object-cover"
                src={avatar}
                alt=""
              />
              <div className="absolute -right-1 top-0 h-4 w-4 overflow-hidden rounded-xl ring-2 ring-white">
                {countryCode?.length > 3 || countryCode === "" ? (
                  <img
                    className="h-full w-full object-cover"
                    src={avatar}
                    alt=""
                  />
                ) : (
                  <img
                    className="h-full w-full object-cover"
                    src={`https://flagcdn.com/96x72/${countryCode}.webp`}
                    alt=""
                  />
                )}
              </div>
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="TextButton truncate font-semibold text-slate-900">
                  {item?.accountName}
                </h4>
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
                  ★
                </span>
              </div>

              <div className="TextSmall mt-1 flex items-center gap-2 text-slate-500">
                <span>#{formatInteger(item?.rank)}</span>
                <span className="h-1 w-1 rounded-xl bg-slate-300" />
                <span>{item?.account?.country || "-"}</span>
                <span className="h-1 w-1 rounded-xl bg-slate-300" />
                <span>
                  {item?.account?.leverage
                    ? `1:${formatInteger(item?.account?.leverage)}`
                    : "-"}
                </span>
                <span className="h-1 w-1 rounded-xl bg-slate-300" />
                <span>{item?.account?.currency || "-"}</span>
                <span className="h-1 w-1 rounded-xl bg-slate-300" />
                <span className="TextSmall rounded-md bg-slate-100 px-2 py-0.5 font-medium text-slate-600">
                  API
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 items-center gap-3">
          <div>
            <p className="TextSmall">30 Days PNL (USD)</p>
            <p className="HeadingH4 mt-1 font-semibold leading-none text-emerald-500">
              {pnlText}
            </p>
            <p className="TextSmall mt-2 text-slate-500">
              30 Days ROI <span className="text-emerald-500">{roiText}</span>
            </p>
          </div>

          <div className="min-h-[70px]">
            <ChartWrapperComponent
              item={item}
              height={chartHeight}
              width={chartWidth}
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <div>
            <p className="TextSmall text-slate-400">AUM</p>
            <p className="TextButton text-slate-900">
              {statAum == null
                ? "-"
                : formatNumber(statAum, { decimals: 2 })}
            </p>
          </div>
          <div>
            <p className="TextSmall text-slate-400">30 Days MDD</p>
            <p className="TextButton text-slate-900">
              {statMdd == null
                ? "-"
                : `${formatNumber(statMdd, { decimals: 2 })}%`}
            </p>
          </div>
          <div>
            <p className="TextSmall text-slate-400">Sharpe Ratio</p>
            <p className="TextButton text-slate-900">
              {statSharpe == null
                ? "-"
                : formatNumber(statSharpe, { decimals: 2 })}
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {showMockButton ? (
            <button
              type="button"
              className="TextButton rounded-lg bg-slate-100 py-2.5 text-slate-700 transition hover:bg-slate-200"
              onClick={(e) => {
                e.stopPropagation();
                window.open(mockUrl, "_blank");
              }}
            >
              {mockButtonLabel}
            </button>
          ) : null}
          <button
            type="button"
            className={`TextButton rounded-lg bg-secondary py-2.5 text-white transition hover:brightness-95 ${showMockButton ? "" : "col-span-2"}`}
            onClick={(e) => {
              e.stopPropagation();
              window.open(copyUrl, "_blank");
            }}
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}
