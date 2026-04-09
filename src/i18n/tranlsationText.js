export const translationText = (key, fallback,data={}) =>
    typeof data?.[key] === "string" && data[key].length
      ? data[key]
      : fallback;
