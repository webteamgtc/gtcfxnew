"use client";

/**
 * Fixed right rail (like SocialBanner on SingleDetailPage): collapsed trading icon,
 * expands on hover / focus-within to show all market tabs.
 */
export default function TradingMarketsDock({ tabs, activeTab, onTabChange }) {
  const panelClass =
    "absolute end-0 top-full z-50 mt-1 w-[min(200px,calc(100vw-1.5rem))] origin-top scale-95 opacity-0 pointer-events-none transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:scale-100 group-focus-within:opacity-100 group-focus-within:pointer-events-auto";

  const iconItemClass =
    "translate-x-1 opacity-0 transition-all duration-500 delay-75 group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100";

  const triggerClass =
    "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#1a1a3e] text-white shadow-[0_12px_28px_rgba(36,53,139,0.35)] transition duration-300 hover:scale-105";

  const scrollToMarkets = () => {
    document.getElementById("trading-markets-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed end-3 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <article className="group relative flex flex-col items-end">
        <button
          type="button"
          className={triggerClass}
          aria-label="Markets menu"
          title="Markets"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6m4 6V9m4 10V5"
            />
          </svg>
        </button>

        <nav className={panelClass} aria-label="Switch market">
          <ul className="flex flex-col gap-1.5 rounded-2xl border border-slate-200/90 bg-white/95 p-2 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-sm">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <li key={tab.key} className={iconItemClass}>
                  <button
                    type="button"
                    onClick={() => {
                      onTabChange(tab.key);
                      scrollToMarkets();
                    }}
                    className={`flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2.5 text-left text-[13px] font-semibold transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-[#263788] to-[#101638] text-white shadow-md"
                        : "text-[#2f2f2f] hover:bg-slate-50"
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                        isActive ? "bg-white/15" : "bg-[#f1f2f4]"
                      }`}
                    >
                      <img
                        src={tab.icon}
                        alt=""
                        className={`h-4 w-4 object-contain ${isActive ? "brightness-0 invert" : ""}`}
                      />
                    </span>
                    <span className="min-w-0 leading-tight">{tab.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </article>
    </div>
  );
}
