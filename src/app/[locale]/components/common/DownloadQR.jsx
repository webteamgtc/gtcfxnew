"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function DownloadQR() {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // close on outside click
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* Icon Button */}
      <button
  onClick={() => setOpen(!open)}
  className="group relative flex xl:h-10 h-8 xl:w-10 w-8 items-center justify-center rounded-lg bg-secondary transition-all duration-300 hover:bg-primary"
>
  {/* Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-y-[2px]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="3"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4" />
  </svg>
</button>

      {/* Popup */}
      <div
        className={`absolute right-0 mt-3 w-[170px] rounded-xl bg-white border border-gray-200 shadow-xl transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 translate-y-2 invisible"
        }`}
      >
        <div className="flex flex-col items-center">
          <div className="relative w-[250px] h-[170px]">
            <Image
              src="/home/qr-app.webp" // 👈 replace with your QR
              alt="QR Code"
              fill
              className="object-contain"
            />
          </div>

          <p className="text-sm font-medium text-[#2f2f2f] pb-2">
            Download App
          </p>
        </div>
      </div>
    </div>
  );
}