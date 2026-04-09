"use client";

import React from "react"
import useGraphDetails from "./useGraphDetails"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const HistoryLeader = ({ data, id }) => {
    const {
        pagination,
        setPagination,
        tableData
    } = useGraphDetails({
        data,
        id
    });

    return (
        <div className="">
            <div className="">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="min-w-0">
                        <h3 className="HeadingH4 text-slate-900">Position History</h3>
                        <p className="TextSmall mt-1 text-slate-500">Closed positions summary</p>
                    </div>

                    <div className='flex items-center justify-end gap-2'>
                        <button
                            type="button"
                            disabled={pagination?.skip === 20}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                            onClick={() => setPagination(st => ({ ...st, skip: st.skip - 20 }))}
                            aria-label="Previous page"
                        >
                            <FaChevronLeft className="text-slate-600" />
                        </button>
                        <span className="TextSmall text-slate-600">
                            {pagination?.skip} of {tableData?.count || 0}
                        </span>
                        <button
                            type="button"
                            disabled={pagination?.total === pagination?.skip + 20}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                            onClick={() => setPagination(st => ({ ...st, skip: st.skip + 20 }))}
                            aria-label="Next page"
                        >
                            <FaChevronRight className="text-slate-600" />
                        </button>
                    </div>
                </div>

                <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                    <div className="overflow-x-auto">
                        <table className="min-w-[980px] w-full border-collapse">
                        <thead>
                            <tr className="bg-primary">
                                {["Symbol", "Volume", "Open time", "Close time", "Prices", "Profit"].map((h) => (
                                    <th
                                        key={h}
                                        className="TextSmall whitespace-nowrap border-b border-white/15 px-4 py-3 text-left font-semibold text-white"
                                    >
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {tableData?.items?.length ? (
                                tableData.items.map((single, index) => {
                                    const openTime = single?.openTime?.split("T")
                                    const closeTime = single?.closeTime?.split("T")
                                    const zebra = index % 2 === 0 ? "bg-white" : "bg-slate-50/60";

                                    return (
                                        <tr
                                            key={`${single?.ticket || index}`}
                                            className={`${zebra} transition hover:bg-[#F1F3FF]`}
                                        >
                                            <td className="TextSmall whitespace-nowrap border-b border-slate-200 px-4 py-3 text-slate-700">
                                                {single?.symbol || "-"}
                                            </td>
                                            <td className="TextSmall whitespace-nowrap border-b border-slate-200 px-4 py-3 text-slate-700">
                                                <div className="flex flex-col">
                                                    <span className="TextButton text-slate-900">{single?.volume ?? "-"}</span>
                                                    <span className="TextSmall text-slate-500">{single?.direction ?? "-"}</span>
                                                </div>
                                            </td>
                                            <td className="TextSmall whitespace-nowrap border-b border-slate-200 px-4 py-3 text-slate-700">
                                                {openTime?.[0] || "-"} {openTime?.[1] || ""}
                                            </td>
                                            <td className="TextSmall whitespace-nowrap border-b border-slate-200 px-4 py-3 text-slate-700">
                                                {closeTime?.[0] || "-"} {closeTime?.[1] || ""}
                                            </td>
                                            <td className="TextSmall border-b border-slate-200 px-4 py-3 text-slate-700">
                                                <div className="flex flex-col gap-1 whitespace-nowrap">
                                                    <span>Open: <span className="TextButton text-slate-900">{single?.openPrice ?? "-"}</span></span>
                                                    <span>Close: <span className="TextButton text-slate-900">{single?.closePrice ?? "-"}</span></span>
                                                </div>
                                            </td>
                                            <td className="TextSmall whitespace-nowrap border-b border-slate-200 px-4 py-3 text-slate-700">
                                                <div className="flex flex-col">
                                                    <span className="TextButton text-slate-900">${single?.profit ?? "-"}</span>
                                                    <span className="TextSmall text-slate-500">{single?.profitPoints ?? "-"} pts</span>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td colSpan={6} className="TextSmall px-4 py-10 text-center text-slate-500">
                                        No history found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HistoryLeader