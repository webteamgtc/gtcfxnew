import { translationText } from "@/i18n/tranlsationText";
import PrimaryButton from "../../components/common/PrimaryButton";
export default function VPSReadySection({ copy }) {
  return (
    <section className="pb-8 md:pb-12 bg-[#F8FAFC]">
      <div className="container">
        <div className="relative overflow-hidden rounded-[24px] border border-[#D9DEE8] bg-gradient-to-r from-[#243586] via-[#222e73] to-[#141b43] px-6 py-8 shadow-sm md:px-10 md:py-10">
          <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-[#b68756]/15 blur-3xl" />

          <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row md:gap-10">
            <div className="max-w-3xl text-center md:text-left">
              <h2 className="HeadingH3 text-white md:ltr:text-left md:rtl:text-right">
                {translationText("elevateHosting.title", "Ready to Elevate Your Hosting?", copy)}
              </h2>
              <p className="Text mt-3 text-white/90 md:ltr:text-left md:rtl:text-right">
                {translationText(
                  "elevateHosting.para",
                  "With our VPS hosting services, you can take your online presence to the next level. Experience the power of a Virtual Private Server tailored to your unique needs. Contact us today to get started.",
                  copy
                )}
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <PrimaryButton variant="dark" size="md" className="min-w-[190px]">
                {translationText("elevateHosting.buttonText", "Subscribe Now", copy)}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
