"use client";

const tickerData = [
  { symbol: "EUR/USD", price: "1.0824", change: "+0.18%" },
  { symbol: "GBP/USD", price: "1.2679", change: "+0.22%" },
  { symbol: "USD/JPY", price: "149.83", change: "-0.11%" },
  { symbol: "Gold", price: "2,184.55", change: "+0.41%" },
  { symbol: "BTC/USD", price: "67,420.00", change: "+1.26%" },
  { symbol: "ETH/USD", price: "3,485.20", change: "+0.94%" },
  { symbol: "Nasdaq", price: "18,245.60", change: "+0.37%" },
  { symbol: "S&P 500", price: "5,214.80", change: "+0.29%" },
  { symbol: "Dow Jones", price: "39,412.10", change: "-0.08%" },
  { symbol: "Crude Oil", price: "81.64", change: "+0.33%" },
];

function TickerItem({ item }) {
  const isPositive = item.change.startsWith("+");

  return (
    <div className="flex items-center gap-3 px-6 py-2 shrink-0">
      <span className="text-sm md:text-base font-semibold text-secondary">{item.symbol}</span>
      <span className="text-sm font-medium text-primary">{item.price}</span>
      <span
        className={`text-sm font-semibold ${
          isPositive ? "text-emerald-400" : "text-red-400"
        }`}
      >
        {item.change}
      </span>
    </div>
  );
}

export default function TradingTicker() {
  const loopItems = [...tickerData, ...tickerData];

  return (
    <div className="w-full overflow-hidden py-5 bg-[#F1F2F4] border-[#ececec] border-t border-b">
      <div className="relative flex">
        <div className="ticker-track flex min-w-max items-center whitespace-nowrap">
         {loopItems.map((item, index) => (
  <div key={index} className="flex items-center text-praimary">
    
    {/* Show separator only after first */}
    {index !== 0 && (
      <span className="h-4 w-[1px] bg-secondary mx-2" />
    )}

    <TickerItem item={item} />
  </div>
))}
        </div>
      </div>

      <style jsx>{`
        .ticker-track {
          animation: ticker-scroll 32s linear infinite;
          will-change: transform;
        }

        .ticker-track:hover {
          animation-play-state: paused;
        }

        @keyframes ticker-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ticker-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}