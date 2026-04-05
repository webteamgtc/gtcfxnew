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
