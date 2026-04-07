import { ReactNode } from "react";

interface WebPageSchemaProps {
  title: string;
  description: string;
}

export function WebPageSchema({
  title,
  description,
}: WebPageSchemaProps): ReactNode {
  const baseUrl = "https://gestory.com";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: title,
    description: description,
    url: baseUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
