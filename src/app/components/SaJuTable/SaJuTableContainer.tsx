import Image from "next/image";
import { ReactNode } from "react";
import LayoutLeft from "@/public/image/layout_left.png";
import LayoutRight from "@/public/image/layout_right.png";

interface SaJuTableContainerProps {
  children: ReactNode;
}

export default function SaJuTableContainer({
  children,
}: SaJuTableContainerProps) {
  return (
    <div className="border-[3px] border-[#1B2F49] shadow-[0_4px_4px_rgba(0,0,0,0.25)] relative bg-[#F5F3EC] flex justify-center items-center flex-col ml-[clamp(2px,3vw,12px)] mr-[clamp(2px,3vw,12px)]">
      <span className="w-full border-[1px] border-[#2B557E] absolute top-[clamp(2px,2vw,8px)]" />
      <span className="w-full border-[1px] border-[#2B557E] absolute bottom-[clamp(2px,2vw,8px)]" />
      <span className="h-full border-[1px] border-[#2B557E] absolute left-[clamp(2px,2vw,8px)]" />
      <span className="h-full border-[1px] border-[#2B557E] absolute right-[clamp(2px,2vw,8px)]" />
      <Image
        src={LayoutLeft}
        alt="사주표 왼쪽 구름"
        width={56}
        height={38}
        className="absolute top-[clamp(1px,11vw,44px)] left-[clamp(1px,2.5vw,10px)] w-[clamp(1px,14vw,56px)]"
      />
      <Image
        src={LayoutRight}
        alt="사주표 오른쪽 구름"
        width={56}
        height={38}
        className="absolute top-[clamp(1px,6.5vw,26px)] right-[clamp(1px,2.5vw,10px)] w-[clamp(1px,14vw,56px)]"
      />
      {children}
    </div>
  );
}
