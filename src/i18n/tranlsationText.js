export const translationText = (key, fallback,data={}) =>
    typeof data?.[key] === "string" && data[key].length
      ? data[key]
      : fallback;

export const translationTextByPath = (path, fallback, data = {}) => {
  if (typeof path !== "string" || !path.trim()) return fallback;
  const value = path.split(".").reduce((acc, key) => acc?.[key], data);
  return typeof value === "string" && value.trim().length > 0 ? value : fallback;
};
