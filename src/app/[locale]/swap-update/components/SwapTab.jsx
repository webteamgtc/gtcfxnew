"use client";

import { useMemo, useState } from "react";

export default function SwapTab({ data }) {
  const tabs = useMemo(() => Object.keys(data || {}), [data]);
  const [active, setActive] = useState(tabs[0] || "");

  const rows = Array.isArray(data?.[active]) ? data[active] : [];
  const columns = rows.length ? Object.keys(rows[0]) : [];

  const formatValue = (col, value) => {
    const needsSign = col === "swap long" || col === "swap short";
    if (typeof value === "string") return value;
    if (!needsSign) return value;
    const num = typeof value === "number" ? value : Number(value);
    if (Number.isNaN(num)) return value;
    return num > 0 ? `+${num.toFixed(2)}` : num.toFixed(2);
  };

  return (
    <div className="tabs-container md:pt-8">
      <div className="tabs-header scrollbar-hide flex gap-2 overflow-x-auto border-b pb-2 md:gap-4">
        {tabs.map((tab) => {
          const selected = tab === active;
          return (
            <button
              type="button"
              key={tab}
              onClick={() => setActive(tab)}
              className={`TextButton whitespace-nowrap rounded-t-lg px-3 py-2 transition-all md:px-6 ${
                selected
                  ? "bg-gradient-to-r from-primary to-[#263B93] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="tab-content mt-4 rounded-lg border border-gray-300 p-4 shadow-lg">
        {rows.length ? (
          <div className="max-h-[600px] overflow-y-auto">
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gradient-to-r from-primary to-[#263B93] text-white capitalize">
                  {columns.map((column) => (
                    <th
                      key={column}
                      className="TextSmall border border-gray-300 px-4 py-2 font-medium ltr:text-left rtl:text-right"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={
                      rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100 hover:bg-gray-50"
                    }
                  >
                    {columns.map((col) => (
                      <td key={col} className="TextSmall border border-gray-300 px-4 py-3">
                        {formatValue(col, row[col])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="Text py-8 text-center text-gray-500">No data available for {active}.</div>
        )}
      </div>
    </div>
  );
}

