import { SaJuColumn } from "@/app/types/SaJuData.type";

interface SaJuTableTwelveProps {
  titleCn: string;
  titleKr: string;
  columns: SaJuColumn[];
  type: "twelveFortune" | "twelveGodKill";
}

export default function SaJuTableTwelve({
  titleCn,
  titleKr,
  columns,
  type,
}: SaJuTableTwelveProps) {
  return (
    <tr className="border-[#000000] border-r-[1.05px] border-t-[1.05px]">
      <td className="text-center border-[#000000] border-r-[1.05px] px-[clamp(1px,1vw,4px)]">
        <p
          className="text-[#000000] font-normal"
          style={{
            fontSize: "clamp(1px, 2.5vw, 10px)",
            lineHeight: "clamp(1px, 3.5vw, 14px)",
          }}
        >
          {titleCn}
        </p>
        <p
          className="text-[#000000] font-bold"
          style={{
            fontSize: "clamp(1px, 2vw, 8px)",
            lineHeight: "clamp(1px, 2vw, 8px)",
          }}
        >
          ({titleKr})
        </p>
      </td>
      {columns.map((col, index) => {
        const choice = col[type];
        return (
          <td
            key={index}
            className="text-center border-x-[0.49px] border-[#8A8A8A] py-[clamp(1px,2vw,8px)] bg-[#F9F9F9]"
          >
            <p
              className="text-[#000000] font-normal"
              style={{
                fontSize: "clamp(1px, 4vw, 16px)",
                lineHeight: "clamp(1px, 5vw, 20px)",
              }}
            >
              {choice.cn}
            </p>
            <p
              className="text-[#000000] font-bold"
              style={{
                fontSize: "clamp(1px, 2.5vw, 10px)",
                lineHeight: "clamp(1px, 2.5vw, 10px)",
              }}
            >
              ({choice.kr})
            </p>
          </td>
        );
      })}
    </tr>
  );
}
