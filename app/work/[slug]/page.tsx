import type { ContentMetadata } from "@/app/types/content";
import DetailPageLayout from "@/app/components/DetailPageLayout";

const slugs = [
  "mercor-frontier-llms",
  "freelance-2025",
  "moneyview-gold",
  "moneyview-intranet",
  "moneyview-lending",
  "moneyview-design-systems",
  "scaler-evaluations",
  "purplemango-web",
  "thinkrobotics-web",
  "freelance-2019",
];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mod = await import(`@/content/work/${slug}.mdx`);
  const Post = mod.default as React.ComponentType;
  const metadata = mod.metadata as ContentMetadata;

  return (
    <DetailPageLayout metadata={metadata}>
      <Post />
    </DetailPageLayout>
  );
}
