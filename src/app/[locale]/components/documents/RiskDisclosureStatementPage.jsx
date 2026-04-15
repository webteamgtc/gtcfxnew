"use client";

const riskSections = [
  {
    id: "company-information",
    number: "01",
    title: "Company Information",
    type: "info",
    content: [
      "GTC GLOBAL TRADE CAPITAL Co. LIMITED",
      "Company License Number: 40354",
      "Registered Address: 1/Floor, B&P House, Kumul Highway, Port Vila, Vanuatu",
      "GTC Global Trade Capital Co., Limited is a global finance brokerage company registered, supervised, and authorized by the Vanuatu Financial Services Commission of the Republic of Vanuatu.",
      "It operates under the brand name GTCFX.",
    ],
  },
  {
    id: "purpose-of-this-notice",
    number: "02",
    title: "Purpose of This Notice",
    type: "info",
    content: [
      "This notice is provided to you in light of your intention to engage in transactions with GTC GLOBAL TRADE CAPITAL CO. LIMITED involving Foreign Exchange Contracts, Contracts for Difference, deposits and payments products, and other Derivatives Contracts.",
      "These transactions may be conducted either on a margin basis or otherwise.",
      "This document does not disclose or explain all of the risks and other significant aspects involved in such transactions.",
      "It is intended to provide a general description of the nature of the risks inherent in these transactions and to assist you in making informed investment decisions.",
    ],
  },
  {
    id: "suitability-warning",
    number: "03",
    title: "Suitability Warning",
    type: "highlight",
    content: [
      "Prior to applying for an account, you should carefully consider whether trading in these transactions is suitable for you in light of your personal circumstances and financial situation.",
      "Margin FX and CFDs involve different levels of exposure to risk.",
      "You should ensure that you understand the risks before deciding whether to trade in such instruments.",
    ],
    highlight:
      "Trading leveraged products is not suitable for every investor. You should assess your objectives, financial situation, experience, and risk tolerance before trading.",
  },
  {
    id: "key-risks",
    number: "04",
    title: "Key Risks of Margin FX and CFDs",
    type: "warning",
    content: [
      "Trading in Margin FX and CFDs carries a high degree of risk.",
      "The gearing or leverage involved means that a small initial margin payment can potentially lead to large losses above your initial investment.",
      "The geared nature of derivatives means Margin FX and CFDs may carry greater risks than conventional share trading, which is generally not geared.",
      "A relatively small market movement can lead to a proportionately much larger movement in the value of your investment, and this can work against you as well as for you.",
      "You may sustain a total loss of the margin that you deposit with us to establish or maintain a position.",
      "If the market moves against you, you may be required to pay substantial additional margin at short notice.",
      "If you fail to do so within the required time, your position may be liquidated at a loss, and you will remain liable for any resulting deficit.",
      "You shall be deemed to have received any notice requiring payment of such funds if the notice is delivered to your nominated contact points.",
      "Even where a Margin FX or CFD is not margined, it may still carry an obligation to make further payments in certain circumstances beyond the amount initially paid.",
    ],
  },
  {
    id: "market-and-execution-risks",
    number: "05",
    title: "Market, Execution and Liquidity Risks",
    type: "warning",
    content: [
      "Most OTC derivatives are off-exchange derivatives.",
      "Engaging in such transactions may involve greater risk than on-exchange derivatives due to the absence of an exchange market for closing out open positions.",
      "You are generally limited to opening and closing positions exclusively with us.",
      "You are therefore exposed to the unlikely event that we may not be able to fulfill our obligations to you as a counterparty.",
      "Under certain trading conditions it may be difficult or impossible to liquidate a position.",
      "This may occur during periods of rapid price movement or where trading in the underlying market is suspended or restricted.",
      "Placing a Stop Order will not necessarily limit your losses to the intended amount, because market conditions may make it impossible to execute such an order if the underlying market moves directly through the specified price.",
    ],
  },
  {
    id: "foreign-market-risks",
    number: "06",
    title: "Foreign Market and Currency Risks",
    type: "info",
    content: [
      "Foreign markets involve risks that may differ from domestic markets.",
      "The potential for profit or loss from OTC derivatives relating to a foreign market or denominated in a foreign currency may be affected by fluctuations in foreign exchange rates.",
      "You may incur a loss if exchange rates move against you, even where the price of the underlying instrument remains unchanged.",
    ],
  },
  {
    id: "advice-and-no-guarantee",
    number: "07",
    title: "Advice, Clearing and No Guarantee",
    type: "info",
    content: [
      "We do not provide personal financial product advice relating to Margin FX and CFDs.",
      "We do not make Margin FX and CFD recommendations of any kind.",
      "The only guidance we provide is general information about how Margin FX and CFDs work.",
      "We are under no obligation to provide consultation beyond that.",
      "There is no clearing house for Margin FX and CFDs.",
      "The performance of a Margin FX or CFD by GTC GLOBAL TRADE CAPITAL CO. LIMITED is not guaranteed by an exchange or clearing house.",
    ],
  },
  {
    id: "insolvency-and-credit-risk",
    number: "08",
    title: "Insolvency, Segregated Funds and Credit Risk",
    type: "warning",
    content: [
      "Our insolvency or default may result in your positions being liquidated or closed out without your consent.",
      "Deposits lodged with us are held in segregated client account or accounts and may attract legal protections under applicable laws.",
      "Net unrealised running profits are also held in trust by us in excess of contractual and regulatory requirements and would normally be similarly protected for your benefit as beneficial owner.",
      "If a Court were not to uphold the trust in relation to net unrealised profits, you would rank as an unsecured creditor in relation to such profits.",
      "Keeping your funds in a segregated client account does not offer or guarantee absolute protection of your funds in the event of our insolvency or default where there is a deficit in the segregated client account.",
      "The obligations owed to you under the Client Agreement and Margin FX and CFD transactions are unsecured obligations.",
      "This means that you are an unsecured creditor of ours.",
      "Although by dealing with us you will not be dealing in securities, you may still be subject to applicable laws.",
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
      iconWrap: "bg-[#FFF8EA] text-[#B68756]",
      bullet: "text-[#B68756]",
      highlightBox: "border-[#E7D4AE] bg-[linear-gradient(180deg,#FFFDF8_0%,#FFF7EA_100%)]",
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
            Risk Disclosure
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

function RiskSectionCard({ section }) {
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
          ) : section.type === "highlight" ? (
            <InfoIcon />
          ) : (
            <ShieldIcon />
          )}
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

export default function RiskDisclosureStatementPage() {
  return (
    <div className="bg-[linear-gradient(180deg,#F4F8FF_0%,#FFFFFF_35%,#F8FBFF_100%)]">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-xl bg-[#0F3B8C]/8 blur-3xl" />
          <div className="absolute right-0 top-16 h-72 w-72 rounded-xl bg-[#B68756]/10 blur-3xl" />
        </div>

        <div className="container pt-14 pb-10 md:pt-20 md:pb-14">
          <div className="max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-xl border border-[#F1D9D9] bg-white/80 px-4 py-2 text-sm font-medium text-[#C26B6B] backdrop-blur">
              <span className="h-2 w-2 rounded-xl bg-[#C26B6B]" />
              Important Risk Notice
            </div>

            <h2 className="HeadingH3">
              Risk <span className="text-secondary">Disclosure Statement</span>
            </h2>

            <p className="Text mt-5">
              Important information regarding the nature, risks, obligations,
              and limitations associated with Margin FX, CFDs, OTC derivatives,
              and related trading activities with GTCFX.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[28px] border border-[#DCE7F8] bg-white/90 p-6 shadow-[0_12px_32px_rgba(15,59,140,0.06)] backdrop-blur md:p-8">
              <h2 className="text-xl font-semibold text-slate-900">
                About This Statement
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-slate-700">
                This Risk Disclosure Statement is provided to help clients
                understand the general risks involved in trading Foreign
                Exchange Contracts, Contracts for Difference, deposits and
                payments products, and other derivative transactions.
              </p>
              <p className="mt-4 text-[15px] leading-8 text-slate-700">
                It does not describe every possible risk or every significant
                aspect of these transactions. You should review this information
                carefully and assess whether such products are appropriate in
                light of your circumstances and financial position.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#F3D2D2] bg-[linear-gradient(180deg,#FFF8F8_0%,#FFF2F2_100%)] p-6 shadow-[0_12px_32px_rgba(194,107,107,0.10)]">
              <div className="mb-3 inline-flex rounded-xl bg-[#C26B6B] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                High Risk Warning
              </div>

              <div className="space-y-3">
                {[
                  "Leverage can magnify both gains and losses.",
                  "You may lose all of your deposited margin.",
                  "In some cases, losses may exceed your initial investment.",
                  "Market volatility and liquidity conditions may prevent orders from executing at expected levels.",
                  "Segregated accounts do not guarantee absolute protection in the event of insolvency.",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 text-[#C26B6B]">
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
          <ContentsCard items={riskSections} />

          <div className="space-y-6 md:space-y-8">
            {riskSections.map((section) => (
              <RiskSectionCard key={section.id} section={section} />
            ))}

            <section className="rounded-[28px] border border-[#DCE7F8] bg-white p-6 shadow-[0_12px_32px_rgba(15,59,140,0.06)] md:p-8">
              <div className="grid gap-6 md:grid-cols-1 md:items-center">
                <div>
                  <div className="mb-3 inline-flex rounded-xl bg-[#EFF4FF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#0F3B8C]">
                    Client Responsibility
                  </div>

                  <h2 className="HeadingH4">
                    Review the risks carefully before trading
                  </h2>

                  <p className="mt-3 max-w-2xl text-[15px] leading-8 text-slate-600">
                    Before opening an account or entering into any transaction,
                    you should review this statement together with the Client
                    Agreement and all relevant legal and product documents, and
                    seek independent advice where appropriate.
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
                    href="#company-information"
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