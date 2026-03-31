"use client";

import Image from "next/image";
import awardsData from "./awards";

function AwardCard({ item }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex rounded-full bg-[#b68756]/10 px-3 py-1 text-xs font-semibold text-[#b68756]">
          {item.year}
        </span>
      </div>

      <div className="relative mt-5 flex h-[190px] items-center justify-center">
        <Image
          src={item.image}
          alt={item.title}
          width={150}
          height={190}
          className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-6 flex flex-1 flex-col text-center">
        <h3 className="HeadingH5">{item.event}</h3>

        <p className="mt-3 text-[15px] font-medium leading-7 text-[#111827] md:text-base">
          {item.title}
        </p>

        <div className="mx-auto my-5 h-px w-full max-w-[220px] bg-[#E5E7EB]" />

        <p className="mt-auto text-sm leading-6 text-[#b68756] md:text-[15px]">
          {item.note} - {item.year}
        </p>
      </div>
    </div>
  );
}

export default function AwardsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#fff] to-[#fff] py-10 md:py-16">
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-[#b68756]/20 bg-[#b68756]/10 px-4 py-1.5 text-sm font-semibold text-[#b68756]">
            Awards & Recognition
          </span>

          <h2 className="HeadingH3 py-4">
            Award-Winning CFD Broker{" "}
            <span className="text-[#b68756]">Recognized for Excellence</span>
          </h2>

          <p className="Text">
            GTCFX has earned industry recognition across multiple international
            expos and financial events, reflecting our commitment to innovation,
            service quality, and excellence in global trading solutions.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {awardsData.map((item) => (
            <AwardCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute left-[-90px] top-24 h-[240px] w-[240px] rounded-full bg-[#263788]/5 blur-3xl" />
      <div className="pointer-events-none absolute right-[-100px] bottom-10 h-[260px] w-[260px] rounded-full bg-[#b68756]/10 blur-3xl" />
    </section>
  );
}