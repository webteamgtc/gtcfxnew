"use client";

import { useEffect, useState } from "react";
import { FcAndroidOs } from "react-icons/fc";
import { FaAppStoreIos } from "react-icons/fa6";



export default function MobileAppDownloadBanner({
  androidLink = "https://play.google.com/store/apps/details?id=your_android_app_id",
  iosLink = "https://apps.apple.com/app/idXXXXXXXXX",
}) {

  const [platform, setPlatform] = useState(null); // "android" | "ios" | "unknown"

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ua = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(ua)) {
      setPlatform("android");
    } else if (/iPhone|iPad|iPod|iOS/i.test(ua)) {
      setPlatform("ios");
    } else {
      setPlatform("unknown");
    }
  }, []);

  // Only show on mobile & only after detection
  if (platform === null) return null;

  // If you want to show NOTHING for non-mobile, uncomment this:
  // if (platform === "unknown") return null;

  const showAndroid = platform === "android";
  const showIOS = platform === "ios";

  // If you prefer: show both when unknown:
  const showBothWhenUnknown = true;
  const isUnknown = platform === "unknown";

  return (
    <section className="block md:hidden px-4 py-4">
      <div className="rounded-2xl bg-gradient-to-r from-[#293794] via-[#000021] to-[#000021] text-white p-4 shadow-lg">
        {/* Text */}
        <div className="space-y-1 mb-3">
          <p className="text-xs uppercase tracking-[0.16em] text-[#FACC15]">
           Get the app
          </p>
          <h3 className="text-lg font-semibold leading-snug">
           Download the GTCFX Mobile App
          </h3>
          <p className="text-[11px] text-slate-200/90">
           Trade, track and manage your GTC GO & GTC VIP account directly from your phone.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          {(showAndroid || (isUnknown && showBothWhenUnknown)) && (
            <a
              href={androidLink}
              target="_blank"
              className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 rounded-full bg-[#29a643] px-3 py-2 text-xs font-semibold text-white hover:opacity-90 transition"
            >
              {/* Simple Android icon replacement */}
             
              <span className="text-left leading-tight">
                <span className="block text-[10px] uppercase opacity-80">
                  Download on
                </span>
                <span className="block text-xs">Google Play</span>
              </span>
            </a>
          )}

          {(showIOS || (isUnknown && showBothWhenUnknown)) && (
            <a
              href={iosLink}
              target="_blank"
              className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/30 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15 transition"
            >
              {/* Simple Apple icon */}
             
              <span className="text-left leading-tight">
                <span className="block text-[10px] uppercase opacity-80">
                 Download on
                </span>
                <span className="block text-xs">App Store</span>
              </span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
 