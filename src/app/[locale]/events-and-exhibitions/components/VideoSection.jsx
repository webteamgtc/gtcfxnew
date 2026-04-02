"use client";

import { useRef, useState } from "react";

export default function VideoPressSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleEnded = () => setIsPlaying(false);

  return (
    <section className="relative w-full h-[450px] overflow-hidden bg-black">
      {/* Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover cursor-pointer"
        poster="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=1600"
        preload="metadata"
        onClick={togglePlay}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
        playsInline
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay – clickable to toggle play/pause */}
      <button
        type="button"
        onClick={togglePlay}
        className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-inset"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {/* Play button – visible when paused */}
        {!isPlaying && (
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/90 shadow-lg transition hover:scale-105 pointer-events-none">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-[3px] h-8 w-8 text-[#1B2A86]"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
        {/* Pause button – visible when playing */}
        {isPlaying && (
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/90 shadow-lg transition hover:scale-105 pointer-events-none">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8 text-[#1B2A86]"
            >
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          </div>
        )}
      </button>
    </section>
  );
}
