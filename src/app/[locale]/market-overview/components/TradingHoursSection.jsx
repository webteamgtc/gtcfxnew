"use client";

import { useMemo, useState } from "react";
import { usePathTranslation } from "@/app/[locale]/LocaleProvider";

const tabs = [
  { key: "fx", label: "FX" },
  { key: "metals", label: "Gold & Silver" },
  { key: "oil", label: "Crude Oil" },
  { key: "crypto", label: "Crypto" },
  { key: "indices", label: "Cash Indices" },
  { key: "stocks", label: "Stocks" },
];

/** Matches keys on `sampleData` */
const TAB_TO_SAMPLE_KEY = {
  fx: "FX",
  metals: "Gold & Silver",
  oil: "Crude Oil",
  crypto: "Crypto",
  indices: "Cash Indices",
  stocks: "Stocks",
};

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const sampleData = {
  FX: [
    {
      category: "Majors",
      Mon: { pricing: "00:00 - 23:59", trading: "00:01 - 23:59" },
      Tue: { pricing: "00:00 - 23:59", trading: "00:01 - 23:59" },
      Wed: { pricing: "00:00 - 23:59", trading: "00:01 - 23:59" },
      Thu: { pricing: "00:00 - 23:59", trading: "00:01 - 23:59" },
      Fri: { pricing: "00:00 - 23:59", trading: "00:01 - 23:59" },
    },
    {
      category: "Cross & Exotics",
      Mon: { pricing: "00:00 - 23:59", trading: "00:01 - 23:59" },
      Tue: { pricing: "00:00 - 23:59", trading: "00:01 - 23:59" },
      Wed: { pricing: "00:00 - 23:59", trading: "00:01 - 23:59" },
      Thu: { pricing: "00:00 - 23:59", trading: "00:01 - 23:59" },
      Fri: { pricing: "00:00 - 23:59", trading: "00:01 - 23:55" },
    },
    {
      category: "JPY Symbols",
      Mon: { pricing: "00:03 - 23:59", trading: "00:08 - 23:55" },
      Tue: { pricing: "00:03 - 23:59", trading: "00:05 - 23:55" },
      Wed: { pricing: "00:03 - 23:59", trading: "00:05 - 23:55" },
      Thu: { pricing: "00:03 - 23:59", trading: "00:05 - 23:55" },
      Fri: { pricing: "00:03 - 23:59", trading: "00:05 - 23:55" },
    },
  ],
  "Gold & Silver": [
    {
      category: "GOLD",
      Mon: { pricing: "01:00 - 24:00", trading: "01:05 - 23:59" },
      Tue: { pricing: "01:00 - 24:00", trading: "01:01 - 23:59" },
      Wed: { pricing: "01:00 - 24:00", trading: "01:01 - 23:59" },
      Thu: { pricing: "01:00 - 24:00", trading: "01:01 - 23:59" },
      Fri: { pricing: "01:00 - 24:00", trading: "01:01 - 23:55" },
    },
    {
      category: "SILVER",
      Mon: { pricing: "01:00 - 23:59", trading: "01:05 - 23:55" },
      Tue: { pricing: "01:00 - 23:59", trading: "01:01 - 23:55" },
      Wed: { pricing: "01:00 - 23:59", trading: "01:01 - 23:55" },
      Thu: { pricing: "01:00 - 23:59", trading: "01:01 - 23:55" },
      Fri: { pricing: "01:00 - 23:59", trading: "01:01 - 23:50" },
    },
  ],
  "Crude Oil": [
    {
      category: "BRNUSD",
      Mon: { pricing: "01:00 - 23:59", trading: "01:05 - 23:59" },
      Tue: { pricing: "03:00 - 23:59", trading: "03:01 - 23:59" },
      Wed: { pricing: "03:00 - 23:59", trading: "03:01 - 23:59" },
      Thu: { pricing: "03:00 - 23:59", trading: "03:01 - 23:59" },
      Fri: { pricing: "03:00 - 23:59", trading: "03:01 - 23:59" },
    },
    {
      category: "WTIUSD",
      Mon: { pricing: "01:00 - 24:00", trading: "01:05 - 23:59" },
      Tue: { pricing: "01:00 - 24:00", trading: "01:01 - 23:55" },
      Wed: { pricing: "01:00 - 24:00", trading: "01:01 - 23:55" },
      Thu: { pricing: "01:00 - 24:00", trading: "01:01 - 23:55" },
      Fri: { pricing: "01:00 - 23:59", trading: "01:01 - 23:59" },
    },
  ],
  Crypto: [
    {
      category: "Crypto",
      Mon: { pricing: "00:00 - 24:00", trading: "00:01 - 24:00" },
      Tue: { pricing: "00:00 - 24:00", trading: "00:01 - 24:00" },
      Wed: { pricing: "00:00 - 24:00", trading: "00:01 - 24:00" },
      Thu: { pricing: "00:00 - 24:00", trading: "00:01 - 24:00" },
      Fri: { pricing: "00:00 - 24:00", trading: "00:01 - 24:00" },
    },
  ],
  "Cash Indices": [
    {
      category: "AUS200c",
      Mon: {
        pricing: "02:50-09:30,10:10-23:59",
        trading: "02:51-09:30,10:11-23:57",
      },
      Tue: {
        pricing: "02:50-09:30,10:10-23:59",
        trading: "02:51-09:30,10:11-23:57",
      },
      Wed: {
        pricing: "02:50-09:30,10:10-23:59",
        trading: "02:51-09:30,10:11-23:57",
      },
      Thu: {
        pricing: "02:50-09:30,10:10-23:59",
        trading: "02:51-09:30,10:11-23:57",
      },
      Fri: {
        pricing: "00:50-08:30,09:10-22:57",
        trading: "00:51-08:30,09:11-22:57",
      },
    },
    {
      category: "CN50c",
      Mon: {
        pricing: "04:00-13:10,22:00-23:45",
        trading: "04:02-13:10,22:00-23:43",
      },
      Tue: {
        pricing: "04:00-13:10,22:00-23:45",
        trading: "04:00-13:10,22:00-23:45",
      },
      Wed: {
        pricing: "04:00-13:10,22:00-23:45",
        trading: "04:02-13:10,22:00-23:43",
      },
      Thu: {
        pricing: "04:00-13:10,22:00-23:45",
        trading: "04:02-13:10,22:00-23:43",
      },
      Fri: {
        pricing: "04:00-13:10,22:00-23:45",
        trading: "04:02-13:10,22:00-23:43",
      },
    },
    {
      category: "EU50c",
      Mon: { pricing: "03:15-22:59", trading: "03:16-22:56" },
      Tue: { pricing: "03:15-22:59", trading: "03:16-22:56" },
      Wed: { pricing: "03:15-22:59", trading: "03:16-22:56" },
      Thu: { pricing: "03:15-22:59", trading: "03:16-22:56" },
      Fri: { pricing: "03:15-22:59", trading: "03:16-22:56" },
    },
    {
      category: "GER40c",
      Mon: { pricing: "01:00-23:59", trading: "01:01-23:58" },
      Tue: { pricing: "01:00-23:59", trading: "01:01-23:58" },
      Wed: { pricing: "01:00-23:59", trading: "01:01-23:58" },
      Thu: { pricing: "01:00-23:59", trading: "01:01-23:58" },
      Fri: { pricing: "01:00-23:59", trading: "01:01-23:58" },
    },
    {
      category: "HK50c",
      Mon: {
        pricing: "04:15-07:00,08:00-13:10,15:22-00:00",
        trading: "04:18-07:00,08:00-11:30,12:15-21:59",
      },
      Tue: {
        pricing: "04:15-07:00,08:00-13:10,15:22-00:00",
        trading: "04:18-07:00,08:00-11:30,12:15-21:59",
      },
      Wed: {
        pricing: "04:15-07:00,08:00-13:10,15:22-00:00",
        trading: "04:18-07:00,08:00-11:30,12:15-21:59",
      },
      Thu: {
        pricing: "04:15-07:00,08:00-13:10,15:22-00:00",
        trading: "04:18-07:00,08:00-11:30,12:15-21:59",
      },
      Fri: {
        pricing: "04:15-07:00,08:00-13:10,15:22-00:00",
        trading: "04:18-07:00,08:00-11:30,12:15-21:56",
      },
    },
    {
      category: "JPN225c",
      Mon: { pricing: "01:00-23:59", trading: "01:01-23:58" },
      Tue: { pricing: "01:00-23:59", trading: "01:01-23:58" },
      Wed: { pricing: "01:00-23:59", trading: "01:01-23:58" },
      Thu: { pricing: "01:00-23:59", trading: "01:01-23:58" },
      Fri: { pricing: "01:00-23:56", trading: "01:01-23:56" },
    },
    {
      category: "UK100c",
      Mon: { pricing: "01:00-23:59", trading: "01:01-23:58" },
      Tue: { pricing: "01:00-23:59", trading: "01:01-23:58" },
      Wed: { pricing: "01:00-23:59", trading: "01:01-23:58" },
      Thu: { pricing: "01:00-23:59", trading: "01:01-23:58" },
      Fri: { pricing: "01:00-23:57", trading: "01:01-23:57" },
    },
    {
      category: "US30c",
      Mon: { pricing: "01:00-24:00", trading: "01:01-23:59" },
      Tue: { pricing: "01:00-24:00", trading: "01:01-23:59" },
      Wed: { pricing: "01:00-24:00", trading: "01:01-23:59" },
      Thu: { pricing: "01:00-24:00", trading: "01:01-23:59" },
      Fri: { pricing: "01:00-23:57", trading: "01:01-23:56" },
    },
    {
      category: "US500c",
      Mon: { pricing: "01:00-23:59", trading: "01:01-23:58" },
      Tue: { pricing: "01:00-23:59", trading: "01:01-23:58" },
      Wed: { pricing: "01:00-23:59", trading: "01:01-23:58" },
      Thu: { pricing: "01:00-23:59", trading: "01:01-23:58" },
      Fri: { pricing: "01:00-23:57", trading: "01:01-23:56" },
    },
    {
      category: "USTECHc",
      Mon: { pricing: "01:00-23:59", trading: "01:01-23:58" },
      Tue: { pricing: "01:00-23:59", trading: "01:01-23:58" },
      Wed: { pricing: "01:00-23:59", trading: "01:01-23:58" },
      Thu: { pricing: "01:00-23:59", trading: "01:01-23:58" },
      Fri: { pricing: "01:00-23:56", trading: "01:01-23:56" },
    },
  ],
  Stocks: [
    {
      category: "US Stocks",
      Mon: { pricing: "16:30 - 23:00", trading: "16:31 - 23:00" },
      Tue: { pricing: "16:30 - 23:00", trading: "16:31 - 23:00" },
      Wed: { pricing: "16:30 - 23:00", trading: "16:31 - 23:00" },
      Thu: { pricing: "16:30 - 23:00", trading: "16:31 - 23:00" },
      Fri: { pricing: "16:30 - 22:59", trading: "16:31 - 22:59" },
    },
    {
      category: "EU Stocks",
      Mon: { pricing: "10:00 - 19:29", trading: "10:01 - 19:29" },
      Tue: { pricing: "10:00 - 19:29", trading: "10:01 - 19:29" },
      Wed: { pricing: "10:00 - 19:29", trading: "10:01 - 19:29" },
      Thu: { pricing: "10:00 - 19:29", trading: "10:01 - 19:29" },
      Fri: { pricing: "10:00 - 19:29", trading: "10:01 - 19:29" },
    },
    {
      category: "Asia Stocks",
      Mon: {
        pricing: "03:30 - 07:00, 08:00 - 11:00",
        trading: "03:30 - 07:00, 08:00 - 11:00",
      },
      Tue: {
        pricing: "03:30 - 07:00, 08:00 - 11:00",
        trading: "03:30 - 07:00, 08:00 - 11:00",
      },
      Wed: {
        pricing: "03:30 - 07:00, 08:00 - 11:00",
        trading: "03:30 - 07:00, 08:00 - 11:00",
      },
      Thu: {
        pricing: "03:30 - 07:00, 08:00 - 11:00",
        trading: "03:30 - 07:00, 08:00 - 11:00",
      },
      Fri: {
        pricing: "03:30 - 07:00, 08:00 - 11:00",
        trading: "03:30 - 07:00, 08:00 - 11:00",
      },
    },
  ],
};

