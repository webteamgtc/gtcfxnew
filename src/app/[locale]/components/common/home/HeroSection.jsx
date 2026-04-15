import Image from "next/image";
import Link from "next/link";
import HeroStats from "./HeroStats";
import PrimaryButton from "../PrimaryButton";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white z-40">
      {/* Blue gradient hero area */}
      <div className="relative min-h-[720px]">
        {/* Chart line background */}
        <div className="pointer-events-none absolute inset-0 opacity-100">
          <Image
            src="/home/homehero1.webp"
            alt=""
            fill
            priority
            className="object-cover object-[50%_30%]"
          />
        </div>

        {/* White fade bottom */}
        <div className="absolute inset-x-0 bottom-0 h-[220px] bg-gradient-to-b from-transparent to-white" />

        <div className="container relative z-10">
          <div className="grid min-h-[720px] items-center gap-4 pt-10 lg:grid-cols-2">
            {/* Left Content */}
            <div className="pt-20 lg:pt-28">
              {/* Badge */}
              <div className="mb-7 inline-flex items-center gap-3 rounded-xl border border-gray-500 bg-white px-4 py-2 shadow-[0_6px_20px_rgba(0,0,0,0.08)]">
                <span className="rounded-xl  bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#995F22] px-3 py-2 text-[11px] font-semibold uppercase leading-none text-white">
                  New
                </span>
                <span className="text-[14px] md:text-lg font-medium text-primary">
                  GTC GO Trading App
                </span>
              </div>

              {/* Heading */}
              <h1 className="HeadingH1">
                Trade Global Markets with <span className="text-secondary">Confidence</span>
              </h1>

              {/* Description */}
              <p className="mt-5 text-[15px] font-medium leading-[1.7] text-[#fff] md:text-[16px] xl:text-[22px]">
                Access Forex, Indices, Commodities and CFDs through a powerful
                mobile trading platform designed for speed, security and
                precision.
              </p>

              {/* Trust line */}
              <h2 className="mt-8 text-[16px] font-semibold leading-[1.25] text-[#fff] md:text-[24px] xl:text-[28px]">
                Global network across 22+ destinations.
              </h2>

              {/* Stats pill */}
              <HeroStats
                items={[
                  {
                    icon: "/home/instru.svg",
                    label: "27,000+ Instruments",
                  },
                  {
                    icon: "/home/globel.svg",
                    label: "Global Liquidity",
                  },
                  {
                    icon: "/home/support.svg",
                    label: "24/7 Support",
                  },
                ]}
              />
              <div className="flex md:inline-flex gap-2 md:gap-4 flex-row md:justify-center mt-10">
                 <PrimaryButton href="/register">
                Open Live Account
              </PrimaryButton>
                <PrimaryButton variant="dark">
  Free Demo Account
</PrimaryButton>
              </div>
             
            </div>

            {/* Right Image */}
            <div className="relative flex items-end justify-center lg:justify-end ">
              <div className="relative w-full max-w-[500px] pt-14 lg:pt-28 md:mr-[-100px]">
                <Image
                  src="/home/20260323-171716.png"
                  alt="GTC GO Trading App"
                  width={473}
                  height={670}
                  priority
                  className="h-auto w-full object-contain "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
