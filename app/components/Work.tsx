"use client";

import { useState } from "react";

type Entry = { role: string; company: string | null };
type YearGroup = { year: string; entries: Entry[] };
type HoverState =
  | { kind: "year"; year: string }
  | { kind: "entry"; key: string }
  | null;

const work: YearGroup[] = [
  { year: "2026", entries: [{ role: "Frontier LLMs", company: "Mercor" }] },
  { year: "2025", entries: [{ role: "Freelance", company: null }] },
  {
    year: "2024",
    entries: [
      { role: "Gold", company: "Moneyview" },
      { role: "Intranet", company: "Moneyview" },
    ],
  },
  { year: "2023", entries: [{ role: "Lending", company: "Moneyview" }] },
  {
    year: "2022",
    entries: [
      { role: "Design Systems", company: "Moneyview" },
      { role: "Evaluations", company: "Scaler" },
    ],
  },
  { year: "2021", entries: [{ role: "Web", company: "Purplemango" }] },
  { year: "2020", entries: [{ role: "Web", company: "ThinkRobotics" }] },
  { year: "2019", entries: [{ role: "Freelance", company: null }] },
];

export default function Work() {
  const [hover, setHover] = useState<HoverState>(null);

  const activeYear =
    hover?.kind === "year"
      ? hover.year
      : hover?.kind === "entry"
        ? hover.key.split("-")[0]
        : null;

  return (
    <section className="flex flex-col gap-4">
      <span className="type-heading">Work</span>
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
            <div key={key} className="flex gap-8">
              <span
                className={`type-caption w-16 shrink-0 hover-transition ${yearLabelActive ? "opacity-100" : "opacity-30"}`}
                onMouseEnter={
                  entryIndex === 0
                    ? () => setHover({ kind: "year", year })
                    : undefined
                }
                onMouseLeave={
                  entryIndex === 0 ? () => setHover(null) : undefined
                }
              >
                {entryIndex === 0 ? year : ""}
              </span>
              <span
                className={`type-body hover-transition ${entryActive ? "opacity-100" : "opacity-30"}`}
                onMouseEnter={() => setHover({ kind: "entry", key })}
                onMouseLeave={() => setHover(null)}
              >
                {entry.role}
                {entry.company && (
                  <span className="type-caption"> @ {entry.company}</span>
                )}
              </span>
            </div>
          );
        })
      )}
    </section>
  );
}
