import { ReactNode } from "react";

interface BlogPostSchemaProps {
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
  content: string;
}

export function BlogPostSchema({
  title,
  description,
  author,
  date,
  readTime,
  slug,
  content,
}: BlogPostSchemaProps): ReactNode {
  let isoDate: string;
  try {
    const d = new Date(date);
    isoDate = !isNaN(d.getTime()) ? d.toISOString() : new Date().toISOString();
  } catch {
    isoDate = new Date().toISOString();
  }

  const parsedReadTime = parseInt(readTime.split(" ")[0]) || 5;
  const baseUrl = "https://lumina.mx"; // Update with your domain

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    author: {
      "@type": "Organization",
      name: author,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    datePublished: isoDate,
    dateModified: isoDate,
    timeRequired: `PT${parsedReadTime}M`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${slug}`,
    },
    keywords: "B2B, ventas, mexico, empresas",
    articleBody: content.substring(0, 1000), // First 1000 chars
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface WebPageSchemaProps {
  title: string;
  description: string;
}

export function WebPageSchema({
  title,
  description,
}: WebPageSchemaProps): ReactNode {
  const baseUrl = "https://lumina.mx";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: title,
    description: description,
    url: baseUrl,
    searchAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/blog?search={search_term_string}`,
      },
      query_input: "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
