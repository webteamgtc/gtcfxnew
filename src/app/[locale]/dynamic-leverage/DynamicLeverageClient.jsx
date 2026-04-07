"use client";

import { useCallback, useState } from "react";

import WhatLervage from "./components/WhatLervage";
import LeverageTable from "./components/leverageTable";
import LervageNewUpdate from "./components/LervageNewUpdate";
import LeveragePop from "./components/LeveragePop";
import TieredLeverageFAQ from "./components/TieredLeverageFAQ .jsx";
import HighMarginRequirementFAQ from "./components/HighMarginRequirementFAQ";
import InnerPageBanner from "../components/common/InnerPageBanner";

function pick(obj, key, fallback = "") {
  const v = obj?.[key];
  return typeof v === "string" && v.length ? v : fallback;
}

export default function DynamicLeverageClient({ locale, copy }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleClosePopup = useCallback(() => setIsPopupOpen(false), []);
  const hero = copy?.lervageHero || {};

  return (
    <>
      <InnerPageBanner
        title={pick(hero, "title", "Dynamic Leverage")}
        description={pick(hero, "description", "")}
        backgroundImage="/breadcamp/leverage.webp"
        mobileBackgroundImage="/breadcamp/dynamic-mobile.webp"
      />
      <WhatLervage copy={copy} />
      <LeverageTable copy={copy} locale={locale} />
      <LervageNewUpdate copy={copy} />
      <LeveragePop copy={copy} isOpen={isPopupOpen} onClose={handleClosePopup} />
      <TieredLeverageFAQ copy={copy} />
      <HighMarginRequirementFAQ copy={copy} />
    </>
  );
}

