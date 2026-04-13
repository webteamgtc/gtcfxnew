"use client";

const policySections = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction",
    type: "info",
    content: [
      "The deposit and refund conditions are provided by the Company to its Clients under the Execution Policy as amended from time to time.",
      "Clients must carefully read and understand these conditions before funding their accounts.",
    ],
  },
  {
    id: "acknowledgements",
    number: "02",
    title: "Acknowledgements",
    type: "info",
    content: [
      "The Client acknowledges that they have read, understood, and accepted the Deposit and Refund conditions as amended and reviewed on a regular and ongoing basis.",
      "This acknowledgment applies in addition to any other information, policy, or agreements available on the Company’s website.",
    ],
  },
  {
    id: "deposit-procedure",
    number: "03",
    title: "Deposit Procedure",
    type: "info",
    content: [
      "Third-party payments are prohibited. Clients may only use cards or bank accounts under the same name as registered with GTC.",
      "The Company may require proof from the Client at any time. Failure to comply may result in the payment being frozen or void.",
      "Deposits to GTC should be made from an approved funding source such as a bank account, payment system, or credit/debit card.",
      "Clients may log in to the MyGTC portal, and the Company’s bank account details are available for wire transfer.",
      "For new clients, or existing clients issuing a new Visa or Mastercard, a Whitelisting process may be required through the relevant payment service provider.",
      "The Company may need to submit documents for Whitelisting, including proof of identity, proof of residence, and trading account statements showing deposits made by the Client.",
      "The Company enforces a limitation of up to three cards per client.",
      "If a Client needs to replace card details after exceeding the three-card allocation, the Client may contact the payment team.",
      "Clients should avoid using prepaid cards or any payment method that does not support refunds.",
      "The Company does not charge transfer fees for deposit or withdrawal methods, but intermediary banks or e-wallets may charge fees beyond the Company’s control.",
      "The Company reserves the right to collect certain fees on both deposit and withdrawal transactions.",
      "Any deposit fee will be deducted from the deposited amount.",
      "You may be required to provide a screenshot from your currency wallet showing GTC transactions clearly.",
      "Funds will normally be reflected within 48 hours after verification of the deposit transaction.",
      "All information regarding your currency wallet or related details must only be sent through the official GTC email address.",
      "The Company will never request private currency wallet details through unauthorized sources.",
    ],
  },
  {
    id: "card-security-verification",
    number: "04",
    title: "Card Security and Verification",
    type: "highlight",
    content: [
      "Clients may be required to send a scanned colored copy of both sides of the card to combat fraud, but only when explicitly requested by the Company.",
      "Before sending card copies, Clients must black out all digits except the first 6 and last 4 digits on the front side of the card.",
      "The CVV code on the back side of the card must also be covered.",
      "The first 6 and last 4 embossed digits on the front side must remain visible.",
      "All other required details must remain clear and visible, and the signature section must be signed.",
      "The Company will never ask for sensitive card details such as the full card number, CVV code, 3D secure code, or PIN.",
      "If a suspicious request for sensitive details is received from an unclear source, the Client should contact support immediately.",
    ],
    highlight:
      "For security reasons, clients should only provide masked card copies when officially requested by GTC, and should never share full card details or CVV information.",
  },
  {
    id: "refund-conditions",
    number: "05",
    title: "Refund Conditions",
    type: "gold",
    content: [
      "GTC provides clients with a clear and transparent refund policy.",
      "If a Client is not satisfied with the Company’s service level and has not made any trading, investing, or conversion transactions, the Client may request a refund.",
      "The Company offers a 100% refund within 1 working day of the original service deposit.",
      "Refund requests will be reviewed within 5 business days.",
      "After 1 day, the deposit will no longer be refundable and will instead be treated as a normal withdrawal under the existing withdrawal terms and conditions.",
      "The Client agrees not to request a refund or chargeback from their payment method provider while using or after using the Company’s services.",
      "Profits or losses resulting from trading activity are not eligible for refund.",
      "Refunds must only be made to the same payment system or card used for the original deposit.",
      "If requested fraud-prevention documents are not provided, the refund may be processed net of PSP fees.",
    ],
    highlight:
      "A full refund may be available only within 1 working day, and only where no trading, investing, or conversion activity has taken place.",
  },
  {
    id: "additional-documents",
    number: "06",
    title: "Additional Documents for Refund Review",
    type: "info",
    content: [
      "Clients may be required to provide a clearer copy of their identification document, such as a passport or government-issued ID card.",
      "Clients may be required to provide a clearer copy of proof of address, such as a utility bill, bank statement, or card statement issued within the last three months.",
      "Clients may also need to confirm possession of the card used for deposit.",
      "This may include a recent bank statement containing the cardholder’s full name and the first 6 and last 4 digits of the card number, with sensitive data covered.",
      "If screenshots are provided, the URL page must be visible.",
      "An authorization code for the payment may also be requested.",
      "Clients may also be required to provide clearer color copies of both sides of the card, with the middle section covered and only the first 6 and last 4 digits visible.",
      "The CVC/CVV on the back must be covered, and the card back side must be signed by the cardholder.",
      "Failure to provide the requested documents may result in a refund of the amount net of PSP fees.",
    ],
  },
  {
    id: "aml-rights",
    number: "07",
    title: "AML and Company Rights",
    type: "warning",
    content: [
      "If the origin of the Client’s funds or the Client’s activities are found to be contrary to the Company’s Anti-Money Laundering Policy, the Company reserves unilateral rights to cancel the transfer of funds.",
      "This may apply to both deposits and withdrawals.",
      "The Company may also freeze assets in order to return or refund them back where necessary.",
      "Additional conditions or requirements may apply at any time due to regulations, internal policies, or anti-money laundering controls.",
    ],
  },
  {
    id: "dispute-handling",
    number: "08",
    title: "Dispute Handling",
    type: "info",
    content: [
      "Any dispute arising out of or in connection with the Deposit and Refund Policy will be handled by the Company in accordance with its Complaint Handling Policy.",
      "All complaints must be submitted in writing.",
      "Complaints should be addressed to the Customer Support team via email.",
      "Use of the website and services remains subject to the Terms and Conditions, as amended from time to time by GTC at its sole discretion.",
    ],
  },
];

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
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

function AlertIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
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

function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
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

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
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

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
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

function getSectionStyles(type) {
  if (type === "warning") {
    return {
      iconWrap: "bg-[#FFF4F4] text-[#C26B6B]",
      bullet: "text-[#C26B6B]",
      highlightBox: "border-[#F3D2D2] bg-[#FFF7F7]",
      highlightIcon: "text-[#C26B6B]",
    };
  }

  if (type === "highlight") {
    return {
      iconWrap: "bg-[#EFF4FF] text-[#0F3B8C]",
      bullet: "text-[#0F3B8C]",
      highlightBox: "border-[#DCE7F8] bg-[#F8FBFF]",
      highlightIcon: "text-[#0F3B8C]",
    };
  }

  if (type === "gold") {
    return {
      iconWrap: "bg-[#FFF8EA] text-[#B68756]",
      bullet: "text-[#B68756]",
      highlightBox:
        "border-[#E7D4AE] bg-[linear-gradient(180deg,#FFFDF8_0%,#FFF7EA_100%)]",
      highlightIcon: "text-[#B68756]",
    };
  }

  return {
    iconWrap: "bg-[#EFF4FF] text-[#0F3B8C]",
    bullet: "text-[#0F3B8C]",
    highlightBox: "border-[#DCE7F8] bg-[#F8FBFF]",
    highlightIcon: "text-[#0F3B8C]",
  };
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
            Deposit & Refund Policy
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

function PolicySectionCard({ section }) {
  const styles = getSectionStyles(section.type);

  return (
    <section
      id={section.id}
      className="scroll-mt-28 rounded-[28px] border border-[#DCE7F8] bg-white p-6 shadow-[0_12px_32px_rgba(15,59,140,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0F3B8C]/25 hover:shadow-[0_18px_46px_rgba(15,59,140,0.10)] md:p-8"
    >
      <div className="mb-6 flex items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${styles.iconWrap}`}
        >
          {section.type === "warning" ? (
            <AlertIcon />
          ) : section.type === "gold" ? (
            <InfoIcon />
          ) : section.type === "highlight" ? (
            <ShieldIcon />
          ) : (
            <ShieldIcon />
          )}
        </div>

        <div className="min-w-0 flex-1">
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

      {section.highlight && (
        <div className={`mb-6 rounded-2xl border p-4 ${styles.highlightBox}`}>
          <div className="flex items-start gap-3">
            <div className={`mt-0.5 ${styles.highlightIcon}`}>
              <InfoIcon />
            </div>
            <p className="text-sm leading-7 text-slate-700">{section.highlight}</p>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {section.content.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className={`mt-1 ${styles.bullet}`}>
              <CheckIcon />
            </div>
            <p className="text-[15px] leading-8 text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function DepositRefundPage() {
  return (
    <div className="bg-[linear-gradient(180deg,#F4F8FF_0%,#FFFFFF_35%,#F8FBFF_100%)]">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#0F3B8C]/8 blur-3xl" />
          <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-[#B68756]/10 blur-3xl" />
        </div>

        <div className="container pt-14 pb-10 md:pt-20 md:pb-14">
          <div className="max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D9E5F7] bg-white/80 px-4 py-2 text-sm font-medium text-[#0F3B8C] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#B68756]" />
              Funding & Refund Information
            </div>

            <h2 className="HeadingH2">
              Deposit & <span className="text-secondary">Refund Policy</span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Important information regarding deposits, payment verification,
              refund eligibility, fraud-prevention checks, and dispute handling.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[28px] border border-[#DCE7F8] bg-white/90 p-6 shadow-[0_12px_32px_rgba(15,59,140,0.06)] backdrop-blur md:p-8">
              <h2 className="text-xl font-semibold text-slate-900">
                About This Policy
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-slate-700">
                This policy outlines the main rules and procedures relating to
                deposits, funding methods, payment verification, refunds, and
                related compliance requirements.
              </p>
              <p className="mt-4 text-[15px] leading-8 text-slate-700">
                Clients should review this policy carefully before funding their
                account or requesting a refund.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#E7D4AE] bg-[linear-gradient(180deg,#FFFDF8_0%,#FFF7EA_100%)] p-6 shadow-[0_12px_32px_rgba(182,135,86,0.10)]">
              <div className="mb-3 inline-flex rounded-full bg-[#B68756] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                Key Notice
              </div>

              <div className="space-y-3">
                {[
                  "Third-party payments are not permitted.",
                  "Only payment methods under the client’s own name may be used.",
                  "Refunds are limited and subject to eligibility conditions.",
                  "Additional documents may be required for fraud prevention and AML checks.",
                  "Refunds must go back to the original payment method where applicable.",
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
          <ContentsCard items={policySections} />

          <div className="space-y-6 md:space-y-8">
            {policySections.map((section) => (
              <PolicySectionCard key={section.id} section={section} />
            ))}

            <section className="rounded-[28px] border border-[#DCE7F8] bg-white p-6 shadow-[0_12px_32px_rgba(15,59,140,0.06)] md:p-8">
              <div className="grid gap-6 md:grid-cols-1 md:items-center">
                <div>
                  <div className="mb-3 inline-flex rounded-full bg-[#EFF4FF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#0F3B8C]">
                    Need Assistance?
                  </div>

                  <h2 className="HeadingH4">
                    Contact support for deposit or refund questions
                  </h2>

                  <p className="mt-3 max-w-2xl text-[15px] leading-8 text-slate-600">
                    If you need clarification regarding funding methods, refund
                    eligibility, verification requirements, or dispute handling,
                    please contact the support team before proceeding.
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
                    href="#introduction"
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