import * as XLSX from "xlsx";

const DEFAULT_STRAPI_API_BASE = "https://api.gtcfx.com/api";
const DEFAULT_MEDIA_BASE = "https://api.gtcfx.com";

function strapiBase() {
  const raw =
    process.env.NEXT_PUBLIC_STRAPI_API_URL ||
    process.env.STRAPI_API_URL ||
    DEFAULT_STRAPI_API_BASE;
  return raw.replace(/\/$/, "");
}

function mediaBase() {
  const raw =
    process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL || process.env.STRAPI_MEDIA_URL;
  if (raw) return raw.replace(/\/$/, "");
  const api = strapiBase();
  return api.endsWith("/api") ? api.slice(0, -4) || DEFAULT_MEDIA_BASE : api;
}

function mapLocale(locale) {
  if (!locale) return "en";
  if (locale === "zh") return "zh-Hans";
  return locale;
}

/** Strapi v4 (attributes + media) or v5 (flattened) + common media field names */
function pickFileUrl(payload) {
  if (payload == null || payload.error) return null;

  const raw = payload.data;
  const entries = Array.isArray(raw) ? raw : raw != null ? [raw] : [];
  const entry = entries[0];
  if (!entry) return null;

  const attrs = entry.attributes ?? entry;

  const pickFromMedia = (media) => {
    if (media == null) return null;
    if (typeof media === "string" && media.startsWith("/")) return media;
    if (media?.url) return media.url;
    if (media?.data?.attributes?.url) return media.data.attributes.url;
    if (media?.data?.url) return media.data.url;
    if (Array.isArray(media)) {
      const m0 = media[0];
      if (m0?.url) return m0.url;
      if (m0?.attributes?.url) return m0.attributes.url;
    }
    return null;
  };

  for (const key of ["file", "attachment", "document", "spreadsheet"]) {
    const u = pickFromMedia(entry[key] ?? attrs[key]);
    if (u) return u;
  }

  return null;
}

async function fetchStrapiJson(url) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const headers = {
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const res = await fetch(url, {
    headers,
    cache: "no-store",
  });

  if (!res.ok) {
    const snippet = await res.text().then((t) => t.slice(0, 240)).catch(() => "");
    console.error(
      `[holiday-schedule] Strapi ${res.status} ${url.slice(0, 120)}… ${snippet}`
    );
    return null;
  }

  return res.json();
}

function buildHolidaySchedulesUrl({ locale, populate }) {
  const base = strapiBase();
  const qs = new URLSearchParams();
  qs.set("populate", populate);
  qs.set("sort", "createdAt:desc");
  if (locale !== false && locale != null) qs.set("locale", String(locale));
  return `${base}/holiday-schedules?${qs.toString()}`;
}

async function fetchHolidayEntryFromStrapi(locale) {
  const attempts = [
    { locale, populate: "*" },
    { locale, populate: "file" },
    { locale: "en", populate: "*" },
    { locale: "en", populate: "file" },
    // i18n off or entries only in default locale
    { locale: false, populate: "*" },
    { locale: false, populate: "file" },
  ];

  const seen = new Set();
  for (const opts of attempts) {
    const url = buildHolidaySchedulesUrl(opts);
    if (seen.has(url)) continue;
    seen.add(url);

    const json = await fetchStrapiJson(url);
    const fileUrl = pickFileUrl(json);
    if (fileUrl) return { fileUrl, json };

    const hasRows = Array.isArray(json?.data)
      ? json.data.length > 0
      : json?.data != null;
    if (hasRows && json?.data?.[0] && !fileUrl) {
      console.warn(
        "[holiday-schedule] Strapi returned rows but no file URL — check populate / field name (file)."
      );
    }
  }

  return { fileUrl: null, json: null };
}

async function fetchExcelMatrixFromUrl(fullUrl) {
  const res = await fetch(fullUrl, { cache: "no-store" });
  if (!res.ok) {
    console.error(
      `[holiday-schedule] Excel fetch ${res.status} ${fullUrl.slice(0, 160)}…`
    );
    return null;
  }
  const arrayBuffer = await res.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: "buffer" });
  const firstName = workbook.SheetNames[0];
  if (!firstName) return null;
  const data = XLSX.utils.sheet_to_json(workbook.Sheets[firstName], {
    header: 1,
  });
  return Array.isArray(data) ? data : null;
}

/**
 * @param {string} locale – route locale (e.g. en, ar, zh)
 * @returns {Promise<string[][] | null>} First sheet as AoA (row 0 = header), or null
 */
export async function fetchHolidayScheduleMatrix(locale) {
  const currentLocale = mapLocale(locale);

  try {
    const { fileUrl } = await fetchHolidayEntryFromStrapi(currentLocale);
    if (!fileUrl) {
      console.warn(
        "[holiday-schedule] No file URL — set NEXT_PUBLIC_STRAPI_API_TOKEN if the API requires auth."
      );
      return null;
    }

    const base = mediaBase();
    const fullURL = fileUrl.startsWith("http")
      ? fileUrl
      : `${base}${fileUrl}`;

    return await fetchExcelMatrixFromUrl(fullURL);
  } catch (e) {
    console.error("Holiday schedule fetch failed:", e);
    return null;
  }
}
