"use client";

import Image from "next/image";
import Link from "next/link";

export default function AppQRWidget() {
  return (
    <div className="hidden lg:block fixed bottom-6 left-6 z-50">
      <div className="group relative w-[165px] rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-gray-200 hover:scale-[1.03] transition-all">

    
        {/* QR */}
        <div className="relative w-[160px] h-[160px] mx-auto mt-2">
          <Image
            src="/home/qr-app.webp" // your QR
            alt="Download GTC Go"
            fill
            className="object-contain"
          />
        </div>

        {/* CTA */}
        <p className="text-[11px] text-center text-gray-500 mb-4">
          Scan to download App
        </p>

       
      </div>
    </div>
  );
}