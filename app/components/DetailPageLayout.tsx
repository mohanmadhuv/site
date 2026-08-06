import Link from "next/link";
import type { ContentMetadata, FootnoteItem } from "@/app/types/content";
import Stack from "@/app/components/Stack";
import { Footnotes, Footnote } from "@/app/components/Footnotes";
// import TableOfContents from "@/app/components/TableOfContents";

export default function DetailPageLayout({
  metadata,
  footnotes,
  children,
}: {
  metadata: ContentMetadata;
  footnotes?: FootnoteItem[];
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white pt-[120px] pb-[120px] flex flex-col">
      {/* <TableOfContents containerId="article-content" titleId="project-title" /> */}
      <Link href="/" className="flex flex-col">
        <span className="type-title">Mohan Madhuv</span>
        <span className="type-subtitle">Designer + Engineer</span>
      </Link>
      <div className="flex flex-col gap-[32px] mt-[120px]">
        <div className="flex flex-col gap-[16px]">
          <p id="project-title" className="type-heading leading-[1.618]">{metadata.title}</p>
          {metadata.link && (
            <a
              href={`https://${metadata.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="type-link self-start hover-transition hover:text-black"
            >
              {metadata.link}
            </a>
          )}
        </div>
        <div id="article-content" className="flex flex-col gap-[16px]">
          {children}
        </div>
        {metadata.stack && metadata.stack.length > 0 && (
          <div className="flex flex-col gap-[16px]">
            <span className="type-heading">Stack</span>
            <Stack items={metadata.stack} />
          </div>
        )}
        {footnotes && footnotes.length > 0 && (
          <Footnotes>
            {footnotes.map((footnote) => (
              <Footnote key={footnote.n} n={footnote.n} text={footnote.text} />
            ))}
          </Footnotes>
        )}
      </div>
    </main>
  );
}
