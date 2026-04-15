"use client";
import { usePathTranslation } from "../../LocaleProvider";

export function FundSteps() {
  const t = usePathTranslation("depositPage.steps");
  const steps = [
    {
      title: t("items.one.title"),
      desc: t("items.one.desc"),
    },
    {
      title: t("items.two.title"),
      desc: t("items.two.desc"),
    },
    {
      title: t("items.three.title"),
      desc: t("items.three.desc"),
    },
  ];
  return (
    <section className="bg-primary text-white py-10 md:py-16">
      <div className="container text-center">
        <h2 className="HeadingH3 text-white">
          {t("title")}
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              
              {/* Number */}
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#b68756] text-black font-bold">
                {i + 1}
              </div>

              <h3 className="font-semibold text-lg">{step.title}</h3>

              <p className="mt-2 text-sm text-white/80">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}