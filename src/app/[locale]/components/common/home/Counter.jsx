"use client";

import { useEffect, useRef, useState } from "react";
import { useLocaleMessages, usePathTranslation } from "../../../LocaleProvider";

function CounterItem({
  value,
  label,
  duration = 2000,
  prefix = "",
  suffix = "",
  start = false,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      current += increment;

      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration, start]);

  return (
    <div className="flex flex-col gap-4 items-center text-center">
      <h3 className="HeadingH2 text-white">
        {prefix}
        {count.toLocaleString()}
        <span className="text-secondary HeadingH3">{suffix}</span>
      </h3>

      <div className="h-px w-full max-w-[120px] bg-white/10" />

      <p className=" text-white font-medium Text">
        {label}
      </p>
    </div>
  );
}

export default function Counter() {
  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const messages = useLocaleMessages();
  const t = usePathTranslation("common.counter.stats");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      value: t(messages?.common?.counter?.stats?.servedClients?.value) || 985000,
      suffix: t("servedClients.suffix", " +"),
      label: t("servedClients.label", "Served Clients"),
      duration:
        Number(messages?.common?.counter?.stats?.servedClients?.duration) || 2500,
    },
    {
      value:
        Number(messages?.common?.counter?.stats?.tradingInstruments?.value) || 27000,
      suffix: t("tradingInstruments.suffix", " +"),
      label: t("tradingInstruments.label", "Trading Instruments"),
      duration:
        Number(messages?.common?.counter?.stats?.tradingInstruments?.duration) ||
        2200,
    },
    {
      value:
        Number(messages?.common?.counter?.stats?.destinationsWorldwide?.value) ||
        20,
      suffix: t("destinationsWorldwide.suffix", " +"),
      label: t("destinationsWorldwide.label", "Destinations Worldwide"),
      duration:
        Number(messages?.common?.counter?.stats?.destinationsWorldwide?.duration) ||
        1800,
    },
    {
      value: Number(messages?.common?.counter?.stats?.monthlyTrades?.value) || 750,
      prefix: t("monthlyTrades.prefix", "$"),
      suffix: t("monthlyTrades.suffix", " Billion"),
      label: t("monthlyTrades.label", "Monthly Trades"),
      duration:
        Number(messages?.common?.counter?.stats?.monthlyTrades?.duration) || 2500,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-r from-[#263788] via-[#101638] to-[#263788]  py-5 md:py-8"
    >
      <div className="container">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {stats.map((item, index) => (
            <CounterItem
              key={index}
              value={item.value}
              label={item.label}
              duration={item.duration}
              prefix={item.prefix}
              suffix={item.suffix}
              start={startAnimation}
            />
          ))}
        </div>
      </div>
    </section>
  );
}