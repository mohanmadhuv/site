import Image from "next/image";

export default function Media({ src }: { src?: string }) {
  return (
    <div className="w-full h-[280px] bg-[#f5f4f4] border border-[#e3e3e2] rounded-[8px] overflow-clip relative shrink-0">
      {src && (
        <Image
          alt=""
          src={src}
          fill
          className="object-cover pointer-events-none"
        />
      )}
    </div>
  );
}
