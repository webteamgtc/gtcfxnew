"use client";

import { useMemo } from "react";

const sections = [
  {
    id: "overview",
    number: "01",
    title: "Overview",
    content: [
      "Our standard account type is a swap enabled account. We may agree to make a Swap Free Account available to you upon request.",
      "Swap charges are rollover and interest charges applied when you leave a Position open overnight in accordance with the Platform time-zone (the “Swap Charges”).",
      "If a Swap Free Account is made available to you, you will be able to trade select instruments free of Swap Charges.",
      "If you have a Swap Free Account, all your Accounts will by default, unless agreed otherwise by us, be Swap Free Accounts.",
    ],
    notes: [
      "We may, at any time, at our discretion and without providing a reason, refuse to process a request for a Swap Free Account.",
      "We may amend, supplement, or revoke these Swap Free Terms without notice.",
      "We may revoke the Swap Free Account status granted to you, in which case your account will revert to a swap enabled account.",
    ],
  },
  {
    id: "applicable-fees",
    number: "02",
    title: "Applicable Fees",
    content: [
      "Where a Position, whether long or short, in an Instrument remains open longer than a prescribed period of time (the Grace Period), such Position will be subject to an administrative fee calculated on a daily basis (the “Administrative Fee”).",
      "The Administrative Fee is adjusted according to the platform policy.",
      "On Wednesdays or Fridays, the Administrative Fee applied to your open Positions will be three times the standard Administrative Fee, to reflect fees accrued on days where the Market or Underlying Market is closed.",
      "The Administrative Fee will appear on your statement each day as an “admin fee” and will be displayed on a per Instrument basis.",
      "The Administrative Fee will be deducted from the Equity in your Account at the end of each trading day.",
      "This may impact the Equity in your Account and may subsequently affect your Margin requirements. It is your responsibility to monitor your Account to ensure sufficient Margin is maintained.",
      "A list of the relevant Instruments, Grace Periods and Administrative Fees can be found through the applicable platform link. This list may be amended, supplemented or revoked at any time at our sole discretion.",
      "It is your responsibility to monitor the list and we are not responsible for any losses you may incur as a result of such changes.",
      "If, on the effective date of these Swap Free Terms, you have a Position that has been open for longer than the Grace Period, the applicable Administrative Fee will be charged immediately and without further notice.",
    ],
    callout:
      "Administrative fees may still apply to Swap Free Accounts once a position exceeds the grace period defined by platform policy.",
  },
  {
    id: "restrictions-termination",
    number: "03",
    title: "Restrictions and Termination",
    content: [
      "You are not permitted to use a Swap Free Account for the primary purpose of making a profit from Swap Charges.",
      "You agree that if you have an Account with us that is subsequently converted to a Swap Free Account, a Swap Charge otherwise payable to you may be lost during the conversion.",
      "If we detect abuse, fraud, manipulation, cash-back arbitrage, or any other deceitful or fraudulent activity on your Swap Free Account, we may act at our sole and absolute discretion.",
    ],
    notes: [
      "Exercise the rights and remedies available to us under the Terms.",
      "Revoke the swap-free status of your Swap Free Account with immediate effect.",
      "Correct and recover un-accrued Swap Charges, related un-accrued interest expenses and costs.",
      "Terminate these Swap Free Terms immediately without the need for notice or court order.",
    ],
    tone: "warning",
  },
  {
    id: "acknowledgment",
    number: "04",
    title: "Acknowledgment",
    content: [
      "You acknowledge, understand, and agree that we may, at any time and at our sole and absolute discretion, charge you additional fees, including Swap Charges or additional Administrative Charges, in the manner and for the period we deem appropriate.",
      "The minimum spread for listed instruments may be widened and the commission charged may be increased for a Swap Free Account.",
      "A Swap Free Account is subject to regular checks and monitoring.",
      "You may be charged a fee on the Products we offer upon the rollover of a Position if you trade in a symbol that is not available on the applicable list of Instruments.",
      "Any fee charged under this clause will appear on the Platform under the “swap” field.",
    ],
  },
];

function DocumentIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M8 3.75h5.5L19.25 9.5V18A2.25 2.25 0 0 1 17 20.25H8A2.25 2.25 0 0 1 5.75 18V6A2.25 2.25 0 0 1 8 3.75Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M13.5 3.75V8a1.5 1.5 0 0 0 1.5 1.5h4.25"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8.75 13h6.5M8.75 16.5h4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M20 7 10 17l-4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M12 8v5m0 3h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.72 3h16.92a2 2 0 0 0 1.72-3L13.71 3.86a2 2 0 0 0-3.42 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M5 12h14m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionCard({ section }) {
  const isWarning = section.tone === "warning";

  return (
    <section
      id={section.id}
      className="scroll-mt-28 rounded-3xl border border-[#DCE7F8] bg-white p-6 shadow-[0_10px_30px_rgba(15,59,140,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0F3B8C]/30 hover:shadow-[0_18px_45px_rgba(15,59,140,0.10)] md:p-8"
    >
      <div className="mb-6 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EFF4FF] text-[#0F3B8C]">
          <DocumentIcon />
        </div>

        <div className="min-w-0">
          <div className="mb-2 flex items-center gap-3">
            <span className="inline-flex rounded-full bg-[#0F3B8C] px-3 py-1 text-xs font-semibold tracking-[0.16em] text-white">
              {section.number}
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-[#D8E4F8] to-transparent" />
          </div>

          <h2 className="HeadingH5">
            {section.title}
          </h2>
        </div>
      </div>

      {section.callout && (
        <div className="mb-6 rounded-2xl border border-[#E7D4AE] bg-[#FFF8EA] p-4">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-[#B68756]">
              <AlertIcon />
            </div>
            <p className="text-sm leading-7 text-slate-700">{section.callout}</p>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {section.content?.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-1 text-[#0F3B8C]">
              <CheckIcon />
            </div>
            <p className="text-[15px] leading-8 text-slate-700">{item}</p>
          </div>
        ))}
      </div>

      {section.notes?.length > 0 && (
        <div
          className={`mt-8 rounded-2xl border p-5 ${
            isWarning
              ? "border-[#F2D4D4] bg-[#FFF7F7]"
              : "border-[#E6ECF5] bg-[#F8FBFF]"
          }`}
        >
          <div className="mb-4 flex items-center gap-2">
            <div className={isWarning ? "text-[#C26B6B]" : "text-[#B68756]"}>
              <AlertIcon />
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
              {isWarning ? "Important Actions We May Take" : "Important Notice"}
            </h3>
          </div>

          <div className="space-y-3">
            {section.notes.map((note, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0F3B8C]" />
                <p className="text-[15px] leading-7 text-slate-700">{note}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function TableOfContents({ items }) {
  return (
    <aside className="lg:sticky lg:top-24">
      <div className="rounded-3xl border border-[#DCE7F8] bg-white p-5 shadow-[0_10px_30px_rgba(15,59,140,0.06)]">
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0F3B8C]">
            Contents
          </p>
          <h3 className="mt-2 text-lg font-semibold text-slate-900">
            Swap Free Terms
          </h3>
        </div>

        <div className="space-y-3">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group flex items-center justify-between rounded-2xl border border-[#E6ECF5] bg-[#FCFDFF] px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0F3B8C]/30 hover:bg-[#F5F9FF] hover:text-[#0F3B8C]"
            >
              <span className="flex items-center gap-3">
                <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-lg bg-[#EFF4FF] px-2 text-xs font-semibold text-[#0F3B8C]">
                  {item.number}
                </span>
                <span>{item.title}</span>
              </span>
              <span className="text-[#0F3B8C] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ArrowRightIcon />
              </span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default function SwapFreeTermsPage() {
  const introPoints = useMemo(
    () => [
      "These Swap Free Terms and Conditions supplement the client agreement governing your trading relationship with GTCFX.",
      "The Terms remain an integral part of these Swap Free Terms.",
      "These provisions apply where your account type is designated as a Swap Free Account.",
    ],
    []
  );

  return (
    <div className="bg-[linear-gradient(180deg,#F4F8FF_0%,#FFFFFF_35%,#F8FBFF_100%)]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#0F3B8C]/8 blur-3xl" />
          <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-[#B68756]/10 blur-3xl" />
        </div>

        <div className="container pt-14 pb-10 md:pt-20 md:pb-14">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D9E5F7] bg-white/80 px-4 py-2 text-sm font-medium text-[#0F3B8C] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#B68756]" />
              Legal & Account Policy
            </div>

            <h2 className="HeadingH3 text-primary">
              Swap Free <span className="text-secondary">Terms And Conditions</span>
            </h2>

            <p className="Text mt-5">
              Clear, structured information about eligibility, applicable fees,
              restrictions, and important acknowledgments for Swap Free Accounts.
            </p>
          </div>

          <div className="mt-8 rounded-[28px] border border-[#DCE7F8] bg-white/90 p-6 shadow-[0_10px_30px_rgba(15,59,140,0.06)] backdrop-blur md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  About These Terms
                </h2>
                <p className="mt-4 text-[15px] leading-8 text-slate-700">
                  These swap-free trading account terms and conditions are a
                  supplement to the client agreement which governs our trading
                  relationship with you. The client agreement remains an
                  integral part of these Swap Free Terms and applies together
                  with them wherever relevant.
                </p>
                <p className="mt-4 text-[15px] leading-8 text-slate-700">
                  These terms apply to you if your account type is designated as
                  a swap free trading account.
                </p>
              </div>

              <div className="rounded-3xl border border-[#E7D4AE] bg-[linear-gradient(180deg,#FFFDF8_0%,#FFF7EA_100%)] p-5">
                <div className="mb-3 inline-flex rounded-full bg-[#B68756] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                  Quick Summary
                </div>

                <div className="space-y-3">
                  {introPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 text-[#B68756]">
                        <CheckIcon />
                      </div>
                      <p className="text-sm leading-7 text-slate-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-16 md:pb-24">
        <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
          <TableOfContents items={sections} />

          <div className="space-y-6 md:space-y-8">
            {sections.map((section) => (
              <SectionCard key={section.id} section={section} />
            ))}

            <section className="rounded-3xl border border-[#DCE7F8] bg-white p-6 shadow-[0_10px_30px_rgba(15,59,140,0.06)] md:p-8">
              <div className="grid gap-6 md:grid-cols-1 md:items-center">
                <div>
                  <div className="mb-3 inline-flex rounded-full bg-[#EFF4FF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#0F3B8C]">
                    Need Assistance?
                  </div>
                  <h2 className="HeadingH4">
                    Have questions about Swap Free Accounts?
                  </h2>
                  <p className="mt-3 max-w-2xl text-[15px] leading-8 text-slate-600">
                    Contact our support team for further clarification on account
                    eligibility, applicable instruments, grace periods, and
                    administrative fee treatment.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="/contact-us"
                    className="inline-flex items-center justify-center rounded-2xl bg-[#0F3B8C] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B2F70]"
                  >
                    Contact Support
                  </a>
                  <a
                    href="#overview"
                    className="inline-flex items-center justify-center rounded-2xl border border-[#D6E2F4] bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0F3B8C]/30 hover:text-[#0F3B8C]"
                  >
                    Back to Top
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}