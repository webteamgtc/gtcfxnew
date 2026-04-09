import { useMemo } from "react";
import { useRouter } from "next/navigation";
import ChartWrapperComponent from "../../components/common/chart/ChartWrapper";

function formatNumber(v, { decimals = 2 } = {}) {
    const n = Number(v);
    if (!Number.isFinite(n)) return "-";
    return new Intl.NumberFormat(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }).format(n);
}

function formatInteger(v) {
    const n = Number(v);
    if (!Number.isFinite(n)) return "-";
    return new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(n);
}

function formatMoney(v) {
    const n = Number(v);
    if (!Number.isFinite(n)) return "-";
    const sign = n >= 0 ? "+" : "";
    return `${sign}${new Intl.NumberFormat(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(n)}`;
}

function formatPercent(v) {
    const n = Number(v);
    if (!Number.isFinite(n)) return "-";
    const sign = n >= 0 ? "+" : "";
    return `${sign}${formatNumber(n, { decimals: 2 })}%`;
}

function pickAumFromHistory(item) {
    const entries = item?.history?.entries;
    if (!Array.isArray(entries) || entries.length < 1) return null;
    for (let i = entries.length - 1; i >= 0; i -= 1) {
        const eb = Number(entries[i]?.eb);
        if (Number.isFinite(eb) && eb > 0) return eb;
    }
    return null;
}

