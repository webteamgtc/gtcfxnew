"use client";

const disclaimerSections = [
  {
    id: "regulated-jurisdiction",
    number: "01",
    title: "Regulated Jurisdiction",
    content: [
      "This website is published and owned by GTCFX, a duly licensed financial service provider authorized to conduct business in its regulated jurisdiction.",
      "GTCFX is not permitted to offer financial services in a jurisdiction where it lacks proper licensing or authorization.",
      "The financial products offered by GTCFX may not be available for sale in some jurisdictions.",
      "You should satisfy yourself that entry into a financial product offered by GTCFX is permissible in your jurisdiction.",
    ],
  },
  {
    id: "general-information",
    number: "02",
    title: "General Information Only",
    content: [
      "The information on this website is of a general nature only.",
      "To the extent any advice is provided, it is general advice only and does not take into account your objectives, financial situation, or needs.",
      "Design and Distribution Obligations may apply to the way we issue and distribute our products.",
      "Please contact us or refer to our Target Market Determination for more information.",
      "We may not provide products to customers outside of our Target Market.",
    ],
    highlight:
      "Any information or advice on this website is general in nature and should not be treated as personal financial advice.",
  },
  {
    id: "before-acting",
    number: "03",
    title: "Before Acting on Any Information",
    content: [
      "Before acting on any advice, you should consider whether it is appropriate in light of your objectives, financial situation, and needs.",
      "You should consult your own professional advisors before making any investment decision.",
      "You should obtain and read the Product Disclosure Statement, Target Market Determination, Financial Services Guide, Client Agreement, and Privacy Policy before proceeding.",
    ],
  },
  {
    id: "risk-warning",
    number: "04",
    title: "Risk Warning",
    content: [
      "Dealing with foreign exchange contracts and other over-the-counter derivative products carries significant risk.",
      "You may lose all of your initial investment.",
      "You may also incur losses that exceed your initial investment.",
    ],
    tone: "warning",
  },
  {
    id: "language-of-documents",
    number: "05",
    title: "Language of Documents",
    content: [
      "All documents available on this website, including company policies, warnings, related documents, and account opening documents, will be provided in the English language.",
    ],
  },
];

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M12 3l7 3v5c0 4.5-2.9 8.4-7 10-4.1-1.6-7-5.5-7-10V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12.2 11.3 14l3.7-3.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M12 8h.01M11 12h1v4h1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
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
        d="M12 9v4m0 3h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
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

