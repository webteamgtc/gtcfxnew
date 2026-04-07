"use client";

import Image from "next/image";

const tutorialVideos = [
  {
    id: 1,
    title: "How to Open an Account in GTCFX Portal",
    description:
      "Follow the step-by-step process to create your live trading account quickly and easily.",
    thumbnail: "/videos/account0.webp",
    url: "#",
    category: "Account Setup", 
    duration: "2 min",
  },
  {
    id: 2,
    title: "How to Verify Your GTCFX Account",
    description:
      "Learn how to complete your account verification smoothly and avoid common mistakes.",
    thumbnail: "/videos/account1.webp",
    url: "#",
    category: "Verification",
    duration: "3 min",
  },
  {
    id: 3,
    title: "How to Deposit Funds into Your Account",
    description:
      "Understand the deposit process and see how to fund your account through available methods.",
    thumbnail: "/videos/account2.webp",
    url: "#",
    category: "Funding",
    duration: "2 min",
  },
   {
    id: 1,
    title: "How to Open an Account in GTCFX Portal",
    description:
      "Follow the step-by-step process to create your live trading account quickly and easily.",
    thumbnail: "/videos/account5.webp",
    url: "#",
    category: "Account Setup",
    duration: "2 min",
  },
  {
    id: 2,
    title: "How to Verify Your GTCFX Account",
    description:
      "Learn how to complete your account verification smoothly and avoid common mistakes.",
    thumbnail: "/videos/account6.webp",
    url: "#",
    category: "Verification",
    duration: "3 min",
  },
  {
    id: 3,
    title: "How to Deposit Funds into Your Account",
    description:
      "Understand the deposit process and see how to fund your account through available methods.",
    thumbnail: "/videos/account7.webp",
    url: "#",
    category: "Funding",
    duration: "2 min",
  },
   {
    id: 3,
    title: "How to Deposit Funds into Your Account",
    description:
      "Understand the deposit process and see how to fund your account through available methods.",
    thumbnail: "/videos/video9.webp",
    url: "#",
    category: "Funding",
    duration: "2 min",
  },
];

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5.14v13.72c0 .78.84 1.26 1.5.86l10-6.86a1 1 0 0 0 0-1.72l-10-6.86A1 1 0 0 0 8 5.14Z" />
    </svg>
  );
}

function TutorialCard({ video }) {
  return (
    <a
      href={video.url}
      className="group block overflow-hidden rounded-[30px] border border-[#E5E7EB] bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_55px_rgba(15,23,42,0.12)]"
    >
      {/* Top visual area */}
      <div className="relative overflow-hidden">
        <Image
          src={video.thumbnail}
          alt={video.title}
          width={700}
          height={420}
          className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/80 via-[#0B132B]/15 to-transparent" />

       

        {/* duration */}
        <div className="absolute right-5 top-5 inline-flex rounded-full bg-black/45 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {video.duration}
        </div>

        {/* floating play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#263788] shadow-xl transition duration-300 group-hover:scale-110">
            <PlayIcon />
          </div>
        </div>

      
      </div>

      {/* Bottom content area */}
      <div className="relative p-6">
        <div className="absolute left-6 top-0 h-1 w-14 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#293794] to-[#b68756]" />

        <p className="text-[15px] leading-7 text-[#4B5563]">
          {video.description}
        </p>

     
      </div>
    </a>
  );
}

export default function TutorialVideosPageSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#fff] to-[#fff] py-10 md:py-16">
      <div className="pointer-events-none absolute left-[-100px] top-10 h-[240px] w-[240px] rounded-full bg-[#263788]/5 blur-3xl" />
      <div className="pointer-events-none absolute right-[-100px] bottom-10 h-[260px] w-[260px] rounded-full bg-[#b68756]/10 blur-3xl" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-[#b68756]/20 bg-[#b68756]/10 px-4 py-1.5 text-sm font-semibold text-[#b68756]">
            Video Tutorials
          </span>

          <h2 className="HeadingH3 mt-5">
            GTCFX <span className="text-[#b68756]">Tutorial Videos</span>
          </h2>

          <p className="mt-5 text-[15px] leading-7 text-[#4B5563] md:text-lg md:leading-8">
            Learn how to open your account, verify your profile, deposit funds,
            and manage your trading journey with clear step-by-step video guides.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tutorialVideos.map((video) => (
            <TutorialCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}