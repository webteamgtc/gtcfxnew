const dictionaries = {
  en: () => import('@/messages/en.json').then((m) => m.default),
  ar: () => import('@/messages/ar.json').then((m) => m.default),
};

export async function getDictionary(locale) {
  return dictionaries[locale]?.() ?? dictionaries.en();
}
