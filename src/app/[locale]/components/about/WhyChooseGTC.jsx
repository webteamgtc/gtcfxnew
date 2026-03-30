"use client";

const Icons = {
  intro: () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M8.5 13.5 5 17l-2-2 3.5-3.5" />
      <path d="M14 7l3-3 3 3-3 3" />
      <path d="M13 8 8 13" />
      <path d="M10 6c1.5-1.5 4-1.5 5.5 0l2.5 2.5c1.5 1.5 1.5 4 0 5.5" />
      <path d="M14 18c-1.5 1.5-4 1.5-5.5 0L6 15.5c-1.5-1.5-1.5-4 0-5.5" />
    </svg>
  ),
  shield: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 3l7 3.5V12c0 4.5-2.8 7.6-7 9-4.2-1.4-7-4.5-7-9V6.5L12 3z" />
      <path d="m9.5 12 1.7 1.7 3.8-3.8" />
    </svg>
  ),
  platform: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </svg>
  ),
  expertise: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M8 7h8" />
      <path d="M8 12h8" />
      <path d="M8 17h5" />
      <path d="M4 7h.01" />
      <path d="M4 12h.01" />
      <path d="M4 17h.01" />
      <path d="M18 17l2 2 3-3" />
    </svg>
  ),
  services: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4.93 4.93l2.83 2.83" />
      <path d="M16.24 16.24l2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M4.93 19.07l2.83-2.83" />
      <path d="M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  check: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path d="M5 12l4 4 10-10" />
    </svg>
  ),
};

const featureCards = [
  {
    id: "1",
    title: "NO COMPROMISES, ONLY EXCELLENCE:",
    description:
      "We never compromise on factors that impact client performance. That's why we offer tight spreads and ensure the best execution.",
    icon: "shield",
  },
  {
    id: "2",
    title: "ADVANCED TRADING PLATFORMS:",
    description:
      "GTC offers cutting-edge forex trading platforms tailored to meet the requirements of a diverse global clientele.",
    icon: "platform",
  },
  {
    id: "3",
    title: "EXPERTISE BACKED BY EXPERIENCE:",
    description:
      "Our extensive experience and in-depth knowledge of global financial markets are the cornerstones of our expertise.",
    icon: "expertise",
  },
  {
    id: "4",
    title: "SUPERIOR SERVICES:",
    description:
      "We are committed to delivering top-tier services in currency trading, as well as CFDs, equity indices, precious metals, and energies.",
    icon: "services",
  },
];

const featureLists = [
  {
    title: (
      <>
        Trade With The <span className="text-[#b68756]">Best Broker</span>
      </>
    ),
    items: [
      "Tightest Spread In The Market Spreads Starting From 0.0* Pips",
      "Most Stable Trading Platforms",
      "Competitive Rebates & Commissions In The Industry For Our IB’s.",
      "Secure, Instant And Fast Execution",
      "MT4/MT5 Trading Platform",
      "Dedicated Relationship Manager",
      "Various Funding Methods Including: Credit Card, Wire Transfer, Digital Currency Assets currency",
    ],
  },
  {
    title: (
      <>
        Customize your <span className="text-[#b68756]">Trading Strategies</span>
      </>
    ),
    items: [
      "Access To 7 Markets With Over 27,000 Trading Instruments",
      "Leverage Up To 1:2000",
      "Negative Balance Protection",
      "No Trading Restrictions On EA.",
      "No Price Slippage.",
      "No Commissions.",
      "No Requotes.",
      "No Rejections.",
    ],
  },
  {
    title: (
      <>
        Empowering Success with{" "}
        <span className="text-[#b68756]">Cutting-Edge Technology</span>
      </>
    ),
    items: [
      "ECN Accounts With Direct Access To Top Tier Banks.",
      "Direct Access To Top Tier Banks.",
      "No Dealing Desk Intervention.",
      "Tier 1 Liquidity Pricing.",
      "Instant And Fast Execution.",
    ],
  },
  {
    title: (
      <>
        Utilizing <span className="text-[#b68756]">Top Tools</span> for Success
      </>
    ),
    items: [
      "PAMM & MAM Accounts",
      "Signal Centre Tool.",
      "VPS.",
      "Expert Analysis.",
      "Autochartist",
      "Acuity Trading Tool.",
    ],
  },
];

