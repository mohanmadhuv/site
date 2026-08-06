export type StackItem = {
  icon: string;
  name: string;
  usage: string;
};

export type FootnoteItem = {
  n: number;
  text: string;
};

export type ContentMetadata = {
  name: string;
  description: string;
  title: string;
  link?: string;
  stack?: StackItem[];
};
