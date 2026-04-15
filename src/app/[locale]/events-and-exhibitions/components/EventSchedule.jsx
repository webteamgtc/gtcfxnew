"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { usePathTranslation } from "@/app/[locale]/LocaleProvider";
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const STRAPI_MEDIA_URL = process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL || "";

function getStrapiImageUrl(url) {
  if (!url) return "/event/event-circle.svg";
  if (url.startsWith("http")) return url;
  return `${STRAPI_MEDIA_URL}${url}`;
}

function getYearFromDate(value) {
  if (!value) return "";
  const str = typeof value === "string" ? value : String(value);
  const match = str.match(/^(\d{4})/);
  return match ? match[1] : "";
}

/** Returns a sortable string YYYY-MM-DD for ordering by year, month, day (Jan first). */
function getDateSortKey(value) {
  if (!value) return "";
  const str = typeof value === "string" ? value : String(value).trim();
  const iso = str.match(/^(\d{4})-(\d{2})(?:-(\d{2}))?/);
  if (iso) return iso[3] ? `${iso[1]}-${iso[2]}-${iso[3]}` : `${iso[1]}-${iso[2]}-01`;
  const d = new Date(str);
  if (!Number.isNaN(d.getTime())) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }
  return "";
}

function getFeatureImageUrl(attrs) {
  const feature = attrs?.featureImage?.data ?? attrs?.featureImage;
  if (!feature) return null;
  const url = feature?.attributes?.url ?? feature?.url;
  return url ? getStrapiImageUrl(url) : null;
}

function mapStrapiEventToScheduleItem(event) {
  const attrs = event?.attributes || event;
  const featureImageUrl = getFeatureImageUrl(attrs);
  const imagesData = attrs?.images?.data || [];
  const imageUrls = imagesData.map(
    (img) => getStrapiImageUrl(img?.attributes?.url || img?.url)
  ).filter(Boolean);
  const avatar =
    featureImageUrl ||
    imageUrls[0] ||
    "/event/event-circle.svg";
  const thumbs =   imageUrls;
  const yearValue = attrs?.year ?? attrs?.date ?? "";
  const year = getYearFromDate(yearValue);
  const dateSort = getDateSortKey(yearValue || attrs?.date);

  return {
    id: event?.id ?? attrs?.id ?? `e-${attrs?.title?.replace(/\s/g, "-") || Math.random()}`,
    time: attrs?.time || "9:00 AM - 5:30 PM",
    date: attrs?.date || "",
    year,
    dateSort,
    title: attrs?.title || "",
    booth: attrs?.booth || "",
    desc: attrs?.shortDescreption ?? attrs?.shortDescription ?? "",
    shortDescription: attrs?.shortDescreption ?? attrs?.shortDescription ?? "",
    longDescription: attrs?.longDescription ?? "",
    locationTitle: attrs?.location || "",
    locationSub: attrs?.booth ? `Booth # ${attrs.booth}` : "",
    avatar,
    heroMedia: thumbs.length > 0
      ? { poster: thumbs[0], thumbs }
      : undefined,
  };
}

