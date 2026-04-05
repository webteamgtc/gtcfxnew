import Link from "next/link";
import { LIVE_ACCOUNT_URL } from "../productConfig";

export default function TradingCtaBand({ locale, headline = "Open a live account and access global markets" }) {
  const demoHref = locale ? `/${locale}/free-demo-account` : "/free-demo-account";

  return (
    <section className="bg-gradient-to-r from-[#263788] via-[#1a2460] to-[#101638] py-12 text-center text-white md:py-14">
      <div className="container flex flex-col items-center gap-6">
        <h2 className="max-w-2xl text-xl font-bold leading-snug md:text-2xl">{headline}</h2>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={LIVE_ACCOUNT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-[10px] bg-gradient-to-r from-[#B68756] to-[#995F22] px-8 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Open Live Account
          </a>
          <Link
            href={demoHref}
            className="inline-flex min-h-11 items-center justify-center rounded-[10px] border-2 border-white/80 bg-transparent px-8 text-[14px] font-semibold text-white transition-colors hover:bg-white/10"
          >
            Try Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
