"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AppDownloadStickyBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
      <div className="mx-3 mb-3 overflow-hidden rounded-[18px] border border-white/10 bg-primary-gradient shadow-[0_10px_30px_rgba(0,0,0,0.22)] max-w-[81%]">
        <div className="relative flex items-center gap-3 px-2 py-2">
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="absolute right-1 bottom-10 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-white/75 z-50 transition hover:bg-white/20 hover:text-white"
            aria-label="Close app download bar bg-secondary text-white text-xs"
          >
            ✕
          </button>

          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-white ring-1 ring-white">
            <Image
              src="/GTCFX-ICON.svg"
              alt="GTC Go App"
              fill
              className="object-cover"
            />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[12px] font-semibold leading-tight text-white">
              Download GTC Go
            </p>
            <p className="mt-0.5 truncate text-[11px] leading-tight text-white/75">
              Trade global markets anytime, anywhere.
            </p>
          </div>

          <Link
            href="https://qrcodes.pro/YW9ULf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 shrink-0 items-center justify-center rounded-[12px] bg-white px-4 text-[12px] font-semibold text-primary transition hover:no-underline hover:opacity-95"
          >
            Download
          </Link>
        </div>
      </div>
    </div>
  );
}