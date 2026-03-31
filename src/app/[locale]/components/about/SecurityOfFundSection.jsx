"use client";

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

const infoCards = [
  {
    title: "How does it work?",
    description:
      "The Compensation Fund acts as an insurance policy for members’ clients. This fund is held in a separate bank account and is only used if a member refuses to adhere to a judgment from the Financial Commission.",
  },
  {
    title: "How is the Security Of Fund financed?",
    description:
      "The Compensation Fund is financed by the Financial Commission through the allocation of 10% of the monthly membership dues.",
  },
  {
    title: "Who is covered?",
    description:
      "The fund will only be used for a judgment that has been issued by the Financial Commission. The fund does not cover traders’ losses incurred while engaging in self-directed trading. It also does not apply to a broker’s entire client base should the broker become insolvent.",
  },
];

export default function SecurityOfFundSection() {
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
                  Security Of <span className="text-[#b68756]">Fund</span>
                </h2>
              </div>

              <p className="mt-6 text-[15px] leading-7 text-[#374151] md:text-[17px] md:leading-8">
                GTC Global Trade Capital Ltd. is an official member of the
                Financial Commission, an international organization engaged in
                the resolution of disputes in the financial services industry for
                the forex market.
              </p>

              <p className="mt-5 text-[15px] leading-7 text-[#374151] md:text-[17px] md:leading-8">
                The Financial Commission was established to be a neutral third
                party committee to fairly review and resolve complaints. It aims
                to facilitate a simpler, swifter resolution than through
                industry regulators and the legal system. The Commission ensures
                that traders and brokers have their disputes resolved in a
                quick, efficient, unbiased and authentic manner, while making
                sure that all parties walk away with a fair and thorough answer
                to their concerns. The Commission also provides additional
                protection for traders by using the Compensation Fund.
              </p>

              <p className="mt-5 text-[15px] leading-7 text-[#374151] md:text-[17px] md:leading-8">
                It is noted that the Financial Commission is an independent
                external dispute resolution (EDR) organization.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-[#263788] px-6 text-sm font-semibold text-white transition hover:opacity-90 md:px-8 md:text-base"
                >
                  Visit Now
                </a>

                <a
                  href="#"
                  className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl border border-[#263788] bg-white px-6 text-sm font-semibold text-[#263788] transition hover:bg-[#263788]/5 md:px-8 md:text-base"
                >
                  <PdfIcon />
                  Download PDF File
                </a>
              </div>
            </div>
          </div>

          {/* Side Trust Box */}
          <div className="lg:col-span-4">
            <div className="rounded-[32px] bg-gradient-to-br from-[#263788] via-[#1F2C73] to-[#101638] p-6 text-white shadow-[0_20px_60px_rgba(38,55,136,0.18)] md:p-8">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-[#E5D0B2]">
                Client Protection
              </span>

              <h3 className="mt-5 text-[28px] font-bold leading-tight md:text-[36px]">
                Up to <span className="text-secondary">€20,000</span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/85 md:text-base">
                The Compensation Fund covers judgments made by the Financial
                Commission of up to €20,000 per client.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm leading-7 text-white/80">
                  This protection strengthens client confidence by supporting a
                  fair and independent dispute resolution process.
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
                Maximum Coverage
              </div>

              <h3 className="HeadingH3 py-3">
                What is the maximum coverage?
              </h3>
            </div>

            <div className="lg:col-span-8">
              <p className="text-[15px] leading-7 text-[#374151] md:text-[17px] md:leading-8">
                The Compensation Fund will only cover judgments made by the
                Financial Commission of up to <span className="font-semibold text-primary">€20,000</span>{" "}
                per client. For more information, please refer to the website of
                the FDRC and our Client Agreement.
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