"use client";

import React from "react";
import { useTranslations } from "next-intl";

const GtcTestimonials = () => {
  const t = useTranslations("gtcGoApp.testimonials");
  
  const testimonialsColumns = [
    t.raw("reviews.column1"),
    t.raw("reviews.column2"),
    t.raw("reviews.column3"),
  ];

  return (
    <section className="bg-white py-12 md:py-20" id="reviews">
      <div className="container">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[#293794] via-[#000021] to-[#000021] text-transparent bg-clip-text">
            {t("title")}
          </h2>
          <p className="mt-3 text">
            {t("subtitle")}
          </p>
        </div>

        {/* Columns */}
        <div className="relative">
          {/* fade top */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent z-10" />
          {/* fade bottom */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonialsColumns.map((column, colIndex) => (
              <div
                key={colIndex}
                className="testimonial-group relative h-[420px] overflow-hidden"
              >
                {/* animated column */}
                <div
                  className={
                    colIndex === 0
                      ? "testimonial-column-fast flex flex-col gap-4"
                      : colIndex === 1
                      ? "testimonial-column flex flex-col gap-4"
                      : "testimonial-column-slow flex flex-col gap-4"
                  }
                >
                  {[...column, ...column].map((item, idx) => (
                    <ReviewCard key={idx} {...item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GtcTestimonials;

/* ---------- Review Card (First-letter Avatar) ---------- */

const ReviewCard = ({ name, text }) => {
  const initial = name?.charAt(0)?.toUpperCase();

  return (
    <article className="mx-auto w-full max-w-sm rounded-2xl bg-[#f8f8f8]/90 border border-slate-100 shadow-sm shadow-slate-200/60 p-4 flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#293794] to-[#000021] flex items-center justify-center text-white text-sm font-semibold">
          {initial}
        </div>

        <div className="text-left">
          <p className="text-sm font-semibold text-slate-900 leading-tight">
            {name}
          </p>
        </div>
      </div>

      {/* Body */}
      <p className="text-sm text-slate-700 leading-relaxed">{text}</p>
    </article>
  ); 
};
