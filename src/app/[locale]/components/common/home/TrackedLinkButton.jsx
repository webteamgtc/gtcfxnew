"use client";

import Link from "next/link";
import { trackRegisterClick } from "@/lib/tracking";

export default function TrackedLinkButton({
  href = "/",
  children,
  className = "",
  buttonType = "default",
  location = "unknown",
  trackingData = {},
}) {
  const handleClick = () => {
    trackRegisterClick({
      button_type: buttonType,
      location,
      destination: href,
      ...trackingData,
    });
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}