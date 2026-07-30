"use client";

import { useState } from "react";

type Entry = { role: string; company: string | null };
type YearGroup = { year: string; entries: Entry[] };

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
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const hoveredYear = hoveredKey ? hoveredKey.split("-")[0] : null;

  return (
    <section className="flex flex-col gap-8">
      <span className="type-heading">Work</span>
      {work.flatMap(({ year, entries }) =>
        entries.map((entry, entryIndex) => {
          const key = `${year}-${entry.role}`;
          const isHovering = hoveredKey !== null;
          const yearActive = !isHovering || hoveredYear === year;
          const entryActive = !isHovering || hoveredKey === key;

          return (
            <div
              key={key}
              className="flex gap-8"
              onMouseEnter={() => setHoveredKey(key)}
              onMouseLeave={() => setHoveredKey(null)}
            >
              <span
                className={`type-caption w-16 shrink-0 hover-transition ${yearActive ? "opacity-100" : "opacity-30"}`}
              >
                {entryIndex === 0 ? year : ""}
              </span>
              <span
                className={`type-body hover-transition ${entryActive ? "opacity-100" : "opacity-30"}`}
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
