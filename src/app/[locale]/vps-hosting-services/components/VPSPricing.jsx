"use client";
import React from "react";
import { translationText } from "@/i18n/tranlsationText";
function PricingCard({ index, ...props }) {
  const { title, cpu, ram, storage, free, price, month, btnText, caption } = props;
  return (
    <article className="group relative overflow-hidden rounded-[24px] border border-[#D9DEE8] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
      <h3 className="HeadingH4 text-center text-primary">{title}</h3>
      <div className="my-5 h-px w-full bg-[#D9DEE8]" />

      <ul className="space-y-2 text-left">
        {[cpu, ram, storage].filter(Boolean).map((line, i) => (
          <li key={i} className="TextSmall text-slate-700 ltr:text-left rtl:text-right border-b border-slate-200 pb-2">
            {line}
          </li>
        ))}
        {free ? (
          <li className="TextSmall text-slate-700 ltr:text-left rtl:text-right pt-1">
            {free}
          </li>
        ) : null}
      </ul>

      <div className="mt-7 text-center">
        <p className="TextSmall text-secondary">from</p>
        <p className="HeadingH3 mt-2 text-slate-900">{price}</p>
        <p className="TextSmall mt-1 text-slate-600">/{month}</p>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          className="TextButton rounded-xl bg-secondary px-6 py-3 text-white transition-colors hover:bg-primary"
          onClick={() => {
            const banner = document.getElementById("top-banner");
            if (banner) banner.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {btnText}
        </button>
      </div>

      {caption ? (
        <p className="TextSmall mt-3 text-center uppercase text-slate-500">
          {caption}
        </p>
      ) : null}

      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#263788] via-[#b68756] to-[#263788] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </article>
  );
}
const VpsPricing = ({ copy }) => {
  const pricingData = [
    {
      title: translationText("vpsPricing.bronze.title", "Bronze", copy),
        cpu: translationText("vpsPricing.bronze.option1", "1 CPU", copy),
      ram: translationText("vpsPricing.bronze.option2", "2,560MB RAM", copy),
      storage: translationText("vpsPricing.bronze.option3", "30GB SSD Storage", copy),
      free: translationText("vpsPricing.bronze.option4", "FREE with minimum balance of $5,000", copy),
      price: translationText("vpsPricing.bronze.amount", "$40.00", copy),
      month: translationText("vpsPricing.bronze.month", "Month", copy),
      btnText: translationText("vpsPricing.bronze.buttonText", "Subscribe Now", copy),
      caption: translationText("vpsPricing.bronze.caption", "ALL PRICES ARE SUBJECT TO VAT", copy),
    },
    {
        title: translationText("vpsPricing.silver.title", "Silver", copy),
      cpu: translationText("vpsPricing.silver.option1", "1 CPU", copy),
      ram: translationText("vpsPricing.silver.option2", "4,096MB RAM", copy),
      storage: translationText("vpsPricing.silver.option3", "50GB SSD Storage", copy),
      free: translationText("vpsPricing.silver.option4", "FREE with minimum balance of $7,500", copy),
        price: translationText("vpsPricing.silver.amount", "$70.00", copy),
      month: translationText("vpsPricing.silver.month", "Month", copy),
      btnText: translationText("vpsPricing.silver.buttonText", "Subscribe Now", copy),
      caption: translationText("vpsPricing.silver.caption", "ALL PRICES ARE SUBJECT TO VAT", copy),
    },
    {
      title: translationText("vpsPricing.gold.title", "Gold", copy),
      cpu: translationText("vpsPricing.gold.option1", "4 CPU", copy),
      ram: translationText("vpsPricing.gold.option2", "6,656MB RAM", copy),
      storage: translationText("vpsPricing.gold.option3", "75GB SSD Storage", copy),
      free: translationText("vpsPricing.gold.option4", "FREE with minimum balance of $10,000", copy),
      price: translationText("vpsPricing.gold.amount", "$120.00", copy),
      month: translationText("vpsPricing.gold.month", "Month", copy),
      btnText: translationText("vpsPricing.gold.buttonText", "Subscribe Now", copy),
      caption: translationText("vpsPricing.gold.caption", "ALL PRICES ARE SUBJECT TO VAT", copy),
    },
  ];
  return (
    <section className="bg-[#F8FAFC] py-10 md:py-14">
      <div className="container text-center">
        <h2 className="HeadingH2 text-primary">
          {translationText("vpsPricing.title", "VPS Pricing", copy)}
        </h2>
        <p className="Text mt-3 pb-6 max-w-3xl mx-auto">
          {translationText(
            "vpsPricing.para",
            "Wondering about the cost of our VPS service? We’ve got you covered.",
            copy
          )}
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingData?.map((single, index) => (
            <PricingCard
            key={index}
              title={single?.title}
              index={index}
              cpu={single?.cpu}
              ram={single?.ram}
              storage={single?.storage}
              free={single?.free}
              price={single?.price}
              month={single?.month}
              btnText={single?.btnText}
              caption={single?.caption}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VpsPricing;
