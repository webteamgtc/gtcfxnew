import CopyTradingSectionClient from "./CopyTradingSectionClient";

async function getLeaderboardData() {
  const base = process.env.NEXT_PUBLIC_LEADER_URL;
  if (!base) return null;

  const normalizedBase = String(base).endsWith("/") ? String(base) : `${base}/`;
  const url = `${normalizedBase}rating/1?%24top=100&widget_key=social_platform_ratings`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 2500);

  try {
    const res = await fetch(url, {
      cache: "force-cache",
      next: { revalidate: 120 },
      signal: controller.signal,
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

export default async function CopyTradingSection() {
  const data = await getLeaderboardData();
  return <CopyTradingSectionClient initialData={data} />;
}
