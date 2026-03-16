import { getDictionary } from '@/i18n/request';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const meta = dict.metadata || {};
  return {
    title: meta.aboutTitle ?? 'About - GTC FX',
    description: meta.aboutDescription,
  };
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const about = dict.about || {};

  return (
    <article>
      <h1 className="mb-2 text-3xl font-semibold text-gray-900">{about.title}</h1>
      <p className="mb-4 leading-relaxed">{about.description}</p>
      <p className="leading-relaxed">{about.mission}</p>
    </article>
  );
}
