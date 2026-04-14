"use client";

import React, { Suspense, useState } from "react";
import { GrWorkshop } from "react-icons/gr";
import WhyWorking from "./components/WhyWorking";
import CareerSection from "./components/CareerSection";
import ApplyNow from "./components/CareerForm";
import { usePathTranslation } from "../LocaleProvider";

export default function CareersClient({ careers = {} }) {
  const text = usePathTranslation("about.careers");

  const [selectedJobTitle, setSelectedJobTitle] = useState("");

  const handleJobSelect = (jobTitle) => {
    setSelectedJobTitle(jobTitle);
    window.setTimeout(() => {
      const formElement = document.getElementById("apply-now-form");
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="mb-4">
        <div className="mb-5 flex items-center gap-3 text-[#b68756]">
          <p className="text-secondary text-4xl md:text-5xl">
            <GrWorkshop />
          </p>
          <h2 className="HeadingH3 text-primary">
            {text("title")} <span className="text-[#b68756]">GTCFX</span>
          </h2>
        </div>
        <p className="Text mt-3">
          {text(
            "desc"          )}
        </p>
      </div>

      <WhyWorking messages={careers} />
      <CareerSection messages={careers} onJobSelect={handleJobSelect} selectedJobTitle={selectedJobTitle} />
      <Suspense fallback={null}>
        <ApplyNow messages={careers} selectedJobTitle={selectedJobTitle} />
      </Suspense>
    </div>
  );
}

