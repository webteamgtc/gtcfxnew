
"use client";

import CommonLeadForm from "@/app/[locale]/components/common/CommonLeadForm";
import { usePathTranslation } from "@/app/[locale]/LocaleProvider";


export default function EventHero({ messages = {}, locale = "en" }) {
const t = usePathTranslation("eventPage");
  return (
    <section className="relative w-full overflow-hidden  py-12 md:py-20">
      {/* Background (replace with your image) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/breadcamp/event.webp')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 "
        style={{
          background: 'rgba(29, 31, 43, 0.50)',
        }}
      />

      <div className="relative mx-auto container">
        <div className="grid gap-10 md:grid-cols-12 items-center min-h-[60vh]">
          {/* Left content */}
          <div className="md:col-span-7 lg:col-span-7">

            <h2 className="mt-8 max-w-2xl text-center md:text-left text-[24px] font-bold md:leading-[1.09] leading-[1.2] tracking-[-0.02em] text-white md:text-[56px] 2xl:text-6xl uppercase 2xl:leading-[4.5rem]">
              {t("hero.titleStart")}{" "}
              <span className="text-secondary">
                {t("hero.titleHighlight")}
              </span>{" "}
              {t("hero.titleEnd")}
            </h2>

            <p className="mt-6 max-w-[540px] text-center md:text-left text-[14px] leading-[1.55] text-white md:text-[20px]">
              {t("hero.line1")}

              <br />
              {t("hero.line2")}

            </p>


          </div>

          {/* Right form card - iFXExpo Dubai 2026 registration */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col md:mt-14">
            <CommonLeadForm
              messages={messages}
              successRedirect={`/${locale}/thank-you`}
              appearance={{ cardBackground: "#ffffff" }}
              endpoints={{
                strapiIfxExpos:null,
                ifxEvent2026: "/api/ifx-event-2026",
                webhookUrl:null
              }}
            />
          </div>
        </div>

        {/* Bottom divider + countdown */}
        <div className="mt-16">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <p className="text-center text-lg md:text-[22px] lg:text-2xl tracking-wide text-white uppercase">
              {t("hero.comingSoon")}
            </p>
            <div className="h-px flex-1 bg-white/10" />
          </div>


        </div>
      </div>

    </section>
  );
}
