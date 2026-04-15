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
import { usePathTranslation } from "@/app/[locale]/LocaleProvider";

function Dot() {
  return <span className="inline-block h-2 w-2 rounded-xl bg-[#293B93]" />;
}

function SpeakerCard({ s }) {
  const [showShareStack] = useState(false);

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
              <button className="grid h-[30px] w-[30px] place-items-center rounded-xl bg-[#B48755] text-white shadow-[0_10px_20px_rgba(0,0,0,0.18)] hover:scale-105 transition-transform">
                <span className="text-[14px] font-bold">p</span>
              </button>
              {["in", "x", "f"].map((t) => (
                <button
                  key={t}
                  className="grid h-[30px] w-[30px] place-items-center rounded-xl bg-white text-[#1B2A86] shadow-[0_10px_20px_rgba(0,0,0,0.12)] ring-1 ring-black/10 hover:scale-105 transition-transform"
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
          <p className="HeadingH5 text-semibold">{s.name}</p>
          <p className="mt-1 md:text-[16px] text-[14px] font-normal text-[#777777]">{s.role}</p>
        </div>

      
      </div>
    </div>
  );
}

export default function SpeakersSection() {
const t = usePathTranslation("eventPage");
  const speakers = [
    {
      name: t("speakers.cards.one.name"),
      role: t("speakers.cards.one.role"),
      img: "/event/Frame2.png",
      accent: "from-[#1B2A86] to-[#0B1656]",
      hasShareStack: true,
    },
    {
      name: t("speakers.cards.two.name"),
      role: t("speakers.cards.two.role"),
      img: "/event/Frame4.png",
      accent: "from-[#1B2A86] to-[#0B1656]",
      hasShareStack: true,
    },
    {
      name: t("speakers.cards.three.name"),
      role: t("speakers.cards.three.role"),
      img: "/event/Frame3.png",
      accent: "from-[#1B2A86] to-[#0B1656]",
      hasShareStack: true,
    },
  ];
  return (
    <section className="w-full bg-gray-100 md:py-[56px] py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Top */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-[8px] md:text-[22px] text-[18px] text-primary font-semibold">
            <Dot />
            <span>{t("speakers.label")}</span>
          </div>

            <h2 className="HeadingH3 py-2 max-w-xl mx-auto">
            {t("speakers.titleStart")}{" "}
            <span className="text-secondary">{t("speakers.titleHighlight")}</span>{" "}
            {t("speakers.titleEnd")}
          </h2>

          <p className="mx-auto mt-[12px] md:text-[16px] text-[14px] max-w-3xl font-normal leading-[1.5] text-[#515151]">
            {t("speakers.description")}
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
            {t("speakers.bottomNote")}
          </p>
        </div>
      </div>
    </section>
  );
}
