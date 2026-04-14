import { fetchHolidayScheduleMatrix } from "@/lib/holiday-schedule";
import { getDictionary } from "@/i18n/request";
import { translationTextByPath } from "@/i18n/tranlsationText";

const staticColumns = [
  { key: "instrument", label: "Instrument" },
  { key: "mar8", label: "08 March 2026, Sunday" },
  { key: "mar20", label: "20 March 2026, Friday" },
  { key: "mar27", label: "27 March 2026, Sunday" },
];

const staticRows = [
  { instrument: "FX", mar8: "Daylight Saving Time US", mar20: "Normal Trading Hours", mar27: "Normal Trading Hours" },
  { instrument: "Metals", mar8: "Daylight Saving Time US", mar20: "Normal Trading Hours", mar27: "Normal Trading Hours" },
  { instrument: "Oil/Energies (BRNUSD)", mar8: "Daylight Saving Time US", mar20: "Normal Trading Hours", mar27: "Daylight Saving Time Europe" },
  { instrument: "Oil/Energies (WTIUSD)", mar8: "Daylight Saving Time US", mar20: "Normal Trading Hours", mar27: "Daylight Saving Time Europe" },
  { instrument: "Oil/Energies (NGCUSD)", mar8: "Daylight Saving Time US", mar20: "Normal Trading Hours", mar27: "Daylight Saving Time Europe" },
  { instrument: "Indices - AUS200", mar8: "Normal Trading Hours", mar20: "Normal Trading Hours", mar27: "Normal Trading Hours" },
  { instrument: "Indices - CN50", mar8: "Normal Trading Hours", mar20: "Normal Trading Hours", mar27: "Normal Trading Hours" },
  { instrument: "Indices - EU50", mar8: "Normal Trading Hours", mar20: "Normal Trading Hours", mar27: "Daylight Saving Time Europe" },
  { instrument: "Indices - GER40", mar8: "Normal Trading Hours", mar20: "Normal Trading Hours", mar27: "Daylight Saving Time Europe" },
  { instrument: "Indices - HKG50", mar8: "Normal Trading Hours", mar20: "Normal Trading Hours", mar27: "Normal Trading Hours" },
  { instrument: "EU Shares/Exchange - SX", mar8: "Normal Trading Hours", mar20: "Normal Trading Hours", mar27: "Daylight Saving Time Europe" },
  { instrument: "EU Shares/Exchange - BM", mar8: "Normal Trading Hours", mar20: "Normal Trading Hours", mar27: "Daylight Saving Time Europe" },
  { instrument: "US Shares/Exchange - NYSE", mar8: "Daylight Saving Time US", mar20: "Normal Trading Hours", mar27: "Normal Trading Hours" },
  { instrument: "US Shares/Exchange - NASD", mar8: "Daylight Saving Time US", mar20: "Normal Trading Hours", mar27: "Normal Trading Hours" },
  { instrument: "Asia Shares/Exchange - HKEX", mar8: "Normal Trading Hours", mar20: "Normal Trading Hours", mar27: "Normal Trading Hours" },
  { instrument: "Crypto", mar8: "Normal Trading Hours", mar20: "Normal Trading Hours", mar27: "Normal Trading Hours" },
  { instrument: "Futures GOLD", mar8: "Daylight Saving Time US", mar20: "Normal Trading Hours", mar27: "Normal Trading Hours" },
];

function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}

function cellText(value) {
  if (value == null || value === "") return "";
  return String(value);
}

function renderCellContent(item) {
  const text = cellText(item);
  if (!text) return null;

  return text.split("\n").map((line, i) => (
    <span key={i} className="block whitespace-pre-wrap">
      {line}
    </span>
  ));
}

function getCellClass(item) {
  const raw = cellText(item).trim().toLowerCase();
  if (!raw) return "";

  if (raw.includes("early closed") || raw.includes("early close"))
    return "bg-secondary text-white";
  if (raw.includes("closed")) return "bg-primary text-white";

  return "";
}

