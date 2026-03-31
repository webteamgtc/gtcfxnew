import InnerPageBanner from "../../components/common/InnerPageBanner";
import PageHeroCommon from "../../components/common/PageHero";

function MarketOverviewIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <img
        src="/market-overview-banner.svg"
        alt="Calendar"
        className="h-full w-full object-contain"
      />
    </div>
  );
}

export default function MarketOverviewHero() {
  return (
    <InnerPageBanner
    description="At GTCFX, we're a global team with a presence in over 22 destinations worldwide."
    backgroundImage="/breadcamp/new-about.webp"
    mobileBackgroundImage="/breadcamp/about-mobile.webp"
  />
  );
}

