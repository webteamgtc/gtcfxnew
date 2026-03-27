"use client";

import Image from "next/image";
import Link from "next/link";
import MobilePeekCarousel from "../MobilePeekCarousel";

function IconClock({ className }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

const posts = [
  {
    category: "Awards",
    title:
      "GTCFX Golden Falcon Awards 2025: Global Trading Excellence Shines in Dubai",
    readTime: "5 min read",
    date: "Mar 20, 2026",
    dateIso: "2026-03-20",
    href: "/",
    imageSrc: "/home/one.webp",
    imageAlt: "Awards featured image",
  },
  {
    category: "GTC GO App",
    title: "GTC Launches the Next-Generation Trading App: GTC GO is Now Live!",
    readTime: "5 min read",
    date: "Mar 20, 2026",
    dateIso: "2026-03-20",
    href: "/",
    imageSrc: "/home/two.webp",
    imageAlt: "GTC GO App featured image",
  },
  {
    category: "Trading",
    title:
      "Demo Trading Competition: Traders Turn $10,000 into Over $400,000 in Just One Week!",
    readTime: "5 min read",
    date: "Mar 20, 2026",
    dateIso: "2026-03-20",
    href: "/",
    imageSrc: "/home/one.webp",
    imageAlt: "Trading featured image",
  },
];

function BlogCard({
  category,
  title,
  readTime,
  date,
  dateIso,
  href,
  imageSrc,
  imageAlt,
}) {
  return (
    <article className="flex h-full flex-col gap-2.5 md:gap-3">
      <div
        className="relative w-full shrink-0 overflow-hidden rounded-[10px] bg-[#d1d1d1] md:rounded-xl"
        style={{ aspectRatio: "16 / 9" }}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : null}

        {/* Category on image top-left */}
        <span className="absolute left-3 top-3 inline-flex w-fit items-center rounded-full bg-secondary px-3 py-1 text-[11px] font-medium text-white md:px-3.5 md:py-1.5 md:text-xs">
          {category}
        </span>
      </div>

      <div className="mt-0.5 flex flex-1 flex-col gap-2 md:gap-2.5">
        <h3 className="HeadingH4 ">{title}</h3>

        <div className="mt-auto border-t border-[#2f2f2f]/25 pt-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 flex-1 items-center gap-2 text-[#2f2f2f]">
              <IconClock className="h-4 w-4 shrink-0 text-[#2f2f2f]" />
              <time
                dateTime={dateIso}
                className="TextSmall font-normal leading-snug"
              >
                {readTime} · {date}
              </time>
            </div>

            <Link
              href={href}
              className="TextSmall shrink-0 font-normal text-[#2f2f2f] underline decoration-[#2f2f2f] underline-offset-[3px] transition hover:opacity-80"
            >
              Read&nbsp;→
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function BlogsSection() {
  return (
    <section className="py-10 md:py-16">
      <div className="container">
        <div className="mx-auto mb-10 flex max-w-4xl flex-col items-center gap-6 text-center md:mb-14">
          <h2 className="HeadingH2">Latest Insights <span className="text-secondary"> & </span> Company Updates</h2>
          <p className="Text">
            Stay informed with the latest market insights, trading updates, and
            company news. Explore expert analysis, educational content, and
            important announcements from GTCFX.
          </p>
        </div>

        <div className="hidden max-w-6xl mx-auto items-stretch gap-6 md:grid md:grid-cols-3 md:gap-8">
          {posts.map((post, index) => (
            <BlogCard
              key={index}
              category={post.category}
              title={post.title}
              readTime={post.readTime}
              date={post.date}
              dateIso={post.dateIso}
              href={post.href}
              imageSrc={post.imageSrc}
              imageAlt={post.imageAlt}
            />
          ))}
        </div>

        <div className="md:hidden">
          <MobilePeekCarousel
            items={posts}
            trackClassName="-mx-4 px-4"
            renderItem={(post) => (
              <BlogCard
                category={post.category}
                title={post.title}
                readTime={post.readTime}
                date={post.date}
                dateIso={post.dateIso}
                href={post.href}
                imageSrc={post.imageSrc}
                imageAlt={post.imageAlt}
              />
            )}
          />
        </div>
      </div>
    </section>
  );
}