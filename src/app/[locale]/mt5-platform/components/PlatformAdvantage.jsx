import React from "react";
import PlatformAdvantages from "@/app/[locale]/components/common/PlatformAdvantages";

export default function Mt5PlatformAdvantages({ copy }) {
  return (
    <PlatformAdvantages
      copy={copy}
      imageSrc="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/platform/mt4/mt5_mobile_new.png"
      imageAlt="mt5 platform on Mobile Image"
    />
  );
}

