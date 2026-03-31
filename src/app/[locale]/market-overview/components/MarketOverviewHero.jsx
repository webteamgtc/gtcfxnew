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
    <PageHeroCommon
      title="Market Overview"
      description="It provides valuable insights into key trends, price movements, and market indicators, empowering users to make informed investment decisions."
      right={<MarketOverviewIllustration />}
    />
  );
}