function ContentsCard({ items }) {
  return (
    <aside className="lg:sticky lg:top-24">
      <div className="rounded-[28px] border border-[#DCE7F8] bg-white p-5 shadow-[0_12px_32px_rgba(15,59,140,0.06)]">
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0F3B8C]">
            Contents
          </p>
          <h3 className="mt-2 text-lg font-semibold text-slate-900">
            Website Disclaimer
          </h3>
        </div>

        <div className="space-y-3">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group flex items-center justify-between rounded-2xl border border-[#E5ECF7] bg-[#FCFDFF] px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0F3B8C]/30 hover:bg-[#F5F9FF] hover:text-[#0F3B8C]"
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

function DisclaimerSection({ section }) {
  const isWarning = section.tone === "warning";

  return (
    <section
      id={section.id}
      className="scroll-mt-28 rounded-[28px] border border-[#DCE7F8] bg-white p-6 shadow-[0_12px_32px_rgba(15,59,140,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0F3B8C]/25 hover:shadow-[0_18px_46px_rgba(15,59,140,0.10)] md:p-8"
    >
      <div className="mb-6 flex items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
            isWarning
              ? "bg-[#FFF4F4] text-[#C26B6B]"
              : "bg-[#EFF4FF] text-[#0F3B8C]"
          }`}
        >
          {isWarning ? <AlertIcon /> : <ShieldIcon />}
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-center gap-3">
            <span className="inline-flex rounded-xl bg-[#0F3B8C] px-3 py-1 text-xs font-semibold tracking-[0.16em] text-white">
              {section.number}
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-[#D8E4F8] to-transparent" />
          </div>

          <h2 className="HeadingH5">
            {section.title}
          </h2>
        </div>
      </div>

      {section.highlight && (
        <div className="mb-6 rounded-2xl border border-[#E7D4AE] bg-[linear-gradient(180deg,#FFFDF8_0%,#FFF7EA_100%)] p-4">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-[#B68756]">
              <InfoIcon />
            </div>
            <p className="text-sm leading-7 text-slate-700">
              {section.highlight}
            </p>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {section.content.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div
              className={`mt-1 ${
                isWarning ? "text-[#C26B6B]" : "text-[#0F3B8C]"
              }`}
            >
              <CheckIcon />
            </div>
            <p className="text-[15px] leading-8 text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function WebsiteDisclaimerPage() {
  return (
    <div className="bg-[linear-gradient(180deg,#F4F8FF_0%,#FFFFFF_35%,#F8FBFF_100%)]">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-xl bg-[#0F3B8C]/8 blur-3xl" />
          <div className="absolute right-0 top-16 h-72 w-72 rounded-xl bg-[#B68756]/10 blur-3xl" />
        </div>

        <div className="container pt-14 pb-10 md:pt-20 md:pb-14">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-xl border border-[#D9E5F7] bg-white/80 px-4 py-2 text-sm font-medium text-[#0F3B8C] backdrop-blur">
              <span className="h-2 w-2 rounded-xl bg-[#B68756]" />
              Legal Information
            </div>

            <h2 className="HeadingH3">
              Website <span className="text-secondary">Disclaimer</span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Important information regarding regulated jurisdictions, general
              website content, product availability, risk disclosure, and
              official document language.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[28px] border border-[#DCE7F8] bg-white/90 p-6 shadow-[0_12px_32px_rgba(15,59,140,0.06)] backdrop-blur md:p-8">
              <h2 className="text-xl font-semibold text-slate-900">
                About This Disclaimer
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-slate-700">
                This page outlines important legal and regulatory information
                regarding the use of this website, the nature of the content
                published on it, product availability, investment risk, and the
                language in which official documents are provided.
              </p>
              <p className="mt-4 text-[15px] leading-8 text-slate-700">
                Please review this information carefully before relying on any
                website content or proceeding with any financial product or
                service offered by GTCFX.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#E7D4AE] bg-[linear-gradient(180deg,#FFFDF8_0%,#FFF7EA_100%)] p-6 shadow-[0_12px_32px_rgba(182,135,86,0.10)]">
              <div className="mb-3 inline-flex rounded-xl bg-[#B68756] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                Important Notice
              </div>

              <div className="space-y-3">
                {[
                  "Product availability depends on your jurisdiction and applicable licensing permissions.",
                  "Website content is general in nature and may not be suitable for your individual circumstances.",
                  "Trading leveraged and OTC derivative products carries significant risk.",
                  "Official website documents are provided in English.",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 text-[#B68756]">
                      <CheckIcon />
                    </div>
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-16 md:pb-24">
        <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
          <ContentsCard items={disclaimerSections} />

          <div className="space-y-6 md:space-y-8">
            {disclaimerSections.map((section) => (
              <DisclaimerSection key={section.id} section={section} />
            ))}

            <section className="rounded-[28px] border border-[#DCE7F8] bg-white p-6 shadow-[0_12px_32px_rgba(15,59,140,0.06)] md:p-8">
              <div className="grid gap-6 md:grid-cols-1 md:items-center">
                <div>
                  <div className="mb-3 inline-flex rounded-xl bg-[#EFF4FF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#0F3B8C]">
                    Need More Information?
                  </div>

                  <h2 className="HeadingH4">
                    Review our legal documents or contact support
                  </h2>

                  <p className="mt-3 max-w-2xl text-[15px] leading-8 text-slate-600">
                    For additional details, please refer to the relevant legal
                    and product documentation, including the Product Disclosure
                    Statement, Client Agreement, Privacy Policy, and other
                    official notices available on our website.
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
                    href="#regulated-jurisdiction"
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