function HolidayTableStatic() {
  return (
    <table className="w-full border-separate border-spacing-x-1.5 border-spacing-y-1.5">
      <thead>
        <tr>
          {staticColumns.map((c) => (
            <th
              key={c.key}
              className="rounded-[5px] px-4 py-3 text-center text-[16px] font-medium text-[#B48755]"
              style={{
                border: "1px solid #D9D9D9",
                background: "linear-gradient(180deg, #293B93 0%, #0D153A 100%)",
              }}
            >
              {c.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {staticRows.map((r, i) => (
          <tr key={r.instrument}>
            <td
              className={cx(
                "rounded-[5px] border border-[#D9D9D9] px-4 py-3 text-center text-[14px] font-medium text-primary",
                i % 2 === 1 ? "bg-[#F2F2F2]" : "bg-white"
              )}
            >
              {r.instrument}
            </td>
            <td
              className={cx(
                "rounded-[5px] border border-[#D9D9D9] px-4 py-3 text-center text-[14px] font-normal text-[#3b3b5a]",
                i % 2 === 1 ? "bg-[#F2F2F2]" : "bg-white"
              )}
            >
              {r.mar8}
            </td>
            <td
              className={cx(
                "rounded-[5px] border border-[#D9D9D9] px-4 py-3 text-center text-[14px] font-normal text-[#3b3b5a]",
                i % 2 === 1 ? "bg-[#F2F2F2]" : "bg-white"
              )}
            >
              {r.mar20}
            </td>
            <td
              className={cx(
                "rounded-[5px] border border-[#D9D9D9] px-4 py-3 text-center text-[14px] font-normal text-[#3b3b5a]",
                i % 2 === 1 ? "bg-[#F2F2F2]" : "bg-white"
              )}
            >
              {r.mar27}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function HolidayTableFromSheet({ matrix }) {
  const header = matrix[0] ?? [];
  const bodyRows = matrix.slice(1).map((row) => ({
    instrument: row[0],
    data: row.slice(1),
  }));

  return (
    <table className="w-full border-separate border-spacing-x-1.5 border-spacing-y-1.5">
      <thead>
        <tr>
          {header.length > 0 ? (
            header.map((h, index) => (
              <th
                key={index}
                className="rounded-[5px] px-4 py-3 text-center text-[16px] font-medium text-[#B48755]"
                style={{
                  border: "1px solid #D9D9D9",
                  background: "linear-gradient(180deg, #293B93 0%, #0D153A 100%)",
                }}
              >
                {cellText(h) || "—"}
              </th>
            ))
          ) : (
            <th
              className="rounded-[5px] px-4 py-3 text-center text-[16px] font-medium text-[#B48755]"
              style={{
                border: "1px solid #D9D9D9",
                background: "linear-gradient(180deg, #293B93 0%, #0D153A 100%)",
              }}
            >
              —
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {bodyRows.map((row, index) => (
          <tr key={`${cellText(row.instrument)}-${index}`}>
            <td
              className={cx(
                "rounded-[5px] border border-[#D9D9D9] px-4 py-3 text-center text-[14px] font-medium text-primary",
                index % 2 === 1 ? "bg-[#F2F2F2]" : "bg-white"
              )}
            >
              {cellText(row.instrument) || "—"}
            </td>
            {row.data.map((item, idx) => (
              <td
                key={idx}
                className={cx(
                  "rounded-[5px] border border-[#D9D9D9] px-4 py-3 text-center text-[14px] font-normal text-[#3b3b5a]",
                  getCellClass(item) ||
                    (index % 2 === 1 ? "bg-[#F2F2F2]" : "bg-white")
                )}
              >
                <span className="text-sm">{renderCellContent(item)}</span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default async function HolidayHoursNoticesSection({ locale }) {
  const dict = await getDictionary(locale);
  const t = (path, fallback = "") =>
    translationTextByPath(`tradingTools.marketOverView.holiday.${path}`, fallback, dict);
  const matrix = await fetchHolidayScheduleMatrix(locale);
  const useRemote =
    Array.isArray(matrix) &&
    matrix.length > 0 &&
    Array.isArray(matrix[0]) &&
    matrix[0].length > 0;

  return (
    <section className="bg-white py-8 md:py-14">
      <div className="container">
        <h2 className="HeadingH2">{t("title", "Holiday Hours & Notices")}</h2>
        <p className="Text mt-3">
          {t(
            "des",
            "Market holidays may affect the trading schedule and volatility of the markets. This can vary from country to country, so it is important to stay up to date with the upcoming changes and holiday trading hours to plan your trades accordingly."
          )}
        </p>

        <div className="trading-hours-table-scroll mt-10 max-w-full rounded-xl bg-white">
          <div className="min-w-[680px]">
            {useRemote ? (
              <HolidayTableFromSheet matrix={matrix} />
            ) : (
              <div>{t("noData", "No data available")}</div>
            )}
          </div>
        </div>

        <ul className="mt-10 space-y-3 leading-[1.7] Text">
          <li className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#293B93]" />
            {t(
              "note1",
              "Please note these times provided are subject to change, any changes to the times can always be found in the Specification of the instrument in the trading terminal."
            )}
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#293B93]" />
            {t(
              "note2",
              "Please note that there could be unexpected periods of volatility, low liquidity, and some LP’s will increase the spreads during holidays."
            )}
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#293B93]" />
            {t("note3", "Dates are subject to change by the respective markets.")}
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#293B93]" />
            {t(
              "note4",
              "Clients are kindly requested to manage their accounts and positions during the trading hours of the company as listed above."
            )}
          </li>
        </ul>
      </div>
    </section>
  );
}
