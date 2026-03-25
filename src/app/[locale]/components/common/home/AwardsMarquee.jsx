import Image from "next/image";

const awards = [
  "/awards/1.webp",
  "/awards/2.webp",
  "/awards/3.webp",
  "/awards/4.webp",
  "/awards/5.webp",
  "/awards/6.webp",
  "/awards/7.webp",
  "/awards/8.webp",
   "/awards/9.webp",
  "/awards/10.webp",
  "/awards/11.webp",
  "/awards/12.webp",
  "/awards/13.webp",
  "/awards/14.webp",
   "/awards/15.webp",
  "/awards/16.webp",
  "/awards/17.webp",
  "/awards/18.webp",
  "/awards/19.webp",
  "/awards/20.webp"
];

// duplicate for seamless loop
const marqueeAwards = [...awards, ...awards];

export default function AwardsMarquee() {
  return (
    <section className="overflow-hidden">
      <div className="">
      
        <div className="relative overflow-hidden">
          {/* left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent" />
          {/* right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent" />

          <div className="marquee-track flex items-center gap-8 md:gap-12">
            {marqueeAwards.map((logo, index) => (
              <div
                key={index}
                className="flex h-[90px] w-[180px] shrink-0 items-center justify-center rounded-xl border border-border bg-white px-4 py-3 shadow-sm"
              >
                <Image
                  src={logo}
                  alt={`Award logo ${index + 1}`}
                  width={140}
                  height={70}
                  className="h-auto max-h-[100px] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}