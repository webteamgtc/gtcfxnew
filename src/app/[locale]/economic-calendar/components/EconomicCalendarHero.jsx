import PageHeroCommon from "../../components/common/PageHero";

function CalendarIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <img
        src="/calender-banner.svg"
        alt="Calendar"
        className="h-full w-full object-contain"
      />
    </div>
  );
}

export default function EconomicCalendarHero() {
  return (
    <PageHeroCommon
      title="Economic Calendar"
      description="Stay updated with our economic calendar. Keep track of upcoming economic events and their effects on market movements."
      right={<CalendarIllustration />}
    />
  );
}

