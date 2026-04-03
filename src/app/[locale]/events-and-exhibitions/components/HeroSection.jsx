
"use client";

import { useState, useEffect } from "react";


const pad = (n) => String(Math.max(0, Math.floor(n))).padStart(2, "0");

export default function EventHero({ eventsData }) {
  const targetDate = new Date("2026-02-11T09:00:00").getTime();

  const [countdown, setCountdown] = useState([
    { value: "00", label: "Days" },
    { value: "00", label: "Hours" },
    { value: "00", label: "Min" },
    { value: "00", label: "Sec" },
  ]);

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, targetDate - now);
      const days = diff / (1000 * 60 * 60 * 24);
      const hours = (days % 1) * 24;
      const minutes = (hours % 1) * 60;
      const seconds = (minutes % 1) * 60;
      setCountdown([
        { value: pad(days), label: "Days" },
        { value: pad(hours), label: "Hours" },
        { value: pad(minutes), label: "Min" },
        { value: pad(seconds), label: "Sec" },
      ]);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return (
    <section className="relative w-full overflow-hidden  py-12 md:py-20">
      {/* Background (replace with your image) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/breadcamp/event.webp')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 " 
      style={{
        background: 'rgba(29, 31, 43, 0.50)',
      }}
      />

      <div className="relative mx-auto container">
        <div className="grid gap-10 md:grid-cols-12 items-center min-h-[60vh]">
          {/* Left content */}
          <div className="md:col-span-8 lg:col-span-8">
           
            <h2 className="mt-8 max-w-2xl text-center md:text-left text-[24px] font-bold md:leading-[1.09] leading-[1.2] tracking-[-0.02em] text-white md:text-[56px] 2xl:text-6xl uppercase 2xl:leading-[4.5rem]">
            A Meeting Point for the <span className="text-secondary">People Shaping </span> the Markets
            </h2>

            <p className="mt-6 max-w-[540px] text-center md:text-left text-[14px] leading-[1.55] text-white md:text-[20px]">
            This is more than an event.

              <br />
              It’s a place where leaders connect, ideas grow stronger, and the future of the industry moves forward together.

            </p>

          
          </div>

          {/* Right form card - iFXExpo Dubai 2026 registration */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col">
     
          </div>
        </div>

        {/* Bottom divider + countdown */}
        <div className="mt-16">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <p className="text-center text-lg md:text-[22px] lg:text-2xl tracking-wide text-white uppercase">
              New Events & Exhibitions Coming Soon ...
            </p>
            <div className="h-px flex-1 bg-white/10" />
          </div>

    
        </div>
      </div>

    </section>
  );
}
