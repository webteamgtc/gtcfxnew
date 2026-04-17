import Image from "next/image";

export default function TradingAdvantages({
  items,
  heading = "Our Trading Advantages",
  className,
}) {
  if (!items?.length) return null;

  const gridClass =
    items.length >= 6
      ? "mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:mt-5"
      : "mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:mt-5";

  const sectionClass =
      className ??
      "bg-gray-100 py-14 md:py-16";

  const cardClass =
    "group flex flex-row items-center gap-4 rounded-xl border rounded-3xl border border-[#E5E7EB] bg-white p-[2px] ps-3 pe-4 py-2.5 shadow-sm transition-all hover:shadow-md md:gap-5 md:ps-4 md:pe-5 md:py-3 lg:justify-center";

  return (
    <section className={sectionClass}>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="HeadingH2 mb-5 text-center md:mb-6">{heading}</h2>
        <div className={gridClass}>
          {items.map((item, index) => (
            <div
              key={`${item.title}-${item.subtitle}-${index}`}
              className={cardClass}
            >
              {item.image?.src ? (
                <div className="flex shrink-0 justify-center">
                  <Image
                    src={item.image.src}
                    alt=""
                    width={Number(item.image.width) || 40}
                    height={Number(item.image.height) || 40}
                    className="h-8 w-8 object-contain transition-all group-hover:brightness-0 lg:h-10 lg:w-10"
                  />
                </div>
              ) : null}
              <div className="flex min-w-0 flex-1 flex-col text-sm font-semibold text-primary transition-colors group-hover:text-primary lg:text-base ltr:text-left rtl:text-right">
                <span className="leading-snug Text text-primary">{item.title}</span>
                <span className="leading-snug TextSmall">{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
