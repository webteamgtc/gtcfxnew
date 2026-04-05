/**
 * Turns one `messages.*.json` `trading.<product>` object (copy + layout) into props for TradingProductView.
 */

const HTML_TAG = /<\/?[a-z][\s\S]*?>/i;

function sectionParagraphs(page, sectionNum) {
  const single = page[`desc${sectionNum}`];
  if (typeof single === "string" && single.length) return [single];
  const out = [];
  let i = 1;
  while (true) {
    const k = `desc${sectionNum}_${i}`;
    if (page[k] == null) break;
    out.push(page[k]);
    i += 1;
  }
  return out;
}

export function sectionsFromPage(page, imageSrcs) {
  const imgs =
    imageSrcs?.length > 0
      ? imageSrcs
      : ["/breadcamp/about.webp", "/breadcamp/demo.webp", "/breadcamp/blog.webp"];
  const sections = [];
  let imgIdx = 0;
  for (let n = 4; n <= 20; n += 1) {
    const title = page[`title${n}`];
    if (!title) continue;
    const paragraphs = sectionParagraphs(page, n);
    if (!paragraphs.length) continue;
    sections.push({
      title,
      imageOnRight: sections.length % 2 === 0,
      imageSrc: imgs[imgIdx % imgs.length] ?? imgs[0],
      paragraphs,
    });
    imgIdx += 1;
  }
  return sections;
}

export function advantagesFromPage(page) {
  const items = [];
  for (let i = 1; i <= 12; i += 1) {
    const t = page[`adv${i}_1`];
    const s = page[`adv${i}_2`];
    if (t == null && s == null) break;
    items.push({ title: t ?? "", subtitle: s ?? "" });
  }
  return items;
}

export function faqsFromPage(page) {
  const f = page.faqs;
  if (!f || typeof f !== "object") return [];
  const out = [];
  for (let i = 1; i <= 80; i += 1) {
    const q = f[`title${i}`];
    const a = f[`paragraph${i}`];
    if (q == null && a == null) {
      if (i > 1) break;
      continue;
    }
    if (q == null) break;
    const useHtml = typeof a === "string" && HTML_TAG.test(a);
    out.push(useHtml ? { q, aHtml: a } : { q, a: a ?? "" });
  }
  return out;
}

export function mergeAdvantageImages(items, images) {
  if (!items?.length || !images?.length) return items;
  return items.map((it, i) => ({
    ...it,
    ...(images[i] ? { image: images[i] } : {}),
  }));
}

/**
 * @param {Record<string, unknown>} page — merged product from `dict.trading.<key>`
 */
export function buildTradingProduct(page) {
  if (!page || typeof page !== "object") return null;

  const advantagesRaw = advantagesFromPage(page);
  let advantages = mergeAdvantageImages(
    advantagesRaw.length ? advantagesRaw : page.advantages ?? [],
    page.advantageImages
  );
  const advLimit = Number(page.advantageLimit);
  if (Number.isFinite(advLimit) && advLimit > 0 && advantages.length > advLimit) {
    advantages = advantages.slice(0, advLimit);
  }

  const sectionsBuilt = sectionsFromPage(page, page.sectionImages);
  const sections = sectionsBuilt.length ? sectionsBuilt : page.sections ?? [];

  const faqsBuilt = faqsFromPage(page);
  const faqs = faqsBuilt.length ? faqsBuilt : page.faqs ?? [];

  return {
    slug: page.slug,
    metaTitle: page.metaTitle,
    metaDescription: page.metaDescription,
    backgroundImage: page.backgroundImage,
    mobileBackgroundImage: page.mobileBackgroundImage,
    rightImage: page.rightImage,
    bannerTitle: page.title1 ?? page.bannerTitle,
    bannerDescription: page.sub_title1 ?? page.bannerDescription,
    advantagesHeading: page.title2 ?? page.advTitle,
    advantages,
    sections,
    disclaimer: page.disclaimer,
    faqTitle: page.faq_title,
    faqSubtitle: page.faqSubtitle ?? null,
    faqs:page.key === "forex" ? faqs : [],
  };
}
