import type { ContentMetadata, FootnoteItem } from "@/app/types/content";
import DetailPageLayout from "@/app/components/DetailPageLayout";

const slugs = [
  "fieldquote",
  "pop",
  "gc-contract-intelligence",
];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mod = await import(`@/content/projects/${slug}.mdx`);
  const Post = mod.default as React.ComponentType;
  const metadata = mod.metadata as ContentMetadata;
  const footnotes = mod.footnotes as FootnoteItem[] | undefined;

  return (
    <DetailPageLayout metadata={metadata} footnotes={footnotes}>
      <Post />
    </DetailPageLayout>
  );
}
