import { getDictionary } from '@/i18n/request';

export default async function HomePage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const home = dict.home || {};

  return (
    <article>
      <h1 className="mb-2 text-3xl font-semibold text-gray-900">{home.title}</h1>
      <p className="mb-4 text-gray-600">{home.subtitle}</p>
      <p className="mb-6 leading-relaxed">{home.intro}</p>
      <button
        type="button"
        className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
      >
        {home.cta}
      </button>
      <section className="mt-10">
        <h2 className="mb-4 text-xl font-medium text-gray-900">{home.features?.title}</h2>
        <ul className="list-none space-y-2">
          <li className="py-1">• {home.features?.secure}</li>
          <li className="py-1">• {home.features?.support}</li>
          <li className="py-1">• {home.features?.tools}</li>
        </ul>
      </section>
    </article>
  );
}
