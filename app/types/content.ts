import type { ReactNode } from "react";

export type StackItem = {
  icon: string | string[];
  name: string | string[];
  usage: string | string[];
};

export type FootnoteItem = {
  n: number;
  text: ReactNode;
};

export type ContentMetadata = {
  name: string;
  description: string;
  title: ReactNode;
  link?: string;
  stack?: StackItem[];
};
