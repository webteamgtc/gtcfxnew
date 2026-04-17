import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { defaultLocale, locales } from "@/i18n/config";


const GLOSSARY_JSON_BASE =
  "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/glossary";
/**
 * Locale for remote glossary JSON. Matches app locales; falls back when a file may not exist on S3.
 */
function resolveGlossaryFileLocale(locale) {
  const raw = typeof locale === "string" ? locale : defaultLocale;
  if (!locales.includes(raw)) return defaultLocale;
  if (raw === "zh") return defaultLocale;
  return raw;
}

export const useGlossaryHook = () => {
  const params = useParams();
  const routeLocale = params?.locale ?? defaultLocale;
  const glossaryLocale = resolveGlossaryFileLocale(String(routeLocale));

  const list = useMemo(
    () => Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)),
    []
  );

  const [data, setData] = useState([]);
  const [active, setActive] = useState("A");
  const [allList, setAllList] = useState({});

  useEffect(() => {
    setActive("A");
    let cancelled = false;
    setAllList({});

    axios
      .get(`${GLOSSARY_JSON_BASE}/${glossaryLocale}.json`)
      .then((res) => {
        if (cancelled) return;
        setAllList(res?.data && typeof res.data === "object" ? res.data : {});
      })
      .catch(() => {
        if (cancelled) return;
        setAllList({});
      });

    return () => {
      cancelled = true;
    };
  }, [glossaryLocale]);

  useEffect(() => {
    const rows = allList?.[active];
    setData(Array.isArray(rows) ? rows : []);
  }, [active, allList]);

  return {
    list,
    active,
    setActive,
    data,
    locale: glossaryLocale,
  };
};
