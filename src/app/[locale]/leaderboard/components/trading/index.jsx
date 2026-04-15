"use client";

import { useState } from "react"
import ChartDetail from "../singleChart"
import useGraphDetails from "./useGraphDetails"
import ColumnChart from "../../../components/common/chart/index"

const TradingLeader = ({ data, id }) => {
    const [date, setDate] = useState("all")
    const {
        quarterlyGraphData,
    } = useGraphDetails({
        data,
        id
    });

    return (
        <div className="space-y-6">
            <div className="">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="min-w-0">
                        <h2 className="HeadingH4 text-slate-900">Return & Leverage</h2>
                        <p className="TextSmall mt-1 text-slate-500">Return and leverage comparison chart</p>
                    </div>

                    <div className="flex flex-wrap gap-2 md:justify-end">
                        {[
                            { id: "all", label: "All time" },
                            { id: "3months", label: "3 Months" },
                            { id: "1months", label: "1 Month" },
                            { id: "week", label: "Week" },
                        ].map((t) => (
                            <button
                                key={t.id}
                                type="button"
                                className={[
                                    "TextButton rounded-xl px-4 py-2 transition",
                                    date === t.id
                                        ? "bg-primary text-white"
                                        : "bg-slate-100 text-slate-700 hover:bg-slate-200",
                                ].join(" ")}
                                onClick={() => setDate(t.id)}
                            >
                                {t.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <ChartDetail item={data} height={360} width={"100%"} date={date} label="Return" grid={true} />
                </div>
            </div>

            <div className="">
                <div className="text-left">
                    <h2 className="HeadingH4 text-slate-900">Leverage</h2>
                    <p className="TextSmall mt-1 text-slate-500">Account leverage history</p>
                </div>

                <div className="mt-6">
                    <ColumnChart
                        height={360}
                        width={"100%"}
                        seriesData={quarterlyGraphData}
                        showAxis={true}
                        label={"Leverage"}
                        strokeWidth={[0]}
                        grid={true}
                        variant="bar"
                    />
                </div>
            </div>
        </div>
    )
}

export default TradingLeader