"use client";

import React from "react";
import { usePathTranslation } from "@/app/[locale]/LocaleProvider";

const HowItWorksSection = () => {
  const t = usePathTranslation("gtcGoApp.howItWorks");

  const steps = [
    {
      title: t("steps.step1.title"),
      description: t(
        "steps.step1.description"
      ),
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-10 w-10"
          aria-hidden="true"
        >
          <path
            d="M7 10a1 1 0 0 1 1-1h2V4h4v5h2a1 1 0 0 1 .8 1.6l-4 5.333a1 1 0 0 1-1.6 0l-4-5.333A1 1 0 0 1 7 10Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: t("steps.step2.title"),
      description: t(
        "steps.step2.description"
      ),
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-10 w-10"
          aria-hidden="true"
        >
          <path
            d="M12 12a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm0 2c-3.33 0-6 1.343-6 3v1h12v-1c0-1.657-2.67-3-6-3Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: t("steps.step3.title"),
      description: t(
        "steps.step3.description"
      ),
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-10 w-10"
          aria-hidden="true"
        >
          <path
            d="M12.001 6.88 10.59 5.47a5 5 0 0 0-7.071 7.071l1.414 1.415L12 21.95l7.071-7.994 1.414-1.415a5 5 0 0 0-7.071-7.07L12.001 6.88Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-12 md:py-14 bg-[#f8f8f8] overflow-hidden border-t border-slate-200 border-b" id="works">
      <div className="container">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[#293794] via-[#000021] to-[#000021] text-transparent bg-clip-text">
            {t("title")}
          </h2>
          <p className="mt-3 text">
            {t("subtitle")}
          </p>
        </div>

        {/* Steps card */}
        <div className="rounded-3xl bg-[#fff] shadow-[0_18px_45px_rgba(15,23,42,0.06)] border border-slate-100 px-6 py-10 md:px-10 md:py-12">
          <div className="grid gap-8 md:grid-cols-3 md:gap-10 text-center">
            {steps.map((step) => (
              <div key={step.title} className="flex flex-col items-center gap-4">
                {/* Icon wrapper */}
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-indigo-50 text-secondary text-5xl">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 md:mt-4 text-center">
          <button
            onClick={() => {
              document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-6 px-8 py-3 rounded-xl bg-gradient-to-r from-[#293794] to-[#000021] text-white font-semibold shadow-lg shadow-blue-200 hover:opacity-90 transition"
          >
            {t("cta")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;