export default function EventScheduleSection({ eventsData, events: eventsFromStrapi }) {
  const strapiEvents = Array.isArray(eventsFromStrapi) ? eventsFromStrapi : eventsData?.data ?? [];
  const hasStrapiData = Array.isArray(strapiEvents) && strapiEvents.length > 0;
  const t = usePathTranslation("eventPage");
  const allMappedItems = useMemo(() => {
    if (!hasStrapiData) return [];
    return strapiEvents.map(mapStrapiEventToScheduleItem);
  }, [hasStrapiData, strapiEvents]);

  const availableYears = useMemo(() => {
    const years = [...new Set(allMappedItems.map((i) => i.year).filter(Boolean))];
    years.sort((a, b) => Number(b) - Number(a));
    return years.length > 0 ? years : "";
  }, [hasStrapiData, allMappedItems]);

  const defaultYear = availableYears[0] ?? "2026";
  const [year, setYear] = useState(defaultYear);

  const items = useMemo(() => {
    if (hasStrapiData) {
      const filtered = allMappedItems.filter((item) => item.year === year);
      return [...filtered].sort((a, b) => {
        const keyA = a.dateSort || "9999-12-31";
        const keyB = b.dateSort || "9999-12-31";
        return keyA.localeCompare(keyB);
      });
    }
  }, [year, hasStrapiData, allMappedItems]);

  const [activeId, setActiveId] = useState(items?.[0]?.id ?? "e1");
  const activeIndex = Math.max(
    0,
    items.findIndex((x) => x.id === activeId)
  );
  const active = items[activeIndex] || items[0];

  const [activeThumb, setActiveThumb] = useState(0);

  // sync activeId when items change (e.g. Strapi data loaded or year changed)
  useEffect(() => {
    const found = items.some((x) => x.id === activeId);
    if (!found && items.length > 0) {
      setActiveId(items[0].id);
      setActiveThumb(0);
    }
  }, [items, activeId]);

  // when Strapi data loads, select first available year if current year has no events
  useEffect(() => {
    if (hasStrapiData && availableYears.length > 0 && !availableYears.includes(year)) {
      setYear(availableYears[0]);
    }
  }, [hasStrapiData, availableYears, year]);

  const onYearChange = (y) => {
    setYear(y);
    let nextItems;
    if (hasStrapiData) {
      const filtered = allMappedItems.filter((i) => i.year === y);
      nextItems = [...filtered].sort((a, b) => {
        const keyA = a.dateSort || "9999-12-31";
        const keyB = b.dateSort || "9999-12-31";
        return keyA.localeCompare(keyB);
      });
    } 
    setActiveId(nextItems[0]?.id ?? "");
    setActiveThumb(0);
  };

  return (
    <section id="event-schedule" className="w-full bg-[#0b153a]">
      {/* background gradient like image */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-[220px] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-xl bg-[#2d3bb9]/30 blur-[90px]" />
          <div className="absolute bottom-[-260px] left-[-200px] h-[520px] w-[520px] rounded-xl bg-[#0b153a] blur-[80px]" />
          <div className="absolute bottom-[-260px] right-[-200px] h-[520px] w-[520px] rounded-xl bg-[#0b153a] blur-[80px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-10 md:py-16">
          {/* Top label */}
          <div className="flex items-center justify-center gap-2 text-center text-white">
            <span className="h-2 w-2 rounded-xl bg-white" />
            <p className="flex items-center justify-center gap-[8px] md:text-[22px] text-[18px] text-secondary font-semibold ">
              {t("eventSchedule.label")}
            </p>
          </div>

          <h2 className="mt-4 text-center md:text-[38px] text-[24px] font-extrabold md:leading-[1.2] leading-[1.3]  text-white capitalize">
            {t("eventSchedule.title")} <br />
            {t("eventSchedule.description")}
          </h2>

          {/* Year pills */}
          <div className="md:mt-10 mt-5 flex justify-center">
            <div className="flex items-center gap-1 rounded-xl bg-white/15">
              {availableYears.map((y) => {
                const isActive = y === year;
                return (
                  <button
                    key={y}
                    onClick={() => onYearChange(y)}
                    className={cn(
                      "md:min-w-[100px] min-w-[80px] rounded-xl md:px-5 px-4 py-2 md:text-[20px] text-[16px] font-normal transition",
                      isActive
                        ? "bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#995F22] text-[#fff] shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
                        : "text-white/80 hover:bg-white/10"
                    )}
                  >
                    {y}
                  </button>
                );
              })}
            </div>
          </div>

          {/* List */}
          <div className="md:mt-14 mt-10">
            {items.length === 0 ? (
              <div className="rounded-[14px] bg-white/6 p-6 text-center text-sm text-white/70">
                {t("eventSchedule.noSchedule", { year })}
              </div>
            ) : (
              <div className="space-y-0">
                {items.map((it, idx) => {
                  const isActive = it.id === activeId;
                  const shouldInsertBigCard = idx === activeIndex;

                  return (
                    <div key={it.id}>
                      {/* Row */}
                      <button
                        type="button"
                        onClick={() => {
                          setActiveId(it.id);
                          setActiveThumb(0);
                        }}
                        className={cn(
                          "group w-full text-left",
                          "grid grid-cols-2 gap-x-3 gap-y-4 py-4 md:grid-cols-3 md:gap-x-8 md:gap-y-6 md:py-6 md:items-center",
                          idx !== 0 && idx !== 1 ? "border-t border-white/12" : "",
                          idx === items?.length - 1 ? "border-b border-white/12" : "",
                          isActive ? "" : ""
                        )}
                      >
                        {/* Cell 1: avatar + title + locationSub + date */}
                        <div className="flex items-center gap-3 md:gap-4 min-w-0">
                          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg ring-1 ring-white/20 md:h-[84px] md:w-[120px]">
                            <Image
                              src={it.avatar}
                              alt=""
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0">
                            <div className="text-base font-semibold text-white md:text-[18px]">
                              {it.title}
                            </div>
                            <div className="text-base mt-1 font-semibold text-secondary md:text-[16px]">
                              {it.locationSub}
                            </div>
                            <div className="text-[13px] mt-4 text-white md:text-[14px]">
                              {it.date}
                            </div>
                          </div>
                        </div>

                        {/* Cell 2: location (mobile only) */}
                        <div className="flex items-center gap-2 md:hidden">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0D1155] ring-1 ring-[#4B4B4B]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 25" fill="none">
                              <path d="M15.1489 6.81641C14.7095 6.78711 14.3433 7.13379 14.3433 7.56592C14.3433 7.98096 14.6802 8.31787 15.0952 8.31787C15.5273 8.31787 15.8765 7.94922 15.8447 7.50977C15.8203 7.14111 15.52 6.84082 15.1489 6.81641ZM15.6494 9.06738C15.1587 9.06738 15.0415 9.59229 15.0415 9.79248V9.79492C15.0415 10.6689 14.5801 11.4941 13.8354 11.9531C13.4375 12.1973 12.9785 12.3267 12.5122 12.3267C11.936 12.3267 11.3721 12.1265 10.9229 11.7651C10.3247 11.2817 9.98047 10.564 9.98047 9.79492C9.98047 9.50928 10.0293 9.22607 10.1245 8.95752C10.4785 7.94922 11.4355 7.26807 12.5024 7.26562H12.5073C12.5928 7.26562 12.6782 7.27051 12.7637 7.27783C13.0713 7.30957 13.3618 7.13867 13.479 6.85303L13.4937 6.81885C13.6621 6.39893 13.3862 5.93506 12.9395 5.88135C12.7832 5.86182 12.6245 5.85205 12.4658 5.85205C11.2476 5.85205 10.1147 6.40381 9.36523 7.36328C8.82568 8.0542 8.52783 8.91602 8.52783 9.79248C8.52783 10.5957 8.76953 11.3696 9.22607 12.0312C9.96094 13.0957 11.1719 13.7305 12.4658 13.7305C12.8638 13.7305 13.2593 13.6694 13.6426 13.5498C14.4482 13.2983 15.1392 12.8052 15.6396 12.124C16.1401 11.4429 16.4038 10.6372 16.4038 9.79248V9.78272C16.3989 9.74121 16.4038 9.06738 15.6494 9.06738ZM18.3521 4.44824C16.9482 2.93213 15.0513 2.02637 13.0127 1.89697C12.9126 1.88965 12.8101 1.88477 12.7075 1.88232C12.6392 1.87988 12.5684 1.87988 12.5 1.87988C12.4316 1.87988 12.3657 1.87988 12.2998 1.88232C12.1973 1.88477 12.0972 1.88965 11.9946 1.89697C9.95605 2.02637 8.06152 2.93457 6.65527 4.44824C5.24414 5.97168 4.46777 7.96143 4.46777 10.0537V10.1367C4.48486 11.3647 4.86328 12.6807 5.59814 14.043C6.18896 15.1416 7.01172 15.7886 8.04199 16.9312C8.25439 17.1655 8.47412 17.3999 8.69629 17.6294C10.3101 19.2847 11.8188 20.3979 12.1069 20.6055C12.2241 20.6909 12.3633 20.7349 12.5073 20.7349C12.5464 20.7349 12.5854 20.7324 12.6221 20.7251C12.8027 20.6934 12.9639 20.5884 13.0688 20.4395C13.1738 20.2881 13.2178 20.0977 13.186 19.9146C13.1543 19.729 13.0542 19.5679 12.9028 19.4604C12.7686 19.3628 11.5527 18.4717 10.1465 17.1021C9.8999 16.8604 9.66064 16.6187 9.43604 16.3818C7.79785 14.6558 5.84229 12.5586 5.84229 10.0562C5.84229 7.6416 7.11914 5.39307 9.1748 4.18701C10.1538 3.61328 11.2695 3.29834 12.3999 3.27881H12.6099C12.644 3.27881 12.6807 3.28125 12.7148 3.28125C13.8086 3.31787 14.8877 3.63037 15.835 4.18701C17.8906 5.39307 19.1675 7.6416 19.1675 10.0562C19.1675 12.5586 17.2144 14.6533 15.5737 16.3818C15.3467 16.6211 15.1074 16.8652 14.8608 17.1021C14.6313 17.3267 14.3896 17.5537 14.1406 17.7808L14.1333 17.7832L14.0967 17.8198C13.8843 18.0371 13.7866 18.4399 14.0723 18.8184L14.0845 18.833L14.0991 18.8477L14.1138 18.8599C14.2627 18.9673 14.4263 19.0234 14.5874 19.0234C14.7241 19.0234 14.856 18.9844 14.9683 18.9087L14.9927 18.8965L15.0244 18.8647C15.0391 18.8525 15.0537 18.8403 15.0659 18.8281C15.5005 18.4351 15.918 18.0322 16.3086 17.6318C16.5356 17.3999 16.7554 17.1631 16.9629 16.9336C17.9932 15.791 18.8159 15.144 19.4067 14.0454C20.1392 12.6831 20.52 11.3696 20.5371 10.1392V10.0562C20.5396 7.96143 19.7632 5.97168 18.3521 4.44824ZM19.5142 18.8574C18.9062 18.4766 18.2715 18.2446 17.2217 18.0005C17.1655 17.9883 17.1094 17.981 17.0557 17.981C16.6504 17.981 16.3232 18.3105 16.3232 18.7134C16.3232 19.0552 16.5674 19.3579 16.9019 19.4312C18.6133 19.8047 18.8257 20.1025 18.8257 20.2759C18.8257 20.4468 18.3789 20.8374 16.7017 21.2085C15.4126 21.4941 13.8062 21.6699 12.5049 21.6699C11.2036 21.6699 9.59473 21.4917 8.30811 21.2085C6.6333 20.8374 6.18408 20.4468 6.18408 20.2759C6.18408 20.1025 6.37207 19.7559 8.0835 19.3823C8.41797 19.3091 8.66211 19.0088 8.66211 18.6646C8.66211 18.2593 8.33252 17.9321 7.92969 17.9321C7.87353 17.9321 7.81738 17.9395 7.76367 17.9517C6.71387 18.1958 6.10596 18.4766 5.49561 18.8574C4.82422 19.2773 4.47021 19.7681 4.47021 20.2759C4.47021 21.0742 5.33447 21.8042 6.90186 22.3315C8.40088 22.8369 10.3931 23.1152 12.5073 23.1152C14.6216 23.1152 16.6113 22.8369 18.1128 22.3315C19.6802 21.8042 20.5444 21.0742 20.5444 20.2759C20.5396 19.7681 20.1855 19.2773 19.5142 18.8574Z" fill="white" />
                            </svg>
                          </div>
                          <div className="text-left min-w-0">
                            <div className="text-[13px] font-medium text-white truncate">{it.locationTitle}</div>
                          </div>
                        </div>

                        {/* Cell 3: shortDescription — full width on mobile (row 2), middle column on desktop */}
                        <div className="col-span-2 min-w-0 md:col-span-1">
                          <div className="text-[13px] leading-[1.5] text-white md:text-[14px]">
                            {it.shortDescription}
                          </div>
                        </div>

                        {/* Cell 4: location (desktop only) */}
                        <div className="hidden items-center gap-3 md:flex">
                          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl bg-[#0D1155] ring-1 ring-[#4B4B4B] transition group-hover:bg-white/12">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                              <path d="M15.1489 6.81641C14.7095 6.78711 14.3433 7.13379 14.3433 7.56592C14.3433 7.98096 14.6802 8.31787 15.0952 8.31787C15.5273 8.31787 15.8765 7.94922 15.8447 7.50977C15.8203 7.14111 15.52 6.84082 15.1489 6.81641ZM15.6494 9.06738C15.1587 9.06738 15.0415 9.59229 15.0415 9.79248V9.79492C15.0415 10.6689 14.5801 11.4941 13.8354 11.9531C13.4375 12.1973 12.9785 12.3267 12.5122 12.3267C11.936 12.3267 11.3721 12.1265 10.9229 11.7651C10.3247 11.2817 9.98047 10.564 9.98047 9.79492C9.98047 9.50928 10.0293 9.22607 10.1245 8.95752C10.4785 7.94922 11.4355 7.26807 12.5024 7.26562H12.5073C12.5928 7.26562 12.6782 7.27051 12.7637 7.27783C13.0713 7.30957 13.3618 7.13867 13.479 6.85303L13.4937 6.81885C13.6621 6.39893 13.3862 5.93506 12.9395 5.88135C12.7832 5.86182 12.6245 5.85205 12.4658 5.85205C11.2476 5.85205 10.1147 6.40381 9.36523 7.36328C8.82568 8.0542 8.52783 8.91602 8.52783 9.79248C8.52783 10.5957 8.76953 11.3696 9.22607 12.0312C9.96094 13.0957 11.1719 13.7305 12.4658 13.7305C12.8638 13.7305 13.2593 13.6694 13.6426 13.5498C14.4482 13.2983 15.1392 12.8052 15.6396 12.124C16.1401 11.4429 16.4038 10.6372 16.4038 9.79248V9.78272C16.3989 9.74121 16.4038 9.06738 15.6494 9.06738ZM18.3521 4.44824C16.9482 2.93213 15.0513 2.02637 13.0127 1.89697C12.9126 1.88965 12.8101 1.88477 12.7075 1.88232C12.6392 1.87988 12.5684 1.87988 12.5 1.87988C12.4316 1.87988 12.3657 1.87988 12.2998 1.88232C12.1973 1.88477 12.0972 1.88965 11.9946 1.89697C9.95605 2.02637 8.06152 2.93457 6.65527 4.44824C5.24414 5.97168 4.46777 7.96143 4.46777 10.0537V10.1367C4.48486 11.3647 4.86328 12.6807 5.59814 14.043C6.18896 15.1416 7.01172 15.7886 8.04199 16.9312C8.25439 17.1655 8.47412 17.3999 8.69629 17.6294C10.3101 19.2847 11.8188 20.3979 12.1069 20.6055C12.2241 20.6909 12.3633 20.7349 12.5073 20.7349C12.5464 20.7349 12.5854 20.7324 12.6221 20.7251C12.8027 20.6934 12.9639 20.5884 13.0688 20.4395C13.1738 20.2881 13.2178 20.0977 13.186 19.9146C13.1543 19.729 13.0542 19.5679 12.9028 19.4604C12.7686 19.3628 11.5527 18.4717 10.1465 17.1021C9.8999 16.8604 9.66064 16.6187 9.43604 16.3818C7.79785 14.6558 5.84229 12.5586 5.84229 10.0562C5.84229 7.6416 7.11914 5.39307 9.1748 4.18701C10.1538 3.61328 11.2695 3.29834 12.3999 3.27881H12.6099C12.644 3.27881 12.6807 3.28125 12.7148 3.28125C13.8086 3.31787 14.8877 3.63037 15.835 4.18701C17.8906 5.39307 19.1675 7.6416 19.1675 10.0562C19.1675 12.5586 17.2144 14.6533 15.5737 16.3818C15.3467 16.6211 15.1074 16.8652 14.8608 17.1021C14.6313 17.3267 14.3896 17.5537 14.1406 17.7808L14.1333 17.7832L14.0967 17.8198C13.8843 18.0371 13.7866 18.4399 14.0723 18.8184L14.0845 18.833L14.0991 18.8477L14.1138 18.8599C14.2627 18.9673 14.4263 19.0234 14.5874 19.0234C14.7241 19.0234 14.856 18.9844 14.9683 18.9087L14.9927 18.8965L15.0244 18.8647C15.0391 18.8525 15.0537 18.8403 15.0659 18.8281C15.5005 18.4351 15.918 18.0322 16.3086 17.6318C16.5356 17.3999 16.7554 17.1631 16.9629 16.9336C17.9932 15.791 18.8159 15.144 19.4067 14.0454C20.1392 12.6831 20.52 11.3696 20.5371 10.1392V10.0562C20.5396 7.96143 19.7632 5.97168 18.3521 4.44824ZM19.5142 18.8574C18.9062 18.4766 18.2715 18.2446 17.2217 18.0005C17.1655 17.9883 17.1094 17.981 17.0557 17.981C16.6504 17.981 16.3232 18.3105 16.3232 18.7134C16.3232 19.0552 16.5674 19.3579 16.9019 19.4312C18.6133 19.8047 18.8257 20.1025 18.8257 20.2759C18.8257 20.4468 18.3789 20.8374 16.7017 21.2085C15.4126 21.4941 13.8062 21.6699 12.5049 21.6699C11.2036 21.6699 9.59473 21.4917 8.30811 21.2085C6.6333 20.8374 6.18408 20.4468 6.18408 20.2759C6.18408 20.1025 6.37207 19.7559 8.0835 19.3823C8.41797 19.3091 8.66211 19.0088 8.66211 18.6646C8.66211 18.2593 8.33252 17.9321 7.92969 17.9321C7.87353 17.9321 7.81738 17.9395 7.76367 17.9517C6.71387 18.1958 6.10596 18.4766 5.49561 18.8574C4.82422 19.2773 4.47021 19.7681 4.47021 20.2759C4.47021 21.0742 5.33447 21.8042 6.90186 22.3315C8.40088 22.8369 10.3931 23.1152 12.5073 23.1152C14.6216 23.1152 16.6113 22.8369 18.1128 22.3315C19.6802 21.8042 20.5444 21.0742 20.5444 20.2759C20.5396 19.7681 20.1855 19.2773 19.5142 18.8574Z" fill="white" />
                            </svg>
                          </div>
                          <div className="text-left min-w-0">
                            <div className="text-[14px] font-medium text-white">
                              {it.locationTitle}
                            </div>
                          </div>
                        </div>
                      </button>

                      {/* Big card (insert exactly under active row like the image) */}
                      {shouldInsertBigCard  && (
                        <div className="mt-4 mb-4 bg-white/15 p-4 md:mt-5 md:mb-5 md:p-6">
                          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                            {/* Media */}
                            <div className="min-w-0">
                              <div className="relative h-[220px] overflow-hidden rounded-[4px] md:h-[320px]">
                                <Image
                                  src={
                                    active?.heroMedia?.thumbs?.[activeThumb] ||
                                    active?.heroMedia?.poster
                                  }
                                  alt=""
                                  fill
                                  className="object-cover"
                                />

                                {/* subtle bottom fade */}
                                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[70px] bg-gradient-to-t from-black/40 to-transparent" />
                              </div>

                              {/* Thumbs carousel - simple scroll, no Swiper */}
                              <div className="mt-4 w-full overflow-x-auto overflow-y-hidden md:mt-5" style={{ WebkitOverflowScrolling: "touch" }}>
                                <div className="flex gap-2 pb-1" style={{ minWidth: "min-content" }}>
                                  {active?.heroMedia?.thumbs?.map((t, i) => (
                                    <button
                                      key={`${active?.id}-thumb-${i}`}
                                      type="button"
                                      onClick={() => setActiveThumb(i)}
                                      className={cn(
                                        "relative block h-[52px] min-w-[72px] w-[72px] shrink-0 overflow-hidden rounded-[6px] ring-1 transition touch-manipulation md:h-[50px] md:min-w-0 md:w-[80px]",
                                        i === activeThumb
                                          ? "border-2 border-[#D48755] bg-white/15"
                                          : "ring-white/15 hover:ring-white/35"
                                      )}
                                    >

                                      <Image
                                        src={t}
                                        alt=""
                                        fill
                                        className="object-cover"
                                        sizes="80px"
                                      />
                                      {i !== activeThumb && (
                                        <div className="absolute inset-0 bg-[#0b153a]/20" />
                                      )}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Text */}
                            <div className="min-w-0 pt-0 md:pt-1">
                              <div className="text-xl font-semibold text-white md:text-[28px]">
                                {active?.title}
                              </div>

                              <ul className="mt-4 space-y-4 text-[14px] leading-normal text-white md:mt-6 md:space-y-6 md:text-[16px]">
                                {active?.longDescription
                                  ? active?.longDescription
                                    ?.split(/\n+/)
                                    ?.filter((p) => p?.trim())
                                    ?.map((paragraph, i) => (
                                      <li key={i} className="relative pl-5 md:pl-6">
                                        <span className="absolute left-0 top-[5px] h-2 w-2 rounded-xl bg-[#D48755] md:top-[6px] md:h-[12px] md:w-[12px]" />
                                        {paragraph?.trim()}
                                      </li>
                                    ))
                                  : ""}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {/* end list */}
        </div>
      </div>
    </section>
  );
}
