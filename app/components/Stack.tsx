import { Fragment } from "react";
import Image from "next/image";
import type { StackItem } from "@/app/types/content";

export default function Stack({ items }: { items: StackItem[] }) {
  return (
    <div className="grid grid-cols-[max-content_1fr] gap-x-[64px]">
      <div className="pb-[8px] pl-[32px]">
        <span className="type-caption whitespace-nowrap">Tool</span>
      </div>
      <div className="pb-[8px]">
        <span className="type-caption">Usage</span>
      </div>
      {items.map((item) => {
        const tools = Array.isArray(item.icon)
          ? item.icon.map((icon, i) => ({
              icon,
              name: Array.isArray(item.name) ? item.name[i] : item.name,
            }))
          : [{ icon: item.icon as string, name: item.name as string }];
        const usages = Array.isArray(item.usage) ? item.usage : [item.usage];
        // More tools than usages: the shared usage centers on the tool stack.
        // More usages than tools (or equal): tools stay top-aligned, as before.
        const centerUsage = tools.length > usages.length;

        return (
          <Fragment key={tools.map((tool) => tool.name).join("-")}>
            <div className="col-span-2 border-t border-stroke" />
            <div className="py-[10px]">
              <div className="flex flex-col gap-[8px]">
                {tools.map((tool) => (
                  <div key={tool.name} className="flex items-center gap-[16px]">
                    <Image
                      src={tool.icon}
                      alt=""
                      width={16}
                      height={16}
                      className="w-[16px] h-[16px] shrink-0 object-contain"
                    />
                    <span className="type-body whitespace-nowrap">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`py-[10px] flex flex-col gap-[4px]${centerUsage ? " justify-center" : ""}`}>
              {usages.map((usage) => (
                <span key={usage} className="type-caption">{usage}</span>
              ))}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
