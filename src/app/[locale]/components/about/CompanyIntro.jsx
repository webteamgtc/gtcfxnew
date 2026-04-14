"use client";

import React from "react";
import { usePathTranslation } from "../../LocaleProvider";

const text = (value, fallback) =>
  typeof value === "string" && value.trim().length > 0 ? value : fallback;

const CompanyIntro = () => {
  const t = usePathTranslation("about.about-gtc-group");

  const aboutItems = [
    {
      title: text(t("heading1", ""), ""),
      paragraphs: [text(t("desc1_1", ""), ""), text(t("desc1_2", ""), "")].filter(Boolean),
    },
    {
      title: text(t("heading2", ""), ""),
      paragraphs: [text(t("desc2_1", ""), ""), text(t("desc2_2", ""), "")].filter(Boolean),
    },
    {
      title: text(t("heading3", ""), ""),
      paragraphs: [text(t("desc3", ""), ""), text(t("desc3_1", ""), "")].filter(Boolean),
    },
    {
      title: text(t("heading4", ""), ""),
      paragraphs: [text(t("desc4", ""), ""), text(t("desc4_1", ""), "")].filter(Boolean),
    },
  ].filter((item) => item.title || item.paragraphs.length);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-4 items-center justify-center">
          <span className="rounded-full bg-[#b68756]/10 px-4 py-1.5 text-sm font-semibold text-[#b68756]">
            {text(t("title", ""), "")}
          </span>

          <h2 className="HeadingH3 mt-4 text-primary">
            {text(t("subTitle", ""), "")}
          </h2>

          <p className="Text md:leading-8">
            {text(t("desc1_2", ""), "")}
          </p>
        </div>

        <div className="mt-12 space-y-5">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-[#E5E7EB] bg-[#F1F2F4] p-6 shadow-sm transition hover:shadow-md md:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
                <div className="md:w-[220px] md:flex-shrink-0">
                  <h3 className="HeadingH4 text-secondary">{item.title}</h3>
                </div>

                <div className="h-px w-full bg-[#E5E7EB] md:hidden" />

                <div className="space-y-4">
                  {item.paragraphs.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="Text md:leading-8"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;