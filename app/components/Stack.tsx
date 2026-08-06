import { Fragment } from "react";
import Image from "next/image";
import type { StackItem } from "@/app/types/content";

export default function Stack({ items }: { items: StackItem[] }) {
  return (
    <div className="grid grid-cols-[max-content_1fr] gap-x-[32px]">
      <div className="pb-[8px] pl-[32px]">
        <span className="type-caption whitespace-nowrap">Tool</span>
      </div>
      <div className="pb-[8px]">
        <span className="type-caption">Usage</span>
      </div>
      {items.map((item) => (
        <Fragment key={item.name}>
          <div className="col-span-2 border-t border-stroke" />
          <div className="py-[10px]">
            <div className="flex items-center gap-[16px]">
              <Image
                src={item.icon}
                alt=""
                width={16}
                height={16}
                className="w-[16px] h-[16px] shrink-0 object-contain"
              />
              <span className="type-body whitespace-nowrap">{item.name}</span>
            </div>
          </div>
          <div className="py-[10px]">
            <span className="type-caption">{item.usage}</span>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
