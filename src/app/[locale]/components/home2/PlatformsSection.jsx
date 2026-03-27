import Image from "next/image";
import Link from "next/link";
const platforms = [
  {
    icon: "/home/gtcfx.svg",
    title: "GTC Trading Platform",
    link: "https://mygtcfx.com/getview?view=register&token=exhowww.z8owwwww",
  },
  {
    icon: "/home/mt4.svg",
    title: "MT4 Trading Platform",
    link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/app-files/gtcglobalsa4setup.exe",
  },
  {
    icon: "/home/mt5.svg",
    title: "MT5 Trading Platform",
    link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/app-files/gtcglobaltrade5setup.exe",
  },
  {
    icon: "/home/gtcfx.svg",
    title: "GTC Go Mobile App",
    link: "https://qrcodes.pro/YW9ULf",
  },
];

export default function PlatformsSection() {
  return (
    <section className="py-10 md:py-16 bg-gray-100 border border-gray-300">
      <div className="container">
        
          <div className=" max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="HeadingH2">
            Discover Our <br className="hidden md:block" />
            <span className="text-secondary">Advanced Trading Platforms</span>
          </h2>

          <p className="Text">
           We understand that every trader is different. That’s why we offer a selection of trusted, award-winning platforms and flexible account types to match your trading style.
          </p>
        </div>

        {/* Center Image */}
        <div className="flex justify-center my-5">
          <div className="relative w-full max-w-[1000px] h-[320px] md:h-[450px] lg:h-[500px]">
            <Image
              src="/home/mobile-rep.webp" // 👈 your image
              alt="Trading Platforms"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom Icons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-14 max-w-5xl mx-auto bg-white p-2 md:rounded-full border border-gray-300">
          {platforms.map((item, index) => (
           <Link
      key={index}
      target="_blank"
      href={item.link}
      className="flex flex-col items-center text-center max-w-[200px] group cursor-pointer px-3 py-2 rounded-lg transition  hover:no-underline"
    >
      {/* Icon */}
      <div className="relative w-10 h-10 mb-2">
        <Image
          src={item.icon}
          alt={item.title}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Title */}
      <h4 className="text-xs md:text-[16px] font-semibold text-[#2f2f2f] leading-tight group-hover:text-primary transition">
        {item.title}
      </h4>
    </Link>
          ))}
        </div>

      </div>
    </section>
  );
}