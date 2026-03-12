import Link from "next/link";
import { CalendarIcon, UserIcon, TagIcon, ClockIcon } from "lucide-react";
import { BlogPostMeta } from "@/utils/blog";

export interface BlogPostCardProps extends BlogPostMeta {
  slug: string;
  description?: string;
}

export default function BlogPostCard(props: BlogPostCardProps) {
  const { slug, title, description, date, author, category, readTime } = props;

  const formattedDate = new Date(date).toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="bg-surface border border-borderDark rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <div className="flex flex-col h-full">
        {/* Category Badge */}
        <div className="mb-4 inline-flex w-fit">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-medium">
            <TagIcon size={14} />
            {category}
          </span>
        </div>

        {/* Title */}
        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
            {title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-white/60 mb-6 line-clamp-3 flex-grow">
          {description}
        </p>

        {/* Meta Information */}
        <div className="flex flex-wrap gap-4 text-sm text-white/50 border-t border-borderDark pt-4">
          <div className="flex items-center gap-2">
            <CalendarIcon size={16} />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <UserIcon size={16} />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon size={16} />
            <span>{readTime}</span>
          </div>
        </div>

        {/* Read More Link */}
        <Link
          href={`/blog/${slug}`}
          className="mt-6 inline-flex items-center font-semibold text-primary hover:gap-2 transition-all gap-1"
        >
          Leer artículo
          <span>→</span>
        </Link>
      </div>
    </article>
  );
}
