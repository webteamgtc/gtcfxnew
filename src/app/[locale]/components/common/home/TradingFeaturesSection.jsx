import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Invest Smarter with PAMM",
    description:
      "Invest with professional money managers who trade using structured strategies. Your funds stay in your account, performance is transparent, and the process is truly hands-free ideal for long-term investing.",
    primaryBtn: "Explore PAMM Trading",
    secondaryBtn: "Review More PAMM",
    image: "/home/pamm-home.webp",
    imageAlt: "PAMM Trading App Screen",
    reverse: true,
    imageCard: true,
  },
];

export default function TradingFeaturesSection() {
  return (
   <section className="py-12 md:py-16">
  <div className="max-w-6xl mx-auto px-4 space-y-20">
    {sections.map((item, index) => (
      <div
        key={index}
        className="grid items-center gap-10 md:gap-16 lg:grid-cols-2"
      >
        
        {/* Image (always first on mobile) */}
        <div
          className={`flex justify-center  order-1 ${
            item.reverse ? "lg:order-1" : "lg:order-2"
          }`}
        >
          {item.imageCard ? (
                <div className="">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={500}
                    height={600}
                    className="h-auto w-[350px] md:w-[506px] object-contain"
                  />
                </div>
              ) : (
                <div className="">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={500}
                  height={620}
                  className="h-auto w-[220px] md:w-[506px] object-contain"
                />
                </div>
              )}
        </div>

        {/* Text */}
        <div
          className={`max-w-lg mx-auto lg:mx-0 flex flex-col items-start gap-6 order-2 ${
            item.reverse ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <h2 className="HeadingH3">
            {item.title}
          </h2>

          <p className="Text">
            {item.description}
          </p>

          <div className="flex flex-row gap-3">
            <Link href="https://gtcpamm.com/app/" target="_blank" className="rounded-xl hover:no-underline bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#995F22] hover:from-[#263788] hover:via-[#101638] hover:to-[#263788] px-3 md:px-5 py-2.5 text-[12px] md:text-base font-medium text-white transition hover:opacity-90">
              {item.primaryBtn}
            </Link>
            <Link href="https://gtcpamm.com/app/" target="_blank" className="rounded-xl  hover:no-underline border border-[#8f8f8f] px-3 md:px-5 py-2.5 text-[12px] md:text-base font-medium text-white transition hover:bg-white bg-primary-gradient">
              {item.secondaryBtn}
            </Link>
          </div>
        </div>

      </div>
    ))}
  </div>
</section>
  );
}