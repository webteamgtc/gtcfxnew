"use client";

import PrimaryButton from "../../components/common/PrimaryButton";
import MainIBForm from "../../components/MainIBForm";



function FeatureCard({ item }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#263788]/5 via-transparent to-[#b68756]/10 opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative z-10">


        {/* Icon */}
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#263788]/10 text-[20px] transition-all duration-300 group-hover:bg-[#263788] group-hover:text-white">
          {item.icon}
        </div>

        {/* Title */}
        <h3 className="text-[16px] font-semibold text-primary transition-colors duration-300 group-hover:text-[#263788] md:text-[18px]">
          {item.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-6 text-[#6B7280] md:text-[15px]">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function DemoHeroSection({ messages }) {
  const benefits = [
    {
      icon: "📊",
      title: messages?.benefits?.one?.title,
      desc: messages?.benefits?.one?.desc,
    },
    {
      icon: "🛡️",
      title: messages?.benefits?.two?.title,
      desc: messages?.benefits?.two?.desc,
    },
    {
      icon: "⚡",
      title: messages?.benefits?.three?.title,
      desc: messages?.benefits?.three?.desc,
    },
    {
      icon: "💻",
      title: messages?.benefits?.four?.title,
      desc: messages?.benefits?.four?.desc,
    },
  ];
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#fff] to-[#fff] py-10 md:py-16">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/images/demo/demo-hero-bg.webp')] bg-cover bg-center opacity-[0.05]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]" />

      {/* Background glows */}
      <div className="pointer-events-none absolute left-[-100px] top-10 h-[260px] w-[260px] rounded-xl bg-[#263788]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-100px] bottom-10 h-[280px] w-[280px] rounded-xl bg-[#b68756]/10 blur-3xl" />

      <div className="container relative z-10">
        {/* Header content */}
        <div className="text-center flex flex-col items-center gap-4">
          <span className="inline-flex rounded-xl border border-[#b68756]/20 bg-[#b68756]/10 px-4 py-1.5 text-sm font-semibold text-[#b68756]">
            {messages?.eyebrow}
          </span>

          <h2 className="HeadingH3 mx-auto max-w-xl ">
            {messages?.titleStart} <span className="text-[#b68756]">{messages?.titleHighlight}</span> {messages?.titleEnd}
          </h2>

          <p className="Text mx-auto max-w-3xl">
            {messages?.description}
          </p>
        </div>

        {/* Feature cards */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => (
            <FeatureCard key={index} item={item} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <PrimaryButton href="/register">
            {messages?.ctaButton}
          </PrimaryButton>

        </div>

        {/* Form below */}
        <div id="demo-form" className="mx-auto mt-14 w-full max-w-[720px]">
          <div className="rounded-[28px] border border-[#E5E7EB] bg-white p-5 shadow-[0_25px_60px_rgba(15,23,42,0.08)] md:p-6">
            {/* Form header */}
            <div className="rounded-2xl bg-gradient-to-r from-[#263788] to-[#101638] px-5 py-4 text-center">
              <h2 className="text-lg font-bold uppercase tracking-[0.03em] text-white md:text-xl">
                {messages?.formHeader}
              </h2>
            </div>

            {/* Form body */}
            <div className="mt-5">
              <MainIBForm messages={messages?.accountForm} />
              {/* {children ? (
                children
              ) : (
                <div className="rounded-2xl border border-dashed border-[#D1D5DB] bg-[#F9FAFB] px-5 py-10 text-center text-sm text-[#6B7280]">
                  Place your form here
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}