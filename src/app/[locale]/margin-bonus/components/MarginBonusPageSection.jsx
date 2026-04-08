"use client";

import PrimaryButton from "../../components/common/PrimaryButton";

const restrictedCountries = [
  "China",
  "Vietnam",
  "Taiwan",
  "Hong Kong",
  "Indonesia",
  "Pakistan",
];

const summaryCards = [
  { label: "Minimum Deposit", value: "$500+" },
  { label: "Bonus Rate", value: "50% / 20%" },
  { label: "Max Bonus", value: "$20,000" },
  { label: "Cashback", value: "$3 / lot" },
];

const cashbackExamples = [
  {
    text: "If a client receives a $2,500 bonus, they must trade at least ~167 lots to earn $500 in cashback.",
    status: "Eligible",
    good: true,
  },
  {
    text: "If a client receives a $3,000 bonus and trades only ~133 lots to earn $400 cashback.",
    status: "Ineligible",
    good: false,
  },
  {
    text: "If a client receives a $1,000 bonus, they must trade at least ~167 lots to earn $500 cashback, which is over 50% of the bonus.",
    status: "Eligible",
    good: true,
  },
  {
    text: "If a client receives a $5,000 bonus and trades 100 lots to earn $300 cashback.",
    status: "Ineligible",
    good: false,
  },
];

