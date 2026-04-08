import Image from "next/image";
import Link from "next/link";

const platforms = [
  {
    icon: "/home/gtcfx.svg",
    title: "Client Portal",
    description: "Seamless account management experience",
    link: "https://mygtcfx.com/getview?view=register&token=exhowww.z8owwwww",
  },
  {
    icon: "/home/gtcfx.svg",
    title: "GTC Go App",
    description: "Trade markets anytime, anywhere",
    link: "https://qrcodes.pro/YW9ULf",
  },
  {
    icon: "/home/gtcfx.svg",
    title: "GTC VIP Loyalty Rewarded",
    description: "Unlock exclusive rewards as you trade",
    link: "/copy-trading",
  },
  {
    icon: "/home/mt4.svg",
    title: "MT4 Trading Platform",
    description: "A trusted and classic trading platform",
    link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/app-files/gtcglobalsa4setup.exe",
  },
  {
    icon: "/home/mt5.svg",
    title: "MT5 Trading Platform",
    description: "Advanced tools for modern trading",
    link: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/app-files/gtcglobaltrade5setup.exe",
  },
];

export default function PlatformsSection() {
  return (
    <section className="border border-gray-300 bg-gray-100 py-10 md:py-16">
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="HeadingH2">
            Discover Our <br className="hidden md:block" />
            <span className="text-secondary">Advanced Trading Platforms</span>
          </h2>

          <p className="Text">
            We understand that every trader is different. That’s why we offer a
            selection of trusted, award-winning platforms and flexible account
            types to match your trading style.
          </p>
        </div>

        {/* Center Image */}
        <div className="my-5 flex justify-center">
          <div className="relative aspect-[2/1] w-full max-w-[1000px]">
            <Image
              src="/home/mobile-rep.webp"
              alt="Trading Platforms"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom Platforms */}
        <div className="mt-10 overflow-hidden rounded-[8px] bg-[#fff] md:bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-5 md:gap-6 md:bg-transparent md:px-0 md:py-0">
            {platforms.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 px-5 py-6 text-left transition hover:no-underline md:flex-col md:items-start md:justify-start md:px-0 md:py-0 ${
                  index !== platforms.length - 1
                    ? "border-b border-[#dddddd] md:border-b-0"
                    : ""
                }`}
              >
                {/* Icon */}
                <div className="relative h-[48px] w-[48px] shrink-0 md:mb-3 md:h-[50px] md:w-[50px]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h4 className="text-[16px] font-semibold leading-tight text-black">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-[14px] leading-[1.4] text-[#333]">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}