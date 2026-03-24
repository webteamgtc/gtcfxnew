import Image from "next/image";


export default function SecurityBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-[#263788] via-[#1b2a6b] to-[#263788] text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center gap-3 text-center">
        
        {/* Icon */}
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
          <div className="relative w-8 h-8">
            <Image src="/home/security.svg" fill alt="Security" className="object-contain" />

          </div>
        </div>

        {/* Content */}
        <p className="text-[13px] md:text-[14px] leading-tight">
          <span className="font-semibold">Security of Funds</span>{" "}
          — GTCFX has secured an insurance policy from the Financial Commission, offering protection for clients’ funds up to €20,000. For more details, please <a class="underline text-secondary capitalize" href="/compensation-fund"> click here.</a>
        </p>

      </div>
    </div>
  );
}