"use client";

import { usePathTranslation } from "../../LocaleProvider";

function ShieldIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 3l7 3.5V12c0 4.5-2.8 7.6-7 9-4.2-1.4-7-4.5-7-9V6.5L12 3z" />
      <path d="m9.5 12 1.7 1.7 3.8-3.8" />
    </svg>
  );
}

function PdfIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" />
      <path d="M14 2v5h5" />
      <path d="M8 13h2a2 2 0 1 1 0 4H8z" />
      <path d="M14 13h3" />
      <path d="M14 17h3" />
    </svg>
  );
}

export default function SecurityOfFundSection() {
  const t = usePathTranslation("about.client-fund-insurance");

  const infoCards = [
    {
      title: t("heading1", "How does it work?"),
      description: t(
        "desc1_1"
      ),
    },
    {
      title: t("heading2", "How is the Security Of Fund financed?"),
      description: t(
        "desc2_1"
      ),
    },
    {
      title: t("heading3"),
      description: t(
        "desc3_1"
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#fff] to-[#fff] py-10 md:py-16">
      <div className="container relative z-10">
        {/* Intro Block */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <div className="">
              <div className="flex items-center gap-3 text-[#b68756]">
                <ShieldIcon />
                <h2 className="HeadingH3 text-primary">
                  {t("title")}
                </h2>
              </div>

              <p className="mt-6 text-[15px] leading-7 text-[#374151] md:text-[17px] md:leading-8">
                {t("sub_title1_1")}
              </p>

              <p className="mt-5 text-[15px] leading-7 text-[#374151] md:text-[17px] md:leading-8">
                {t("sub_title1_2")} {t("sub_title1_3")}
              </p>

              <p className="mt-5 text-[15px] leading-7 text-[#374151] md:text-[17px] md:leading-8">
                {t(
                  "sub_title1_4"                )}
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#263788] px-6 text-sm font-semibold text-white transition hover:opacity-90 md:px-8 md:text-base"
                >
                  {t("visitButton", "Visit Now")}
                </a>

                <a
                  href="#"
                  className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl border border-[#263788] bg-white px-6 text-sm font-semibold text-[#263788] transition hover:bg-[#263788]/5 md:px-8 md:text-base"
                >
                  <PdfIcon />
                  {t("downloadButton")}
                </a>
              </div>
            </div>
          </div>

          {/* Side Trust Box */}
          <div className="lg:col-span-4">
            <div className="rounded-[32px] bg-gradient-to-br from-[#263788] via-[#1F2C73] to-[#101638] p-6 text-white shadow-[0_20px_60px_rgba(38,55,136,0.18)] md:p-8">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-[#E5D0B2]">
                {t("protectionBadge")}
              </span>

              <h3 className="mt-5 text-[28px] font-bold leading-tight md:text-[36px]">
                {t("upToLabel", "Up to")}{" "}
                <span className="text-secondary">€20,000</span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/85 md:text-base">
                {t("sideDescription")}
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm leading-7 text-white/80">
                  {t("sideNote")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {infoCards.map((item, index) => (
            <div
              key={index}
              className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] md:p-7"
            >
              <div className="mb-5 h-1.5 w-16 rounded-full bg-[#b68756]" />
              <h3 className="HeadingH4">
                {item.title}
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-[#4B5563] md:text-base md:leading-8">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Maximum Coverage */}
        <div className="mt-12 rounded-[30px] border border-[#E5E7EB] bg-white p-6 shadow-sm md:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <div className="inline-flex rounded-full border border-[#b68756]/20 bg-[#b68756]/10 px-4 py-1.5 text-sm font-semibold text-[#b68756]">
                {t("maximumCoverageBadge")}
              </div>

              <h3 className="HeadingH3 py-3">
                {t("heading4")}
              </h3>
            </div>

            <div className="lg:col-span-8">
              <p className="text-[15px] leading-7 text-[#374151] md:text-[17px] md:leading-8">
                {t("desc4_1", "")} {t("desc4_2", "")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="pointer-events-none absolute left-[-90px] top-24 h-[220px] w-[220px] rounded-full bg-[#263788]/5 blur-3xl" />
      <div className="pointer-events-none absolute right-[-100px] bottom-10 h-[260px] w-[260px] rounded-full bg-[#b68756]/10 blur-3xl" />
    </section>
  );
}