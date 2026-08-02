import type { MDXComponents } from "mdx/types";
import Media from "@/app/components/Media";

export function useMDXComponents(): MDXComponents {
  return {
    p: ({ children }) => (
      <p className="type-body leading-[1.618]">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="type-heading leading-[1.618] mt-[-16px] pt-[32px]">{children}</h2>
    ),
    a: ({ children, ...props }) => (
      <a {...props} className="type-link hover-transition hover:text-black">
        {children}
      </a>
    ),
    Media,
  };
}
