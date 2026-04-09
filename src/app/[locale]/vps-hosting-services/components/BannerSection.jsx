import React from "react";
import Image from "next/image";
 import PrimaryButton from "../../components/common/PrimaryButton";
import { translationText } from "@/i18n/tranlsationText";
import VpsHostingForm from "../../components/common/forms/VPSHostingForm";
const BannerSection = ({ copy }) => {
 
  return (
     <div className="py-8 md:py-12"  id="top-banner">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 items-center border-b border-gray-200 pb-10">
          <div
            className="content-section text-center md:ltr:text-left md:rtl:text-right gap-4 col-span-2 py-6"
          >
            <h2 className="HeadingH2 md:ltr:text-left md:rtl:text-right px-10 md:px-0 md:w-[600px]">
              {translationText("hero.heading", "Powerful Virtual Private Servers Tailored to Your Needs", copy)}
            </h2>
          
            <p className="Text md:ltr:text-left md:rtl:text-right">
              <span className="Text text-secondary">
                {translationText("hero.para.yellow1", "Where", copy)}
              </span>{" "}
              {translationText("hero.para.white", "Performance, Flexibility, & Reliability", copy)}
              <span className="Text text-secondary">
                {translationText("hero.para.yellow2", "Converge to Empower Your Trading!", copy)}
              </span>
            </p>
            <div className="relative h-40 w-full md:h-72">
              <Image
                src="/vps.webp"
                fill
                alt="Social Trading"
                className="object-contain"
              />
            </div>
            <p className="Text md:ltr:text-left md:rtl:text-right pb-5">
              {translationText("hero.buttonHeading", "Don't have an account yet?", copy)}
            </p>
            <PrimaryButton href="https://mygtcfx.com/getview?view=register&token=exhowww.z8owwwww" target="_blank">{copy?.hero?.button}</PrimaryButton>
           </div>
          <div>
            <VpsHostingForm copy={copy} />
                    {/* <VpsHostingForm /> */}
          </div>
        </div>
      </div>
    </div>
   );
};

export default BannerSection;
