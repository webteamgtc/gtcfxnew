import Image from "next/image";
import Link from "next/link";

export default function SecurityBanner() {
  return (
    <div className="bg-gradient-to-r from-[#263788] via-[#101638] to-[#263788]  py-5 md:py-8 text-white">
      <div className="container flex flex-col items-center justify-center gap-2 text-center md:flex-row md:gap-4">

        {/* Icon (clean like screenshot) */}
        <div className="relative w-8 h-8 md:w-12 md:h-12 shrink-0">
          <Image
            src="/home/security.svg"
            fill
            alt="Security"
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">

          {/* Title */}
          <span className="HeadingH4 font-semibold text-white">
            Security of Funds
          </span>
 <div className="h-px w-full max-w-[80px] bg-white/10" />
          {/* Description */}
          <p className="TextSmall mt-1 text-white/85">
            GTCFX has secured an insurance policy from the Financial Commission,
            offering protection for clients’ funds up to €20,000. For more
            details,{" "}
            <Link
              href="/compensation-fund"
              className="underline text-secondary hover:opacity-80 transition"
            >
              click here
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}