const LeaderCard = (props) => {
    const { data, view } = props
    const router = useRouter()

    const items = useMemo(() => data?.items || [], [data]);
    return (
        <div className='container mt-6'>
            {view == "grid" ?
                <div className=" grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-3">
                    {items?.map((single, index) => {
                        const countryCode = single?.account?.countryCode?.toLowerCase();
                        const avatar =
                            single?.public?.avatarPath ||
                            "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/avatar.webp";

                        const statAum = pickAumFromHistory(single) ?? single?.account?.equity ?? single?.account?.balance ?? null;
                        const statMdd = single?.maxDrawdown ?? single?.mdd ?? single?.account?.mdd ?? null;
                        const statSharpe = single?.sharpeRatio ?? single?.account?.sharpeRatio ?? null;

                        const pnlText = formatMoney(single?.totalProfit);
                        const roiText = formatPercent(single?.maxProfit);
                        return (
                            <div
                                key={index}
                                className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                                onClick={() => {
                                    router.push(`/leaderboard/${single?.profileId}`)
                                }}
                            >
                                <div className="p-5">
                                    {/* Top */}
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex min-w-0 items-center gap-3">
                                            <div className="relative">
                                                <img className="h-12 w-12 rounded-full object-cover" src={avatar} alt="" />
                                                <div className="absolute -right-1 top-0 h-4 w-4 overflow-hidden rounded-full ring-2 ring-white">
                                                    {countryCode?.length > 3 || countryCode == "" ? (
                                                        <img className="h-full w-full object-cover" src={avatar} alt="" />
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
                                                        {single?.accountName}
                                                    </h4>
                                                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                                                        ★
                                                    </span>
                                                </div>

                                                <div className="TextSmall mt-1 flex items-center gap-2 text-slate-500">
                                                    <span>#{formatInteger(single?.rank)}</span>
                                                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                                                    <span>{single?.account?.country || "-"}</span>
                                                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                                                    <span>{single?.account?.leverage ? `1:${formatInteger(single?.account?.leverage)}` : "-"}</span>
                                                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                                                    <span>{single?.account?.currency || "-"}</span>
                                                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                                                    <span className="TextSmall rounded-md bg-slate-100 px-2 py-0.5 font-medium text-slate-600">
                                                        API
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* PNL + Chart */}
                                    <div className="mt-6 grid grid-cols-2 items-center gap-3">
                                        <div>
                                            <p className="TextSmall ">30 Days PNL (USD)</p>
                                            <p className="HeadingH4 mt-1 font-semibold leading-none text-emerald-500">
                                                {pnlText}
                                            </p>
                                            <p className="TextSmall mt-2 text-slate-500">
                                                30 Days ROI <span className="text-emerald-500">{roiText}</span>
                                            </p>
                                        </div>

                                        <div className="min-h-[70px]">
                                            <ChartWrapperComponent item={single} height={80} width={"100%"} />
                                        </div>
                                    </div>

                                    {/* Stats */}
                                    <div className="mt-6 grid grid-cols-3 gap-3">
                                        <div>
                                            <p className="TextSmall text-slate-400">AUM</p>
                                            <p className="TextButton text-slate-900">{statAum == null ? "-" : formatNumber(statAum, { decimals: 2 })}</p>
                                        </div>
                                        <div>
                                            <p className="TextSmall text-slate-400">30 Days MDD</p>
                                            <p className="TextButton text-slate-900">{statMdd == null ? "-" : `${formatNumber(statMdd, { decimals: 2 })}%`}</p>
                                        </div>
                                        <div>
                                            <p className="TextSmall text-slate-400">Sharpe Ratio</p>
                                            <p className="TextButton text-slate-900">{statSharpe == null ? "-" : formatNumber(statSharpe, { decimals: 2 })}</p>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="mt-6 grid grid-cols-2 gap-3">
                                        <button
                                            type="button"
                                            className="TextButton rounded-lg bg-slate-100 py-2.5 text-slate-700 transition hover:bg-slate-200"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Mock
                                        </button>
                                        <button
                                            type="button"
                                            className="TextButton rounded-lg bg-secondary py-2.5 text-white transition hover:brightness-95"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                window.open(
                                                    `https://gtccopy.com/portal/registration/subscription?provider=${single?.profileId}&backLink=true&backUrl=https%3A%2F%2Fratings.gtccopy.com%2Fwidgets%2Fratings%3FwidgetKey=social_platform_ratings&lang=en&wlid=2b9e7678-160f-48f5-9a5f-5f5bef2d9d26&widgetKey=social_platform_ratings`,
                                                    "_blank"
                                                );
                                            }}
                                        >
                                            Copy
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                :
                <div className=" grid grid-cols-1 gap-x-5 gap-y-2">

                    {items?.map((single, index) => {
                        const countryCode = single?.account?.countryCode?.toLowerCase();
                        const avatar =
                            single?.public?.avatarPath ||
                            "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/avatar.webp";

                        const pnlText = formatMoney(single?.totalProfit);
                        const roiText = formatPercent(single?.maxProfit);
                        return (
                            <div
                                key={index}
                                className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                                onClick={() => {
                                    router.push(`/leaderboard/${single?.profileId}`)
                                }}
                            >
                                <div className="p-4 md:p-5 grid grid-cols-1 gap-4 md:grid-cols-[1fr_260px_140px] md:items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            <img className="h-12 w-12 rounded-full object-cover" src={avatar} alt="" />
                                            <div className="absolute -right-1 top-0 h-4 w-4 overflow-hidden rounded-full ring-2 ring-white">
                                                {countryCode?.length > 3 || countryCode == "" ? (
                                                    <img className="h-full w-full object-cover" src={avatar} alt="" />
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
                                            <p className="TextButton truncate text-slate-900">{single?.accountName}</p>
                                            <p className="TextSmall mt-1 text-slate-500">
                                                #{formatInteger(single?.rank)} · {single?.account?.country || "-"} · {single?.account?.leverage ? `1:${formatInteger(single?.account?.leverage)}` : "-"} · {single?.account?.currency || "-"}
                                            </p>
                                            <p className="TextSmall mt-1 text-slate-500">
                                                30D PNL: <span className="text-emerald-600">{pnlText}</span> · ROI: <span className="text-emerald-600">{roiText}</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="min-h-[70px]">
                                        <ChartWrapperComponent item={single} height={70} width={250} />
                                    </div>

                                    <div className="flex justify-end">
                                        <button
                                            type="button"
                                            className="TextButton rounded-lg bg-secondary px-5 py-2.5 text-white transition hover:brightness-95"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                window.open(
                                                    `https://gtccopy.com/portal/registration/subscription?provider=${single?.accountId}&backLink=true&backUrl=https%3A%2F%2Fratings.gtccopy.com%2Fwidgets%2Fratings%3FwidgetKey=social_platform_ratings&lang=en&wlid=2b9e7678-160f-48f5-9a5f-5f5bef2d9d26&widgetKey=social_platform_ratings`,
                                                    "_blank"
                                                );
                                            }}
                                        >
                                            Copy
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            }
        </div>
    )
}
export default LeaderCard