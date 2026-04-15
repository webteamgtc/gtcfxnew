"use client";
import PrimaryButton from "../../components/common/PrimaryButton";
import { usePathTranslation } from "../../LocaleProvider";
export function FundHero() {
  const t = usePathTranslation("depositPage.hero");
  return (
  <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#fff] to-[#fff] py-10 md:py-16">
  {/* subtle glow */}
  <div className="pointer-events-none absolute left-[-80px] top-10 h-[220px] w-[220px] rounded-xl bg-[#263788]/10 blur-3xl" />
  <div className="pointer-events-none absolute right-[-80px] bottom-10 h-[240px] w-[240px] rounded-xl bg-[#b68756]/10 blur-3xl" />

  <div className="container text-center">
    
    {/* Badge */}
    <span className="inline-flex rounded-xl border border-[#b68756]/20 bg-[#b68756]/10 px-4 py-1.5 text-sm font-semibold text-[#b68756]">
      {t("eyebrow")}
    </span>

    {/* Heading */}
    <h1 className="HeadingH3 py-5">
      {t("titleStart")}{" "}
      <span className="text-[#b68756]">{t("titleHighlight")}</span>
    </h1>

    {/* Description */}
    <p className="Text max-w-2xl mx-auto text-gray-600">
      {t("description")}
    </p>

    {/* CTA */}
    <div className="mt-8 flex flex-wrap justify-center gap-4">
     <PrimaryButton href="/register">
       {t("cta")}
     </PrimaryButton>
    </div>

  </div>
</section>
  );
}