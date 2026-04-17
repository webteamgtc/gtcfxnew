import { getDictionary } from "@/i18n/request";
import { mergeTradingMarketTabs } from "./components/tradingMarketTabs";
import { buildTradingProduct } from "./buildTradingFromInstrument";

/**
 * Trading URLs / registration (not page copy).
 * Product copy + layout: `trading` in `src/messages/en.json` (and locale fallbacks).
 */

export const LIVE_ACCOUNT_URL =
  "https://mygtcfx.com/getview?view=register&token=exhowww.z8owwwww";

/**
 * @param {string} locale
 * @param {"forex"|"metals"|"energy"|"commodities"|"indices"} key
 */
export async function getTradingPageProduct(locale, key) {
  const dict = await getDictionary(locale);
  const enDict = locale !== "en" ? await getDictionary("en") : dict;

  const trading = dict.trading ?? enDict.trading;
  const page = trading?.[key];
  if (!page?.slug) return null;

  const built = buildTradingProduct(page);
  if (!built) return null;

  const marketTabs = mergeTradingMarketTabs(trading.commonTabs, trading);

  return { ...built, marketTabs };
}

export const getBottomItems = (key) => {
  console.log(key);
  switch (key) {
    case "metals":
    return [
      { label: "ZINC", src: "/trading/metals/zinc.webp" },
      { label: "COPPER", src: "/trading/metals/copper.webp" },
      { label: "LEAD", src: "/trading/metals/lead.webp" },
      { label: "GOLD", src: "/trading/metals/gold.webp" },
      { label: "SILVER", src: "/trading/metals/silver.webp" },
      { label: "IRON", src: "/trading/metals/icon.webp" },
    ];
    case "indices":
    return [
      { label: "AUS 100", src: "/trading/indicies/one.webp" },
      { label: "UK 100", src: "/trading/indicies/two.webp" },
      { label: "US 200", src: "/trading/indicies/three.webp" },
      { label: "US 500", src: "/trading/indicies/four.webp" },
      { label: "DE 30", src: "/trading/indicies/five.webp" },
      { label: "AUS 100", src: "/trading/indicies/six.webp" },
      { label: "CHIN 50", src: "/trading/indicies/seven.webp" },
    ];
    case "commodities":
    return [
      { label: "", src: "/trading/commodities/one.webp" },
      { label: "", src: "/trading/commodities/two.webp" },
      { label: "", src: "/trading/commodities/three.webp" },
      { label: "", src: "/trading/commodities/four.webp" },
    ];
    case "energy-cfds":
    return [
      { label: "", src: "/trading/energy/one.webp" },
      { label: "", src: "/trading/energy/two.webp" },
      { label: "", src: "/trading/energy/three.webp" },
      { label: "", src: "/trading/energy/four.webp" },
      { label: "", src: "/trading/energy/five.webp" },
      { label: "", src: "/trading/energy/six.webp" },
    ];
    default:
      return [];
  }
};