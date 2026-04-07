"use client";

import React, { useMemo } from "react";

/**
 * ✅ High Margin Requirement (HMR) FAQ
 * JSON format:
 * lervage.highMarginRequirement.heading
 * lervage.highMarginRequirement.one.ques
 * lervage.highMarginRequirement.one.paragraphs = { one:"", two:"" ... }
 * lervage.highMarginRequirement.one.list = { one:"", two:"" ... } (optional)
 * lervage.highMarginRequirement.one.note = "" (optional)
 *
 * ✅ Fix included:
 * - If note key is missing, it will NOT render "lervage....note"
 */

function get(obj, path) {
  return String(path)
    .split(".")
    .reduce((acc, key) => (acc && typeof acc === "object" ? acc[key] : undefined), obj);
}

export default function HighMarginRequirementFAQ({ copy }) {
  const base = copy?.highMarginRequirement || {};

  const keys = useMemo(
    () => ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"],
    []
  );

  // ✅ Safely read optional string keys (avoid rendering missing key path)
  const getOptionalString = (keyPath) => {
    const value = get(base, keyPath);
    return typeof value === "string" && value.trim().length ? value.trim() : null;
  };

  const faqs = useMemo(() => {
    return keys.map((k) => {
      const paragraphsRaw = get(base, `${k}.paragraphs`);
      const listRaw = get(base, `${k}.list`);

      return {
        title: get(base, `${k}.ques`) || "",
        paragraphs: isPlainObject(paragraphsRaw) ? paragraphsRaw : {},
        list: isPlainObject(listRaw) ? listRaw : null,
        note: getOptionalString(`${k}.note`), // ✅ optional
      };
    });
  }, [base, keys]);

  return (
    <section className="pb-12 pt-1">
      <FrequentlyAskedQuestions heading={get(base, "heading") || ""} data={faqs} />
    </section>
  );
}

function FrequentlyAskedQuestions({ heading, data }) {
  if (!data || data.length < 1) return null;

  return (
    <section className="max-w-6xl mt-6 mx-auto">
      {heading ? (
        <div className="relative text-center">
          <h2
            style={{ lineHeight: "4rem" }}
            className="HeadingH2 text-primary capitalize mb-6"
          >
            {heading}
          </h2>
        </div>
      ) : null}

      <div className="space-y-3">
        {data
          .filter((x) => x?.title)
          .map((item, index) => (
            <details
              key={`${item.title}-${index}`}
              className="group rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                <span className="TextButton text-slate-900">
                  {item.title}
                </span>
                <span className="text-slate-500 group-open:hidden text-lg">+</span>
                <span className="text-slate-500 hidden group-open:block text-lg">−</span>
              </summary>

              <AccordionBody paragraphs={item.paragraphs} list={item.list} note={item.note} />
            </details>
          ))}
      </div>
    </section>
  );
}

function AccordionBody({ paragraphs, list, note }) {
  const paragraphValues = useMemo(() => objectValuesInOrder(paragraphs), [paragraphs]);
  const listValues = useMemo(() => (list ? objectValuesInOrder(list) : []), [list]);

  return (
    <div className="mt-2 space-y-4">
      {paragraphValues.map((p, idx) => (
        <p key={idx} className="TextSmall text-slate-700">
          {p}
        </p>
      ))}

      {listValues.length > 0 ? (
        <ul className="TextSmall list-disc pl-5 space-y-2 text-slate-700">
          {listValues.map((li, idx) => (
            <li key={idx}>{li}</li>
          ))}
        </ul>
      ) : null}

      {note ? <p className="TextSmall text-slate-600 italic">{note}</p> : null}
    </div>
  );
}

/* ---------- helpers ---------- */

function isPlainObject(v) {
  return v !== null && typeof v === "object" && !Array.isArray(v);
}

// Sorts keys like one,two,three... if present; otherwise falls back to insertion order
function objectValuesInOrder(obj) {
  if (!isPlainObject(obj)) return [];

  const order = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
  ];

  const keys = Object.keys(obj);

  const ranked = [...keys].sort((a, b) => {
    const ai = order.indexOf(a);
    const bi = order.indexOf(b);
    if (ai === -1 && bi === -1) return 0;
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });

  return ranked.map((k) => obj[k]).filter(Boolean);
}
