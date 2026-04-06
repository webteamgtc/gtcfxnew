"use client";

import { useGlossaryHook } from "./hooks";

const defaultBrowse = "Browse by letter";
const defaultEmpty = "No glossary entries for this letter yet.";

export default function GlossaryList({
  browseByLetter = defaultBrowse,
  noTerms = defaultEmpty,
}) {
  const { list, active, setActive, data } = useGlossaryHook();

  return (
    <div className="">
      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 md:text-left">
        {browseByLetter}
      </p>

      <div
        className="flex flex-wrap justify-center gap-1 rounded-2xl border border-gray-300 bg-gray-100 p-2 md:gap-2 md:rounded-3xl md:p-2"
        role="tablist"
        aria-label={browseByLetter}
      >
        {list?.map((letter) => {
          const isActive = active === letter;
          return (
            <button
              key={letter}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="glossary-term-panel"
              id={`glossary-tab-${letter}`}
              onClick={() => setActive(letter)}
              className={`min-h-10 min-w-10 rounded-full px-3 text-sm font-semibold transition-all duration-200 md:min-w-[2.5rem] ${
                isActive
                  ? "scale-105 bg-gradient-to-r from-[#263788] to-[#101638] text-white shadow-[0_8px_24px_rgba(38,55,136,0.35)] ring-2 ring-primary/25"
                  : "border border-transparent text-[#2f2f2f] hover:border-primary/20 hover:bg-white hover:text-primary"
              }`}
            >
              {letter}
            </button>
          );
        })}
      </div>

      <div
        id="glossary-term-panel"
        role="tabpanel"
        aria-labelledby={`glossary-tab-${active}`}
        className="mt-8 overflow-hidden rounded-[14px] border border-[#ececec] md:rounded-[16px]"
      >
        <div className="bg-gradient-to-r from-[#263788] via-[#1a2460] to-[#101638] px-5 py-4 md:px-6 md:py-5">
          <h2 className="HeadingH3 m-0 text-white md:text-2xl">{active}</h2>
        </div>

        {data?.length ? (
          <dl className="divide-y divide-slate-100">
            {data.map((row) => (
              <div
                key={`${active}-${row?.term ?? "term"}-${row?.definition?.slice?.(0, 24) ?? ""}`}
                className="px-5 py-4 transition-colors hover:bg-slate-50/90 md:px-6 md:py-5"
              >
                <dt className="text-base font-semibold text-secondary md:text-lg">
                  {row?.term}
                </dt>
                <dd className="Text mt-2 text-[15px] leading-relaxed text-slate-600 md:mt-2 md:text-base md:leading-7">
                  {row?.definition}
                </dd>
              </div>
            ))}
          </dl>
        ) : (
          <p className="Text px-5 py-12 text-center text-slate-500 md:px-6">
            {noTerms}
          </p>
        )}
      </div>
    </div>
  );
}