function TopCard({ card }) {
  const Icon = Icons[card.icon];

  return (
    <div className="group relative overflow-hidden rounded-[24px] border border-[#D9DEE8] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)] md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#b68756]/10 text-[#b68756]">
            <Icon />
          </div>

          <h3 className="text-[16px] font-bold uppercase leading-6 text-primary md:text-[20px]">
            {card.title}
          </h3>
        </div>

        <span className="text-[30px] font-bold leading-none text-[#b68756] md:text-[36px]">
          {card.id}
        </span>
      </div>

      <div className="my-5 h-px w-full bg-[#D9DEE8]" />

      <p className="text-[15px] leading-7 text-[#4B5563] md:text-base md:leading-8">
        {card.description}
      </p>

      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#263788] via-[#b68756] to-[#263788] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}

function FeatureBlock({ title, items }) {
  return (
    <div className="relative rounded-[28px] border border-[#E5E7EB] bg-[#F1F2F4] p-6 shadow-sm backdrop-blur-sm md:p-8">
      <h3 className="HeadingH4">
        {title}
      </h3>

      <ul className="mt-6 space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-1 flex-shrink-0 text-[#16A34A]">
              {Icons.check()}
            </span>
            <span className="text-[15px] leading-7 text-[#1F2937] md:text-[16px] md:leading-8">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function WhyChooseGTC() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-10 md:py-16">
      <div className="container relative z-10">
        {/* Intro */}
        <div className="">
          <div className="mb-5 flex items-center gap-3 text-[#b68756]">
            <Icons.intro />
            <span className="text-[22px] font-semibold text-primary md:text-[42px]">
              Why Choose <span className="text-[#b68756]">GTC?</span>
            </span>
          </div>

          <p className="text-[18px] leading-8 text-primary md:text-[24px] md:leading-10">
            Unlocking Profitable Opportunities: Your Best Investment Journey
            Begins with Us
          </p>

          <p className="mt-6 text-[15px] leading-7 text-[#374151] md:text-[17px] md:leading-8">
            Trading with us offers the optimal avenue for investing your money
            wisely and profitably. Our trading platform provides a secure and
            efficient environment, ensuring that your investment endeavors are
            backed by cutting-edge technology and expert support.
          </p>

          <p className="mt-5 text-[15px] leading-7 text-[#374151] md:text-[17px] md:leading-8">
            With a commitment to delivering the best trading experience, we
            empower you to navigate financial markets seamlessly, making
            informed decisions that can lead to lucrative returns on your
            investments. Join us and unlock the potential for financial growth
            and success in your trading journey.
          </p>
        </div>

        {/* Detailed blocks */}
        <div className="relative mt-14">
          {/* background center image effect */}
          <div className="pointer-events-none absolute inset-0 hidden items-center justify-center lg:flex">
            <div className="h-[460px] w-[460px] rounded-full bg-[#b68756]/5 blur-3xl" />
          </div>

          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
            {featureLists.map((block, index) => (
              <FeatureBlock key={index} title={block.title} items={block.items} />
            ))}
          </div>
        </div>

        {/* Top cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {featureCards.map((card) => (
            <TopCard key={card.id} card={card} />
          ))}
        </div>
      </div>

      {/* background glows */}
      <div className="pointer-events-none absolute left-[-120px] top-20 h-[260px] w-[260px] rounded-full bg-[#263788]/5 blur-3xl" />
      <div className="pointer-events-none absolute right-[-120px] bottom-10 h-[280px] w-[280px] rounded-full bg-[#b68756]/10 blur-3xl" />
    </section>
  );
}