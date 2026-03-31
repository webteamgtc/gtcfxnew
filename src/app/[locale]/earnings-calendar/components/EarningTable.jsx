"use client";

import React, { useCallback, useEffect, useState } from "react";
import * as XLSX from "xlsx";
import {
    fetchStrapiCollection,
    mapStrapiLocale,
    pickFirstMediaUrl,
    toAbsoluteStrapiMediaUrl,
} from "@/lib/strapi";

const EarningsDividendsCalendar = ({ locale = "en", messages = {} }) => {
    const text = (key, fallback) => {
        const value = messages?.[key];
        return typeof value === "string" && value.length ? value : fallback;
    };

    const [excelData, setExcelData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchExcelFromURL = async (url) => {
        try {
            const response = await fetch(url);
            const arrayBuffer = await response.arrayBuffer();
            const workbook = XLSX.read(arrayBuffer, { type: "buffer" });

            const allData = workbook.SheetNames.map((sheetName) => ({
                name: sheetName,
                data: XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]),
            }));
            return allData; // array of { name, data }
        } catch (error) {
            console.error("Error fetching or parsing Excel:", error);
            return [];
        }
    };

    const fetchData = useCallback(async () => {
        setLoading(true);

        try {
            const res = await fetchStrapiCollection("earnings", {
                locale: mapStrapiLocale(locale),
                populate: "*",
                sort: "createdAt:desc",
                cache: "no-store",
            });

            const url = pickFirstMediaUrl(res, ["data", "file", "attachment", "document", "spreadsheet"]);
            if (!url) {
                setData(res?.data || []);
                setExcelData([]);
                setLoading(false);
                return;
            }

            const fullURL = toAbsoluteStrapiMediaUrl(url);
            const parsedData = await fetchExcelFromURL(fullURL);
            setData(res?.data);
            setExcelData(parsedData?.[0]?.data || []);
            setLoading(false);
        } catch (err) {
            console.error("❌ Error fetching announcements", err);
            setLoading(false);
        }
    }, [locale]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <section className="bg-white py-8 md:py-10">
            <div className="container mx-auto">
                <h2 className="HeadingH3 mb-8">
                    {text("bannerDatePrefix", "Ex-Dividend")} {data?.[0]?.attributes?.date || ""} (GMT+3)
                </h2>

                <div className="flex flex-col lg:flex-row gap-4 xl:gap-6 items-stretch">
                {/* Table */}
                <div className="w-full lg:w-[67%]">
                    {loading ?
                        <div className="flex min-h-[380px] items-center justify-center rounded-md bg-white">
                            <span className="loading loading-spinner loading-lg text-primary"></span>
                        </div>
                        :
                        <>
                            {Array.isArray(excelData) && excelData.length > 0 && (
                                <table className="w-full overflow-hidden rounded-[10px] border-separate border-spacing-0 text-center">
                                    <thead>
                                        <tr className="bg-[linear-gradient(180deg,#293B93_0%,#0D153A_100%)]">
                                            {Object.keys(excelData?.[0])?.map((header) => (
                                                <th key={header} className="HeadingH5 px-3 py-3 text-[#B48755]">
                                                    {header}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="TextSmall text-[#2B335A]">
                                        {excelData?.map((row, rowIndex) => (
                                            <tr
                                                key={rowIndex}
                                                className="odd:bg-[#F1F3FF] even:bg-[#FAFAFA]"
                                            >
                                                {Object.values(row).map((value, colIndex) => (
                                                    <td key={colIndex} className="border border-white px-3 py-2.5">
                                                        {value}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                            {Array.isArray(excelData) && excelData.length === 0 && (
                                <div className="flex min-h-[380px] items-center justify-center rounded-md bg-white px-5 text-center">
                                    <p className="Text text-[#4D4D70]">
                                        {text("noData", "No earnings data available right now.")}
                                    </p>
                                </div>
                            )}
                        </>
                    }
                </div>

                {/* How to Calculate Dividend */}
                <div className="w-full lg:w-[33%] flex flex-col justify-center bg-[#F1F3FF] px-6 py-7 text-[#1C2346]">
                    <h3 className="HeadingH4 mb-5">
                        {text("howToCalculateHeading", "How to Calculate Dividend")}
                    </h3>

                    <div className="mb-5">
                        <p className="HeadingH5 mb-2">
                            {text("howToCalculateTitle1", "Formula")}
                        </p>
                        <p className="TextSmall leading-6">
                            {text(
                                "howToCalculatePara1",
                                "Dividend adjustments are typically based on position size and declared dividend amount."
                            )}
                        </p>
                    </div>

                    <div>
                        <p className="HeadingH5 mb-2">
                            {text("howToCalculateTitle2", "Dividend charge deducted when holding a short position:")}
                        </p>
                        <p className="TextSmall leading-6">
                            {text(
                                "howToCalculatePara2",
                                "Review the instrument specification and corporate action details before market close."
                            )}
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default EarningsDividendsCalendar;
