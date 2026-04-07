"use client";

import React from "react";
import Image from "next/image";

function isNonEmptyString(v) {
  return typeof v === "string" && v.trim().length > 0;
}

function getArray(v) {
  if (Array.isArray(v)) return v.filter(isNonEmptyString);
  if (isNonEmptyString(v)) return [v]; // if someone accidentally made it a string
  return [];
}

function getObjValues(v) {
  if (!v || typeof v !== "object" || Array.isArray(v)) return [];
  return Object.values(v).filter(isNonEmptyString);
}

export default function LervageNewUpdate({ copy }) {
  const u = copy?.update || {};

  // RAW safe reads
  const economicList = getArray(u?.economic?.list);
  const importantList = getArray(u?.important?.list);

  const mondayChina = getArray(u?.times?.monday?.china);
  const mondayServer = getArray(u?.times?.monday?.server);
  const mondayUae = getArray(u?.times?.monday?.uae);

  const rolloverPoints = getObjValues(u?.rollover?.points);
  const hmrList = getObjValues(u?.hmrBox?.list);
  const hmrParas = getObjValues(u?.hmrBox?.paragraphs);
  const hmrNoticeParas = getObjValues(u?.hmrNotice?.paragraphs);

  // Section show conditions
  const showEconomic = economicList.length > 0;
  const showImportant = importantList.length > 0;

  const showMonday =
    mondayChina.length > 0 || mondayServer.length > 0 || mondayUae.length > 0;

  const showRollover =
    isNonEmptyString(u?.rollover?.title) &&
    (isNonEmptyString(u?.rollover?.schedule?.label) ||
      isNonEmptyString(u?.rollover?.schedule?.time) ||
      rolloverPoints.length > 0);

  const showHmrBox =
    isNonEmptyString(u?.hmrBox?.title) &&
    (hmrList.length > 0 || hmrParas.length > 0 || isNonEmptyString(u?.hmrBox?.highlight));

  const showHmrNotice =
    isNonEmptyString(u?.hmrNotice?.title) && hmrNoticeParas.length > 0;

  return (
    <section className="bg-gray-200 py-12 md:py-14">
      <div className="container">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto my-2">
          {/* LEFT */}
          <div>
            <h2 className="text-2xl md:text-3xl text-primary mb-4">
              {u?.title}
            </h2>

            <p className="text-sm text-gray-700 leading-6 mb-6">
              {u?.intro}
            </p>

            {/* Weekend */}
            <div className="bg-gray-50 rounded-lg p-5 mb-6 border-l-4 border-primary">
              <h3 className="text-xl font-medium text-primary mb-3 pb-2 border-b border-gray-200">
                {u?.weekend?.title}
              </h3>

              {/* Before Friday */}
              <div className="mb-4">
                <h4 className="text-secondary font-medium mb-2">
                  {u?.weekend?.beforeFridayClose}
                </h4>

                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-14 font-medium text-primary">
                      {u?.times?.friday?.china}
                    </span>
                    <span className="text-gray-600">{u?.weekend?.china}</span>
                  </li>

                  <li className="flex items-center">
                    <span className="w-14 font-medium text-primary">
                      {u?.times?.friday?.server}
                    </span>
                    <span className="text-gray-600">{u?.weekend?.server}</span>
                  </li>

                  <li className="flex items-center">
                    <span className="w-14 font-medium text-primary">
                      {u?.times?.friday?.uae}
                    </span>
                    <span className="text-gray-600">{u?.weekend?.uae}</span>
                  </li>
                </ul>
              </div>

              {/* After Monday */}
              <div>
                <h4 className="text-secondary font-medium mb-2">
                  {u?.weekend?.afterMondayOpen}
                </h4>

                {/* ✅ Only render if monday times exist */}
                {showMonday ? (
                  <ul className="space-y-2">
                    {mondayChina.map((time, i) => (
                      <li
                        key={`cn-${i}`}
                        className={i === 1 ? "flex items-center text-red-600 italic" : "flex items-center"}
                      >
                        <span className={i === 1 ? "w-14 font-medium" : "w-14 font-medium text-primary"}>
                          {time}
                        </span>
                        <span className={i === 1 ? "" : "text-gray-600"}>
                          {i === 1
                            ? `${u?.weekend?.cutoff} (${u?.weekend?.china})`
                            : u?.weekend?.china}
                        </span>
                      </li>
                    ))}

                    {mondayServer.map((time, i) => (
                      <li
                        key={`sv-${i}`}
                        className={i === 1 ? "flex items-center text-red-600 italic" : "flex items-center"}
                      >
                        <span className={i === 1 ? "w-14 font-medium" : "w-14 font-medium text-primary"}>
                          {time}
                        </span>
                        <span className={i === 1 ? "" : "text-gray-600"}>
                          {i === 1
                            ? `${u?.weekend?.cutoff} (${u?.weekend?.server})`
                            : u?.weekend?.server}
                        </span>
                      </li>
                    ))}

                    {mondayUae.map((time, i) => (
                      <li
                        key={`uae-${i}`}
                        className={i === 1 ? "flex items-center text-red-600 italic" : "flex items-center"}
                      >
                        <span className={i === 1 ? "w-14 font-medium" : "w-14 font-medium text-primary"}>
                          {time}
                        </span>
                        <span className={i === 1 ? "" : "text-gray-600"}>
                          {i === 1
                            ? `${u?.weekend?.cutoff} (${u?.weekend?.uae})`
                            : u?.weekend?.uae}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>

            {/* Economic (only if list exists) */}
            {showEconomic ? (
              <div className="bg-gray-50 rounded-lg p-5 mb-6 border-l-4 border-secondary">
                <h3 className="text-xl font-medium text-secondary mb-3">
                  {u?.economic?.title}
                </h3>
                <ul className="list-disc pl-5 text-sm text-gray-700 leading-6 ltr:text-left rtl:text-right space-y-1">
                  {economicList.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full h-60 md:h-[510px] rounded-lg overflow-hidden shadow-sm">
              <Image
                src="/lerv.webp"
                alt="Leverage schedule visualization"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Legend (optional; keep hardcoded or later localize) */}
            <div className="flex flex-col sm:flex-row sm:justify-around gap-3 bg-gray-50 p-3 rounded-md">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-blue-500"></span>
                <span className="text-sm text-gray-600">{u?.legend?.china}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-green-500"></span>
                <span className="text-sm text-gray-600">{u?.legend?.server}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-purple-500"></span>
                <span className="text-sm text-gray-600">{u?.legend?.uae}</span>
              </div>
            </div>

            {/* Important notes (only if list exists) */}
            {showImportant ? (
              <div className="bg-red-50 rounded-lg p-5 border-l-4 border-red-500">
                <h3 className="text-xl font-medium text-red-600 mb-2">
                  {u?.important?.title}
                </h3>
                <ul className="list-disc pl-5 text-sm text-gray-700 ltr:text-left rtl:text-right leading-6 space-y-1">
                  {importantList.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        {/* Rollover (only if something exists) */}
        {showRollover ? (
          <div className="max-w-6xl mx-auto mt-6">
            <div className="w-full bg-white rounded-lg shadow-md p-6 md:p-8 border-l-4 border-primary my-6">
              <h3 className="text-2xl font-semibold text-primary mb-3">
                {u?.rollover?.title}
              </h3>

              {(isNonEmptyString(u?.rollover?.schedule?.label) ||
                isNonEmptyString(u?.rollover?.schedule?.time) ||
                isNonEmptyString(u?.rollover?.schedule?.days)) && (
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  {isNonEmptyString(u?.rollover?.schedule?.label) && (
                    <p className="text-gray-700 font-medium">
                      {u?.rollover?.schedule?.label}
                    </p>
                  )}

                  {(isNonEmptyString(u?.rollover?.schedule?.time) ||
                    isNonEmptyString(u?.rollover?.schedule?.timezone)) && (
                    <p className="text-lg font-semibold text-gray-900 mt-1">
                      {u?.rollover?.schedule?.time}{" "}
                      {isNonEmptyString(u?.rollover?.schedule?.timezone)
                        ? `(${u?.rollover?.schedule?.timezone})`
                        : ""}
                    </p>
                  )}

                  {isNonEmptyString(u?.rollover?.schedule?.days) && (
                    <p className="text-sm text-gray-500 mt-1">
                      {u?.rollover?.schedule?.days}
                    </p>
                  )}
                </div>
              )}

              {rolloverPoints.length > 0 ? (
                <div className="space-y-3 text-gray-700">
                  {rolloverPoints.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ) : null}

        {/* HMR BOX (only if exists) */}
        {showHmrBox ? (
          <div className="max-w-6xl mx-auto mt-6 ltr:text-left rtl:text-right">
            <div className="w-full bg-gray-50 rounded-xl border-l-4 border-secondary p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {u?.hmrBox?.title}
              </h3>

              {hmrList.length > 0 ? (
                <ul className="list-disc ltr:pl-5 rtl:pr-5 text-sm text-gray-700 ltr:text-left rtl:text-right space-y-1 mb-4">
                  {hmrList.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              ) : null}

              {hmrParas.length > 0 ? (
                <>
                  {hmrParas.map((p, i) => (
                    <p key={i} className="text-sm text-gray-700 mb-2">
                      {p}
                    </p>
                  ))}
                </>
              ) : null}

              {isNonEmptyString(u?.hmrBox?.highlight) ? (
                <p className="text-sm font-medium text-gray-900">
                  {u?.hmrBox?.highlight}
                </p>
              ) : null}
            </div>
          </div>
        ) : null}

        {/* HMR NOTICE (only if exists) */}
        {showHmrNotice ? (
          <div className="max-w-6xl mx-auto mt-10">
            <div className="w-full bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {u?.hmrNotice?.title}
              </h3>

              {hmrNoticeParas.map((p, i) => (
                <p key={i} className="text-sm text-gray-700 leading-6">
                  {p}
                </p>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
