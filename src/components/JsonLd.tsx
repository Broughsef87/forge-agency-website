/**
 * Renders a JSON-LD <script> tag. Server component — no client JS.
 * Pass any schema.org object (see src/lib/schema.ts).
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
