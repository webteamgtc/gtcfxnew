"use client";
import { useState } from "react"
import useGraphDetails from "./useGraphDetails"
import PieChart from "../../../components/common/chart/pieChart"

const TableRow = ({ text, value, classes }) => {
    return (
        <>
            <div className={`TextSmall p-4 border-b border-slate-200 text-slate-600 ${classes}`}>{text}</div>
            <div className={`TextButton p-4 border-b border-slate-200 text-right text-slate-900 ${classes}`}>{value}</div>
        </>
    )
}

const InstrumentLeader = ({ data, id }) => {
    const [filter, setFilter] = useState("count")
    const {
        quarterlyGraphData,
        tableData
    } = useGraphDetails({
        data,
        filter,
        id
    });

    return (
        <div className="">
            <div className="">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="min-w-0">
                        <h2 className="HeadingH4 text-slate-900">Instruments</h2>
                        <p className="TextSmall mt-1 text-slate-500">Account's exposure history per symbol</p>
                    </div>

                    <div className="flex flex-wrap gap-2 md:justify-end">
                        <button
                            type="button"
                            className={[
                                "TextButton rounded-xl px-4 py-2 transition",
                                filter === "count"
                                    ? "bg-primary text-white"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200",
                            ].join(" ")}
                            onClick={() => setFilter("count")}
                        >
                            Count
                        </button>
                        <button
                            type="button"
                            className={[
                                "TextButton rounded-xl px-4 py-2 transition",
                                filter === "volume"
                                    ? "bg-primary text-white"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200",
                            ].join(" ")}
                            onClick={() => setFilter("volume")}
                        >
                            Volume
                        </button>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start">
                    {/* Left: stats table */}
                    <div>
                        <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
                            <div className="grid grid-cols-2">
                                <TableRow text="Best trade" classes="bg-slate-50/60" value={`$${tableData?.best?.profit ?? "-"}`} />
                                <TableRow text="Worst trade" value={`$${tableData?.worst?.profit ?? "-"}`} />
                                <TableRow text="Largest trade" classes="bg-slate-50/60" value={`${tableData?.largest?.volume ?? "-"}`} />
                                <TableRow text="Trades won" value={`${tableData?.won?.count ?? "-"}`} />
                                <TableRow text="Trades lost" classes="bg-slate-50/60" value={`${tableData?.lost?.count ?? "-"}`} />
                                <TableRow text="Total profit" value={`$${tableData?.total?.profit ?? "-"}`} />
                                <TableRow text="Average trade size" classes="bg-slate-50/60" value={`${tableData?.total?.averageTradeSize ?? "-"}`} />
                                <TableRow text="Average profit/win trade" value={`$${tableData?.won?.averageProfitPerTrade ?? "-"}`} />
                                <TableRow text="Average loss/lost trade" classes="bg-slate-50/60" value={`$${tableData?.lost?.averageProfitPerTrade ?? "-"}`} />
                                <TableRow text="Average PnL/trade" value={`$${tableData?.total?.averageProfitPerTrade ?? "-"}`} />
                                <TableRow text="Average PnL/lot" classes="bg-slate-50/60" value={`$${tableData?.total?.averageProfitPerLot ?? "-"}`} />
                                <TableRow text="Average trade duration" classes="bg-slate-50/60" value={`${tableData?.averageDuration ?? "-"}`} />
                            </div>
                        </div>
                    </div>

                    {/* Right: chart */}
                    <div className="flex justify-center md:justify-end">
                        <div className="w-full max-w-[520px]">
                            <PieChart height={360} width={"100%"} seriesData={quarterlyGraphData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstrumentLeader