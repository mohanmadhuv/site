"use client";

import Link from "next/link";
import { useLayoutEffect, useState } from "react";

type Heading = { id: string; text: string };

export default function TableOfContents({
  containerId,
  titleId,
}: {
  containerId: string;
  titleId: string;
}) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [top, setTop] = useState<number | null>(null);

  useLayoutEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect -- reads DOM produced by MDX children, no derivable prop/state alternative
    setHeadings(
      Array.from(container.querySelectorAll("h2")).map((el) => ({
        id: el.id,
        text: el.textContent ?? "",
      }))
    );

    const title = document.getElementById(titleId);
    if (title) {
      setTop(title.getBoundingClientRect().top + window.scrollY);
    }
  }, [containerId, titleId]);

  if (headings.length === 0 || top === null) return null;

  return (
    <nav
      className="hidden lg:flex flex-col gap-[24px] fixed left-[80px] w-[200px]"
      style={{ top }}
    >
      <Link href="/" className="type-caption hover-transition hover:text-black">
        ↩ Back
      </Link>
      <div className="flex flex-col gap-[8px]">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className="type-caption hover-transition hover:text-black"
          >
            {heading.text}
          </a>
        ))}
      </div>
    </nav>
  );
}
