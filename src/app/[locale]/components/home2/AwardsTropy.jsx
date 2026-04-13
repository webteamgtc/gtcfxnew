import Image from "next/image";

const awards = [
  "/home/awards/1.png",
  "/home/awards/2.png",
  "/home/awards/3.png",
  "/home/awards/4.png",
  "/home/awards/5.png",
  "/home/awards/6.png",
  "/home/awards/7.png",
  
];

// duplicate for seamless loop
const marqueeAwards = [...awards, ...awards];

export default function AwardsTropy() {
  return (
    <section className="overflow-hidden bg-primary-gradient">
      <div className="">
      
        <div className="relative overflow-hidden">
          {/* left fade */}
          
          <div className="marquee-track flex items-center gap-8 md:gap-12">
            {marqueeAwards.map((logo, index) => (
              <div
                key={index}
                className="flex h-[180px] w-[180px] shrink-0 items-center justify-center shadow-sm"
              >
                <Image
                  src={logo}
                  alt={`Award logo ${index + 1}`}
                  width={140}
                  height={70}
                  className="h-auto max-h-[200px] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
