"use client";
import MobilePeekCarousel from "../MobilePeekCarousel";
import PrimaryButton from "../PrimaryButton";
import { usePathTranslation } from "../../../LocaleProvider";

function FeatureCard({ item, index, mobile = false }) {
  const surface = mobile
    ? "bg-white border-[#ececec] shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
    : [
        item.highlight
          ? "bg-[#eef2ff] border-[#c7d2fe]"
          : "bg-[#F1F2F4] border-[#ececec] bg-op",
        "hover:bg-[#eef2ff] hover:border-[#c7d2fe] hover:shadow-[0_12px_30px_rgba(59,92,255,0.15)] hover:-translate-y-1",
      ].join(" ");

  return (
    <div
      className={`group relative rounded-[14px] md:rounded-[16px] p-6 border transition-all duration-300 ${surface}`}
    >
      <div className="mb-5 h-[2px] w-[40px] bg-primary transition-all duration-300 group-hover:w-[60px]" />

      <span className="bg-secondary text-[10px] md:text-xs rounded-xl text-white px-3 h-7 py-1">
        {item.tag}
      </span>

      <h3 className="mt-4 text-[20px] md:text-[22px] font-semibold text-primary transition-colors duration-300 group-hover:text-[#1e2f99]">
        {item.title}
      </h3>

      <p className="mt-3 text-[14px] md:text-base text-[#4B5563] leading-relaxed">
        {item.description}
      </p>

      {item.highlight && (
        <span className="absolute top-4 right-4 text-[11px] px-3 py-1 rounded-xl bg-[#3b5cff] text-white transition-transform duration-300 group-hover:scale-105">
          New Offering
        </span>
      )}
    </div>
  );
}

export default function FeaturesSection() {
  const t = usePathTranslation("home.invest");
  const features = [
    {
      tag: t("items.one.tag"),
      title: t("items.one.title"),
      description: t("items.one.description"),
      badge: false,
    },
    {
      tag: t("items.two.tag"),
      title: t("items.two.title"),
      description: t("items.two.description"),
      badge: false,
    },
    {
      tag: t("items.three.tag"),
      title: t("items.three.title"),
      description: t("items.three.description"),
      badge: false,
    },
    {
      tag: t("items.four.tag"),
      title: t("items.four.title"),
      description: t("items.four.description"),
      badge: false,
    },
    {
      tag: t("items.five.tag"),
      title: t("items.five.title"),
      description: t("items.five.description"),
    },
    {
      tag: t("items.six.tag"),
      title: t("items.six.title"),
      description: t("items.six.description"),
    },
  ];

  return (
    <section className="py-10 md:py-14 bg-[#fff]">
      <div className="container">
        <div className="text-center flex flex-col items-center gap-5">
          <h2 className="HeadingH2 text-primary">
            {t("titleLine1")}{" "}
            <br className="hidden md:block" />
            <span className="text-secondary">
              {t("titleHighlight")}
            </span>{" "}
            {t("titleLine2")}
          </h2>

          <p className="Text">
            {t("description")}
          </p>
        </div>

        <div className="mt-6 hidden md:grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item, index) => (
            <FeatureCard key={index} item={item} index={index} />
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <MobilePeekCarousel
            items={features}
            trackClassName="-mx-4 px-4"
            renderItem={(item, index) => (
              <FeatureCard item={item} index={index} mobile />
            )}
          />
        </div>
        <div className="flex justify-center mt-5 md:mt-8">
          <PrimaryButton href="/register">
            {t("cta")}
          </PrimaryButton>
        </div>
        
      </div>
    </section>
  );
}
