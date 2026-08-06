import Image from "next/image";

export default function Media({ src, caption }: { src?: string; caption?: string }) {
  return (
    <div className="flex flex-col mb-[16px]">
      <div className="w-full h-[280px] bg-[#f5f4f4] border border-stroke rounded-[8px] overflow-clip relative shrink-0">
        {src && (
          <Image
            alt=""
            src={src}
            fill
            className="object-cover pointer-events-none"
          />
        )}
      </div>
      <p className="type-caption text-center mt-[16px]">{caption}</p>
    </div>
  );
}
