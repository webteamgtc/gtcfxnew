"use client";

import { useState } from "react";

const legalData = {
  "GTC Financial Consultancy": [
    {
      title: "GTC Financial Consultancy and GTC Global LTD ( Mauritius)",
      items: [
        {
          name: "Client Onboarding Application GTC FC - MU – Retail V1.0",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Ltd/01.+Client+Onboarding+Application+GTC+FC+-+Retail+V1.0+.pdf",
        },
        {
          name: "Corporate Onboarding Application GTC FC - MU - Corporate V1.0",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Ltd/01.+Corporate+Onboarding+Application+GTC+FC+-+MU+V1.0.pdf",
        },
        {
          name: "Terms of Business",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Ltd/03.+GTC+FC-MU+Retail+TOB+V1.0+09-06-2025.pdf",
        },
        {
          name: "Complaint Handling Policy",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Ltd/04.+Complaint+Handling+Policy+V1.0+09-06-2025.pdf",
        },
        {
          name: "Conflict of Interest Policy",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Ltd/05.+Conflict+of+Interest+Policy+V1.0+09-06-2025.pdf",
        },
        {
          name: "Risk Warning Policy",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Ltd/06.+GTC+Financial+Consultancy+LLC+%E2%80%93+Risk+Warning+Notice+V1.0+09-06-2025.pdf",
        },
        {
          name: "Cookie Policy",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Ltd/07.+GTC+Financial+COnultancy+LLC+-+Cookie+Policy++V1.0+09-06-2025.pdf",
        },
        {
          name: "Privacy Policy",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Ltd/08.+Privacy+Policy+%E2%80%93+GTC+Financial+Consultancy+LLC+V1.0+09-06-2025.pdf",
        },
      ],
    },
    {
      title: "GTC Financial Consultancy and GTC Global Trade Capital Co.Ltd (Vanuatu)",
      items: [
        {
          name: "Client Onboarding Application GTC FC - VA – Retail V1.0",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Trade+Capital+Ltd/01.+Client+Onboarding+Application+GTC+FC+-+Retail+V1.0+.pdf#",
        },
        {
          name: "Corporate Onboarding Application GTC FC - VA - Corporate V1.0",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Trade+Capital+Ltd/01.+Client+Onboarding+Application+GTC+FC+-+Vanuatu+-+Croporate+V1.0.pdf",
        },
        {
          name: "Terms of Business",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Trade+Capital+Ltd/03.+GTC+FC+TOB+V1.0+V1.0+09-06-2025.pdf",
        },
        {
          name: "Complaint Handling Policy",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Trade+Capital+Ltd/04.+Complaint+Handling+Policy++V1.0+09-06-2025.pdf",
        },
        {
          name: "Conflict of Interest Policy",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Trade+Capital+Ltd/05.+Conflict+of+Interest+Policy+V1.0+09-06-2025.pdf",
        },
        {
          name: "Risk Disclosure",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Trade+Capital+Ltd/06.+GTC+Financial+Consultancy+LLC+%E2%80%93+Risk+Warning+Notice+1.0V1.0+09-06-2025.pdf",
        },
        {
          name: "Cookie Policy",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Trade+Capital+Ltd/07.+GTC+Financial+COnultancy+LLC+-+Cookie+Policy+V1.0+09-06-2025.pdf",
        },
        {
          name: "Privacy Policy",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Financial+Consultancy/GTC+Fin+Consultancy+%26+GTC+Global+Trade+Capital+Ltd/08.+Privacy+Policy+%E2%80%93+GTC+Financial+Consultancy+LLC+V1.0+09-06-2025.pdf",
        },
      ],
    },
  ],
  "GTC Global LTD ( Mauritius)": [
    {
      title: "Documents",
      items: [
        {
          name: "Client Onboarding Application - MU – Retail",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+LTD/Individual+Application+Form+-GTC+Global+Ltd..pdf",
        },
        {
          name: "Corporate Onboarding Application - MU - Corporate",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+LTD/Corporate+Account+Opening+-+GTC+Global+Ltd..pdf",
        },
        {
          name: "Client Agreement",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+LTD/Mauritius+TOB+-+Proposed+Clauses+to+add.pdf",
        },
        {
          name: "Privacy Policy",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+LTD/PRIVACY%2BPOLICY%2BGTCFX.pdf",
        },
        {
          name: "Risk Disclosure",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+LTD/Risk%2BWarning.pdf",
        },
        {
          name: "Cookie Policy",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+LTD/Cookie%2BPolicy.pdf",
        },
        {
          name: "Website Disclaimer",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+LTD/Website%2BDisclaimer.pdf",
        },
        {
          name: "Terms & Conditions",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+LTD/TERMS+AND+CONDITIONS+-+GTC+Global+Ltd.pdf",
        },
      ],
    },
  ],
  "GTC Global Trade Capital Co.Ltd (Vanuatu)": [
    {
      title: "Documents",
      items: [
        {
          name: "Client Agreement",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+Trade+Capital+Co.+Ltd+(VANUATU)/Vanuatu+-+TOB.pdf",
        },
        {
          name: "Privacy Policy",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+Trade+Capital+Co.+Ltd+(VANUATU)/Vanuatu++PRIVACY%2BPOLICY%2BGTCFX.pdf",
        },
        {
          name: "Risk Disclosure",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+Trade+Capital+Co.+Ltd+(VANUATU)/Vanuatu+-+Risk%2BWarning.pdf",
        },
        {
          name: "Cookie Policy",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+Trade+Capital+Co.+Ltd+(VANUATU)/Vanuatu++-+Cookie%2BPolicy.pdf",
        },
        {
          name: "Website Disclaimer",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+Trade+Capital+Co.+Ltd+(VANUATU)/Vanuatu++-+Website%2BDisclaimer.pdf",
        },
        {
          name: "Terms & Conditions",
          link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+Trade+Capital+Co.+Ltd+(VANUATU)/T%26S+-+GTC+GLOBAL+TRADE+CAPITAL+CO.+LTD.pdf",
        },
      ],
    },
  ],
};

function PdfIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 2h7l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"
        fill="#EF4444"
      />
      <path d="M14 2v5h5" fill="#FCA5A5" />
      <path
        d="M8 16h1.2c.9 0 1.5-.5 1.5-1.3 0-.9-.6-1.3-1.5-1.3H8V16Zm4 0h1v-1h.9c1 0 1.7-.5 1.7-1.4 0-.9-.7-1.4-1.7-1.4H12V16Zm4.2 0H18v-.9h-1.1v-.8H18v-.9h-1.1v-.8H18V12h-2.8v4Zm-3.2-1.8v-1.4h.7c.5 0 .8.2.8.7 0 .5-.3.7-.8.7H13Z"
        fill="white"
      />
    </svg>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function DocumentRow({ item }) {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-4 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-4 transition-all duration-300 hover:border-[#b68756]/30 hover:bg-[#fffaf5]"
    >
      <div className="flex items-center gap-3">
        <PdfIcon />
        <span className="text-sm font-medium leading-6 text-primary md:text-base">
          {item.name}
        </span>
      </div>

      <span className="shrink-0 text-sm font-semibold text-[#b68756] transition group-hover:translate-x-1">
        Open →
      </span>
    </a>
  );
}

function Accordion({ section, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 bg-gradient-to-r from-[#263788] to-[#1A225E] px-5 py-4 text-left text-white md:px-6"
      >
        <span className="text-base font-semibold md:text-lg">{section.title}</span>
        <ChevronIcon open={open} />
      </button>

      {open && (
        <div className="space-y-3 p-4 md:p-5">
          {section.items.map((item, index) => (
            <DocumentRow key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function LegalPoliciesClientAgreementsPage() {
  const tabs = Object.keys(legalData);
  const [activeTab, setActiveTab] = useState(tabs[0] || "");

  const current = legalData[activeTab] || [];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] py-14 md:py-20">
      <div className="pointer-events-none absolute left-[-100px] top-10 h-[240px] w-[240px] rounded-xl bg-[#263788]/5 blur-3xl" />
      <div className="pointer-events-none absolute right-[-100px] bottom-10 h-[260px] w-[260px] rounded-xl bg-[#b68756]/10 blur-3xl" />

      <div className="container relative z-10">
        {/* Hero */}
        <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-[#263788] to-[#1A225E] px-6 py-10 text-white shadow-[0_20px_50px_rgba(38,55,136,0.18)] md:px-10 md:py-12">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-xl border border-white/10 bg-white/10 px-4 py-1.5 text-sm font-semibold text-[#E5D0B2]">
              Legal Documents
            </span>

            <h2 className="HeadingH2 mt-5">
              Legal Policies & <span className="text-secondary">Client Agreements</span>
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/85 md:text-base md:leading-8">
              Access all legal documents, onboarding forms, privacy policies,
              risk disclosures, and regulatory information for GTC Financial
              Consultancy, GTC Global LTD (Mauritius), and GTC Global Trade
              Capital Co. Ltd (Vanuatu).
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap gap-3 border-b border-[#E5E7EB] pb-5">
          {Object.entries(legalData).map(([key]) => {
            const active = activeTab === key;

            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={`rounded-xl px-4 py-3 text-sm font-semibold transition md:px-5 md:text-base ${
                  active
                    ? "bg-[#0B0F3F] text-white shadow-md"
                    : "bg-white text-primary border border-[#E5E7EB] hover:bg-[#F8FAFC]"
                }`}
              >
                {key}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="mt-8 space-y-5">
          {current.map((section, index) => (
            <Accordion
              key={`${activeTab}-${index}`}
              section={section}
              defaultOpen={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}