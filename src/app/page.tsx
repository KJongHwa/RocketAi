import Image from "next/image";
import topImage from "@/public/image/top.png";
import middleImage from "@/public/image/middle.png";
import bottomImage from "@/public/image/bottom.png";
import { SaJuMockData } from "./data/SaJuMockData";
import SaJuTable from "./components/SaJuTable/SaJuTable";

export default function Home() {
  const data = SaJuMockData;
  return (
    <div className="mx-auto max-w-md bg-[#F3F2EF] pb-3">
      <div className="relative">
        <Image
          src={topImage}
          alt="나의 사주 팔자"
          priority
          width={750}
          height={1547}
          className="w-full h-auto"
        />
        <p
          className="absolute text-center text-[#424242] text-base font-normal top-[85.5%] left-[5%] w-3/5"
          style={{
            fontSize: "clamp(1px, 4vw, 16px)",
            lineHeight: "clamp(1.5px, 6vw, 24px)",
          }}
        >
          이제 본격적으로
          <br />
          {data.meta.lastName}님의 사주팔자를
          <br />
          분석해볼 차례네요.
        </p>
      </div>
      <Image
        src={middleImage}
        alt="청월아씨가 사주 풀이하는 장면"
        priority
        width={702}
        height={570}
        className="w-full h-auto mb-[-20%]"
      />
      <div className="relative">
        <Image
          src={bottomImage}
          alt="표를 보여주는 청월아씨"
          priority
          width={750}
          height={860}
          className="w-full h-auto mb-[-5%]"
        />
        <p
          className="absolute text-center text-[#424242] text-base font-normal top-[13.5%] left-[5%] w-[66%]"
          style={{
            fontSize: "clamp(1px, 4vw, 16px)",
            lineHeight: "clamp(1.5px, 6vw, 24px)",
          }}
        >
          제가 {data.meta.lastName}님의 사주를
          <br />
          보기 쉽게 표로 정리했어요
        </p>
      </div>
      <SaJuTable data={data} />
    </div>
  );
}
