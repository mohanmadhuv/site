export function Footnotes({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[32px] mt-[16px]">
      <hr className="w-full border-t border-stroke" />
      <ol className="flex flex-col gap-[16px]">{children}</ol>
    </div>
  );
}

export function Footnote({ n, text }: { n: number; text: React.ReactNode }) {
  return (
    <li
      id={`footnote-${n}`}
      className="type-caption leading-[1.618] pl-[14px]"
      style={{ textIndent: "-14px" }}
    >
      <a href={`#footnote-ref-${n}`} className="hover-transition hover:text-black">
        <sup>{String(n).padStart(2, "0")}</sup>
      </a>{" "}
      {text}
    </li>
  );
}

export function FootnoteRef({ n }: { n: number }) {
  return (
    <a
      id={`footnote-ref-${n}`}
      href={`#footnote-${n}`}
      className="type-caption hover-transition hover:text-black"
    >
      <sup>{String(n).padStart(2, "0")}</sup>
    </a>
  );
}
