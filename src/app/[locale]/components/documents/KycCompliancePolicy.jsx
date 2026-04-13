"use client";

const policySections = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction",
    type: "info",
    content: [
      "This KYC and Compliance Policy outlines the procedures followed by GTC when establishing and maintaining client relationships.",
      "The Company must understand the nature of the client’s business in order to identify expected activity and determine whether any transaction may be suspicious.",
      "This policy is intended to support compliance, monitoring, due diligence, and regulatory obligations.",
    ],
  },
  {
    id: "new-account-procedures",
    number: "02",
    title: "Procedures for New Accounts",
    type: "info",
    content: [
      "When a business relationship is established, the nature of the business the customer expects to conduct with GTC should be determined at the outset.",
      "Customer references should be checked for authenticity and reliability.",
      "GTC staff must record detailed evidence of each customer’s identity and retain copies of the documents together with the dates on which they were submitted.",
      "Where facilities are required, the precise purpose should be identified and monitored to ensure the facility is used for that purpose.",
      "The source of repayment or settlement of the facility should also be established.",
      "From time to time, business premises may be visited to confirm that the business is operating in line with the description provided to GTC.",
      "Corporate accounts should be treated with particular care, as they may present a higher risk for money laundering.",
      "Notes should always be prepared whenever customer contact has taken place, whether in person or by telephone.",
      "Evidence relating to account closure should be retained for five years, including details of how the closing transaction was handled so that an audit trail exists.",
    ],
  },
  {
    id: "personal-customers",
    number: "03",
    title: "Account Opening for Personal Customers",
    type: "highlight",
    content: [
      "The true name and permanent residential address of the customer must be established and independently verified.",
      "For face-to-face applicants, identity should ideally be verified using a current valid passport or national identity card obtained from a reputable source and bearing a photograph.",
      "Document reference numbers should be recorded wherever possible.",
      "Special care should be taken when reviewing documents that may be easily forged or obtained under false identities.",
      "Where face-to-face contact is not possible, a legally certified copy of the identification document should be requested.",
      "An introduction from a respected customer or trusted staff member may assist the verification process but must not replace address verification procedures.",
      "A registered letter sent to the customer’s stated address may also be used to assist address verification.",
    ],
    highlight:
      "Client identity and address must be independently verified using reliable documents and appropriate due diligence procedures.",
  },
  {
    id: "internet-cyber-trading",
    number: "04",
    title: "Internet and Cyber Trading",
    type: "warning",
    content: [
      "Internet-based trading and banking introduce additional risks, including fraud, unlicensed deposit taking, tax evasion, and money laundering.",
      "Where accounts are opened online, the identity of the customer should be established to the fullest satisfaction possible.",
      "There should also be sufficient communication and verification to confirm the customer’s address.",
    ],
  },
  {
    id: "institutional-accounts",
    number: "05",
    title: "Account Opening for Institutions",
    type: "info",
    content: [
      "For clubs, societies, or institutions, the constitution of the institution should be verified in order to confirm its legitimate purpose.",
      "Where there is more than one signatory to the account, the identity of at least two signatories should initially be verified.",
      "When signatories change, care should be taken to ensure that the identity of at least one current signatory on the mandate has been verified.",
    ],
  },
  {
    id: "trust-nominee-fiduciary",
    number: "06",
    title: "Trust, Nominee and Fiduciary Accounts",
    type: "warning",
    content: [
      "Trust, nominee, and fiduciary accounts may be used to avoid identification procedures and conceal the origin of funds.",
      "Additional care should be taken where such accounts are established in offshore locations with strict secrecy or confidentiality rules.",
      "Trusts created in jurisdictions without equivalent money laundering procedures will warrant additional enquiries.",
      "A declaration should be obtained from trustees or nominees at the outset stating the capacity in which they operate or make an application.",
      "Original trust deeds and any subsidiary deed appointing current trustees should be reviewed.",
      "Any application to open an account or undertake a transaction on behalf of another person without disclosing nominee or trust capacity should be treated as suspicious and further enquiries should be made.",
    ],
  },
  {
    id: "corporates-financial-clients",
    number: "07",
    title: "Corporates and Other Financial Services Clients",
    type: "info",
    content: [
      "Know Your Customer requirements apply in full to all corporate and financial service clients.",
      "New accounts are preferably introduced by at least one suitable person or business prepared to introduce the prospective account holder in writing or by signing the account opening forms.",
      "Bank references from at least one bank, brokerage, or trade referee should be obtained from the prospective account holder.",
      "If a bank reference is not available, the customer should provide evidence of an existing relationship with a bank in a regulated country, such as a bank statement.",
      "GTC comprehensive account opening documentation must be completed in full and signed in full.",
      "Relevant indemnities or undertakings should be obtained from account holders receiving remittances under prescribed forms.",
      "Clients wishing to place securities or other assets against which GTC financial services will be used should complete the relevant documentation.",
      "This may include a charge over deposits, funds, or assets, a promissory note, or a letter of guarantee.",
      "Annual audited accounts should be kept on file for every business or company account, whether or not there is exposure on the part of GTC.",
      "Detailed compliance and due diligence reports should be maintained in customer files and updated periodically.",
      "Any change in constitution or any other material matter relating to an account holder should be updated in the customer file within 60 days.",
    ],
  },
  {
    id: "scrutiny-monitoring",
    number: "08",
    title: "Scrutiny of Accounts and Monitoring",
    type: "info",
    content: [
      "When a new business account is established, the names of the beneficial owners must be identified.",
      "Regular scrutiny of statements and transaction records is essential to identify unusual or suspicious transactions.",
      "Reviewing debits and transfers drawn and paid relative to an account can often assist in identifying irregular activity.",
      "Business accounts require special scrutiny, especially those with high turnover or very active transaction patterns.",
      "Account activity should be compared against the information and intended use declared by the client when opening the account.",
      "It should be remembered that GTC may not be the sole broker or financial institution used by a client.",
      "An exchange of confidential information with another financial institution may, in exceptional circumstances, be necessary when investigating suspicious activity.",
    ],
  },
  {
    id: "risk-indicators",
    number: "09",
    title: "Risk Indicators and Red Flags",
    type: "warning",
    content: [
      "Excessive trading by a customer, especially where significant losses are being incurred and the activity continues regardless, may indicate a potential money laundering scheme.",
      "Incoming transfers of funds should be monitored closely to determine whether they relate to the stated purpose for which the account was opened.",
      "Payments to agents for commission purposes should be carefully verified.",
      "Deposits and transfers involving offshore jurisdictions should also be scrutinized carefully.",
    ],
  },
  {
    id: "securities-assets",
    number: "10",
    title: "Securities and Asset Verification",
    type: "highlight",
    content: [
      "Bearer securities such as bonds can be transferred from one person to another without trace and require special attention.",
      "Where customers wish to deposit securities or other assets with GTC against trading activity, the authenticity and origin of those securities must be verified in advance.",
      "Such facilities may be maintained for bona fide customers for legitimate business, foreign exchange, settlement, or hedging purposes.",
    ],
    highlight:
      "All securities and deposited assets must be verified for authenticity, ownership, and origin before being accepted by GTC.",
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
            KYC & Compliance Policy
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

          <h2 className="HeadingH5">{section.title}</h2>
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

export default function KycCompliancePolicy() {
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
              KYC, Due Diligence & Compliance
            </div>

            <h2 className="HeadingH2">
              KYC & <span className="text-secondary">Compliance Policy</span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Important information regarding customer verification, account
              opening procedures, due diligence, transaction monitoring, and
              compliance controls.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[28px] border border-[#DCE7F8] bg-white/90 p-6 shadow-[0_12px_32px_rgba(15,59,140,0.06)] backdrop-blur md:p-8">
              <h2 className="text-xl font-semibold text-slate-900">
                About This Policy
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-slate-700">
                This policy sets out the principles and procedures followed by
                GTC in relation to customer identification, due diligence,
                account monitoring, and compliance obligations.
              </p>
              <p className="mt-4 text-[15px] leading-8 text-slate-700">
                Clients and counterparties should review these requirements
                carefully, as additional verification and documentation may be
                required depending on the nature of the account and the level of
                risk involved.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#E7D4AE] bg-[linear-gradient(180deg,#FFFDF8_0%,#FFF7EA_100%)] p-6 shadow-[0_12px_32px_rgba(182,135,86,0.10)]">
              <div className="mb-3 inline-flex rounded-full bg-[#B68756] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                Key Notice
              </div>

              <div className="space-y-3">
                {[
                  "Customer identity must be verified using reliable and independent documentation.",
                  "Additional due diligence may apply to online, institutional, trust, or corporate accounts.",
                  "Beneficial ownership must be identified and monitored.",
                  "Suspicious or unusual transactions may require review and escalation.",
                  "Securities and assets must be verified before acceptance.",
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
                    Contact support for KYC or compliance questions
                  </h2>

                  <p className="mt-3 max-w-2xl text-[15px] leading-8 text-slate-600">
                    If you need clarification regarding customer verification,
                    required documentation, beneficial ownership, or account
                    compliance procedures, please contact the support team
                    before proceeding.
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
