"use client";

import Link from "next/link";
import { trackRegisterClick } from "@/lib/tracking";

export default function PrimaryButton({
  children,
  href = "/",
  variant = "primary",
  size = "md",
  className = "",
  tracking = true, // enable/disable tracking
  trackingData = {}, // dynamic tracking data
}) {
  const base =
    "inline-flex min-h-[54px] items-center hover:no-underline justify-center rounded-xl text-sm md:text-base transition text-center duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary whitespace-nowrap";

  const variants = {
    primary:
      "bg-primary-gradient bg-[length:200%_200%] transition-all duration-500 hover:bg-right text-white hover:opacity-90",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",
    dark:
      "bg-primary text-white hover:opacity-90 bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#995F22]",
  };

  const sizes = {
    sm: "px-4 py-2 text-[13px]",
    md: "px-6 py-3 TextButton",
    lg: "px-8 py-4 text-[16px]",
  };

  const handleClick = () => {
    if (!tracking) return;

    trackRegisterClick({
      button_text: children,
      location: trackingData.location || "unknown",
      destination: href,
      ...trackingData,
    });
  };

  return (
    <Link
      href={href} // ✅ FIXED (use prop instead of hardcoded)
      target="_blank"
      onClick={handleClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}