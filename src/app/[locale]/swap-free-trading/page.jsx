import Image from "next/image";
import { getDictionary } from "@/i18n/request";
import PageHeroCommon from "../components/common/PageHero";
import InnerPageBanner from "../components/common/InnerPageBanner";

function get(obj, path) {
  return String(path)
    .split(".")
    .reduce((acc, key) => (acc && typeof acc === "object" ? acc[key] : undefined), obj);
}

export default async function SwapFreeTradingPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const sf = dict.swapFreePage || {};

  const t = (path, fallback = "") => {
    const v = get(sf, path);
    return typeof v === "string" && v.length ? v : fallback;
  };

  const faqs = [
    { question: t("faq.questions.q1"), answer: t("faq.questions.a1") },
    { question: t("faq.questions.q2"), answer: t("faq.questions.a2") },
    { question: t("faq.questions.q3"), answer: t("faq.questions.a3") },
    { question: t("faq.questions.q4"), answer: t("faq.questions.a4") },
  ].filter((x) => x.question);

  const splitList = (s) =>
    String(s || "")
      .split(",")
      .map((x) => x.trim())
      .filter(Boolean);

  const nonSwapFreeInstruments = {
    forexPairs: splitList(t("instruments.nonSwapFree.forexPairs.pairs")),
    commoditiesEnergies: splitList(t("instruments.nonSwapFree.commodities.items")),
    cryptoUsdt: splitList(t("instruments.nonSwapFree.crypto.items")),
  };

  return (
    <>
      <InnerPageBanner
        title={t("hero.title")}
        description={`${t("hero.description1")}`}
              backgroundImage="/breadcamp/swap.webp"
        mobileBackgroundImage="/breadcamp/swap-free-mobile.webp"
      />

      <main className="bg-gradient-to-b from-[#F8FAFC] via-[#fff] to-[#fff] text-slate-900">
      <section className="bg-white border-b border-gray-200">
        <div className="container px-4 py-8 md:py-12 gap-10 grid grid-cols-1 md:grid-cols-2 md:items-center">
          {/* Left content */}
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-primary mb-2 uppercase">
              {t('hero.badge')}
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-4 text-primary capitalize">
              {t('hero.title')}
            </h1>
 
            <p className="text-sm md:text-base text-slate-700 mb-3 max-w-xl">
              {t('hero.description2')}
            </p>
          </div>

          {/* Right visual block (placeholder for image/graphic) */}
          <div className="relative">
            <Image src="/Swap-free.webp" alt="Swap-Free Trading" width={600} height={400} className="w-full h-auto "/>
          </div>
        </div>
      </section>
        <section className="container px-4 py-10 md:py-14">
          <div className="mb-8 text-center">
            <h2 className="HeadingH2 mb-2 text-slate-900">
              {t("whyChoose.title")}
            </h2>
            <p className="Text text-slate-700">{t("whyChoose.subtitle")}</p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              {["noSwapCharges", "regionBased", "transparent"].map((k) => (
                <div
                  key={k}
                  className="flex items-center gap-4 rounded-full border border-slate-200 bg-slate-100 px-5 py-4 shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-xl text-slate-700">
                    {t(`whyChoose.features.${k}.icon`)}
                  </div>
                  <div className="min-w-0">
                    <p className="HeadingH5 text-slate-900">
                      {t(`whyChoose.features.${k}.title`)}
                    </p>
                    <p className="TextSmall text-slate-600">
                      {t(`whyChoose.features.${k}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 md:px-10">
              {["fastActivation", "longTerm"].map((k) => (
                <div
                  key={k}
                  className="flex items-center gap-4 rounded-full border border-slate-200 bg-slate-100 px-5 py-4 shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-xl text-slate-700">
                    {t(`whyChoose.features.${k}.icon`)}
                  </div>
                  <div className="min-w-0">
                    <p className="HeadingH5 text-slate-900">
                      {t(`whyChoose.features.${k}.title`)}
                    </p>
                    <p className="TextSmall text-slate-600">
                      {t(`whyChoose.features.${k}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container space-y-8 px-4 pb-12 md:pb-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="HeadingH2 mb-2 text-slate-900">
                {t("howItWorks.title")}
              </h2>
              <p className="Text text-slate-700">{t("howItWorks.subtitle")}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
                <h3 className="HeadingH4 mb-2 text-secondary">
                  {t("howItWorks.onceActivated.title")}
                </h3>

                <ul className="TextSmall flex-1 space-y-2 text-slate-700">
                  <li>• {t("howItWorks.onceActivated.points.point1")}</li>
                  <li>• {t("howItWorks.onceActivated.points.point2")}</li>
                  <li>• {t("howItWorks.onceActivated.points.point3")}</li>
                  <li>• {t("howItWorks.onceActivated.points.point4")}</li>
                </ul>
              </div>

              <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
                <h3 className="HeadingH4 mb-2 text-secondary">
                  {t("howItWorks.eligibility.title")}
                </h3>

                <p className="TextSmall mb-4 text-slate-700">
                  {t("howItWorks.eligibility.description")}
                </p>

                <ul className="TextSmall flex-1 space-y-3 text-slate-700">
                  <li>
                    <strong className="text-secondary">
                      {t("howItWorks.eligibility.criteria.country.title")}
                    </strong>
                    <br />
                    {t("howItWorks.eligibility.criteria.country.description")}
                  </li>

                  <li>
                    <strong className="text-secondary">
                      {t("howItWorks.eligibility.criteria.trading.title")}
                    </strong>
                    <br />
                    {t("howItWorks.eligibility.criteria.trading.description")}
                  </li>
                  <li>{t("howItWorks.eligibility.criteria.trading.note")}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="details" className="container px-4 pb-12 md:pb-16">
          <section
            id="non-swap-free"
            className="space-y-6 rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm md:p-8"
          >
            <div>
              <h2 className="HeadingH2 mb-2 text-primary">{t("instruments.title")}</h2>
              <p className="Text mb-2 text-slate-700">
                {t("instruments.description1")}
              </p>
              <p className="Text mb-2 text-slate-700">
                {t("instruments.description2")}
              </p>
              <ul className="Text space-y-2 pl-5 text-slate-700">
                <li>• {t("instruments.categories.majorFx")}</li>
                <li>• {t("instruments.categories.preciousMetals")}</li>
                <li>• {t("instruments.categories.minorsExotics")}</li>
                <li>• {t("instruments.categories.indicesEnergies")}</li>
                <li>• {t("instruments.categories.cryptocurrencies")}</li>
              </ul>
              <p className="TextSmall mt-3 text-slate-500">{t("instruments.note")}</p>

              <h2 className="HeadingH3 mt-6 mb-2 text-primary">
                {t("instruments.nonSwapFree.title")}
              </h2>
              <p className="TextSmall mt-3 text-slate-500">
                {t("instruments.nonSwapFree.description")}
              </p>
            </div>

            <div className="grid gap-6 text-slate-700 md:grid-cols-3">
              <div>
                <h3 className="HeadingH5 mb-2 text-secondary">
                  {t("instruments.nonSwapFree.forexPairs.title")}
                </h3>
                <ul className="TextSmall space-y-1">
                  {nonSwapFreeInstruments.forexPairs.map((pair, index) => (
                    <li key={index}>• {pair}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="HeadingH5 mb-2 text-secondary">
                  {t("instruments.nonSwapFree.commodities.title")}
                </h3>
                <ul className="TextSmall space-y-1">
                  {nonSwapFreeInstruments.commoditiesEnergies.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-secondary">
                  {t("instruments.nonSwapFree.crypto.title")}
                </h3>
                <ul className="space-y-1">
                  {nonSwapFreeInstruments.cryptoUsdt.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section
            id="how-to-enable"
            className="mt-16 space-y-6 rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm md:p-8"
          >
            <div>
              <h2 className="HeadingH2 mb-2 text-primary">{t("howToEnable.title")}</h2>
              <p className="Text mb-3 text-slate-700">
                {t("howToEnable.description")}
              </p>
              <ul className="Text mb-4 space-y-2 text-slate-700">
                <li>
                  {t("howToEnable.contact")}{" "}
                  <a
                    href={`mailto:${t("howToEnable.email")}`}
                    className="text-primary underline decoration-primary/60 underline-offset-2 hover:text-primary/80"
                  >
                    {t("howToEnable.email")}
                  </a>
                </li>
              </ul>
              <p className="Text text-slate-700">
                {t("howToEnable.confirmation")}
              </p>
            </div>

            <div>
              <h3 className="HeadingH4 mb-2 text-secondary">{t("terms.title")}</h3>
              <ul className="Text mb-3 space-y-2 text-slate-700">
                <li>• {t("terms.points.point1")}</li>
                <li>• {t("terms.points.point2")}</li>
                <li>• {t("terms.points.point3")}</li>
                <li>• {t("terms.points.point4")}</li>
                <li>• {t("terms.points.point5")}</li>
              </ul>
              <p className="TextSmall text-slate-500">{t("terms.note")}</p>
            </div>

            <div id="faq">
              <h3 className="HeadingH4 mb-3 text-secondary">{t("faq.title")}</h3>
              <div className="space-y-3">
                {faqs.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                      <span className="HeadingH5 text-slate-900">
                        {item.question}
                      </span>
                      <span className="text-slate-500 group-open:hidden text-lg">+</span>
                      <span className="hidden text-slate-500 group-open:block text-lg">−</span>
                    </summary>
                    <p className="TextSmall mt-2 text-slate-700">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

