"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";

type Entry = { role: string; company: string | null; slug: string };
type YearGroup = { year: string; entries: Entry[] };
type HoverState =
  | { kind: "year"; year: string }
  | { kind: "entry"; key: string }
  | null;

const work: YearGroup[] = [
  {
    year: "2026",
    entries: [{ role: "Frontier LLMs", company: "Mercor", slug: "mercor-frontier-llms" }],
  },
  {
    year: "2025",
    entries: [{ role: "Freelance", company: null, slug: "freelance-2025" }],
  },
  {
    year: "2024",
    entries: [
      { role: "Gold", company: "Moneyview", slug: "moneyview-gold" },
      { role: "Intranet", company: "Moneyview", slug: "moneyview-intranet" },
    ],
  },
  {
    year: "2023",
    entries: [{ role: "Lending", company: "Moneyview", slug: "moneyview-lending" }],
  },
  {
    year: "2022",
    entries: [
      { role: "Design Systems", company: "Moneyview", slug: "moneyview-design-systems" },
      { role: "Evaluations", company: "Scaler", slug: "scaler-evaluations" },
    ],
  },
  {
    year: "2021",
    entries: [{ role: "Web", company: "Purplemango", slug: "purplemango-web" }],
  },
  {
    year: "2020",
    entries: [{ role: "Web", company: "ThinkRobotics", slug: "thinkrobotics-web" }],
  },
  {
    year: "2019",
    entries: [{ role: "Freelance", company: null, slug: "freelance-2019" }],
  },
];

export default function Work() {
  const [hover, setHover] = useState<HoverState>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scrollTimeout: number;
    const disableHoverDuringScroll = () => {
      const list = listRef.current;
      if (!list) return;
      list.style.pointerEvents = "none";
      window.clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        list.style.pointerEvents = "";
      }, 150);
    };
    window.addEventListener("scroll", disableHoverDuringScroll, { passive: true });
    window.addEventListener("wheel", disableHoverDuringScroll, { passive: true });
    window.addEventListener("touchmove", disableHoverDuringScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", disableHoverDuringScroll);
      window.removeEventListener("wheel", disableHoverDuringScroll);
      window.removeEventListener("touchmove", disableHoverDuringScroll);
      window.clearTimeout(scrollTimeout);
    };
  }, []);

  const activeYear =
    hover?.kind === "year"
      ? hover.year
      : hover?.kind === "entry"
        ? hover.key.split("-")[0]
        : null;

  return (
    <section className="flex flex-col gap-4">
      <span className="type-heading">Work</span>
      <div
        ref={listRef}
        className="grid grid-cols-[4rem_auto] gap-x-8 -my-2"
        onMouseLeave={() => setHover(null)}
      >
        {work.flatMap(({ year, entries }) =>
          entries.map((entry, entryIndex) => {
            const key = `${year}-${entry.role}`;
            const isHovering = hover !== null;
            const yearLabelActive = !isHovering || activeYear === year;
            const entryActive =
              !isHovering ||
              (hover?.kind === "entry" && hover.key === key) ||
              (hover?.kind === "year" && hover.year === year);

            return (
              <Fragment key={key}>
                <span
                  className={`type-caption hover-transition py-2 ${yearLabelActive ? "opacity-100" : "opacity-30"}`}
                  onMouseEnter={
                    entryIndex === 0
                      ? () => setHover({ kind: "year", year })
                      : undefined
                  }
                >
                  {entryIndex === 0 ? year : ""}
                </span>
                <Link
                  href={`/work/${entry.slug}`}
                  className={`type-body hover-transition block w-full py-2 ${entryActive ? "opacity-100" : "opacity-30"}`}
                  onMouseEnter={() => setHover({ kind: "entry", key })}
                >
                  {entry.role}
                  {entry.company && (
                    <span className="type-caption"> @ {entry.company}</span>
                  )}
                </Link>
              </Fragment>
            );
          })
        )}
      </div>
    </section>
  );
}
