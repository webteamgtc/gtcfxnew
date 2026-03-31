import EconomicCalendarHero from "./components/EconomicCalendarHero";
import TradingToolsSection from "./components/TradingToolsSection";

export default function EconomicCalendarPage() {
  return (
    <>
      <EconomicCalendarHero />
      <TradingToolsSection />
      <div className="grid container grid-cols-1 pb-8 pt-4 lg:grid-cols-2 gap-4">
        <div className="border boder-gray-200 min-h-[400px]">
        <iframe
          src={"https://www.tradays.com/en/economic-calendar/widget?mode=2&utm_source=mountaxis.com"}
          width="100%"
          height="620px"
          style={{ border: "unset" }} // Use an object for inline styles
          className="border-none" // Add Tailwind class for border-none
        ></iframe>
        </div>
        <div className="border boder-gray-200 min-h-[400px]">
          <iframe
            src={"https://widget.myfxbook.com/widget/calendar.html?lang=en&impacts=0,1,2,3&symbols=AUD,CAD,CHF,CNY,EUR,GBP,JPY,NZD,USD"}
            style={{ border: 0 }}
            width="100%"
            height="100%"
            className="border-none min-h-[400px] rounded-md"
          />
        </div>
      </div>
    </>
  );
}

