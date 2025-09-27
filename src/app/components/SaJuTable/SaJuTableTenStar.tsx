import { SaJuColumn } from "@/app/types/SaJuData.type";

interface SaJuTableTenStarProps {
  titleCn: string;
  titleKr: string;
  columns: SaJuColumn[];
  type: "tenStar" | "branchTenStar";
}

export default function SaJuTableTenStar({
  titleCn,
  titleKr,
  columns,
  type,
}: SaJuTableTenStarProps) {
  return (
    <tr className="border-[#000000] border-r-[1.05px] border-t-[1.05px]">
      <td className="text-center border-[#000000] border-r-[1.05px] pt-[clamp(1px,2vw,8px)] pb-[clamp(1px,2vw,8px)]">
        <p
          className="text-[#000000] font-normal"
          style={{
            fontSize: "clamp(1px, 3vw, 12px)",
            lineHeight: "clamp(1px, 4vw, 16px)",
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
            className="text-center border-x-[0.49px] border-[#8A8A8A] pt-[clamp(1px,2vw,8px)] pb-[clamp(1px,2vw,8px)]"
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
