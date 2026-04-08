"use client";
import React from "react";
import { GrUserSettings } from "react-icons/gr";
import { TbChartCandleFilled } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";

const WhoServeSection = ({ copy }) => {
  const cardsData = [
    {
      icon: <FaUsers />,
      title: copy?.whoServe?.broker?.title,
      paragraph: copy?.whoServe?.broker?.desc, // Keep the original text with \n
      link: "",
    },
    {
      icon: <GrUserSettings />,
      title: copy?.whoServe?.hedge?.title,
      paragraph: copy?.whoServe?.hedge?.desc, // Keep the original text with \n
      link: "",
    },
    {
      icon: <TbChartCandleFilled />,
      title: copy?.whoServe?.professional?.title,
      paragraph: copy?.whoServe?.professional?.desc || "", // Keep the original text with \n
      link: "",
    },
  ].filter((c) => c?.title);

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="HeadingH2">
            {copy?.whoServe?.heading}
          </h2>
          <p className="Text mt-3">
            {copy?.whoServe?.desc}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cardsData.map((item, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-[24px] border border-[#D9DEE8] bg-[#F1F2F4] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#b68756]/10 text-[#b68756]">
                    <span className="text-[22px]">{item.icon}</span>
                  </div>
                  <h3 className="HeadingH4 text-primary">{item.title}</h3>
                </div>
              </div>

              <div className="my-5 h-px w-full bg-[#D9DEE8]" />

              <div className="space-y-2">
                {(item.paragraph || "").split("\n").filter(Boolean).map((line, i) => (
                  <p key={i} className="TextSmall text-[#374151] ltr:text-left rtl:text-right">
                    {line}
                  </p>
                ))}
              </div>

              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#263788] via-[#b68756] to-[#263788] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoServeSection;