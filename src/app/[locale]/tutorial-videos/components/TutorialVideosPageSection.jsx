"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { usePathTranslation } from "@/app/[locale]/LocaleProvider";

const defaultTutorialVideos = [
  {
    id: 1,
    title: "How to Open an Account in GTCFX Portal",
    description:
      "Follow the step-by-step process to create your live trading account quickly and easily.",
    thumbnail: "/videos/account0.webp",
    youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_1",
    category: "Account Setup",
    duration: "2 min",
  },
  {
    id: 2,
    title: "How to Verify Your GTCFX Account",
    description:
      "Learn how to complete your account verification smoothly and avoid common mistakes.",
    thumbnail: "/videos/account1.webp",
    youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_2",
    category: "Verification",
    duration: "3 min",
  },
  {
    id: 3,
    title: "How to Deposit Funds into Your Account",
    description:
      "Understand the deposit process and see how to fund your account through available methods.",
    thumbnail: "/videos/account2.webp",
    youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_3",
    category: "Funding",
    duration: "2 min",
  },
  {
    id: 4,
    title: "How to Open an Account in GTCFX Portal",
    description:
      "Follow the step-by-step process to create your live trading account quickly and easily.",
    thumbnail: "/videos/account5.webp",
    youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_4",
    category: "Account Setup",
    duration: "2 min",
  },
  {
    id: 5,
    title: "How to Verify Your GTCFX Account",
    description:
      "Learn how to complete your account verification smoothly and avoid common mistakes.",
    thumbnail: "/videos/account6.webp",
    youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_5",
    category: "Verification",
    duration: "3 min",
  },
  {
    id: 6,
    title: "How to Deposit Funds into Your Account",
    description:
      "Understand the deposit process and see how to fund your account through available methods.",
    thumbnail: "/videos/account7.webp",
    youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_6",
    category: "Funding",
    duration: "2 min",
  },
  {
    id: 7,
    title: "How to Deposit Funds into Your Account",
    description:
      "Understand the deposit process and see how to fund your account through available methods.",
    thumbnail: "/videos/video9.webp",
    youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_7",
    category: "Funding",
    duration: "2 min",
  },
];

function getYoutubeEmbedUrl(url) {
  if (!url) return "";

  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      const id = parsed.pathname.replace("/", "");
      return id
        ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`
        : "";
    }

    if (parsed.hostname.includes("youtube.com")) {
      const id = parsed.searchParams.get("v");
      if (id) {
        return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
      }

      const parts = parsed.pathname.split("/");
      const embedIndex = parts.findIndex((part) => part === "embed");
      if (embedIndex !== -1 && parts[embedIndex + 1]) {
        return `https://www.youtube.com/embed/${parts[embedIndex + 1]}?autoplay=1&rel=0`;
      }
    }

    return "";
  } catch {
    return "";
  }
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5.14v13.72c0 .78.84 1.26 1.5.86l10-6.86a1 1 0 0 0 0-1.72l-10-6.86A1 1 0 0 0 8 5.14Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

function TutorialCard({ video, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(video)}
      className="group block w-full overflow-hidden rounded-[30px] border border-[#E5E7EB] bg-white text-left shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_55px_rgba(15,23,42,0.12)]"
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
        <div className="absolute right-5 top-5 inline-flex rounded-xl bg-black/45 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {video.duration}
        </div>

        {/* floating play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/90 text-[#263788] shadow-xl transition duration-300 group-hover:scale-110">
            <PlayIcon />
          </div>
        </div>

      </div>

      {/* Bottom content area */}
      <div className="relative p-6">
        <div className="absolute left-6 top-0 h-1 w-14 -translate-y-1/2 rounded-xl bg-gradient-to-r from-[#293794] to-[#b68756]" />

        <p className="text-[15px] leading-7 text-[#4B5563]">
          {video.description}
        </p>

      
      </div>
    </button>
  );
}

function VideoModal({ video, onClose, closeLabel, invalidYoutubeLabel }) {
  const embedUrl = useMemo(() => getYoutubeEmbedUrl(video?.youtubeUrl), [video]);

  useEffect(() => {
    if (!video) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[#E5E7EB] px-5 py-4 md:px-6">
          <div>
            <div className="inline-flex rounded-xl bg-[#b68756]/10 px-3 py-1 text-xs font-semibold text-[#b68756]">
              {video.category}
            </div>
            <h3 className="mt-3 text-lg font-semibold text-primary md:text-2xl">
              {video.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E5E7EB] bg-white text-slate-700 transition hover:bg-[#F8FAFC]"
            aria-label={closeLabel}
          >
            <CloseIcon />
          </button>
        </div>

        {/* Video */}
        <div className="bg-black">
          <div className="relative aspect-video w-full">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title={video.title}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="flex h-full items-center justify-center px-6 text-center text-white">
                {invalidYoutubeLabel}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-4 md:px-6">
          <p className="text-sm leading-7 text-[#4B5563] md:text-base">
            {video.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TutorialVideosPageSection() {
  const t = usePathTranslation("tutorialPage");
  const [activeVideo, setActiveVideo] = useState(null);
  const tutorialVideos = defaultTutorialVideos.map((item, index) => {
    const key = ["one", "two", "three", "four", "five", "six", "seven"][index];
    return {
      ...item,
        title: t(`videos.${key}.title`),
      description: t(`videos.${key}.description`),
      category: t(`videos.${key}.category`),
      duration: t(`videos.${key}.duration`),
      youtubeUrl: t(`videos.${key}.youtubeUrl`),
    };
  });

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#fff] to-[#fff] py-10 md:py-16">
        <div className="pointer-events-none absolute left-[-100px] top-10 h-[240px] w-[240px] rounded-xl bg-[#263788]/5 blur-3xl" />
        <div className="pointer-events-none absolute right-[-100px] bottom-10 h-[260px] w-[260px] rounded-xl bg-[#b68756]/10 blur-3xl" />

        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-xl border border-[#b68756]/20 bg-[#b68756]/10 px-4 py-1.5 text-sm font-semibold text-[#b68756]">
              {t("eyebrow")}
            </span>

            <h2 className="HeadingH3 mt-5">
              {t("titleStart")}{" "}
              <span className="text-[#b68756]">
                {t("titleHighlight")}
              </span>
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#4B5563] md:text-lg md:leading-8">
              {t("description")}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {tutorialVideos.map((video) => (
              <TutorialCard
                key={video.id}
                video={video}
                onOpen={setActiveVideo}
              />
            ))}
          </div>
        </div>
      </section>

      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
        closeLabel={t("closeVideoPopup")}
        invalidYoutubeLabel={t("invalidYoutubeUrl")}
      />
    </>
  );
}