import React from "react";
import PlatformAdvantages from "@/app/[locale]/components/common/PlatformAdvantages";

export default function Mt4PlatformAdvantages({ copy }) {
  return (
    <PlatformAdvantages
      copy={copy}
      imageSrc="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/platform/mt4/mt4_mobile.webp"
      imageAlt="mt4 platform on Mobile Image"
    />
  );
}
