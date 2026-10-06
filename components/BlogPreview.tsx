"use client";

import Link from "next/link";

interface BlogPost {
  image: string;
  title: string;
  excerpt: string;
  slug: string;
}

interface BlogPreviewProps {
  posts: BlogPost[];
  eyebrow?: string;
}

export default function BlogPreview({ posts, eyebrow }: BlogPreviewProps) {
  return (
    <section
      className="relative overflow-hidden bg-[#b6905a] px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32"
      style={{
        backgroundImage: "linear-gradient(rgba(194, 157, 103, 0.78), rgba(194, 157, 103, 0.78)), url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=2200&q=85')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="relative z-10 container-wide mx-auto">
        <div className="mb-16 flex items-center gap-5 md:mb-20">
          <div className="h-px flex-1 bg-white/80" />
          <div className="shrink-0 text-center">
            {eyebrow && <p className="mb-3 font-display text-xl font-semibold italic text-white md:text-2xl">{eyebrow}</p>}
            <h2 className="font-display text-4xl font-semibold text-white md:text-6xl">Travel Notes</h2>
          </div>
          <div className="h-px flex-1 bg-white/80" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {posts.map((post) => (
            <article key={post.slug} className="group bg-white shadow-lg">
              <Link href={`/travel-notes/${post.slug}/`} className="flex h-full flex-col">
                <div className="relative h-56 overflow-hidden md:h-64">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col px-5 pb-7 pt-6 text-center md:px-6">
                  <h3 className="mb-4 font-display text-2xl font-semibold leading-tight text-[#1A1A1A] transition-colors group-hover:text-nusafiri-gold md:text-3xl">
                    {post.title}
                  </h3>
                  <p className="mb-6 line-clamp-5 text-sm leading-relaxed text-nusafiri-muted">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto text-xs font-semibold text-nusafiri-gold underline decoration-nusafiri-gold underline-offset-4">
                    Explore more...
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
