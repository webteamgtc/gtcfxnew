// "use client";
// import React from "react";
// import Image from "next/image";
// import { FaFacebook, FaTwitter, FaLinkedin, FaShare } from "react-icons/fa";

// const Speakers = () => {
//   const speakers = [
//     {
//       id: 1,
//       name: "Jameel Ahmadi",
//       title: "Chief Analyst",
//       image: "/speaker-jameel.jpg",
//       social: {
//         facebook: "#",
//         twitter: "#",
//         linkedin: "#",
//       },
//     },
//     {
//       id: 2,
//       name: "Mohamed Daher Ali",
//       title: "Crypto VP President",
//       image: "/speaker-mohamed.jpg",
//       social: {},
//     },
//     {
//       id: 3,
//       name: "Ahmed Fouad",
//       title: "Head of Investors Relations",
//       image: "/speaker-ahmed.jpg",
//       social: {},
//     },
//   ];

//   return (
//     <section className="py-16 md:py-24 bg-white">
//       <div className="container">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#24358b] mb-4">
//             Our Speakers
//           </h2>
//           <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
//             Our Expert Voices Shaping the Global Markets
//           </h3>
//           <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             Every GTCFX event is a high-profile international event that brings together industry leaders, professionals, and key decision-makers who speak from experience, not from theory.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
//           {speakers.map((speaker) => (
//             <div
//               key={speaker.id}
//               className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="relative h-64">
//                 <Image
//                   src={speaker.image}
//                   alt={speaker.name}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-[#24358b] mb-1">
//                   {speaker.name}
//                 </h3>
//                 <p className="text-gray-600 mb-4">{speaker.title}</p>
//                 <div className="flex items-center gap-3">
//                   {speaker.social.facebook && (
//                     <a
//                       href={speaker.social.facebook}
//                       className="text-[#24358b] hover:text-[#1d2a6f] transition-colors"
//                     >
//                       <FaFacebook className="w-5 h-5" />
//                     </a>
//                   )}
//                   {speaker.social.twitter && (
//                     <a
//                       href={speaker.social.twitter}
//                       className="text-[#24358b] hover:text-[#1d2a6f] transition-colors"
//                     >
//                       <FaTwitter className="w-5 h-5" />
//                     </a>
//                   )}
//                   {speaker.social.linkedin && (
//                     <a
//                       href={speaker.social.linkedin}
//                       className="text-[#24358b] hover:text-[#1d2a6f] transition-colors"
//                     >
//                       <FaLinkedin className="w-5 h-5" />
//                     </a>
//                   )}
//                   <button className="text-[#24358b] hover:text-[#1d2a6f] transition-colors ml-auto">
//                     <FaShare className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center">
//           <a
//             href="#"
//             className="inline-flex items-center gap-2 text-[#24358b] hover:text-[#1d2a6f] font-semibold transition-colors"
//           >
//             <span>Join our speaker at XGIC events around the world.</span>
//             <span className="text-2xl">👤</span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Speakers;


"use client";

import { useState } from "react";

const speakers = [
  {
    name: "Jameel Ahmad",
    role: "Chief Analyst",
    img: "/event/Frame2.png",
    accent: "from-[#1B2A86] to-[#0B1656]",
    hasShareStack: true,
  },
  {
    name: "Mohamed Daher Ali Ahmed",
    role: "Sr. VP of Liquidity & Partnership",
    img: "/event/Frame4.png",
    accent: "from-[#1B2A86] to-[#0B1656]",
    hasShareStack: true,

  },
  {
    name: "Ahmed Fouad",
    role: "Head of Institutional Sales",
    img: "/event/Frame3.png",
    accent: "from-[#1B2A86] to-[#0B1656]",
    hasShareStack: true,
  },
];

function ShareIcon({ className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M18.585 9.5481L10.3273 14.6931C10.4731 15.1679 10.5186 15.6521 10.4638 16.1444L18.1206 19.0179C18.6491 18.2876 19.3281 17.8221 20.1576 17.6214C20.986 17.4208 21.8026 17.5304 22.6053 17.9493C23.4068 18.3693 23.9586 18.9759 24.2596 19.7693C24.5606 20.5626 24.556 21.3839 24.2456 22.2333C23.9353 23.0826 23.4021 23.7068 22.6461 24.1081C21.8901 24.5094 21.0735 24.6051 20.1985 24.3951C19.3235 24.1851 18.6351 23.7348 18.1335 23.0418C17.6341 22.3476 17.4288 21.5449 17.5198 20.6326L9.86296 17.7591C9.45616 18.3559 8.87277 18.8103 8.19462 19.0588C7.52307 19.3042 6.79143 19.3328 6.10279 19.1404C5.40993 18.9651 4.78885 18.5783 4.32578 18.0339C3.8627 17.4895 3.5806 16.8145 3.51862 16.1024C3.43954 15.392 3.58304 14.6745 3.92929 14.0491C4.27288 13.4218 4.81026 12.9224 5.46112 12.6258C6.10111 12.3136 6.81983 12.1998 7.52496 12.2991C8.23037 12.3995 8.88608 12.72 9.39862 13.2149L17.6563 8.06994C17.4008 7.19494 17.4463 6.36427 17.7928 5.5791C18.1393 4.79394 18.7226 4.21527 19.5428 3.84077C20.363 3.46744 21.1785 3.40444 21.9905 3.64944C22.8025 3.8956 23.4488 4.40194 23.9318 5.16844C24.4148 5.93494 24.5886 6.7376 24.4521 7.57644C24.3156 8.41644 23.8956 9.12344 23.1933 9.6986C22.491 10.2726 21.7116 10.5421 20.8553 10.5059C19.999 10.4686 19.243 10.1489 18.5861 9.54694V9.5481H18.585Z" fill="white" />
    </svg>
  );
}

function Dot() {
  return <span className="inline-block h-2 w-2 rounded-full bg-[#293B93]" />;
}

function SpeakerCard({ s }) {
  const [showShareStack, setShowShareStack] = useState(false);

  return (
    <div className="relative bg-[#fff] p-3 border border-gray-200">
      {/* Image block */}
      <div className="relative mx-auto md:h-[500px] h-[300px] overflow-hidden">
        <div className=" relative h-full">
          <div className={`absolute inset-0 bg-gradient-to-b ${s.accent}`} />
          <img
            src={s.img}
            alt={s.name}
            className="absolute inset-0 h-full w-full  object-cover object-top opacity-[0.92]"
          />
          {/* Share stack – shown on hover, with animation */}
          {s.hasShareStack && (
            <div
              className={`absolute right-5 bottom-8 flex flex-col items-center gap-[10px] transition-all duration-300 ease-out ${showShareStack
                  ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 scale-90 translate-y-3 pointer-events-none"
                }`}
            >
              <button className="grid h-[30px] w-[30px] place-items-center rounded-full bg-[#B48755] text-white shadow-[0_10px_20px_rgba(0,0,0,0.18)] hover:scale-105 transition-transform">
                <span className="text-[14px] font-bold">p</span>
              </button>
              {["in", "x", "f"].map((t) => (
                <button
                  key={t}
                  className="grid h-[30px] w-[30px] place-items-center rounded-full bg-white text-[#1B2A86] shadow-[0_10px_20px_rgba(0,0,0,0.12)] ring-1 ring-black/10 hover:scale-105 transition-transform"
                >
                  <span className="text-[12px] font-semibold">{t}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Name/Role row */}
      <div className="flex items-center text-center justify-center md:px-[26px] px-4 md:pt-[14px] pt-4">
        <div>
          <p className="md:text-[18px] text-[16px] font-semibold text-[#000]">{s.name}</p>
          <p className="mt-1 md:text-[16px] text-[14px] font-normal text-[#777777]">{s.role}</p>
        </div>

      
      </div>
    </div>
  );
}

export default function SpeakersSection() {
  return (
    <section className="w-full bg-gray-100 md:py-[56px] py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Top */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-[8px] md:text-[22px] text-[18px] text-secondary font-semibold">
            <Dot />
            <span>Our Speakers</span>
          </div>

            <h2 className="mt-[10px] md:text-[38px] max-w-xl mx-auto text-[24px] font-extrabold md:leading-[1.2] leading-[1.3]  text-primary">
            Our Expert Voices Shaping the Global Markets
          </h2>

          <p className="mx-auto mt-[12px] md:text-[16px] text-[14px] max-w-3xl font-normal leading-[1.5] text-[#515151]">
          Every GTCFX event is led by professionals who work at the heart of the markets. Not commentators. Not theorists. But people who understand price, liquidity, risk, and real trading decisions.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((s) => (
            <SpeakerCard key={s.name} s={s} />
          ))}
        </div>

        {/* Bottom note */}
        <div className="md:mt-12 mt-10 flex items-center justify-center gap-[10px] text-[#6D6D6D]">
  

          <p className="md:text-[16px] text-[14px] font-normal">
            Join our speaker and help weave innovation, quality, and success
            together worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
