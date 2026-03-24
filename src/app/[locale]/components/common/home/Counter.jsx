"use client";

import { useEffect, useRef, useState } from "react";

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
      value: 985000,
      suffix: " +",
      label: "Served Clients",
      duration: 2500,
    },
    {
      value: 27000,
      suffix: " +",
      label: "Trading Instruments",
      duration: 2200,
    },
    {
      value: 20,
      suffix: " +",
      label: "Destinations Worldwide",
      duration: 1800,
    },
    {
      value: 750,
      prefix: "$",
      suffix: " Billion",
      label: "Monthly Trades",
      duration: 2500,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-r from-[#263788] via-[#101638] to-[#263788]  py-5 md:py-8"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
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