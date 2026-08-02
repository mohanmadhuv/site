import Link from "next/link";
import type { ContentMetadata } from "@/app/types/content";

export default function DetailPageLayout({
  metadata,
  children,
}: {
  metadata: ContentMetadata;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white pt-[120px] pb-[120px] flex flex-col">
      <Link href="/" className="flex flex-col">
        <span className="type-title">Mohan Madhuv</span>
        <span className="type-subtitle">Designer + Engineer</span>
      </Link>
      <div className="flex flex-col gap-[32px] mt-[120px]">
        <p className="type-heading leading-[1.618]">{metadata.title}</p>
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
        {children}
      </div>
    </main>
  );
}
