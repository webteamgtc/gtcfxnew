import Image from "next/image";

export default function MetalsIntroVisual({ title, paragraphs = [], image }) {
  const description = Array.isArray(paragraphs) ? paragraphs.join(" ") : String(paragraphs || "");
  console.log(image);
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className=" text-center">
          <h2 className="HeadingH2 text-primary">{title}</h2>
          {description ? (
            <p className="mt-3 leading-5 Text md:leading-6">
              {description}
            </p>
          ) : null}
        </div>

        <div className="relative mx-auto mt-10 h-[260px] w-full max-w-[560px] md:h-[320px]">
          {/* Center gold */}
          <Image
            src={image}
            alt="GOLD"
            fill
            sizes="(max-width: 768px) 560px, 560px"
            quality={95}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}