function SummaryCard({ item }) {
  return (
    <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-[#6B7280]">{item.label}</p>
      <h4 className="mt-2 text-[28px] font-bold text-secondary md:text-[34px]">
        {item.value}
      </h4>
    </div>
  );
}

function SectionCard({ number, title, children }) {
  return (
    <div className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-sm md:p-8">
      <div className="flex items-center gap-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#263788]/10 font-semibold text-[#263788]">
          {number}
        </div>
        <h3 className="HeadingH5 font-semibold">
          {title}
        </h3>
      </div>

      <div className="mt-6 text-[15px] leading-8 text-[#374151] md:text-base">
        {children}
      </div>
    </div>
  );
}

export default function MarginBonusPageSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-14 md:py-20">
      <div className="pointer-events-none absolute left-[-100px] top-10 h-[260px] w-[260px] rounded-full bg-[#263788]/5 blur-3xl" />
      <div className="pointer-events-none absolute right-[-100px] bottom-10 h-[280px] w-[280px] rounded-full bg-[#b68756]/10 blur-3xl" />

      <div className="container relative z-10">
        {/* Hero */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-[#b68756]/20 bg-[#b68756]/10 px-4 py-1.5 text-sm font-semibold text-[#b68756]">
            Margin Bonus Promotion
          </span>

          <h2 className="HeadingH3 mt-5">
            What Is The <span className="text-[#b68756]">GTC Margin Bonus</span>?
          </h2>

          <p className="mt-5 text-[15px] leading-7 text-[#4B5563] md:text-lg md:leading-8">
            A Margin Bonus is a non-withdrawable and non-transferable credit issued
            based on your deposit amount. It increases your account’s usable margin,
            giving you more room to trade during periods of high market volatility.
          </p>
        </div>

        {/* Warning */}
        <div className="mx-auto mt-8 max-w-5xl rounded-[24px] border border-[#FECACA] bg-[#FEF2F2] px-5 py-4 md:px-6">
          <p className="text-sm font-semibold leading-7 text-[#DC2626] md:text-base">
            ⚠️ Important: The bonus can be lost and will not be restored if removed.
            It cannot be withdrawn or transferred at any point.
          </p>
        </div>

        {/* Summary cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {summaryCards.map((item) => (
            <SummaryCard key={item.label} item={item} />
          ))}
        </div>

        {/* Terms */}
        <div className="mt-10 space-y-6">
          <SectionCard number="1" title="Eligibility">
            <ol className="list-decimal space-y-3 pl-5">
              <li>
                The Promotion is available exclusively to clients with
                <strong> fully verified live trading accounts</strong>.
              </li>
              <li>
                It applies to:
                <ul className="mt-2 list-disc pl-5">
                  <li>
                    <strong>First-time deposits of at least $500</strong> made by new clients.
                  </li>
                  <li>
                    <strong>Top-up deposits by existing clients</strong>, applied only to the newly deposited amount.
                  </li>
                </ul>
              </li>
              <li>The Promotion is available on all account types, except for Cent accounts.</li>
              <li>Each client may participate once, unless otherwise authorized in writing.</li>
              <li>Clients trading via MAM, PAMM, or Social Trading are not eligible.</li>
              <li>
                The bonus is a non-losing bonus used exclusively to support margin.
                It does not constitute real balance and cannot be withdrawn or transferred.
              </li>
            </ol>

            <div className="mt-6 rounded-2xl bg-[#F8FAFC] p-4">
              <p className="text-sm font-semibold text-primary">Not available in:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {restrictedCountries.map((country) => (
                  <span
                    key={country}
                    className="rounded-full border border-[#E5E7EB] bg-white px-3 py-1 text-sm text-[#4B5563]"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </SectionCard>

          <SectionCard number="2" title="Bonus Size and Structure">
            <ol className="list-decimal space-y-3 pl-5">
              <li>
                The bonus amount is calculated as:
                <ul className="mt-2 list-disc pl-5">
                  <li><strong>50%</strong> of the deposit amount for deposits up to <strong>$10,000</strong></li>
                  <li><strong>20%</strong> of the portion that exceeds <strong>$10,000</strong></li>
                </ul>
              </li>
              <li>The maximum total bonus per client is capped at <strong>$20,000</strong>.</li>
              <li>
                To receive the bonus, the client must first register for the promotion
                and then make a qualifying deposit.
              </li>
              <li>
                Once registered and funded, the bonus request will be automatically generated and processed.
              </li>
            </ol>
          </SectionCard>

          <SectionCard number="3" title="Cashback Conditions">
            <ol className="list-decimal space-y-3 pl-5">
              <li>
                Clients who receive the Margin Bonus are eligible to claim
                <strong> $3 per full lot traded</strong> on FX pairs, gold, metals,
                and oil within a <strong>3-month period</strong>.
              </li>
              <li>
                Cashback can be requested only once and to qualify:
                <ul className="mt-2 list-disc pl-5">
                  <li>The cashback amount must be at least <strong>$500</strong></li>
                  <li>It must represent at least <strong>20%</strong> of the bonus received</li>
                </ul>
              </li>
            </ol>

            <div className="mt-6 rounded-[24px] bg-[#F8FAFC] p-4 md:p-5">
              <p className="mb-4 text-sm font-semibold text-primary md:text-base">Examples</p>
              <div className="space-y-3">
                {cashbackExamples.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl border px-4 py-3 text-sm leading-7 ${
                      item.good
                        ? "border-[#BBF7D0] bg-[#F0FDF4] text-[#166534]"
                        : "border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C]"
                    }`}
                  >
                    {item.text}{" "}
                    <strong>
                      {item.good ? "→ Eligible" : "→ Ineligible"}
                    </strong>
                  </div>
                ))}
              </div>
            </div>

            <ol start={3} className="mt-6 list-decimal space-y-3 pl-5">
              <li>The total cashback is capped at the value of the bonus received.</li>
              <li>Cashback must be requested through the client’s personal account manager.</li>
              <li>Cashback will be credited within 7 business days once approved.</li>
            </ol>
          </SectionCard>

          <SectionCard number="4" title="Bonus Use and Nature">
            <ol className="list-decimal space-y-3 pl-5">
              <li>
                The Margin Bonus is strictly for trading margin support and cannot be:
                <ul className="mt-2 list-disc pl-5">
                  <li>Withdrawn</li>
                  <li>Transferred</li>
                  <li>Used as tradable or real account balance</li>
                </ul>
              </li>
              <li>Any withdrawal from the client’s account will result in automatic removal of the bonus.</li>
            </ol>
          </SectionCard>

          <SectionCard number="5" title="Withdrawal Conditions">
            <ol className="list-decimal space-y-3 pl-5">
              <li>GTCFX reserves the right to remove the bonus if the account equity falls below the bonus amount.</li>
              <li>Once removed, the bonus will not be reinstated under any circumstances.</li>
            </ol>
          </SectionCard>

          <SectionCard number="6" title="Bonus Expiry">
            <ol className="list-decimal space-y-3 pl-5">
              <li>The Margin Bonus is valid for up to 3 months from the date of the first qualifying deposit.</li>
              <li>GTCFX may remove the bonus automatically after the 3-month period, regardless of trading activity.</li>
              <li>If cashback conditions are not met within the 3-month period, eligibility for cashback is forfeited.</li>
            </ol>
          </SectionCard>

          <SectionCard number="7" title="Abuse Policy">
            <ol className="list-decimal space-y-3 pl-5">
              <li>
                Abuse of the promotion is strictly prohibited. Examples include:
                <ul className="mt-2 list-disc pl-5">
                  <li>Hedging between multiple accounts or brokers</li>
                  <li>Latency arbitrage or other technical exploits</li>
                  <li>Coordinated manipulation of bonus terms</li>
                </ul>
              </li>
              <li>
                GTCFX reserves the right to:
                <ul className="mt-2 list-disc pl-5">
                  <li><strong>Remove the bonus without prior notice</strong></li>
                  <li><strong>Cancel cashback or profits obtained through abusive behavior</strong></li>
                  <li><strong>Suspend or terminate client accounts involved in fraud or abuse</strong></li>
                </ul>
              </li>
            </ol>
          </SectionCard>

          <SectionCard number="8" title="Stop Out Policy">
            <ol className="list-decimal space-y-3 pl-5">
              <li>
                If the account equity reaches the stop-out level, or if the floating loss equals the actual account balance,
                the Margin Bonus will be automatically removed.
              </li>
            </ol>
          </SectionCard>

          <SectionCard number="9" title="Client Acknowledgment">
            <ol className="list-decimal space-y-3 pl-5">
              <li>By accepting the Margin Bonus, the client acknowledges and agrees to these Terms & Conditions.</li>
              <li>Misuse of the Promotion may result in the removal of the bonus, forfeiture of profits, and/or suspension of the trading account.</li>
            </ol>
          </SectionCard>
        </div>

        {/* Apply box */}
        <div className="mt-10 rounded-[28px] border border-[#DBEAFE] bg-[#EFF6FF] p-6 md:p-8">
          <h3 className="HeadingH4 font-semibold text-secondary">
            How to Apply
          </h3>

          <ol className="mt-5 list-decimal space-y-3 pl-5 text-[15px] leading-8 text-[#374151] md:text-base">
            <li>Register for the promotion by submitting the form on the campaign page.</li>
            <li>Make a qualifying deposit of at least <strong>$500</strong> into your verified live trading account.</li>
            <li>Once both steps are completed, your bonus request will be automatically processed.</li>
            <li><strong>Only registered clients</strong> will be eligible to receive the bonus.</li>
          </ol>

          <p className="mt-6 text-[15px] leading-7 text-[#4B5563] md:text-base">
            To claim cashback, reach out directly to your <strong>Personal Account Manager</strong>
            once the trading and eligibility requirements are fulfilled.
          </p>

          <p className="mt-3 text-[15px] leading-7 text-[#4B5563] md:text-base">
            For assistance, contact your Account Manager or the GTCFX Support Team.
          </p>

          <div className="mt-8">
            <PrimaryButton>
              Open Live Account
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}