function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}

function TradingHoursTable({ rows }) {
  return (
    <div className="trading-hours-table-scroll mt-7 w-full max-w-full rounded-xl bg-white">
      <table className="min-w-[920px] w-full border-separate border-spacing-0">
          <thead>
            <tr className="text-white">
              <th
                rowSpan={2}
                className="w-[150px] bg-gradient-to-b from-[#263788] to-[#101638] px-4 py-3 text-left text-[16px] font-medium"
              >
                Symbols
              </th>
              {days.map((d) => (
                <th
                  key={d}
                  colSpan={2}
                  className="border-b border-l border-white px-3 py-2 text-center text-[16px] font-medium"
                  style={{
                    background:
                      "linear-gradient(180deg, #293B93 0%, #0D153A 100%)",
                  }}
                >
                  {d}
                </th>
              ))}
            </tr>
            <tr className="text-white/95">
              {days.flatMap((d) => [
                <th
                  key={`${d}-pricing`}
                  className="border-l border-white p-3 text-center text-[14px] font-normal"
                  style={{
                    background:
                      "linear-gradient(180deg, #293B93 0%, #0D153A 100%)",
                  }}
                >
                  Pricing Hour
                </th>,
                <th
                  key={`${d}-trading`}
                  className="border-l border-white p-3 text-center text-[14px] font-normal"
                  style={{
                    background:
                      "linear-gradient(180deg, #293B93 0%, #0D153A 100%)",
                  }}
                >
                  Trading Hour
                </th>,
              ])}
            </tr>
          </thead>
          <tbody className="bg-white">
            {rows.map((row, rowIndex) => (
              <tr key={`${row.symbol}-${rowIndex}`}>
                <td
                  className={[
                    "px-4 py-2.5 text-[14px] font-medium text-primary",
                    rowIndex === 0 ? "" : "border-t border-[#e6e6f0]",
                  ].join(" ")}
                >
                  {row.symbol}
                </td>
                {days.flatMap((d) => {
                  const cell = row.cells?.[d];
                  const pricing = cell?.pricing ?? "--";
                  const trading = cell?.trading ?? "--";
                  return [
                    <td
                      key={`${row.symbol}-${d}-p`}
                      className={[
                        "border-l border-[#ececf6] px-3 py-2.5 min-w-[118px] text-[14px] font-normal text-primary",
                        rowIndex === 0 ? "" : "border-t border-[#e6e6f0]",
                      ].join(" ")}
                    >
                      {pricing}
                    </td>,
                    <td
                      key={`${row.symbol}-${d}-t`}
                      className={[
                        "border-l border-[#ececf6] px-3 py-2.5 min-w-[118px] text-[14px] font-normal text-primary",
                        rowIndex === 0 ? "" : "border-t border-[#e6e6f0]",
                      ].join(" ")}
                    >
                      {trading}
                    </td>,
                  ];
                })}
              </tr>
            ))}
          </tbody>
      </table>
    </div>
  );
}

