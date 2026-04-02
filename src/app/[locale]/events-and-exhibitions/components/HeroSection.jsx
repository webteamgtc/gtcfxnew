// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { FaPlay } from "react-icons/fa";
// import CountdownTimer from "./CountdownTimer";
// import InformationForm from "./InformationForm";

// const HeroSection = () => {
//   const [showForm, setShowForm] = useState(false);

//   return (
//     <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <div className="relative w-full h-full">
//           <Image
//             src="/event-hero-bg.jpg"
//             alt="Conference background"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#24358b]/90 via-[#202766]/85 to-[#141b43]/90"></div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="container relative z-10 py-12 md:py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//           {/* Left Content */}
//           <div className="text-white space-y-6 md:space-y-8">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//               A Meeting Point for the People Shaping the Markets
//             </h1>
//             <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
//               This is more than an event, this is a place where leaders connect, ideas grow stronger, and the future of the markets moves forward together.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <button
//                 onClick={() => setShowForm(true)}
//                 className="bg-[#24358b] hover:bg-[#1d2a6f] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
//               >
//                 Explore Schedule
//               </button>
//               <button className="flex items-center justify-center w-14 h-14 bg-[#24358b] hover:bg-[#1d2a6f] text-white rounded-full transition-colors duration-200">
//                 <FaPlay className="ml-1" />
//               </button>
//             </div>
//           </div>

//           {/* Right Content - Countdown Timer */}
//           <div className="flex justify-center lg:justify-end">
//             <CountdownTimer />
//           </div>
//         </div>
//       </div>

//       {/* Information Form Popup */}
//       {showForm && <InformationForm onClose={() => setShowForm(false)} />}
//     </section>
//   );
// };

// export default HeroSection;

"use client";

import { useState, useEffect } from "react";
import NewEvent from "../../components/common/NewEvent";

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
    <section className="relative w-full overflow-hidden">
      {/* Background (replace with your image) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/event/ifbg.webp')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 " 
      style={{
        background: 'rgba(29, 31, 43, 0.50)',
      }}
      />

      <div className="relative mx-auto container py-12 md:py-20">
        <div className="grid gap-10 md:grid-cols-12 items-center">
          {/* Left content */}
          <div className="md:col-span-8 lg:col-span-8">
           
            <h2 className="mt-8 max-w-2xl text-center md:text-left text-[24px] font-extrabold md:leading-[1.09] leading-[1.2] tracking-[-0.02em] text-white md:text-[56px] 2xl:text-6xl uppercase 2xl:leading-[4.5rem]">
            A Meeting Point for the People Shaping the Markets
            </h2>

            <p className="mt-6 max-w-[540px] text-center md:text-left text-[14px] leading-[1.55] text-white md:text-[20px]">
            This is more than an event.

              <br />
              It’s a place where leaders connect, ideas grow stronger, and the future of the industry moves forward together.

            </p>

            {/* CTAs */}
            <div className="md:mt-10 mt-5 flex flex-wrap justify-center md:justify-start items-center gap-5">
              {/* <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("event-schedule");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center rounded-[50px] bg-[#293B93] px-5 py-2.5 md:text-[16px] text-[14px] font-semibold text-white transition hover:brightness-110"
              >
                Explore Schedule
              </button> */}

              {/* <button className="group inline-flex items-center gap-2 rounded-full text-[16px] font-semibold text-white transition hover:bg-white/14">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#293B93] transition group-hover:brightness-110">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="translate-x-[1px]"
                  >
                    <path
                      d="M9 7.5V16.5L17 12L9 7.5Z"
                      fill="white"
                    />
                  </svg>
                </span>
                Watch Video
              </button> */}
            </div>
          </div>

          {/* Right form card - iFXExpo Dubai 2026 registration */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col">
           <NewEvent />
          </div>
        </div>

        {/* Bottom divider + countdown */}
        <div className="mt-16">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <p className="text-center text-lg md:text-[22px] lg:text-3xl font-semibold tracking-wide text-white uppercase">
              New Events & Exhibitions Coming Soon ...
            </p>
            <div className="h-px flex-1 bg-white/10" />
          </div>

    
        </div>
      </div>

      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-140px_220px_rgba(0,0,0,0.65)]" />
    </section>
  );
}
