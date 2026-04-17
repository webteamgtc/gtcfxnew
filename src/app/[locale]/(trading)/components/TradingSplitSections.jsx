import Image from "next/image";

const HTML_TAG = /<\/?[a-z][\s\S]*?>/i;

const proseLight =
  "text-[15px] leading-[1.75] text-slate-600 md:text-[17px] md:leading-8 [&_b]:font-semibold [&_strong]:font-semibold [&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:ps-5 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:ps-5 [&_li]:marker:text-primary [&_a]:font-semibold [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline";

function StepBadge({ index }) {
  const n = String(index + 1).padStart(2, "0");
  return (
    <span className="inline-flex w-fit items-center rounded-xl bg-gradient-to-r from-[#263788] via-[#1e2f8a] to-[#101638] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-primary/25 ring-2 ring-white/20">
      {n}
    </span>
  );
}

function ContentCard({ headingId, title, children, index, centeredIntro }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/95 p-7 shadow-[0_28px_90px_-28px_rgba(38,55,136,0.55)] backdrop-blur-sm md:rounded-3xl md:p-9 lg:p-10 lg:shadow-[0_36px_100px_-32px_rgba(38,55,136,0.6)]">
      <div
        className="pointer-events-none absolute -end-16 -top-24 h-56 w-56 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -start-12 h-44 w-44 rounded-xl bg-gradient-to-tr from-[#101638]/10 to-primary/10 blur-2xl"
        aria-hidden
      />

      <div
        className={`relative flex flex-col gap-5 md:gap-6 ${
          centeredIntro ? "items-center text-center" : ""
        }`}
      >
        <h2
          id={headingId}
          className={`text-balance font-bold tracking-tight text-dark ${
            centeredIntro
              ? "HeadingH4 md:leading-tight"
              : "HeadingH4 md:leading-[1.1]"
          }`}
        >
          {title}
        </h2>
        <span
          className={`h-1 rounded-xl bg-gradient-to-r from-secondary via-primary to-dark ${
            centeredIntro ? "w-20" : "w-24 md:w-28"
          }`}
          aria-hidden
        />
        <div
          className={`w-full space-y-5 Text text-start md:space-y-6 rtl:text-right ${
            centeredIntro ? "mx-auto max-w-prose" : "max-w-prose"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default function TradingSplitSections({ sections }) {
  if (!sections?.length) return null;

  return (
    <>
      {sections.map((section, idx) => {
        const hasImage = Boolean(section.imageSrc);
        const headingId = `trading-split-heading-${idx}`;
        const imageRight = Boolean(section.imageOnRight);

        const paragraphs = section.paragraphs.map((p, i) => {
          const isHtml = typeof p === "string" && HTML_TAG.test(p);
          if (isHtml) {
            return (
              <div
                key={i}
                className={proseLight}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            );
          }
          return (
            <p key={i} className={proseLight}>
              {p}
            </p>
          );
        });

        return (
          <section
            key={`${idx}-${section.title}`}
            aria-labelledby={headingId}
            className={`relative overflow-hidden pb-12 md:pb-16 ${
              hasImage ? "bg-white" : idx % 2 === 0
                ? "bg-gradient-to-b from-slate-50 via-white to-indigo-50/40"
                : "bg-gradient-to-b from-white via-slate-50/90 to-blue-50/30"
            }`}
          >
            {!hasImage ? (
              <div className="max-w-5xl mx-auto relative">
                <div
                  className="pointer-events-none absolute inset-x-0 top-6 text-center text-[clamp(5rem,18vw,10rem)] font-black leading-none text-primary/[0.07]"
                  aria-hidden
                >
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <ContentCard
                  headingId={headingId}
                  title={section.title}
                  index={idx}
                  centeredIntro
                >
                  {paragraphs}
                </ContentCard>
              </div>
            ) : (
              <div className="max-w-5xl mx-auto relative">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                  {/* Text */}
                  <div
                    className={`order-2 ${imageRight ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <h2
                      id={headingId}
                      className="text-balance text-[22px] font-extrabold leading-tight text-primary md:text-[28px]"
                    >
                      {section.title}
                    </h2>
                    <div className="mt-5 max-w-prose space-y-4 text-[13px] leading-6 text-slate-600 md:text-[14px] md:leading-7 ltr:text-left rtl:text-right">
                      {paragraphs}
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`order-1 ${imageRight ? "lg:order-2" : "lg:order-1"}`}>
                    <figure className="mx-auto w-full max-w-[420px]">
                      <Image
                        src={section.imageSrc}
                        alt={section.imageAlt ?? ""}
                        width={1200}
                        height={900}
                        className="h-auto w-full object-contain"
                        sizes="(max-width: 1024px) 100vw, 420px"
                        priority={idx === 0}
                      />
                    </figure>
                  </div>
                </div>
              </div>
            )}
          </section>
        );
      })}
    </>
  );
}
