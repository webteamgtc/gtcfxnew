import InnerPageBanner from "../../components/common/InnerPageBanner";

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
    <InnerPageBanner
    description="At GTCFX, we're a global team with a presence in over 22 destinations worldwide."
    backgroundImage="/breadcamp/economic.webp"
    mobileBackgroundImage="/breadcamp/economic-mobile.webp"
  />
  );
}