function normalizeRows(rawRows) {
  if (!rawRows?.length) return [];
  return rawRows.map((item) => {
    const cells = {};
    for (const day of days) {
      const dayData = item[day];
      if (dayData && typeof dayData === "object" && "pricing" in dayData) {
        cells[day] = {
          pricing: dayData.pricing ?? "--",
          trading: dayData.trading ?? "--",
        };
      } else {
        cells[day] = { pricing: "--", trading: "--" };
      }
    }
    return {
      symbol: item.category ?? "--",
      cells,
    };
  });
}

export default function TradingHoursSection() {
  const t = usePathTranslation("tradingTools.marketOverView.holiday");
  const [active, setActive] = useState("fx");

  const rows = useMemo(() => {
    const dataKey = TAB_TO_SAMPLE_KEY[active];
    const raw = dataKey ? sampleData[dataKey] : null;
    return normalizeRows(raw);
  }, [active]);

  return (
    <section className="bg-[#F4F4F4] py-8 md:py-14">
      <div className="container">
        <h2 className="HeadingH2">
          {t("trading", "Forex & CFD Trading Hours")}
        </h2>
        <p className="Text mt-3">
          {t(
            "hours",
            "View the latest trading hours for Forex, Metals, Commodities, and other financial instruments. GTCFX provides updated market session times to help you plan your trades effectively. Please note these times provided are subject to change. For the most accurate and real-time session details, please refer to your trading terminal or check the specifications of each instrument."
          )}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-2 md:gap-3">
          {tabs.map((t) => {
            const isActive = t.key === active;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setActive(t.key)}
                className={cx(
                  "rounded-[10px] px-6 py-3 text-[12px] font-medium transition md:text-[16px]",
                  isActive
                    ? "bg-secondary text-white"
                    : "bg-gradient-to-r from-[#293B93] to-[#0D153A] text-white"
                )}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <TradingHoursTable rows={rows} />
      </div>
    </section>
  );
}
