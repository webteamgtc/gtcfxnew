"use client";

const steps = [
  {
    step: "01",
    title: "Open a live account",
    desc: "Create your GTCFX live account and complete the setup process to access copy trading.",
  },
  {
    step: "02",
    title: "Choose your favorite trader",
    desc: "Review trader profiles, performance, and style before selecting the one you want to follow.",
  },
  {
    step: "03",
    title: "Start your copy strategy",
    desc: "Allocate funds, activate copying, and monitor performance directly from your dashboard.",
  },
];

export default function CopyTradingHowItWorks() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white py-16 md:py-20">
      <div className="pointer-events-none absolute left-[-120px] top-10 h-[240px] w-[240px] rounded-full bg-[#263788]/6 blur-3xl" />
      <div className="pointer-events-none absolute right-[-120px] bottom-0 h-[260px] w-[260px] rounded-full bg-[#b68756]/10 blur-3xl" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#b68756]/20 bg-[#b68756]/10 px-4 py-1.5 text-sm font-semibold text-[#b68756]">
            How It Works
          </span>

          <h2 className="HeadingH3 mt-4 text-primary">
            Start Copy Trading in <span className="text-[#b68756]">3 Simple Steps</span>
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-[#4B5563] md:text-lg md:leading-8">
            Getting started is simple. Set up your account, choose a trader, and begin
            copying with a smoother and more transparent experience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)] md:p-7"
            >
              <div className="absolute right-6 top-6 text-[40px] font-bold leading-none text-[#263788]/10">
                {item.step}
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b68756]/10 text-sm font-bold text-[#b68756]">
                {item.step}
              </div>

              <h3 className="mt-5 text-[22px] font-semibold text-primary">
                {item.title}
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-[#4B5563]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}