/**
 * Apply `trading.commonTabs` labels and per-product hero copy from `trading.<key>`.
 * @param {Record<string, string> | undefined} commonTabs
 * @param {Record<string, Record<string, unknown>> | undefined} trading — root `dict.trading` (includes `commonTabs` and product keys like `forex`, `metals`)
 */
export function mergeTradingMarketTabs(commonTabs, trading) {
  const trim = (s) => (typeof s === "string" ? s.trim() : s);
  return TRADING_MARKET_TABS.map((tab) => {
    const ck = tab.commonTabKey ?? tab.key;
    const dk =
      tab.instrumentDataKey ?? (tab.key === "liquidity" ? "metals" : tab.key);
    const product = trading?.[dk];
    const labelFromDict = trim(commonTabs?.[ck]);
    return {
      ...tab,
      label: labelFromDict || tab.label,
      contentTitle: product?.title1 ?? tab.contentTitle,
      contentDescription: product?.sub_title1 ?? tab.contentDescription,
    };
  });
}

export function tabHref(locale, path) {
  if (!path || path === "/") return path;
  if (path.startsWith("http")) return path;
  if (locale && locale !== "en") return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
  return path.startsWith("/") ? path : `/${path}`;
}

export const TRADING_MARKET_TABS = [
  {
    key: "forex",
    commonTabKey: "forex",
    instrumentDataKey: "forex",
    label: "Forex CFDs",
    shortLabel: "Forex",
    icon: "/home/forex.svg",
    contentTitle: "Trade Forex CFDs",
    contentDescription:
      "With a Tightest Spread Starting from 0 PIPS Offering Leverage up to 1:2000 & No restriction",
    buttonText: "Explore Forex",
    buttonLink: "/cfd-trading",
    image: "/home/products/currencies-image.webp",
  },
  {
    key: "energy",
    label: "Energy CFDs",
    shortLabel: "Energy",
    icon: "/home/energy.svg",
    contentTitle: "Invest in Energy",
    contentDescription:
      "Experience a Competitive Advantage When Trading Global Energy CFD Markets with Us",
    buttonText: "Trade Energy",
    buttonLink: "/energy-cfds",
    image: "/home/products/energy-image.webp",
  },
  {
    key: "commodities",
    commonTabKey: "commodities",
    instrumentDataKey: "commodities",
    label: "Commodities CFDs",
    shortLabel: "Commodities",
    icon: "/home/commed.svg",
    contentTitle: "Trade Commodities",
    contentDescription:
      "Access a broad range of commodity markets with reliable execution and flexible trading conditions.",
    buttonText: "Explore Commodities",
    buttonLink: "/commodities",
    image: "/home/products/commodities-image.webp",
  },
  {
    key: "indices",
    commonTabKey: "indices",
    instrumentDataKey: "indices",
    label: "Indices CFDs",
    shortLabel: "Indices",
    icon: "/home/indices.svg",
    contentTitle: "Trade Indices",
    contentDescription:
      "Follow the world’s major markets and trade global indices with speed, precision and confidence.",
    buttonText: "Explore Indices",
    buttonLink: "/indices",
    image: "/home/products/indices-image.webp",
  },
  {
    key: "liquidity",
    commonTabKey: "metals",
    instrumentDataKey: "metals",
    label: "Metals CFDs",
    shortLabel: "Metals",
    icon: "/home/first.svg",
    contentTitle: "Trade Metal CFDs",
    contentDescription:
      "Maximize your profit potential with ultra-competitive Gold CFD spreads, starting at just 4 cents.",
    buttonText: "Explore Metals",
    buttonLink: "/metals",
    image: "/home/products/metals-image.webp",
  },
];
