import type { ReactNode } from "react";

export type StackItem = {
  icon: string;
  name: string;
  usage: string;
};

export type FootnoteItem = {
  n: number;
  text: ReactNode;
};

export type ContentMetadata = {
  name: string;
  description: string;
  title: string;
  link?: string;
  stack?: StackItem[];
};
