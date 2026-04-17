"use client";
import React, { useEffect, useState } from "react";
import TopPerformer from "./TopPerfermer";
import LeaderCard from "./LeaderCard";
import Filters from "./Filters";
import axios from "axios";
import { usePathTranslation } from "@/app/[locale]/LocaleProvider";
const CopyRatingData = ({ messages = {} }) => {
    const t = usePathTranslation("copyTradingPage.rating");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({ total: 0, orderBy: { value: "rank asc", name: t("filters.options.rating") }, skip: 12 })
    const [view, setView] = useState("grid")
    useEffect(() => {
        axios
            .get(
                `${process.env.NEXT_PUBLIC_LEADER_URL}rating/1?$top=12&widget_key=social_platform_ratings&$count=true&$orderby=${pagination?.orderBy?.value}&$skip=${pagination?.skip}`
            )
            .then((res) => {
                setData(res?.data);
                setLoading(false);
                setPagination(st => ({
                    ...st,
                    total: res?.data?.count
                }))
            })
            .catch((err) => {
                console.log({ err });
                setLoading(false);
            });
    }, [pagination?.skip, pagination?.orderBy]);
    return (
        <>

            <div className="bg-gray-100 py-8 md:py-16 " >
                <TopPerformer messages={messages} />
            </div >
            <div className="bg-white py-12 md:py-16 2xl:py-20" >
                <Filters
                    pagination={pagination}
                    setPagination={setPagination}
                    view={view}
                    setView={setView}
                    messages={messages}
                />
                <LeaderCard
                    data={data}
                    view={view}
                    messages={messages}
                />
            </div >
        </>
    );
};

export default CopyRatingData;
